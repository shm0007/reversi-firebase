import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";
firebase.initializeApp({
  apiKey: "AIzaSyAIx5BjBIXvQwb_m1JsTYFs6ZxzXfSKP-Q",
  authDomain: "reversi-aa2e8.firebaseapp.com",
  projectId: "reversi-aa2e8",
  storageBucket: "reversi-aa2e8.appspot.com",
  messagingSenderId: "397175895344",
  appId: "1:397175895344:web:e0680cbd6dd6e3955844f5",
  measurementId: "G-LQ3Q7MHFTM",
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
