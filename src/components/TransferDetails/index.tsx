import React, { ReactNode } from 'react';
import dayjs from 'dayjs';

import { ITransfer, ITransferDetails } from '@/models/Transfer';

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
      className="relative flex h-[87%] w-[82.5%] items-center justify-center rounded-[8px] bg-white shadow-md"
    >
      {children}
      <TravelerInfo
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
      <div className="relative h-full w-[74%] p-[38px]">
        <div
          onClick={onClose}
          className="absolute top-[22px] right-[22px] flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full bg-brand-blue bg-opacity-5"
        >
          <CloseIcon size={20} />
        </div>
        <h3 className="mt-[5px] mb-[18px] text-title font-semibold text-brand-blue">
          Transfers
        </h3>
        <TransferDetailsContent>
          <h4 className="mb-[7px] text-lg-extra font-semibold text-brand-blue">
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
            <div>
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
          </DetailsHighlight>
          {transfer?.flight_status && (
            <DetailsHighlight>
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
      className={`flex w-[285px] rounded-[18px] bg-brand-blue bg-opacity-[0.04] px-[19px] py-[8px] ${className}`}
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
      className={`rounded-[6px] bg-brand-blue bg-opacity-[0.03] p-[32px] pt-[26px] ${className}`}
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
        className={`flex w-[250px] items-center justify-between text-md text-brand-blue`}
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
