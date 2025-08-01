import React from "react";

const UserIcon = ({ size = 40, color = "#fff" }) => {
  return (
    <svg
      height={size}
      viewBox="0 0 64 64"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="User">
        <circle cx={32} cy={32} fill="#5c0ba6" r={31} />
        <g fill="#fff">
          <path d="m56.877 50.4748a31.0647 31.0647 0 0 0 -49.7651-.0156 30.9669 30.9669 0 0 0 49.7651.0156z" />
          <circle cx={32} cy={22} r={12} />
        </g>
      </g>
    </svg>
  );
};

export default UserIcon;
