import React, { useReducer, useState } from 'react';
import './EducationForm.css'

const initialState = {
  institution: '',
  degree: '',
  fieldOfStudy: '',
  startYear: '',
  endYear: '',
  isSubmitting: false,
}

const handlers = {
    'set input': (state, {name, value}) => ({ ...state, [name]: value }),
    'set submit': (state, {value}) => ({ ...state, isSubmitting: value }),
}

const reducer = (state, action) => {
    const handle = handlers[action.type];
    if(handle) {
      return handle(state, action)
    } else {
      console.log(`Invalid action type ${action.type} received, returning current state`);
      return state;
    }
  }

function EducationForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [numOfInputs, setNumOfInputs] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [fields, setFields] = useState([]);
  
  const handleChange = (e) => {
    dispatch({ type: 'set input', name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'set submit', value: true });
    localStorage.setItem('education', JSON.stringify(state));
    dispatch({ type: 'set submit', value: false });
    };
    
    const handleAddMore = () => {
    setNumOfInputs(numOfInputs + 1);
    if (numOfInputs > 1) {setIsOpen(!isOpen);
      
    }
    }

    const handleMinus = () => {
      if (numOfInputs > 1) {
        setNumOfInputs(numOfInputs - 1);
        setFields(fields.filter((field, index) => index !== numOfInputs - 1));
      }
    }
    
    const handleNext = () => {
    // code for handling next step
    }
    
    const handleReturn = () => {
    // code for handling return to previous step
    }
    
    const inputs = [];
    for (let i = 0; i < numOfInputs; i++) {
    inputs.push(
    <>
<label className="label-text">
  Institution:
  <input type="text" name={`institution-${i}`} value={state[`institution-${i}`]} onChange={handleChange} />
</label>
<br />
<label className="label-text">
  Degree:
  <input type="text" name={`degree-${i}`} value={state[`degree-${i}`]} onChange={handleChange} />
</label>
<br />
<label className="label-text field-of-study-input">
  Field of Study:
  <input type="text" name={`fieldOfStudy-${i}`} value={state[`fieldOfStudy-${i}`]} onChange={handleChange} />
</label>
<br />
<label className="label-text">
  Start Year:
  <input type="text" name={`startYear-${i}`} value={state[`startYear-${i}`]} onChange={handleChange} />
</label>
<br />
<label>
  End Year:
  <input type="text" name={`endYear-${i}`} value={state[`endYear-${i}`]} onChange={handleChange} />
</label>
<br />
</>
);
}

return (
<>
<h3>Education Details</h3>
<form onSubmit={handleSubmit}>
  
<div className={`EducationForm__input-container ${isOpen ? 'is-open' : ''}`}>
  {inputs}
</div>
<button type="button" className="EducationForm__add-more" onClick={handleAddMore}>Add more</button>
<button type="button" className="EducationForm__minus" onClick={handleMinus}>-</button>
<div className="EducationForm__btn-container">
<button type="button" className="EducationForm__btn" onClick={handleReturn}>Return</button>
<button type="button" className="EducationForm__btn" onClick={handleNext}>Next</button>
</div>
</form></>
);
}

export default EducationForm;