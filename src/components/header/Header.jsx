import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Dropdown from "../dropdown/Dropdown";

const Header = () => {
  const [drop, setDrop] = useState(false);
  let location = useLocation();
  const [page, setPage] = useState(location);
  const handleClick = () => {
    setDrop(!drop);
  };

  const buttonRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (buttonRef.current.contains(e.target)) {
        return;
      }
      setDrop(false);
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
        <div className="nav-button" ref={buttonRef}>
          <IconButton onClick={handleClick}>
            <MenuIcon sx={{ color: "#f0ecec" }} />
          </IconButton>
        </div>
        {drop && (
          <div>
            <Dropdown stateChange={setDrop} />
          </div>
        )}

        {/* for tablet and destop */}
        <div className="nav-bar">
          <div className="tab">
            <div
              className={
                location.pathname === "/home" || location.pathname === "/"
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
            <div
              className={location.pathname === "/search" ? "tab-active" : ""}
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
