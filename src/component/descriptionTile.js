import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class DescriptionTile extends Component
{

    render()
    {
        return <div className="tile-content">
            <h6 style={{fontWeight:"bold"}}> <FontAwesomeIcon icon="lightbulb" size="1x" color="#FFD109" className="ml-2 mr-2 mt-2">
            </FontAwesomeIcon>
      {this.props.heading}</h6>
            <p>{this.props.description}</p>
            <span style={{fontWeight:"bold"}}>Learn More</span>
        </div>;
    }
}
export default DescriptionTile;