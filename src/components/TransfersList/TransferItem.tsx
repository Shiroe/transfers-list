import React from 'react';
import Image from 'next/image';
import { ITransfer } from '@/models/Transfer';
import dayjs from 'dayjs';

import ArrivalIcon from '@/assets/Icons/ArrivalIcon';
import DepartureIcon from '@/assets/Icons/DepartureIcon';
import InCityIcon from '@/assets/Icons/InCityIcon';
import BabyIcon from '@/assets/Icons/BabyIcon';
import ReturnTransferIcon from '@/assets/Icons/ReturnTransferIcon';
import SunIcon from '@/assets/Icons/SunIcon';
import MoonIcon from '@/assets/Icons/MoonIcon';

interface CompoundProps {
  children?: React.ReactNode;
  className?: string;
}

interface ITransferItem extends CompoundProps, ITransfer {
  onClick?: () => void;
}

const TransferItem = ({
  id,
  datetime,
  category,
  traveler_photo,
  traveler_first_name,
  traveler_last_name,
  location_title,
  babies,
  early_checkin,
  late_checkout,
  return_transfer,
  className,
  onClick,
}: ITransferItem) => {
  const opportunityExists =
    babies || early_checkin || late_checkout || return_transfer;
  return (
    <div
      key={id}
      onClick={onClick}
      className={`flex items-center rounded-[6px] bg-white py-[9px] px-[15px] text-regular text-brand-blue shadow-sm ${className}`}
    >
      <Status className="mr-[10px] w-[5%]">
        {category === 'Arrival' ? (
          <ArrivalIcon size={38} />
        ) : category === 'Departure' ? (
          <DepartureIcon size={38} />
        ) : (
          <InCityIcon size={38} />
        )}
      </Status>
      <Avatar className="mr-[10px] flex w-[16%] items-center justify-start">
        <div className="mr-[13px] min-h-[38px] min-w-[38px]">
          <Image
            src={traveler_photo}
            width={38}
            height={38}
            alt="traveler photo"
            className="h-[38px] w-[38px] rounded-full object-cover"
          />
        </div>
        <span className="overflow-hidden text-ellipsis whitespace-nowrap">
          {traveler_first_name} {traveler_last_name}
        </span>
      </Avatar>
      <DateTime className="mr-[10px] w-[17.5%] ">
        {dayjs(datetime).format('ddd, D MMM HH:mm')}
      </DateTime>
      <LocationTitle className="mr-[10px] w-[17.5%] overflow-hidden text-ellipsis whitespace-nowrap">
        {location_title}
      </LocationTitle>
      <TransferOpportunities className="flex w-[19%] items-center gap-3">
        {babies && (
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-brand-gray">
            <BabyIcon size={24} />
          </div>
        )}
        {early_checkin && (
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-brand-gray">
            <SunIcon size={24} />
          </div>
        )}
        {late_checkout && (
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-brand-gray">
            <MoonIcon size={24} />
          </div>
        )}
        {return_transfer && (
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-brand-gray">
            <ReturnTransferIcon size={24} />
          </div>
        )}
        {!opportunityExists && (
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full border-[3px] border-brand-gray">
            <div className="h-[2px] w-[6px] bg-brand-gray-dark"></div>
          </div>
        )}
      </TransferOpportunities>
    </div>
  );
};

export default TransferItem;

const Status: React.FC<CompoundProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

const Avatar: React.FC<CompoundProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

const DateTime: React.FC<CompoundProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

const LocationTitle: React.FC<CompoundProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

const TransferOpportunities: React.FC<CompoundProps> = ({
  children,
  ...props
}) => {
  return <div {...props}>{children}</div>;
};
