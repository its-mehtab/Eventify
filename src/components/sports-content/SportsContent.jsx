import React, { useEffect, useState } from "react";
import TicketsQuantity from "../../components/tickets-quantity/TicketsQuantity";
import Button from "../button/Button";
import { assets } from "../../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useTicketQuantity } from "../../context/TicketQuantityContext";
import { useNavigate } from "react-router-dom";

const SportsContent = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState("19");
  const { ticketQuantity, setTicketQuantity } = useTicketQuantity();

  const navigate = useNavigate();

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
                    <label htmlFor={`${currData.id}`}>
                      <input
                        className="d-none"
                        type="radio"
                        name="sports-show"
                        id={`${currData.id}`}
                        value={selectedEvent}
                        checked={selectedEvent === `${currData.id}`}
                        onChange={() => setSelectedEvent(`${currData.id}`)}
                      />
                      <div className="option-label">
                        <span>{currData.heading}</span>
                        <span>₹{currData.price}</span>
                      </div>
                    </label>
                  </li>
                );
              })}
          </ul>
          <div className="qty-sports-show">
            <TicketsQuantity onChange={setTicketQuantity} />
            <button
              className="primary-btn"
              type="button"
              onClick={() => {
                navigate("/checkout", {
                  state: {
                    directCheckout: true,
                    item: {
                      eventId: selectedEvent,
                      quantity: ticketQuantity,
                    },
                  },
                });
              }}
            >
              <assets.TicketIcon />
              buy tickets
            </button>
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
