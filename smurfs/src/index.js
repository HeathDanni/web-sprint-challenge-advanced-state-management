import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { smurfReducers } from './reducers/smurfReducers';

let store = createStore(smurfReducers);

ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>, 
    document.getElementById("root"));
