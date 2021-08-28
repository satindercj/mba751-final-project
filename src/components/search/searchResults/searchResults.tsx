import React from "react";
import { movie } from "../../home/home";
import Movie from "../../movie/movie";
import "./searchResults.css";
import defaultPoster from "../../../images/defaultPoster.jpg";

export default function SearchResults(props: any) {
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
      <div className="results">
        <div className="results__posters">
          {props.movies.map((movie: movie) => (
            <img
              key={movie.id}
              className="results__poster results__posterLarge"
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
