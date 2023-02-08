// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ITransfer } from '@/models/Transfer';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ITransfer[] | object>
) {
  res.status(200).json({ name: 'John Doe' });
}
