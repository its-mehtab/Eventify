import React from "react";
import BannerSection from "../home/components/banner-section/BannerSection";
import { Link } from "react-router-dom";
import "../bookings/bookings.css";
import StandUpSection from "../home/components/stand-up-section/StandUpSection";
import Button from "../../components/button/Button";

const InterestedEvents = () => {
  return (
    <>
      <BannerSection className="sp-b">
        <div className="row justify-content-center pb-md-4">
          <div className="col-md-11 col-xxl-9">
            <div className="banner-content text-center">
              <div className="common-head">
                <span>Live Entertainment Hub</span>
                <h1>Interested</h1>
              </div>
              <ul className="breadcrumb d-flex justify-content-center text-white">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Interested</li>
              </ul>
            </div>
          </div>
        </div>
      </BannerSection>
      <StandUpSection>
        <div className="common-head">
          <span className="inner-head">Live Lineup</span>
          <h1>Interested Events</h1>
        </div>
        <ul className="bookings-wrap">
          <li>
            <div className="remove">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
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
                  <h3>Voice of Emotions</h3>
                  <p>Netaji Indoor Stadium - 1</p>
                  <p>September 15, 2025</p>
                  <p>7:00 PM - 10:30 PM</p>
                  <p>Artist: Arijit Singh</p>
                  <p>Amount: ₹799</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="remove">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
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
                  <h3>Voice of Emotions</h3>
                  <p>Netaji Indoor Stadium - 1</p>
                  <p>September 15, 2025</p>
                  <p>7:00 PM - 10:30 PM</p>
                  <p>Artist: Arijit Singh</p>
                  <p>Amount: ₹799</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="remove">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
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
                  <h3>Voice of Emotions</h3>
                  <p>Netaji Indoor Stadium - 1</p>
                  <p>September 15, 2025</p>
                  <p>7:00 PM - 10:30 PM</p>
                  <p>Artist: Arijit Singh</p>
                  <p>Amount: ₹799</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="remove">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
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
                  <h3>Voice of Emotions</h3>
                  <p>Netaji Indoor Stadium - 1</p>
                  <p>September 15, 2025</p>
                  <p>7:00 PM - 10:30 PM</p>
                  <p>Artist: Arijit Singh</p>
                  <p>Amount: ₹799</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </StandUpSection>
    </>
  );
};

export default InterestedEvents;
