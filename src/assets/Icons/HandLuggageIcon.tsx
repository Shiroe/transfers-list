import React from 'react';
import { IIcon } from '.';

const HandLuggageIcon = ({ size = 20 }: IIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Hand Luggage. Icon">
        <g id="Hand luggage" opacity="0.5">
          <g id="Luggage.Hand.Icon">
            <path
              id="Combined Shape"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 4H11C12.1046 4 13 4.89543 13 6V7H14C15.6569 7 17 8.34315 17 10V13C17 14.6569 15.6569 16 14 16H6C4.34315 16 3 14.6569 3 13V10C3 8.34315 4.34315 7 6 7H7V6C7 4.89543 7.89543 4 9 4ZM6 9H9H11H14C14.5523 9 15 9.44772 15 10V13C15 13.5523 14.5523 14 14 14H6C5.44772 14 5 13.5523 5 13V10C5 9.44772 5.44772 9 6 9ZM9 7V6H11V7H9Z"
              fill="#2D3B4E"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default HandLuggageIcon;
