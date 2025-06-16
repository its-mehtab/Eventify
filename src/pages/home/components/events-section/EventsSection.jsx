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

import JSON from "../../JSON.js";

const EventsSection = () => {
  // console.log(JSON);

  return (
    <section className="events-sec sp-tb">
      <div className="container">
        <div className="row gx-xl-5">
          <div className="col-xl-4 text-center text-xl-start mb-4 mb-xl-0">
            <div className="events-content">
              <div className="common-head">
                <span className="inner-head">Live Lineup</span>
                <h1>UPCOMING EVENTS YOU CAN'T MISS</h1>
              </div>
              <p className="mb-3">
                Experience unforgettable music with top artists performing live!
              </p>
              <Button>Grab Your Ticket</Button>
            </div>
          </div>
          <div className="col-xl-8 col-lg-9 col-lg-10 mx-auto">
            <div className="events-content">
              {JSON.concerts.map((currConcert) => {
                if (JSON.concerts.indexOf(currConcert) < 5) {
                  return (
                    <EventCard currConcert={currConcert} key={currConcert.id} />
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-lg-6 col-md-10">
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
          <div className="col-lg-6 col-md-10 mt-4 mt-lg-0">
            <div className="sports-details">
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
              >
                <SwiperSlide>
                  <div className="sports-details-item">
                    <div className="d-sm-flex gap-3 align-items-center">
                      <h4>248</h4>
                      <span>
                        Seats <br /> Available
                      </span>
                    </div>
                    <div className="d-sm-flex gap-3 align-items-center mt-4">
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar" style={{ width: "75%" }}>
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
                    <div className="d-sm-flex gap-3 align-items-center">
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
  );
};

export default EventsSection;
