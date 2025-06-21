import React from "react";
import BannerSection from "../pages/home/components/banner-section/BannerSection";

const LoadingSpinner = () => {
  return (
    <BannerSection className="sp-b">
      <div className="row justify-content-center pb-md-4">
        <div className="col-md-11 col-xxl-9">
          <div className="banner-content text-center">
            <div className="common-head">
              <h1>Loading...</h1>
            </div>
          </div>
        </div>
      </div>
    </BannerSection>
  );
};

export default LoadingSpinner;
