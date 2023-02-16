import React, { ReactNode } from 'react';
import dayjs from 'dayjs';

import { ITransfer, ITransferDetails } from '@/models/Transfer';

import VerticalArrowIcon from '@/assets/Icons/VerticalArrowIcon';
import CloseIcon from '@/assets/Icons/CloseIcon';
import TransferIcon from '@/assets/Icons/TransferIcon';
import FullCircleIcon from '@/assets/Icons/FullCircleIcon';
import PassengersIcon from '@/assets/Icons/PassengersIcon';
import SeatIcon from '@/assets/Icons/SeatIcon';
import LuggageIcon from '@/assets/Icons/LuggageIcon';
import HandLuggageIcon from '@/assets/Icons/HandLuggageIcon';
import TakeOffIcon from '@/assets/Icons/TakeOffIcon';
import ClockIcon from '@/assets/Icons/ClockIcon';

import TravelerInfo from './TravelerInfo';

interface TransferDetailsProps {
  transfer: (ITransfer & ITransferDetails) | null;
  className?: string;
  onClose: () => void;
  children?: ReactNode;
}

const TransferDetails: React.FC<TransferDetailsProps> = ({
  onClose,
  transfer,
  children,
}) => {
  return (
    <div
      onClick={(ev) => ev.stopPropagation()}
      className={`relative mt-[15px] flex h-full max-h-[98%] w-full
        flex-col items-center justify-start overflow-y-scroll rounded-t-[12px]
        bg-white pt-[60px] shadow-md md:mt-[0px] md:h-[87%] md:w-[82.5%] md:flex-row
        md:justify-center md:overflow-y-auto md:rounded-[8px] md:pt-0
      `}
    >
      {children}
      <div className="fixed top-[2%] left-0 right-0 z-50 h-[60px] overflow-hidden rounded-t-[12px] bg-brand-gray md:hidden">
        <div className="flex h-full w-full items-center justify-between bg-brand-blue bg-opacity-[0.03] px-[20px] py-[15px]">
          <p className="text-regular-extra font-semibold text-brand-blue text-opacity-50">{`${transfer?.traveler_first_name}'s trip`}</p>
          <div
            onClick={onClose}
            className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-brand-blue bg-opacity-5"
          >
            <CloseIcon />
          </div>
        </div>
      </div>
      <TravelerInfo
        className="order-2 md:order-1"
        info={{
          photo: transfer?.traveler_photo,
          firstName: transfer?.traveler_first_name,
          lastName: transfer?.traveler_last_name,
          telephone: transfer?.traveler.phone_number,
          email: transfer?.traveler.email,
          country: transfer?.traveler.country,
          babies: transfer?.babies,
          earlyCheckin: transfer?.early_checkin,
          lateCheckout: transfer?.late_checkout,
          returnTransfer: transfer?.return_transfer,
        }}
      />
      <div className="relative order-1 w-full md:order-2 md:h-full md:w-[74%] md:p-[38px]">
        <div
          onClick={onClose}
          className={`absolute top-[22px] right-[22px] hidden h-[34px] w-[34px] cursor-pointer
            items-center justify-center rounded-full bg-brand-blue
          bg-opacity-5 md:flex
          `}
        >
          <CloseIcon size={20} />
        </div>
        <h3 className="mt-[5px] mb-[18px] hidden text-title font-semibold text-brand-blue md:block">
          Transfers
        </h3>
        <TransferDetailsContent>
          <h4 className="mb-[7px] text-mobile-lg font-semibold text-brand-blue md:text-lg-extra">
            {dayjs(transfer?.datetime).format('MMMM DD')}
          </h4>
          <div className="mb-[17px] h-[2px] w-[60px] rounded-[1.5px] bg-brand-green-dim"></div>
          <div className="mb-[26px] flex justify-start">
            <div className="mr-[20px] flex flex-col items-center">
              <div className="mb-[5px] border border-dashed border-brand-blue border-opacity-50 p-[5px]">
                <FullCircleIcon size={10} />
              </div>
              <TransferIcon size={21} />
              <div className="mt-[5px] border border-dashed border-brand-blue border-opacity-50 p-[5px]">
                <FullCircleIcon size={10} />
              </div>
            </div>
            <div className="w-full md:w-[250px]">
              <LocationTransfer
                className="mb-[10px]"
                title={transfer?.from_location_title}
                datetime={transfer?.from_datetime}
                address={transfer?.from_location_address}
              />
              <LocationTransfer
                title={transfer?.to_location_title}
                datetime={transfer?.to_datetime}
                address={transfer?.to_location_address}
              />
            </div>
          </div>
          <DetailsHighlight className="mb-[11px]">
            <div className="mr-[15px] flex items-center justify-start">
              <PassengersIcon size={20} />
              <span className="ml-[9px] text-sm font-semibold text-brand-blue text-opacity-50">
                {transfer?.passengers}
              </span>
            </div>
            <div className="mr-[15px] flex items-center justify-start">
              <SeatIcon size={20} />
              <span className="ml-[9px] text-sm font-semibold text-brand-blue text-opacity-50">
                {transfer?.babyseats}
              </span>
            </div>
            <div className="mr-[15px] flex items-center justify-start">
              <LuggageIcon size={20} />
              <span className="ml-[9px] text-sm font-semibold text-brand-blue text-opacity-50">
                {transfer?.luggage}
              </span>
            </div>
            <div className="mr-[15px] flex items-center justify-start">
              <HandLuggageIcon size={20} />
              <span className="ml-[9px] text-sm font-semibold text-brand-blue text-opacity-50">
                {transfer?.hand_luggage}
              </span>
            </div>
            <div className="absolute right-0 bottom-[8px] top-[8px] mr-[15px] flex -rotate-90 items-center justify-start self-end">
              <VerticalArrowIcon size={20} />
            </div>
          </DetailsHighlight>
          {transfer?.flight_status && (
            <DetailsHighlight className="justify-between md:justify-start">
              <div className="mr-[5px] flex items-center justify-start border-r border-r-brand-blue border-opacity-[0.08] pr-[7px]">
                <TakeOffIcon size={20} />
                <span className="ml-[9px] text-regular font-semibold text-brand-blue text-opacity-50">
                  {transfer?.flight_status?.flight_number}
                </span>
              </div>
              <div className="mr-[5px] flex items-center justify-start  border-r border-r-brand-blue border-opacity-[0.08]  pr-[7px]">
                <ClockIcon size={20} />
                <span className="ml-[9px] text-regular font-semibold text-brand-blue text-opacity-50">
                  {transfer?.flight_status?.flight_time}
                </span>
              </div>
              <div className="mr-[5px] flex items-center justify-start">
                <span className="text-regular font-semibold text-brand-green">
                  {transfer?.flight_status?.flight_status}
                </span>
              </div>
            </DetailsHighlight>
          )}
        </TransferDetailsContent>
        <div className="mx-[20px] h-[1px] bg-brand-blue bg-opacity-[0.08] md:hidden"></div>
      </div>
    </div>
  );
};

export default TransferDetails;

const DetailsHighlight: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={`relative flex rounded-[18px] border-2 border-brand-blue
        border-opacity-[0.04] px-[19px] py-[8px] md:w-[285px] md:border-none
        md:bg-brand-blue md:bg-opacity-[0.04] ${className}
      `}
    >
      {children}
    </div>
  );
};

interface TransferDetailsContentProps {
  children?: ReactNode;
  className?: string;
}

const TransferDetailsContent: React.FC<TransferDetailsContentProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={`rounded-[6px] bg-white p-[20px] pt-[26px] md:bg-brand-blue md:bg-opacity-[0.03] md:p-[32px] ${className}`}
    >
      {children}
    </div>
  );
};

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
