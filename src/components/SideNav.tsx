import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import logoSvg from 'public/logo.svg';

import LiveIcon from '@/assets/Icons/LiveIcon';
import ScheduledIcon from '@/assets/Icons/ScheduledIcon';
import StatisticsIcon from '@/assets/Icons/StatisticsIcon';
import RevenueIcon from '@/assets/Icons/RevenueIcon';
import SettingsIcon from '@/assets/Icons/SettingsIcon';

const SideNav = () => {
  const router = useRouter();
  return (
    <aside
      className={`
          fixed top-0 bottom-0 left-0 flex w-[82px] flex-col 
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
        <LiveIcon isActive={router.pathname === '/live'} />
        <ScheduledIcon isActive={router.pathname === '/'} size={26} />
        <StatisticsIcon isActive={router.pathname === '/statistics'} />
        <RevenueIcon isActive={router.pathname === '/revenue'} />
        <SettingsIcon isActive={router.pathname === '/settings'} />
      </div>
    </aside>
  );
};

export default SideNav;
