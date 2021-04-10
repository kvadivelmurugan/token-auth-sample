import axios from "axios"

import api from "./_api.js"
import RoleModel from './../models/RoleModel'
class AuthService {

    doAuth (username, password) {
        console.log (username + " " + password)        

        return api.post ('auth/token', 
            {username : username,
            password : password }
        )
    }

    getRoles (userName) {
        return api.get (`roles/${userName}`)
    }

    registerLogin (flag, user) {
        console.log ('registerLogin called...')
        sessionStorage.setItem('userId', user.userId)        
        sessionStorage.setItem('userName', user.userName)        
        sessionStorage.setItem('jwtToken', user.jwtToken)
        sessionStorage.setItem('roles', JSON.stringify(user.authorities))
        console.log ('Roles :: ' + JSON.stringify(user.authorities))
        sessionStorage.setItem ('isAuthenticated', flag)       
    }

    UnregisterLogin (userName) {
        sessionStorage.removeItem('userName')
        sessionStorage.removeItem('jwtToken')
        sessionStorage.removeItem('userId')
        sessionStorage.removeItem('roles')
        sessionStorage.removeItem ('isAuthenticated')
    } 

    getLoggedInUserName() {
        return sessionStorage.getItem ('userName');
    }

    getLoggedInUserId() {
        return sessionStorage.getItem ('userId');
    }

    isUserAuthenticated () {
        let jwtToken = sessionStorage.getItem ('jwtToken')
        console.log (jwtToken)
        if (jwtToken) {
            return true
        }
        return false
    }
}

export default new AuthService()