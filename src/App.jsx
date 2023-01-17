import FullApp from "./components/FullApp";

import BaseStepper from "./components/BaseStepper/BaseStepper";
import "./App.css";
import EducationForm from "./components/EducationForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FullApp />} />
          <Route path="educationform" element={<EducationForm />} />
          <Route path="basestepper" element={<BaseStepper />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
