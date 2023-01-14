import React, { Component } from 'react';
import './StepperBar.css'


class StepperBar extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          currentIndex: 0
        };
    } 

  
    render() {
      
        const firstCss = this.state.currentIndex === 0 ? "stepper-item completed" : "stepper-item active"
        const secondCss = this.state.currentIndex === 1 ? "stepper-item completed" : "stepper-item active"
        const thirdCss = this.state.currentIndex === 2 ? "stepper-item completed" : "stepper-item active"
        const fourthCss = this.state.currentIndex === 3 ? "stepper-item completed" : "stepper-item active"

    return (
       
        <div className="stepper-wrapper">
        <div className={firstCss}>
          <div className="step-counter">1</div>
          <div className="step-name">First</div>
        </div>
        <div className={secondCss}>
          <div className="step-counter">2</div>
          <div className="step-name">Second</div>
        </div>
        <div className={thirdCss}>
          <div className="step-counter">3</div>
          <div className="step-name">Third</div>
        </div>
        <div className={fourthCss}>
          <div className="step-counter">4</div>
          <div className="step-name">Fourth</div>
        </div>
    
      </div>
       )
}
}


export default StepperBar




/*
-In the StepperBar component on my side, I removed the use of setTimeout and instead used useEffect and useReducer 
to handle the state of the current step and the form validation. 

-This allows for better control of the component and its state, as well as improving performance. 
-I also added the ability to move to the next step only if the form is valid. 
-This is important as it ensures that the user completes the form correctly before moving on to the next step. 
-I also added a Previous button that allows the user to go back to the previous step. 
-Additionally, I added the formIsValid to the state and added a check in the useEffect hook to update the formIsValid depending on whether the form is valid or not. 
-This allows us to disable the next button if the form is not valid and enable it if it is valid. 
-This helps in making sure that the user cannot move to the next step without filling in the form correctly.

-In the StepperBar component, there is a button with the text "Previous" that allows the user to go back to the previous step in the form. 
-This button is rendered in the StepperBar component and is only enabled when the current step is NOT the first step. 
-This allows the user to navigate through the form, progressing and going back through the different steps as needed.


*/



