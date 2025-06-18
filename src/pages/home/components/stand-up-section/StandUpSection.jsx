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
      <div className="container">{children}</div>
    </section>
  );
};

export default StandUpSection;
