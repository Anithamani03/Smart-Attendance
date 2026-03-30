@echo off
REM Smart Attendance System - Database Setup

echo.
echo ===================================
echo Setting up Smart Attendance Database
echo ===================================
echo.

REM Check if MySQL is installed
where mysql >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] MySQL command line is not found!
    echo Please ensure MySQL is installed and added to PATH.
    pause
    exit /b 1
)

set /p DB_PASSWORD="Enter your MySQL root password: "

echo Running database schema...
mysql -u root -p%DB_PASSWORD% < database\schema.sql

if %ERRORLEVEL% EQU 0 (
    echo.
    echo [SUCCESS] Database created successfully!
    echo.
    echo Sample Credentials:
    echo - Admin Email: admin@attendance.com (Password: admin123)
    echo - Student Email: student1@attendance.com (Password: student123)
    echo.
) else (
    echo [ERROR] Database setup failed!
    echo Please check your MySQL password and try again.
)
pause
