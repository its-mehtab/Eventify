import React from "react";
import BannerSection from "../home/components/banner-section/BannerSection";
import StandUpSection from "../home/components/stand-up-section/StandUpSection";
import { Link } from "react-router-dom";
import VerticalCard from "../../components/vertical-card/VerticalCard";

import JSON from "../home/JSON";

const Sports = () => {
  return (
    <>
      <BannerSection className="sp-b">
        <div className="row justify-content-center pb-md-4">
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
                <li>Sports</li>
              </ul>
            </div>
          </div>
        </div>
      </BannerSection>
      <StandUpSection>
        <div className="common-head text-center">
          <span className="inner-head">Our Sports Highlights</span>
          <h1>Play Bold, Live the Action</h1>
          <p>
            Experience thrilling sports moments built to excite, engage, and
            energize every fan.
          </p>
        </div>
        <div className="row">
          {JSON.sports.map((currData) => {
            return (
              <div className="col-md-4" key={currData.id}>
                <VerticalCard currData={currData} />
              </div>
            );
          })}
        </div>
      </StandUpSection>
    </>
  );
};

export default Sports;
