import React from "react";
import "./vertical-card.css";
import UnderlineButton from "../underline-button/UnderlineButton";

const VerticalCard = ({ currData }) => {
  return (
    <div className="vertical-card-wrap text-center">
      <div className="ver-card-img">
        <img src={currData.image} alt="" />
      </div>
      <h3>{currData.heading}</h3>
      <p>{currData.location}</p>
      <UnderlineButton>Book Now</UnderlineButton>
    </div>
  );
};

export default VerticalCard;
