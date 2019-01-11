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
        return <div className="col-md-12 mt-4">
            <span className="row mt-4" style={{fontSize:"27px"}}>{this.props.heading}</span>
            <span className="row">{this.props.subheading}</span>
            <div className="row mt-4 mb-5">
            <div className="col-md-6">
            {this.renderForm(this.props.currentStep)}
            </div>
            <div className="col-md-5 ml-4">
            {this.props.type==="ingestion"?
            <DescriptionTile
            heading="What is Data Ingestion?"
            description="Ingestion start by securing approval from the datagovernance team, for a particular SOR data source.
            Such data source can be a mainframe file, a relational table, a JSON or XML file etc. Each data source might contain one or multiple feeds.
            A feed is a structured dataset comprised of rows and columns. Each feed will parse/map into a HIVE table
            on a temp area prior to ingestion"
            ></DescriptionTile>:
            this.props.type==="table"?
            <DescriptionTile
            heading="What is ODL and ODL category?"
            description="ODL (Organized Derived Layers): The derivations are done at a Bussiness Unit or a Domain (Account Level, Application Level)
            or the derivations are done on top of CS 3.0 tables to make the data easily available for other use case.
            Ex. risk_new_account"
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
        <span className="col-md-12 pl-0">Request ID <span style={{color:"red"}}>*</span></span>
        <div className="col-md-12 pl-0"> 
        <div className="row pl-3">
        <input className="form-control col-md-7" placeholder="Request ID" value={data}
        onChange={(e)=>{this.props.handleRequestIdChange(e.target.value,index)}}
        />
        { this.props.requestId.length>1 && index>0?
      <FontAwesomeIcon icon="trash" size="1x" className="ml-2 mt-2"
      onClick={()=>{this.props.deleteRequest(index)}}
      ></FontAwesomeIcon>:""
       }
        </div>
        </div>
        </div>
        { this.props.requestId.length-1===index?
        <span className="col-md-12 mt-2 addRequest"
         onClick={this.props.handleAddRequestId.bind(this)}
        >+ Add Request ID</span>:"" }
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