package com.shounoop.carrentalspring.services.admin;

import com.shounoop.carrentalspring.dto.CarDto;
import com.shounoop.carrentalspring.entity.Car;
import com.shounoop.carrentalspring.repository.CarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {
    private final CarRepository carRepository;

    @Override
    public boolean postCar(CarDto carDto) throws IOException {
        boolean isSuccessful = false;

        try {
            Car car = new Car();
            car.setName(carDto.getName());
            car.setBrand(carDto.getBrand());
            car.setColor(carDto.getColor());
            car.setDescription(carDto.getDescription());
            car.setPrice(carDto.getPrice());
            car.setTransmission(carDto.getTransmission());
            car.setType(carDto.getType());
            car.setYear(carDto.getYear());
            car.setImage(carDto.getImage().getBytes());

            carRepository.save(car);

            isSuccessful = true;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return isSuccessful;
    }

    @Override
    public List<CarDto> getAllCars() {
        return carRepository.findAll().stream().map(Car::getCarDto).collect(Collectors.toList());
    }

    @Override
    public void deleteCar(Long id) {
        carRepository.deleteById(id);
    }

    @Override
    public CarDto getCarById(Long id) {
        return carRepository.findById(id).map(Car::getCarDto).orElse(null); // map() is a method that applies a given function to each element of a stream
    }

    @Override
    public boolean updateCar(Long id, CarDto carDto) throws IOException {
        Optional<Car> optionalCar = carRepository.findById(id);

        if (optionalCar.isPresent()) {
            Car existingCar = optionalCar.get();

            if (carDto.getImage() != null) {
                existingCar.setImage(carDto.getImage().getBytes());
            }

            existingCar.setPrice(carDto.getPrice());
            existingCar.setYear(carDto.getYear());
            existingCar.setType(carDto.getType());
            existingCar.setDescription(carDto.getDescription());
            existingCar.setTransmission(carDto.getTransmission());
            existingCar.setColor(carDto.getColor());
            existingCar.setName(carDto.getName());
            existingCar.setBrand(carDto.getBrand());

            carRepository.save(existingCar);

            return true;
        }

        return false;
    }
}