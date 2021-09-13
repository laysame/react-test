import React from "react";
import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <SearchEngine defaultCity = "Dublin City"/>
        </header>
      </div>

  );
}

export default App;

