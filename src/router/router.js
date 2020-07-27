import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import App from './../containers/app';

const RouterHOC = () => {
    return (
      <Router>
          <Switch>
            <Route path="/" children={<App />} />
            <Route path="/:page" children={<App />} />
          </Switch>
      </Router>
    );
  }
  
  export {RouterHOC};
