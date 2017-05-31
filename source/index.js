// Render
import React from "react";
import ReactDOM from "react-dom";

// Libraries
import { AppContainer } from "react-hot-loader";
import * as OfflinePluginRuntime from "offline-plugin/runtime";

// Components
import App from "./components/App";

// Assets
import "./CNAME";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );
};

// Main, initial starting point for the app.
render(App);

// Hot Module Replacement
if (module.hot) {
  const NextApp = require("./components/App").default;
  module.hot.accept("./components/App", () => {
    render(NextApp);
  });
}

// Service Worker
OfflinePluginRuntime.install();
