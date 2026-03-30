#!/bin/bash
# Smart Attendance System - Setup Script for Linux/Mac

echo ""
echo "==================================="
echo "Smart Attendance System Setup"
echo "==================================="
echo ""

# Check if Java is installed
if ! command -v java &> /dev/null
then
    echo "[ERROR] Java is not installed! Please install Java JDK 17 or higher."
    exit 1
fi
echo "[OK] Java is installed"

# Check if Maven is installed
if ! command -v mvn &> /dev/null
then
    echo "[WARNING] Maven is not found. Backend build may fail."
else
    echo "[OK] Maven is installed"
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "[ERROR] Node.js is not installed! Please install Node.js v16 or higher."
    exit 1
fi
echo "[OK] Node.js is installed"

echo ""
echo "==================================="
echo "Prerequisites Check Complete!"
echo "==================================="
echo ""
echo "Next steps:"
echo "1. Ensure MySQL is running"
echo "2. Run ./setup-database.sh to create database"
echo "3. Update backend credentials in application.properties"
echo "4. Run ./start-all.sh to start both backend and frontend"
echo ""
