import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movies from "./Movies/Movies.js";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/api/movies");
      const payload = await response.json();
      setMovies(payload.data);
      document.body.style.overflow = "hidden";
    }
    getData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and your changes will live-update
          automatically.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Nice Movies:</p>

        <Movies movies={movies} />
      </header>
    </div>
  );
}

export default App;
