import React from "react";
import { Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import { withFeatureBootstrap } from "../../../bootstrap";
import { LoginFormFeature } from "../../features/LoginFormFeature";

const LOGIN_URL = `/login`;

const LoginFormFeaturePage = withFeatureBootstrap(LoginFormFeature);
const LoginHomeFeature = () => <div>Login Home</div>;
const LoginHomeFeaturePage = withFeatureBootstrap(LoginHomeFeature);

export const LoginRoutes = () => (
  <Grid>
    <Switch>
      <Route
        path={`${LOGIN_URL}`}
        exact={true}
        component={LoginFormFeaturePage}
      />
      <Route path={`/`} exact={true} component={LoginHomeFeaturePage} />
    </Switch>
  </Grid>
);
