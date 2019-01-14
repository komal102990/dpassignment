import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class DescriptionTile extends Component
{

    render()
    {
        return <div className="tile-content">
        <div className="row"> 
        <div className="col-md-1">
             <FontAwesomeIcon icon="info-circle" size="2x" color="#3A82C9" className="ml-2 mr-2 mt-2 infoIcon">
             </FontAwesomeIcon>
        </div>
        <div className="col-md-11 mt-2" >
        <label style={{fontSize:"16px"}}> {this.props.heading}</label>
        {
            this.renderDescription(this.props.descriptionType)
        }
             
        </div>
        </div>
        </div>;
    }

    renderDescription(type)
    {
        switch(type)
        {
            case"p":
            {
                return <p>{this.props.description}</p>           ;
            }
            case"ul":
            {
                return this.props.description.map((data,index)=>{
                    return <ul>
                        <li>
                            <p style={{marginBottom:"0px",                                
                            fontWeight:"bold",
                            }}
                            >{index+1}. {data.heading}</p>
                            <p
                            style={{marginBottom:"0px",
                            marginLeft:"1.1em"
                        }}
                            >{data.description}</p>
                        </li>
                    </ul>;
                });
            }
            default:{
                return <div></div>;
            }

        }

    }
}
export default DescriptionTile;