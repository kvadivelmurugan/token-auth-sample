import React, { Component } from 'react'

class ConfirmModalComponent extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        console.log ('ConfirmModalComponent called...')
        return (
            
            <>
                <div class="modal fade" id="confirmModal" tabindex="-1" role="dialog" aria-labelledby="confirmModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="confirmModalLabel">Confirmation</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Are you sure you want to save ?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={this.props.handleOnClickNo}>Cancel</button>
                            <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.props.handleOnClickYes}>Save</button>
                        </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ConfirmModalComponent