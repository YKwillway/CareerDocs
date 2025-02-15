import React from "react";
import Resume from "./components/Resume";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Resume</h1>
      </header>
      <Resume />
    </div>
  );
};

export default App;
