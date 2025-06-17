import React from "react";
import BannerSection from "../home/components/banner-section/BannerSection";
import AboutSection from "../home/components/about-section/AboutSection";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <BannerSection className="sp-b">
        <div className="row justify-content-center pb-md-4">
          <div className="col-md-11 col-xxl-9">
            <div className="banner-content text-center">
              <div className="common-head">
                <span>Live Entertainment Hub</span>
                <h1>About us</h1>
              </div>
              <ul className="breadcrumb d-flex justify-content-center text-white">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>About us</li>
              </ul>
            </div>
          </div>
        </div>
      </BannerSection>
      <AboutSection className="sp-t" />
    </>
  );
};

export default AboutUs;
