import React, { Component } from 'react'

import ConfirmationComponent from '../modal/ConfirmationComponent.jsx'

class ContactConfirm extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
           <ConfirmationComponent title="Contacts" subTitle="Contacts > Confirm" content="Your contact is saved successfully !!!" navigateToBack="Contact List" navigateToOnAnother="Add Another Contact" navigateToBack ="Contact List" navigateToOnAnotherLink="/contacts/add" navigateToOnBackLink="/contacts/" history={this.props.history} /> 
        )
    }
}

export default ContactConfirm