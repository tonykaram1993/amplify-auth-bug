import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Pages
import AnotherPage from "./AnotherPage";
import AWsAuthTest from "./AWSAuthTest";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />

      <Route render={() => <AWsAuthTest />} exact path="/test" />
      <Route render={() => <AnotherPage />} exact path="/home" />

      <Redirect to="/home" />
    </Switch>
  );
};

export default Routes;
