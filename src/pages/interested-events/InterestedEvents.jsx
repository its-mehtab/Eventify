import React, { useEffect } from "react";
import BannerSection from "../home/components/banner-section/BannerSection";
import { Link } from "react-router-dom";
import "../bookings/bookings.css";
import StandUpSection from "../home/components/stand-up-section/StandUpSection";
import { useEventInterest } from "../../hooks/useInterestedEvents";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage";
import { formatNumber } from "../../components/DateTimeFormatter";
import RemoveIcon from "../../assets/RemoveIcon";
import EmptyState from "../../components/empty-state/EmptyState";
import { useInterestedItems } from "../../context/InterestedItems";

const InterestedEvents = () => {
  const {
    interestedEvents,
    loading,
    error,
    actionLoading,
    actionError,
    removeInterest,
  } = useEventInterest();

  const { interestedItems, setInterestedItems } = useInterestedItems();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (interestedEvents.length === 0)
    return <EmptyState heading="No Events Added to Your List Yet" />;

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
          {interestedItems.map((currData) => {
            return (
              <li key={currData.id}>
                <div className="text-white">
                  <div className="d-md-flex align-items-center">
                    <Link
                      to={`/events/${currData.id}`}
                      className="booking-img-wrap"
                    >
                      <img src={currData.image} alt="" width="100%" />
                    </Link>
                    <div className="booking-item mt-3 mt-md-0">
                      <Link
                        to={`/events/${currData.id}`}
                        className="text-white"
                      >
                        <h3>{currData.heading}</h3>
                      </Link>
                      <p>Amount: ₹{formatNumber(currData.price)}</p>
                    </div>
                    <div
                      className="remove-btn ms-auto"
                      onClick={async () => {
                        console.log(currData);

                        const success = await removeInterest(
                          currData.interestId
                        );
                        if (success) {
                          setInterestedItems((prev) =>
                            prev.filter((item) => item.id !== currData.id)
                          );
                        }
                      }}
                    >
                      <RemoveIcon />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </StandUpSection>
    </>
  );
};

export default InterestedEvents;
