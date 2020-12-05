import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React, { ElementType } from "react";
import { BootstrappedPageType } from "./types";

export const withTheme: BootstrappedPageType = (Component: ElementType) => (
  props?: object
) => {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Component {...props} />
    </ThemeProvider>
  );
};
