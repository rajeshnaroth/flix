import React, { ElementType, StrictMode } from "react";
import { BootstrappedPageType } from "./types";

export const withStrictMode: BootstrappedPageType = (
  Component: ElementType
) => (props?: object) => (
  <StrictMode>
    <Component {...props} />
  </StrictMode>
);
