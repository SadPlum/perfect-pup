import React, { useEffect, useState } from "react";

import pawIcon from "../../../icons/paw.png";

import Button from "../Button/Button";

function DogDisplay({ id, name, sex, breed, age, temperament, image }) {
  const imageIndex = image.indexOf("/dogImages");
  const imageUrl = "http://perfectpup.xyz/" + image.slice(imageIndex);

  return (
    <>
      <article className=" dogListings">
        <div className="dogDisplay">
          <div className="dogDisplay-head">
            <h3 className="dogDisplay-title">{`${name}, ${sex}`}</h3>
          </div>
          <div className="dogDisplay-content">
            <img src={imageUrl} alt="" className="dogDisplay-img" />
            <Button
              to={{ pathname: `/search/${id}` }}
              text={`Learn about ${name}`}
            />
          </div>
          <img src={pawIcon} alt="paw icon" className="dogDisplay-paw-icon" />
        </div>
      </article>
    </>
  );
}

export default DogDisplay;
