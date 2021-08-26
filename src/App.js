import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchEngine from "./SearchEngine";


function App() {
  return (
      <div className="App">
        <header className="App-header">
          <SearchEngine />
        </header>
      </div>
  );
}

export default App;

