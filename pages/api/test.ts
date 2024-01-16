import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, message } = req.body
 
  try {
    res.status(400).send({ success: 'test api' })
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch data' })
  }
}