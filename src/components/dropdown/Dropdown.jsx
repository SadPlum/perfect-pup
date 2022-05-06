import React, { useState, useEffect } from "react";

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
            <Link to="/" className="nav-link-tab">
              Home
            </Link>
          </li>
          <li className="list-item" onClick={close}>
            {" "}
            <Link to="/search" className="nav-link-tab">
              Search
            </Link>
          </li>
          <li className="list-item" onClick={close}>
            {" "}
            <Link to="/about" className="nav-link-tab">
              About
            </Link>
          </li>
          <li className="list-item" onClick={close}>
            <Link to="/tips" className="nav-link-tab">
              Tips
            </Link>
          </li>
          <li className="list-item" onClick={close}>
            {" "}
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
