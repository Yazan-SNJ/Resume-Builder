import { Component } from "react";
import "./StepperBar.css";

class StepperBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          currentIndex: 0,
          itemsCount: 3
        };
    } 

    render() {
        // return this.props.itemsCount.map((item, index) => (
        //         <div class={this.props.currentIndex > index ? "stepper-item completed" : "stepper-item active"}>
        //         <div class="step-counter">index</div>
        //         </div>
        // ))

    
    return (
       
        <div class="stepper-wrapper">
        <div class="stepper-item completed">
          <div class="step-counter">1</div>
          <div class="step-name">First</div>
        </div>
        <div class="stepper-item completed">
          <div class="step-counter">2</div>
          <div class="step-name">Second</div>
        </div>
        <div class="stepper-item active">
          <div class="step-counter">3</div>
          <div class="step-name">Third</div>
        </div>
    
      </div>
       )
}
}


export default StepperBar