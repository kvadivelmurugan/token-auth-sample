package com.vini.app.resources;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeResource {
    @RequestMapping (method = RequestMethod.GET, path = "/")
    public String home() {
        return ("<h1>Welcome to SpringSecurity</h1>");
    }
}
