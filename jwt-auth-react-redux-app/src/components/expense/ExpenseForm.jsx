
import React, { Component } from 'react'

class ExpenseForm extends Component {
    constructor(props) {
        super(props)
        this.handleClickOnBack = this.handleClickOnBack.bind(this)             
    }

    render() {
        return (
            <div className="card text-left">
                <div className="card-header bg-transparent">
                    <h4>Expenses</h4>
                    <p className="text-left">Expenses {">"} Add</p>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 border-right border-primary">
                            <form>                        
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label for="inputExpenseDate">Date</label>
                                        <input type="date" id="inputExpenseDate" name="expenseDate" className="form-control" />                                
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label for="inputExpenseDesc">Description</label>
                                        <input type="text" className="form-control" id="inputExpenseDesc" placeholder="Description" />
                                    </div>                
                                </div>            
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label for="inputExpenseCategory">Category</label>
                                        <select id="inputExpenseCategory" className="form-control">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label for="inputExpenseAmount">Amount</label>
                                        <input type="text" className="form-control" id="inputExpenseAmount" placeholder="Amount" />
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
        this.props.history.push ("/expenses")
    }
}

export default ExpenseForm