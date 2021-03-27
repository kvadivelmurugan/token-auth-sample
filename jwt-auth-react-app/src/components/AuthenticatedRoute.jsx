import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthService from '../services/AuthService'


class AuthenticatedRoute extends Component {
    constructor (props) {
        super (props)
    }

    render () {
        console.log ('isUserAuthenticated ::: ' + this.props.isAuthenticated)
        if (this.props.isAuthenticated) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/login" />
        }
        
    }
}

export default AuthenticatedRoute