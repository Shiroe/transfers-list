import React from 'react';

const TransfersHeading = () => {
  return (
    <div
      className={`mb-[12px] flex h-[34px] items-center rounded-[8px] bg-brand-blue bg-opacity-[0.04] px-[15px] pb-[11px] pt-[10px]`}
    >
      <span className="mr-[20px] w-[40px] text-xs font-semibold text-brand-blue text-opacity-50">
        STATUS
      </span>
      <span className="mr-[100px] w-[65px] text-xs font-semibold text-brand-blue text-opacity-50">
        TRAVELER
      </span>
      <span className="mr-[70px] w-[130px] text-xs font-semibold text-brand-blue text-opacity-50">
        ARRIVAL/DEPARTURE
      </span>
      <span className="mr-[40px] w-[160px] text-xs font-semibold text-brand-blue text-opacity-50">
        FROM/TO
      </span>
      <span className="mr-[5px] text-xs font-semibold text-brand-blue text-opacity-50">
        OPPORTUNITIES
      </span>
      <span className="flex h-[20px] items-center justify-center rounded-[2px] bg-brand-yellow px-[3px] text-xxs text-white shadow shadow-brand-yellow">
        NEW
      </span>
    </div>
  );
};

export default TransfersHeading;
