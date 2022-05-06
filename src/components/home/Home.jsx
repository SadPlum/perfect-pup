import React, { useState, useEffect } from "react";
import Slider from "../slider/Slider";
import { Link } from "react-router-dom";
import dogImg0 from "../../data/dog0.jpg";
import pawIcon from "../../icons/paw.png";

export default function Home() {
  return (
    <>
      <main className="home-body">
        <section className="slider">
          <Slider />
        </section>
        <section className="home-content">
          <img src={dogImg0} alt="" className="home-img" />
          <article className="home-article">
            <h2 className="home-title">
              Interested in our story? Learn how we started out!
            </h2>
            <p className="home-parag">
              Starting out as a few friends, an idea, passion for dogs and
              helping those in need.
            </p>
            <Link to="/about">
              <button className="home-btn">About Us</button>
            </Link>
            <img src={pawIcon} className="home-paw"></img>
          </article>
          <article className="home-article">
            <h2 className="home-title">Want to donate or volunteer?</h2>
            <p className="home-parag">
              As we are a non-profit organization, we really on the support of
              our community. If you're a dog lover and and to learn how to
              contribute, send us a message!
            </p>
            <Link to="/contact">
              <button className="home-btn">Contact</button>
            </Link>
            <img src={pawIcon} className="home-paw"></img>
          </article>
        </section>
      </main>
    </>
  );
}
