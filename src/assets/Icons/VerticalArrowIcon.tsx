import React from 'react';
import { IIcon } from '.';

const VerticalArrowIcon = ({ size }: IIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.2235 14.831C13.6214 15.2416 13.5856 15.8738 13.1435 16.2433C12.7014 16.6128 12.0205 16.5795 11.6226 16.169L6.77645 11.169C6.40785 10.7887 6.40785 10.2113 6.77645 9.83104L11.6226 4.83104C12.0205 4.42053 12.7014 4.38726 13.1435 4.75671C13.5856 5.12617 13.6214 5.75846 13.2235 6.16897L9.02577 10.5L13.2235 14.831Z"
        fill="#2D3B4E"
        fillOpacity="0.5"
      />
    </svg>
  );
};

export default VerticalArrowIcon;
