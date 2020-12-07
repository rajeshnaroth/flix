import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

export const LoginHeader = () => (
  <Grid container justify="space-between" spacing={2} xs={12}>
    <Grid item>
      <Link to="/">
        <h3>Logo</h3>
      </Link>
    </Grid>
    <Grid item>
      <Link to="/login">
        <h3>Sign In</h3>
      </Link>
    </Grid>
  </Grid>
);
