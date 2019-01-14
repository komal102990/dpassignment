import React, { Component } from 'react';
import ProgressBar from '../component/progressBar';
import ActionPanel from '../component/actionPanel';

import '../style/home.css';
import ContentForm from '../component/contentForm';
const progressStepList=[
    {
        name:"Select Usercase",
        isActive:true,
        isComplete:false,
        id:1        
     },
     {
        name:"Assign Roles",
        isActive:false,
        isComplete:false,
        id:2        
     },
    {
        name:"Consumer",
        isActive:false,
        isComplete:false,
        id:3        
    },
    {
        name:"Modules",
        isActive:false,
        isComplete:false,
        id:4
    },
    {
        name:"Publisher",
        isActive:false,
        isComplete:false,
        id:5
    },
    {
        name:"Summary",
        isActive:false,
        isComplete:false,
        id:6
    },

    ]
class Home extends Component
{
    constructor()
    {
        super();
        this.state={
            stepList:progressStepList||[],
            contentHeading:"",
            contentSubHeading:"",
            formType:"ingestion",
            requestIds:[""],
            currentStep:1
        }
              
    }
     handleAddRequestId()
 {
     let requests=this.state.requestIds;
     let emptyRequest=requests.filter((data)=>{return data===""||data===undefined||data===null;});
     if(emptyRequest.length>0){alert("All Request ID is required.");}
     else{
        requests.push("");
        this.setState({requestIds:requests});
     }
     
 }

 handleRequestIdChange(data,index)
 {
    let requests= this.state.requestIds;
    requests[index]=data;
    this.setState({requestIds:requests});
 }
 handleDeleteRequest(toDeleteIndex)
 {
    let requests= this.state.requestIds;
    requests=requests.filter((data,index)=>{return index!==toDeleteIndex;})
    this.setState({requestIds:requests});
 }
 handleNextClick()
 {
    
        let _stepList=this.state.stepList;
        _stepList.map((data)=>{
            
            if(data.id===this.state.currentStep+1)
            {
                data.isActive=true;
            }
            else{
                data.isActive=false;
            }

        });
        if(this.state.currentStep===1)
        {
         this.setState({
            formType:"table",
            stepList:_stepList,
            
         });
        }
        if(this.state.currentStep===2)
        {
            this.setState({

                contentHeading:"Transformation Details",
                contentSubHeading:"",
                formType:"transformation",
                stepList:_stepList,
                
             });
        }
        this.setState({
            currentStep:this.state.currentStep+1
        });
 }
 resetStep(type)
 {
     
     progressStepList.map((data,index)=>{
         if(this.state.currentStep-1===data.id)
         {
             data.isActive=true;             
         }
         else {
            data.isActive=false;
            
         }
     });
    
 }
 handleBackButtonAction()
 {
    this.resetStep();
      this.setState({     
         currentStep:this.state.currentStep-1 ,
         stepList:progressStepList||[],
      });
     
 }
 handleCancelButtonAction()
 {
    this.resetStep();
     this.setState({
        stepList:progressStepList||[],        
        formType:"ingestion",
        requestIds:[""],
        currentStep:1
     });
 }
    render()
    {
        return <div className=' container mt-5'>
        <div className="row">
            <ProgressBar progressStepList={this.state.stepList}></ProgressBar>
            <ContentForm            
            type={this.state.formType}
            requestId={this.state.requestIds}
            handleAddRequestId={this.handleAddRequestId.bind(this)}
            handleRequestIdChange={this.handleRequestIdChange.bind(this)}
            deleteRequest={this.handleDeleteRequest.bind(this)}
            currentStep={this.state.currentStep}
                        ></ContentForm>
            <ActionPanel
            handleNextClick={this.handleNextClick.bind(this)}
            currentStep={this.state.currentStep}
            backButtonAction={this.handleBackButtonAction.bind(this)}
            cancelButtonAction={this.handleCancelButtonAction.bind(this)}
            ></ActionPanel>
        </div></div>;
    }
}
export default Home;