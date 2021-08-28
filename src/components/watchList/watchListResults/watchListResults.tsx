import React from "react";
import { movie } from "../../home/home";
import Movie from "../../movie/movie";
import "./watchListResults.css";
import defaultPoster from "../../../images/defaultPoster.jpg";

export default function WatchListResults(props: any) {
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

  const watchListMovies = props.movies.filter(
    (movie: movie) => Object.keys(movie).length !== 0
  );

  return (
    <div>
      {watchListMovies.length > 0 ? (
        <div className="results">
          <div className="results__posters">
            {watchListMovies.map((movie: movie) => (
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
              originWatchList={true}
            />
          </div>
        </div>
      ) : (
        <h2 className="defaultPrompt">No movies added to Watch List.</h2>
      )}
    </div>
  );
}
