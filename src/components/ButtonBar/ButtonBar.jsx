import React, { useReducer } from 'react';
import "./ButtonBar.css";

const initialButtonState = {
    isBack: false,
    isNext: false,
}

const handlers = {
    'set next': (state, {value}) => ({ ...state, isSubmitting: value }),
    'set back': (state, {value}) => ({ ...state, isSubmitting: value }),
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

function ButtonBar() {
 const [state, dispatch] = useReducer(reducer, initialButtonState);

    const handleBack = (e) => {
     e.preventDefault();
     dispatch({ type: 'set back', value: true });
     console.log("Back btn");
     dispatch({ type: 'set back', value: false });
   };

   const handleNext = (e) => {
    e.preventDefault();
    dispatch({ type: 'set next', value: true });
    console.log("Next btn");
    dispatch({ type: 'set next', value: false });
  };

   return (
    <section>
      <button className="button" type="back" onClick={handleBack} disabled={state.isBack}>back</button>
      <button className="button" type="next" onClick={handleNext} disabled={state.isNext}>next</button>
    </section>
  );
}

export default ButtonBar;