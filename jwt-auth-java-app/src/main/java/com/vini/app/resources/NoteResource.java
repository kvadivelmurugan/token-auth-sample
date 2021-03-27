package com.vini.app.resources;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NoteResource {
    @RequestMapping(method = RequestMethod.GET, path = "/notes")
    public String getNotes() {
        return ("<h1>Welcome to Notes</h1>");
    }
}
