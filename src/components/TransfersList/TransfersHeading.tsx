import React from 'react';

const TransfersHeading = () => {
  return (
    <div
      className={`mb-[12px] flex h-[34px] items-center rounded-[8px] bg-brand-blue bg-opacity-[0.04] px-[15px] pb-[11px] pt-[10px]`}
    >
      <span className="mr-[10px] w-[5%] text-xs font-semibold text-brand-blue text-opacity-50">
        STATUS
      </span>
      <span className="mr-[10px] w-[16%] text-xs font-semibold text-brand-blue text-opacity-50">
        TRAVELER
      </span>
      <span className="mr-[10px] w-[17.5%] text-xs font-semibold text-brand-blue text-opacity-50">
        ARRIVAL/DEPARTURE
      </span>
      <span className="mr-[10px] w-[17.5%] text-xs font-semibold text-brand-blue text-opacity-50">
        FROM/TO
      </span>
      <span className="flex w-[19%] items-center text-xs font-semibold text-brand-blue text-opacity-50">
        OPPORTUNITIES
        <span className="ml-[5px] flex h-[20px] items-center justify-center rounded-[2px] bg-brand-yellow px-[3px] text-xxs font-bold text-white shadow shadow-brand-yellow">
          NEW
        </span>
      </span>
    </div>
  );
};

export default TransfersHeading;
