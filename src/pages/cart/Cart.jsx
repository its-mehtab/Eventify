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
  const { cartEvents, loading, error, actionLoading, actionError, removeCart } =
    useCartEvent();

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
        <div className="row">
          {cartEvents.map((currData) => {
            const formattedDate = convertDate(currData.date);
            // const handleRemove = removeCart(currData);
            return (
              <div
                className="col-xl-4 col-md-6 d-flex align-items-stretch"
                key={currData.id}
              >
                <div className="events-content mt-4">
                  <div
                    to={`/events/${currData.id}`}
                    className="concert-card d-block"
                  >
                    <img src={assets.concert_box} alt="" />

                    <div className="row">
                      <div
                        className={`col-md-12 d-md-flex align-items-stretch`}
                      >
                        <div className="concert-content">
                          <Link to={`/events/${currData.id}`}>
                            <img src={currData.image} alt="" />
                          </Link>
                        </div>
                      </div>
                      <div
                        className={`col-md-12 d-md-flex align-items-stretch`}
                      >
                        <div className="concert-content py-3 mt-3 mt-md-0">
                          <div className="concert-title">
                            <div>
                              <h3>{currData.heading}</h3>
                              <p>{formattedDate}</p>
                            </div>
                          </div>
                          <div className="concert-details pt-3">
                            <div className="flex justify-content-between mb-4">
                              <TicketsQuantity color="text-dark" />
                              <button
                                className="remove-btn"
                                onClick={() => {
                                  removeCart(currData.id);
                                }}
                              >
                                <RemoveIcon />
                              </button>
                            </div>
                            <h3 className="price">₹{currData.price}</h3>
                            {/* <p className="mt-2 mb-4">
                              Qty: {currData.quantity}
                            </p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </EventsSection>
    </>
  );
};

export default Cart;
