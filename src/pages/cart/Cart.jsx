import React, { useEffect } from "react";
import BannerSection from "../home/components/banner-section/BannerSection";
import { Link } from "react-router-dom";
import EventsSection from "../home/components/events-section/EventsSection";
import { convertDate } from "../../components/DateTimeFormatter";
import { useCartEvent } from "../../hooks/useCart";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import { assets } from "../../assets/assets";
import "./cart.css";
import TicketsQuantity from "../../components/tickets-quantity/TicketsQuantity";
import RemoveIcon from "../../assets/RemoveIcon";
import Button from "../../components/button/Button";
import { useTicketQuantity } from "../../context/TicketQuantityContext";

const Cart = () => {
  const {
    cartEvents,
    checkCartStatus,
    loading,
    error,
    actionLoading,
    actionError,
    removeCart,
    updateCart,
  } = useCartEvent();

  const { ticketQuantity, setTicketQuantity } = useTicketQuantity();

  // useEffect(() => {
  //   const updateCartHandle = async function () {
  //     const isInCart = await checkCartStatus(currData.id);
  //     updateCart(isInCart.id, ticketQuantity);
  //   };

  //   updateCartHandle();
  // }, [ticketQuantity, checkCartStatus, updateCart]);

  const cartTotal = cartEvents.reduce(
    (acc, currCart) => {
      const cartFullPrice =
        parseInt(currCart.price) * parseInt(currCart.quantity);
      return parseInt(acc) + cartFullPrice;
    },
    [0]
  );

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (actionLoading) return <LoadingSpinner />;
  if (actionError) return <ErrorMessage message={error} />;

  return (
    <>
      <BannerSection className="sp-b">
        <div className="row justify-content-center pb-md-4">
          <div className="col-md-11 col-xxl-9">
            <div className="banner-content text-center">
              <div className="common-head">
                <span>Live Entertainment Hub</span>
                <h1>Cart</h1>
              </div>
              <ul className="breadcrumb d-flex justify-content-center text-white">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Cart</li>
              </ul>
            </div>
          </div>
        </div>
      </BannerSection>
      <EventsSection className="inner-page">
        <ul className="cart-list">
          {cartEvents.map((currData) => {
            const formattedDate = convertDate(currData.date);

            const updateCartHandle = async function () {
              const isInCart = await checkCartStatus(currData.id);
              updateCart(isInCart.id, ticketQuantity);
            };

            // updateCartHandle();
            return (
              <li className="cart-list-item" key={currData.id}>
                <Link className="cart-img" to={`/events/${currData.id}`}>
                  <img src={currData.image} alt="" />
                </Link>
                <div className="concert-content mt-3 mt-md-0">
                  <Link to={`/events/${currData.id}`} className="text-white">
                    <h3>{currData.heading}</h3>
                    <p>{formattedDate}</p>
                  </Link>
                  <h3 className="price mt-3 text-white">
                    ₹{parseInt(currData.price) * parseInt(currData.quantity)}
                  </h3>
                </div>
                <div className="d-flex gap-5 ms-auto">
                  <TicketsQuantity
                    initialQuantity={currData.quantity}
                    onChange={setTicketQuantity}
                  />
                  <button
                    className="remove-btn"
                    onClick={async () => {
                      const isInCart = await checkCartStatus(currData.id);
                      removeCart(isInCart.id);
                    }}
                  >
                    <RemoveIcon />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="total-details">
          <div className="d-flex gap-4 align-items-center">
            <h4>Total Cart:</h4>
            <h4>₹{cartTotal}</h4>
          </div>
          <Button href="/checkout">Proceed to checkout</Button>
        </div>
      </EventsSection>
    </>
  );
};

export default Cart;
