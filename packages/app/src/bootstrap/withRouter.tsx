import { ElementType } from "react";
import { HashRouter as Router } from "react-router-dom";

export const withRouter = (Component: ElementType) => (props?: object) => (
  <Router>
    <Component {...props} />
  </Router>
);
