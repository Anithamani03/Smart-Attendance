# 🚀 EXECUTION GUIDE - Smart Attendance System

## ⚠️ Current System Status

✅ Java 26 installed
✅ Node.js v24.14.0 installed
❌ Maven NOT found in PATH
❌ MySQL NOT found in PATH

---

## 📋 STEP-BY-STEP EXECUTION GUIDE

### STEP 1: Install Maven (if not already done)

**Option A: Download & Install Maven**
1. Download from: https://maven.apache.org/download.cgi
2. Extract to: `C:\Program Files\maven`
3. Add to PATH:
   - Settings → Environment Variables
   - Add: `C:\Program Files\maven\bin`
4. Restart PowerShell/CMD
5. Verify: `mvn -v`

**Option B: Use Chocolatey (if installed)**
```powershell
choco install maven
```

---

### STEP 2: Install/Start MySQL

**Option A: If MySQL is already installed**
```
Open Services (services.msc) or run:
net start MySQL80
```

**Option B: If MySQL is NOT installed**
1. Download from: https://dev.mysql.com/downloads/mysql/
2. Install MySQL Community Server
3. During installation, note the password for root user
4. Run MySQL after installation

**Verify MySQL is running:**
```
netstat -ano | findstr :3306
```

---

### STEP 3: Create Database & Load Schema

**Open PowerShell as Administrator:**

```powershell
# Navigate to project
cd "C:\Users\sanjay janani\OneDrive\Documents\project\smart-attendance-system"

# Run SQL script to create database
mysql -u root -p < database\schema.sql
# Enter your MySQL root password when prompted
```

**If that doesn't work, use this method:**

1. Open MySQL Workbench or MySQL command line
2. Copy entire contents of `database/schema.sql`
3. Paste and execute in MySQL client

---

### STEP 4: Update Backend Configuration

Edit: `backend/src/main/resources/application.properties`

Change these lines:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/smart_attendance_db
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD  # ← Change this!
```

Save the file.

---

### STEP 5: Build & Run Backend

**Open PowerShell in the backend folder:**

```powershell
cd "C:\Users\sanjay janani\OneDrive\Documents\project\smart-attendance-system\backend"

# Build the project
mvn clean install -DskipTests

# Start the backend server
mvn spring-boot:run
```

**Expected Output:**
```
Tomcat started on port(s): 8080
```

✅ **Keep this terminal open!** Backend is now running on `http://localhost:8080`

---

### STEP 6: Run Frontend

**Open a NEW PowerShell terminal:**

```powershell
cd "C:\Users\sanjay janani\OneDrive\Documents\project\smart-attendance-system\frontend"

# Install dependencies (first time only)
npm install

# Start React development server
npm start
```

**This will:**
- Install React dependencies
- Start the dev server
- Automatically open browser to `http://localhost:3000`

---

### STEP 7: Test the Application

1. **Browser opens to:** `http://localhost:3000`

2. **Test Student Login:**
   - Click "Student Login"
   - Email: `student1@attendance.com`
   - Password: `student123`
   - Click Login ✓

3. **Test Mark Attendance:**
   - Click "Mark Present (Manual)" button ✓
   - See success message ✓

4. **View Monthly Report:**
   - See attendance percentage
   - See status badge

5. **Test Admin Dashboard:**
   - Go back to home
   - Click "Admin Login"
   - Email: `admin@attendance.com`
   - Password: `admin123`
   - See all student reports ✓

---

## 🔧 TROUBLESHOOTING

### Backend won't start with Maven

**Problem:** `mvn: is not recognized`
**Solution:** 
- Install Maven from https://maven.apache.org/download.cgi
- Add `MAVEN_HOME/bin` to Windows PATH
- Restart PowerShell

### Database connection error

**Problem:** `Connection refused to host: localhost:3306`
**Solution:**
- Check MySQL is running: `netstat -ano | findstr :3306`
- Start MySQL: `net start MySQL80`
- Verify credentials in `application.properties`

### Port already in use

**Problem:** `Address already in use: localhost:8080`
**Solution:**
- Kill process using port 8080
- Or change port in `application.properties`

### Frontend won't start

**Problem:** Dependencies error
**Solution:**
```powershell
cd frontend
rm -r node_modules
npm install
npm start
```

---

## 📊 Expected Architecture

```
Browser (http://localhost:3000)
    ↓↑ (HTTP REST)
React Frontend
    ↓↑ (Axios API Calls)
Spring Boot Backend (http://localhost:8080)
    ↓↑ (JDBC/JPA)
MySQL Database (localhost:3306)
```

---

## ✅ QUICK CHECKLIST FOR EXECUTION

- [ ] Java 26 installed ✓
- [ ] Node.js v24.14.0 installed ✓
- [ ] Maven installed & in PATH
- [ ] MySQL installed & running
- [ ] Database schema loaded
- [ ] application.properties updated
- [ ] Backend built and started
- [ ] Frontend npm install & started
- [ ] Browser opened to localhost:3000
- [ ] Tested with sample credentials

---

## 🎯 FULL EXECUTION COMMANDS (Summary)

### Terminal 1: Backend
```powershell
cd "C:\Users\sanjay janani\OneDrive\Documents\project\smart-attendance-system\backend"
mvn clean install -DskipTests
mvn spring-boot:run
```

### Terminal 2: Frontend
```powershell
cd "C:\Users\sanjay janani\OneDrive\Documents\project\smart-attendance-system\frontend"
npm install
npm start
```

### Database (One-time setup)
```powershell
mysql -u root -p < database\schema.sql
```

---

## 📞 SUPPORT

1. Backend issues → Check `README.md` → Troubleshooting
2. Frontend issues → Check console (F12)
3. Database issues → Check MySQL connection
4. General help → Read `QUICKSTART.md`

---

**Once all prerequisites are installed, you can execute the system following the steps above!**
