import React from "react";
import { Link } from "react-router-dom";

function Tab({ page, path }) {
  // page within page is capitalized in CSS
  return (
    <div className="tab-margin">
      <Link
        to={`/${page}`}
        data-testid={`${page}NavButton`}
        className={path === `/${page}` ? "tab-active tab" : "tab"}
      >
        <span>{page}</span>
      </Link>
    </div>
  );
}

export default Tab;
