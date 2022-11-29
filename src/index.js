import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "./App.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { reducer } from "./store/reducer";

const store = createStore(reducer, applyMiddleware(thunk));
document.title = "Secret Family Recipes Cookbook";
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App dispatch={store.dispatch} />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
