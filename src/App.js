import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import PropTypes from "prop-types";

import Home from "./pages/Home";
import Results from "./pages/Results";
import MovieDetails from "./pages/MovieDetails";
import FavoriteMovies from "./pages/Favorites";

// comentario random

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/movie/:id" component={MovieDetails} />
        <Route exact path="/favorites" component={FavoriteMovies} />
      </div>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
