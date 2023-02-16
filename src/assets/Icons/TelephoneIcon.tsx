import React from 'react';
import { IIcon } from '.';

const TelephoneIcon = ({ size = 20 }: IIcon) => {
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
        d="M12.048 12.1286C12.5217 11.7243 13.1775 11.5951 13.7592 11.7946C14.5409 12.0528 15.3767 12.1875 16.2222 12.1875C17.2023 12.1875 18 12.9852 18 13.9652V16.2222C18 17.2023 17.2023 18 16.2222 18C8.3666 18 2 11.6334 2 3.77778C2 2.79772 2.79772 2 3.77778 2H6.13923C7.11929 2 7.917 2.79772 7.917 3.77778C7.917 4.62809 8.05068 5.45621 8.31433 6.25462C8.50691 6.86736 8.36086 7.5348 7.91552 8.01092L6.03571 10.321C6.90341 11.8369 7.92753 12.8485 9.47064 13.7204L12.048 12.1286ZM16 15.998V14.185C15.0628 14.1641 14.1366 14.011 13.2508 13.7319C13.2272 13.7495 13.2028 13.7661 13.1777 13.7816L11.2741 14.9573C12.723 15.5994 14.3201 15.9681 16 15.998ZM6.36995 6.74155C6.09264 5.86184 5.94019 4.94115 5.91945 4H4.00198C4.03034 5.5911 4.36261 7.10791 4.94322 8.49487L6.36995 6.74155Z"
        fill="#2D3B4E"
      />
    </svg>
  );
};

export default TelephoneIcon;