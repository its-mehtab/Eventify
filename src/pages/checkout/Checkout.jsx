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

const Checkout = () => {
  const { cartEvents, loading, error, getCartById } = useCartEvent();
  const { state } = useLocation();
  const [events, setEvents] = useState([]);

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
  }, [state, cartEvents]);

  const subTotal = cartEvents.reduce(
    (acc, currEvent) => {
      return parseInt(currEvent.price) + parseInt(acc);
    },
    [0]
  );
  const vatCharge = 99;

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
        <form action="">
          <div className="row">
            <div className="col-md-6">
              <div className="form-wrap">
                <CheckoutForm />
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
                    />
                    <label htmlFor="cod">Cash on Delivery</label>
                  </div>
                  <div className="payment-item">
                    <input
                      type="radio"
                      id="upi"
                      name="paymentMethod"
                      value="upi"
                    />
                    <label htmlFor="upi">UPI</label>
                  </div>
                  <div className="payment-item">
                    <input
                      type="radio"
                      id="card"
                      name="paymentMethod"
                      value="card"
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
