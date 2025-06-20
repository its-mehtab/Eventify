import React from "react";
import { assets } from "../../assets/assets";
import "./event-card.css";
import { Link } from "react-router-dom";
import { convertDate, convertTo12HourFormat } from "../DateTimeFormatter";
// import PropTypes from "prop-types";

const EventCard = ({ currConcert, orientation = "col-md-12" }) => {
  const formattedDate = convertDate(currConcert.date);
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
