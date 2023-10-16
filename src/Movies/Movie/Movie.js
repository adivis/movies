import React, { useState } from "react";
import "./styles.css";
import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import Modal from "./Modal";
const Movie = ({ movie, setMovieData, setOpenModal }) => {
  async function getData(id) {
    setOpenModal(true);
    const response = await fetch("/api/movies" + id);
    const payload = await response.json();
    console.log(payload.data);
    setMovieData(payload.data[0]);
  }
  return (
    <Card style={{ height: "100%" }} className="card">
      <CardContent className="description">
        <Typography className="title" variant="h6">
          {movie.original_title}
        </Typography>
        <Typography className="title" variant="p">
          {movie.tagline}
        </Typography>
        <Typography className="title" variant="p">
          {movie.vote_average}
        </Typography>
      </CardContent>
      <CardActions className="cardActions">
        <button size="small" color="primary" onClick={() => getData(movie.id)}>
          Open
        </button>
      </CardActions>
    </Card>
  );
};

export default Movie;
