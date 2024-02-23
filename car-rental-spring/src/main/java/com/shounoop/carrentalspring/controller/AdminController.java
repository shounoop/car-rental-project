package com.shounoop.carrentalspring.controller;

import com.shounoop.carrentalspring.dto.CarDto;
import com.shounoop.carrentalspring.services.auth.admin.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {
    private final AdminService adminService;

    // ? is a wildcard that represents an unknown type
    @PostMapping("/car")
    public ResponseEntity<?> postCar(@ModelAttribute CarDto carDto) throws IOException {
        boolean isSuccessful = adminService.postCar(carDto);

        if (isSuccessful) {
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
}
