
import React, { Component } from 'react'

class NoteForm extends Component {
    constructor(props) {
        super(props)
        this.handleClickOnBack = this.handleClickOnBack.bind(this)             
    }

    render() {
        return (
            <div className="card text-left">
                <div className="card-header bg-transparent">
                    <h4>Events</h4>
                    <p className="text-left">Notes {">"} Add</p>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 border-right border-primary">
                            <form>                        
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label for="inputNoteDate">Date</label>
                                        <input type="date" id="inputNoteDate" name="eventDate" className="form-control" />                                
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label for="inputNotes">Notes</label>
                                        <input type="text" className="form-control" id="inputNotes" placeholder="notesDetail" />
                                    </div>                
                                </div>                                            

                                <button type="submit" className="btn btn-primary">Submit</button> &nbsp;
                                <button type="submit" className="btn btn-primary">Reset</button> &nbsp;
                                <button type="submit" className="btn btn-primary" onClick={this.handleClickOnBack}>Back</button>
                            </form>     
                        </div>             
                        <div className="col-md-6 text-center">
                            <div class="col-md-4 py-1">
                                <div class="card">
                                    <div class="card-body">
                                        
                                    </div>
                                </div>                        
                            </div>    
                        </div>  
                    </div>   
                </div>             
            </div>
        )
    }

    handleClickOnBack () {
        this.props.history.push ("/notes")
    }
}

export default NoteForm