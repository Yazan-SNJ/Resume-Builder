import FullApp from "./components/FullApp";
import EducationStep from "./components/EducationStep/EducationStep";

import BaseStepper from "./components/BaseStepper/BaseStepper";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FullApp />} />
          <Route path="educationform" element={<EducationStep />} />
          <Route path="basestepper" element={<BaseStepper />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
