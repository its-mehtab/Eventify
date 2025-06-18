import React from "react";
import "./vertical-card.css";
import UnderlineButton from "../underline-button/UnderlineButton";
import { Link } from "react-router-dom";

const VerticalCard = ({ currData }) => {
  return (
    <Link
      to={`/event/${currData.id}`}
      className="vertical-card-wrap text-center d-block text-white"
    >
      <div className="ver-card-img">
        <img src={currData.image} alt="" />
      </div>
      <h3>{currData.heading}</h3>
      <p>{currData.location}</p>
      <UnderlineButton>Book Now</UnderlineButton>
    </Link>
  );
};

export default VerticalCard;
