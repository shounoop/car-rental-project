package com.shounoop.carrentalspring.dto;

import lombok.Data;

@Data
public class SignupRequest {
    private String email;
    private String name;
    private String password;
}
