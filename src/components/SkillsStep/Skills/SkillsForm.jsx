import React, { useReducer } from "react";

import "./SkillsForm.css";

const initialState = {
  skills: "Add your Skills",
  workExperience: "Tell About your Experience",
  aboutMe: "Tell us more About You",
  isSubmitting: false,
};

const handlers = {
  "set input": (state, { name, value }) => ({ ...state, [name]: value }),
  "set submit": (state, { value }) => ({ ...state, isSubmitting: value }),
};

const reducer = (state, action) => {
  const handle = handlers[action.type];
  if (handle) {
    return handle(state, action);
  } else {
    console.log(
      `Invalid action type ${action.type} received, returning current state`
    );
    return state;
  }
};

function Skills() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({ type: "set input", name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "set submit", value: true });
    localStorage.setItem("education", JSON.stringify(state));
    dispatch({ type: "set submit", value: false });
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

      {/* <button type="submit" disabled={state.isSubmitting}>Submit</button> */}
    </form>
  );
}

export default Skills;
