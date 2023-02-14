import React from 'react';
import { IIcon } from '.';

const FullCircleIcon = ({ size = 10 }: IIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10ZM5 8C3.34315 8 2 6.65685 2 5C2 3.34315 3.34315 2 5 2C6.65685 2 8 3.34315 8 5C8 6.65685 6.65685 8 5 8Z"
        fill="#48D9A4"
      />
    </svg>
  );
};

export default FullCircleIcon;
