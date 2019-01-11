import React, { Component } from 'react';
import ProgressBar from '../component/progressBar';
import ActionPanel from '../component/actionPanel';

import '../style/home.css';
import ContentForm from '../component/contentForm';
const progressStepList=[{
    name:"Select Data Ingestion",
    isActive:true,
    isComplete:false,
    id:1,
    progress:"5%"
     },
     {
        name:"Table Details",
        isActive:false,
        isComplete:false,
        id:2,
        progress:"35%"
         },
         {
            name:"Transformation Details",
            isActive:false,
            isComplete:false,
            id:3,
            progress:"100%"
             }]
class Home extends Component
{
    constructor()
    {
        super();
        this.state={
            stepList:progressStepList||[],
            contentHeading:"First, Select Data Ingestion releated to your ODLS",
            contentSubHeading:"In this step, you will select Data Ingestion associated with your ODL",
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
     if(this.state.requestIds.length>0 && this.state.requestIds.filter((data)=>{return data===""||data===undefined||data===null;}).length===0)
     {
        let _stepList=this.state.stepList;
        _stepList.map((data)=>{
            if(data.id===this.state.currentStep)
            {
                data.isComplete=true;
            }
            if(data.id===this.state.currentStep+1)
            {
                data.isActive=true;
            }

        });
        if(this.state.currentStep===1)
        {
         this.setState({

            contentHeading:"Table Details",
            contentSubHeading:"In this step, Please provide details of ODL and select partners you're working with",
            formType:"table",
            stepList:_stepList,
            currentStep:this.state.currentStep+1 
         });
        }
        if(this.state.currentStep===2)
        {
            this.setState({

                contentHeading:"Transformation Details",
                contentSubHeading:"",
                formType:"transformation",
                stepList:_stepList,
                currentStep:this.state.currentStep+1 
             });
        }
        }
         else {
            alert("Please provide Request ID.");
         }
        
     

 }
 resetStep(type)
 {
     
     progressStepList.map((data,index)=>{
         if(this.state.currentStep===index && type==="back")
         {
             data.isActive=false;
             data.isComplete=false;
         }
         else if(index!==0 && type==="reset")
         {
            data.isActive=false;
            data.isComplete=false;
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
        contentHeading:"First, Select Data Ingestion releated to your ODLS",
        contentSubHeading:"In this step, you will select Data Ingestion associated with your ODL",
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
            heading={this.state.contentHeading}
            subheading={this.state.contentSubHeading}
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