
import React, { Component } from 'react'


class EventList extends Component {
    constructor(props) {
        super(props)

        this.handleClickOfAddEvent = this.handleClickOfAddEvent.bind(this)
    }

    render() {
        return (
            <div className="card text-left">
                <div className="card-header bg-transparent">
                    <h4>Events</h4>
                    <p className="text-left">Events {">"} List</p>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-2">
                                <label for="inputYear">Year</label>
                                <select id="inputYear" className="form-control" name="expenseYear">
                                    <option value="0">Choose...</option>
                                    <option value="2020">2020</option>
                                    <option value="2021" selected>2021</option>
                                    <option value="2021">2022</option>
                                    <option value="2022">2023</option>
                                    <option value="2023">2024</option>
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label for="inputMonth">Month</label>
                                <select id="inputMonth" className="form-control" name="expenseMonth">
                                    <option value="0" selected>Choose...</option>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                            </div>


                            <div className="form-group col-md-1">
                                <label for="btnSubmit">&nbsp;</label>
                                <button type="button" className="form-control btn btn-primary">Submit</button> &nbsp;
                            </div>
                            <div className="form-group col-md-1">
                                <label for="btnReset">&nbsp;</label>
                                <button type="reset" className="form-control btn btn-primary">Reset</button> &nbsp;
                            </div>
                            <div className="form-group col-md-1 ml-auto ">
                                <label for="btnAddEvent">&nbsp;</label>
                                <button type="button" className="btn btn-primary text-nowrap" onClick={this.handleClickOfAddEvent}>Add Event</button>
                            </div>
                        </div>
                    </form>

                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th scope="col">Nick name</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile #</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>                                
                                <td>Mark</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Otto@gmail.com</td>
                                <td>+91-44-12121123232</td>                                
                            </tr>
                            <tr>
                                <td>Mark</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Otto@gmail.com</td>
                                <td>+91-44-12121123232</td>                              
                            </tr>
                            <tr>
                                <td>Mark</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Otto@gmail.com</td>
                                <td>+91-44-12121123232</td>                              
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    handleClickOfAddEvent() {
        this.props.history.push("/events/add")
    }

}

export default EventList