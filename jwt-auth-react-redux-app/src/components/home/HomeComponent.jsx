import React, { Component } from 'react'

import './HomeComponent.css'

class HomeComponent extends Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
            <>                
                <div className="card text-left">
                    <div className="card-header bg-transparent">
                        <h4>Home</h4>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="card">
                                    <img className="card-img-top" src="images/contacts.jpg" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Contacts</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>                  
                            </div>                        
                            <div className="col-sm-3">
                                <div className="card">
                                    <img className="card-img-top" src="images/expenses.jpg" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Expenses</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>                  
                            </div>                        
                            <div className="col-sm-3">
                                <div className="card">
                                    <img className="card-img-top" src="images/events.jpg" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Events</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>                  
                            </div>
                            <div className="col-sm-3">
                                <div className="card">
                                    <img className="card-img-top" src="images/notes.png" alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Notes</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>                  
                            </div>
                        </div>
                    </div>
                    <div className="card-footer bg-transparent"><a href="#" className ="btn btn-primary">Go somewhere</a></div>
                </div>
            </>
        )
    }

}

export default HomeComponent