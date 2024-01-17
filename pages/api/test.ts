import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) { 
  try {
    res.status(500).send({ success: 'OK, test api' })
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch data' })
  }
}