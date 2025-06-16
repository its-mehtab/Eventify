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

function Home() {
  return (
    <>
      <Header />
      <BannerSection />
      <section className="about-sec sp-tb">
        <div className="container">
          <div className="row align-items-center pt-5">
            <div className="col-md-5">
              <div className="about-item">
                <img src={assets.about_img} alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="about-item">
                <div className="common-head">
                  <span className="inner-head">Our Highlights</span>
                  <h1>Made for Moments</h1>
                </div>
                <p className="mb-4">
                  Discover events that inspire, educated, and connect. From
                  engaging webinars the dynamic live and conferences, our events
                  are carefully. Discover events that inspire, educated, and
                  connect. From engaging webinars the dynamic live and
                  conferences, our events are carefully.
                </p>
                <Button>Grab Your Ticket</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="events-sec sp-tb">
        <div className="container">
          <div className="row gx-md-5">
            <div className="col-md-4">
              <div className="events-content">
                <div className="common-head">
                  <span className="inner-head">Live Lineup</span>
                  <h1>UPCOMING EVENTS YOU CAN'T MISS</h1>
                </div>
                <p className="mb-3">
                  Experience unforgettable music with top artists performing
                  live!
                </p>
                <Button>Grab Your Ticket</Button>
              </div>
            </div>
            <div className="col-md-8">
              <div className="events-content">
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <form>
                <ul className="sports-shows">
                  <li>
                    <label htmlFor="sport_show1">
                      <input
                        defaultChecked
                        className="d-none"
                        type="radio"
                        name="sports-show"
                        id="sport_show1"
                        value=""
                      />
                      <div className="option-label">
                        <span>Student Discount</span>
                        <span>$25.00</span>
                      </div>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="sport_show2">
                      <input
                        className="d-none"
                        type="radio"
                        name="sports-show"
                        id="sport_show2"
                        value=""
                      />
                      <div className="option-label">
                        <span>Student Discount</span>
                        <span>$25.00</span>
                      </div>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="sport_show3">
                      <input
                        className="d-none"
                        type="radio"
                        name="sports-show"
                        id="sport_show3"
                        value=""
                      />
                      <div className="option-label">
                        <span>Student Discount</span>
                        <span>$25.00</span>
                      </div>
                    </label>
                  </li>
                </ul>
                <div className="qty-sports-show">
                  <div className="qty-wrap">
                    <span>
                      <assets.Minus />
                    </span>
                    <input type="number" value={1} readOnly />
                    <span>
                      <assets.Plus />
                    </span>
                  </div>
                  <Button>
                    <assets.TicketIcon />
                    buy tickets
                  </Button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="sports-details">
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  spaceBetween={50}
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <div className="sports-details-item">
                      <div className="d-flex gap-3 align-items-center">
                        <h4>248</h4>
                        <span>
                          Seats <br /> Available
                        </span>
                      </div>
                      <div className="d-flex gap-3 align-items-center mt-4">
                        <div
                          className="progress"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            className="progress-bar"
                            style={{ width: "75%" }}
                          >
                            78% filled
                          </div>
                        </div>
                        <a href="#" className="arrow-btn">
                          <assets.ArrowIcon />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="sports-details-item">
                      <div className="d-flex gap-3 align-items-center">
                        <div>
                          <span>537+ attending</span>
                          <h5>Secure your spot now</h5>
                        </div>
                        <a href="#" className="arrow-btn">
                          <assets.ArrowIcon />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features-sec sp-tb">
        <div className="container">
          <div className="common-head text-center">
            <span className="inner-head">Our Highlights</span>
            <h1>Made for Moments</h1>
            <p className="mt-3">
              Every feature is made for you—join now and start booking live
              entertainment instantly.
            </p>
          </div>
          <div className="row">
            <div className="col-md-3 d-flex align-items-stretch">
              <div className="features-item">
                <assets.FeaturesIcon1 />
                <h4>Easy Booking</h4>
                <p>
                  Book tickets quickly with our smooth interface, making your
                  event journey simple and stress-free from the start.
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-stretch">
              <div className="features-item">
                <assets.FeaturesIcon2 />
                <h4>Secure Payments</h4>
                <p>
                  Enjoy peace of mind knowing your payment information is
                  encrypted, secure, and protected with the latest industry
                  standards.
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-stretch">
              <div className="features-item">
                <assets.FeaturesIcon3 />
                <h4>Instant Tickets</h4>
                <p>
                  Get your tickets instantly via email or SMS after payment—no
                  waiting, no printing, just convenience and speed.
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-stretch">
              <div className="features-item">
                <assets.FeaturesIcon4 />
                <h4>Event Variety</h4>
                <p>
                  Explore concerts, comedy shows, sports events, and more—your
                  one-stop platform for every kind of live entertainment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={32}
            slidesPerView={3}
            loop={true}
          >
            <SwiperSlide>
              <VerticalCard />
            </SwiperSlide>
            <SwiperSlide>
              <VerticalCard />
            </SwiperSlide>
            <SwiperSlide>
              <VerticalCard />
            </SwiperSlide>
            <SwiperSlide>
              <VerticalCard />
            </SwiperSlide>
            <SwiperSlide>
              <VerticalCard />
            </SwiperSlide>
          </Swiper>
          {/* <div className="row">
            <div className="col-md-4">
              <VerticalCard />
            </div>
            <div className="col-md-4">
              <VerticalCard />
            </div>
            <div className="col-md-4">
              <VerticalCard />
            </div>
          </div> */}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
