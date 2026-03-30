-- Create Database
CREATE DATABASE IF NOT EXISTS smart_attendance_db;
USE smart_attendance_db;

-- Students Table
CREATE TABLE IF NOT EXISTS students (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(100) NOT NULL,
  roll_number VARCHAR(50) UNIQUE NOT NULL,
  department VARCHAR(50) NOT NULL,
  qr_code VARCHAR(255) UNIQUE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_roll_number (roll_number)
);

-- Admins Table
CREATE TABLE IF NOT EXISTS admins (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(100) NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_email (email)
);

-- Attendance Table
CREATE TABLE IF NOT EXISTS attendance (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  student_id BIGINT NOT NULL,
  attendance_date DATE NOT NULL,
  marked_time DATETIME NOT NULL,
  mark_type VARCHAR(20) NOT NULL,
  is_present_or_absent BOOLEAN NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
  INDEX idx_student_id (student_id),
  INDEX idx_attendance_date (attendance_date),
  UNIQUE KEY unique_attendance (student_id, attendance_date)
);

-- Sample Admin User (password: admin123)
INSERT INTO admins (email, password, name) VALUES 
('admin@attendance.com', 'admin123', 'System Admin');

-- Sample Student Users
INSERT INTO students (email, password, name, roll_number, department, qr_code) VALUES 
('student1@attendance.com', 'student123', 'John Doe', 'CS001', 'Computer Science', 'student-1'),
('student2@attendance.com', 'student123', 'Jane Smith', 'CS002', 'Computer Science', 'student-2'),
('student3@attendance.com', 'student123', 'Mike Johnson', 'IT001', 'Information Technology', 'student-3'),
('student4@attendance.com', 'student123', 'Sarah Williams', 'IT002', 'Information Technology', 'student-4');

-- Sample Attendance Records for Current Month
INSERT INTO attendance (student_id, attendance_date, marked_time, mark_type, is_present_or_absent) VALUES
(1, CURDATE() - INTERVAL 10 DAY, NOW(), 'QR_CODE', TRUE),
(1, CURDATE() - INTERVAL 9 DAY, NOW(), 'MANUAL', TRUE),
(1, CURDATE() - INTERVAL 8 DAY, NOW(), 'QR_CODE', FALSE),
(1, CURDATE() - INTERVAL 7 DAY, NOW(), 'MANUAL', TRUE),
(1, CURDATE() - INTERVAL 6 DAY, NOW(), 'QR_CODE', TRUE),
(2, CURDATE() - INTERVAL 10 DAY, NOW(), 'QR_CODE', TRUE),
(2, CURDATE() - INTERVAL 9 DAY, NOW(), 'MANUAL', TRUE),
(2, CURDATE() - INTERVAL 8 DAY, NOW(), 'QR_CODE', TRUE),
(2, CURDATE() - INTERVAL 7 DAY, NOW(), 'MANUAL', TRUE),
(2, CURDATE() - INTERVAL 6 DAY, NOW(), 'QR_CODE', TRUE),
(3, CURDATE() - INTERVAL 10 DAY, NOW(), 'QR_CODE', FALSE),
(3, CURDATE() - INTERVAL 9 DAY, NOW(), 'MANUAL', FALSE),
(3, CURDATE() - INTERVAL 8 DAY, NOW(), 'QR_CODE', FALSE);
