import React from "react";
import Slider from "../../subcomponents/slider/Slider";

import Button from "../../subcomponents/Button/Button";
import pawIcon from "../../../icons/paw.png";

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
        <img src={pawIcon} alt="paw icon" className="paw-icon-home" />
        <section className="home-row home-contact-information">
          <aside className="text-box">
            <h2 className="text-box-title">
              Interested in helping, or visitng our pups?
            </h2>
            <p className="text-box-parag">
              To volunteer, schedule a tour or to donate, visit our contact
              page.
            </p>
            <Button to="/contact" text="Head to Contact Page" />
          </aside>
        </section>
      </main>
    </>
  );
}
