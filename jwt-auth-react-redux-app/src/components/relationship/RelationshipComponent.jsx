import React, {Component} from 'react'
import RelationshipService from './RelationshipService'

class RelationshipComponent extends Component {
    constructor (props) {
        super (props)

        this.state = {
            relationshipList : []
        }
    }

    componentDidMount () {
        this.getRelatioships()
    }

    render () {
        return (
            <>
                <label for="inputRelationship">Relationship</label><span class="text-danger font-weight-bold required">*</span>
                <select id="inputRelationship" className="form-control" name={this.props.componentName.relationshipId} value={this.props.selectedRelationship.relationshipId} onChange={this.props.onChangeMethod}>
                    <option key="0" value="0">Choose a Relationship...</option>
                    {                            
                        this.state.relationshipList.map ((relationship) => {
                            return (
                                <option key={relationship.relationshipId} value={relationship.relationshipId}>{relationship.relationshipName}</option>
                            )
                        })
                    }
                </select>
                <p class="text-danger">{this.props.isError}</p>                 
            </>
        )
    }

    getRelatioships = () => {
        RelationshipService.getRelationships ()
        .then ((response) => {
            this.setState ({
                relationshipList:response.data
            })                    
        })
        .catch ((error) => {

        })
    }
}

export default RelationshipComponent