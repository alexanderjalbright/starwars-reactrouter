import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import React, { Component } from "react";
import PlanetsListPage from "./PlanetsListPage";
import PlanetDetailsPage from "./PlanetDetailsPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to="/planet">Home</Link>
            <Link to="/planet/details/4">Details</Link>
            <a href="https://swapi.com">SW Api</a>
          </nav>

          <Route path="/planet" exact component={PlanetsListPage} />
          <Route
            path="/planet/details/:id"
            exact
            component={PlanetDetailsPage}
          />
        </div>
      </Router>
    );
  }
}

export default App;
