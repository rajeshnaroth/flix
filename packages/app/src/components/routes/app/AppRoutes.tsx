import React from "react";
import { Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { withFeatureBootstrap } from "../../../bootstrap";

const HOME_URL = `/home`;
const HomeFeature = () => <div>Home Feature</div>;
const HomeFeaturePage = withFeatureBootstrap(HomeFeature);

export const AppRoutes = () => (
  <Grid>
    <Switch>
      <Route path={`${HOME_URL}`} exact={true} component={HomeFeaturePage} />
    </Switch>
  </Grid>
);
