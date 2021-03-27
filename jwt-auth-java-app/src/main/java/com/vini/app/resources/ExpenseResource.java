package com.vini.app.resources;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExpenseResource {
    @RequestMapping(method = RequestMethod.GET, path = "/expenses")
    public String getExpenses() {
        return ("<h1>Welcome to Expenses</h1>");
    }
}