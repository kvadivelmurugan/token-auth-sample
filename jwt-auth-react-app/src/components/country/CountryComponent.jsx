import React, {Component} from 'react'
import CountryService from './CountryService'

class CountryComponent extends Component {
    constructor (props) {
        super (props)

        this.state = {
            countryList : []
        }
    }

    componentDidMount () {
        this.getCountries ()
    }

    render () {
        return (
            <>
                <label for="inputCountry">Country</label>
                <select id="inputCountry" className="form-control" name={this.props.componentName.countryId} value={this.props.selectedCountry.countryId} onChange={this.props.onChangeMethod}>
                    <option key="0" value="0">Choose a Country...</option>
                    {                            
                        this.state.countryList.map ((country) => {
                            return (
                                <option key={country.countryId} value={country.countryId}>{country.countryName}</option>
                            )
                        })
                    }
                </select>
            </>
        )
    }

    getCountries = () => {
        CountryService.getCountries ()
            .then ((response) => {
                this.setState ({
                    countryList:response.data
                })                    
            })
            .catch ((error) => {

            })
    }
}
 
export default CountryComponent