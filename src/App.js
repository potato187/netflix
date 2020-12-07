import * as ROUTES from "constants/routes";
import { Browse, Home, SignIn, SignUp } from "pages";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter> 
      <Redirect from="/" to="/home" />
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.BROWSE} component={Browse} />
        <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
