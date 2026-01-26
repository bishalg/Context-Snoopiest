
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export function FutureRadar() {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (!chartRef.current) return;

        // Destroy previous instance if it exists
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');
        if (!ctx) return;

        const isDark = document.documentElement.classList.contains('dark');
        const textColor = isDark ? '#94a3b8' : '#64748b';
        const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';

        chartInstance.current = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Sentiment Alignment', 'Continuity Police', 'Style Transfer', 'Interactive Pivots'],
                datasets: [
                    {
                        label: 'Technical Difficulty (1-10)',
                        data: [6, 9, 5, 10],
                        borderColor: '#7c3aed',
                        backgroundColor: 'rgba(124, 58, 237, 0.2)',
                        pointBackgroundColor: '#7c3aed',
                        pointBorderColor: '#fff',
                        borderWidth: 2,
                    },
                    {
                        label: 'Creative Impact (1-10)',
                        data: [9, 6, 8, 10],
                        borderColor: '#0ea5e9',
                        backgroundColor: 'rgba(14, 165, 233, 0.2)',
                        pointBackgroundColor: '#0ea5e9',
                        pointBorderColor: '#fff',
                        borderWidth: 2,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: { color: gridColor },
                        grid: { color: gridColor },
                        pointLabels: {
                            color: textColor,
                            font: {
                                size: 11,
                                weight: 'bold'
                            }
                        },
                        ticks: {
                            display: false,
                            stepSize: 2
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: textColor,
                            font: { size: 10 }
                        }
                    }
                }
            }
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-black/5 dark:border-white/10 h-[400px]">
            <h3 className="font-bold text-slate-800 dark:text-white mb-4 text-center">Technical Complexity Analysis</h3>
            <div className="h-[300px]">
                <canvas ref={chartRef}></canvas>
            </div>
            <p className="text-[10px] text-center text-slate-400 dark:text-slate-500 mt-4 leading-tight italic">
                Comparing the Technical Difficulty vs. Creative Impact of upcoming modules.
            </p>
        </div>
    );
}
