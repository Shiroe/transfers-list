import React, { ReactNode } from 'react';

interface RowHeading {
  children: ReactNode;
  className?: string;
}

const TransferRowHeading = ({ children, className, ...props }: RowHeading) => {
  return (
    <h3
      {...props}
      className={`my-[12px] text-brand-blue text-opacity-50 ${className}`}
    >
      {children}
    </h3>
  );
};

export default TransferRowHeading;
