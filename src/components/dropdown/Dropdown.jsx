import React, { useState, useEffect } from "react";
import "../../Styles/Styles.css";
import { Link } from "react-router-dom";

const Dropdown = ({ stateChange }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    open && stateChange(false);
  }, [open]);
  const close = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="dropdownContainer">
        <ul className="dropdown">
          <li className="list-item" onClick={close}>
            {" "}
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="list-item" onClick={close}>
            {" "}
            <Link to="/search" className="nav-link">
              Search
            </Link>
          </li>
          <li className="list-item" onClick={close}>
            {" "}
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="list-item" onClick={close}>
            <Link to="/tips" className="nav-link">
              Tips
            </Link>
          </li>
          <li className="list-item" onClick={close}>
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
