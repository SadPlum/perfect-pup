import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";

const Slider = () => {
  const [dogs, setDogs] = useState(null);
  let found = false;
  const [slider, setSlider] = useState(0);

  useEffect(async () => {
    let images = [];
    let res = await fetch(
      "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=5",
      { method: "GET", headers: { "Content-Type": "application/json" } }
    );
    res = await res.json();
    res.forEach((obj) => images.push(obj.url));
    console.log(images);
    found = true;
    setDogs(images);
  }, []);

  const useStyles = makeStyles({
    main: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      width: "90%",
      margin: "auto",
      height: 480,
    },
    dogImage: {
      height: 480,
      width: 640,
    },
    textBox: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      height: 480,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonLeft: {
      position: "absolute",
      top: "214px",
      height: "26px",
      width: "26px",
      left: "15px",
      color: "black",
      backgroundColor: "rgba(255, 255, 255, 0.6)",
      "&:focus": {
        background: "rgba(0, 0, 0, 0.54)",
      },
    },
    buttonRight: {
      position: "absolute",
      height: "26px",
      width: "26px",
      left: "599px",
      top: "214px",
      "&:focus": {
        background: "rgba(0, 0, 0, 0.54)",
      },
    },
  });

  const styles = useStyles();

  const nextSlide = () => {
    setSlider(slider === 4 ? 0 : slider + 1);
  };

  const previousSlide = () => {
    setSlider(slider === 0 ? 4 : slider - 1);
  };
  return (
    <>
      <section className={styles.main}>
        <div style={{ height: 480 }}>
          {/* no dogs, or cant be found */}
          {!dogs && (
            <p>The puppies are lost in cyber-space, please try refreshing!</p>
          )}
          {/* dogs found from api */}
          {dogs && (
            <section className={styles.carousel}>
              <IconButton
                className={styles.buttonLeft}
                onClick={previousSlide}
                sx={{ position: "absolute" }}
              >
                <ArrowBackIosIcon sx={{ color: "black" }} />
              </IconButton>

              <img
                className={styles.dogImage}
                src={dogs[slider]}
                alt="Pictures of Dogs"
              ></img>

              <IconButton
                className={styles.buttonRight}
                onClick={nextSlide}
                sx={{ position: "absolute" }}
              >
                <ArrowForwardIosIcon sx={{ color: "black" }} />
              </IconButton>
            </section>
          )}
        </div>

        <aside className={styles.textBox}>
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
