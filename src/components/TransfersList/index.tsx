import React, { ReactNode, useEffect, useState } from 'react';

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
  const [transfersPerPage] = useState<number>(9);

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

        // simulating current date to today;
        const today = dayjs('2023-06-01');
        const tomorrow = today.add(1, 'day');

        if (today.isSame(date, 'day')) {
          day = 'Today';
        } else if (tomorrow.isSame(date, 'day')) {
          day = 'Tomorrow';
        } else {
          day = date.format('dddd, D MMM');
        }

        const previousTransferDate =
          index > 0 ? dayjs(arr[index - 1]?.datetime) : null;
        const isSameAsPrev = previousTransferDate
          ? previousTransferDate.isSame(date, 'day')
          : false;

        if (index === 0 || !isSameAsPrev) {
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
