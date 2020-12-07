import React, { ElementType } from "react";
import i18n, { InitOptions } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

export const bindi18n = (options: InitOptions) => {
  const withI18n = (Component: ElementType) => (props?: object) => {
    i18n.use(LanguageDetector).use(initReactI18next).init(options);

    return <Component {...props} />;
  };
  return withI18n;
};
