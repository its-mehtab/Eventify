import React from "react";
import BannerSection from "../home/components/banner-section/BannerSection";
import { Link } from "react-router-dom";
import StandUpSection from "../home/components/stand-up-section/StandUpSection";
import { assets } from "../../assets/assets";
import "./contact-us.css";
import ContactForm from "../../components/contact-form/ContactForm";

const ContactUs = () => {
  return (
    <>
      <BannerSection className="sp-b">
        <div className="row justify-content-center pb-md-4">
          <div className="col-md-11 col-xxl-9">
            <div className="banner-content text-center">
              <div className="common-head">
                <span>Live Entertainment Hub</span>
                <h1>Contact us</h1>
              </div>
              <ul className="breadcrumb d-flex justify-content-center text-white">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
        </div>
      </BannerSection>
      <StandUpSection>
        <div className="common-head text-center">
          <span className="inner-head">Live Lineup</span>
          <h2>Your Gateway to Live Moments</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="contact-details-item">
              <assets.EmailIcon color="#fff" />
              <div>
                <h3>our email</h3>
                <p>eventify@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-details-item">
              <assets.PhoneIcon color="#fff" />
              <div>
                <h3>CALL/MESSAGE</h3>
                <p>+1 123 456 7890</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-details-item">
              <assets.LocationIcon color="#fff" />
              <div>
                <h3>OUR LOCATION</h3>
                <p>1800 Abbot Kinney</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 pt-4 align-items-center">
          <div className="col-md-6">
            <div className="contact-item">
              <img src={assets.ContactImg} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-item">
              <ContactForm />
            </div>
          </div>
        </div>
      </StandUpSection>
    </>
  );
};

export default ContactUs;
