// src/main.tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./src/styles/tailwind.css"; 

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.render(<App />, rootElement);
}
