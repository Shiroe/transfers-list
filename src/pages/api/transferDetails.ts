import path from 'path';
import { promises as fs } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ITransferDetails } from '@/models/Transfer';

type TRANSFER_DETAULS_RESPONSE = {
  transfer: ITransferDetails;
};

type ERROR_RESPONSE = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TRANSFER_DETAULS_RESPONSE | ERROR_RESPONSE>
) {
  const { id } = JSON.parse(req.body);

  if (!id) return res.status(400).json({ error: 'no ID provided' });

  const jsonDirectory = path.join(process.cwd(), 'src/json');
  const fileContents = await fs.readFile(
    jsonDirectory + '/transfers_details.json',
    'utf8'
  );

  const results: ITransferDetails[] = JSON.parse(fileContents);

  if (results.length) {
    const found = results.filter((t) => t.id === id)[0];
    if (found) {
      res.status(200).json({ transfer: found });
    } else {
      res.status(200).json({ error: `No Transfer found with id: ${id}` });
    }
  } else {
    res.status(500).json({ error: 'Something went wrong..' });
  }
}
