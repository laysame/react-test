import React from "react";
import "./App.css";
import SearchEngine from "./SearchEngine";
import Footer from "./Footer";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <SearchEngine defaultCity = "Dublin City"/>
        </header>
          <Footer />
      </div>

  );
}

export default App;

