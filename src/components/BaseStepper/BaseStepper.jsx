import { Component, useState } from "react";
import StepperBar from "../StepperBar/StepperBar";
import Skills from "../Skills/Skills";
import ButtonBar from "../ButtonBar/ButtonBar";
import "./BaseStepper.css";

class BaseStepper extends Component {
   render() {


    

    return (
        <section>
             <div className="title">
           <p>Resume Builder App</p>
        </div>

        <div>
            <StepperBar currentIndex={2}/>
        </div>
 
        <div>
            <Skills/>
        </div>

        <div>
            <ButtonBar/>
        </div>
        
        </section>
       
       )
   }
}

export default BaseStepper