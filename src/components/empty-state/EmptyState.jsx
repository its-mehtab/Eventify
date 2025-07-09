import React from "react";
import BannerSection from "../../pages/home/components/banner-section/BannerSection";
import { assets } from "../../assets/assets";
import "./empty-state.css";

const EmptyState = ({ heading }) => {
  return (
    <BannerSection className="sp-t">
      <div className="empty-state text-center mt-5 pt-4">
        <assets.EmptyBoxIcon size={220} />
        <h3 className="mb-3">{heading}</h3>
        <p>
          Looks like you haven’t added anything yet. Start exploring and find
          something you love!
        </p>
      </div>
    </BannerSection>
  );
};

export default EmptyState;
