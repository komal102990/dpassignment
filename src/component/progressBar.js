import React, { Component } from 'react';

class ProgressBar extends Component
{
    

    render()
    {
        let progressWidth="5%";

        return <div className="col-md-12">
        <div className="row mb-2"  >
        {this.props.progressStepList.map((data,index)=>{
            progressWidth= data.isActive?data.progress:progressWidth;
            return <div  key={index} className="col-md-4 pl-0" 
             style={{color:data.isActive||data.isCompleted?"":"#ADADAD",fontWeight:data.isActive||data.isCompleted?"bold":""}}>
            {data.name}
                </div>
            
        })}
            {/* <div className="col-md-4">
            Table Details
            </div>
            <div className="col-md-4">
            Transformation Details
            </div> */}
        </div>
        <div className="row progress">
        <div className="progress-bar" role="progressbar" style={{width: progressWidth}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        </div>;
    }
}
export default ProgressBar;