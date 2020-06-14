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
  console.log(movie.data, "no reducer");
  return {
    isLoading: false,
    ...state,
    searchSelected: movie.data,
  };
};

const searchMovieSuccess = (state = INITIAL_STATE, { movie }) => {
  console.log("dasd reducer");
  console.log(movie, "no reducer");
  return {
    ...state,
    isLoading: false,
    search: movie.data.Search,
  };
};

const addToFavList = (state = INITIAL_STATE, { movie }) => {
  console.log(movie, "no reducer");
  console.log(movie, "no reducer");

  const { favList } = state;
  console.log(favList, " A LISTA");
  return {
    ...state,
    favList: [...favList, movie],
  };
};

const searchMovieFailure = (state = INITIAL_STATE) => {
  console.log("error ao buscar reducer");
  return {
    isLoading: false,
    ...state,
    search: null,
  };
};

const clearMoviesList = (state = INITIAL_STATE) => {
  console.log("limpando lista");
  return {
    ...state,
    search: [],
  };
};

const clearSelectedMovie = (state = INITIAL_STATE) => {
  console.log("limpando lista");
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

// import {
//   SEARCH_MOVIE_START,
//   SEARCH_MOVIE_ERROR,
//   SEARCH_MOVIE_COMPLETE,
//   CLEAR_MOVIE_LIST,
//   SEARCH_MOVIE_BY_ID_START,
//   SEARCH_MOVIE_BY_ID_ERROR,
//   SEARCH_MOVIE_BY_ID_COMPLETE,
//   ADD_FAV_LIST_START,
//   ADD_FAV_LIST_ERROR,
//   ADD_FAV_LIST__COMPLETE,
// } from "../../consts/actionTypes";

// const initialState = {};

// export default function (state = initialState, action) {
//   switch (action.type) {
//     case SEARCH_MOVIE_START:
//       return { ...state, isLoading: true };
//     case SEARCH_MOVIE_ERROR:
//       return { ...state, isLoading: false, movieResults: null };
//     case SEARCH_MOVIE_COMPLETE:
//       console.log(action);
//       return { ...state, isLoading: false, movieResults: action.result.data };
//     case SEARCH_MOVIE_BY_ID_START:
//       return { ...state, isLoading: true, movieResult: null };
//     case SEARCH_MOVIE_BY_ID_ERROR:
//       return { ...state, isLoading: false, movieResult: null };
//     case SEARCH_MOVIE_BY_ID_COMPLETE:
//       console.log(action);
//       return { ...state, isLoading: false, movieResult: action.movie.data };
//     case CLEAR_MOVIE_LIST:
//       console.log("limpando");
//       return { ...state, isLoading: false, movieResults: null };
//     case ADD_FAV_LIST_START:
//       console.log("add");
//       return {
//         ...state,
//         isLoading: true,
//         favList: action.movie.data,
//       };
//     default:
//       return { ...state };
//   }
// }
