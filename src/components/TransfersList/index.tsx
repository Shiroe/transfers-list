import React, { ReactNode, useState } from 'react';

import TransfersHeading from './TransfersHeading';
import TransferRowHeading from './TransfersRowHeading';
import TransferItem from './TransferItem';

import { ITransfer } from '@/models/Transfer';
import Pagination from '@/components/Pagination';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('UTC');

type TransfersListProps = {
  transfers: ITransfer[] | [];
};

const TransfersList = ({ transfers }: TransfersListProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [transfersPerPage] = useState<number>(10);

  const sortedTransfers = [...transfers].sort(
    (a, b) => dayjs(a.datetime).valueOf() - dayjs(b.datetime).valueOf()
  );

  const indexOfLastTransfer = currentPage * transfersPerPage;
  const indexOfFirstTransfer = indexOfLastTransfer - transfersPerPage;
  const currentTransfers = sortedTransfers.slice(
    indexOfFirstTransfer,
    indexOfLastTransfer
  );

  const handleClick = (pageNumber: number) => setCurrentPage(pageNumber);

  if (!transfers) {
    return (
      <>
        <h2 className="mb-[42px] text-title font-semibold text-brand-blue">
          Transfers
        </h2>
        <h4 className="text-regular text-brand-blue text-opacity-50">
          No transfers currently scheduled.
        </h4>
      </>
    );
  }

  return (
    <>
      <h2 className="mb-[42px] text-title font-semibold text-brand-blue">
        Transfers
      </h2>
      <TransfersHeading />
      {currentTransfers.reduce<ReactNode[]>((acc, transfer, index, arr) => {
        const date = dayjs(transfer.datetime);
        let day;
        if (dayjs().isSame(date, 'day')) {
          day = 'Today';
        } else if (dayjs().add(1, 'day').isSame(date, 'day')) {
          day = 'Tomorrow';
        } else {
          day = date.format('MM/DD/YYYY');
        }
        if (
          index === 0 ||
          day !==
            (dayjs(arr[index - 1]?.datetime).isSame(date, 'day')
              ? 'Today'
              : dayjs(arr[index - 1]?.datetime)
                  .add(1, 'day')
                  .isSame(date, 'day')
              ? 'Tomorrow'
              : date.format('MM/DD/YYYY'))
        ) {
          acc.push(
            <TransferRowHeading className="mb-[12px]" key={day}>
              {day}
            </TransferRowHeading>
          );
        }
        acc.push(
          <TransferItem className="mb-[7px]" key={transfer.id} {...transfer} />
        );
        return acc;
      }, [])}

      <Pagination
        className="mt-[25px]"
        itemsPerPage={transfersPerPage}
        totalItems={sortedTransfers.length}
        currentPage={currentPage}
        handleClick={handleClick}
      />
    </>
  );
};

export default TransfersList;
