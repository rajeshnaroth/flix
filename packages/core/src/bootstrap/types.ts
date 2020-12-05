export type BootstrappedPageType = (
  component: () => JSX.Element
) => (props?: object) => JSX.Element;
