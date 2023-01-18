import ProfileStep from "./components/ProfileStep/ProfileStep";
import EducationStep from "./components/EducationStep/EducationStep";

import SkillsStep from "./components/SkillsStep/SkillsStep";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProfileStep />} />
          <Route path="educationform" element={<EducationStep />} />
          <Route path="skillsform" element={<SkillsStep />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
