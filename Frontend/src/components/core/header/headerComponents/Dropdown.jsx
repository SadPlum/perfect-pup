import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ stateChange }) => {
  // adds event listener when opened, removes when closed
  // sets headers dropDown state to false when anywhere on screen is clicked
  useEffect(() => {
    const clickEvent = (e) => {
      stateChange(false);
    };
    document.body.addEventListener("click", clickEvent);
    return () => {
      document.body.removeEventListener("click", clickEvent);
    };
  }, [stateChange]);

  return (
    <>
      <div className="dropdownContainer">
        <ul className="dropdown">
          <li className="list-item" onClick={() => stateChange(false)}>
            <Link to="/" className="nav-link-tab">
              Home
            </Link>
          </li>
          <li className="list-item" onClick={() => stateChange(false)}>
            <Link to="/search" className="nav-link-tab">
              Search
            </Link>
          </li>
          <li className="list-item" onClick={() => stateChange(false)}>
            <Link to="/about" className="nav-link-tab">
              About
            </Link>
          </li>
          <li className="list-item" onClick={() => stateChange(false)}>
            <Link to="/tips" className="nav-link-tab">
              Tips
            </Link>
          </li>
          <li className="list-item" onClick={() => stateChange(false)}>
            <Link to="/contact" className="nav-link-tab">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
