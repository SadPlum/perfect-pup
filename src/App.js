import React from "react";

import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/random"></Route>
        <Route path="/search"></Route>
        <Route path="/contact"></Route>
        <Route path="/about"></Route>
        <Route path="/tips"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
