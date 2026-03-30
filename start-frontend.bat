@echo off
REM Smart Attendance System - Frontend Startup

cd frontend

echo.
echo ===================================
echo Starting Smart Attendance Frontend
echo ===================================
echo.

REM Install dependencies if node_modules doesn't exist
if not exist node_modules (
    echo Installing dependencies...
    call npm install
)

REM Start frontend
call npm start

pause
