import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

const Button = ({ href = "category/concert", btnClass = "", children }) => {
  return (
    <Link to={href} className={`primary-btn ${btnClass}`}>
      {children}
    </Link>
  );
};

export default Button;
