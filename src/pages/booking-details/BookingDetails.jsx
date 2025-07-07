import React from "react";
import BannerSection from "../home/components/banner-section/BannerSection";
import { useBookings } from "../../hooks/useBooking";
import ErrorMessage from "../../components/ErrorMessage";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";
import "./booking-details.css";

const BookingDetails = () => {
  const { bookings, loading, error, cancelUserBooking } = useBookings();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  return (
    <BannerSection>
      <div className="row">
        <div className="col-md-8">
          <div className="booking-details-item">
            <ul className="booking-item">
              {bookings[2].tickets.map((currTicket) => {
                return (
                  <li key={currTicket.id}>
                    <h3>{currTicket.event.heading}</h3>
                    <div className="d-flex gap-4 align-items-center">
                      <div className="booking-details-img">
                        <img
                          src={currTicket.event.image}
                          alt=""
                          className="w-100"
                        />
                      </div>
                      <div>
                        <p>{currTicket.event.date}</p>
                        <p>
                          {currTicket.event.timing.start} -{" "}
                          {currTicket.event.timing.end}
                        </p>
                        <p>{currTicket.event.location}</p>
                        <p>Guests: {currTicket.quantity}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </BannerSection>
  );
};

export default BookingDetails;
