import React from "react";
import { assets } from "../../../assets/assets";

const FeaturesSection = () => {
  return (
    <section className="features-sec sp-tb">
      <div className="container">
        <div className="common-head text-center">
          <span className="inner-head">Our Highlights</span>
          <h1>Made for Moments</h1>
          <p className="mt-3">
            Every feature is made for you—join now and start booking live
            entertainment instantly.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 col-xl-3 d-flex align-items-stretch">
            <div className="features-item">
              <assets.FeaturesIcon1 />
              <h4>Easy Booking</h4>
              <p>
                Book tickets quickly with our smooth interface, making your
                event journey simple and stress-free from the start.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 d-flex align-items-stretch">
            <div className="features-item">
              <assets.FeaturesIcon2 />
              <h4>Secure Payments</h4>
              <p>
                Enjoy peace of mind knowing your payment information is
                encrypted, secure, and protected with the latest industry
                standards.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 d-flex align-items-stretch">
            <div className="features-item">
              <assets.FeaturesIcon3 />
              <h4>Instant Tickets</h4>
              <p>
                Get your tickets instantly via email or SMS after payment—no
                waiting, no printing, just convenience and speed.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 d-flex align-items-stretch">
            <div className="features-item">
              <assets.FeaturesIcon4 />
              <h4>Event Variety</h4>
              <p>
                Explore concerts, comedy shows, sports events, and more—your
                one-stop platform for every kind of live entertainment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
