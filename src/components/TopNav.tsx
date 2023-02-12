import React from 'react';
import Image from 'next/image';

import profileSvg from 'public/profile.svg';
import logoutSvg from 'public/logout.svg';

const TopNav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex h-[71px] items-center justify-end bg-white pt-[13px] pb-[14px] pr-[19px] pl-[101px] shadow">
      <div className="mr-[9px] flex h-[44px] w-[44px] items-center justify-center">
        <Image
          className={`h-[17px] w-auto bg-transparent object-contain`}
          src={profileSvg}
          alt={'profile'}
        />
      </div>
      <div className="flex h-[44px] w-[44px] items-center justify-center">
        <Image
          className={`h-[17px] w-[17px] bg-transparent object-contain`}
          src={logoutSvg}
          alt={'profile'}
        />
      </div>
    </nav>
  );
};

export default TopNav;
