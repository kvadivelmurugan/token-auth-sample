/**
 * This is the HeaderComponent
 * 
 * 
 * Developed by vini technology solutions
 */
import React, { Component, useContext } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import AuthService from '../../services/AuthService'

import './HeaderComponent.css'

class HeaderComponent extends Component {

    componentDidMount () {
        console.log ('HeaderComponent componentDidMount...')        
    }

    onClickLogout = this.onClickLogout.bind(this)

    render () {
        console.log ('HeaderComponent...render...')
        const isUserAuthenticated = this.props.isAuthenticated
        const loggedInUserName = this.props.loggedInUserName
        console.log (' isUserAuthenticated :: ' + isUserAuthenticated)
        console.log (' loggedInUserName :: ' + loggedInUserName)
        
        return (
            
            <nav id="navMain" className="navbar navbar-expand-lg navbar-dark bg-faded">
                <a className="navbar-brand" href="/home"><img src="/images/logo.jpg" height="20" width="20"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        {isUserAuthenticated && <li className="nav-item active">
                            <a className="nav-link" href="/home">Home<span className="sr-only">(current)</span></a>
                        </li>}
                        {isUserAuthenticated && this.hasRole ('ROLE_CONTACTS') &&  <li className="nav-item">
                            <a className="nav-link" href="/contacts">Contacts</a>
                        </li>}
                        {isUserAuthenticated && this.hasRole ('ROLE_EXPENSES') &&  <li className="nav-item">
                            <a className="nav-link" href="/expenses">Expenses</a>
                        </li>}
                        {isUserAuthenticated && this.hasRole ('ROLE_EVENTS') && <li className="nav-item">
                            <a className="nav-link" href="/events">Events</a>
                        </li>}                        
                        {isUserAuthenticated && this.hasRole ('ROLE_NOTES') &&  <li className="nav-item">
                            <a className="nav-link" href="/notes">Notes</a>
                        </li>}                                              
                    </ul>
                    
                    {isUserAuthenticated && 
                    <ul className="nav ml-auto">
                        <li className="nav-item dropdown"> 
                            <a className="nav-link dropdown-toggle navbar-text" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {loggedInUserName}
                            </a>
                            <div id="navDropDown" className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Account</a>
                            <a className="dropdown-item" href="#">Preferences</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#" onClick = {this.onClickLogout}>Logout</a>
                            </div>
                        </li> 
                    </ul>}
                </div>
            </nav>
        )
    }

    onClickLogout () {
        localStorage.removeItem("loggedInUser") 
        this.props.unRegisterLogin()       
        this.props.history.push ('/')
    }

    hasRole = (roleName) => {        
        //let roles = JSON.parse(this.props.roles)         
        let roles = this.props.roles
        console.log (roles)
        console.log ('roleName : ' + roleName)
        let isValid = false
        roles.map (
            (role) => {
                console.log (role.authority)
                if (role.authority === roleName) {
                    console.log ('present')
                    isValid = true
                }
            }
        )
        return isValid
    }
}

const mapStateToProps = (state) => {
    console.log ('HeaderComponent :: mapStateToProps ' + state.isAuthenticated)
    return {
        isAuthenticated : state.isAuthenticated,
        loggedInUserName : state.loggedInUserName,
        loggedInUserId : state.loggedInUserId,
        roles : state.roles
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log ('HeaderComponent ::: mapDispatchToProps ' )
    
        return {
            unRegisterLogin : () => {                
                dispatch ({type: 'UNREGISTER_LOGIN'})
            }
        }
    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderComponent))