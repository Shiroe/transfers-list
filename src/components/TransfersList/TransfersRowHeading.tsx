import React, { ReactNode } from 'react';
import CalendarIcon from '@/assets/Icons/CalendarIcon';

interface RowHeading {
  children: ReactNode;
  className?: string;
}

const TransferRowHeading = ({ children, className, ...props }: RowHeading) => {
  return (
    <h3
      {...props}
      className={`my-[12px] flex items-center rounded-[16px] bg-brand-blue
        bg-opacity-[0.04] px-[12px] py-[9px] text-regular text-brand-blue 
        text-opacity-50 md:rounded-none md:bg-transparent md:px-[unset] md:py-[unset]
        md:text-sm ${className}
      `}
    >
      <div className="mr-[10px] md:hidden">
        <CalendarIcon size={14} />
      </div>
      {children}
    </h3>
  );
};

export default TransferRowHeading;
