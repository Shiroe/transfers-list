import React, { ReactNode } from 'react';

import TopNav from '@/components/TopNav';
import SideNav from '@/components/SideNav';

type LayoutProps = {
  className?: string;
  children?: ReactNode;
};

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <main className={`relative min-h-screen bg-brand-gray ${className}`}>
      <TopNav />
      <SideNav />
      {children}
    </main>
  );
};

export default Layout;
