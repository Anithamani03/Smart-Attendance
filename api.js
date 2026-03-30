import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authService = {
  studentLogin: (email, password) =>
    api.post('/auth/student/login', { email, password, role: 'STUDENT' }),
  adminLogin: (email, password) =>
    api.post('/auth/admin/login', { email, password, role: 'ADMIN' }),
  studentSignUp: (data) =>
    api.post('/auth/student/signup', data),
};

export const attendanceService = {
  markAttendance: (studentId, markType) =>
    api.post(`/attendance/mark/${studentId}/${markType}`),
  getMonthlyReport: (studentId) =>
    api.get(`/attendance/report/${studentId}`),
  getAllReports: () =>
    api.get('/attendance/admin/all-reports'),
  getAttendanceHistory: (studentId) =>
    api.get(`/attendance/history/${studentId}`),
  markAbsent: (studentId) =>
    api.post(`/attendance/manual-absent/${studentId}`),
};

export const studentService = {
  getAllStudents: () =>
    api.get('/students'),
  getStudent: (id) =>
    api.get(`/students/${id}`),
  getStudentsByDepartment: (department) =>
    api.get(`/students/department/${department}`),
};

export default api;
