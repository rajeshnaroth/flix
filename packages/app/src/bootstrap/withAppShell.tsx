import React, { ElementType } from "react";
import { useTranslation } from "react-i18next";
import { AppShell } from "../components/AppShell";

export const withAppShell = (Component: ElementType) => (props?: object) => {
  const { t } = useTranslation();
  return (
    <AppShell>
      <h1>{t("title")}</h1>
      <Component {...props} />
    </AppShell>
  );
};
