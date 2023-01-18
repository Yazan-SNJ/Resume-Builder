import ProfileStep from "./components/ProfileStep/ProfileStep";
import EducationStep from "./components/EducationStep/EducationStep";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
