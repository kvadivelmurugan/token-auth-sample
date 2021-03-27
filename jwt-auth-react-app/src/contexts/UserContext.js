import React, { Context } from 'react'

export const UserContext = React.createContext(
    { 
        isAuthenticated: false, 
        loggedInUserId: '',
        loggedInUserName: 'k.vadivelmurugan', 
        roles: [],
        registerLogin: (username, password) => { } 
    })