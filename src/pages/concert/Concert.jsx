import React from "react";
import { Link } from "react-router-dom";
import BannerSection from "../home/components/banner-section/BannerSection";

const Concert = () => {
  return (
    <>
      <BannerSection>
        <div className="row justify-content-center">
          <div className="col-md-11 col-xxl-9">
            <div className="banner-content text-center">
              <div className="common-head">
                <span>Live Entertainment Hub</span>
                <h1>Buy Ticket</h1>
              </div>
              <ul className="breadcrumb d-flex justify-content-center text-white">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">concerts</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </BannerSection>
    </>
  );
};

export default Concert;
