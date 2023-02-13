import React from 'react';
import { IIcon } from '.';

const CloseIcon = ({ size = 20, color = '#2D3B4E' }: IIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 8.70695L13.879 4.82797C14.236 4.47092 14.8149 4.47092 15.172 4.82797C15.529 5.18502 15.529 5.76391 15.172 6.12096L11.293 9.99995L15.172 13.8789C15.529 14.236 15.529 14.8149 15.172 15.1719C14.8149 15.529 14.236 15.529 13.879 15.1719L10 11.2929L6.12103 15.1719C5.76397 15.529 5.18508 15.529 4.82803 15.1719C4.47098 14.8149 4.47098 14.236 4.82803 13.8789L8.70702 9.99995L4.82803 6.12096C4.47098 5.76391 4.47098 5.18502 4.82803 4.82797C5.18508 4.47092 5.76397 4.47092 6.12103 4.82797L10 8.70695Z"
        fill={color}
        fillOpacity="0.5"
      />
    </svg>
  );
};

export default CloseIcon;
