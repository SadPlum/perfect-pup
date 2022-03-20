import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import "../../Styles/Styles.css";
import Dropdown from "../dropdown/Dropdown";

const Header = () => {
  const [drop, setDrop] = useState(false);

  const handleClick = () => {
    setDrop(!drop);
  };

  const [active, setActive] = useState(0);
  const handleTab = (i) => {
    setActive(i);
  };
  const dropdownRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (dropdownRef.current.contains(e.target)) {
        return;
      } else if (buttonRef.current.contains(e.target)) {
        return;
      }
      setDrop(false);
    });
  }, []);

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
            <MenuIcon />
          </IconButton>
        </div>
        <div ref={dropdownRef}>
          {drop && <Dropdown stateChange={setDrop} />}
        </div>

        {/* for tablet and destop */}
        <div className="nav-bar">
          <div className="tab">
            <div className={active === 0 ? "tab-active" : ""}>
              <Link
                to="/home"
                className="nav-link"
                onClick={() => {
                  handleTab(0);
                }}
              >
                Home
              </Link>
            </div>
          </div>
          <div className="tab">
            <div className={active === 1 ? "tab-active" : ""}>
              <Link
                to="/search"
                className="nav-link"
                onClick={() => {
                  handleTab(1);
                }}
              >
                Search
              </Link>
            </div>
          </div>
          <div className="tab">
            <div className={active === 2 ? "tab-active" : ""}>
              <Link
                to="/about"
                className="nav-link"
                onClick={() => {
                  handleTab(2);
                }}
              >
                About
              </Link>
            </div>
          </div>
          <div className="tab">
            <div className={active === 3 ? "tab-active" : ""}>
              <Link
                to="/tips"
                className="nav-link"
                onClick={() => {
                  handleTab(3);
                }}
              >
                Tips
              </Link>
            </div>
          </div>
          <div className="tab">
            <div className={active === 4 ? "tab-active" : ""}>
              <Link
                to="/contact"
                className="nav-link"
                onClick={() => {
                  handleTab(4);
                }}
              >
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
