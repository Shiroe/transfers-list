import React from 'react';
import { IIcon } from '.';

const ClockIcon = ({ size = 20 }: IIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Time_Icon.20">
        <path
          id="Fill"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17ZM10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19ZM11 10.0824L13.4626 12.5451C13.8531 12.9356 13.8531 13.5687 13.4626 13.9593C13.0721 14.3498 12.4389 14.3498 12.0484 13.9593L9 10.9109V5.5C9 4.94772 9.44771 4.5 10 4.5C10.5523 4.5 11 4.94772 11 5.5V10.0824Z"
          fill="#2D3B4E"
          fillOpacity="0.5"
        />
      </g>
    </svg>
  );
};

export default ClockIcon;
