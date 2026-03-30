# ⚡ Quick Start Guide - Smart Attendance System

Get the Smart Attendance System up and running in **5 minutes**!

## 🚀 Quick Setup (Windows)

### Step 1: Check Prerequisites
```bash
double-click check-prerequisites.bat
```

### Step 2: Setup Database

Open Command Prompt as Administrator:
```bash
# Copy the entire content from database/schema.sql
# Open MySQL Workbench or MySQL command line
# Paste and execute the SQL script
```

Alternatively, if you have MySQL CLI:
```bash
mysql -u root -p < database\schema.sql
```

**Enter your MySQL root password when prompted.**

### Step 3: Update Backend Configuration

Edit: `backend\src\main\resources\application.properties`

Change these lines to match your MySQL setup:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/smart_attendance_db
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD  # Change this
```

### Step 4: Start Backend

Open **Command Prompt** or **PowerShell** in the project folder:

```bash
cd backend
mvn spring-boot:run
```

Wait for message: `Tomcat started on port(s): 8080`

✅ **Backend is now running on http://localhost:8080**

### Step 5: Start Frontend

Open **another Command Prompt** in the project folder:

```bash
cd frontend
npm install  # Run this only first time
npm start
```

✅ **Frontend will open on http://localhost:3000**

---

## 🎯 Test the Application

### 1. Admin Access
- URL: http://localhost:3000 → Click "Admin Login"
- **Email:** admin@attendance.com
- **Password:** admin123

### 2. Student Access
- URL: http://localhost:3000 → Click "Student Login"
- **Email:** student1@attendance.com
- **Password:** student123

### 3. New Student Registration
- URL: http://localhost:3000 → Click "Sign Up"
- Create a new account

---

## 📱 Features to Try

### Student Dashboard
✅ View monthly attendance
✅ Mark attendance (QR or Manual)
✅ See attendance percentage
✅ View status (Good/Warning/Alert)

### Admin Dashboard
✅ View all students
✅ Filter by status
✅ See attendance analytics
✅ Monitor alerts

---

## ⚠️ Common Issues & Solutions

### Backend won't start
```
Error: Could not connect to database
```
**Solution:**
- Check if MySQL is running
- Verify credentials in `application.properties`
- Ensure database `smart_attendance_db` exists

### Frontend can't connect to backend
```
Error: Network error in API call
```
**Solution:**
- Check if backend is running on port 8080
- Clear browser cache (Ctrl+Shift+Delete)
- Check CORS settings in backend

### Port already in use
```
Error: Port 8080 (or 3000) already in use
```
**Solution - Backend:**
Change in `application.properties`:
```properties
server.port=8081
```

**Solution - Frontend:**
```bash
SET PORT=3001 && npm start  # Windows
PORT=3001 npm start  # Mac/Linux
```

---

## 📊 Sample Data Loaded

### Students
| Email | Password | Roll | Department |
|-------|----------|------|-----------|
| student1@attendance.com | student123 | CS001 | Computer Science |
| student2@attendance.com | student123 | CS002 | Computer Science |
| student3@attendance.com | student123 | IT001 | Information Technology |
| student4@attendance.com | student123 | IT002 | Information Technology |

### Admin
| Email | Password |
|-------|----------|
| admin@attendance.com | admin123 |

---

## 🔄 Stopping the Application

**For Backend:** Press `Ctrl + C` in the backend terminal
**For Frontend:** Press `Ctrl + C` in the frontend terminal

---

## 📚 What's Included

✅ **Backend** - Spring Boot REST API
✅ **Frontend** - React Dashboard
✅ **Database** - MySQL with sample data
✅ **QR Codes** - QR library integration
✅ **Analytics** - Monthly reports and alerts
✅ **Admin Panel** - Full management dashboard

---

## 🎓 Key Features Implemented

### Authentication
- Student login/signup
- Admin login
- Session management

### Attendance Marking
- QR code scanning ready
- Manual attendance marking
- Real-time marking

### Reports & Analytics
- Monthly attendance percentage
- Status tracking (Good/Warning/Alert)
- Student-wise report view
- Admin dashboard with filters

### Alerts
- Low attendance warnings
- Critical alerts for <50% attendance
- Filter by status

---

## 🆘 Need Help?

1. Check backend logs in terminal
2. Check browser console (F12 → Console)
3. Verify MySQL database: `SHOW DATABASES;`
4. Check if ports are available: `netstat -ano | findstr :8080`

---

## 🎉 You're All Set!

The application is fully functional. Explore the features, test with sample data, and build upon it!

**Happy Coding! 🚀**
