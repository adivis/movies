import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";

import Movie from "./Movie/Movie.js";
import "./styles.css";
import Modal from "./Movie/Modal.js";

const Movies = ({ movies }) => {
  const [movieData, setMovieData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [openModal]);
  return (
    <div>
      {openModal && <Modal movieData={movieData} setOpenModal={setOpenModal} />}
      <Grid
        className="mainContainer"
        container
        alignItems="stretch"
        spacing={3}
      >
        {movies.map((movie) => (
          <Grid key={movie._id} item xs={12} sm={4}>
            <Movie
              movie={movie}
              setMovieData={setMovieData}
              setOpenModal={setOpenModal}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Movies;
