import React from 'react';
import { IIcon } from '.';

const HalfCircleIcon = ({ size = 54 }: IIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.4299 1C28.2561 1 28.9259 1.6589 28.9259 2.4717C28.9259 3.28449 28.2561 3.9434 27.4299 3.9434C14.4855 3.9434 3.99206 14.2662 3.99206 27C3.99206 39.7338 14.4855 50.0566 27.4299 50.0566C28.2561 50.0566 28.9259 50.7155 28.9259 51.5283C28.9259 52.3411 28.2561 53 27.4299 53C12.8331 53 1 41.3594 1 27C1 12.6406 12.8331 1 27.4299 1Z"
        fill="#6AE2A6"
      />
    </svg>
  );
};

export default HalfCircleIcon;
