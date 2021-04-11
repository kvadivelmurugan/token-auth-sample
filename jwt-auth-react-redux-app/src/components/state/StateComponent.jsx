import React, {Component} from 'react'
import StateService from './StateService'

class StateComponent extends Component {
    constructor (props) {
        super (props)

        this.state = {
            stateList : []
        }
    }

    componentWillReceiveProps (nextProps) {
        console.log ('componentWillReceiveProps....')
        const {selectedCountry} = this.props.selectedCountry

        console.log ('props param ' + nextProps.selectedCountry)

        console.log ('this.props ' + this.props)
        console.log ('props.selectedCountry ' + nextProps.selectedCountry)
        console.log ('this.props.selectedCountry ' + this.props.selectedCountry)
        if (nextProps.selectedCountry !== this.props.selectedCountry) {
            this.getStatesByCountry (nextProps.selectedCountry)
        }
    }

    render () {        
        return (
            <>                
                <label for="inputState">State</label>
                <select id="inputState" className="form-control" name={this.props.componentName.stateId} value={this.props.selectedState.stateId} onChange={this.props.onChangeMethod}>
                    <option key="0" value="0">Choose a State...</option>
                    {                            
                        this.state.stateList.map ((state) => {
                            return (
                                <option key={state.stateId} value={state.stateId}>{state.stateName}</option>
                            )
                        })
                    }
                </select>
            </>
        )
    }

    getStatesByCountry = (countryId) => {
        StateService.getStatesByCountry (countryId)
            .then ((response) => {
                this.setState ({
                    stateList:response.data
                })                    
            })
            .catch ((error) => {

            })
    }
}
 
export default StateComponent