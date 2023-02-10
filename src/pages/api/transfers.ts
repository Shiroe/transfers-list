import path from 'path';
import { promises as fs } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ITransfer } from '@/models/Transfer';

type TRANSFERS_RESPONSE = {
  transfers: ITransfer[];
};

type ERROR_RESPONSE = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TRANSFERS_RESPONSE | ERROR_RESPONSE>
) {
  const jsonDirectory = path.join(process.cwd(), 'src/json');
  const fileContents = await fs.readFile(
    jsonDirectory + '/transfers_list.json',
    'utf8'
  );

  const results: ITransfer[] = JSON.parse(fileContents);

  if (results.length) {
    res.status(200).json({ transfers: results });
  } else {
    res.status(500).json({ error: 'Something went wrong..' });
  }
}
