import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Seating from "./pages/seating/Seating";
import Scan from "./pages/scan/Scan";
import Landing from "./pages/landing/Landing";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/seating">
          <Seating />
        </Route>
        <Route path="/scan">
          <Scan />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
