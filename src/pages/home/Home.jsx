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
import BannerSection from "./components/banner-section/BannerSection";
import AboutSection from "./components/about-section/AboutSection";
import EventsSection from "./components/events-section/EventsSection";
import FeaturesSection from "./components/features-section/FeaturesSection";
import StandUpSection from "./components/stand-up-section/StandUpSection";

function Home() {
  return (
    <>
      {/* <Header /> */}
      <BannerSection>
        <div className="row justify-content-center">
          <div className="col-md-11 col-xxl-9">
            <div className="banner-content text-center">
              <div className="common-head">
                <span>Live Entertainment Hub</span>
                <h1>
                  <img src={assets.animate_icon} alt="" />
                  book your <br />
                  tickets for <span>event</span>
                </h1>
              </div>
              <p className="mt-3">
                Experience live entertainment with fast, easy, and secure ticket
                booking.
              </p>
              <div className="d-flex justify-content-center flex-wrap">
                <Button btnClass="mt-4">Grab Your Ticket</Button>
                <Button btnClass={"btn-white ms-3  mt-4"}>Join Now</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="upcoming-event">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="upcoming-event-item">
                <h3>25th DEC</h3>
                <p>22:30 - 07:00</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="upcoming-event-item">
                <h3>22:30 - 07:00</h3>
                <p>135 W, 46nd Street, New York</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="upcoming-event-item d-flex gap-3 align-items-center justify-content-between flex-wrap">
                <div>
                  <h3>353</h3>
                  <p>Attending</p>
                </div>
                <Button>
                  <assets.AddPersonIcon />
                  Interested
                </Button>
              </div>
            </div>
          </div>
        </div>
      </BannerSection>
      <AboutSection />
      <EventsSection />
      <FeaturesSection />
      <StandUpSection />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
