import ProfileStep from "./components/ProfileStep/ProfileStep";
import EducationStep from "./components/EducationStep/EducationStep";
import PDFPresenter from "./components/PDF/PDFPresenter";
import SkillsStep from "./components/SkillsStep/SkillsStep";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProfileStep />} />
          <Route path="educationForm" element={<EducationStep />} />
          <Route path="skillsForm" element={<SkillsStep />} />
          <Route path="pdfPresenter" element={<PDFPresenter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
