import React, { useEffect, useState } from "react";
import BannerSection from "../home/components/banner-section/BannerSection";
import { href, Link, Navigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useParams } from "react-router-dom";
import { useEventDetails } from "../../hooks/useEvents";
import "./event-details.css";
import Button from "../../components/button/Button";
import {
  convertDate,
  convertTo12HourFormat,
  formatNumber,
  getDurationFromRange,
} from "../../components/DateTimeFormatter";
import TicketsQuantity from "../../components/tickets-quantity/TicketsQuantity";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import { useTicketQuantity } from "../../context/TicketQuantityContext";
import { useEventInterest } from "../../hooks/useInterestedEvents";
import { useCartEvent } from "../../hooks/useCart";
import { updateCartQuantity } from "../../api/cartService";
import { useNavigate } from "react-router-dom";
import { useCartItems } from "../../context/CartItems";
import { useInterestedItems } from "../../context/InterestedItems";

const EventDetails = () => {
  const { eventId } = useParams();
  const { ticketQuantity, setTicketQuantity } = useTicketQuantity();
  const {
    setActionLoading,
    setActionError,
    toggleInterest,
    checkInterestStatus,
  } = useEventInterest();

  const { setCartItems } = useCartItems();
  const { setInterestedItems } = useInterestedItems();

  const navigate = useNavigate();

  const { checkCartStatus, addCart } = useCartEvent();

  const { event, loading, error } = useEventDetails(eventId);

  const [isInterested, setIsInterested] = useState(null);

  useEffect(() => {
    const fetchIsInterested = async () => {
      const checkStatus = await checkInterestStatus(eventId);
      setIsInterested(checkStatus);
    };
    fetchIsInterested();
  }, [checkInterestStatus, eventId]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!event)
    return (
      <BannerSection className="sp-b">
        <div className="row justify-content-center pb-md-4">
          <div className="col-md-11 col-xxl-9">
            <div className="banner-content text-center">
              <div className="common-head">
                <h1>No event data found</h1>
              </div>
            </div>
          </div>
        </div>
      </BannerSection>
    );

  const duration = getDurationFromRange(
    `${event.timing.start} - ${event.timing.end}`
  );

  const handleIsInterested = async () => {
    await toggleInterest(event.id);
    const checkStatus = await checkInterestStatus(eventId);
    setIsInterested(checkStatus);

    setInterestedItems((prev) => {
      if (checkStatus) {
        const alreadyExists = prev.find((item) => item.id === event.id);
        if (!alreadyExists) {
          return [...prev, event];
        }
        return prev;
      } else {
        return prev.filter((item) => item.id !== event.id);
      }
    });
  };

  const handleAddToCart = async () => {
    const isInCart = await checkCartStatus(eventId);

    if (!isInCart) {
      const success = await addCart(eventId, ticketQuantity);

      if (success) {
        const newItem = {
          ...event,
          quantity: ticketQuantity,
          id: event.id,
        };

        setCartItems((prev) => [...prev, newItem]);
      }
    } else {
      const currentQty = isInCart.quantity;
      const newQty = parseInt(currentQty) + parseInt(ticketQuantity);

      const success = await updateCartQuantity(isInCart.id, newQty);

      if (success) {
        setCartItems((prev) =>
          prev.map((item) =>
            item.id === event.id ? { ...item, quantity: newQty } : item
          )
        );
      }
    }
  };

  return (
    <>
      <BannerSection className="sp-b">
        <div className="row justify-content-center pb-md-4">
          <div className="col-md-11 col-xxl-9">
            <div className="banner-content text-center">
              <div className="common-head">
                <span>Live Entertainment Hub</span>
                <h1>{event.heading}</h1>
              </div>
              <ul className="breadcrumb d-flex justify-content-center text-white">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to={`/${event.type}`}>{event.type}</Link>
                </li>
                <li>{event.heading}</li>
              </ul>
            </div>
          </div>
        </div>
      </BannerSection>
      <div className="event-details-sec sp-tb about-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="event-details-item">
                <div className="event-details-img">
                  <img src={event.image} alt="" width="100%" />
                </div>
                <div className="interested-wrap">
                  <Button
                    href={null}
                    btnClass="py-1 px-2 d-flex gap-2 align-items-center"
                    onClick={handleIsInterested}
                  >
                    {isInterested ? (
                      <assets.MinusPersonIcon />
                    ) : (
                      <assets.AddPersonIcon />
                    )}
                    {isInterested ? "Not Interested" : "Interested"}
                  </Button>
                  <p>868 People are interested</p>
                </div>
                <h4>About The Event</h4>
                <p>{event.description}</p>
                <div className="event-host-details">
                  <img src={event.image} alt="" />
                  <h5>{event.artist}</h5>
                  <p>{event.artistType}</p>
                  <p>{event.artistBio}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="event-details-item event-details-right mt-4 mt-md-0">
                <div className="common-head text-start d-block">
                  <span className="inner-head mt-2">{event.type}</span>
                </div>
                <div className="d-flex align-items-center gap-2 pt-1">
                  <assets.CalenderIcon />
                  <p className="ms-1">{convertDate(event.date)}</p>
                </div>
                <div className="d-flex align-items-center gap-2 mt-2 pt-1">
                  <assets.ClockIcon color="#fff" />
                  <p className="ms-1">
                    {convertTo12HourFormat(
                      `${event.timing.start} - ${event.timing.end}`
                    )}
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 mt-2 pt-1">
                  <assets.DurationIcon />
                  <p className="ms-1">{`${duration.hours} Hours ${duration.minutes} Minutes`}</p>
                </div>
                <div className="d-flex align-items-center gap-2 mt-2 pt-1">
                  <assets.LimitIcon />
                  <p className="ms-1">{event.ageLimit}</p>
                </div>
                <div className="d-flex align-items-center gap-2 mt-2 pt-1">
                  <assets.LanguageIcon />
                  <p className="ms-1">{event.language}</p>
                </div>
                <div className="d-flex align-items-start gap-2 mt-2 pt-1">
                  <assets.LocationIcon color="#fff" />
                  <p className="ms-1">{event.location}</p>
                </div>
                <form>
                  <div className="d-flex gap-3 mt-3">
                    <TicketsQuantity onChange={setTicketQuantity} />
                    <Button
                      onClick={handleAddToCart}
                      href="/cart"
                      btnClass="btn-white"
                    >
                      <assets.CartIcon />
                    </Button>
                  </div>
                  <div className="price-wrap">
                    <h5>₹{formatNumber(event.price)}</h5>
                    <button
                      className="primary-btn"
                      type="button"
                      onClick={() => {
                        navigate("/checkout", {
                          state: {
                            directCheckout: true,
                            item: {
                              eventId: eventId,
                              quantity: ticketQuantity,
                            },
                          },
                        });
                      }}
                    >
                      buy now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
