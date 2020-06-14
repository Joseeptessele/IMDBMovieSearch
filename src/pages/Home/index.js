import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

import styles from "./Style";
import { MovieIcon } from "../../icons";

export default ({ history }) => {
  const [searchText, setSearchText] = useState("");

  const classes = styles();

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchTextClick = (event) => {
    history.push(`/results?movieName=${searchText}`);
  };

  const handleCleanTextClick = (event) => {
    setSearchText("");
  };

  return (
    <Container className={classes.container} spacing={3}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>Bem vindo!</Typography>
          </Grid>
          <Grid>
            <MovieIcon className={classes.movieIcon} />
          </Grid>
        </Grid>
        <TextField
          value={searchText}
          placeholder="Buscar..."
          onChange={handleSearchTextChange}
          className={classes.textFieldSearch}
        />
        <Grid className={classes.buttonsContainer}>
          <Button variant="contained" onClick={handleCleanTextClick}>
            Limpar
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            disabled={searchText == ""}
            onClick={handleSearchTextClick}
            className={classes.searchButton}
          >
            Buscar
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSearchTextClick}
            className={classes.searchButton}
          >
            Lista de favoritos
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};
