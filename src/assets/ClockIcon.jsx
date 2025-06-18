import React from "react";

const ClockIcon = ({ color = "#170072" }) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0001 5.49999V10.5L13.3334 12.1667M18.3334 10.5C18.3334 15.1024 14.6025 18.8333 10.0001 18.8333C5.39771 18.8333 1.66675 15.1024 1.66675 10.5C1.66675 5.89762 5.39771 2.16666 10.0001 2.16666C14.6025 2.16666 18.3334 5.89762 18.3334 10.5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ClockIcon;
