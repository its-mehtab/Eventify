import React from "react";
import { assets } from "../../assets/assets";
import "./event-card.css";

const EventCard = ({ currConcert }) => {
  console.log(currConcert);

  const input = currConcert.date;
  const date = new Date(input);

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  function convertTo12HourFormat(timeRange) {
    // Split the range into start and end times
    const [startTime, endTime] = timeRange.split(" - ");

    // Helper to format a single time
    const formatTime = (timeStr) => {
      const [hour, minute] = timeStr.split(":");
      const date = new Date();
      date.setHours(hour, minute);

      return date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    };

    return `${formatTime(startTime)} - ${formatTime(endTime)}`;
  }

  return (
    <div className="concert-card">
      <img src={assets.concert_box} alt="" />
      <div className="row">
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="concert-content">
            <img src={assets.concert_1} alt="" />
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="concert-content py-3">
            <div className="concert-title">
              <div>
                <h3>{currConcert.heading}</h3>
                <p>{formattedDate}</p>
              </div>
            </div>
            <div className="concert-details">
              <p>
                <span>
                  <assets.PersonIcon />
                </span>
                {currConcert.artist} – {currConcert.heading}
              </p>
              <p>
                <span>
                  <assets.ClockIcon />
                </span>
                {convertTo12HourFormat(
                  `${currConcert.timing.start} - ${currConcert.timing.end}`
                )}
              </p>
              <p>
                <span>
                  <assets.LocationIcon />
                </span>
                {currConcert.location.split(",")[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
