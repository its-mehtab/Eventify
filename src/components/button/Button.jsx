import React from "react";
import "./button.css";

const Button = ({ BtnClass = "", children }) => {
  return (
    <a href="#" className={`primary-btn ${BtnClass}`}>
      {children}
    </a>
  );
};

export default Button;
