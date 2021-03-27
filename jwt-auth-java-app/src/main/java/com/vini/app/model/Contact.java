package com.vini.app.model;

import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
@Table(name="contacts")
public class Contact {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column (name="contact_id")
    private long contactId;

    @Column (name="nick_name")
    private String nickName;

    @Column (name="first_name")
    private String firstName;

    @Column (name="last_name")
    private String lastName;

    @Column (name="personal_email")
    private String personalEmail;

    @Column (name="work_email")
    private String workEmail;

    @Column (name="primary_address")
    private String primaryAddress;

    @Column (name="secondary_address")
    private String secondaryAddress;

    @Column (name="city")
    private String city;

    @OneToOne
    @JoinColumn (name="state_id", referencedColumnName="state_id")
    private State state;

    @OneToOne
    @JoinColumn (name="country_id", referencedColumnName="country_id")
    private Country country;

    @Column (name="zip")
    private String zip;

    @Column (name="mobile")
    private String mobile;

    @Column (name="home_phone")
    private String homePhone;

    @Column (name="work_phone")
    private String workPhone;

    @OneToOne
    @JoinColumn (name="relationship_id", referencedColumnName="relationship_id")
    private Relationship relationship;

    @OneToOne
    @JoinColumn (name="groupid", referencedColumnName="groupid")
    private Group group;

    @OneToOne
    @JoinColumn (name="user_id", referencedColumnName="user_id")
    private User user;

    @OneToOne
    @JoinColumn (name="status_id", referencedColumnName="status_id")
    private Status status;

    public Contact() {
    }

    public long getContactId() {
        return contactId;
    }

    public void setContactId(long contactId) {
        this.contactId = contactId;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPersonalEmail() {
        return personalEmail;
    }

    public void setPersonalEmail(String personalEmail) {
        this.personalEmail = personalEmail;
    }

    public String getWorkEmail() {
        return workEmail;
    }

    public void setWorkEmail(String workEmail) {
        this.workEmail = workEmail;
    }

    public String getPrimaryAddress() {
        return primaryAddress;
    }

    public void setPrimaryAddress(String primaryAddress) {
        this.primaryAddress = primaryAddress;
    }

    public String getSecondaryAddress() {
        return secondaryAddress;
    }

    public void setSecondaryAddress(String secondaryAddress) {
        this.secondaryAddress = secondaryAddress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }

    public Country getCountry() {
        return country;
    }

    public void setCountry(Country country) {
        this.country = country;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getHomePhone() {
        return homePhone;
    }

    public void setHomePhone(String homePhone) {
        this.homePhone = homePhone;
    }

    public String getWorkPhone() {
        return workPhone;
    }

    public void setWorkPhone(String workPhone) {
        this.workPhone = workPhone;
    }

    public Relationship getRelationship() {
        return relationship;
    }

    public void setRelationship(Relationship relationship) {
        this.relationship = relationship;
    }

    public Group getGroup() {
        return group;
    }

    public void setGroup(Group group) {
        this.group = group;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Contact{" +
                "contactId=" + contactId +
                ", nickName='" + nickName + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", personalEmail='" + personalEmail + '\'' +
                ", workEmail='" + workEmail + '\'' +
                ", primaryAddress='" + primaryAddress + '\'' +
                ", secondaryAddress='" + secondaryAddress + '\'' +
                ", city='" + city + '\'' +
                ", state=" + state +
                ", country=" + country +
                ", zip='" + zip + '\'' +
                ", mobile='" + mobile + '\'' +
                ", homePhone='" + homePhone + '\'' +
                ", workPhone='" + workPhone + '\'' +
                ", relationship=" + relationship +
                ", group=" + group +
                ", user=" + user +
                ", status=" + status +
                '}';
    }
}
