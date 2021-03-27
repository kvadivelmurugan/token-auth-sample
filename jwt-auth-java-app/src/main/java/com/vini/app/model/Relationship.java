package com.vini.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="relationships")
public class Relationship {

    @Id
    @Column (name="relationship_id")
    private long relationshipId;

    @Column (name="relationship_name")
    private String relationshipName;

    public Relationship() {
    }

    public long getRelationshipId() {
        return relationshipId;
    }

    public void setRelationshipId(long relationshipId) {
        this.relationshipId = relationshipId;
    }

    public String getRelationshipName() {
        return relationshipName;
    }

    public void setRelationshipName(String relationshipName) {
        this.relationshipName = relationshipName;
    }

    @Override
    public String toString() {
        return "Relationship{" +
                "relationshipId=" + relationshipId +
                ", relationshipName='" + relationshipName + '\'' +
                '}';
    }
}
