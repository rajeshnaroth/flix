import React, { ElementType } from "react";
import { ErrorBoundary } from "./ErrorBoundary";

export const withErrorBoundary = (Component: ElementType) => (
  props: object
) => (
  <ErrorBoundary>
    <Component {...props} />
  </ErrorBoundary>
);
