import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ChordDisplay from "./Components/Chords/ChordDisplay";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChordDisplay />
      </header>
    </div>
  );
}

export default App;
