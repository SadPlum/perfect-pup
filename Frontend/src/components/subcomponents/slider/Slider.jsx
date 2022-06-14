import React, { useState, useEffect } from "react";
import { ReactComponent as LeftArrow } from "../../../icons/arrow-left-solid.svg";
import { ReactComponent as RightArrow } from "../../../icons/arrow-right-solid.svg";

import SliderButton from "./sliderComponents/SliderButton";

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

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, [slider]);

  return (
    <>
      <section className="slider-body">
        <section className="carousel">
          <SliderButton
            side="left"
            onClick={previousSlide}
            icon={<LeftArrow className="arrow-icon" />}
          />

          <img
            className="dog-image"
            src={dogs[slider]}
            alt="Pictures of Dogs"
          ></img>

          <SliderButton
            side="right"
            onClick={nextSlide}
            icon={<RightArrow className="arrow-icon" />}
          />
        </section>
      </section>
    </>
  );
};

export default Slider;
