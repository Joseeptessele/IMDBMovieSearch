import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, CircularProgress } from "@material-ui/core";
import queryString from "query-string";

import { movieResults, isSearchLoading } from "../../redux/selectors";
import { searchMovie, clearMovieList } from "../../redux/actions/Search";
import MovieResult from "../../components/MovieResult";
import { Creators as MovieActions } from "../../redux/reducers/Search";

export default ({ location, history }) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.search.favList);
  const isLoading = useSelector((state) => state.search.isLoading);
  const [isLooked, setIsLooked] = useState(false);

  const clearMovies = () => {
    dispatch(MovieActions.clearMoviesList());
    history.push("/");
  };

  const renderMovies = () => {
    if (movies) {
      return movies.map((value, index) => (
        <MovieResult key={index} {...value} />
      ));
    }

    if (!movies) {
      return (
        <div>
          <h1>You didn't add favorite movies yet.</h1>
        </div>
      );
    }
    return <div />;
  };

  return (
    <>
      <button onClick={clearMovies}>Back</button>
      <h1>All favorite movies</h1>
      <Container>{renderMovies()}</Container>
    </>
  );
};
