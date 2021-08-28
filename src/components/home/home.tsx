import React from "react";
import axios from "axios";
// import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import "./home.css";
import Slider from "../slider/slider";
import { Dialog } from "@material-ui/core";
import Loader from "react-loader-spinner";

export interface movie {
  backdrop_path: string;
  poster_path: string;
  title: string;
  release_date: string;
  id: number;
  vote_average: number;
  overview: string;
}

interface IProps {}

interface IState {
  apiUrl: string;
  apiKey: string;
  popularMovies: movie[];
  topRatedMovies: movie[];
  upcomingMovies: movie[];
  value: number;
  popularLoading: boolean;
  topRatedLoading: boolean;
  upcomingLoading: boolean;
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
      popularLoading: false,
      topRatedLoading: false,
      upcomingLoading: false,
    };
  }

  componentDidMount() {
    this.getPopularMovieData(1);
    this.getTopRatedMovies(1);
    this.getUpcomingMovies(1);
  }

  getPopularMovieData = (pageNumber: number) => {
    this.setState({ popularLoading: !this.state.popularLoading });
    axios
      .get(
        `${this.state.apiUrl}/movie/popular?${this.state.apiKey}&language=en-US&region=US&page=${pageNumber}`
      )
      .then((res) => {
        let movies: movie[] = res.data.results;
        this.setState({
          popularMovies: movies,
          popularLoading: !this.state.popularLoading,
        });
      });
  };

  getTopRatedMovies = (pageNumber: number) => {
    this.setState({ topRatedLoading: !this.state.topRatedLoading });
    axios
      .get(
        `${this.state.apiUrl}/movie/top_rated?${this.state.apiKey}&language=en-US&region=US&page=${pageNumber}`
      )
      .then((res) => {
        let movies: movie[] = res.data.results;

        this.setState({
          topRatedMovies: movies,
          topRatedLoading: !this.state.topRatedLoading,
        });
      });
  };

  getUpcomingMovies = (pageNumber: number) => {
    this.setState({ upcomingLoading: !this.state.upcomingLoading });
    axios
      .get(
        `${this.state.apiUrl}/movie/upcoming?${this.state.apiKey}&language=en-US&region=US&page=${pageNumber}`
      )
      .then((res) => {
        let movies: movie[] = res.data.results;

        this.setState({
          upcomingMovies: movies,
          upcomingLoading: !this.state.upcomingLoading,
        });
      });
  };

  render() {
    return (
      <div className="home">
        <Dialog
          open={
            this.state.popularLoading ||
            this.state.topRatedLoading ||
            this.state.upcomingLoading
          }
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
            visible={
              this.state.popularLoading ||
              this.state.topRatedLoading ||
              this.state.upcomingLoading
            }
          />
        </Dialog>
        <h1>Popular Movies</h1>
        {!this.state.popularLoading && (
          <Slider movies={this.state.popularMovies} />
        )}
        <h1>Upcoming Movies</h1>
        {!this.state.topRatedLoading && (
          <Slider movies={this.state.upcomingMovies} />
        )}
        <h1>Top Rated Movies</h1>
        {!this.state.upcomingLoading && (
          <Slider movies={this.state.topRatedMovies} />
        )}
      </div>
    );
  }
}

export default Home;
