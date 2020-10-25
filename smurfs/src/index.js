import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { smurfReducers } from './reducers/smurfReducers';
import thunk from 'redux-thunk';

let store = createStore(smurfReducers, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>, 
    document.getElementById("root"));
