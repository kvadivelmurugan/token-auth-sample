package com.vini.app.services;

import com.vini.app.model.User;
import com.vini.app.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User findByUserName (String userName) {
        return userRepository.findByUserName(userName);
    }
}
