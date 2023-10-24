import React, { useState, useEffect } from "react";
import "./App.css";
import Movies from "./Movies/Movies.js";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/api/movies");
      const payload = await response.json();
      setMovies(payload.data);
    }
    getData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
      <h1>Movies</h1>
        <Movies movies={movies} />
      </header>
    </div>
  );
}

export default App;
