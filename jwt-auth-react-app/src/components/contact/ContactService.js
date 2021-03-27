import api from "../../services/_api"

import ContactModel from '../../models/ContactModel'

class ContactService {
    getContacts (userId) {
        return api.get (`contacts/${userId}`)
    }

    saveContact (contact) {
        return api.put ('contacts', contact)
    }
}

export default new ContactService() 