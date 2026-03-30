package com.attendance.service;

import com.attendance.dto.LoginRequest;
import com.attendance.dto.LoginResponse;
import com.attendance.dto.SignUpRequest;
import com.attendance.model.Student;
import com.attendance.model.Admin;
import com.attendance.repository.StudentRepository;
import com.attendance.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.UUID;

@Service
public class AuthService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private AdminRepository adminRepository;

    public LoginResponse studentLogin(LoginRequest request) {
        Student student = studentRepository.findByEmail(request.getEmail())
                .orElse(null);

        if (student != null && student.getPassword().equals(request.getPassword())) {
            String token = "token_" + UUID.randomUUID().toString();
            return new LoginResponse(
                    "Login successful",
                    token,
                    student.getId(),
                    student.getName(),
                    "STUDENT"
            );
        }
        return new LoginResponse("Invalid credentials", null, null, null, null);
    }

    public LoginResponse adminLogin(LoginRequest request) {
        Admin admin = adminRepository.findByEmail(request.getEmail())
                .orElse(null);

        if (admin != null && admin.getPassword().equals(request.getPassword())) {
            String token = "token_" + UUID.randomUUID().toString();
            return new LoginResponse(
                    "Login successful",
                    token,
                    admin.getId(),
                    admin.getName(),
                    "ADMIN"
            );
        }
        return new LoginResponse("Invalid credentials", null, null, null, null);
    }

    public LoginResponse studentSignUp(SignUpRequest request) {
        if (studentRepository.findByEmail(request.getEmail()).isPresent()) {
            return new LoginResponse("Email already exists", null, null, null, null);
        }

        Student student = new Student();
        student.setEmail(request.getEmail());
        student.setPassword(request.getPassword());
        student.setName(request.getName());
        student.setRollNumber(request.getRollNumber());
        student.setDepartment(request.getDepartment());
        student.setQrCode(UUID.randomUUID().toString());

        Student saved = studentRepository.save(student);

        return new LoginResponse(
                "Registration successful",
                "token_" + UUID.randomUUID().toString(),
                saved.getId(),
                saved.getName(),
                "STUDENT"
        );
    }
}
