import React from 'react';
import { ITransferDetails } from '@/models/Transfer';

interface TransferDetailsProps extends ITransferDetails {
  children?: React.ReactNode;
  className?: string;
}

const TransferDetails: React.FC<TransferDetailsProps> = ({}) => {
  return <></>;
};

export default TransferDetails;
