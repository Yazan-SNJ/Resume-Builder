import React, { useReducer, useState } from "react";
import "./ProfileForm.css";
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
  const [isFormComplete, setIsFormComplete] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    dispatch({ type: "update", name, value });
  }

  function handleSubmit(event) {
    event.preventDefault();
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
    localStorage.setItem("aboutme", JSON.stringify(state));

    if (isFormComplete) {
      navigate("/education");
    }
  }

  function handleReset() {
    dispatch({ type: "reset" });
    localStorage.removeItem("aboutme");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          placeholder="Name :"
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
          placeholder="Surname :"
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
          placeholder="Profession :"
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
          placeholder="City :"
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
          placeholder="Country :"
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
          placeholder="Post Code :"
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
          placeholder="Email Address :"
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
          placeholder="Phone Number :"
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
      <div className="alert hidden">
        {isFormComplete === false ? "Please fill all fields!" : ""}
      </div>
    </form>
  );
}

export default ResumeForm;
