import {
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_BY_ID_START,
  CLEAR_MOVIE_LIST,
  ADD_FAV_LIST_START,
} from "../../consts/actionTypes";

export const searchMovie = (payload) => ({
  type: SEARCH_MOVIE_START,
  payload,
});

export const searchMovieById = (payload) => ({
  type: SEARCH_MOVIE_BY_ID_START,
  payload,
});

export const addFavList = (payload) => ({
  type: ADD_FAV_LIST_START,
  payload,
});

export const clearMovieList = (payload) => ({
  type: CLEAR_MOVIE_LIST,
  payload,
});
