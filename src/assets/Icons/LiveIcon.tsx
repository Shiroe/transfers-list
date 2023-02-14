import React, { useState } from 'react';
import { NavItemIcon } from '.';

const LiveIcon = ({
  color = '#2D3B4E',
  size = 32,
  isActive = false,
}: NavItemIcon) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className={`mb-[15px] flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-[8px] transition-colors duration-150 ease-in-out ${
        isActive ? 'bg-brand-green-dim' : ''
      } hover:bg-brand-green`}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className="transition-colors duration-150 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24ZM9.21913 16.3753L11.9194 13H10C9.16149 13 8.69532 12.0301 9.21913 11.3753L13.2191 6.37531C13.5641 5.94404 14.1934 5.87412 14.6247 6.21913C15.056 6.56414 15.1259 7.19343 14.7809 7.6247L12.0806 11H14C14.8385 11 15.3047 11.9699 14.7809 12.6247L10.7809 17.6247C10.4359 18.056 9.80657 18.1259 9.37531 17.7809C8.94404 17.4359 8.87412 16.8066 9.21913 16.3753ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
          fill={isHovered || isActive ? '#fff' : color}
          fillOpacity={isHovered || isActive ? '1' : '0.5'}
        />
      </svg>
    </div>
  );
};

export default LiveIcon;
