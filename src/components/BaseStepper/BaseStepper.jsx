import { Component } from "react";
import StepperBar from "../StepperBar/StepperBar";
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
 
        </section>
       
       )
   }
}

export default BaseStepper