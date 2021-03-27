
import React, { Component } from 'react'
import AuthService from '../../services/AuthService'
import ContactService from './ContactService'
import ErrorHanlderComponent from '../common/ErrorHandlerComponent'

class ContactList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contactList : [],
            error : ''
        }

        this.handleClickOfAddContact = this.handleClickOfAddContact.bind(this)
        this.getContacts = this.getContacts.bind(this)
    }


    componentDidMount () {
        this.getContacts()
        console.log ("Contact List " + this.state.contactList)

    }

    render() {
        return (
            <div className="card text-left">
                <div className="card-header bg-transparent">
                    <h4>Contacts</h4>
                    <p className="text-left">Contacts {">"} List</p>
                    {this.state.error && <ErrorHanlderComponent error = {this.state.error}/>}
                </div>
                <div className="card-body">
                    <div className="row">
                        <div class="col-md-10">
                            <p>
                                <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Search
                                </a>
                            </p>
                        </div>
                        <div class="col-md-2 text-right">
                            <label for="btnAddContact">&nbsp;</label>
                            <button type="button" className="btn btn-primary text-nowrap" onClick={this.handleClickOfAddContact}>Add Contact</button>
                        </div>
                    </div>
                    <div class="collapse" id="collapseExample">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-2">
                                    <label for="inputName4">Name</label>
                                    <input type="text" className="form-control" id="inputName4" placeholder="Name" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label for="inputMobile">Mobile #</label>
                                    <input type="text" className="form-control" id="inputMobile" />
                                </div>

                                <div className="form-group col-md-1">
                                    <label for="btnSubmit">&nbsp;</label>
                                    <button type="button" className="form-control btn btn-primary">Submit</button> &nbsp;
                                </div>
                                <div className="form-group col-md-1">
                                    <label for="btnReset">&nbsp;</label>
                                    <button type="reset" className="form-control btn btn-primary">Reset</button> &nbsp;
                                </div>

                            </div>
                        </form>
                    </div>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th scope="col">Nick name</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Personal Email</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Relationship</th>
                                <th scope="col">Group</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.contactList.map (
                                    (contact) => {
                                        return (
                                            <tr>                                
                                                <td>{contact.nickName}</td>
                                                <td>{contact.firstName}</td>
                                                <td>{contact.personalEmail}</td>
                                                <td>{contact.mobile}</td>
                                                <td>{contact.relationship.relationshipName}</td>  
                                                <td>{contact.group.groupName}</td>                               
                                            </tr>
                                        )
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    handleClickOfAddContact() {
        this.props.history.push("/contacts/add")
    }

    getContacts () {
        let userId = AuthService.getLoggedInUserId ();
        
        ContactService.getContacts (userId)
        .then ((response) => {
            console.log ('response ' + response.data)
            this.setState ({
                contactList : response.data
            })
        }).catch ((error) => {
            this.setState ({
                error : error
            }) 
        })
    }
}

export default ContactList