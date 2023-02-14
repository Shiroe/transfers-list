import React, { ReactNode } from 'react';
import Image from 'next/image';

import { ITransfer, ITransferDetails } from '@/models/Transfer';

import CloseIcon from '@/assets/Icons/CloseIcon';

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
      <div className="flex h-full w-[25.8%] flex-col items-center justify-start border-r border-r-brand-blue border-opacity-[0.08] px-[36px] py-[22px]">
        {transfer?.traveler_photo && (
          <Image
            src={transfer.traveler_photo}
            width={50}
            height={50}
            alt="Traveler Photo"
          />
        )}
      </div>
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
        <div className="rounded-[6px] bg-brand-blue bg-opacity-[0.03] p-[32px] pt-[26px]">
          {transfer?.traveler.email}
        </div>
      </div>
    </div>
  );
};

export default TransferDetails;
