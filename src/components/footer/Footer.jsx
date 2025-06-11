import React from "react";
import "./footer.css";
import AnimatedArrow from "../animated-arrow/AnimatedArrow";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <footer className="sp-t">
      <div className="container">
        <div className="common-head">
          <span className="inner-head">
            Let’s Create Something Amazing Together
          </span>
          <h4>
            REGISTER <br />
            <div className="d-flex align-items-center gap-5">
              <span>TODAY</span>
              <a href="#" className="arrow-sign-up">
                <svg
                  width="90"
                  height="90"
                  viewBox="0 0 90 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.25 63.75L63.75 26.25M63.75 26.25L26.25 26.25M63.75 26.25V63.75"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              {/* <AnimatedArrow /> */}
            </div>
          </h4>
        </div>
        <div className="footer-main-content">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-item">
                <a href="#" className="d-block mb-3">
                  <img src={assets.logo_white} alt="" />
                </a>
                <p>
                  At Eventify, we're committed then delivering excellence,
                  innovations, an value in everything we are do.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-item">
                <h5>Top Links</h5>
                <ul>
                  <li>
                    <a href="#">About US</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms Of Condition</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-item">
                <h5>Book tickets</h5>
                <ul>
                  <li>
                    <a href="#">Events</a>
                  </li>
                  <li>
                    <a href="#">Stand up</a>
                  </li>
                  <li>
                    <a href="#">Sports</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright-wrap">
            <p>© Copyright 2025 Nexus. All Right Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
