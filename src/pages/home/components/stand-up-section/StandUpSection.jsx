import React from "react";
import VerticalCard from "../../../../components/vertical-card/VerticalCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./stand-up-section.css";

const StandUpSection = ({ children }) => {
  return (
    <section className="stand-up-sec sp-tb">
      <div className="container">
        <div className="common-head text-center">
          <span className="inner-head">Comedy Nights</span>
          <h1>Laugh Loud at Live Shows</h1>
          <p>
            Catch the funniest comedians live on stage for unforgettable,
            laugh-out-loud moments and great vibes.
          </p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default StandUpSection;
