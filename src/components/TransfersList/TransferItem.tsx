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
  property_title,
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
      className={`flex flex-col items-start rounded-[6px] bg-white pl-[27px] pt-[20px] pb-[22px] pr-[20px] text-regular text-brand-blue shadow-sm md:flex-row md:items-center md:py-[9px] md:px-[15px] ${className}`}
    >
      <Status className="order-1 hidden md:mr-[10px] md:block md:w-[5%]">
        {category === 'Arrival' ? (
          <ArrivalIcon size={38} />
        ) : category === 'Departure' ? (
          <DepartureIcon size={38} />
        ) : (
          <InCityIcon size={38} />
        )}
      </Status>
      {/* Should find a better approach to serving those icons so we can have more freedom with css queries on responsiveness */}
      <Status
        className={`order-1 flex items-center rounded-[16px] py-[1px] pl-[4px] pr-[6px] md:hidden ${
          category === 'Arrival'
            ? 'bg-brand-sky'
            : category === 'Departure'
            ? 'bg-brand-pink'
            : 'bg-brand-violet'
        }`}
      >
        {category === 'Arrival' ? (
          <ArrivalIcon size={16} />
        ) : category === 'Departure' ? (
          <DepartureIcon size={16} />
        ) : (
          <InCityIcon size={16} />
        )}
        <span className="ml-[2px] text-xxs text-white">{category}</span>
      </Status>
      <Avatar className="order-2 -mt-[30px] flex w-full flex-row-reverse items-baseline justify-between md:mr-[10px] md:mt-[unset] md:w-[16%] md:flex-row md:items-center md:justify-start">
        <div className="min-h-[38px] min-w-[38px] md:mr-[13px]">
          <Image
            src={traveler_photo}
            width={38}
            height={38}
            alt="traveler photo"
            className="h-[55px] w-[55px] translate-y-[10px] rounded-full object-cover md:h-[38px] md:w-[38px] md:translate-y-[unset]"
          />
        </div>
        <div className="overflow-hidden -text-ellipsis whitespace-nowrap text-mobile-lg font-semibold md:mt-[unset] md:text-regular md:font-normal">
          {traveler_first_name} {traveler_last_name}
        </div>
      </Avatar>
      {property_title && (
        <div className="order-3 mt-[20px] mb-[15px] md:hidden">
          <p className="mb-[2px] text-xxs font-semibold tracking-[1px] text-brand-blue text-opacity-50">
            PROPERTY
          </p>
          <p className="text-md text-brand-blue">{property_title}</p>
        </div>
      )}
      <DateTime className="order-3 mb-[15px] md:mb-[unset] md:mr-[10px] md:w-[17.5%]">
        <p className="mb-[2px] text-xxs font-semibold tracking-[1px] text-brand-blue text-opacity-50 md:hidden">
          ARRIVAL TIME
        </p>
        {dayjs(datetime).format('ddd, D MMM HH:mm')}
      </DateTime>
      <LocationTitle className="text-ellipsis order-4 mb-[15px] overflow-hidden whitespace-nowrap md:mb-[unset] md:mr-[10px] md:w-[17.5%]">
        <p className="mb-[2px] text-xxs font-semibold tracking-[1px] text-brand-blue text-opacity-50 md:hidden">
          FROM
        </p>
        {location_title}
      </LocationTitle>
      <TransferOpportunities className="order-5 md:w-[19%]">
        <p className="mb-[5px] block text-xxs font-semibold tracking-[1px] text-brand-blue text-opacity-50 md:hidden">
          OPPORTUNITIES
        </p>
        <div className="flex items-center gap-3">
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
        </div>
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
