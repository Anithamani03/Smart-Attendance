@echo off
REM Smart Attendance System - Windows Setup Script

echo.
echo ===================================
echo Smart Attendance System Setup
echo ===================================
echo.

REM Check if Java is installed
where java >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Java is not installed! Please install Java JDK 17 or higher.
    pause
    exit /b 1
)
echo [OK] Java is installed

REM Check if Maven is installed
where mvn >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [WARNING] Maven is not found in PATH. Backend build may fail.
    echo Please install Maven or add it to PATH.
) else (
    echo [OK] Maven is installed
)

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed! Please install Node.js v16 or higher.
    pause
    exit /b 1
)
echo [OK] Node.js is installed

REM Check if MySQL is running
netstat -an | findstr :3306 >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [WARNING] MySQL may not be running on port 3306
    echo Please ensure MySQL is running before continuing.
)

echo.
echo ===================================
echo Prerequisites Check Complete!
echo ===================================
echo.
echo Next steps:
echo 1. Ensure MySQL is running
echo 2. Run database\schema.sql to create database
echo 3. Update backend credentials in application.properties
echo 4. Run startup-all.bat to start both backend and frontend
echo.
pause
