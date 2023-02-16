import React, { ReactNode } from 'react';

interface DetailsHighlightProps {
  children: ReactNode;
  className?: string;
}

const DetailsHighlight: React.FC<DetailsHighlightProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`relative flex rounded-[18px] border-2 border-brand-blue
        border-opacity-[0.04] px-[19px] py-[8px] md:w-[285px] md:border-none
        md:bg-brand-blue md:bg-opacity-[0.04] ${className}
      `}
    >
      {children}
    </div>
  );
};

export default DetailsHighlight;
