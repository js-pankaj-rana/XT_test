import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import App from './../containers/app';
import {PageNotFound} from './../components/pageNotFound';


 

const RouterHOC = () => {
    return (
          <Switch>
            <Route path="/" exact children={<App />} />
            <Route path="/:page" exact children={<App />} />
            <Route path="*" exact children={<PageNotFound />} />
          </Switch>
    );
  }
  
  export {RouterHOC};
