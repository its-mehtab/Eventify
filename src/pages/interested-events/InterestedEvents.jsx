import React, { useEffect } from "react";
import BannerSection from "../home/components/banner-section/BannerSection";
import { Link } from "react-router-dom";
import "../bookings/bookings.css";
import StandUpSection from "../home/components/stand-up-section/StandUpSection";
// import {
//   useDeleteInterestedEvent,
//   useInterestedEvents,
// } from "../../hooks/useInterestedEvents";
import { useEventInterest } from "../../hooks/useInterestedEvents";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import {
  convertDate,
  convertTo12HourFormat,
} from "../../components/DateTimeFormatter";
import RemoveIcon from "../../assets/RemoveIcon";

const InterestedEvents = () => {
  const {
    interestedEvents,
    loading,
    error,
    toggleInterest,
    actionLoading,
    actionError,
    removeInterest,
  } = useEventInterest();

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
                <h1>Interested</h1>
              </div>
              <ul className="breadcrumb d-flex justify-content-center text-white">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Interested</li>
              </ul>
            </div>
          </div>
        </div>
      </BannerSection>
      <StandUpSection>
        <div className="common-head">
          <span className="inner-head">Live Lineup</span>
          <h1>Interested Events</h1>
        </div>
        <ul className="bookings-wrap">
          {interestedEvents.map((currData) => {
            return (
              <li key={currData.id}>
                <div
                  className="remove"
                  onClick={() => {
                    removeInterest(currData.interestId);
                  }}
                >
                  <RemoveIcon />
                </div>
                <Link className="text-white" to={`/events/${currData.id}`}>
                  <div className="row">
                    <div className="col-md-5">
                      <div className="booking-item">
                        <div className="booking-img-wrap">
                          <img src={currData.image} alt="" width="100%" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="booking-item pt-3">
                        <h3>{currData.heading}</h3>
                        <p>{currData.location.split(",")[0]}</p>
                        <p>{convertDate(currData.date)}</p>
                        <p>
                          {convertTo12HourFormat(
                            `${currData.timing.start} - ${currData.timing.end}`
                          )}
                        </p>
                        <p>{currData.artist}</p>
                        <p>Amount: ₹{currData.price}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </StandUpSection>
    </>
  );
};

export default InterestedEvents;
