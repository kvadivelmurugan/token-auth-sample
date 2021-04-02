package com.vini.app.model;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class JwtResponse {

    private String userName;
    private String jwtToken;
    Collection<? extends GrantedAuthority> authorities;

    public JwtResponse(String jwtToken) {
        this.jwtToken = jwtToken;
    }

    public JwtResponse(String jwtToken, String userName, Collection<? extends GrantedAuthority> authorities) {
        this.jwtToken = jwtToken;
        this.userName = userName;
        this.authorities = authorities;
    }

    public String getToken() {
        return this.jwtToken;
    }

    @Override
    public String toString() {
        return "JwtResponse{" +
                "userName='" + userName + '\'' +
                ", jwtToken='" + jwtToken + '\'' +
                ", authorities=" + authorities +
                '}';
    }
}
