import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  searchMovieRequest: ["payload"],
  searchMovieSuccess: ["movie"],
  searchMovieFailure: [],
  selectMovieRequest: ["payload"],
  selectMovieSuccess: ["movie"],
  clearSelectedMovie: [],
  clearMoviesList: [],
  addToFavList: ["movie"],
});

const INITIAL_STATE = {
  search: [],
  searchSelected: {},
  isLoading: true,
  favList: [],
};

const selectMovieSuccess = (state = INITIAL_STATE, { movie }) => {
  return {
    isLoading: false,
    ...state,
    searchSelected: movie.data,
  };
};

const searchMovieSuccess = (state = INITIAL_STATE, { movie }) => {
  return {
    ...state,
    isLoading: false,
    search: movie.data.Search,
  };
};

const addToFavList = (state = INITIAL_STATE, { movie }) => {
  const { favList } = state;
  return {
    ...state,
    favList: [...favList, movie],
  };
};

const searchMovieFailure = (state = INITIAL_STATE) => {
  return {
    isLoading: false,
    ...state,
    search: null,
  };
};

const clearMoviesList = (state = INITIAL_STATE) => {
  return {
    ...state,
    search: [],
  };
};

const clearSelectedMovie = (state = INITIAL_STATE) => {
  return {
    ...state,
    searchSelected: [],
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.SEARCH_MOVIE_SUCCESS]: searchMovieSuccess,
  [Types.SEARCH_MOVIE_FAILURE]: searchMovieFailure,
  [Types.SELECT_MOVIE_SUCCESS]: selectMovieSuccess,
  [Types.ADD_TO_FAV_LIST]: addToFavList,
  [Types.CLEAR_SELECTED_MOVIE]: clearSelectedMovie,
  [Types.CLEAR_MOVIES_LIST]: clearMoviesList,
});
