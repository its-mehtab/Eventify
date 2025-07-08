import React, { useEffect, useState } from "react";
import BannerSection from "../home/components/banner-section/BannerSection";
import { useBookings } from "../../hooks/useBooking";
import ErrorMessage from "../../components/ErrorMessage";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";
import "./booking-details.css";
import {
  convertDate,
  convertTo12HourFormat,
  formatNumber,
} from "../../components/DateTimeFormatter";
import { useParams } from "react-router-dom";

const BookingDetails = () => {
  const { bookingId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [booking, setBooking] = useState();

  const { cancelUserBooking, getSingleBooking } = useBookings();

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const data = await getSingleBooking(bookingId);
        setBooking(data);
      } catch (error) {
        setError(error.message || "Failed to load booking");
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [bookingId]);

  // console.log("Booking Details: ", booking);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  return (
    <BannerSection className="sp-t">
      <div className="booking-details-content pt-5">
        <div className="booking-summery mt-4">
          <div className="row">
            <div className="col-md-8">
              <div className="summery-item">
                <h3>Booking Summery</h3>
                <h4>Booked On</h4>
                <p>{booking.createdAt}</p>
                <h4>Total Amount</h4>
                <p>{formatNumber(booking.totalAmount)}</p>
                <h4>Payment Method</h4>
                <p>{booking.paymentMethod.toUpperCase()}</p>
                <h4>Booking ID</h4>
                <p>{booking.orderId}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="summery-item text-md-end">
                <h3>Order Summery</h3>
                <h4>SubTotal</h4>
                <p>₹{formatNumber(booking.totalAmount - 99)}</p>
                <h4>Incl. Vat</h4>
                <p>₹{99}</p>
                <h4>Discount</h4>
                <p>₹{0}</p>
                <h4>Grand Total</h4>
                <p>₹{formatNumber(booking.totalAmount)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="booking-summery mt-4">
          <h3 className="mb-3">Ship to</h3>
          <div className="ship-details">
            <p>
              Name: {booking.billingDetails.firstName}{" "}
              {booking.billingDetails.lastName}
            </p>
            <p>
              Address:{" "}
              {`${booking.billingDetails.address}, ${booking.billingDetails.city}, ${booking.billingDetails.state}, ${booking.billingDetails.country}, ${booking.billingDetails.zipCode}`}
            </p>
            <p>Mobile: {booking.billingDetails.phoneNumber}</p>
            <p>Email: {booking.billingDetails.email}</p>
          </div>
        </div>
        <div className="booking-tickets">
          <div className="common-head">
            <span className="inner-head">Live Lineup</span>
            <h1>Tickets</h1>
          </div>
          <div className="booking-items">
            <div className="row">
              {booking.tickets.map((currTicket) => {
                return (
                  <div
                    className="col-md-6 d-flex align-items-stretch"
                    key={currTicket.id}
                  >
                    <div className="ticket-item w-100">
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
                          <p>{convertDate(currTicket.event.date)}</p>
                          <p>
                            {convertTo12HourFormat(
                              `${currTicket.event.timing.start} - ${currTicket.event.timing.end}`
                            )}
                          </p>
                          <p>Guests: {currTicket.quantity}</p>
                          <p>{formatNumber(currTicket.event.price)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </BannerSection>
  );
};

export default BookingDetails;
