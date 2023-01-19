import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";

const initialState = {
  linkedin: "",
  github: "",
  personalWebsite: "",
  extraSocialMedia: "",
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

  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    dispatch({ type: "set submit", value: true });
    localStorage.setItem("contact", JSON.stringify(state));
    dispatch({ type: "set submit", value: false });
    navigate("/pdfPresenter");
  };

  const handleBack = () => {
    navigate("/skills");
  };

  // const handlePresent = () => {
  //   navigate("/pdfPresenter");
  // };

  const handleDownload = () => {
    // const reportTemplateRef = useRef(null);

    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    // doc.html(PDFPresenter(), {
    //   async callback(doc) {
    //     await doc.save('document.pdf');
    //   },
    // });
  };

  return (
    <div>
      <input
        type="text"
        value={state.linkedin}
        onChange={(event) =>
          dispatch({ type: "set linkedin", payload: event.target.value })
        }
        placeholder="LinkedIn profile"
      />
      <input
        type="text"
        value={state.github}
        onChange={(event) =>
          dispatch({ type: "set github", payload: event.target.value })
        }
        placeholder="GitHub profile"
      />
      <input
        type="text"
        value={state.personalWebsite}
        onChange={(event) =>
          dispatch({
            type: "Set personal website",
            payload: event.target.value,
          })
        }
        placeholder="Personal Website URL"
      />
      <input
        type="text"
        value={state.extraSocialMedia}
        onChange={(event) =>
          dispatch({
            type: "Set extra social media",
            payload: event.target.value,
          })
        }
        placeholder="Other Social Media profile"
      />

      <section>
        <button
          className="button"
          type="back"
          onClick={handleBack}
          disabled={state.isBack}
        >
          back
        </button>
        <button
          className="button"
          type="next"
          onClick={handleNext}
          disabled={state.isNext}
        >
          Present
        </button>
      </section>
    </div>
  );
}

export default ResumePage;
