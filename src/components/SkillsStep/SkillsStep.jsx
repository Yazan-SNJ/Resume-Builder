import React from "react";
import StepperBar from "../StepperBar/StepperBar";
import SkillsForm from "./Skills/SkillsForm";
import "./SkillsStep.css";

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
        <SkillsForm />
      </div>

      {/* <div>
        <ButtonBar previous="/education" next="/contact" />
      </div> */}
    </section>
  );
};

export default SkillsStep;
