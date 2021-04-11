import api from '../../services/_api'

class GroupService {
    getGroups () {
        return api.get (`/groups`)
    }
}

export default new GroupService()