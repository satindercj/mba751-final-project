import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { movie } from "../components/home/home";

export interface WatchListState {
  movies: movie[];
}

const initialState: WatchListState = {
  movies: [],
};

export const watchList = createSlice({
  name: "watchList",
  initialState,

  reducers: {
    addMovie: (state, action: PayloadAction<movie>) => {
      let newMovie: any = action.payload;
      state.movies.map((movie) => {
        if (movie.id === action.payload.id) {
          return (newMovie = {});
        } else {
          return newMovie;
        }
      });

      state.movies.push(newMovie);
    },
    removeMovie: (state, action: PayloadAction<movie>) => {
      state.movies = state.movies.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addMovie, removeMovie } = watchList.actions;

export const selectMovies = (state: RootState) => state.watchList.movies;

export default watchList.reducer;
