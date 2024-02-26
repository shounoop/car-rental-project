package com.shounoop.carrentalspring.services.customer;

import com.shounoop.carrentalspring.dto.CarDto;
import com.shounoop.carrentalspring.entity.Car;
import com.shounoop.carrentalspring.repository.CarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {
    private final CarRepository carRepository;

    @Override
    public List<CarDto> getAllCars() {
        return carRepository.findAll().stream().map(Car::getCarDto).collect(Collectors.toList());
    }
}
