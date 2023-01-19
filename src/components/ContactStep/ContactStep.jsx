import StepperBar from "../StepperBar/StepperBar";
import ContactForm from "./ContactForm";
import "./ContactStep.css";

const ContactStep = () => {
  return (
    <section>
      <div className="title">
        <p>Contact Details</p>
      </div>

      <div>
        <StepperBar currentIndex={4} />
      </div>

      <div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactStep;
