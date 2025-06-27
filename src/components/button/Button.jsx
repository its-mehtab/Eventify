import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

const Button = (
  {
    tag: Tag = Link,
    href = "category/concert",
    btnClass = "",
    children,
    onClick = null,
  },
  props
) => {
  return (
    <Tag
      to={href}
      className={`primary-btn ${btnClass}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Button;
