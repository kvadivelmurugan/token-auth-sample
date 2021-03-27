import React, { Component, useContext } from 'react'
import { UserContext } from '../../contexts/UserContext.js'
import ErrorHandlerService from '../../services/ErrorHandlerService.js'
import AuthService from '../../services/AuthService.js'

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.handleClickOfLogin = this.handleClickOfLogin.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)

        this.state = {
            email: '',
            password: '',
            errorMessage: '',
            errors : {
                email: '',
                password: ''
            }
        }
    }

    static contextType = UserContext;

    render() {
        return (
            <>
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>                    
                </div>

                <div className="card col-4 offset-md-8">
                    <div className="card-header bg-light text-center">
                        <h4>Login</h4>
                        <h6 className="text-danger">{this.state.errorMessage}</h6>
                    </div>
                    <div className="card-body text-left">
                        <form>
                            
                            <div className="form-group">
                                <label for="inputEmail" >Email</label><span class="text-danger font-weight-bold required">*</span>
                                <input type="text" autoComplete="off" className="form-control" id="inputEmail" placeholder="Email" name="email" value={this.state.email} onChange={this.handleOnChange}/>
                                <p class="text-danger">{this.state.errors.email}</p>
                            </div>
                        
                        
                            <div className="form-group">
                                <label for="inputPassword">Password</label><span class="text-danger font-weight-bold required">*</span>
                                <input type="Password" autoComplete="off" className="form-control" id="inputPassword" placeholder="Password" name="password" value={this.state.password} onChange={this.handleOnChange}/>
                                <p class="text-danger">{this.state.errors.password}</p>
                            </div>
                            
                            
                            <div className="form-group text-center">                                    
                                <button type="button" className="btn btn-primary text-nowrap" onClick={this.handleClickOfLogin}>Login</button> &nbsp;
                                <button type="reset" className="btn btn-primary text-nowrap">Reset</button>
                            </div>
                            
                        </form>                        
                    </div>
                </div>
            </>
        )
    }

    handleClickOfLogin (event) {
        event.preventDefault()
        
        if (this.isValidForm()) {
            AuthService.doBasicAuth (this.state.email, this.state.password)
                .then((response) => {
                    console.log ('auth success' + response.data.userId)
                    console.log ('ROLE ' + response.data.roleList[0].roleName)
                    //AuthService.registerLogin (this.state.email, this.state.password, response.data.userId, response.data.roleList[0].roleName)
                    AuthService.registerLogin (true, response.data)
                    this.context.registerLogin (true, response.data)
                    this.props.history.push ("/home")
                }).catch(
                (error) => {
                    this.setState ({
                        errorMessage : ErrorHandlerService.handleError (error) 
                    })
                })
        }
    }

    handleOnChange (event) {
        this.setState ({
            [event.target.name] : event.target.value
        })
    }

    isValidForm = () => {
        let isValid = true;
        let errors = this.state.errors

        console.log (this.state.email)
        if (this.state.email.length <= 0) {
            isValid = false
            errors.email = 'Please enter email'
        }
        
        if (this.state.password.length < 4) {
            isValid = false
            errors.password = 'Please enter password'
        }

        this.setState ({
            errors: errors
        })
        console.log (isValid)
        return isValid;
    }
}

export default LoginComponent