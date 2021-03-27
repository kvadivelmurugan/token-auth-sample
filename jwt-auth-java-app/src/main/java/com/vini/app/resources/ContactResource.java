package com.vini.app.resources;

import com.vini.app.model.Contact;
import com.vini.app.services.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ContactResource {

    @Autowired
    ContactService contactService;

    @RequestMapping(method = RequestMethod.GET, path = "/contacts/{userId}", produces="application/json")
    public List<Contact> getContactsByUserId (@PathVariable("userId") long userId) {
        return contactService.getContactsByUserId(userId);
    }

    @RequestMapping (method = RequestMethod.PUT, path = "/contacts", produces = "application/json", consumes = "application/json")
    public ResponseEntity  saveContact (@RequestBody Contact contact) {
        System.out.println ("saveContact " + contact);
        contactService.saveContact(contact);
        return ResponseEntity.ok (null);
    }
}
