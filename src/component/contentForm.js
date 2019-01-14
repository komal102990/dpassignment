import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DescriptionTile from './descriptionTile';
class ContentForm extends Component
{
 constructor()
 {
     super();
     this.state={
         requestId:""
     }
 }

 handleOnRequestIdChange( id)
 {
     this.setState({requestId:id});
 }

    render()
    {
        return <div className="col-md-12 ">            
            <div className="row mt-4 mb-5">
            <div className="col-md-6">
            {this.renderForm(this.props.currentStep)}
            </div>
            <div className="col-md-5 ml-4">
            {this.props.currentStep===1?
            <DescriptionTile
            heading="Enter Use Case Name"
            description="Enter the name of your Use Case, as it appears in CDM"            
            descriptionType="p"
            ></DescriptionTile>:
            this.props.currentStep===2?
            <DescriptionTile
            heading="Add appropriate Role Assignments"
            description={[
             {   heading:"test",
                description:"test"
            }
            ]}
            descriptionType="ul"
            ></DescriptionTile>:""}
            </div>
            </div>
            
        </div>;
    }
    renderForm( type)
    {
        switch(type)
        {
            case 1:
            {
               return this.renderDataIngestionForm();
            }
            case 2:
            {
                return this.renderTableDetailsForm();
            }
            default:
            {
                return <div></div>;
            }
        }
    }
    renderDataIngestionForm()
    {
        
      return this.props.requestId.map((data,index)=>{
        return <div className="row mt-2" key={index}>
        <div className="col-md-12 pl-0">
        <span className="col-md-12 pl-0 lableStyle">Use Case Name<FontAwesomeIcon icon="info-circle" color="#403C38"/></span>
        <div className="col-md-12 pl-0"> 
        <div className="row pl-3">
        <select className="form-control col-md-11 mt-2" placeholder="Request ID" value={data}
        onChange={(e)=>{this.props.handleRequestIdChange(e.target.value,index)}}
        >
        <option></option>
        </select>
        {/* { this.props.requestId.length>1 && index>0?
      <FontAwesomeIcon icon="trash" size="1x" className="ml-2 mt-2"
      onClick={()=>{this.props.deleteRequest(index)}}
      ></FontAwesomeIcon>:""
       } */}
        </div>
        </div>
        </div>
        {/* { this.props.requestId.length-1===index?
        <span className="col-md-12 mt-2 addRequest"
         onClick={this.props.handleAddRequestId.bind(this)}
        >+ Add Request ID</span>:"" } */}
        </div>;
       });
         
            
        
    }
    renderTableDetailsForm()
    {
        return<div className="row mt-2">
            <div className="col-md-12 pl-0 mt-2">
                <span className="col-md-12 pl-0">Select ODL Category <span style={{color:"red"}}>*</span></span>
                    <select className="form-control">
                    <option></option>
                    </select>
                    <span className="field-info ml-3">To create a new ODL category, please request in colibra</span>
            </div>
            <div className="col-md-12 pl-0 mt-2">
                <span className="col-md-12 pl-0">ODL table name <span style={{color:"red"}}>*</span></span>
                    <input className="form-control"/> 
                    <span className="field-info ml-3">Please write your table name without category eg. merchant_char</span>                   
            </div>
            <div className="col-md-12 pl-0 mt-2">
                <span className="col-md-12 pl-0">ODL table description <span style={{color:"red"}}>*</span></span>
                    <textarea className="form-control" rows={4} />                    
            </div>
            <div className="col-md-12 pl-0 mt-2">
                <span className="col-md-12 pl-0">Your Bussiness Unit <span style={{color:"red"}}>*</span></span>
                    <select className="form-control">
                    <option></option>
                    </select>
            </div>
            <div className="col-md-12 pl-0 mt-2">
                <span className="col-md-12 pl-0">Your Bussiness Regulator <span style={{color:"red"}}>*</span></span>
                    <select className="form-control">
                    <option></option>
                    </select>
            </div>
        </div>;

    }

}
export default ContentForm;