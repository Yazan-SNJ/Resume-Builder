import React from "react";
import "./StepperBar.css";

const StepperBar = ({ currentIndex }) => {
  const firstCss =
    currentIndex === 1 ? "stepper-item completed" : "stepper-item active";
  const secondCss =
    currentIndex === 2 ? "stepper-item completed" : "stepper-item active";
  const thirdCss =
    currentIndex === 3 ? "stepper-item completed" : "stepper-item active";
  const fourthCss =
    currentIndex === 4 ? "stepper-item completed" : "stepper-item active";

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
  );
};

export default StepperBar;
