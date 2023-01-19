import React, { useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SkillsForm.css";
import jsPDF from "jspdf";

const initialState = {
  skills: "",
  workExperience: "",
  aboutMe: "",
  isSubmitting: false,
};

const handlers = {
  "set input": (state, { name, value }) => ({ ...state, [name]: value }),
};

const reducer = (state, action) => {
  const handle = handlers[action.type];
  if (handle) {
    return handle(state, action);
  } else {
    console.log(
      ` Invalid action type ${action.type} received, returning current state `
    );
    return state;
  }
};

function SkillsForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  // useEffect(() => {
  //   localStorage.setItem("skills", JSON.stringify(state.skills));
  // }, [state.skills]);

  // useEffect(() => {
  //   localStorage.setItem("experience", JSON.stringify(state.workExperience));
  // }, [state.workExperience]);

  // useEffect(() => {
  //   localStorage.setItem("aboutMe", JSON.stringify(state.aboutMe));
  // }, [state.aboutMe]);

  const handleChange = (e) => {
    dispatch({ type: "set input", name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("skills", JSON.stringify(state));
    navigate("/contact");
  };

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/education");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Extra Skills:
        <input
          type="text"
          name="skills"
          value={state.skills}
          placeholder="Extra Skills:"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Work Experience:
        <input
          type="text"
          name="workExperience"
          placeholder="Work Experience:"
          value={state.workExperience}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        About Me:
        <input
          type="text"
          name="aboutMe"
          placeholder="About Me:"
          value={state.aboutMe}
          onChange={handleChange}
        />
      </label>
      <button
        type="button"
        className="EducationForm__btn button"
        onClick={handleBack}
      >
        Back
      </button>
      <button
        type="submit"
        className="EducationForm__btn button"
        onClick={handleSubmit}
      >
        Next
      </button>
    </form>
  );
}

export default SkillsForm;
