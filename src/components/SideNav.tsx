import React from 'react';
import Image from 'next/image';

import logoSvg from 'public/logo.svg';

import LiveIcon from '@/assets/Icons/LiveIcon';
import ScheduledIcon from '@/assets/Icons/ScheduledIcon';
import StatisticsIcon from '@/assets/Icons/StatisticsIcon';
import RevenueIcon from '@/assets/Icons/RevenueIcon';
import SettingsIcon from '@/assets/Icons/SettingsIcon';

const SideNav = () => {
  return (
    <aside
      className={`
          absolute top-0 bottom-0 left-0 flex w-[82px] flex-col 
          justify-between rounded-r-[8px] bg-white p-[17px] shadow
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
        <LiveIcon />
        <ScheduledIcon size={26} />
        <StatisticsIcon />
        <RevenueIcon />
        <SettingsIcon />
      </div>
    </aside>
  );
};

export default SideNav;
