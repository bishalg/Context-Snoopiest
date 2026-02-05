#!/bin/bash

echo "📄 [Pre-commit] Auto-generating PDFs..."

# Start preview server in background
# Use nohup to detach it slightly better, though standard & is usually fine in hooks
npx astro preview --port 4321 > /dev/null 2>&1 &
SERVER_PID=$!

# Wait for server to come up
echo "⏳ Waiting for server (PID: $SERVER_PID)..."
sleep 5

# Check if server processes is still running
if ! ps -p $SERVER_PID > /dev/null; then
  echo "⚠️  Server failed to start or exited early."
  exit 1
fi

# Run Generation
npm run pdf:all
GEN_RESULT=$?

if [ $GEN_RESULT -eq 0 ]; then
    npm run pdf:merge
    MERGE_RESULT=$?
    
    if [ $MERGE_RESULT -eq 0 ]; then
        echo "✅ PDFs generated successfully."
        echo "Git Adding PDF files..."
        git add public/pdf public/whitepaper.pdf
    else
        echo "❌ PDF Merge failed."
        kill $SERVER_PID
        exit $MERGE_RESULT
    fi
else
    echo "❌ PDF Generation failed."
    kill $SERVER_PID
    exit $GEN_RESULT
fi

# Cleanup
kill $SERVER_PID
exit 0
