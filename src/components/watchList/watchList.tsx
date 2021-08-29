import { useAppSelector } from "../../app/hooks";
import { selectMovies } from "../../features/watchListSlice";
import WatchListResults from "./watchListResults/watchListResults";

function WatchList(props: any) {
  const { bottomNavChange } = props;
  const movies = useAppSelector(selectMovies);

  bottomNavChange("Watch List");

  return (
    <div>
      <h1>Watch List</h1>
      <WatchListResults movies={movies} />
    </div>
  );
}

export default WatchList;
