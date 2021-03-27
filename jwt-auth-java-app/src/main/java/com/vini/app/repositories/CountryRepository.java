package com.vini.app.repositories;

import com.vini.app.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CountryRepository extends JpaRepository <Country, Long> {
    public List<Country> findAll();
}
