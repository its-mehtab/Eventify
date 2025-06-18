import React from "react";
import { assets } from "../../../../assets/assets";
import Button from "../../../../components/button/Button";
import "./about-section.css";

const AboutSection = ({ className = "" }) => {
  return (
    <section className={`about-sec sp-b ${className}`}>
      <div className="container">
        <div className={`row align-items-center`}>
          <div className="col-lg-5 col-md-6">
            <div className="about-item">
              <img src={assets.about_img} alt="" />
            </div>
          </div>
          <div className="col-lg-7 col-md-6 mt-4 mt-md-0">
            <div className="about-item">
              <div className="common-head">
                <span className="inner-head">About Us</span>
                <h1>Your Gateway to Live Moments</h1>
              </div>
              <p className="mb-4">
                We aim to redefine how you experience live entertainment.
                Whether it’s a concert, sports match, or stand-up show, our
                platform ensures easy booking, verified tickets, and
                unforgettable memories. With a user-first approach, we focus on
                trust, convenience, and joy—making every event feel more
                personal, more exciting, and truly worth attending from start to
                finish.
              </p>
              <Button>Grab Your Ticket</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
