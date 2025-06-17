import React from "react";
import "./footer.css";
import AnimatedArrow from "../animated-arrow/AnimatedArrow";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="sp-t">
      <div className="container">
        <div className="common-head">
          <span className="inner-head">Let’s Make Memories Together</span>
          <h4>
            REGISTER <br />
            <div className="d-flex align-items-center gap-4 gap-md-5">
              <span>TODAY</span>
              <a href="#" className="arrow-sign-up">
                <assets.ArrowIcon />
              </a>
            </div>
          </h4>
        </div>
        <div className="footer-main-content">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-item">
                <Link to="/" className="d-block mb-3">
                  <img src={assets.logo_white} alt="" />
                </Link>
                <p>
                  At Eventify, we bring live entertainment to life—book your
                  tickets now and join the excitement.
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
              <div className="footer-item">
                <h5>Top Links</h5>
                <ul>
                  <li>
                    <Link to="/about">About US</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms-and-condition">Terms Of Condition</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
              <div className="footer-item">
                <h5>Book tickets</h5>
                <ul>
                  <li>
                    <Link to="/concert">Concerts</Link>
                  </li>
                  <li>
                    <Link to="/standup">Stand up</Link>
                  </li>
                  <li>
                    <Link to="/sports">Sports</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright-wrap">
            <p>© 2025 Eventify. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
