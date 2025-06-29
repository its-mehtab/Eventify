import React from "react";
import {
  convertDate,
  convertTo12HourFormat,
} from "../../../components/DateTimeFormatter";
import { assets } from "../../../assets/assets";
import Button from "../../../components/button/Button";

const UpcomingEvent = ({ upcomingEvent }) => {
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
            <Button href={null}>
              <assets.AddPersonIcon />
              Interested
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
