import StepperBar from "../StepperBar/StepperBar";
import EducationForm from "./EducationForm/EducationForm";
import "../EducationStep/EducationStep.css";

const EducationStep = () => {
  return (
    <section>
      <div className="title">
        <p>Education Details</p>
      </div>

      <div>
        <StepperBar currentIndex={2} />
      </div>

      <div>
        <EducationForm />
      </div>
    </section>
  );
};

export default EducationStep;
