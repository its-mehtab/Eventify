import React from "react";
import { assets } from "../../assets/assets";
import "./event-card.css";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

const EventCard = ({ currConcert, orientation = "col-md-12" }) => {
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
    <Link to={`/events/${currConcert.id}`} className="concert-card d-block">
      <img src={assets.concert_box} alt="" />
      <div className="row">
        <div className={`${orientation} d-md-flex align-items-stretch`}>
          <div className="concert-content">
            <img src={currConcert.image} alt="" />
          </div>
        </div>
        <div className={`${orientation} d-md-flex align-items-stretch`}>
          <div className="concert-content py-3 mt-3 mt-md-0">
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
    </Link>
  );
};

// EventCard.propTypes = {
//   event: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     type: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     heading: PropTypes.string.isRequired,
//     artist: PropTypes.string,
//     teams: PropTypes.array,
//     players: PropTypes.array,
//     date: PropTypes.string.isRequired,
//     timing: PropTypes.shape({
//       start: PropTypes.string.isRequired,
//       end: PropTypes.string.isRequired,
//     }).isRequired,
//     price: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default EventCard;
