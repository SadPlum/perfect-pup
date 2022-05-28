import React from "react";
import dogsContact from "../../../icons/dogs-contact.jpg";
import pawIcon from "../../../icons/paw.png";
import { ReactComponent as FacebookIcon } from "../../../icons/facebook-brands.svg";
import { ReactComponent as InstagramIcon } from "../../../icons/instagram-brands.svg";
import { ReactComponent as TwitterIcon } from "../../../icons/twitter-brands.svg";

function Contact() {
  return (
    <main className="contact">
      <section className="contact-banner">
        <img src={dogsContact} alt="picture of dog" className="contact-img" />
        {/* <h2 className="contact-title">Contact us today!</h2> */}
      </section>
      <section className="contact-info">
        <h2 className="contact-info-lg">Contact us today!</h2>
        <div className="contact-groups">
          <div className="contact-info-group">
            <h3 className="contact-info-title">Our address</h3>
            <p className="contact-info-parag">
              123 React Road - Unit 1 <br />
              Fredericton, NB A1A 1A1 <br />
            </p>
            <img src={pawIcon} alt="paw icon" className="paw-icon" />
          </div>
          <div className="contact-info-group">
            <h3 className="contact-info-title">How to reach us</h3>
            <p className="contact-info-parag">
              contact@perfectpup.ca <br />
              P: (506) 123-4567 <br />
              F: (506) 321-7654
            </p>
            <img src={pawIcon} alt="paw icon" className="paw-icon" />
          </div>
          <div className="contact-info-group">
            <h3 className="contact-info-title">Find us online</h3>
            <div className="contact-info-icons">
              <FacebookIcon className="contact-icon" />
              <InstagramIcon className="contact-icon" />
              <TwitterIcon className="contact-icon" />
            </div>
            <img src={pawIcon} alt="paw icon" className="paw-icon" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
