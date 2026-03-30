package com.attendance.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AttendanceReportDTO {
    private Long studentId;
    private String studentName;
    private String rollNumber;
    private Long totalDays;
    private Long presentDays;
    private Long absentDays;
    private Double attendancePercentage;
    private String status; // "GOOD", "WARNING", "ALERT"
}
