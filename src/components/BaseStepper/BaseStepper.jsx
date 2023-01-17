import React from "react";
import StepperBar from "../StepperBar/StepperBar";
import Skills from "../Skills/Skills";
import "./BaseStepper.css";
import ButtonBar from "../ButtonBar/ButtonBar";

const BaseStepper = () => {
  return (
    <section>
      <div className="title">
        <p>Resume Builder App</p>
      </div>

      <div>
        <StepperBar />
      </div>

      <div>
        <Skills />
      </div>

      <div>
        <ButtonBar />
      </div>
    </section>
  );
};

export default BaseStepper;
