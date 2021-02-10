import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/styles/index.scss";
import StateContextProvider from "./context/Context";

ReactDOM.render(
  <StateContextProvider>
    <App />
  </StateContextProvider>,
  document.getElementById("root")
);
