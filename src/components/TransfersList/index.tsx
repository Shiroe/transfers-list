import React from 'react';

import TransfersHeading from './TransfersHeading';
import { ITransfer } from '@/models/Transfer';

import dayjs from 'dayjs';

type TransfersListProps = {
  transfers?: ITransfer[] | null;
};

const TransfersList = ({ transfers }: TransfersListProps) => {
  const renderListByDates = () => {
    if (!transfers) return;
    const list: ITransfer[] = [...transfers];

    list.sort((a, b) => dayjs(a.datetime).diff(b.datetime));
    console.log('LIST: ', list);
    // make sure its sorted

    return null;
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
      <h3 className="text-sm font-semibold text-brand-blue text-opacity-50">
        Today
      </h3>
      {renderListByDates()}
    </>
  );
};

export default TransfersList;
