import React, { ReactNode, useState } from 'react';

import TransfersHeading from './TransfersHeading';
import TransferRowHeading from './TransfersRowHeading';
import TransferItem from './TransferItem';

import { ITransfer, ITransferDetails } from '@/models/Transfer';
import Pagination from '@/components/Pagination';
import Portal from '@/components/Portal';
import NextArrowIcon from '@/assets/Icons/NextArrowIcon';
import CloseIcon from '@/assets/Icons/CloseIcon';

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

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [transferInView, setTransferInView] = useState<ITransferDetails | null>(
    null
  );

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

  const fetchDetails = async (id: number) => {
    const res = await fetch('/api/transferDetails', {
      method: 'POST',
      body: JSON.stringify({ id }),
    });

    const data = await res.json();
    const transfer: ITransferDetails | null = data?.transfer || null;
    console.log('FETCHED DETAILS: ', transfer);
    setTransferInView(transfer);
  };

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
          <TransferItem
            onClick={() => {
              fetchDetails(transfer.id);
              setIsModalOpen(true);
            }}
            className="mb-[7px] cursor-pointer"
            key={transfer.id}
            {...transfer}
          />
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

      <Portal
        onClick={() => {
          setIsModalOpen(false);
        }}
        className={`fixed inset-0 flex items-center
        justify-around bg-brand-blue bg-opacity-95
        transition-all delay-75 duration-300 ease-in-out
          ${isModalOpen ? `` : `translate-y-full bg-opacity-20`}
        `}
      >
        <div
          onClick={(ev) => ev.stopPropagation()}
          className="flex h-[40px] w-[40px] -rotate-180 items-center justify-center rounded-full bg-white pl-1"
        >
          <NextArrowIcon />
        </div>

        <div
          onClick={(ev) => ev.stopPropagation()}
          className="flex h-[87%] w-[82.5%] items-center justify-center rounded-[8px] bg-white shadow-md"
        >
          <div className="h-full w-[25.8%] border-r border-r-brand-blue border-opacity-[0.08] px-[36px] py-[22px]"></div>
          <div className="relative h-full w-[74%] p-[38px]">
            <div
              onClick={() => setIsModalOpen(false)}
              className="absolute top-[22px] right-[22px] flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full bg-brand-blue bg-opacity-5"
            >
              <CloseIcon size={20} />
            </div>
            <h3 className="mt-[5px] mb-[18px] text-title font-semibold text-brand-blue">
              Transfers
            </h3>
            <div className="rounded-[6px] bg-brand-blue bg-opacity-[0.03] p-[32px] pt-[26px]"></div>
          </div>
        </div>

        <div
          onClick={(ev) => ev.stopPropagation()}
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white"
        >
          <NextArrowIcon />
        </div>
      </Portal>
    </>
  );
};

export default TransfersList;
