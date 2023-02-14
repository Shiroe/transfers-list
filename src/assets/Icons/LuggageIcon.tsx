import React from 'react';
import { IIcon } from '.';

const LuggageIcon = ({ size = 20 }: IIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Luggage.Icon">
        <path
          id="Fill"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 7H7V16H13V7ZM15 7V16H16C16.5523 16 17 15.5523 17 15V8C17 7.44772 16.5523 7 16 7H15ZM5 7H4C3.44772 7 3 7.44772 3 8V15C3 15.5523 3.44772 16 4 16H5V7ZM6 5V4C6 2.89543 6.89543 2 8 2H12C13.1046 2 14 2.89543 14 4V5H16C17.6569 5 19 6.34315 19 8V15C19 16.6569 17.6569 18 16 18H4C2.34315 18 1 16.6569 1 15V8C1 6.34315 2.34315 5 4 5H6ZM8 5H12V4H8V5Z"
          fill="#2D3B4E"
          fillOpacity="0.5"
        />
      </g>
    </svg>
  );
};

export default LuggageIcon;
