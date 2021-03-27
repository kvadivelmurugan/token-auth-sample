package com.vini.app.model;

import javax.persistence.*;

@Entity
@Table(name="states")
public class State {

    @Id
    @Column (name="state_id")
    private long stateId;

    @Column (name="state_name")
    private String stateName;

    @Column (name="country_id")
    private long countryId;

    public State() {
    }

    public long getStateId() {
        return stateId;
    }

    public void setStateId(long stateId) {
        this.stateId = stateId;
    }

    public String getStateName() {
        return stateName;
    }

    public void setStateName(String stateName) {
        this.stateName = stateName;
    }

    public long getCountryId() {
        return countryId;
    }

    public void setCountryId(long countryId) {
        this.countryId = countryId;
    }

    @Override
    public String toString() {
        return "State{" +
                "stateId=" + stateId +
                ", stateName='" + stateName + '\'' +
                ", countryId=" + countryId +
                '}';
    }
}
