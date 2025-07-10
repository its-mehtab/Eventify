import React, { useEffect, useState } from "react";
import {
  convertDate,
  convertTo12HourFormat,
} from "../../../components/DateTimeFormatter";
import { assets } from "../../../assets/assets";
import Button from "../../../components/button/Button";
import { useEventInterest } from "../../../hooks/useInterestedEvents";
import { useInterestedItems } from "../../../context/InterestedItems";

const UpcomingEvent = ({ upcomingEvent }) => {
  const [isInterested, setIsInterested] = useState(null);

  const { interestedItems, setInterestedItems } = useInterestedItems();

  const { checkInterestStatus, toggleInterest } = useEventInterest();

  useEffect(() => {
    const fetchIsInterested = async () => {
      const checkStatus = await checkInterestStatus(upcomingEvent.id);
      setIsInterested(checkStatus);
    };
    fetchIsInterested();
  }, [checkInterestStatus, upcomingEvent.id]);

  const handleIsInterested = async () => {
    const wasInterested = isInterested;
    const success = await toggleInterest(upcomingEvent.id);
    const checkStatus = await checkInterestStatus(upcomingEvent.id);
    setIsInterested(checkStatus);

    if (success) {
      setInterestedItems((prev) => {
        if (wasInterested) {
          return prev.filter((item) => item.id !== upcomingEvent.id);
        } else {
          return [...prev, upcomingEvent];
        }
      });
    }
  };

  return (
    <div className="upcoming-event">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="upcoming-event-item">
            <h3>{upcomingEvent.heading}</h3>
            <p>
              {`${upcomingEvent.artist} - ${convertDate(upcomingEvent.date)}`}
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="upcoming-event-item">
            <h3>
              {convertTo12HourFormat(
                `${upcomingEvent.timing.start} - ${upcomingEvent.timing.end}`
              )}
            </h3>
            <p>{upcomingEvent.location.split(",")[0]}</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="upcoming-event-item d-flex gap-3 align-items-center justify-content-between flex-wrap">
            <div>
              <h3>353</h3>
              <p>Attending</p>
            </div>
            <Button
              btnClass="d-flex align-items-center gap-2"
              href={null}
              onClick={handleIsInterested}
            >
              {isInterested ? (
                <assets.MinusPersonIcon />
              ) : (
                <assets.AddPersonIcon />
              )}

              {isInterested ? "Not Interested" : "Interested"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
