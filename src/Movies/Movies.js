import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";

import Movie from "./Movie/Movie.js";
import "./styles.css";

const Movies = ({ movies }) => {
  return (
    <Grid className="mainContainer" container alignItems="stretch" spacing={3}>
      {movies.map((movie) => (
        <Grid key={movie._id} item xs={12} sm={4}>
          <Movie movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Movies;
