import React, { useState } from "react";
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/core/header/Header";
import HomePage from "./components/pages/home/HomePage";
import AboutPage from "./components/pages/about/AboutPage";
import ContactPage from "./components/pages/contact/ContactPage";
import Footer from "./components/core/footer/Footer";
import SearchPage from "./components/pages/searchPage/SearchPage";
import SingleDogDisplayPage from "./components/pages/singleDogDisplayPage/SingleDogDisplayPage";
import TipsPage from "./components/pages/tips/TipsPage";
import "./styles/styles.css";

function App() {
  // store persisting dogList Data
  const [dogList, setDogList] = useState();

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="wrap">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route
              path="/search"
              element={<SearchPage dogList={dogList} setDogList={setDogList} />}
            />
            <Route
              path="/search/:dogId"
              element={<SingleDogDisplayPage dogList={dogList} />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/tips" element={<TipsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/*" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
