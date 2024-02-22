package com.shounoop.carrentalspring.dto;

import com.shounoop.carrentalspring.enums.UserRole;
import lombok.Data;

@Data
public class AuthenticationResponse {
    private String jwt;
    private UserRole userRole;
    private Long userId;
}
