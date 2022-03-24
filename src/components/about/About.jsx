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
            In early 2021 we started Perfect Pup as a way to connect furry
            friends looking for new homes and people with the space to take them
            in. We are a animal rescue, non-profit located right in the heart of
            NB. Our team is made up of dedicated dogs lovers and a few generous
            volunteers.
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
