import ResumeForm from "./components/ResumeForm"
import StepperBar from './components/StepperBar';

import './App.css';

function App() {
  return (
    <div className="App">
      <StepperBar currentStep={-1} />
      <ResumeForm/>
    </div>
  );
}

export default App;
