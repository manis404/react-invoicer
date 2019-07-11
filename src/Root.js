import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./reducers";

const INITIAL_ROOT_STATE = {};

const Root = ({ children, initialState = INITIAL_ROOT_STATE }) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware())
  );

  return <Provider store={store}>{children}</Provider>;
};

export default Root;
