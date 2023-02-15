import React from 'react';
import { IIcon } from '.';

const SearchIcon = ({ size = 16 }: IIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0003 9.67099L15.6948 14.2608C16.0953 14.6523 16.1026 15.2944 15.711 15.6948C15.3195 16.0953 14.6775 16.1026 14.277 15.711L9.54818 11.0877C8.56517 11.7695 7.37153 12.169 6.08451 12.169C2.72388 12.169 0 9.44513 0 6.08451C0 2.72388 2.72388 0 6.08451 0C9.44513 0 12.169 2.72388 12.169 6.08451C12.169 7.42562 11.7352 8.66533 11.0003 9.67099ZM10.1408 6.08451C10.1408 3.84401 8.32501 2.02817 6.08451 2.02817C3.84401 2.02817 2.02817 3.84401 2.02817 6.08451C2.02817 8.32501 3.84401 10.1408 6.08451 10.1408C8.32501 10.1408 10.1408 8.32501 10.1408 6.08451Z"
        fill="#2D3B4E"
        fillOpacity="0.5"
      />
    </svg>
  );
};

export default SearchIcon;