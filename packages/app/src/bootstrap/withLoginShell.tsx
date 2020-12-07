import { BaseLayout, LoginLayout } from "@totalrepo/core";
import React, { ElementType } from "react";
// import { useTranslation } from "react-i18next";
import { LoginHeader } from "../components/Login";

export const withLoginShell = (Component: ElementType) => (props?: object) => {
  // const { t } = useTranslation();
  return (
    <BaseLayout>
      <LoginLayout header={<LoginHeader />}>
        <Component {...props} />
      </LoginLayout>
    </BaseLayout>
  );
};
