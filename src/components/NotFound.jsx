import React from "react";
import BannerSection from "../pages/home/components/banner-section/BannerSection";
import { assets } from "../assets/assets";
import Button from "./button/Button";

const NotFound = () => {
  return (
    <BannerSection className="sp-t">
      <div className="empty-state text-center mt-5 pt-4">
        <assets.EmptyBoxIcon size={220} />
        <h3 className="mb-3">404 - Page Not Found</h3>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Button href="/" btnClass="mt-4">
          Go back to Home
        </Button>
      </div>
    </BannerSection>
  );
};

export default NotFound;
