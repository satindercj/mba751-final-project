import React from "react";
import axios from "axios";
// import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import "./home.css";
import Slider from "../slider/slider";

export interface movie {
  backdrop_path: string | undefined;
  poster_path: string | undefined;
  title: string | undefined;
  release_date: string | undefined;
  id: number | undefined;
  vote_average: number | undefined;
  overview: string | undefined;
}

interface IProps {}

interface IState {
  apiUrl: string;
  apiKey: string;
  popularMovies: movie[];
  topRatedMovies: movie[];
  upcomingMovies: movie[];
  value: number;
}

class Home extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      apiUrl: "https://api.themoviedb.org/3",
      apiKey: "api_key=e9277d5ee0d4c8d517f2cbcc0a23012a",
      popularMovies: [],
      topRatedMovies: [],
      upcomingMovies: [],
      value: 0,
    };
  }

  componentDidMount() {
    this.getPopularMovieData(1);
    this.getTopRatedMovies(1);
    this.getUpcomingMovies(1);
  }

  getPopularMovieData = (pageNumber: number) => {
    axios
      .get(
        `${this.state.apiUrl}/movie/popular?${this.state.apiKey}&language=en-US&region=US&page=${pageNumber}`
      )
      .then((res) => {
        let movies: movie[] = res.data.results;
        this.setState({
          popularMovies: movies,
        });

        console.log("This is in state ", this.state.popularMovies);
        console.log("This is in 1st value ", this.state.popularMovies[0].title);
      });
  };

  getTopRatedMovies = (pageNumber: number) => {
    axios
      .get(
        `${this.state.apiUrl}/movie/top_rated?${this.state.apiKey}&language=en-US&region=US&page=${pageNumber}`
      )
      .then((res) => {
        let movies: movie[] = res.data.results;
        console.log("This the res ", movies);
        this.setState({
          topRatedMovies: movies,
        });

        console.log(
          "This is in Top Rated Movies state ",
          this.state.topRatedMovies
        );
      });
  };

  getUpcomingMovies = (pageNumber: number) => {
    axios
      .get(
        `${this.state.apiUrl}/movie/upcoming?${this.state.apiKey}&language=en-US&region=US&page=${pageNumber}`
      )
      .then((res) => {
        let movies: movie[] = res.data.results;
        console.log("This the res ", movies);
        this.setState({
          upcomingMovies: movies,
        });

        console.log(
          "This is in Upcoming Movies state ",
          this.state.upcomingMovies
        );
      });
  };

  render() {
    return (
      <div className="home">
        <h1>Home</h1>
        <h1>Popular Movies</h1>
        <Slider movies={this.state.popularMovies} />
        <h1>Upcoming Movies</h1>
        <Slider movies={this.state.upcomingMovies} />
        <h1>Top Rated Movies</h1>
        <Slider movies={this.state.topRatedMovies} />
      </div>
    );
  }
}

export default Home;
