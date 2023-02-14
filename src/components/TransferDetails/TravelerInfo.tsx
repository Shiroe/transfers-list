import React, { ReactNode } from 'react';
import Image from 'next/image';

import SunIcon from '@/assets/Icons/SunIcon';
import MoonIcon from '@/assets/Icons/MoonIcon';
import ReturnTransferIcon from '@/assets/Icons/ReturnTransferIcon';
import BabyIcon from '@/assets/Icons/BabyIcon';

interface TravelerInfoProps {
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
    <div className="flex h-full w-[25.8%] flex-col items-center justify-start border-r border-r-brand-blue border-opacity-[0.08] px-[36px] py-[22px]">
      {photo && (
        <Image
          src={photo}
          width={83}
          height={83}
          alt="Traveler Photo"
          className="mt-[31px] mb-[16px] h-[83px] w-[83px] rounded-full object-cover"
        />
      )}
      <h4 className="whitespace-pre-wrap text-center text-lg font-semibold text-brand-blue">
        {firstName}
        <br />
        {lastName}
      </h4>
      <div className="my-[27px] h-[1px] w-full bg-brand-blue bg-opacity-[0.08]"></div>
      <SideInfo label={'Phone number'} value={telephone} />
      <SideInfo label={'Email'} value={email} />
      <SideInfo label={'Coming from'} value={country} />
      <SideInfo
        label={'Opportunities'}
        value={
          <>
            {babies && (
              <div className="mb-[10px] flex h-[34px] w-[34px] items-center justify-center rounded-full bg-brand-gray">
                <BabyIcon size={24} />
              </div>
            )}
            {earlyCheckin && (
              <div className="mb-[10px] flex h-[34px] w-[34px] items-center justify-center rounded-full bg-brand-gray">
                <SunIcon size={24} />
              </div>
            )}
            {lateCheckout && (
              <div className="mb-[10px] flex h-[34px] w-[34px] items-center justify-center rounded-full bg-brand-gray">
                <MoonIcon size={24} />
              </div>
            )}
            {returnTransfer && (
              <div className="mb-[10px] flex h-[34px] w-[34px] items-center justify-center rounded-full bg-brand-gray">
                <ReturnTransferIcon size={24} />
              </div>
            )}
            {!opportunityExists && (
              <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full border-[3px] border-brand-gray">
                <div className="h-[2px] w-[6px] bg-brand-gray-dark"></div>
              </div>
            )}
          </>
        }
      />
    </div>
  );
};

export default TravelerInfo;

interface SideInfoProps {
  label: string;
  value?: ReactNode;
}

const SideInfo: React.FC<SideInfoProps> = ({ label, value = '' }) => {
  return (
    <div className="mb-[32px] flex w-full flex-col">
      <span className="mb-[5px] block text-sm font-semibold text-brand-blue text-opacity-50">
        {label}
      </span>
      <span className="text-regular text-brand-blue">{value}</span>
    </div>
  );
};
