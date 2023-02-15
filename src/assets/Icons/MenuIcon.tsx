import React from 'react';
import { IIcon } from '.';

const MenuIcon = ({ size = 19 }: IIcon) => {
  return (
    <svg
      width={size}
      height={size * 0.85}
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="16" height="2" rx="1" fill="#2D3B4E" />
      <rect y="7" width="19" height="2" rx="1" fill="#2D3B4E" />
      <rect y="14" width="9" height="2" rx="1" fill="#2D3B4E" />
    </svg>
  );
};

export default MenuIcon;
