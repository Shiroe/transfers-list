import React from 'react';
import Image from 'next/image';

import logoSvg from 'public/logo.svg';
// import liveSvg from 'public/live.svg';
import scheduledSvg from 'public/scheduled.svg';
import statisticsSvg from 'public/statistics.svg';
import revenueSvg from 'public/revenue.svg';
import settingsSvg from 'public/settings.svg';

import LiveIcon from '@/assets/Icons/LiveIcon';

const SideNav = () => {
  return (
    <aside
      className={`
          absolute top-0 bottom-0 left-0 flex w-[82px] flex-col 
          justify-between rounded-r-[8px] bg-white p-[17px] shadow transition-[width] ease-in hover:w-[200px]
        `}
    >
      <div className="overflow-hidden">
        <div className="mb-[38px]">
          <Image
            src={logoSvg}
            className="h-[48px] w-[48px] bg-transparent object-contain"
            alt="logo image"
          />
        </div>
        <div className="mb-[15px] flex h-[44px] w-[44px] items-center justify-center">
          <LiveIcon size={32} />
          {/* <span>Live Icon</span> */}
        </div>
        <div className="mb-[15px] flex h-[44px] w-[44px] items-center justify-center rounded-[8px] bg-brand-green">
          <Image
            src={scheduledSvg}
            className="h-[25px] w-[25px] object-contain"
            alt="logo image"
          />
        </div>
        <div className="mb-[15px] flex h-[44px] w-[44px] items-center justify-center">
          <Image
            src={statisticsSvg}
            className="h-[32px] w-[32px] bg-transparent object-contain"
            alt="logo image"
          />
        </div>
        <div className="mb-[15px] flex h-[44px] w-[44px] items-center justify-center">
          <Image
            src={revenueSvg}
            className="h-[32px] w-[32px] bg-transparent object-contain"
            alt="logo image"
          />
        </div>
        <div className="mb-[15px] flex h-[44px] w-[44px] items-center justify-center">
          <Image
            src={settingsSvg}
            className="h-[32px] w-[32px] bg-transparent object-contain"
            alt="logo image"
          />
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
