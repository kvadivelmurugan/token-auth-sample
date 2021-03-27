import api from '../../services/_api'

class StateService {
    getStatesByCountry (countryId) {
        return api.get (`/states/${countryId}`)
    }
}

export default new StateService()