import React from "react";
import { assets } from "../../assets/assets";
import "./event-card.css";

const EventCard = () => {
  return (
    <div className="concert-card">
      <div className="row">
        <div className="col-md-6">
          <div className="concert-content">
            <img src={assets.concert_1} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="concert-content py-3">
            <div className="concert-title">
              <div>
                <h3>Voice of Emotions</h3>
                <p>May 25, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
