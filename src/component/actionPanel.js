import React, { Component } from 'react';

class ActionPanel extends Component
{

    render()
    {
        return <div className='col-md-12 mt-4 mb-4'>
        <div className='row'>
        <div className="col-md-10 pl-0">
        {
        this.props.currentStep>1?
        <button className="btn btn-secondary "
        onClick={()=>{this.props.backButtonAction()}} >Previous</button>:""
        }
        </div>
        <div className="col-md-2 float-right">
        {/* <button className="btn btn-light mr-2"
        onClick={()=>{this.props.cancelButtonAction();}}
        >Cancel</button> */}
       
        <button className="btn btn-primary"
        onClick={()=>{this.props.handleNextClick()}}
        >Next</button>
        </div>
        </div>
        </div>;
    }
}
export default ActionPanel;