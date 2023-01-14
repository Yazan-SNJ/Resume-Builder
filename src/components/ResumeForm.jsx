import React, { useReducer } from 'react';
import './ResumeForm.css';



const initialState = {
  firstName: '',
  surname: '',
  profession: '',
  city: '',
  country: '',
  postCode: '',
  email: '',
  phone: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'update':
      return { ...state, [action.name]: action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function ResumeForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleInputChange(event) {
    const { name, value } = event.target;
    dispatch({ type: 'update', name, value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(state);   // check the Submit Button on consol
  }

  function handleReset() {
    dispatch({ type: 'reset' });
    console.log(state)    // check the Reset Button on consol
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
          
            <input className='reset' type="button" value="Reset" onClick={handleReset} />
            <input className='button' type="submit" value="Next" />
          </form>
          );
          }
          
          export default ResumeForm;