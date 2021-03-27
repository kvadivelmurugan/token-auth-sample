import React, { Component } from 'react'

class ConfirmationComponent extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="card text-left">
                <div className="card-header bg-transparent">
                    <h4>{this.props.title}</h4>
                    <p className="text-left">{this.props.subTitle}</p>
                </div>
                <div className="card-body">
                    <div class="alert alert-success" role="alert">
                        {this.props.content}
                    </div>
                
                    <button type="button" className="btn btn-primary" onClick={this.handleClickOnBack}> {this.props.navigateToBack} </button> &nbsp;
                    <button type="button" className="btn btn-primary" onClick={this.handleClickOnAnother}>{this.props.navigateToOnAnother}</button> &nbsp;
                    
                </div>
            </div>
        )
    }

    handleClickOnBack = () => {
        console.log (this.props.navigateToOnBackLink)
        this.props.history.push (this.props.navigateToOnBackLink)
    }

    handleClickOnAnother = () => {
        this.props.history.push (this.props.navigateToOnAnotherLink)
    }
}

export default ConfirmationComponent