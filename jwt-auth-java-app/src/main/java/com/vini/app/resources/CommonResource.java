package com.vini.app.resources;

import com.vini.app.model.*;
import com.vini.app.services.CommonService;
import com.vini.app.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CommonResource {

    @Autowired
    private CommonService commonService;

    @Autowired
    UserService userService;

    @RequestMapping (method = RequestMethod.GET, path = "/states/{countryId}", produces = "application/json")
    public List<State> getStatesByCountryId (@PathVariable ("countryId") long countryId) {
        return commonService.getStatesByCountryId (countryId);
    }

    @RequestMapping (method = RequestMethod.GET, path = "/countries", produces = "application/json")
    public List<Country> getCountries () {
        return commonService.getCountries();
    }

    @RequestMapping (method = RequestMethod.GET, path = "/relationships", produces = "application/json")
    public List<Relationship> getRelationships () {
        return commonService.getRelationships();
    }

    @RequestMapping (method = RequestMethod.GET, path = "/groups", produces = "application/json")
    public List<Group> getGroups () {
        return commonService.getGroups();
    }

    @RequestMapping (method = RequestMethod.GET, path = "/roles/{userName}", produces = "application/json")
    public List<Role> getRoles (@PathVariable ("userName") String userName) {
        System.out.println("getRoles :: userName " + userName);
        User user = userService.findByUserName(userName);
        System.out.println("getRoles :: user " + user);
        return user.getRoleList();
    }

}
