package com.magician.userLogin.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.magician.userLogin.model.User;
import com.magician.userLogin.repository.UserRepository;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {
        return userRepository.save(user);
    }

    public boolean loginUser(String email, String password) {
        return userRepository.findByEmail(email)
                .map(u -> u.getPassword().equals(password))
                .orElse(false);
    }
}