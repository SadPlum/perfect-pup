import React from "react";
import "../../Styles/Styles.css";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <>
      <div className="dropdownContainer">
        <ul className="dropdown">
          <li className="list-item">
            {" "}
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="list-item">
            {" "}
            <Link to="/search" className="nav-link">
              Search
            </Link>
          </li>
          <li className="list-item">
            {" "}
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="list-item">
            <Link to="/tips" className="nav-link">
              Tips
            </Link>
          </li>
          <li className="list-item">
            {" "}
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
