import React from "react";

export const ButtonArrow = () => {
  return (
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
      >
        <circle
          cx="25"
          cy="25"
          r="24.5"
          transform="rotate(-90 25 25)"
          stroke="#767676"
        />
        <path
          d="M18 25C18.9474 25 28.3947 25 33 25M33 25L28.2632 20M33 25L28.2632 30"
          stroke="#767676"
        />
      </svg>
    </button>
  );
};
