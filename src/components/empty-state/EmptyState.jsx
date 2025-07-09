import React from "react";
import BannerSection from "../../pages/home/components/banner-section/BannerSection";
import { assets } from "../../assets/assets";

const EmptyState = () => {
  return (
    <BannerSection className="sp-t">
      <div className="empty-state text-center mt-5 pt-4">
        <assets.EmptyBoxIcon size={320} />
        <h2 className="mb-3">No Data Available</h2>
        <p className="text-muted">
          It seems like there's nothing to show here. Please check back later or
          try a different search.
        </p>
      </div>
    </BannerSection>
  );
};

export default EmptyState;
