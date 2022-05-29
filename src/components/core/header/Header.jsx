import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Dropdown from "./headerComponents/dropdown/Dropdown";

const Header = () => {
  let location = useLocation();
  // location for tab highlight
  const [page, setPage] = useState(location);
  // dropdown and handleClick for dropdown on smaller screens
  const [dropDown, setDropDown] = useState(false);
  const handleClick = () => {
    setDropDown(!dropDown);
  };

  // button reference to turn off dropdown when clicking on page
  const dropdownButtonRef = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (dropdownButtonRef.current.contains(e.target)) {
        return;
      }
      setDropDown(false);
    });
  }, [page]);

  const tags = [`Home`, `Search`, `About`, `Tips`, `Contact`];

  return (
    <header className="header">
      <summary className="title-box">
        <h1 className="">Perfect Pup</h1>
        <h6 className="">Find your new best friend</h6>
      </summary>

      <nav className="nav">
        {/* for mobile */}
        <div className="nav-button" ref={dropdownButtonRef}>
          <IconButton onClick={handleClick}>
            <MenuIcon sx={{ color: "#f0ecec" }} />
          </IconButton>
        </div>
        {dropDown && (
          <div className="dropdown">
            <Dropdown stateChange={setDropDown} style={{ zIndex: "1000" }} />
          </div>
        )}

        {/* for tablet and destop */}
        <div className="nav-bar">
          <div className="tab">
            <div
              className={
                location.pathname === "/home" ||
                location.pathname === "/perfect-pup" ||
                location.pathname === "/"
                  ? "tab-active"
                  : ""
              }
            >
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </div>
          </div>
          <div className="tab">
            {/* Trim pathname down to /search if on specific dog page */}
            <div
              className={
                location.pathname.slice(0, 7) === "/search" ? "tab-active" : ""
              }
            >
              <Link to="/search" className="nav-link">
                Search
              </Link>
            </div>
          </div>
          <div className="tab">
            <div className={location.pathname === "/about" ? "tab-active" : ""}>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </div>
          </div>
          <div className="tab">
            <div className={location.pathname === "/tips" ? "tab-active" : ""}>
              <Link to="/tips" className="nav-link">
                Tips
              </Link>
            </div>
          </div>
          <div className="tab">
            <div
              className={location.pathname === "/contact" ? "tab-active" : ""}
            >
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
