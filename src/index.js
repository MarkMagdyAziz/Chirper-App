import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import middleware from "./middleware";
import reducer from "./reducers";
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
