import React from "react";
import pawIcon from "../../icons/paw.png";

function dogDisplay({ url, name, sex }) {
  return (
    <article className="dogDisplay">
      <div className="dogDisplay-head">
        <h3 className="dogDisplay-title">{`${name}, ${sex}`}</h3>
      </div>
      <div className="dogDisplay-content">
        <img src={url} alt="" className="dogDisplay-img" />
        <button>{`Learn about ${name}`}</button>
      </div>
    </article>
  );
}

export default dogDisplay;
