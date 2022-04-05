import React, { useState } from "react";
import pawIcon from "../../icons/paw.png";
import { Link } from "react-router-dom";
import SingleDog from "../singleDog/SingleDog";

function DogDisplay({ name, sex, id, breed, age, temperament, img }) {
  return (
    <>
      <article className="dogDisplay">
        <div className="dogDisplay-head">
          <h3 className="dogDisplay-title">{`${name}, ${sex}`}</h3>
        </div>
        <div className="dogDisplay-content">
          <img src={img} alt="" className="dogDisplay-img" />
          <button className="dogDisplay-learn-btn">{`Learn about ${name}`}</button>
        </div>
        <img src={pawIcon} alt="paw icon" className="dogDisplay-paw-icon" />
      </article>
    </>
  );
}

export default DogDisplay;
