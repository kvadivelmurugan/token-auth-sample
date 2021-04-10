package com.vini.app.model;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class JwtResponse {
    private long userId;
    private String userName;
    private String jwtToken;
    Collection<? extends GrantedAuthority> authorities;

    public JwtResponse(String jwtToken) {
        this.jwtToken = jwtToken;
    }

    public JwtResponse(long userId, String jwtToken, String userName, Collection<? extends GrantedAuthority> authorities) {
        this.userId = userId;
        this.jwtToken = jwtToken;
        this.userName = userName;
        this.authorities = authorities;
    }

    public long getUserId() {
        return userId;
    }

    public String getUserName() {
        return userName;
    }

     public String getJwtToken() {
        return jwtToken;
    }

    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
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
