import FullApp from "./components/FullApp";

import BaseStepper from "./components/BaseStepper/BaseStepper";
import './App.css';

function App() {
  return (
    <div className="App">
      <BaseStepper/>
      <FullApp/>
    </div>
  );
}

export default App;
