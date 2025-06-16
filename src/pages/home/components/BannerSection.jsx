import React from "react";
import Button from "../../../components/button/Button";
// import "../home.css";
import { assets } from "../../../assets/assets";

function BannerSection() {
  return (
    <section className="banner-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-11 col-xxl-9">
            <div className="banner-content text-center">
              <div className="common-head">
                <span>Live Entertainment Hub</span>
                <h1>
                  <img src={assets.animate_icon} alt="" />
                  book your <br />
                  tickets for <span>event</span>
                </h1>
              </div>
              <p className="mt-3 mb-4">
                Experience live entertainment with fast, easy, and secure ticket
                booking.
              </p>
              <div className="d-flex justify-content-center">
                <Button>Grab Your Ticket</Button>
                <Button BtnClass={"btn-white ms-3"}>Join Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="upcoming-event">
        <div className="row">
          <div className="col-md-4">
            <div className="upcoming-event-item">
              <h3>25th DEC</h3>
              <p>22:30 - 07:00</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="upcoming-event-item">
              <h3>22:30 - 07:00</h3>
              <p>135 W, 46nd Street, New York</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="upcoming-event-item d-flex gap-3 align-items-center justify-content-between">
              <div className="">
                <h3>353</h3>
                <p>Attending</p>
              </div>
              <Button>
                <assets.AddPersonIcon />
                Interested
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;
