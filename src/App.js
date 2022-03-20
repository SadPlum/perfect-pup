import React from "react";

import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
  HashRouter as HashRouter,
} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./home/Home";

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
