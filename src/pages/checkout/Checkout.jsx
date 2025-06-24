import React from "react";
import "./checkout.css";
import BannerSection from "../home/components/banner-section/BannerSection";
import StandUpSection from "../home/components/stand-up-section/StandUpSection";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import CheckoutForm from "../../components/checkout-form/CheckoutForm";

const Checkout = () => {
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
                  <li className="checkout-event">
                    <div className="d-flex gap-3 align-items-center">
                      <img src="/src/assets/concert/arijit.jpg" alt="" />
                      <div>
                        <p>Voice of Emotions</p>
                        <p>Quantity: 2</p>
                      </div>
                    </div>
                    <p>$24.99</p>
                  </li>
                </ul>
                <div className="d-flex justify-content-between gap-3 mt-3 pt-3 border-top">
                  <p>Subtotal</p>
                  <p>$49.00</p>
                </div>
                <div className="d-flex justify-content-between gap-3 mt-2">
                  <p>Incl. Vat</p>
                  <p>$49.00</p>
                </div>
                <div className="d-flex justify-content-between gap-3 mt-3 pt-3 border-top fw-semibold">
                  <p>Total Value</p>
                  <p>$149.00</p>
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
