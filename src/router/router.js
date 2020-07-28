import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { createMemoryHistory } from 'history';
import App from './../containers/app';

const history = createMemoryHistory();

const RouterHOC = () => {
    return (
      <Router history={history}>
          <Switch>
            <Route path="/" children={<App />} />
            <Route path="/:page" children={<App />} />
          </Switch>
      </Router>
    );
  }
  
  export {RouterHOC};
