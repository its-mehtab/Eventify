import React from "react";
import "./underline-button.css";

const UnderlineButton = ({ children }) => {
  return (
    <a href="#" className="underline-btn">
      {children}
    </a>
  );
};

export default UnderlineButton;
