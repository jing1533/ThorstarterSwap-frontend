import type { NextApiRequest, NextApiResponse } from 'next'
import { tokens } from '../../utils/constants'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    return res.status(400).send({ status: 'success', result: tokens });
  } catch (err) {
    return res.status(500).send({ error: 'Failed to process request' })
  }
}