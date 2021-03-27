package com.vini.app.services;

import com.vini.app.model.User;
import com.vini.app.model.LoginUserDetails;
import com.vini.app.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.util.Optional;

@Service
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {
    @Autowired
    DataSource datasource;

    @Autowired
    UserRepository userRepository;
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("loadUserByUsername started :: ");
        User user = userRepository.findByUserName(username);
        System.out.println("User :: " + user);
        LoginUserDetails loginUserDetails = new LoginUserDetails(user);
        return loginUserDetails;
    }
}
