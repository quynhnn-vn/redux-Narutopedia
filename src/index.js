import React from "react";
import ReactDOM from "react-dom";
import store from "./app/store";
import { Provider } from "react-redux";
import App from "./app/App";

// Set up workder for MSW
const { worker } = require("./mocks/browser");
worker.start();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);