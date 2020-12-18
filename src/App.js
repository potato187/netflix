import * as ROUTES from "constants/routes";
import { Browse, Home, SignIn, SignUp } from "pages";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { IsUserRedirect, ProtectedRoute } from "helpers/routes";
import { useAuthListener } from "hooks";

function App() {
  const { user } = useAuthListener();

  return (
    <BrowserRouter>
      <Switch>
        <IsUserRedirect
          exact
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect
          exact
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
        >
          <SignUp />
        </IsUserRedirect>
        <IsUserRedirect
          exact
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
        >
          <Home />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
