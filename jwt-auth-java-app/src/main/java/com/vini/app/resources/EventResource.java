package com.vini.app.resources;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EventResource {
    @RequestMapping(method = RequestMethod.GET, path = "/events")
    public String getEvents() {
        return ("<h1>Welcome to Events</h1>");
    }
}
