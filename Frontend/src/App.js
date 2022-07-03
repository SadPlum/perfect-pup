import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/core/header/Header";
import HomePage from "./components/pages/home/HomePage";
import AboutPage from "./components/pages/about/AboutPage";
import ContactPage from "./components/pages/contact/ContactPage";
import Footer from "./components/core/footer/Footer";
import SearchPage from "./components/pages/searchPage/SearchPage";
import SingleDogDisplayPage from "./components/pages/singleDogDisplayPage/SingleDogDisplayPage";
import TipsPage from "./components/pages/tips/TipsPage";
import AdminPage from "./components/pages/adminPage/AdminPage";
import AdminCreate from "./components/pages/adminPage/adminPageComponents/AdminCreate";
import AdminUpdate from "./components/pages/adminPage/adminPageComponents/AdminUpdate";
import "./styles/styles.css";

function App() {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  return (
    <div className="container">
      <Header path={path} />
      <div className="wrap">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search/:dogId" element={<SingleDogDisplayPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tips" element={<TipsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/create" element={<AdminCreate />} />
          {/* <Route path="/admin/update" element={<AdminUpdate />} /> */}
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
