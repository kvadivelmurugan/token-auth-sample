import axios from "axios"

import api from "./_api.js"
import RoleModel from './../models/RoleModel'
class AuthService {

    doBasicAuth (userName, password) {
        console.log (userName + " " + password)

        let authHeader = this.getAuthHeader (userName, password)

        return api.post ('auth/basic?userName='+userName, 
            { }, 
            {
                headers: {
                    authorization: authHeader
                    //'Access-Control-Allow-Origin': 'http://localhost:3000',
                    //'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
                }
            })
    }

    getRoles (userName) {
        return api.get (`roles/${userName}`)
    }

    registerLogin (userName, password, userId, roleName) {
        console.log ('registerLogin called...')
        sessionStorage.setItem('userName', userName)
        sessionStorage.setItem('userId', userId)

        let authHeader = this.getAuthHeader(userName, password)
        sessionStorage.setItem('authHeader', authHeader)
        //this.setupAxiosInterceptorForRequest (authHeader)
    }

    registerLogin (flag, user) {
        console.log ('registerLogin called...')
        sessionStorage.setItem('userName', user.userName)
        sessionStorage.setItem('userId', user.userId)

        let authHeader = this.getAuthHeader(user.userName, user.password)
        sessionStorage.setItem('authHeader', authHeader)
        //this.setupAxiosInterceptorForRequest (authHeader)
        sessionStorage.setItem ('isAuthenticated', flag)
        sessionStorage.setItem ('user', JSON.stringify(user))
    }

    setupAxiosInterceptorForRequest (authHeader) {
        console.log ('interceptors called') 
        axios.interceptors.request.use (
            (config) => {
                if (this.isUserAuthenticated ()) {                                       
                    config.headers['authorization'] = authHeader                  
                }
                return config
            }
        )
    }

    UnregisterLogin (userName) {
        sessionStorage.removeItem('userName')
        sessionStorage.removeItem('userId')
        sessionStorage.removeItem('authHeader')
        sessionStorage.removeItem('user')
        sessionStorage.removeItem ('isAuthenticated')
    } 

    getLoggedInUserName() {
        return sessionStorage.getItem ('userName');
    }

    getLoggedInUserRoleName() {
        return sessionStorage.getItem ('roleName');
    }

    getLoggedInUserId() {
        return sessionStorage.getItem ('userId');
    }

    getAuthHeader (userName, password) {
        return 'Basic ' + window.btoa(userName + ":" + password)
    }

    isUserAuthenticated () {
        let userName = sessionStorage.getItem ('authHeader')
        console.log (userName)
        if (userName) {
            return true
        }
        return false
    }
}

export default new AuthService()