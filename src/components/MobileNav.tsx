import React, { useState } from 'react';

import MobileSideNav from './MobileSideMenu';

import MenuIcon from '@/assets/Icons/MenuIcon';
import SearchIcon from '@/assets/Icons/SearchIcon';

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
      <MobileSideNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default MobileNav;
