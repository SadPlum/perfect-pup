import React from "react";
import { Link } from "react-router-dom";

function Button({ to, text }) {
  return (
    <button className="btn">
      <Link to={to} className="">
        {text}
      </Link>
    </button>
  );
}

export default Button;
