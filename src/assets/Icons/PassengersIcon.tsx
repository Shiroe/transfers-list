import React from 'react';
import { IIcon } from '.';

const PassengersIcon = ({ size = 20 }: IIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Passengers.Icon">
        <path
          id="Fill"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.22847 8.90737C3.08031 8.4435 3 7.94535 3 7.42857C3 5.00987 4.75857 3 7 3C9.24113 3 11 5.01002 11 7.42857C11 7.94534 10.9197 8.44348 10.7715 8.90735C12.0761 9.34289 13 10.6054 13 12.0742V14.6606C13 16.4932 11.569 18 9.77778 18H4.22222C2.43105 18 1 16.4932 1 14.6606V12.0742C1 10.6054 1.92391 9.34292 3.22847 8.90737ZM4.27193 10.6706C4.10795 10.7222 3.94889 10.7756 3.79561 10.8296C3.33319 11.0173 3 11.499 3 12.0742V14.6606C3 15.4111 3.55933 16 4.22222 16H9.77778C10.4407 16 11 15.4111 11 14.6606V12.0742C11 11.499 10.6667 11.0172 10.2043 10.8296C10.0453 10.7777 9.88464 10.7262 9.72221 10.6765C9.01294 11.407 8.06044 11.8571 7 11.8571C5.93656 11.8571 4.98177 11.4046 4.27193 10.6706ZM7 5C5.92697 5 5 6.05943 5 7.42857C5 8.79744 5.92712 9.85714 7 9.85714C8.07262 9.85714 9 8.79726 9 7.42857C9 6.05962 8.07277 5 7 5ZM13.73 16C13.9038 15.5892 14 15.1359 14 14.6606V14H15.7778C16.4407 14 17 13.4111 17 12.6606V10.0742C17 9.49895 16.6095 9.10999 16.2043 8.82957C16.1137 8.7669 15.9612 8.69872 15.7661 8.63063C15.2359 9.19342 14.5642 9.59698 13.8099 9.76726C13.628 9.0892 13.3232 8.39717 12.9297 7.85562C12.953 7.85663 12.9765 7.85714 13 7.85714C14.0726 7.85714 15 6.79726 15 5.42857C15 4.05962 14.0728 3 13 3C12.3386 3 11.7327 3.40248 11.3652 4.03189C11.0117 3.42294 10.5266 2.91458 9.95127 2.55865C10.6797 1.60844 11.7668 1 13 1C15.2411 1 17 3.01002 17 5.42857C17 5.94534 16.9197 6.44348 16.7715 6.90735C18.0761 7.34289 19 8.60536 19 10.0742V12.6606C19 14.4932 17.569 16 15.7778 16H13.73Z"
          fill="#2D3B4E"
          fillOpacity="0.5"
        />
      </g>
    </svg>
  );
};

export default PassengersIcon;