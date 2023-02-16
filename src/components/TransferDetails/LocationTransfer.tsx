import React from 'react';
import dayjs from 'dayjs';

interface LocationTransferProps {
  title?: string;
  datetime?: string;
  address?: string;
  className?: string;
}

const LocationTransfer: React.FC<LocationTransferProps> = ({
  title,
  datetime,
  address,
  className,
}) => {
  return (
    <div className={className}>
      <div
        className={`flex items-center justify-between text-mobile-md text-brand-blue md:w-[250px] md:text-md-extra`}
      >
        {title}
        <span className="text-regular-extra font-semibold text-brand-blue text-opacity-50">
          {dayjs(datetime).format('HH:mm')}
        </span>
      </div>
      <div className="text-sm-extra text-brand-blue text-opacity-50">
        {address}
      </div>
    </div>
  );
};

export default LocationTransfer;
