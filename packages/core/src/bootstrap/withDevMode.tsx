import React, { ElementType } from "react";
import { BootstrappedPageType } from "./types";

//Allow development mode check from anywhere in the App
export const withDevMode: BootstrappedPageType = (Component: ElementType) => (
  props: object
) => {
  (globalThis as any).__DEV__ = process.env.NODE_ENV === "development";

  return <Component {...props} />;
};
