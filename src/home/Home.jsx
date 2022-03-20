import React, { useState, useEffect } from "react";
import Slider from "../slider/Slider";
import { makeStyles } from "@mui/styles";

export default function Home() {
  const useStyles = makeStyles({
    body: {
      height: "100%",
      // backgroundColor: "#F8DDA4",
    },
  });

  const styles = useStyles();
  return (
    <>
      <main className={styles.body}>
        <Slider />
      </main>
    </>
  );
}
