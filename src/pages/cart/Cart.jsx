import React, { useEffect, useState } from "react";
import BannerSection from "../home/components/banner-section/BannerSection";
import { Link } from "react-router-dom";
import EventsSection from "../home/components/events-section/EventsSection";
import { convertDate, formatNumber } from "../../components/DateTimeFormatter";
import { useCartEvent } from "../../hooks/useCart";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import { assets } from "../../assets/assets";
import "./cart.css";
import TicketsQuantity from "../../components/tickets-quantity/TicketsQuantity";
import RemoveIcon from "../../assets/RemoveIcon";
import Button from "../../components/button/Button";
import { useCartTotal } from "../../context/CartTotal";
import EmptyState from "../../components/empty-state/EmptyState";
import { useCartItems } from "../../context/CartItems";

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
    fetchCartEvents,
  } = useCartEvent();

  const { cartItems, setCartItems } = useCartItems();

  const { cartTotal, setCartTotal } = useCartTotal();

  useEffect(() => {
    const cartAllPrice = cartEvents.reduce((acc, currCart) => {
      const cartFullPrice =
        parseInt(currCart.price) * parseInt(currCart.quantity);
      return parseInt(acc) + cartFullPrice;
    }, 0);

    setCartTotal(cartAllPrice);
  }, [cartEvents, setCartTotal]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (cartItems.length === 0)
    return <EmptyState heading="Your Cart is Empty" />;
  // if (actionLoading) return <LoadingSpinner />;
  // if (actionError) return <ErrorMessage message={error} />;

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
          {cartItems.map((currData) => {
            const formattedDate = convertDate(currData.date);

            const updateCartHandle = async function (newQty) {
              const isInCart = await checkCartStatus(currData.id);

              updateCart(isInCart.id, newQty);

              setCartItems((prev) =>
                prev.map((item) =>
                  item.id === currData.id ? { ...item, quantity: newQty } : item
                )
              );
            };

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
                    ₹
                    {formatNumber(
                      parseInt(currData.price) * parseInt(currData.quantity)
                    )}
                  </h3>
                </div>
                <div className="d-flex gap-4 gap-md-5 ms-auto align-content-center">
                  <TicketsQuantity
                    initialQuantity={currData.quantity}
                    handleUpdateQuantity={updateCartHandle}
                  />
                  <button
                    className="remove-btn"
                    onClick={async () => {
                      const isInCart = await checkCartStatus(currData.id);
                      const success = await removeCart(isInCart.id);
                      if (success) {
                        setCartItems((prev) =>
                          prev.filter((item) => item.id !== currData.id)
                        );
                      }
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
            <h4>₹{formatNumber(cartTotal)}</h4>
          </div>
          <Button href="/checkout">Proceed to checkout</Button>
        </div>
      </EventsSection>
    </>
  );
};

export default Cart;
