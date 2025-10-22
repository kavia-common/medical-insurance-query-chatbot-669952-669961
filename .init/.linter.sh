#!/bin/bash
cd /tmp/kavia/workspace/code-generation/medical-insurance-query-chatbot-669952-669961/chatbot_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

