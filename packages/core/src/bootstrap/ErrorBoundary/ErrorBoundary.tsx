import React from "react";
import { useTranslation } from "react-i18next";

class ErrorBoundaryClass extends React.Component<any, any> {
  constructor(props: object) {
    super(props);
    this.state = { hasError: false, error: "" };
  }

  // @ts-ignore For now. We have to figure out a way to log ui errors
  public componentDidCatch(error: any, info: any) {
    this.setState({ hasError: true, error: info.componentStack });
    // logErrorToMyService(error, info);
  }

  public render() {
    const { t } = this.props;
    return this.state.hasError ? (
      <div>
        <p>{t("core:sorry")}</p>
        <p>{t("core:pleaseRefresh")}</p>
      </div>
    ) : (
      this.props.children
    );
  }
}

export const ErrorBoundary: React.FC = (props: any) => {
  const { t } = useTranslation();

  return <ErrorBoundaryClass t={t} {...props} />;
};
