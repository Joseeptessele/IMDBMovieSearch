import React, { useEffect } from "react";
import { Container, CircularProgress, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Creators as MovieActions } from "../../redux/reducers/Search";

import { searchMovieById } from "../../redux/actions/Search";
import { movieResult as movieResultSelector } from "../../redux/selectors";

export default ({ match, history }) => {
  const dispatch = useDispatch();
  const movieResult = useSelector((state) => state.search.searchSelected);
  const movieId = match.params.id;
  console.log(movieResult);
  useEffect(() => {
    //   if (!movieResult || (movieResult && movieResult.imdbID !== movieId)) {
    //     dispatch(searchMovieById({ movieId }));
    //   }
    // console.log(movieResult);
  });

  if (Object.entries(movieResult).length === 0) {
    return <CircularProgress size={100} color="primary" />;
  }

  const clearMovies = () => {
    dispatch(MovieActions.clearSelectedMovie());
    history.push(`/results`);
  };
  const addMovieToFavList = () => {
    dispatch(MovieActions.addToFavList(movieResult));
  };

  return (
    <Container>
      <button onClick={clearMovies}>back</button>
      <button color="secondary" variant="contained" onClick={addMovieToFavList}>
        Favoritar
      </button>
      <Typography variant="h3">{movieResult.Title}</Typography>
      <img src={movieResult.Poster} alt={movieResult.Title} />
      <Typography>
        <strong>Atores: </strong> {movieResult.Actors}
      </Typography>
      <Typography>
        <strong>Diretor: </strong> {movieResult.Director}
      </Typography>
      <Typography>
        <strong>País: </strong> {movieResult.Country}
      </Typography>
      <Typography>
        <strong>Nota: </strong> {movieResult.Rated}
      </Typography>
      <Typography>
        <strong>Prêmios: </strong> {movieResult.Awards}
      </Typography>
      <Typography>
        <strong>Sinopse: </strong> {movieResult.Plot}
      </Typography>
    </Container>
  );
};
