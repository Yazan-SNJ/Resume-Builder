import React, { useReducer, useState } from "react";
import "./ResumeForm.css";
import { useNavigate } from "react-router-dom";

const initialState = {
  firstName: "",
  surname: "",
  profession: "",
  city: "",
  country: "",
  postCode: "",
  email: "",
  phone: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "update":
      return { ...state, [action.name]: action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function ResumeForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    dispatch({ type: "update", name, value });

    if (
      state.firstName &&
      state.surname &&
      state.profession &&
      state.city &&
      state.country &&
      state.postCode &&
      state.email &&
      state.phone
    ) {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (isFormComplete) {
      navigate("/educationform");
    }
  }

  function handleReset() {
    dispatch({ type: "reset" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={state.firstName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Surname:
        <input
          type="text"
          name="surname"
          value={state.surname}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Profession:
        <input
          type="text"
          name="profession"
          value={state.profession}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        City:
        <input
          type="text"
          name="city"
          value={state.city}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Country:
        <input
          type="text"
          name="country"
          value={state.country}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Post Code:
        <input
          type="text"
          name="postCode"
          value={state.postCode}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="text"
          name="phone"
          value={state.phone}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button className="reset" type="button" onClick={handleReset}>
        Reset
      </button>
      <div className={`next-button ${isFormComplete ? "enabled" : "disabled"}`}>
        <button className="button" type="submit">
          Next
        </button>
      </div>
    </form>
  );
}

export default ResumeForm;
