import React from "react";
import StepperBar from "./StepperBar";
import ResumeForm from "./ResumeForm";
import './FullApp.css'

const FullApp = () => {
    return(
        <section>
        <div className="title">
          <p>Resume Builder App</p>
       </div>

       <div>
           <StepperBar/>
       </div>

       <div>
           <ResumeForm/>
       </div>
       
       </section>
    )
}

export default FullApp