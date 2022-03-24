import React from "react";
import { ReactComponent as FacebookIcon } from "../../icons/facebook-brands.svg";
import { ReactComponent as InstagramIcon } from "../../icons/instagram-brands.svg";
import { ReactComponent as TwitterIcon } from "../../icons/twitter-brands.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-group">
          <section className="footer-info">
            <h2 className="footer-title">Perfect Pup</h2>
            <p className="footer-contact">
              123 React Road - Unit 1 <br />
              Fredericton, NB A1A 1A1 <br />
              (506) 123-4567
            </p>
          </section>
        </div>
        <div className="footer-group">
          <section className="social">
            <FacebookIcon className="footer-icon" />
            <InstagramIcon className="footer-icon" />
            <TwitterIcon className="footer-icon" />
          </section>
        </div>
        <div className="footer-group">
          <section className="footer-links">
            <Link to="/" className="footer-link-a">
              Home
            </Link>
            <Link to="/search" className="footer-link-a">
              Search
            </Link>
            <Link to="/about" className="footer-link-a">
              About
            </Link>
            <Link to="/tips" className="footer-link-a">
              Tips
            </Link>
            <Link to="/contact" className="footer-link-a">
              Contact
            </Link>
          </section>
        </div>
      </div>
      <section className="author">
        <p className="footer-text">A React App by Sebastien Legault </p>
        <a href="https://github.com/SadPlum" className="footer-github">
          github.com/SadPlum
        </a>
      </section>
    </footer>
  );
}

export default Footer;
