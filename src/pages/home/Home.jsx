import React from "react";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import "./home.css";
import { assets } from "../../assets/assets";
import EventCard from "../../components/event-card/EventCard";
import VerticalCard from "../../components/vertical-card/VerticalCard";
import Footer from "../../components/footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BannerSection from "./components/BannerSection";
import AboutSection from "./components/AboutSection";
import EventsSection from "./components/EventsSection";
import FeaturesSection from "./components/FeaturesSection";
import StandUpSection from "./components/StandUpSection";

function Home() {
  return (
    <>
      <Header />
      <BannerSection />
      <AboutSection />
      <EventsSection />
      <FeaturesSection />
      <StandUpSection />
      <Footer />
    </>
  );
}

export default Home;
