package com.shounoop.carrentalspring.services.customer;

import com.shounoop.carrentalspring.dto.BookACarDto;
import com.shounoop.carrentalspring.dto.CarDto;

import java.util.List;

public interface CustomerService {
    List<CarDto> getAllCars();
    boolean bookACar(BookACarDto bookACarDto);
}
