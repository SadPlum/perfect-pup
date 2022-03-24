import React from "react";
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import SearchPage from "./components/searchPage/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/perfect-pup" element={<Home />} />
            <Route path="/random"></Route>
            <Route path="/search"></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="/searchPage" element={<SearchPage />} />
            <Route path="/tips"></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
