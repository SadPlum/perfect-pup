import React, { useEffect, useState } from "react";
import pawIcon from "../../icons/paw.png";

function SingleDog({
  name,
  sex,
  id,
  breed,
  age,
  temperament,
  img,
  handleClick,
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "unset");
  });

  return (
    <section className="singleDog">
      <button className="singleDog-close" onClick={handleClick}>
        &#10006;
      </button>
      <article className="singleDog-main">
        <div className="singleDog-img-box">
          <img
            src={img}
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
        {/* <img src={pawIcon} alt="paw icon" className="singleDog-paw-icon" /> */}
        <div className="singleDog-content">
          <article className="singleDog-parag">
            <div className="singleDog-parag-box">
              <span className="singleDog-parag-bold"> Sex:</span>
              <span className="singleDog-parag-text">{`${sex}`}</span>
            </div>
            <div className="singleDog-parag-box">
              <span className="singleDog-parag-bold">Age:</span>
              <span className="singleDog-parag-text">{`${age}`}</span>
            </div>
            <div className="singleDog-parag-box">
              <span className="singleDog-parag-bold">Traits:</span>
              <span className="singleDog-parag-text">{`${temperament}`}</span>
            </div>
          </article>
          <div>
            <button className="singleDog-btn">{`Adopt ${name}`}</button>
          </div>
        </div>
      </article>

      {/* <div className="singleDog-line"></div> */}
    </section>
  );
}

export default SingleDog;
