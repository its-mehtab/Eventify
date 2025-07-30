import React from "react";
import BannerSection from "../home/components/banner-section/BannerSection";
import { Link } from "react-router-dom";
import StandUpSection from "../home/components/stand-up-section/StandUpSection";

const PrivacyPolicy = () => {
  return (
    <>
      <BannerSection className="sp-b">
        <div className="row justify-content-center pb-md-4">
          <div className="col-md-11 col-xxl-9">
            <div className="banner-content text-center">
              <div className="common-head">
                <span>Live Entertainment Hub</span>
                <h1>Privacy Policy</h1>
              </div>
              <ul className="breadcrumb d-flex justify-content-center text-white">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </BannerSection>
      <StandUpSection>
        <div className="main-content">
          <h3>1. Introduction</h3>
          <p>
            We respect your privacy and are committed to protecting your
            personal information. This policy outlines how we collect, use, and
            safeguard your data.
          </p>

          <h3>2. Information We Collect</h3>
          <ul>
            <li>Personal identification info (name, email, phone, etc.)</li>
            <li>Payment and billing details</li>
            <li>Event preferences and activity on our site</li>
          </ul>

          <h3>3. How We Use Your Information</h3>
          <ul>
            <li>To confirm bookings and send you tickets</li>
            <li>To provide customer support</li>
            <li>To improve our services and user experience</li>
            <li>To send promotional emails (only if you opt-in)</li>
          </ul>

          <h3>4. Data Sharing</h3>
          <p>
            We do not sell your personal information. We may share it with
            trusted service providers only for the purpose of operating our
            platform and fulfilling your requests.
          </p>

          <h3>5. Security</h3>
          <p>
            We implement industry-standard security measures to protect your
            data. However, no method of transmission over the internet is 100%
            secure.
          </p>

          <h3>6. Cookies</h3>
          <p>
            We use cookies to enhance your experience. You may choose to disable
            cookies via your browser settings, but some features may not
            function properly.
          </p>

          <h3>7. Your Rights</h3>
          <p>
            You have the right to access, correct, or delete your personal
            information. To make a request, contact us at example@eventify.com.
          </p>

          <h3>8. Changes to Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. We encourage
            you to review it regularly to stay informed about how we protect
            your information.
          </p>
        </div>
      </StandUpSection>
    </>
  );
};

export default PrivacyPolicy;
