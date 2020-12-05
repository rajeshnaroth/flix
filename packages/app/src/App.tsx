import React from "react";
import { compose } from "ramda";
import "./App.css";
import { MyButton, withStrictMode, withTheme } from "@totalrepo/core";
import Button from "@material-ui/core/Button";

const Page = compose(withStrictMode, withTheme);

const Welcome = () => (
  <div className="App">
    <header className="App-header">
      <p>
        <MyButton label="Hello" /> It is <Button>Dark</Button> in here.
      </p>
    </header>
  </div>
);

const App = () => {
  const AppMode = Page(() => <Welcome />);
  return <AppMode />;
};

export default App;
