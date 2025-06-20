import React from "react";
import BannerSection from "../home/components/banner-section/BannerSection";
import { Link } from "react-router-dom";
import StandUpSection from "../home/components/stand-up-section/StandUpSection";

const TermsAndConditions = () => {
  return (
    <>
      <BannerSection className="sp-b">
        <div className="row justify-content-center pb-md-4">
          <div className="col-md-11 col-xxl-9">
            <div className="banner-content text-center">
              <div className="common-head">
                <span>Live Entertainment Hub</span>
                <h1>Terms & Conditions</h1>
              </div>
              <ul className="breadcrumb d-flex justify-content-center text-white">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </BannerSection>
      <StandUpSection>
        <h3>1. Introduction</h3>
        <p>
          These Terms & Conditions govern your use of our event booking
          platform. By accessing or using our website, you agree to be bound by
          these terms. If you disagree with any part of the terms, please do not
          use our service.
        </p>

        <h3>2. Event Booking</h3>
        <p>
          All event bookings made through our platform are subject to
          availability and confirmation by the event organizer. We are not
          responsible for any changes, cancellations, or rescheduling of events
          by third-party hosts.
        </p>

        <h3>3. Payments</h3>
        <p>
          Payments must be made in full at the time of booking. All prices are
          listed in INR and include applicable taxes unless otherwise stated.
        </p>

        <h3>4. Cancellation and Refunds</h3>
        <p>
          Cancellations are subject to the policy of each individual event.
          Please refer to the event's refund policy before booking. In general,
          tickets are non-refundable unless the event is cancelled.
        </p>

        <h3>5. Intellectual Property</h3>
        <p>
          All content on this site, including text, images, logos, and branding,
          is the intellectual property of our company or licensors. Unauthorized
          use is strictly prohibited.
        </p>

        <h3>6. Limitation of Liability</h3>
        <p>
          We are not liable for any loss, injury, or damage incurred from
          attending an event or using our website. Our responsibility is limited
          to the services we provide directly.
        </p>

        <h3>7. Changes to Terms</h3>
        <p>
          We reserve the right to update these terms at any time. Continued use
          of our services following any updates will constitute acceptance of
          the new terms.
        </p>
      </StandUpSection>
    </>
  );
};

export default TermsAndConditions;
