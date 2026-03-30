import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { attendanceService } from '../services/api';
import '../styles/Dashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName');
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('ALL');

  useEffect(() => {
    if (localStorage.getItem('role') !== 'ADMIN') {
      navigate('/admin-login');
    } else {
      fetchAllReports();
    }
  }, [navigate]);

  const fetchAllReports = async () => {
    try {
      setLoading(true);
      const response = await attendanceService.getAllReports();
      setReports(response.data);
    } catch (error) {
      console.error('Error fetching reports:', error);
    } finally {
      setLoading(false);
    }
  };

  const getFilteredReports = () => {
    if (filterStatus === 'ALL') return reports;
    return reports.filter((r) => r.status === filterStatus);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/admin-login');
  };

  const getAlertCount = () => {
    return reports.filter((r) => r.status === 'ALERT').length;
  };

  const getWarningCount = () => {
    return reports.filter((r) => r.status === 'WARNING').length;
  };

  return (
    <div className="admin-dashboard">
      <nav className="navbar">
        <h2>Smart Attendance System - Admin</h2>
        <div>
          <span>Welcome, {userName}!</span>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </nav>

      <div className="dashboard-content">
        <div className="stats-container">
          <div className="stat-card alert">
            <h4>⚠️ Critical Alerts</h4>
            <p>{getAlertCount()}</p>
          </div>
          <div className="stat-card warning">
            <h4>⚡ Warnings</h4>
            <p>{getWarningCount()}</p>
          </div>
          <div className="stat-card total">
            <h4>👥 Total Students</h4>
            <p>{reports.length}</p>
          </div>
        </div>

        <div className="filter-section">
          <h3>Attendance Reports</h3>
          <div className="filter-buttons">
            <button
              className={filterStatus === 'ALL' ? 'active' : ''}
              onClick={() => setFilterStatus('ALL')}
            >
              All
            </button>
            <button
              className={filterStatus === 'GOOD' ? 'active' : ''}
              onClick={() => setFilterStatus('GOOD')}
            >
              Good
            </button>
            <button
              className={filterStatus === 'WARNING' ? 'active' : ''}
              onClick={() => setFilterStatus('WARNING')}
            >
              Warning
            </button>
            <button
              className={filterStatus === 'ALERT' ? 'active' : ''}
              onClick={() => setFilterStatus('ALERT')}
            >
              Alert
            </button>
          </div>
        </div>

        {loading ? (
          <p>Loading reports...</p>
        ) : (
          <div className="reports-table">
            <table>
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Roll Number</th>
                  <th>Total Days</th>
                  <th>Present</th>
                  <th>Absent</th>
                  <th>Attendance %</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {getFilteredReports().map((report) => (
                  <tr key={report.studentId}>
                    <td>{report.studentName}</td>
                    <td>{report.rollNumber}</td>
                    <td>{report.totalDays}</td>
                    <td className="present">{report.presentDays}</td>
                    <td className="absent">{report.absentDays}</td>
                    <td>{report.attendancePercentage.toFixed(2)}%</td>
                    <td>
                      <span className={`badge ${report.status}`}>
                        {report.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
