import React, { useEffect, useState } from "react";
import pawIcon from "../../icons/paw.png";

function SingleDog({ url, temperament, name, breed, sex }) {
  return (
    <section className="singleDog">
      <article className="singleDog-main">
        <div className="singleDog-img-box">
          <img
            src={url}
            className="singleDog-img"
            alt={`Image of ${name} the ${breed}`}
          />
        </div>
      </article>
      <article className="singleDog-info">
        <div className="singleDog-title">
          <h3>{`Hi, my name is ${name}!`}</h3>
          <h4>{`I'm a ${breed}`}</h4>
        </div>
        <img src={pawIcon} alt="paw icon" className="singleDog-paw-icon" />
        <p className="singleDog-parag">
          <span className="singleDog-parag-bold">Sex: </span>
          {`${sex}`} <br />
          <span className="singleDog-parag-bold">Traits: </span>
          {`${temperament}`} <br />
        </p>

        <button className="singleDog-btn">{`Adopt ${name}`}</button>
      </article>
      <div className="singleDog-line"></div>
    </section>
  );
}

export default SingleDog;
