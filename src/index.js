import { Provider } from "react-redux";
import store from "./store/store"

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import { StrictMode } from "react";
// import ThemeProvider from "react-bootstrap/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <StrictMode>
      {/* <ThemeProvider> */}
        <App />
      {/* </ThemeProvider> */}
    </StrictMode>
  </Provider>
);

// reportWebVitals();
