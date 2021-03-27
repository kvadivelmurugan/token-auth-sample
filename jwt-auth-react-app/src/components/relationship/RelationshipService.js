import api from '../../services/_api'

class RelationshipService {
    getRelationships () {
        return api.get (`/relationships`)
    }
}

export default new RelationshipService()