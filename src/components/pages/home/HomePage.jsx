import React, { useState, useEffect } from "react";
import Slider from "../../subcomponents/slider/Slider";

import Button from "../../subcomponents/Button/Button";

export default function Home() {
  return (
    <>
      <main className="home-body">
        <section className="home-row slider">
          <Slider />
          <aside className="text-box">
            <h2 className="text-box-title">Welcome, dog-lovers</h2>
            <p className="text-box-parag">
              We are Perfect Pup, a Fredericton based dog adoption service.
              We're here to help dogs of all kinds and background find the
              perfect homes.
            </p>
            <Button to="/search" text="Head to Search Page" />
          </aside>
        </section>
        <section className="home-row"></section>
      </main>
    </>
  );
}
