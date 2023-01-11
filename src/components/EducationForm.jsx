import React, { useReducer } from 'react';

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

  const handleChange = (e) => {
    dispatch({ type: 'set input', name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'set submit', value: true });
    localStorage.setItem('education', JSON.stringify(state));
    dispatch({ type: 'set submit', value: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Institution:
        <input type="text" name="institution" value={state.institution} onChange={handleChange} />
      </label>
      <br />
      <label>
        Degree:
        <input type="text" name="degree" value={state.degree} onChange={handleChange} />
      </label>
      <br />
      <label>
        Field of Study:
        <input type="text" name="fieldOfStudy" value={state.fieldOfStudy} onChange={handleChange} />
      </label>
      <br />
      <label>
        Start Year:
        <input type="text" name="startYear" value={state.startYear} onChange={handleChange} />
        </label>
      <br />
      <label>
        End Year:
        <input type="text" name="endYear" value={state.endYear} onChange={handleChange} />
      </label>
      <br />
      <button type="submit" disabled={state.isSubmitting}>Save</button>
    </form>
  );
}

export default EducationForm;