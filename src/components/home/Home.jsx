import React, { useState, useEffect } from "react";
import Slider from "../slider/Slider";

export default function Home() {
  return (
    <>
      <main className="home-body">
        <section className="slider">
          <Slider />
        </section>
      </main>
    </>
  );
}
