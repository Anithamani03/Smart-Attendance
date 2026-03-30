package com.attendance.service;

import com.attendance.dto.AttendanceReportDTO;
import com.attendance.model.Attendance;
import com.attendance.model.Student;
import com.attendance.repository.AttendanceRepository;
import com.attendance.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.YearMonth;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AttendanceService {

    @Autowired
    private AttendanceRepository attendanceRepository;

    @Autowired
    private StudentRepository studentRepository;

    public boolean markAttendance(Long studentId, String markType) {
        Optional<Student> student = studentRepository.findById(studentId);
        if (!student.isPresent()) {
            return false;
        }

        LocalDate today = LocalDate.now();
        Optional<Attendance> existingAttendance = attendanceRepository
                .findByStudentAndAttendanceDate(student.get(), today);

        if (existingAttendance.isPresent()) {
            return false; // Already marked today
        }

        Attendance attendance = new Attendance();
        attendance.setStudent(student.get());
        attendance.setAttendanceDate(today);
        attendance.setMarkedTime(LocalDateTime.now());
        attendance.setMarkType(markType);
        attendance.setIsPresentOrAbsent(true);

        attendanceRepository.save(attendance);
        return true;
    }

    public boolean markAbsentManual(Long studentId, LocalDate date) {
        Optional<Student> student = studentRepository.findById(studentId);
        if (!student.isPresent()) {
            return false;
        }

        Attendance attendance = new Attendance();
        attendance.setStudent(student.get());
        attendance.setAttendanceDate(date);
        attendance.setMarkedTime(LocalDateTime.now());
        attendance.setMarkType("MANUAL");
        attendance.setIsPresentOrAbsent(false);

        attendanceRepository.save(attendance);
        return true;
    }

    public AttendanceReportDTO getMonthlyReport(Long studentId) {
        Optional<Student> student = studentRepository.findById(studentId);
        if (!student.isPresent()) {
            return null;
        }

        LocalDate now = LocalDate.now();
        LocalDate startOfMonth = now.withDayOfMonth(1);
        LocalDate endOfMonth = now.withDayOfMonth(now.lengthOfMonth());

        List<Attendance> monthlyAttendances = attendanceRepository
                .findByStudentAndAttendanceDateBetween(student.get(), startOfMonth, endOfMonth);

        long presentDays = monthlyAttendances.stream()
                .filter(Attendance::getIsPresentOrAbsent).count();
        long totalDays = monthlyAttendances.size();
        long absentDays = totalDays - presentDays;

        double attendancePercentage = totalDays > 0 ? (presentDays * 100.0) / totalDays : 0;
        String status = attendancePercentage >= 75 ? "GOOD" :
                        attendancePercentage >= 50 ? "WARNING" : "ALERT";

        return new AttendanceReportDTO(
                student.get().getId(),
                student.get().getName(),
                student.get().getRollNumber(),
                totalDays,
                presentDays,
                absentDays,
                attendancePercentage,
                status
        );
    }

    public List<AttendanceReportDTO> getAllStudentReports() {
        List<Student> students = studentRepository.findAll();
        return students.stream().map(student -> {
            LocalDate now = LocalDate.now();
            LocalDate startOfMonth = now.withDayOfMonth(1);
            LocalDate endOfMonth = now.withDayOfMonth(now.lengthOfMonth());

            List<Attendance> monthlyAttendances = attendanceRepository
                    .findByStudentAndAttendanceDateBetween(student, startOfMonth, endOfMonth);

            long presentDays = monthlyAttendances.stream()
                    .filter(Attendance::getIsPresentOrAbsent).count();
            long totalDays = monthlyAttendances.size();
            long absentDays = totalDays - presentDays;

            double attendancePercentage = totalDays > 0 ? (presentDays * 100.0) / totalDays : 0;
            String status = attendancePercentage >= 75 ? "GOOD" :
                            attendancePercentage >= 50 ? "WARNING" : "ALERT";

            return new AttendanceReportDTO(
                    student.getId(),
                    student.getName(),
                    student.getRollNumber(),
                    totalDays,
                    presentDays,
                    absentDays,
                    attendancePercentage,
                    status
            );
        }).collect(Collectors.toList());
    }

    public List<Attendance> getStudentAttendanceHistory(Long studentId) {
        Optional<Student> student = studentRepository.findById(studentId);
        if (!student.isPresent()) {
            return List.of();
        }
        return attendanceRepository.findByStudent(student.get());
    }
}
