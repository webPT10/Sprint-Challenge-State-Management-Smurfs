import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import "./index.css";

import App from "./components/App";
import { reducer } from "./reducers";

const store = createStore(reducer, applyMiddleware(thunk));

// const composeEnhancer = (compose) => applyMiddleware(thunk) || compose;

// const store = createStore(reducer, composeEnhancer(applyMiddleware(logger)))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById("root")
);