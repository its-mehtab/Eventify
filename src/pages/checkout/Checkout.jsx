import React, { useEffect, useState } from "react";
import "./checkout.css";
import BannerSection from "../home/components/banner-section/BannerSection";
import StandUpSection from "../home/components/stand-up-section/StandUpSection";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";
import CheckoutForm from "../../components/checkout-form/CheckoutForm";
import { useCartEvent } from "../../hooks/useCart";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import { useBookings } from "../../hooks/useBooking";

const Checkout = () => {
  const { cartEvents, loading, error, getCartById } = useCartEvent();
  const { state } = useLocation();
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const { createBooking } = useBookings();

  useEffect(() => {
    const fetchData = async () => {
      if (state?.directCheckout) {
        const item = await getCartById(state.item.eventId, state.item.quantity);
        setEvents(item);
      } else {
        setEvents(cartEvents);
      }
    };
    fetchData();
  }, [state, cartEvents, getCartById]);

  const subTotal = events.reduce(
    (acc, currEvent) => {
      return parseInt(currEvent.price) + parseInt(acc);
    },
    [0]
  );
  const vatCharge = 99;

  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    //   const checkoutData = {
    //     ...formData,
    //     events,
    //     tickets: {
    //       ticketId: "tkt_1",
    //       eventId: events[0]?.id,
    //       price: 4999,
    //     },
    //     userId: "guest",
    //     totalAmount: 4999,
    //     paymentStatus: "pending",
    //     paymentMethod,
    //   };

    const checkoutData = {
      userId: "guest",
      tickets: [
        {
          id: Math.floor(Math.random() * 10000),
          eventId: events[0]?.id,
          price: 4999,
          quantity: 3,
        },
      ],
      billingDetails: {
        ...formData,
      },
      totalAmount: 4999,
      paymentStatus: "pending",
      paymentMethod,
      cancelled: false,
    };

    createBooking(checkoutData);

    // console.log("Checkout Data:", checkoutData);
    // Post to API here
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <BannerSection className="sp-b">
        <div className="row justify-content-center pb-md-4">
          <div className="col-md-11 col-xxl-9">
            <div className="banner-content text-center">
              <div className="common-head">
                <span>Live Entertainment Hub</span>
                <h1>Checkout</h1>
              </div>
              <ul className="breadcrumb d-flex justify-content-center text-white">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Checkout</li>
              </ul>
            </div>
          </div>
        </div>
      </BannerSection>
      <StandUpSection>
        <form action="" onSubmit={handleCheckout}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-wrap">
                <CheckoutForm formData={formData} setFormData={setFormData} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-wrap">
                <h3>Cart Total</h3>
                <ul>
                  {events.map((currEvent) => {
                    return (
                      <li className="checkout-event" key={currEvent.id}>
                        <div className="d-flex gap-3 align-items-center">
                          <img src={currEvent.image} alt="" />
                          <div>
                            <p>{currEvent.heading}</p>
                            <p>Qty: {currEvent.quantity}</p>
                          </div>
                        </div>
                        <p>₹{currEvent.price}</p>
                      </li>
                    );
                  })}
                </ul>
                <div className="d-flex justify-content-between gap-3 mt-3 pt-3 border-top">
                  <p>Subtotal</p>
                  <p>₹{subTotal}</p>
                </div>
                <div className="d-flex justify-content-between gap-3 mt-2">
                  <p>Incl. Vat</p>
                  <p>₹{vatCharge}</p>
                </div>
                <div className="d-flex justify-content-between gap-3 mt-2">
                  <p>Discount</p>
                  <p>₹{0}</p>
                </div>
                <div className="d-flex justify-content-between gap-3 mt-3 pt-3 border-top fw-semibold">
                  <p>Total Value</p>
                  <p>₹{subTotal + vatCharge}</p>
                </div>
                <div className="payment-wrap border-top mt-3 pt-2">
                  <div className="payment-item">
                    <input
                      type="radio"
                      id="cod"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={handlePaymentMethod}
                    />
                    <label htmlFor="cod">Cash on Delivery</label>
                  </div>
                  <div className="payment-item">
                    <input
                      type="radio"
                      id="upi"
                      name="paymentMethod"
                      value="upi"
                      checked={paymentMethod === "upi"}
                      onChange={handlePaymentMethod}
                    />
                    <label htmlFor="upi">UPI</label>
                  </div>
                  <div className="payment-item">
                    <input
                      type="radio"
                      id="card"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={handlePaymentMethod}
                    />
                    <label htmlFor="card">Debit / Credit Card</label>
                  </div>
                  <button
                    className="primary-btn btn-dark w-100 mt-4"
                    type="submit"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </StandUpSection>
    </>
  );
};

export default Checkout;
