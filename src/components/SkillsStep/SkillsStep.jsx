import React from "react";
import StepperBar from "../StepperBar/StepperBar";
import Skills from "./Skills/SkillsForm";
import "./SkillsStep.css";
import ButtonBar from "../ButtonBar/ButtonBar";

const SkillsStep = () => {
  return (
    <section>
      <div className="title">
        <p>Skills Details</p>
      </div>

      <div>
        <StepperBar currentIndex={3} />
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

export default SkillsStep;
