# 📸 Screen Guide - Smart Attendance System

## Visual Tour of the Application

### 1. HOME PAGE
```
╔════════════════════════════════════════════╗
║        🎓 Smart Attendance System          ║
║   Digital Attendance Management            ║
║   Track, Monitor & Analyze with Ease       ║
╠════════════════════════════════════════════╣
║                                            ║
║  ┌──────────────────┐  ┌───────────────┐  ║
║  │ 📚 STUDENT       │  │ 👨‍💼 ADMIN     │  ║
║  │ • Quick Login    │  │ • View Reports│  ║
║  │ • Mark Attendance│  │ • Filter Data │  ║
║  │ • View Monthly   │  │ • Track Alerts│  ║
║  │ • Real-time Data │  │ • Analytics   │  ║
║  │                  │  │               │  ║
║  │ [Student Login]  │  │ [Admin Login] │  ║
║  └──────────────────┘  └───────────────┘  ║
║                                            ║
╚════════════════════════════════════════════╝
```

### 2. STUDENT LOGIN PAGE
```
╔════════════════════════════════════════════╗
║         Student Login                      ║
╠════════════════════════════════════════════╣
║                                            ║
║  Email:    [___________________]         ║
║  Password: [___________________]         ║
║                                            ║
║           [   LOGIN   ]                    ║
║                                            ║
║  Don't have account? Sign up here         ║
║                                            ║
╚════════════════════════════════════════════╝
```

### 3. STUDENT SIGN UP PAGE
```
╔════════════════════════════════════════════╗
║      Student Registration                  ║
╠════════════════════════════════════════════╣
║                                            ║
║  Full Name:    [_________________]       ║
║  Email:        [_________________]       ║
║  Password:     [_________________]       ║
║  Roll Number:  [_________________]       ║
║  Department:   [_________________]       ║
║                                            ║
║           [   SIGN UP   ]                 ║
║                                            ║
║  Already have account? Login here         ║
║                                            ║
╚════════════════════════════════════════════╝
```

### 4. STUDENT DASHBOARD
```
╔════════════════════════════════════════════╗
║  Smart Attendance - Student        [Logout]║
║  Welcome, John Doe!                        ║
╠════════════════════════════════════════════╣
║                                            ║
║  ┌─ MARK ATTENDANCE ──────────┐           ║
║  │ Your QR Code:              │           ║
║  │      ┌── ─ ──┐             │           ║
║  │      │ █ █ █ │             │           ║
║  │      │ █ █ █ │ (QR Code)   │           ║
║  │      │ █ █ █ │             │           ║
║  │      └── ─ ──┘             │           ║
║  │                             │           ║
║  │  [Mark Present (QR)]       │           ║
║  │  [Mark Present (Manual)]   │           ║
║  │                             │           ║
║  │  ✓ Attendance marked!      │           ║
║  └─────────────────────────────┘           ║
║                                            ║
║  ┌─ MONTHLY REPORT ──────────────┐        ║
║  │ Name: John Doe               │        ║
║  │ Roll: CS001                  │        ║
║  │                              │        ║
║  │ Total Days:        5         │        ║
║  │ Present:          ✓ 4        │        ║
║  │ Absent:           ✗ 1        │        ║
║  │                              │        ║
║  │ Attendance:      [80.00%]   │        ║
║  │ Status:          [  GOOD  ] │        ║
║  └──────────────────────────────┘        ║
║                                            ║
╚════════════════════════════════════════════╝
```

### 5. ADMIN LOGIN PAGE
```
╔════════════════════════════════════════════╗
║          Admin Login                       ║
╠════════════════════════════════════════════╣
║                                            ║
║  Email:    [____________________]        ║
║  Password: [____________________]        ║
║                                            ║
║           [   LOGIN   ]                    ║
║                                            ║
╚════════════════════════════════════════════╝
```

### 6. ADMIN DASHBOARD
```
╔════════════════════════════════════════════╗
║ Smart Attendance - Admin        [Logout]  ║
║ Welcome, Admin!                            ║
╠════════════════════════════════════════════╣
║                                            ║
║  ┌──────────────────┬──────────────────┐  ║
║  │ ⚠️ CRITICAL ALERTS       │ 1        │  ║
║  ├──────────────────┼──────────────────┤  ║
║  │ ⚡ WARNINGS             │ 2        │  ║
║  ├──────────────────┼──────────────────┤  ║
║  │ 👥 TOTAL STUDENTS       │ 4        │  ║
║  └──────────────────┴──────────────────┘  ║
║                                            ║
║  ATTENDANCE REPORTS                        ║
║  ┌──────────────────────────────────────┐  ║
║  │ [All] [Good] [Warning] [Alert]     │  ║
║  └──────────────────────────────────────┘  ║
║                                            ║
║  ┌──────────────────────────────────────┐  ║
║  │ Student   │ Roll  │ Days │ % │ Status │  ║
║  ├───────────┼───────┼──────┼────┼───────┤  ║
║  │ John Doe  │ CS001 │ 5    │80%│ GOOD  │  ║
║  │ Jane Smith│ CS002 │ 5    │100│ GOOD  │  ║
║  │ Mike J.   │ IT001 │ 3    │60%│ WARN  │  ║
║  │ Sarah W.  │ IT002 │ 2    │40%│ ALERT │  ║
║  └──────────────────────────────────────┘  ║
║                                            ║
╚════════════════════════════════════════════╝
```

