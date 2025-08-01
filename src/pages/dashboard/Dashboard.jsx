import React from "react";
import BannerSection from "../home/components/banner-section/BannerSection";
import Button from "../../components/button/Button";

const Dashboard = () => {
  return (
    <BannerSection>
      <div className="row justify-content-center">
        <div className="col-md-11 col-xxl-9">
          <div className="banner-content text-center">
            <div className="common-head">
              <span>Live Entertainment Hub</span>
              <h1>
                <h1>Welcome {user.name}</h1>
              </h1>
            </div>
            <p className="mt-3">
              Experience live entertainment with fast, easy, and secure ticket
              booking.
            </p>
            <div className="d-flex justify-content-center flex-wrap">
              <Button btnClass="mt-4">Grab Your Ticket</Button>
              <Button href="/register" btnClass={"btn-white ms-3  mt-4"}>
                Join Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </BannerSection>
  );
};

export default Dashboard;
