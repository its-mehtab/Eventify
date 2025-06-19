import React from "react";
import "./underline-button.css";

const UnderlineButton = ({ children }) => {
  return (
    <div href="#" className="underline-btn">
      {children}
    </div>
  );
};

export default UnderlineButton;
