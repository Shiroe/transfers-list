import React, { useState } from 'react';
import { NavItemIcon } from '.';

const ScheduledIcon = ({
  color = '#2D3B4E',
  size = 32,
  isActive = false,
  className,
}: NavItemIcon) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className={`flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[8px] md:h-[44px] md:w-[44px] ${
        isActive ? 'bg-brand-green-dim' : ''
      } transition-colors duration-150 ease-in-out hover:bg-brand-green ${className}`}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 3V1C18 0.447715 18.4477 0 19 0C19.5523 0 20 0.447715 20 1V3H21C22.6569 3 24 4.34315 24 6V13C24 13.5523 23.5523 14 23 14C22.4477 14 22 13.5523 22 13V6C22 5.44772 21.5523 5 21 5H20V6C20 6.55228 19.5523 7 19 7C18.4477 7 18 6.55228 18 6V5H13V6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6V5H6V6C6 6.55228 5.55228 7 5 7C4.44772 7 4 6.55228 4 6V5H3C2.44772 5 2 5.44772 2 6V22C2 22.5523 2.44772 23 3 23H13.4583C14.0106 23 14.4583 23.4477 14.4583 24C14.4583 24.5523 14.0106 25 13.4583 25H3C1.34315 25 0 23.6569 0 22V6C0 4.34315 1.34315 3 3 3H4V1C4 0.447715 4.44772 0 5 0C5.55228 0 6 0.447715 6 1V3H11V1C11 0.447715 11.4477 0 12 0C12.5523 0 13 0.447715 13 1V3H18ZM21 26C18.2386 26 16 23.7614 16 21C16 18.2386 18.2386 16 21 16C23.7614 16 26 18.2386 26 21C26 23.7614 23.7614 26 21 26ZM24 21C24 22.6569 22.6569 24 21 24C19.3431 24 18 22.6569 18 21C18 19.3431 19.3431 18 21 18C22.6569 18 24 19.3431 24 21ZM22 20C22.5523 20 23 20.4477 23 21C23 21.5523 22.5523 22 22 22H21C20.4477 22 20 21.5523 20 21V20C20 19.4477 20.4477 19 21 19C21.5523 19 22 19.4477 22 20ZM4 11.5C4 12.3284 4.67157 13 5.5 13C6.32843 13 7 12.3284 7 11.5C7 10.6716 6.32843 10 5.5 10C4.67157 10 4 10.6716 4 11.5ZM11.5 13C10.6716 13 10 12.3284 10 11.5C10 10.6716 10.6716 10 11.5 10C12.3284 10 13 10.6716 13 11.5C13 12.3284 12.3284 13 11.5 13ZM4 17.5C4 18.3284 4.67157 19 5.5 19C6.32843 19 7 18.3284 7 17.5C7 16.6716 6.32843 16 5.5 16C4.67157 16 4 16.6716 4 17.5ZM11.5 19C10.6716 19 10 18.3284 10 17.5C10 16.6716 10.6716 16 11.5 16C12.3284 16 13 16.6716 13 17.5C13 18.3284 12.3284 19 11.5 19ZM16 11.5C16 12.3284 16.6716 13 17.5 13C18.3284 13 19 12.3284 19 11.5C19 10.6716 18.3284 10 17.5 10C16.6716 10 16 10.6716 16 11.5Z"
          fill={isHovered || isActive ? '#fff' : color}
          fillOpacity={isHovered || isActive ? '1' : '0.5'}
        />
      </svg>
    </div>
  );
};

export default ScheduledIcon;
