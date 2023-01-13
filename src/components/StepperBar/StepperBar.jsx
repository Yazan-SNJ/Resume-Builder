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
        //         <div className={this.props.currentIndex > index ? "stepper-item completed" : "stepper-item active"}>
        //         <div className="step-counter">index</div>
        //         </div>
        // ))

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