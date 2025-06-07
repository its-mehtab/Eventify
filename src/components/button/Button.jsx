import React from "react";
import "./button.css";

const Button = ({ btnColor, children }) => {
  return (
    <a href="#" className={`primary-btn ${btnColor}`}>
      {children}
    </a>
  );
};

export default Button;
