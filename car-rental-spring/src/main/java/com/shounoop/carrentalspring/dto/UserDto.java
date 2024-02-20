package com.shounoop.carrentalspring.dto;

import com.shounoop.carrentalspring.enums.UserRole;
import lombok.Data;

@Data
public class UserDto {
    private Long id;
    private String name;
    private String email;
    private UserRole userRole;
}
