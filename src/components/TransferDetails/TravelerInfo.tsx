import React, { ReactNode } from 'react';
import Image from 'next/image';

import SunIcon from '@/assets/Icons/SunIcon';
import MoonIcon from '@/assets/Icons/MoonIcon';
import ReturnTransferIcon from '@/assets/Icons/ReturnTransferIcon';
import BabyIcon from '@/assets/Icons/BabyIcon';
import TelephoneIcon from '@/assets/Icons/TelephoneIcon';
import MessageIcon from '@/assets/Icons/MessageIcon';

interface TravelerInfoProps {
  className?: string;
  info: {
    photo?: string;
    firstName?: string;
    lastName?: string;
    telephone?: string;
    email?: string;
    country?: string;
    babies?: boolean;
    earlyCheckin?: boolean;
    lateCheckout?: boolean;
    returnTransfer?: boolean;
  };
}

const TravelerInfo: React.FC<TravelerInfoProps> = ({
  className,
  info: {
    photo,
    firstName,
    lastName,
    telephone,
    email,
    country,
    babies,
    earlyCheckin,
    lateCheckout,
    returnTransfer,
  },
}) => {
  const opportunityExists =
    babies || earlyCheckin || lateCheckout || returnTransfer;

  return (
    <div
      className={`flex w-full flex-col items-start justify-start
      border-r-brand-blue border-opacity-[0.08] px-[20px] py-[22px]
        md:h-full md:w-[25.8%] md:items-center md:border-r md:px-[36px] ${className}
      `}
    >
      <h3 className="mb-[30px] text-mobile-lg font-semibold text-brand-blue md:hidden">
        Your guest
      </h3>
      <div className="mb-[18px] flex w-full md:hidden">
        <div className="mr-[20px]">
          {photo && (
            <Image
              src={photo}
              width={83}
              height={83}
              alt="Traveler Photo"
              className="h-[61px] w-[61px] -translate-y-[10px] rounded-full object-cover md:hidden"
            />
          )}
        </div>
        <div className="flex-grow">
          <h4 className="mb-[8px] whitespace-pre-wrap text-lg font-semibold text-brand-blue">
            {firstName} {lastName}
          </h4>
          <p className="mb-[8px] text-regular font-semibold text-brand-blue text-opacity-50">
            {telephone}
          </p>
          <p className="mb-[17px] text-regular font-semibold text-brand-blue text-opacity-50">
            {country}
          </p>
          <div className="h-[1px] w-full bg-brand-blue bg-opacity-[0.04]"></div>
        </div>
      </div>
      {/* photo some of the traveler's info have distinctively different layout that cannor be just re-organized */}
      {photo && (
        <Image
          src={photo}
          width={83}
          height={83}
          alt="Traveler Photo"
          className="mb-[16px] hidden h-[61px] w-[61px] rounded-full object-cover md:mt-[31px] md:block md:h-[83px] md:w-[83px]"
        />
      )}
      <h4 className="hidden whitespace-pre-wrap text-center text-lg font-semibold text-brand-blue md:block">
        {firstName} <br className="hidden md:block" /> {lastName}
      </h4>
      <div className="my-[27px] hidden h-[1px] w-full bg-brand-blue bg-opacity-[0.08] md:block"></div>
      <SideInfo
        className="hidden md:flex"
        label={'Phone number'}
        value={telephone}
      />
      <SideInfo className="hidden md:flex" label={'Email'} value={email} />
      <SideInfo
        className="hidden md:flex"
        label={'Coming from'}
        value={country}
      />
      <SideInfo
        className=""
        label={'Opportunities'}
        value={
          <>
            {babies && (
              <div className="mb-[10px] ml-[24px] flex items-center justify-start md:ml-0">
                <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-brand-gray">
                  <BabyIcon size={24} />
                </div>
                <div className="ml-[25px] text-mobile-md font-semibold md:hidden">
                  Baby seats
                </div>
              </div>
            )}
            {earlyCheckin && (
              <div className="mb-[10px] ml-[24px] flex items-center justify-start md:ml-0">
                <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-brand-gray">
                  <SunIcon size={24} />
                </div>
                <div className="ml-[25px] text-mobile-md font-semibold md:hidden">
                  Early checkin
                </div>
              </div>
            )}
            {lateCheckout && (
              <div className="mb-[10px] ml-[24px] flex items-center justify-start md:ml-0">
                <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-brand-gray">
                  <MoonIcon size={24} />
                </div>
                <div className="ml-[25px] text-mobile-md font-semibold md:hidden">
                  Late checkout
                </div>
              </div>
            )}
            {returnTransfer && (
              <div className="mb-[10px] ml-[24px] flex items-center justify-start md:ml-0">
                <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-brand-gray">
                  <ReturnTransferIcon size={24} />
                </div>
                <div className="ml-[25px] text-mobile-md font-semibold md:hidden">
                  No return transfer
                </div>
              </div>
            )}
            {!opportunityExists && (
              <div className="ml-[24px] flex h-[34px] w-[34px] items-center justify-center rounded-full border-[3px] border-brand-gray md:ml-0">
                <div className="h-[2px] w-[6px] bg-brand-gray-dark"></div>
              </div>
            )}
          </>
        }
      />
      <div className="flex w-full items-center justify-between md:hidden">
        <button className="flex h-[48px] w-[152px] items-center justify-center rounded-[4px] bg-brand-blue bg-opacity-5 text-regular font-semibold">
          <TelephoneIcon size={16} />
          <span className="ml-[5px]">Call</span>
        </button>
        <button className="flex h-[48px] w-[152px] items-center justify-center rounded-[4px] bg-brand-blue bg-opacity-5 text-regular font-semibold">
          <MessageIcon size={16} />
          <span className="ml-[5px]">Message</span>
        </button>
      </div>
    </div>
  );
};

export default TravelerInfo;

interface SideInfoProps {
  className?: string;
  label: string;
  value?: ReactNode;
}

const SideInfo: React.FC<SideInfoProps> = ({
  label = '',
  value = '',
  className = '',
}) => {
  return (
    <div className={`mb-[32px] flex w-full flex-col ${className}`}>
      <span className="mb-[5px] ml-[80px] block text-regular font-semibold text-brand-blue text-opacity-50 md:ml-0 md:text-sm">
        {label}
      </span>
      <div className="text-regular text-brand-blue">{value}</div>
    </div>
  );
};
