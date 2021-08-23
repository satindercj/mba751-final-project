import "./slider.css";

export default function Slider(props: any) {
  return (
    <div>
      <div className="row">
        <div className="row__posters">
          {props.movies.map((movie: any) => (
            <img
              key={movie.id}
              className="row__poster row__posterLarge"
              src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
              alt={movie.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
