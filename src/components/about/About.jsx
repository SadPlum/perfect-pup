import React from "react";
import dogsImg from "../../icons/dogs.jpg";
import pawIcon from "../../icons/paw.png";

function About() {
  return (
    <div className="about">
      <img src={dogsImg} alt="Pictures of puppies" className="large-dog-img" />
      <section className="about-section">
        <article className="about-main">
          <h3 className="about-title">Who we are</h3>
          <p className="about-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eum
            officiis voluptatem laudantium eaque quisquam vel repudiandae
            temporibus pariatur quam. Distinctio, quis commodi nihil ipsum
            inventore sed quibusdam doloribus minima?
          </p>
          <img src={pawIcon} alt="paw icon" className="paw-icon" />
        </article>
        <div className="about-points">
          <h4 className="about-value-title">Values</h4>
          <div className="about-values">
            <article className="about-sub">
              <h4 className="about-sub-title">Lorem</h4>
              <p className="about-sub-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, ullam.
              </p>
              <img src={pawIcon} alt="paw icon" className="paw-icon" />
            </article>
            <article className="about-sub">
              <h4 className="about-sub-title">Lorem</h4>
              <p className="about-sub-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                eaque!
              </p>
              <img src={pawIcon} alt="paw icon" className="paw-icon" />
            </article>
            <article className="about-sub">
              <h4 className="about-sub-title">Lorem</h4>
              <p className="about-sub-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                laboriosam?
              </p>
              <img src={pawIcon} alt="paw icon" className="paw-icon" />
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
