import React from "react";
import BannerSection from "../home/components/banner-section/BannerSection";
import { Link, useLocation } from "react-router-dom";
import StatusAnimation from "./StatusAnimation";

const ThankYou = () => {
  const { state } = useLocation();
  const isSuccess = state?.isSuccess;

  return (
    <BannerSection className="sp-b pt-5">
      <div className="row justify-content-center pb-md-4 pt-5 mt-4">
        <div className="col-md-11 col-xxl-9">
          <div className="banner-content text-center">
            <div className="common-head">
              <StatusAnimation isSuccess={isSuccess} />
              <h1>{isSuccess ? "Thank You" : "Something Went Wrong"}</h1>
            </div>
            <p className="fs-4 mt-3">
              {isSuccess
                ? `Your Order Id: ${state.newOrder.orderId}`
                : "Please try again!"}
            </p>
            <p className="fs-4 mt-3">
              If you have questions or queries feel free to{" "}
              <Link to="/contact" className="text-white underline">
                contact us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </BannerSection>
  );
};

export default ThankYou;
