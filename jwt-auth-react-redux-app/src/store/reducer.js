const appInitialState = {
    isAuthenticated : false,
    loggedInUserName: '', 
    loggedInUserId: '', 
    roles: []
}

const appReducer = (state = appInitialState, action) => {
    console.log ('action.type === ' + action.type )
    console.log ('action.value === ' + action.value )

    switch (action.type) {
        case 'REGISTER_LOGIN': {            
            let loggedInUser = JSON.parse (action.value)
            console.log  ('loggedInUser ' + loggedInUser)
            return {
                isAuthenticated : true,
                loggedInUserName: loggedInUser.userName, 
                loggedInUserId: loggedInUser.userId, 
                roles: loggedInUser.authorities
            }
        }    
        case 'UNREGISTER_LOGIN': {
            return appInitialState
        }
        default : 
            return state
    }    
}

export default appReducer