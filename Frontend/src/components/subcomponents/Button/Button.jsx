import React from "react";
import { Link } from "react-router-dom";

function Button({ to, text }) {
  return (
    <Link className="btn" data-testid="btn" to={to}>
      {text}
    </Link>
  );
}

export default Button;
