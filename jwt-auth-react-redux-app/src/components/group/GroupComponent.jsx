import React, {Component} from 'react'
import GroupService from './GroupService'

class GroupComponent extends Component {
    constructor (props) {
        super (props)

        this.state = {
            GroupList : []
        }
    }

    componentDidMount () {
        this.getGroups()
    }

    render () {
        return (
            <>
                <label for="inputGroup">Group</label><span class="text-danger font-weight-bold required">*</span>
                <select id="inputGroup" className="form-control" name={this.props.componentName.groupId} value={this.props.selectedGroup.groupId} onChange={this.props.onChangeMethod}>
                    <option key="0" value="0">Choose a Group...</option>
                    {                            
                        this.state.GroupList.map ((Group) => {
                            return (
                                <option key={Group.groupId} value={Group.groupId}>{Group.groupName}</option>
                            )
                        })
                    }
                </select>    
                <p class="text-danger">{this.props.isError}</p>           
            </>
        )
    }

    getGroups = () => {
        GroupService.getGroups ()
        .then ((response) => {
            this.setState ({
                GroupList:response.data
            })                    
        })
        .catch ((error) => {

        })
    }
}

export default GroupComponent