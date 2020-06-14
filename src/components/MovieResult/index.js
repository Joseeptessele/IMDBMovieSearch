import React from "react";
import { Card, Grid, Typography, Button } from "@material-ui/core";
import styles from "./styles";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavList } from "../../redux/actions/Search";
import { Creators as MovieActions } from "../../redux/reducers/Search";

const MovieResult = ({ Title, Year, Type, imdbID, Poster, history }) => {
  const dispatch = useDispatch();

  const classes = styles();

  const handleViewMore = () => {
    dispatch(MovieActions.selectMovieRequest({ imdbID }));
    history.push(`/movie/${imdbID}`);
  };
  const handleAddFav = () => {
    dispatch(MovieActions.selectMovieRequest({ imdbID }));
  };

  return (
    <Card className={classes.cardContainer}>
      <Grid container>
        <Grid item>
          <img src={Poster} alt={Title} className={classes.poster} />
        </Grid>
        <Grid item className={classes.titleContainer}>
          <Typography>{Title}</Typography>
          <Typography>{Year}</Typography>
          <Typography>{Type}</Typography>
          <Button color="primary" variant="contained" onClick={handleViewMore}>
            Ver mais
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default withRouter(MovieResult);
