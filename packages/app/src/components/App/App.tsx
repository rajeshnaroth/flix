import React from "react";
import { compose } from "ramda";

import {
  withStrictMode,
  withTheme,
  withErrorBoundary,
  withDevMode,
} from "@totalrepo/core";

import {
  withAppShell,
  withLoginShell,
  withI18n,
  withRouter,
} from "../../bootstrap";

import "./App.css";
import { isValidUser } from "../../auth";
import { AppRoutes } from "../routes/app/AppRoutes";
import { LoginRoutes } from "../routes/login/LoginRoutes";

const authenticatedPage = compose(
  withStrictMode,
  withDevMode,
  withI18n,
  withTheme,
  withRouter,
  withAppShell,
  // @ts-ignore because of ramda types
  withErrorBoundary
);

const unAuthenticatedPage = compose(
  withStrictMode,
  withDevMode,
  withI18n,
  withTheme,
  withRouter,
  withLoginShell,
  // @ts-ignore
  withErrorBoundary
);

export const App = () => {
  const Page = isValidUser()
    ? // @ts-ignore because of ramda types
      authenticatedPage(() => <AppRoutes />)
    : // @ts-ignore because of ramda types
      unAuthenticatedPage(() => <LoginRoutes />);
  return <Page />;
};
