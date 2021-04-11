import api from '../../services/_api'

class CountryService {
    getCountries () {
        return api.get (`/countries`)
    }
}

export default new CountryService()