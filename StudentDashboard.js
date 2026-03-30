import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'qrcode.react';
import { attendanceService } from '../services/api';
import '../styles/Dashboard.css';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const studentId = localStorage.getItem('userId');
  const userName = localStorage.getItem('userName');
  const [report, setReport] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!studentId) {
      navigate('/login');
    } else {
      fetchMonthlyReport();
    }
  }, [studentId, navigate]);

  const fetchMonthlyReport = async () => {
    try {
      const response = await attendanceService.getMonthlyReport(studentId);
      setReport(response.data);
    } catch (error) {
      console.error('Error fetching report:', error);
    }
  };

  const handleMarkAttendance = async (markType) => {
    setLoading(true);
    try {
      const response = await attendanceService.markAttendance(
        studentId,
        markType
      );
      setMessage(response.data.message);
      setTimeout(() => {
        setMessage('');
        fetchMonthlyReport();
      }, 2000);
    } catch (error) {
      setMessage('Error marking attendance');
      setTimeout(() => setMessage(''), 2000);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h2>Smart Attendance System - Student</h2>
        <div>
          <span>Welcome, {userName}!</span>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </nav>

      <div className="dashboard-content">
        <div className="left-section">
          <h3>Mark Attendance</h3>

          <div className="qr-section">
            <h4>Your QR Code</h4>
            <div className="qr-container">
              <QRCode value={`student-${studentId}`} size={150} />
            </div>
            <p>Use this for QR code scanning</p>
          </div>

          <div className="action-buttons">
            <button
              onClick={() => handleMarkAttendance('QR_CODE')}
              disabled={loading}
              className="btn btn-primary"
            >
              Mark Present (QR)
            </button>
            <button
              onClick={() => handleMarkAttendance('MANUAL')}
              disabled={loading}
              className="btn btn-success"
            >
              Mark Present (Manual)
            </button>
          </div>

          {message && <div className="message">{message}</div>}
        </div>

        <div className="right-section">
          <h3>Monthly Attendance Report</h3>
          {report ? (
            <div className="report-card">
              <div className="report-row">
                <span>Name:</span>
                <strong>{report.studentName}</strong>
              </div>
              <div className="report-row">
                <span>Roll Number:</span>
                <strong>{report.rollNumber}</strong>
              </div>
              <div className="report-row">
                <span>Total Days:</span>
                <strong>{report.totalDays}</strong>
              </div>
              <div className="report-row">
                <span>Present:</span>
                <strong className="present">{report.presentDays}</strong>
              </div>
              <div className="report-row">
                <span>Absent:</span>
                <strong className="absent">{report.absentDays}</strong>
              </div>
              <div className="report-row highlight">
                <span>Attendance %:</span>
                <strong
                  className={
                    report.status === 'GOOD'
                      ? 'good'
                      : report.status === 'WARNING'
                      ? 'warning'
                      : 'alert'
                  }
                >
                  {report.attendancePercentage.toFixed(2)}%
                </strong>
              </div>
              <div className="status-badge">
                Status: <span className={`badge ${report.status}`}>{report.status}</span>
              </div>
            </div>
          ) : (
            <p>Loading report...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
