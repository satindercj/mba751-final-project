import {
  Dialog,
  IconButton,
  InputBase,
  makeStyles,
  Paper,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import React from "react";
import SearchResults from "./searchResults/searchResults";
import Loader from "react-loader-spinner";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    maxWidth: 600,
    border: "1px solid #05a3d2",
    boxShadow: "1px 2px #05a3d2b3",
  },
  input: {
    marginLeft: theme.spacing(1),
    color: "#354042",
    flex: 1,
  },
  iconButton: {
    padding: 10,
    color: "#05a3d2",
  },
  divider: {
    height: 28,
    margin: 4,
  },
  placeholder: {
    height: 40,
  },
}));

function Search() {
  const classes = useStyles();

  const [searchText, setSearchText] = React.useState("");
  const [movies, setMovies] = React.useState([
    {
      backdrop_path: "",
      poster_path: "",
      title: "",
      release_date: "",
      id: 0,
      vote_average: 0,
      overview: "",
    },
  ]);
  const [loading, setLoading] = React.useState(false);

  const apiData = {
    apiUrl: "https://api.themoviedb.org/3",
    apiKey: "api_key=e9277d5ee0d4c8d517f2cbcc0a23012a",
  };

  const onChange = (searchVal: string) => {
    setSearchText(searchVal);
    if (searchVal.length >= 3) {
      searchMovie();
    }
  };

  const searchMovie = async () => {
    setLoading((previousloading) => !previousloading);

    if (searchText.length < 3) {
      setLoading((previousloading) => !previousloading);
      return;
    }

    axios
      .get(
        `${apiData.apiUrl}/search/movie?${apiData.apiKey}&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
      .then(async (res) => {
        let results = res.data.results;
        await setMovies(results);

        setLoading((previousloading) => !previousloading);
      });
  };

  return (
    <div>
      <div className={classes.placeholder}>
        <Dialog
          open={loading}
          PaperProps={{
            style: {
              backgroundColor: "transparent",
              boxShadow: "none",
            },
          }}
        >
          <Loader
            type="Circles"
            color="#04c6ff"
            height={100}
            width={100}
            visible={loading}
          />
        </Dialog>
      </div>
      <h1>Search</h1>
      <Paper className={classes.root} elevation={2}>
        <InputBase
          className={classes.input}
          onChange={(event) => {
            onChange(event.target.value);
          }}
          onKeyPress={(e: any) => e.key === "Enter" && searchMovie()}
          placeholder="Search Movies"
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon onClick={(e) => searchMovie()} />
        </IconButton>
      </Paper>
      {!loading && <SearchResults movies={movies} />}
    </div>
  );
}

export default Search;
