import React, { useState, useEffect } from "react";
import { ReactComponent as LeftArrow } from "../../icons/arrow-left-solid.svg";
import { ReactComponent as RightArrow } from "../../icons/arrow-right-solid.svg";

const Slider = () => {
  const [slider, setSlider] = useState(0);

  const dogs = [
    "https://cdn2.thedogapi.com/images/MnFVJ4XuT.jpg",
    "https://cdn2.thedogapi.com/images/E_HPfvAnX.jpg",
    "https://cdn2.thedogapi.com/images/Hkxk4ecVX_1280.jpg",
    "https://cdn2.thedogapi.com/images/B1IcfgqE7_1280.jpg",
  ];

  const nextSlide = () => {
    setSlider(slider === 3 ? 0 : slider + 1);
  };

  const previousSlide = () => {
    setSlider(slider === 0 ? 3 : slider - 1);
  };
  return (
    <>
      <section className="slider-body">
        <section className="carousel">
          <button className="button-left" onClick={previousSlide}>
            <div className="slider-button">
              <LeftArrow className="arrow-icon" />
            </div>
          </button>

          <img
            className="dog-image"
            src={dogs[slider]}
            alt="Pictures of Dogs"
          ></img>

          <button className="button-right" onClick={nextSlide}>
            <div className="slider-button">
              <RightArrow className="arrow-icon" />
            </div>
          </button>
        </section>

        <aside className="text-box">
          <h2 className="text-box-title">Lorem, ipsum.</h2>
          <p className="text-box-parag">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            obcaecati possimus veniam corrupti porro consequuntur eaque
            dignissimos, nostrum quisquam sunt?
          </p>
          <button className="random-btn">Random Pup</button>
        </aside>
      </section>
    </>
  );
};

export default Slider;
