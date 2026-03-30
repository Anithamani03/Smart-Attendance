package com.attendance.controller;

import com.attendance.dto.AttendanceReportDTO;
import com.attendance.model.Attendance;
import com.attendance.service.AttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/attendance")
@CrossOrigin(origins = "http://localhost:3000")
public class AttendanceController {

    @Autowired
    private AttendanceService attendanceService;

    @PostMapping("/mark/{studentId}/{markType}")
    public ResponseEntity<Map<String, String>> markAttendance(
            @PathVariable Long studentId,
            @PathVariable String markType) {
        
        boolean success = attendanceService.markAttendance(studentId, markType);
        Map<String, String> response = new HashMap<>();
        
        if (success) {
            response.put("message", "Attendance marked successfully");
            return ResponseEntity.ok(response);
        }
        response.put("message", "Failed to mark attendance");
        return ResponseEntity.status(400).body(response);
    }

    @GetMapping("/report/{studentId}")
    public ResponseEntity<AttendanceReportDTO> getMonthlyReport(@PathVariable Long studentId) {
        AttendanceReportDTO report = attendanceService.getMonthlyReport(studentId);
        if (report != null) {
            return ResponseEntity.ok(report);
        }
        return ResponseEntity.status(404).build();
    }

    @GetMapping("/admin/all-reports")
    public ResponseEntity<List<AttendanceReportDTO>> getAllReports() {
        List<AttendanceReportDTO> reports = attendanceService.getAllStudentReports();
        return ResponseEntity.ok(reports);
    }

    @GetMapping("/history/{studentId}")
    public ResponseEntity<List<Attendance>> getAttendanceHistory(@PathVariable Long studentId) {
        List<Attendance> history = attendanceService.getStudentAttendanceHistory(studentId);
        return ResponseEntity.ok(history);
    }

    @PostMapping("/manual-absent/{studentId}")
    public ResponseEntity<Map<String, String>> markManualAbsent(@PathVariable Long studentId) {
        boolean success = attendanceService.markAbsentManual(studentId, java.time.LocalDate.now());
        Map<String, String> response = new HashMap<>();
        
        if (success) {
            response.put("message", "Absent marked successfully");
            return ResponseEntity.ok(response);
        }
        response.put("message", "Failed to mark absent");
        return ResponseEntity.status(400).body(response);
    }
}
