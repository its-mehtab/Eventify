import React from "react";
import "./custom-input.css";

const CustomInput = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
  className = "",
}) => {
  return (
    <div className={`form-group ${className}`}>
      <input
        type={type}
        id={name}
        name={name}
        value={value ?? ""}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default CustomInput;
