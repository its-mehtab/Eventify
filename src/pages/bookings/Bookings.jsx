import React from "react";
import BannerSection from "../home/components/banner-section/BannerSection";
import { Link } from "react-router-dom";
import StandUpSection from "../home/components/stand-up-section/StandUpSection";
import "./bookings.css";
import Button from "../../components/button/Button";
import { useBookings } from "../../hooks/useBooking";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import {
  formatDateTime,
  formatNumber,
} from "../../components/DateTimeFormatter";
import EmptyState from "../../components/empty-state/EmptyState";

const Bookings = () => {
  const { bookings, loading, error, cancelUserBooking } = useBookings();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (bookings.length === 0)
    return <EmptyState name="You Haven’t Booked Anything Yet" />;

  return (
    <>
      <BannerSection className="sp-b">
        <div className="row justify-content-center pb-md-4">
          <div className="col-md-11 col-xxl-9">
            <div className="banner-content text-center">
              <div className="common-head">
                <span>Live Entertainment Hub</span>
                <h1>Bookings</h1>
              </div>
              <ul className="breadcrumb d-flex justify-content-center text-white">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Bookings</li>
              </ul>
            </div>
          </div>
        </div>
      </BannerSection>
      <StandUpSection>
        <div className="common-head">
          <span className="inner-head">Live Lineup</span>
          <h1>Recent Bookings</h1>
        </div>
        <ul className="bookings-wrap">
          {bookings.map((currBooking) => {
            const isCancelled = currBooking.cancelled;

            return (
              <li key={currBooking.id}>
                <div className="row justify-content-between">
                  <div className="col-md-7">
                    {currBooking.tickets.map((currTicket) => {
                      return (
                        <div
                          key={currTicket.id}
                          className="booking-event-item d-flex gap-4"
                        >
                          <div className="left-side">
                            <div className="booking-img-wrap">
                              <img
                                src={currTicket.event.image}
                                alt=""
                                width="100%"
                              />
                            </div>
                          </div>
                          <div className="booking-item booking-details">
                            <h3>{currTicket.event.heading}</h3>
                            <p>
                              Amount: ₹{formatNumber(currTicket.event.price)}
                            </p>
                            <p>Guests: {currTicket.quantity}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="col-md-5">
                    <div className="booking-details text-end">
                      <div className="common-head">
                        <span className="inner-head mb-2">
                          {currBooking.paymentStatus}
                        </span>
                      </div>
                      <p>Order Id: {currBooking.orderId}</p>
                      <p>
                        Total Amount: ₹{formatNumber(currBooking.totalAmount)}
                      </p>
                      <p>
                        Payment Method:{" "}
                        {currBooking.paymentMethod.toUpperCase()}
                      </p>
                      <p>Date: {formatDateTime(currBooking.createdAt)}</p>
                      <div className="d-flex flex-wrap justify-content-end">
                        <Button
                          href={`/booking/${currBooking.id}`}
                          btnClass="mt-4"
                        >
                          View Details
                        </Button>
                        {isCancelled || (
                          <Button
                            href=""
                            onClick={() => {
                              cancelUserBooking(currBooking.id);
                            }}
                            btnClass={"btn-white ms-3  mt-4"}
                          >
                            Cancel
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </StandUpSection>
    </>
  );
};

export default Bookings;
