import React, { Context } from 'react'

export const UserContext = React.createContext(
    { 
        isAuthenticated: false,         
        loggedInUserName: 'k.vadivelmurugan', 
        roles: [],
        registerLogin: (username, password) => { } 
    })