import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_NICTOOLS_API_KEY,
//   authDomain: "nic-tools.firebaseapp.com",
//   projectId: "nic-tools",
//   storageBucket: "nic-tools.appspot.com",
//   messagingSenderId: "301115783603",
//   appId: "1:301115783603:web:5bbf07b7e06b4bca6333c6"
// };

// const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
