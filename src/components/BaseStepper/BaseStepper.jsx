import { Component } from "react";
import StepperBar from "../StepperBar/StepperBar";
import Skills from "../Skills/Skills";
import "./BaseStepper.css";

class BaseStepper extends Component {
   render() {
    return (
        <section>
             <div class="title">
           <p>Resume Builder App</p>
        </div>

        <div>
            <StepperBar/>
        </div>
 
        <div>
            <Skills/>
        </div>
        
        </section>
       
       )
   }
}

export default BaseStepper