import React from 'react';

import VerticalArrowIcon from '@/assets/Icons/VerticalArrowIcon';

interface PaginationProps {
  className?: string;
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  handleClick: (pageNum: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  className,
  itemsPerPage,
  totalItems,
  currentPage,
  handleClick,
}) => {
  const pages = Array(Math.ceil(totalItems / itemsPerPage)).fill(0);

  return (
    <div className={`mx-auto flex items-center ${className}`}>
      <button
        className={`mr-[14px] flex h-[38px] w-[38px] 
            items-center justify-center rounded-[4px] bg-white shadow-sm
            disabled:cursor-not-allowed
        `}
        disabled={currentPage === 1}
        onClick={() => handleClick(currentPage - 1)}
      >
        <VerticalArrowIcon size={20} />
      </button>

      {pages.map((p, i) => {
        const isFirstPage = i === 0;
        const isLastPage = i === pages.length - 1;

        return (
          <button
            key={i + 1}
            className={`flex h-[38px] w-[38px] items-center justify-center bg-white
            text-regular text-brand-blue shadow-sm transition-colors duration-150 ease-in ${
              isFirstPage ? 'rounded-l-[4px]' : ''
            } ${isLastPage ? 'rounded-r-[4px]' : ''} ${
              currentPage === i + 1 ? 'bg-brand-blue  text-white' : ''
            }`}
            onClick={() => handleClick(i + 1)}
          >
            {i + 1}
          </button>
        );
      })}

      <button
        className={`ml-[14px] flex h-[38px] w-[38px] rotate-180
        items-center justify-center rounded-[4px] bg-white shadow-sm
        disabled:cursor-not-allowed
        `}
        disabled={currentPage === pages.length}
        onClick={() => handleClick(currentPage + 1)}
      >
        <VerticalArrowIcon size={20} />
      </button>
    </div>
  );
};

export default Pagination;
