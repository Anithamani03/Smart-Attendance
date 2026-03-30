@echo off
REM Smart Attendance System - Backend Startup

cd backend

echo.
echo ===================================
echo Starting Smart Attendance Backend
echo ===================================
echo.

REM Build and run backend
mvn spring-boot:run

pause
