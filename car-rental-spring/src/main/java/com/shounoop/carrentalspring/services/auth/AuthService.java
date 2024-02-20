package com.shounoop.carrentalspring.services.auth;

import com.shounoop.carrentalspring.dto.SignupRequest;
import com.shounoop.carrentalspring.dto.UserDto;

public interface AuthService {
    UserDto createCustomer(SignupRequest signupRequest);

    boolean hasCustomerWithEmail(String email);
}
