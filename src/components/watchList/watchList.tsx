import { useAppSelector } from "../../app/hooks";
import { selectMovies } from "../../features/watchListSlice";
import WatchListResults from "./watchListResults/watchListResults";

function WatchList() {
  const movies = useAppSelector(selectMovies);

  return (
    <div>
      <h1>Watch List</h1>
      <WatchListResults movies={movies} />
    </div>
  );
}

export default WatchList;
