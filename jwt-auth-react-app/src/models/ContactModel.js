import GroupModel from './GroupModel'
import RelationshipModel from './RelationshipModel'
import CountryModel from './CountryModel'
import StateModel from './StateModel'
import UserModel from './UserModel'
import StatusModel from './StatusModel'

const ContactModel = {
    contactId : '', 
	nickName : '', 
	firstName : '', 
	lastName : '', 
	personalEmail : '',
	workEmail : '',
	primaryAddress : '',
	secondaryAddress : '',
	city : '',
	state : StateModel,
	country : CountryModel,
	zip : '',
	mobile : '',
	homePhone : '',
	workPhone : '',
	relationship : RelationshipModel,
	group : GroupModel,	
	status : StatusModel,
	user : UserModel
}

export default ContactModel