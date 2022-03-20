import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";

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
        <div style={{ height: 480 }}>
          <section className="carousel">
            <IconButton
              className="button-left"
              onClick={previousSlide}
              sx={{ position: "absolute" }}
            >
              <ArrowBackIosIcon sx={{ color: "black" }} />
            </IconButton>

            <img
              className="dog-image"
              src={dogs[slider]}
              alt="Pictures of Dogs"
            ></img>

            <IconButton
              className="button-right"
              onClick={nextSlide}
              sx={{ position: "absolute" }}
            >
              <ArrowForwardIosIcon sx={{ color: "black" }} />
            </IconButton>
          </section>
        </div>

        <aside className="text-box">
          <h2>Lorem, ipsum.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            obcaecati possimus veniam corrupti porro consequuntur eaque
            dignissimos, nostrum quisquam sunt?
          </p>
          <button>Random Pup</button>
        </aside>
      </section>
    </>
  );
};

export default Slider;
