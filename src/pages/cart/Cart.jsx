import React from "react";
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

const Cart = () => {
  const {
    cartEvents,
    checkCartStatus,
    loading,
    error,
    actionLoading,
    actionError,
    removeCart,
  } = useCartEvent();

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
        {/* <ul className="cart-list-item">
          <li>
            <div className="cart-img-wrap">
              <img src="" alt="" />
            </div>
            <div className="cart-item-content">
              <div>
                <h3>dsg</h3>
                <p>dsvd</p>
              </div>
              <TicketsQuantity />
              <div>rs432</div>
            </div>
          </li>
        </ul> */}
        <ul>
          {cartEvents.map((currData) => {
            const formattedDate = convertDate(currData.date);
            return (
              <li className="cart-list-item mt-4" key={currData.id}>
                <Link className="cart-img" to={`/events/${currData.id}`}>
                  <img src={currData.image} alt="" />
                </Link>
                <div className="concert-content mt-3 mt-md-0">
                  <Link to={`/events/${currData.id}`} className="text-white">
                    <h3>{currData.heading}</h3>
                    <p>{formattedDate}</p>
                  </Link>
                  <h3 className="price mt-3 text-white">₹{currData.price}</h3>
                </div>
                <div className="d-flex gap-5 ms-auto">
                  <TicketsQuantity />
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
      </EventsSection>
    </>
  );
};

export default Cart;
