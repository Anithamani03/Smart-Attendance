#!/bin/bash
# Smart Attendance System - Frontend Startup

cd frontend

echo ""
echo "==================================="
echo "Starting Smart Attendance Frontend"
echo "==================================="
echo ""

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Start frontend
npm start
