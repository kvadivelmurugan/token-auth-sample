
import React, { Component } from 'react'

import CountryComponent from '../country/CountryComponent.jsx'
import StateComponent from '../state/StateComponent.jsx'
import RelationshipComponent from '../relationship/RelationshipComponent.jsx'
import GroupComponent from '../group/GroupComponent.jsx'

import ConfirmModalComponent from '../modal/ConfirmModalComponent.jsx'
import ContactModel from '../../models/ContactModel'

import AuthService from '../../services/AuthService'
import ContactService from './ContactService'

class ContactForm extends Component {
    constructor(props) {
        console.log ('getLoggedInUserId ' + AuthService.getLoggedInUserId())
        super(props)

        this.state = {
            contact : ContactModel,
            showConfirmModal : false,
            isValid : false,
            errors : {
                nickName : '',
                personalEmail : '',
                primaryAddress : '',
                relationship : '',
                group : ''
            }        
        }              
    }

    componentDidMount () {
        this.initialize () 
    }

    render() {
        return (
            <div className="card text-left">
                <div className="card-header bg-transparent">
                    <h4>Contacts</h4>
                    <p className="text-left">Contacts {">"} Add</p>
                </div>
                <div className="card-body">
                    <form autoComplete="off">
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label for="inputNickName4">Nick name</label><span class="text-danger font-weight-bold required">*</span>
                                <input type="hidden" className="form-control" id="inputUserId" placeholder="userId" name="userId" value={this.state.contact.nickName}/>
                                <input type="text" autoComplete="off" className="form-control" id="inputNickName4" placeholder="Nick name" name="nickName" value={this.state.contact.nickName} onChange={this.handleOnChange}/>
                                <p class="text-danger">{this.state.errors.nickName}</p>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputFirstname4">First name</label>
                                <input type="text" autoComplete="off" className="form-control" id="inputFirstname4" placeholder="First name" name="firstName" value={this.state.contact.firstName} onChange={this.handleOnChange}/>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputLastname4">Last name</label>
                                <input type="text" autoComplete="off" className="form-control" id="inputLastname4" placeholder="Last name" name="lastName" value={this.state.contact.lastName} onChange={this.handleOnChange}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputPersonalEmail4">Personal Email</label><span class="text-danger font-weight-bold required">*</span>
                                <input type="email" autoComplete="off" className="form-control" id="inputPersonalEmail4" placeholder="Primary Email" name="personalEmail" value={this.state.contact.personalEmail} onChange={this.handleOnChange}/>
                                <p class="text-danger">{this.state.errors.personalEmail}</p>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputWorkEmail4">Office Email</label>
                                <input type="email" autoComplete="off" className="form-control" id="inputWorkEmail4" placeholder="Secondary Email" name="workEmail" value={this.state.contact.workEmail} onChange={this.handleOnChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputAddress">Door# / Block# / Apartment Name</label><span class="text-danger font-weight-bold required">*</span>
                            <input type="text" autoComplete="off" className="form-control" id="inputAddress" placeholder="Door# / Block# / Apartment Name" name="primaryAddress" value={this.state.contact.primaryAddress} onChange={this.handleOnChange}/>
                            <p class="text-danger">{this.state.errors.primaryAddress}</p>
                        </div>
                        <div className="form-group">
                            <label for="inputAddress2">Street Name / Area Name</label><span class="text-danger font-weight-bold required">*</span>
                            <input type="text" autoComplete="off" className="form-control" id="inputAddress2" placeholder="Street Name / Area Name" name="secondaryAddress" value={this.state.contact.secondaryAddress} onChange={this.handleOnChange}/>
                            <p class="text-danger">{this.state.errors.secondaryAddress}</p>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                {/* <label for="inputState">State</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select> */ }

                                <CountryComponent componentName="country" selectedCountry={this.state.contact.country} onChangeMethod={this.handleCountryOnChange} /> 

                                {/* <label for="inputCountry">Country</label>
                                <select id="inputCountry" className="form-control" name="countryId" 
                                    value={this.state.contact.countryId}
                                    onChange={this.handleOnChange}>
                                    <option key="0" value="0">Choose a Country...</option>
                                    {                            
                                        this.state.countryList.map ((country) => {
                                            return (
                                                <option key={country.countryId} value={country.countryId}>{country.countryName}</option>
                                            )
                                        })
                                    }
                                </select> */}
                            </div>
                            <div className="form-group col-md-3">
                                {/* <label for="inputState">State</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select> */}

                                <StateComponent componentName="state" selectedCountry={this.state.contact.country.countryId}  selectedState={this.state.contact.state} onChangeMethod={this.handleStateOnChange}/>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputCity">City</label>
                                <input type="text" autoComplete="off" className="form-control" id="inputCity" placeholder="City Name" name="city" value={this.state.contact.city} onChange={this.handleOnChange}/>
                            </div>
                            
                            <div className="form-group col-md-2">
                                <label for="inputZip">Zip</label>
                                <input type="text" autoComplete="off" className="form-control" id="inputZip" name="zip" value={this.state.contact.zip} onChange={this.handleOnChange}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-2">
                                <label for="inputMobile">Mobile #</label>
                                <input type="text" autoComplete="off" className="form-control" id="inputMobile" name="mobile" value={this.state.contact.mobile} onChange={this.handleOnChange}/>
                            </div>
                            <div className="form-group col-md-2">
                                <label for="inputHome">Home #</label>
                                <input type="text" autoComplete="off" className="form-control" id="inputHome" name="homePhone" value={this.state.contact.homePhone} onChange={this.handleOnChange}/>
                            </div>
                            <div className="form-group col-md-2">
                                <label for="inputWork">Work #</label>
                                <input type="text" autoComplete="off" className="form-control" id="inputWork" name="workPhone" value={this.state.contact.workPhone} onChange={this.handleOnChange}/>                                
                            </div>
                            <div className="form-group col-md-3">
                                <RelationshipComponent autoComplete="off" componentName="relationship" selectedRelationship={this.state.contact.relationship} onChangeMethod={this.handleRelationshipOnChange} isError={this.state.errors.relationship}/> 
                            </div>
                            <div className="form-group col-md-3">
                                <GroupComponent autoComplete="off" componentName="group" selectedGroup={this.state.contact.group} onChangeMethod={this.handleGroupOnChange} isError={this.state.errors.group}/> 
                            </div>                                                       

                        </div>                        
                        <div className="form-row">
                        </div>
                        <button type="button" className="btn btn-primary" onClick={this.showConfirmDialog} data-target={this.state.isValid ? "#confirmModal" : undefined} data-toggle='modal'  >Submit</button> &nbsp;
                        <button type="button" className="btn btn-primary">Reset</button> &nbsp;
                        <button type="button" className="btn btn-primary" onClick={this.handleClickOnBack}>Back</button>
                    </form>

                    <ConfirmModalComponent handleOnClickYes={this.handleClickOnYes} handleOnClickNo={this.handleClickOnNo}/>
                </div>                
            </div>
        )
    }
    
    handleClickOnBack = () => {
        this.props.history.push ("/contacts")
        console.log (this.state.contact)    
    }

    handleOnChange = (event) => {
        console.log ('object ' + event.target.name)
        console.log ('value ' + event.target.value)
        this.setState ({
            contact: { ...this.state.contact, [event.target.name]: event.target.value }
        })
        console.log ('country ' + this.state.contact.countryId)
    }

    handleCountryOnChange = (event) => {
        console.log ('object ' + event.target.name)
        console.log ('value ' + event.target.value)

        let country = this.state.contact.country

        country.countryId = event.target.value

        this.setState ({
            contact: { ...this.state.contact, country: country }
        })
        console.log ('country ' + this.state.contact.country.countryId)
    }

    handleStateOnChange = (event) => {
        console.log ('object ' + event.target.name)
        console.log ('value ' + event.target.value)

        let state = this.state.contact.state

        state.stateId = event.target.value

        this.setState ({
            contact: { ...this.state.contact, state: state }
        })
        console.log ('state ' + this.state.contact.state.stateId)
    }    

    handleRelationshipOnChange = (event) => {
        console.log ('object ' + event.target.name)
        console.log ('value ' + event.target.value)

        let relationship = this.state.contact.relationship

        relationship.relationshipId = event.target.value

        this.setState ({
            contact: { ...this.state.contact, relationship: relationship }
        })
        console.log ('relationship ' + this.state.contact.relationship.relationshipId)
    }    

    handleGroupOnChange = (event) => {
        console.log ('object ' + event.target.name)
        console.log ('value ' + event.target.value)

        let group = this.state.contact.group

        group.groupId = event.target.value

        this.setState ({
            contact: { ...this.state.contact, group: group }
        })
        console.log ('group ' + this.state.contact.group.groupId)
    }   
    
    showConfirmDialog = (event) => {
        console.log ('showConfirm')
        event.preventDefault()
        if (this.isValidForm()) {
            this.setState ( {
                showConfirmModal : !this.state.showConfirmModal
            })
        }
    }

    isValidForm = () => {
        
        let isValid = true;

        let errors = {
            nickName : '',
            personalEmail : '',
            primaryAddress : '',
            relationship : '',
            group : ''
        }

        let contact = this.state.contact

        console.log ('this.state.contact.nickName ' + this.state.contact.nickName)
        if (!contact.nickName) {
            isValid = false
            errors.nickName = 'Please enter Nick Name'
        }

        if (!this.state.contact.personalEmail) {
            isValid = false
            errors.personalEmail = 'Please enter Personal Email'
        }

        if (!this.state.contact.primaryAddress) {
            isValid = false
            errors.primaryAddress = 'Please enter Primary Address'
        }

        if (!this.state.contact.relationship.relationshipId) {
            isValid = false
            errors.relationship = 'Please choose the Relationship'
        }

        console.log ('this.state.contact.group.groupId  ' + this.state.contact.group.groupId )
        if (!   this.state.contact.group.groupId) {
            isValid = false
            errors.group = 'Please choose the Group'
        }
        console.log ('isValid ' + isValid)
        this.setState ({
            isValid : isValid,
            errors: errors
        })
        
        return isValid
    }

    handleClickOnYes = () => {
        console.log ('Yes')    
        ContactService.saveContact (this.state.contact)
            .then ((response) => {
                console.log ('contact saved...') 
                this.props.history.push ('/contacts/confirm')
            }) 
            .catch ( (response) => {
                console.log ('contact save failed...')    
            })
    }

    handleClickOnNo = () => {
        console.log ('No')    

    }

    handleClickOnYes = () => {
        console.log ('Yes')    
        ContactService.saveContact (this.state.contact).then ( (response) => {
                console.log ('contact saved...')  
                this.props.history.push ("/contacts/confirm")  
            }
        ) .catch ( (response) => {
                console.log ('contact save failed...')    
            }
        )
    }

    handleOnClickClose = () => {
        console.log ('No')    

    }

    initialize = () => {
        console.log ('pre-initialize ' + this.state.contact)
        let user = this.state.contact.user
        user.userId = AuthService.getLoggedInUserId()

        let status = this.state.contact.status
        status.statusId = 100
          
        this.setState ({
            contact: { ...this.state.contact, user: user },
            contact: { ...this.state.contact, status: status }
        }) 
    }

}
export default ContactForm