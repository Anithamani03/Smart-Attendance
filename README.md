# 🎓 Smart Attendance System - Full Stack Project

A complete full-stack attendance management system built with **Spring Boot**, **React**, and **MySQL**. Features digital attendance marking, QR codes, monthly analytics, and admin dashboard.

## 📋 Features

### Student Features
- ✅ User registration and login
- ✅ Mark attendance via QR code or manual entry
- ✅ View monthly attendance report
- ✅ See attendance percentage and status
- ✅ Real-time alerts for low attendance

### Admin Features
- ✅ Login to admin portal
- ✅ View all students' attendance reports
- ✅ Filter reports by status (Good/Warning/Alert)
- ✅ Monitor attendance analytics
- ✅ Track critical attendance alerts
- ✅ Monthly attendance statistics

## 🛠️ Tech Stack

**Backend:**
- Spring Boot 3.0
- Java 17
- Spring Data JPA
- MySQL 8.0
- Maven

**Frontend:**
- React 18
- React Router v6
- Axios
- QR Code Library
- CSS3

**Database:**
- MySQL 8.0

## 📦 Prerequisites

Before running the project, ensure you have:
- Java JDK 17+ installed
- Maven installed
- Node.js (v16+) and npm installed
- MySQL Server running
- Git (optional)

## 🚀 Setup & Installation

### Step 1: Database Setup

1. Start MySQL Server
2. Open MySQL command line or MySQL Workbench
3. Run the schema script:

```bash
mysql -u root -p < database/schema.sql
```

Or copy-paste the content from `database/schema.sql` in your MySQL client.

**Default Admin Credentials:**
- Email: `admin@attendance.com`
- Password: `admin123`

**Sample Student Credentials:**
- Email: `student1@attendance.com`
- Password: `student123`

### Step 2: Backend Setup

1. Navigate to backend folder:
```bash
cd backend
```

2. Update MySQL credentials in `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/smart_attendance_db
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD
```

3. Build the project:
```bash
mvn clean install
```

4. Run the application:
```bash
mvn spring-boot:run
```

Backend will run on: `http://localhost:8080`

### Step 3: Frontend Setup

1. Navigate to frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

Frontend will run on: `http://localhost:3000`

## 📱 Usage Guide

### For Students:

1. **Access Home Page:** Open `http://localhost:3000`
2. **Sign Up:** Click "Create Student Account" and register
3. **Login:** Use your credentials to login
4. **Mark Attendance:**
   - Click "Mark Present (QR)" to mark attendance using QR code
   - Click "Mark Present (Manual)" for manual entry
5. **View Report:** See your monthly attendance percentage and status

### For Admin:

1. **Access Home Page:** Open `http://localhost:3000`
2. **Admin Login:** Click "Admin Login"
3. **Credentials:**
   - Email: `admin@attendance.com`
   - Password: `admin123`
4. **View Reports:**
   - See all students' attendance reports
   - Filter by status: Good (≥75%), Warning (50-75%), Alert (<50%)
   - Monitor critical alerts and warnings

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/student/login` - Student login
- `POST /api/auth/student/signup` - Student registration
- `POST /api/auth/admin/login` - Admin login

### Attendance
- `POST /api/attendance/mark/{studentId}/{markType}` - Mark attendance
- `GET /api/attendance/report/{studentId}` - Get student monthly report
- `GET /api/attendance/admin/all-reports` - Get all students reports
- `GET /api/attendance/history/{studentId}` - Get attendance history

### Students
- `GET /api/students` - Get all students
- `GET /api/students/{id}` - Get student details
- `GET /api/students/department/{department}` - Get students by department

## 📊 Attendance Status Criteria

- **GOOD:** ≥ 75% attendance
- **WARNING:** 50% - 75% attendance
- **ALERT:** < 50% attendance

## 🗂️ Project Structure

```
smart-attendance-system/
├── backend/
│   ├── src/main/java/com/attendance/
│   │   ├── model/           (Entity classes)
│   │   ├── controller/      (REST endpoints)
│   │   ├── service/         (Business logic)
│   │   ├── repository/      (Data access)
│   │   ├── dto/            (Data transfer objects)
│   │   └── config/         (Configuration)
│   ├── src/main/resources/
│   │   └── application.properties
│   └── pom.xml
├── frontend/
│   ├── src/
│   │   ├── pages/          (Page components)
│   │   ├── services/       (API services)
│   │   ├── styles/         (CSS files)
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   └── package.json
├── database/
│   └── schema.sql          (Database script)
└── README.md
```

## 🔐 Security Features

- Password-based authentication
- Student-specific data isolation
- Admin-only dashboard access
- Unique QR codes per student
- Session management via localStorage

## 🐛 Troubleshooting

### Backend Issues:

1. **Port 8080 already in use:**
   - Change port in `application.properties`: `server.port=8081`

2. **MySQL Connection Error:**
   - Verify MySQL is running
   - Check credentials in `application.properties`
   - Ensure database `smart_attendance_db` exists

3. **Maven build fails:**
   - Run: `mvn clean`
   - Check Java version: `java -version`

### Frontend Issues:

1. **Port 3000 already in use:**
   - Run on different port: `PORT=3001 npm start`

2. **API Connection Error:**
   - Verify backend is running on `http://localhost:8080`
   - Check CORS configuration in backend

3. **Dependencies not installing:**
   - Delete `node_modules` and `package-lock.json`
   - Run: `npm install` again

## 📝 Sample Test Data

**Admin Account:**
- Email: admin@attendance.com
- Password: admin123

**Student Accounts:**
- Email: student1@attendance.com (Password: student123)
- Email: student2@attendance.com (Password: student123)
- Email: student3@attendance.com (Password: student123)
- Email: student4@attendance.com (Password: student123)

## 🎯 Future Enhancements

- QR code scanning integration
- Email notifications for low attendance
- Attendance export to Excel/PDF
- Biometric integration
- Mobile app version
- Real-time analytics dashboard
- Message alerts to parents

## 📄 License

This project is open source and available for educational purposes.

## 📞 Support

For issues or questions, please create an issue in the project repository.

---

**Happy Coding! 🚀**
