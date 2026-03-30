import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <nav className="home-navbar">
        <h1>🎓 Smart Attendance System</h1>
      </nav>

      <div className="hero">
        <h2>Digital Attendance Management</h2>
        <p>Track, Monitor & Analyze Attendance with Ease</p>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>📚 Student Features</h3>
          <ul>
            <li>Quick login & signup</li>
            <li>Mark attendance via QR code</li>
            <li>View monthly attendance</li>
            <li>Real-time status updates</li>
          </ul>
          <button
            className="btn btn-primary"
            onClick={() => navigate('/login')}
          >
            Student Login
          </button>
        </div>

        <div className="feature-card">
          <h3>👨‍💼 Admin Features</h3>
          <ul>
            <li>View all student reports</li>
            <li>Filter by attendance status</li>
            <li>Track low attendance alerts</li>
            <li>Monthly analytics</li>
          </ul>
          <button
            className="btn btn-success"
            onClick={() => navigate('/admin-login')}
          >
            Admin Login
          </button>
        </div>
      </div>

      <div className="cta-section">
        <h3>Get Started Today</h3>
        <div className="cta-buttons">
          <button
            className="btn btn-large"
            onClick={() => navigate('/signup')}
          >
            Create Student Account
          </button>
          <button
            className="btn btn-large btn-secondary"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
