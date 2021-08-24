import { useLocation } from "react-router-dom";

function Search() {
  const location = useLocation();

  console.log("This is in history ", location.pathname);

  return (
    <div>
      <h1>Search</h1>
    </div>
  );
}

export default Search;
