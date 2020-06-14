import { put, call, takeLatest } from "redux-saga/effects";
import {
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_COMPLETE,
  SEARCH_MOVIE_BY_ID_START,
  SEARCH_MOVIE_BY_ID_ERROR,
  SEARCH_MOVIE_BY_ID_COMPLETE,
  ADD_FAV_LIST_START,
  ADD_FAV_LIST_ERROR,
  ADD_FAV_LIST__COMPLETE,
} from "../../consts/actionTypes";
import {
  Types as searchTypes,
  Creators as searchCreators,
} from "../reducers/Search";
import { apiCall } from "../api";

export function* searchMovie({ payload }) {
  try {
    const search = yield call(
      apiCall,
      `&s=${payload.movieName}`,
      null,
      null,
      "GET"
    );
    if (!search.data.Error) {
      yield put(searchCreators.searchMovieSuccess(search));
    } else {
      yield put(searchCreators.searchMovieFailure(search));
    }
  } catch (error) {
    yield put({ type: SEARCH_MOVIE_ERROR, error });
  }
}

export function* selectMovie({ payload }) {
  try {
    const { imdbID } = payload;
    const movie = yield call(apiCall, `&i=${imdbID}`, null, null, "GET");
    yield put(searchCreators.selectMovieSuccess(movie));
  } catch (error) {
    yield put({ type: SEARCH_MOVIE_BY_ID_ERROR, error });
  }
}

export function* searchMovieById({ payload }) {
  try {
    const movie = yield call(
      apiCall,
      `&i=${payload.movieId}`,
      null,
      null,
      "GET"
    );
    yield put({ type: SEARCH_MOVIE_BY_ID_COMPLETE, movie });
  } catch (error) {
    yield put({ type: SEARCH_MOVIE_BY_ID_ERROR, error });
  }
}

export default function* search() {
  yield takeLatest(searchTypes.SEARCH_MOVIE_REQUEST, searchMovie);
  yield takeLatest(searchTypes.SELECT_MOVIE_REQUEST, selectMovie);
}
