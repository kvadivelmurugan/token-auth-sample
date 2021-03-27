package com.vini.app.repositories;

import com.vini.app.model.Group;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GroupRepository extends JpaRepository<Group, Long> {
    public List<Group> findAll();
}

