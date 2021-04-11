import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class AuthenticatedRoute extends Component {
    constructor (props) {
        super (props)
    }

    render () {
        console.log ('AuthenticatedRoute :: isUserAuthenticated ::: ' + this.props.isAuthenticated + " Route :::: " + this.props.path)
        if (this.props.isAuthenticated) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/login" />
        }
        
    }
}

const mapStateToProps = (state) => {
    console.log ('AuthenticatedRoute :: mapStateToProps ' + state.isAuthenticated)
    return {
        isAuthenticated : state.isAuthenticated              
    }
}

export default connect(mapStateToProps)(AuthenticatedRoute)