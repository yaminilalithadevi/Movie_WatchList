import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Provider from "./context/Provider";
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
//import { Routes, Route } from 'react-router-dom'; // Import Routes and Route

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider>
       <BrowserRouter> {/* Use BrowserRouter here */}
          <App />
       </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
