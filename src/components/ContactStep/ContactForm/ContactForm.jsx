import React, { useReducer } from "react";

const initialState = {
  linkedin: "",
  github: "",
  personalWebsite: "",
  extraSocialMedia: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "set linkedin":
      return { ...state, linkedin: action.payload };
    case "set github":
      return { ...state, github: action.payload };
    case "set personal website":
      return { ...state, personalWebsite: action.payload };
    case "set extra social media":
      return { ...state, extraSocialMedia: action.payload };
    default:
      return state;
  }
};

function ResumePage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <input
        type="text"
        value={state.linkedin}
        onChange={event => dispatch({ type: "set linkedin", payload: event.target.value })}
        placeholder="LinkedIn profile"
      />
      <input
        type="text"
        value={state.github}
        onChange={event => dispatch({ type: "set github", payload: event.target.value })}
        placeholder="GitHub profile"
      />
      <input
        type="text"
        value={state.personalWebsite}
        onChange={event => dispatch({ type: "set personal website", payload: event.target.value })}
        placeholder="Personal Website URL"
      />
      <input
        type="text"
        value={state.extraSocialMedia}
        onChange={event => dispatch({ type: "set extra social media", payload: event.target.value })}
        placeholder="Other Social Media profile"
      />
    </div>
  );
}

export default ResumePage;