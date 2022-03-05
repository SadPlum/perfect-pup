import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./header/Header";
import Slider from "./slider/Slider";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Slider />
  </React.StrictMode>,
  document.getElementById("root")
);
