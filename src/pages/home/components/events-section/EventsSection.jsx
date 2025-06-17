import React from "react";
import Button from "../../../../components/button/Button.jsx";
import EventCard from "../../../../components/event-card/EventCard.jsx";
import { assets } from "../../../../assets/assets.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./events-section.css";

const EventsSection = ({ className = "", children }) => {
  return (
    <section className={`events-sec sp-tb ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
};

export default EventsSection;
