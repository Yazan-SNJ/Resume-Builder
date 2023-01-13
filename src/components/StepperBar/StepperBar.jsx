import { Component } from "react";
import "./StepperBar.css";

class StepperBar extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          currentIndex: 0
        };
    } 

    componentDidMount() {
        if (this.state.currentIndex < 3) {
        setTimeout(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1});
          }, 3000);
        }
    }

    render() {
        // return this.props.itemsCount.map((item, index) => (
        //         <div class={this.props.currentIndex > index ? "stepper-item completed" : "stepper-item active"}>
        //         <div class="step-counter">index</div>
        //         </div>
        // ))

        const firstCss = this.state.currentIndex === 0 ? "stepper-item completed" : "stepper-item active"
        const secondCss = this.state.currentIndex === 1 ? "stepper-item completed" : "stepper-item active"
        const thirdCss = this.state.currentIndex === 2 ? "stepper-item completed" : "stepper-item active"
    
    return (
       
        <div class="stepper-wrapper">
        <div class={firstCss}>
          <div class="step-counter">1</div>
          <div class="step-name">First</div>
        </div>
        <div class={secondCss}>
          <div class="step-counter">2</div>
          <div class="step-name">Second</div>
        </div>
        <div class={thirdCss}>
          <div class="step-counter">3</div>
          <div class="step-name">Third</div>
        </div>
    
      </div>
       )
}
}


export default StepperBar