package com.vini.app.repositories;


import com.vini.app.model.Relationship;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface RelationshipRepository extends JpaRepository <Relationship, Long> {
    public List<Relationship> findAll();
}
