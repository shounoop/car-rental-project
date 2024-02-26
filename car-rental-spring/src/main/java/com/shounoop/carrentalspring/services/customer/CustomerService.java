package com.shounoop.carrentalspring.services.customer;

import com.shounoop.carrentalspring.dto.CarDto;

import java.util.List;

public interface CustomerService {
    List<CarDto> getAllCars();
}
