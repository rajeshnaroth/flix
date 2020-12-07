import React from "react";
import Box from "@material-ui/core/Box";

import "./App.css";

export const BaseLayout: React.FC = (props) => (
  <Box className="app">{props.children}</Box>
);
