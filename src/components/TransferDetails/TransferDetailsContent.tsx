import React, { ReactNode } from 'react';

interface TransferDetailsContentProps {
  children?: ReactNode;
  className?: string;
}

const TransferDetailsContent: React.FC<TransferDetailsContentProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={`rounded-[6px] bg-white p-[20px] pt-[26px] md:bg-brand-blue md:bg-opacity-[0.03] md:p-[32px] ${className}`}
    >
      {children}
    </div>
  );
};

export default TransferDetailsContent;
