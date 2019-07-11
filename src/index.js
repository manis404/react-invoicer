import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import Root from "./Root";

import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <Root>
    <App></App>
  </Root>,
  document.querySelector("#root")
);
