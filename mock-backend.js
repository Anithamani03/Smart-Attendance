const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 8080;

// Mock database
const students = [
  { id: 1, email: 'student1@attendance.com', password: 'student123', name: 'John Doe', rollNumber: 'CS001' },
  { id: 2, email: 'student2@attendance.com', password: 'student123', name: 'Jane Smith', rollNumber: 'CS002' },
  { id: 3, email: 'student3@attendance.com', password: 'student123', name: 'Mike Johnson', rollNumber: 'IT001' },
  { id: 4, email: 'student4@attendance.com', password: 'student123', name: 'Sarah Williams', rollNumber: 'IT002' },
];

const admins = [
  { id: 1, email: 'admin@attendance.com', password: 'admin123', name: 'System Admin' },
];

const attendanceRecords = [
  { id: 1, studentId: 1, date: new Date().toISOString().split('T')[0], present: true },
  { id: 2, studentId: 1, date: new Date(Date.now() - 86400000).toISOString().split('T')[0], present: true },
  { id: 3, studentId: 1, date: new Date(Date.now() - 172800000).toISOString().split('T')[0], present: false },
  { id: 4, studentId: 1, date: new Date(Date.now() - 259200000).toISOString().split('T')[0], present: true },
  { id: 5, studentId: 1, date: new Date(Date.now() - 345600000).toISOString().split('T')[0], present: true },
  { id: 6, studentId: 2, date: new Date().toISOString().split('T')[0], present: true },
  { id: 7, studentId: 2, date: new Date(Date.now() - 86400000).toISOString().split('T')[0], present: true },
  { id: 8, studentId: 2, date: new Date(Date.now() - 172800000).toISOString().split('T')[0], present: true },
  { id: 9, studentId: 2, date: new Date(Date.now() - 259200000).toISOString().split('T')[0], present: true },
  { id: 10, studentId: 2, date: new Date(Date.now() - 345600000).toISOString().split('T')[0], present: true },
  { id: 11, studentId: 3, date: new Date().toISOString().split('T')[0], present: false },
  { id: 12, studentId: 3, date: new Date(Date.now() - 86400000).toISOString().split('T')[0], present: false },
  { id: 13, studentId: 3, date: new Date(Date.now() - 172800000).toISOString().split('T')[0], present: false },
];

// Auth Endpoints
app.post('/api/auth/student/login', (req, res) => {
  const { email, password } = req.body;
  const student = students.find(s => s.email === email && s.password === password);
  
  if (student) {
    res.json({
      message: 'Login successful',
      token: `token_${Math.random().toString(36).substr(2, 9)}`,
      userId: student.id,
      userName: student.name,
      role: 'STUDENT'
    });
  } else {
    res.status(401).json({
      message: 'Invalid credentials',
      token: null,
      userId: null,
      userName: null,
      role: null
    });
  }
});

app.post('/api/auth/admin/login', (req, res) => {
  const { email, password } = req.body;
  const admin = admins.find(a => a.email === email && a.password === password);
  
  if (admin) {
    res.json({
      message: 'Login successful',
      token: `token_${Math.random().toString(36).substr(2, 9)}`,
      userId: admin.id,
      userName: admin.name,
      role: 'ADMIN'
    });
  } else {
    res.status(401).json({
      message: 'Invalid credentials',
      token: null,
      userId: null,
      userName: null,
      role: null
    });
  }
});

app.post('/api/auth/student/signup', (req, res) => {
  const { email, name, rollNumber, department, password } = req.body;
  
  if (students.find(s => s.email === email)) {
    return res.status(400).json({
      message: 'Email already exists',
      token: null,
      userId: null,
      userName: null,
      role: null
    });
  }

  const newStudent = {
    id: students.length + 1,
    email,
    password,
    name,
    rollNumber,
    department,
    qrCode: `student-${students.length + 1}`
  };

  students.push(newStudent);

  res.json({
    message: 'Registration successful',
    token: `token_${Math.random().toString(36).substr(2, 9)}`,
    userId: newStudent.id,
    userName: newStudent.name,
    role: 'STUDENT'
  });
});

// Attendance Endpoints
app.post('/api/attendance/mark/:studentId/:markType', (req, res) => {
  const { studentId, markType } = req.params;
  const today = new Date().toISOString().split('T')[0];
  
  if (attendanceRecords.find(a => a.studentId === parseInt(studentId) && a.date === today)) {
    return res.status(400).json({ message: 'Already marked today' });
  }

  attendanceRecords.push({
    id: attendanceRecords.length + 1,
    studentId: parseInt(studentId),
    date: today,
    present: true,
    markType
  });

  res.json({ message: 'Attendance marked successfully' });
});

app.get('/api/attendance/report/:studentId', (req, res) => {
  const { studentId } = req.params;
  const student = students.find(s => s.id === parseInt(studentId));
  
  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }

  const studentAttendance = attendanceRecords.filter(a => a.studentId === parseInt(studentId));
  const presentDays = studentAttendance.filter(a => a.present).length;
  const totalDays = studentAttendance.length;
  const attendancePercentage = totalDays > 0 ? (presentDays / totalDays) * 100 : 0;
  
  let status = 'GOOD';
  if (attendancePercentage < 50) status = 'ALERT';
  else if (attendancePercentage < 75) status = 'WARNING';

  res.json({
    studentId: student.id,
    studentName: student.name,
    rollNumber: student.rollNumber,
    totalDays,
    presentDays,
    absentDays: totalDays - presentDays,
    attendancePercentage,
    status
  });
});

app.get('/api/attendance/admin/all-reports', (req, res) => {
  const reports = students.map(student => {
    const studentAttendance = attendanceRecords.filter(a => a.studentId === student.id);
    const presentDays = studentAttendance.filter(a => a.present).length;
    const totalDays = studentAttendance.length;
    const attendancePercentage = totalDays > 0 ? (presentDays / totalDays) * 100 : 0;
    
    let status = 'GOOD';
    if (attendancePercentage < 50) status = 'ALERT';
    else if (attendancePercentage < 75) status = 'WARNING';

    return {
      studentId: student.id,
      studentName: student.name,
      rollNumber: student.rollNumber,
      totalDays,
      presentDays,
      absentDays: totalDays - presentDays,
      attendancePercentage,
      status
    };
  });

  res.json(reports);
});

app.get('/api/attendance/history/:studentId', (req, res) => {
  const { studentId } = req.params;
  const history = attendanceRecords.filter(a => a.studentId === parseInt(studentId));
  res.json(history);
});

app.post('/api/attendance/manual-absent/:studentId', (req, res) => {
  const { studentId } = req.params;
  const today = new Date().toISOString().split('T')[0];
  
  attendanceRecords.push({
    id: attendanceRecords.length + 1,
    studentId: parseInt(studentId),
    date: today,
    present: false,
    markType: 'MANUAL'
  });

  res.json({ message: 'Absent marked successfully' });
});

// Student Endpoints
app.get('/api/students', (req, res) => {
  res.json(students);
});

app.get('/api/students/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: 'Student not found' });
  }
});

app.get('/api/students/department/:department', (req, res) => {
  const { department } = req.params;
  const result = students.filter(s => s.department === department);
  res.json(result);
});

// Start server
app.listen(PORT, () => {
  console.log(`\n✅ Mock Backend Server Running on http://localhost:${PORT}`);
  console.log(`📚 Ready to accept requests!\n`);
  console.log(`Test Credentials:`);
  console.log(`- Admin: admin@attendance.com / admin123`);
  console.log(`- Student: student1@attendance.com / student123\n`);
});
