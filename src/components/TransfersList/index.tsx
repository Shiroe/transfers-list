import React, { ReactNode, useState } from 'react';

import TransfersHeading from './TransfersHeading';
import TransferRowHeading from './TransfersRowHeading';
import TransferItem from './TransferItem';

import { ITransfer, ITransferDetails } from '@/models/Transfer';
import Pagination from '@/components/Pagination';
import Modal from '@/components/Modal';
import TransferDetails from '@/components/TransferDetails';

import NextArrowIcon from '@/assets/Icons/NextArrowIcon';
import HalfCircleIcon from '@/assets/Icons/HalfCircleIcon';

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
  const [loadingInView, setLoadingInView] = useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [transferInView, setTransferInView] = useState<
    (ITransferDetails & ITransfer) | null
  >(null);

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
    setLoadingInView(true);
    const res = await fetch('/api/transferDetails', {
      method: 'POST',
      body: JSON.stringify({ id }),
    });

    const data = await res.json();
    const transfer = data?.transfer as ITransferDetails;
    const overview = sortedTransfers.filter(
      (s) => s.id === transfer?.id
    )[0] as ITransfer;

    setTimeout(() => {
      // simulating fetch time
      setTransferInView({ ...transfer, ...overview, id: overview.id });
      setLoadingInView(false);
    }, 500);
  };

  const onDetailsPagination = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    side: string
  ) => {
    ev.stopPropagation();

    if (!transferInView) return;

    const indexOfTransfer = sortedTransfers.findIndex(
      (t) => t.id === transferInView.id
    );

    if (side === 'prev') {
      const prevId = sortedTransfers[indexOfTransfer - 1]?.id;
      if (prevId) fetchDetails(prevId);
    } else {
      const nextId = sortedTransfers[indexOfTransfer + 1]?.id;
      if (nextId) fetchDetails(nextId);
    }
  };

  const onModalDismiss = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setTransferInView(null);
    }, 500);
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
      <h2 className="mb-[42px] hidden text-title font-semibold text-brand-blue md:block">
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

      <Modal isOpen={isModalOpen} onClose={onModalDismiss} className="z-40">
        <div
          onClick={(ev) => onDetailsPagination(ev, 'prev')}
          className={`hidden h-[40px] w-[40px] -rotate-180 items-center justify-center rounded-full bg-white pl-1 md:flex ${
            loadingInView ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
        >
          <NextArrowIcon />
        </div>

        <TransferDetails transfer={transferInView} onClose={onModalDismiss}>
          {loadingInView && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-brand-blue bg-opacity-50">
              <div className="animate-spin">
                <HalfCircleIcon />
              </div>
            </div>
          )}
        </TransferDetails>

        <div
          onClick={(ev) => onDetailsPagination(ev, 'next')}
          className={`hidden h-[40px] w-[40px] items-center justify-center rounded-full bg-white md:flex ${
            loadingInView ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
        >
          <NextArrowIcon />
        </div>
      </Modal>
    </>
  );
};

export default TransfersList;
