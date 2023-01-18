import ProfileStep from "./components/ProfileStep/ProfileStep";
import EducationStep from "./components/EducationStep/EducationStep";
import PDFPresenter from "./components/PDF/PDFPresenter";
import SkillsStep from "./components/SkillsStep/SkillsStep";
import ContactStep from "./components/ContactStep/ContactStep";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProfileStep />} />
          <Route path="education" element={<EducationStep />} />
          <Route path="skills" element={<SkillsStep />} />
          <Route path="contact" element={<ContactStep />} />
          <Route path="pdfPresenter" element={<PDFPresenter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
