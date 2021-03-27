import React, { Component } from 'react'
import {Switch } from 'react-router-dom'
import AuthenticatedRoute from '../AuthenticatedRoute.jsx'

import Header2Component from '../header/Header2Component'
import HomeComponent from './HomeComponent'

import ContactForm from '../contact/ContactForm.jsx'
import ContactList from '../contact/ContactList.jsx'
import ContactConfirm from '../contact/ContactConfirm.jsx'
import ExpenseForm from '../expense/ExpenseForm.jsx'
import ExpenseList from '../expense/ExpenseList.jsx'
import EventForm from '../event/EventForm.jsx'
import EventList from '../event/EventList.jsx'
import NoteForm from '../notes/NoteForm.jsx'
import NoteList from '../notes/NoteList.jsx'

import './HomeComponent.css'

class Home2Component extends Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
            <>
                <Header2Component />
                <Switch>                                            
                    <AuthenticatedRoute path="/contacts" exact component={ContactList} />                        
                    <AuthenticatedRoute path="/contacts/add" component={ContactForm} />     
                    <AuthenticatedRoute path="/contacts/confirm" component={ContactConfirm} />                        
                    <AuthenticatedRoute path="/expenses" exact component={ExpenseList} />                        
                    <AuthenticatedRoute path="/expenses/add" component={ExpenseForm} />                            
                    <AuthenticatedRoute path="/events" exact component={EventList} />                        
                    <AuthenticatedRoute path="/events/add" component={EventForm} />    
                    <AuthenticatedRoute path="/notes" exact component={NoteList} />                        
                    <AuthenticatedRoute path="/notes/add" component={NoteForm} />                            
                </Switch>
            </>
        )
    }
}

export default Home2Component