import path from 'path';
import { promises as fs } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ITransfer } from '@/models/Transfer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ITransfer[] | object>
) {
  const jsonDirectory = path.join(process.cwd(), 'src/json');
  const fileContents = await fs.readFile(
    jsonDirectory + '/transfers_list.json',
    'utf8'
  );

  const results = JSON.parse(fileContents);

  if (results) {
    res.status(200).json(results);
  } else {
    res.status(500).json({ error: 'Something went wrong..' });
  }
}
