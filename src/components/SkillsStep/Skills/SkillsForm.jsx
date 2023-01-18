import React, { useReducer, useEffect } from "react";

import "./SkillsForm.css";

const initialState = {
  skills: "Add your Skills",
  workExperience: "Tell About your Experience",
  aboutMe: "Tell us more About You",
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

  useEffect(() => {
    localStorage.setItem("skills", JSON.stringify(state.skills));
  }, [state.skills]);

  useEffect(() => {
    localStorage.setItem("experience", JSON.stringify(state.workExperience));
  }, [state.workExperience]);

  useEffect(() => {
    localStorage.setItem("aboutMe", JSON.stringify(state.aboutMe));
  }, [state.aboutMe]);

  const handleChange = (e) => {
    dispatch({ type: "set input", name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("skills", JSON.stringify(state.skills));
    localStorage.setItem("experience", JSON.stringify(state.workExperience));
    localStorage.setItem("aboutMe", JSON.stringify(state.aboutMe));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Extra Skills:
        <input
          type="text"
          name="skills"
          value={state.skills}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Work Experience:
        <input
          type="text"
          name="workExperience"
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
          value={state.aboutMe}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SkillsForm;
