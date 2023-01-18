import StepperBar from "../StepperBar/StepperBar";
import EducationForm from "./EducationForm/EducationForm";
import ButtonBar from "../ButtonBar/ButtonBar";
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

      <div>
        <ButtonBar />
      </div>
    </section>
  );
};

export default EducationStep;
