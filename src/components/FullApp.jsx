import React, { Component } from "react";
import StepperBar from "./StepperBar";
import ResumeForm from "./ResumeForm";
import './FullApp.css'
class FullApp extends Component{
render(){
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
}
export default FullApp