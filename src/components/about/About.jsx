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
              <h4 className="about-sub-title">Trust</h4>
              <p className="about-sub-description">
                Many of our dogs are rescues, and have trust issues. So we
                create a bond of trust with them. This ensures they are
                comfortable with us and their future homes.
              </p>
              <img src={pawIcon} alt="paw icon" className="paw-icon" />
            </article>
            <article className="about-sub">
              <h4 className="about-sub-title">Patience</h4>
              <p className="about-sub-description">
                Not all dogs are the same. Much like humans, some dogs require
                more attention and have different needs. We must treat them with
                love, patience and understanding.
              </p>
              <img src={pawIcon} alt="paw icon" className="paw-icon" />
            </article>
            <article className="about-sub">
              <h4 className="about-sub-title">Care</h4>
              <p className="about-sub-description">
                Without us, our volunteers the adoptees, these dogs wouldn't be
                able to be here. So we ensure they have the care they need and
                deserve.
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
