import puppeteer from 'puppeteer';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs/promises';
import path from 'path';
import { spawn, ChildProcess } from 'child_process';
import { SIDEBAR } from '../src/config';

const BASE_URL = 'http://localhost:4321/Context-Snoopiest';
const OUTPUT_PATH = path.join(process.cwd(), 'public/whitepaper.pdf');

// Helper to wait for server
const waitForServer = async (url: string, timeout = 10000) => {
    const start = Date.now();
    while (Date.now() - start < timeout) {
        try {
            const res = await fetch(url);
            if (res.ok) return true;
        } catch (e) {
            // ignore
        }
        await new Promise(r => setTimeout(r, 500));
    }
    return false;
};

async function generatePDF() {
    console.log('🚀 Starting PDF Generation...');

    let serverProcess: ChildProcess | null = null;
    let serverStartedByScript = false;

    // 1. Check if server is running
    const isServerUp = await waitForServer(BASE_URL, 1000);

    if (!isServerUp) {
        console.log('⚠️ Server seems down. Starting `npm run preview`...');
        serverProcess = spawn('npm', ['run', 'preview'], {
            stdio: 'inherit',
            shell: true,
            detached: false
        });
        serverStartedByScript = true;

        console.log('⏳ Waiting for server to be ready...');
        const ready = await waitForServer(BASE_URL, 15000);
        if (!ready) {
            console.error('❌ Failed to start server. Please run `npm run preview` manually.');
            if (serverProcess) serverProcess.kill();
            process.exit(1);
        }
        console.log('✅ Server is up!');
    } else {
        console.log('✅ Server is already running.');
    }

    try {
        // 2. Flatten the sidebar to get a linear list of URLs
        // @ts-ignore
        const pages = SIDEBAR.filter(item => item.link).map(item => ({
            url: `${BASE_URL}${item.link.replace(/\/$/, '')}`,
            title: item.text
        }));

        console.log(`📑 Found ${pages.length} pages to process.`);

        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();

        // Create a new PDF document to merge into
        const mergedPdf = await PDFDocument.create();

        for (const [index, p] of pages.entries()) {
            console.log(`[${index + 1}/${pages.length}] Crawling: ${p.title} (${p.url})`);

            try {
                // NetworkIdle0 ensures all content/fonts loaded
                await page.goto(p.url, { waitUntil: 'networkidle0' });

                // Generate PDF for this page with styles applied
                const pdfBuffer = await page.pdf({
                    format: 'A4',
                    printBackground: true, // Required for graphics/boxes
                    margin: {
                        top: '20mm',
                        bottom: '20mm',
                        left: '20mm',
                        right: '20mm'
                    }
                });

                // Load the generated PDF
                const subPdf = await PDFDocument.load(pdfBuffer);

                // Copy pages to merged PDF
                const copiedPages = await mergedPdf.copyPages(subPdf, subPdf.getPageIndices());
                copiedPages.forEach((page) => mergedPdf.addPage(page));

            } catch (e) {
                console.error(`❌ Failed to process ${p.title}:`, e);
            }
        }

        await browser.close();

        // Add Page Numbers
        const helveticaFont = await mergedPdf.embedFont(StandardFonts.Helvetica);
        const docPages = mergedPdf.getPages();
        for (const [i, page] of docPages.entries()) {
            const { width } = page.getSize();
            page.drawText(`${i + 1}`, {
                x: width - 30,
                y: 20,
                size: 10,
                font: helveticaFont,
                color: rgb(0, 0, 0),
            });
        }

        // Save the merged PDF
        const mergedPdfBytes = await mergedPdf.save();
        await fs.writeFile(OUTPUT_PATH, mergedPdfBytes);

        console.log(`✅ PDF Generated Successfully at: ${OUTPUT_PATH}`);

    } catch (error) {
        console.error('❌ PDF Generation Failed:', error);
    } finally {
        if (serverStartedByScript && serverProcess) {
            console.log('🛑 Stopping temporary server...');
            serverProcess.kill();
            // Force exit to ensure process doesn't hang
            process.exit(0);
        }
    }
}

generatePDF().catch(console.error);
