import React from "react";

import pawIcon from "../../../icons/paw.png";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function DogDisplay({ key, id, name, sex, breed, age, temperament, img }) {
  return (
    <>
      <article className="dogDisplay">
        <div className="dogDisplay-head">
          <h3 className="dogDisplay-title">{`${name}, ${sex}`}</h3>
        </div>
        <div className="dogDisplay-content">
          <img src={img} alt="" className="dogDisplay-img" />
          <Button
            to={{ pathname: `/search/${id}` }}
            text={`Learn about ${name}`}
          />
        </div>
        <img src={pawIcon} alt="paw icon" className="dogDisplay-paw-icon" />
      </article>
    </>
  );
}

export default DogDisplay;
