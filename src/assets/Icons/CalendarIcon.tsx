import React from 'react';
import { IIcon } from '.';

const CalendarIcon = ({ size = 14 }: IIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6H12V4H2V6ZM2 12H12V8H2V12ZM11 2H13C14 2 14 3 14 3V13.0278C14 13.5649 13.5649 14 13.0278 14H0.972222C0.435069 14 0 13.5649 0 13.0278V3C0 3 0 2 1 2H3V1C3 0 4 0 4 0C4 0 5 0 5 1V2H9V1C9 1 9 0 10 0C11 0 11 1 11 1V2Z"
        fill="#2D3B4E"
        fillOpacity="0.4"
      />
    </svg>
  );
};

export default CalendarIcon;
