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
  const movies = useSelector((state) => state.search.search);
  const isLoading = useSelector((state) => state.search.isLoading);
  const [isLooked, setIsLooked] = useState(false);
  useEffect(() => {
    const { movieName } = queryString.parse(location.search);
    if (movieName && !isLooked) {
      setIsLooked(true);
      dispatch(MovieActions.searchMovieRequest({ movieName }));
    }
  });

  const clearMovies = () => {
    dispatch(MovieActions.clearMoviesList());
    history.push("/");
  };

  const renderMovies = () => {
    if (movies !== null) {
      return movies.map((value, index) => (
        <MovieResult key={index} {...value} />
      ));
    }

    // if (isLoading) {
    //   return <CircularProgress size={100} color="primary" />;
    // }
    else if (movies === null) {
      return (
        <div>
          <h1>NÃO EXISTEM FILMES COM ESSE NOME</h1>
        </div>
      );
    }
    return <div />;
  };

  return (
    <>
      <button onClick={clearMovies}>Back</button>
      <Container>{renderMovies()}</Container>
    </>
  );
};
