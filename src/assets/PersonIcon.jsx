import React from "react";

const PersonIcon = ({ color }) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6666 18V16.3333C16.6666 15.4493 16.3154 14.6014 15.6903 13.9763C15.0652 13.3512 14.2173 13 13.3333 13H6.66659C5.78253 13 4.93468 13.3512 4.30956 13.9763C3.68444 14.6014 3.33325 15.4493 3.33325 16.3333V18M13.3333 6.33333C13.3333 8.17428 11.8409 9.66667 9.99992 9.66667C8.15897 9.66667 6.66659 8.17428 6.66659 6.33333C6.66659 4.49238 8.15897 3 9.99992 3C11.8409 3 13.3333 4.49238 13.3333 6.33333Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PersonIcon;
