/**
 * This is the app root component of this application
 * 
 * 
 * Developed by vini technology solutions
 */
import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { UserContext } from '../contexts/UserContext.js'

import HeaderComponent from './header/HeaderComponent.jsx'
import LoginComponent from './login/LoginComponent.jsx'
import HomeComponent from './home/HomeComponent.jsx'
import ContactForm from './contact/ContactForm.jsx'
import ContactList from './contact/ContactList.jsx'
import ContactConfirm from './contact/ContactConfirm.jsx'
import ExpenseForm from './expense/ExpenseForm.jsx'
import ExpenseList from './expense/ExpenseList.jsx'
import EventForm from './event/EventForm.jsx'
import EventList from './event/EventList.jsx'
import NoteForm from './notes/NoteForm.jsx'
import NoteList from './notes/NoteList.jsx'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'


class AppComponent extends Component {
    constructor (props) {
        console.log ('constructor...')
        super (props)

        this.state = {
            isAuthenticated : this.isUserAuthenticated(),
            loggedInUserId: this.getLoggedInUserId(),
            loggedInUserName: this.getLoggedInUserName(), 
            roles: this.getLoggedInUserRoles()
        }
    }

    componentDidMount () {
        console.log ('App Component mounted...')
        console.log ('loggedInUserName ' + this.state.loggedInUserName)
        this.initialize ()
    }

    render () {
        console.log ('render...')
        return (
            <UserContext.Provider value= {{isAuthenticated: this.state.isAuthenticated, loggedInUserId: this.state.loggedInUserId, loggedInUserName: this.state.loggedInUserName, roles: this.state.roles, registerLogin : this.registerLogin}}>
                <div className="container-fluid">
                    
                    <Router>
                        <>
                            <HeaderComponent />
                            
                            <Switch>
                                <Route path="/" exact component={LoginComponent}  />                    
                                <Route path="/login" component={LoginComponent} />                    
                                <AuthenticatedRoute path="/home" component={HomeComponent}  isAuthenticated={this.state.isAuthenticated}/>                    
                                <AuthenticatedRoute path="/contacts" exact component={ContactList} isAuthenticated={this.state.isAuthenticated}/>                        
                                <AuthenticatedRoute path="/contacts/add" component={ContactForm} isAuthenticated={this.state.isAuthenticated}/>     
                                <AuthenticatedRoute path="/contacts/confirm" component={ContactConfirm} isAuthenticated={this.state.isAuthenticated}/>                        
                                <AuthenticatedRoute path="/expenses" exact component={ExpenseList} isAuthenticated={this.state.isAuthenticated}/>                        
                                <AuthenticatedRoute path="/expenses/add" component={ExpenseForm} isAuthenticated={this.state.isAuthenticated}/>                            
                                <AuthenticatedRoute path="/events" exact component={EventList} isAuthenticated={this.state.isAuthenticated}/>                        
                                <AuthenticatedRoute path="/events/add" component={EventForm} isAuthenticated={this.state.isAuthenticated}/>    
                                <AuthenticatedRoute path="/notes" exact component={NoteList} isAuthenticated={this.state.isAuthenticated}/>                        
                                <AuthenticatedRoute path="/notes/add" component={NoteForm} isAuthenticated={this.state.isAuthenticated}/>                            
                            </Switch>
                        </>
                    </Router>
                </div>
            </UserContext.Provider>
        )
    }

    initialize = () => {
        let isAuthenticated = sessionStorage.getItem ('isAuthenticated') 
        if (isAuthenticated) {
            let user = JSON.parse (sessionStorage.getItem ('user'))
            this.init (isAuthenticated, user)
        } else {
            this.initWithDefaultValue ()
        }
    }

    isUserAuthenticated = () => {
        let authHeader = sessionStorage.getItem ('authHeader')
        console.log (authHeader)
        if (authHeader) {
            return true
        }
        return false
    }
    
    registerLogin = (isAuthenticated, user) => {
        console.log (' App registerLogin ' + isAuthenticated + ' : ' + user.userId)
        this.init (isAuthenticated, user)
    }

    init = (isAuthenticated, user) => {
        console.log (' init called....' + isAuthenticated + ':' + user)
        this.setState ({
            isAuthenticated : isAuthenticated,
            loggedInUserId: user.userId,
            loggedInUserName: user.userName, 
            roles: user.roleList
        })
    }

    initWithDefaultValue = () => {
        console.log (' initWithDefaultValuet called....')
        this.setState ({
            isAuthenticated : false,
            loggedInUserId: '',
            loggedInUserName: '', 
            roles: []
        })
    }

    getLoggedInUserId = () => {
        if (this.isUserAuthenticated()) {
            let user = JSON.parse (sessionStorage.getItem ('user'))
            return user.userId
        } else {
            return ''
        }
    }

    getLoggedInUserName = () => {
        if (this.isUserAuthenticated()) {
            let user = JSON.parse (sessionStorage.getItem ('user'))
            return user.userName;
        } else {
            return ''
        }
    }

    getLoggedInUserRoles = () => {
        if (this.isUserAuthenticated()) {
            let user = JSON.parse (sessionStorage.getItem ('user'))
            return user.roleList;
        } else {
            return []
        }
    }
}

export default AppComponent