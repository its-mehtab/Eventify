import React, { useEffect, useState } from "react";
import TicketsQuantity from "../../components/tickets-quantity/TicketsQuantity";
import Button from "../button/Button";
import { assets } from "../../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useTicketQuantity } from "../../context/TicketQuantityContext";
import { Link, useNavigate } from "react-router-dom";
import { formatNumber } from "../DateTimeFormatter";
import { useBookings } from "../../hooks/useBooking";

const SportsContent = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState("19");
  const [usedSeats, setUsedSeats] = useState(0);
  const [totalSeats, setTotalSeats] = useState(0);
  const [event, setEvent] = useState({});
  const { ticketQuantity, setTicketQuantity } = useTicketQuantity();

  const { allBookings, allBookingsLoading, allBookingsError, getAllBookings } =
    useBookings();

  const navigate = useNavigate();

  useEffect(() => {
    if (!allBookings || allBookings.length === 0) {
      setUsedSeats(0);
      return;
    }

    const allTickets = allBookings.flatMap((booking) => booking.tickets);

    const totalUsed = allTickets.reduce((total, ticket) => {
      if (String(ticket.eventId) === String(selectedEvent)) {
        return total + Number(ticket.quantity);
      }
      return total;
    }, 0);

    setUsedSeats(totalUsed);
  }, [allBookings, selectedEvent]);

  useEffect(() => {
    const event = events.find((e) => String(e.id) === String(selectedEvent));
    setEvent(event);
    setTotalSeats(event ? event.totalSeats : 0);
  }, [selectedEvent, events, usedSeats]);

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
                        <span>₹{formatNumber(currData.price)}</span>
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
                  <h4>
                    {formatNumber(parseInt(totalSeats) - parseInt(usedSeats))}
                  </h4>
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
                    <div
                      className="progress-bar"
                      style={{
                        width: `${Math.floor(
                          (parseInt(usedSeats) * 100) / parseInt(totalSeats)
                        )}%`,
                      }}
                    >
                      {Math.floor(
                        (parseInt(usedSeats) * 100) / parseInt(totalSeats)
                      )}
                      % filled
                    </div>
                  </div>
                  <Link to={`events/${event.id}`} className="arrow-btn">
                    <assets.ArrowIcon />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sports-details-item">
                <div className="d-sm-flex gap-3 align-items-center">
                  <div>
                    <span>{formatNumber(usedSeats)}+ attending</span>
                    <h5>Secure your spot now</h5>
                  </div>
                  <Link to={`events/${event.id}`} className="arrow-btn">
                    <assets.ArrowIcon />
                  </Link>
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
