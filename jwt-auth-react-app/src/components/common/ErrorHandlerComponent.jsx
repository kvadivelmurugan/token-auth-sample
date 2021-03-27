import React, { Component } from 'react'

import ErrorHandlerService from '../../services/ErrorHandlerService'

class ErrorHanlderComponent extends Component {

    render() {
        
        return (
            <>
               <p className="text-center text-danger">{ErrorHandlerService.handleError (this.props.error)}</p>
            </>
        )
    }
}

export default ErrorHanlderComponent