import React from 'react';
import { IIcon } from '.';

const TakeOffIcon = ({ size = 20 }: IIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Takeoff_Icon.20">
        <path
          id="Fill"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 16H18C18.5523 16 19 16.4477 19 17C19 17.5523 18.5523 18 18 18H2C1.44772 18 1 17.5523 1 17C1 16.4477 1.44772 16 2 16ZM18.9556 7.40648C19.142 8.11903 18.7249 8.84939 18.0059 9.05425L4.13449 12.7758C3.64181 12.908 3.12185 12.6921 2.86763 12.2499L1 9.00081L2.28698 8.65344L4.03551 10.0251L8.44676 8.84049L4.77219 2.45425L6.48522 2L12.6095 7.72713L17.3225 6.46235C18.0326 6.2664 18.7693 6.69393 18.9556 7.40648Z"
          fill="#2D3B4E"
          fillOpacity="0.5"
        />
      </g>
    </svg>
  );
};

export default TakeOffIcon;
