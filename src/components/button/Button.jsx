import React from "react";
import "./button.css";

const Button = ({ btnClass = "", children }) => {
  return (
    <a href="#" className={`primary-btn ${btnClass}`}>
      {children}
    </a>
  );
};

export default Button;
