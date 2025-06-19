import React from "react";
import StandUpSection from "../home/components/stand-up-section/StandUpSection";
import BannerSection from "../home/components/banner-section/BannerSection";
import { Link } from "react-router-dom";
import VerticalCard from "../../components/vertical-card/VerticalCard";

import JSON from "../home/JSON";

const StandUp = ({ eventData }) => {
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
                <li>Stand up</li>
              </ul>
            </div>
          </div>
        </div>
      </BannerSection>
      <StandUpSection>
        <div className="common-head text-center">
          <span className="inner-head">Comedy Nights</span>
          <h1>Laugh Loud at Live Shows</h1>
          <p>
            Catch the funniest comedians live on stage for unforgettable,
            laugh-out-loud moments and great vibes.
          </p>
        </div>
        <div className="row">
          {eventData.map((currData) => {
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

export default StandUp;
