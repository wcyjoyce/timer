import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import App from "./components/app.jsx";
import "./stylesheets/application.scss";

import tasksReducer from "./reducers/tasks_reducer.js";

const reducers = combineReducers({
  tasks: tasksReducer
})

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
