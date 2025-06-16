import React from "react";
import { assets } from "../../../assets/assets";
import Button from "../../../components/button/Button";

const AboutSection = () => {
  return (
    <section className="about-sec sp-tb">
      <div className="container">
        <div className="row align-items-center pt-5">
          <div className="col-md-5">
            <div className="about-item">
              <img src={assets.about_img} alt="" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="about-item">
              <div className="common-head">
                <span className="inner-head">Our Highlights</span>
                <h1>Made for Moments</h1>
              </div>
              <p className="mb-4">
                Discover events that inspire, educated, and connect. From
                engaging webinars the dynamic live and conferences, our events
                are carefully. Discover events that inspire, educated, and
                connect. From engaging webinars the dynamic live and
                conferences, our events are carefully.
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
