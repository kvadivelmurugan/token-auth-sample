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
            <UserContext.Provider value= {{isAuthenticated: this.state.isAuthenticated, loggedInUserName: this.state.loggedInUserName, roles: this.state.roles, registerLogin : this.registerLogin}}>
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
            let userId  = sessionStorage.getItem ('userId')        
            let userName  = sessionStorage.getItem ('userName') 
            let jwtToken = sessionStorage.getItem ('jwtToken')        
            let roles = sessionStorage.getItem ("roles")
            console.log ('Roles :: ' + roles[0].authority)
            this.init (isAuthenticated, userId, userName, jwtToken, roles)
        } else {
            this.initWithDefaultValue ()
        }
    }

    isUserAuthenticated = () => {
        let jwtToken = sessionStorage.getItem ('jwtToken')
        console.log (jwtToken)
        if (jwtToken) {
            return true
        }
        return false
    }
    
    registerLogin = (isAuthenticated, userId, userName, jwtToken, roles) => {
        console.log (' App registerLogin ' + isAuthenticated + ' : ' + userName)
        this.init (isAuthenticated, userId, userName, jwtToken, JSON.stringify(roles))
    }

    init = (isAuthenticated, userId, userName, jwtToken, roles) => {
        console.log (' init called....' + isAuthenticated + ':' + userName + ':' + jwtToken + ':' + roles)
        this.setState ({
            isAuthenticated : isAuthenticated,
            loggedInUserName: userName, 
            loggerInUserId: userId,
            roles: roles
        })
    }

    initWithDefaultValue = () => {
        console.log (' initWithDefaultValuet called....')
        this.setState ({
            isAuthenticated : false,
            loggedInUserName: '', 
            loggedInUserId: '', 
            roles: []
        })
    }

    getLoggedInUserName = () => {
        if (this.isUserAuthenticated()) {
            let userName  = sessionStorage.getItem ('userName')  
            return userName;
        } else {
            return ''
        }
    }

    getLoggedInUserId = () => {
        if (this.isUserAuthenticated()) {
            let userId  = sessionStorage.getItem ('userId')  
            return userId;
        } else {
            return ''
        }
    }

    getLoggedInUserRoles = () => {
        if (this.isUserAuthenticated()) {
            let roles = sessionStorage.getItem ("roles")
            return roles;
        } else {
            return []
        }
    }
}

export default AppComponent