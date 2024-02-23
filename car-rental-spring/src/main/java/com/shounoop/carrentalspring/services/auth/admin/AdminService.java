package com.shounoop.carrentalspring.services.auth.admin;

import com.shounoop.carrentalspring.dto.CarDto;

import java.io.IOException;

public interface AdminService {
    boolean postCar(CarDto carDto) throws IOException;
}
