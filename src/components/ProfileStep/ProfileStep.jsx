import React from "react";
import StepperBar from "../StepperBar/StepperBar";
import ProfileForm from "./ProfileForm";
import "./ProfileStep.css";

const ProfileStep = () => {
  return (
    <section>
      <div className="title">
        <p>Resume Builder App</p>
      </div>

      <div>
        <StepperBar currentIndex={1} />
      </div>

      <div>
        <ProfileForm />
      </div>
    </section>
  );
};

export default ProfileStep;
