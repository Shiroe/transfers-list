import React from 'react';

import TransfersHeading from './TransfersHeading';
import { ITransfer } from '@/models/Transfer';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('UTC');

type TransfersListProps = {
  transfers?: ITransfer[] | null;
};

const TransfersList = ({ transfers }: TransfersListProps) => {
  const renderListByDates = () => {
    /**
     * WIP: brainstorming strategy for segregating fetched data
     * on various use cases e.g. no today or tomorrow transfers
     * and grouping the rest by same date
     */

    if (!transfers) return null;
    /**
     * We assume that data is sorted from the backend
     * by datetime when they're fetched, we know the mock data
     * currently is as well.
     */

    /**
     * Simulating the `today` variable to be our today so it
     * matches the begining date of the fetched mock data so
     * we can have the matching UI for the demo.
     */
    const today = dayjs.tz('2023-06-01');
    const tomorrow = today.add(1, 'days');

    const filteredToday = transfers.filter((t: ITransfer) =>
      today.isSame(dayjs(t.datetime), 'date')
    );

    const filteredTomorrow = transfers.filter((t: ITransfer) =>
      tomorrow.isSame(dayjs(t.datetime), 'date')
    );

    const todayTransfers = (
      <>
        <h3 className="text-sm font-semibold text-brand-blue text-opacity-50">
          Today
        </h3>
        {filteredToday.map((t) => (
          <div key={t.id}>{t.traveler_first_name}</div>
        ))}
      </>
    );

    const tomorrowTransfers = (
      <>
        <h3 className="text-sm font-semibold text-brand-blue text-opacity-50">
          Tomorrow
        </h3>
        {filteredTomorrow.map((t) => (
          <div key={t.id}>{t.traveler_first_name}</div>
        ))}
      </>
    );

    return (
      <>
        {filteredToday.length && todayTransfers}
        {filteredTomorrow.length && tomorrowTransfers}
      </>
    );
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
      {renderListByDates()}
    </>
  );
};

export default TransfersList;
