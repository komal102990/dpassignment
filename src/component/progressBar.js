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
            return <div  key={index} className="col-md-2 text-center" 
             style=
             {{  color:data.isActive||data.isCompleted?"#0056A8":"#A1A1A1",                 
                 borderBottom:"2px solid",
                 borderColor:data.isActive?"#0056A8":"#A1A1A1",
                 fontSize:"14px" }}>
            {data.name}
                </div>
            
        })}
            
        </div>
        </div>;
    }
}
export default ProgressBar;