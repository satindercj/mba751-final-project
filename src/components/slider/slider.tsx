import React from "react";
import { movie } from "../home/home";
import Movie from "../movie/movie";
import "./slider.css";
import defaultPoster from "../../images/defaultPoster.jpg";

export default function Slider(props: any) {
  const [open, setOpen] = React.useState(false);
  const [selectedMovie, setSelectedMovie] = React.useState({
    backdrop_path: "",
    poster_path: "",
    title: "",
    release_date: "",
    id: 0,
    vote_average: 0,
    overview: "",
  });

  const handleClickOpen = (movie: any) => {
    setSelectedMovie(movie);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="row">
        <div className="row__posters">
          {props.movies.map((movie: movie) => (
            <img
              key={movie.id}
              className="row__poster row__posterLarge"
              src={
                movie.poster_path === null
                  ? defaultPoster
                  : "https://image.tmdb.org/t/p/w500/" + movie.poster_path
              }
              alt={movie.title}
              onClick={(event) => {
                handleClickOpen(movie);
              }}
            />
          ))}
          <Movie
            selectedMovie={selectedMovie}
            open={open}
            onClose={handleClose}
            originWatchList={false}
          />
        </div>
      </div>
    </div>
  );
}