---

## 🎬 User Workflows

### Student Workflow
```
1. Visit http://localhost:3000
         ↓
2. Click "Student Login" or "Sign Up"
         ↓
3. Enter Credentials
         ↓
4. See Dashboard with:
   - Your QR Code
   - Attendance Buttons
   - Monthly Report
         ↓
5. Mark Attendance:
   - Click "Mark Present (QR)"
   - OR Click "Mark Present (Manual)"
         ↓
6. View Monthly Report:
   - See total days
   - See present/absent count
   - See attendance percentage
   - See status (GOOD/WARNING/ALERT)
         ↓
7. Logout
```

### Admin Workflow
```
1. Visit http://localhost:3000
         ↓
2. Click "Admin Login"
         ↓
3. Enter Credentials:
   - admin@attendance.com
   - admin123
         ↓
4. See Admin Dashboard with:
   - Critical Alerts Count
   - Warnings Count
   - Total Students Count
         ↓
5. Filter Reports:
   - All Students
   - Good Attendance
   - Warnings
   - Critical Alerts
         ↓
6. View Student Details:
   - Name
   - Roll Number
   - Total Days
   - Present Days
   - Absent Days
   - Attendance Percentage
   - Status Badge
         ↓
7. Logout
```

---

## 🎯 Status Indicators

```
Status    Range      Color    Meaning
─────────────────────────────────────────
GOOD      ≥ 75%      GREEN    Excellent attendance
WARNING   50-75%     ORANGE   At risk
ALERT     < 50%      RED      Critical attention needed
```

---

## 🔘 Interactive Elements

### Buttons
- **[Student Login]** - Navigate to student login
- **[Admin Login]** - Navigate to admin login
- **[Sign Up]** - Create new student account
- **[Mark Present (QR)]** - Record attendance via QR
- **[Mark Present (Manual)]** - Record attendance manually
- **[Logout]** - End session

### Filters (Admin Only)
- **[All]** - Show all students
- **[Good]** - Show only good attendance
- **[Warning]** - Show warnings only
- **[Alert]** - Show critical alerts only

### Input Fields
- Email (text input)
- Password (password input)
- Name (text input)
- Roll Number (text input)
- Department (text input)

---

## 📊 Data Displayed

### Student Dashboard Shows:
- Student name
- Roll number
- Department (via profile)
- Unique QR code generated
- Total days present this month
- Total days absent this month
- Attendance percentage (calculated)
- Status badge (GOOD/WARNING/ALERT)

### Admin Dashboard Shows:
- Alert count (students with <50% attendance)
- Warning count (students with 50-75% attendance)
- Total student count
- Filterable table with all students
- Student name, roll, attendance data
- Status indicators for each student

---

## ✅ Features Per Screen

| Screen | Features |
|--------|----------|
| Home | View feature overview, navigate to login/signup |
| Student Login | Email/password authentication |
| Student SignUp | Registration with full details |
| Admin Login | Email/password authentication |
| Student Dashboard | View report, mark attendance, logout |
| Admin Dashboard | View all reports, filter, analytics |

---

## 🎨 Color Scheme

```
Primary:    #667eea (Purple-Blue)
Secondary:  #764ba2 (Deep Purple)
Success:    #48bb78 (Green)
Warning:    #ed8936 (Orange)
Alert:      #f56565 (Red)
Background: #f5f5f5 (Light Gray)
Text:       #333333 (Dark Gray)
```

---

## 📱 Responsive Design

- Desktop: Full layout with side-by-side panels
- Tablet: Optimized grid layout
- Mobile: Stacked layout (vertical)

All elements remain usable on all screen sizes!

---

## 🎯 Key Metrics Tracked

1. **Attendance Date** - When attendance was marked
2. **Mark Type** - QR_CODE or MANUAL
3. **Present/Absent** - Boolean status
4. **Monthly Percentage** - Calculated from present/total days
5. **Status** - Derived from percentage

---

## 🔔 Visual Feedback

- ✓ Success messages appear when attendance is marked
- ⚠️ Error messages appear when actions fail
- 🟢 Green badge for GOOD status
- 🟡 Orange badge for WARNING status
- 🔴 Red badge for ALERT status

---

## 🚀 Real-Time Features

- Reports update after marking attendance
- Statistics auto-calculate
- Filters update immediately
- No page refresh needed

This visual guide gives you a complete picture of how the application looks and flows!
