package com.vini.app.services;

import com.vini.app.model.Country;
import com.vini.app.model.Group;
import com.vini.app.model.Relationship;
import com.vini.app.model.State;
import com.vini.app.repositories.CountryRepository;
import com.vini.app.repositories.GroupRepository;
import com.vini.app.repositories.RelationshipRepository;
import com.vini.app.repositories.StateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommonService {

    @Autowired
    private StateRepository stateRepository;

    @Autowired
    private CountryRepository countryRepository;

    @Autowired
    private RelationshipRepository relationshipRepository;

    @Autowired
    private GroupRepository groupRepository;

    public List<State> getStatesByCountryId (long countryId) {
        return stateRepository.findAllByCountryId(countryId);
    }

    public List<Country> getCountries () {
        return countryRepository.findAll();
    }

    public List<Relationship> getRelationships () {
        return relationshipRepository.findAll();
    }

    public List<Group> getGroups () {
        return groupRepository.findAll();
    }
}
