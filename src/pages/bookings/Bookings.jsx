import React from "react";
import BannerSection from "../home/components/banner-section/BannerSection";
import { Link } from "react-router-dom";
import StandUpSection from "../home/components/stand-up-section/StandUpSection";
import "./bookings.css";
import Button from "../../components/button/Button";

const Bookings = () => {
  return (
    <>
      <BannerSection className="sp-b">
        <div className="row justify-content-center pb-md-4">
          <div className="col-md-11 col-xxl-9">
            <div className="banner-content text-center">
              <div className="common-head">
                <span>Live Entertainment Hub</span>
                <h1>Bookings</h1>
              </div>
              <ul className="breadcrumb d-flex justify-content-center text-white">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Bookings</li>
              </ul>
            </div>
          </div>
        </div>
      </BannerSection>
      <StandUpSection>
        <div className="common-head">
          <span className="inner-head">Live Lineup</span>
          <h1>Recent Bookings</h1>
        </div>
        <ul className="bookings-wrap">
          <li>
            <div className="row">
              <div className="col-md-5">
                <div className="booking-item">
                  <div className="booking-img-wrap">
                    <img
                      src="/src/assets/concert/arijit.jpg"
                      alt=""
                      width="100%"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="booking-item pt-3">
                  <div className="row">
                    <div className="col-sm-6">
                      <h3>Voice of Emotions</h3>
                      <p>Netaji Indoor Stadium - 1</p>
                      <p>September 15, 2025</p>
                      <p>7:00 PM - 10:30 PM</p>
                    </div>
                    <div className="col-sm-6 text-sm-end mt-3 mt-sm-0">
                      <div className="common-head">
                        <span className="inner-head mb-2">Fully Paid</span>
                      </div>
                      <p>Invoice No: 7863478236</p>
                      <p>Amount: ₹799</p>
                      <p>Guests: 1</p>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap">
                    <Button btnClass="mt-4">Download</Button>
                    <Button btnClass={"btn-white ms-3  mt-4"}>Cancel</Button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </StandUpSection>
    </>
  );
};

export default Bookings;
