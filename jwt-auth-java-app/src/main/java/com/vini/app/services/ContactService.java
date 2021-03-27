package com.vini.app.services;

import com.vini.app.model.Contact;
import com.vini.app.repositories.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.util.List;

@Service
public class ContactService {
    @Autowired
    DataSource datasource;

    @Autowired
    ContactRepository contactRepository;

    public List<Contact> getContactsByUserId (long userId) {
        return contactRepository.findAllByUserUserId(userId);
    }

    public Contact saveContact (Contact contact) { return contactRepository.save (contact); }
}
