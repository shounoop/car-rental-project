package com.shounoop.carrentalspring.controller;

import com.shounoop.carrentalspring.dto.CarDto;
import com.shounoop.carrentalspring.services.customer.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/customer")
@RequiredArgsConstructor
public class CustomerController {
    private final CustomerService customerService;

    @GetMapping("/cars")
    public ResponseEntity<List<CarDto>> getAllCars() {
        return ResponseEntity.ok(customerService.getAllCars());
    }
}
