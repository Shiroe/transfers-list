import React, { ReactNode, useState } from 'react';

import MenuIcon from '@/assets/Icons/MenuIcon';
import SearchIcon from '@/assets/Icons/SearchIcon';
import CloseIcon from '@/assets/Icons/CloseIcon';
import BrandLogoIcon from '@/assets/Icons/BrandLogoIcon';

import LiveIcon from '@/assets/Icons/LiveIcon';
import ScheduledIcon from '@/assets/Icons/ScheduledIcon';
import StatisticsIcon from '@/assets/Icons/StatisticsIcon';
import SettingsIcon from '@/assets/Icons/SettingsIcon';
import RevenueIcon from '@/assets/Icons/RevenueIcon';

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 flex h-[64px] items-center justify-between rounded-b-[8px] bg-white p-[20px] md:hidden`}
      >
        <div onClick={() => setIsMenuOpen(true)} className="h-[20px] w-[20px]">
          <MenuIcon size={19} />
        </div>
        <h1 className="text-title-sm font-semibold text-brand-blue">
          Transfer list
        </h1>
        <div className="h-[20px] w-[20px]">
          <SearchIcon size={16} />
        </div>
      </nav>
      <aside
        className={`fixed top-0 bottom-0 left-0 w-full bg-opacity-95  pr-[20px] transition-all delay-75 duration-300 ease-linear md:hidden ${
          isMenuOpen
            ? 'bg-brand-blue bg-opacity-20'
            : '-translate-x-full bg-transparent'
        }`}
      >
        <div className="flex h-full flex-col overflow-hidden rounded-r-[12px] bg-white shadow-lg">
          <div className="flex items-center justify-between rounded-r-[12px] bg-brand-gray p-[20px]">
            <div className="flex items-center justify-start">
              <BrandLogoIcon size={44} />
              <div className="ml-[20px] flex flex-col items-start justify-between">
                <h3 className="text-title font-semibold text-brand-blue">
                  Welcome
                </h3>
                <p className="text-xxs font-semibold text-brand-blue">
                  FOR PARTNERS
                </p>
              </div>
            </div>
            <div
              onClick={() => setIsMenuOpen(false)}
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-brand-blue bg-opacity-10 p-[10px]"
            >
              <div className="border border-dashed border-brand-blue border-opacity-50">
                <CloseIcon size={20} />
              </div>
            </div>
          </div>
          <div className="items-between flex flex-grow flex-col justify-between p-[20px]">
            <ul>
              <NavItem className="mb-[26px]" label="Live view">
                <LiveIcon size={24} />
              </NavItem>
              <NavItem className="mb-[26px]" label="Scheduled">
                <ScheduledIcon size={24} />
              </NavItem>
              <NavItem className="mb-[26px]" label="Statistics">
                <StatisticsIcon size={24} />
              </NavItem>
              <NavItem className="mb-[26px]" label="Revenue">
                <RevenueIcon size={24} />
              </NavItem>
              <NavItem className="mb-[21px]" label="Settings">
                <SettingsIcon size={24} />
              </NavItem>
              <hr />
            </ul>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="h-[56px] rounded-[4px] bg-brand-gray font-semibold text-brand-blue"
            >
              Log out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default MobileNav;

interface NavItemProps {
  children?: ReactNode;
  label?: string;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({
  children,
  className = '',
  label = '',
}) => {
  return (
    <li className={`mb-[21px] flex items-center ${className}`}>
      {children}
      {label && (
        <span className="ml-[20px] text-md font-semibold text-brand-blue text-opacity-50">
          {label}
        </span>
      )}
    </li>
  );
};
