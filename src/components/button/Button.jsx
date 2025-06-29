import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Button = ({
  tag,
  href,
  btnClass = "",
  children,
  onClick = null,
  type = "button",
  ...props
}) => {
  if (tag === "button" || !href) {
    return (
      <button
        type={type}
        className={`primary-btn ${btnClass}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <Link
      to={href}
      className={`primary-btn ${btnClass}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Button;
