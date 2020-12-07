import React from "react";
import Grid from "@material-ui/core/Grid";

interface ILoginLayout {
  header: JSX.Element;
}

export const LoginLayout: React.FC<ILoginLayout> = ({ header, children }) => (
  <Grid container direction="column">
    <Grid item>{header}</Grid>
    <Grid item>{children}</Grid>
  </Grid>
);
