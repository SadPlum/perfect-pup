import React, { useState } from "react";
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/core/header/Header";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Footer from "./components/core/footer/Footer";
import SearchPage from "./components/pages/searchPage/SearchPage";
import SingleDogDisplayPage from "./components/pages/singleDogDisplayPage/SingleDogDisplayPage";
import "./styles/styles.css";

function App() {
  const [dogList, setDogList] = useState();

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/perfect-pup" element={<Home />} />
            <Route
              path="/search"
              element={<SearchPage dogList={dogList} setDogList={setDogList} />}
            />

            <Route
              path="/search/:dogId"
              element={<SingleDogDisplayPage dogList={dogList} />}
            />

            <Route path="/about" element={<About />} />
            <Route path="/tips"></Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
