import React, { useEffect, useState } from "react";
import TicketsQuantity from "../../components/tickets-quantity/TicketsQuantity";
import Button from "../button/Button";
import { assets } from "../../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const SportsContent = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState("");

  useEffect(() => {
    const firstSportEvent = events.find((event) => event.type === "sports");
    if (firstSportEvent) {
      setSelectedEvent(`sport_show${firstSportEvent.id}`);
    }
  }, [events]);

  return (
    <div className="row mt-5 justify-content-center">
      <div className="col-lg-6 col-md-10">
        <form>
          <ul className="sports-shows">
            {events
              .filter((currData) => {
                return currData.type === "sports";
              })
              .splice(0, 3)
              .map((currData) => {
                return (
                  <li key={currData.id}>
                    <label htmlFor={`sport_show${currData.id}`}>
                      <input
                        className="d-none"
                        type="radio"
                        name="sports-show"
                        id={`sport_show${currData.id}`}
                        value={selectedEvent}
                        checked={selectedEvent === `sport_show${currData.id}`}
                        onChange={() =>
                          setSelectedEvent(`sport_show${currData.id}`)
                        }
                      />
                      <div className="option-label">
                        <span>{currData.heading}</span>
                        <span>₹{currData.price}</span>
                      </div>
                    </label>
                  </li>
                );
              })}
            {/* <li>
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
                </li> */}
          </ul>
          <div className="qty-sports-show">
            <TicketsQuantity />
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
  );
};

export default SportsContent;
