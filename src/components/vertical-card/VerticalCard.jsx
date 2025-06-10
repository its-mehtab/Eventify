import React from "react";
import "./vertical-card.css";
import UnderlineButton from "../underline-button/UnderlineButton";
import { assets } from "../../assets/assets";

const VerticalCard = () => {
  return (
    <div className="vertical-card-wrap text-center">
      <div className="ver-card-img">
        <img src={assets.stand_up1} alt="" />
      </div>
      <h3>Zakir Khan – Sakht Launda</h3>
      <p>
        Netaji Indoor Stadium - 1, Stadium House, D.L. Khan Road, B.B.D. Bagh,
        Kolkata, West Bengal 700021
      </p>
      <UnderlineButton>Book Now</UnderlineButton>
    </div>
  );
};

export default VerticalCard;
