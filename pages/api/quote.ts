import type { NextApiRequest, NextApiResponse } from 'next'
import { thorchainPools, uniswapv3Pools } from '../../utils/constants'
import { getAnySwapOutput } from '../../utils/functions'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { connection, inputAsset, outputAsset, amount }: {connection: string, inputAsset: string, outputAsset: string, amount: number} = req.body
 
  try {
    switch (connection.toLowerCase()) {
      case "thorchain":
        res.status(400).send({
          status: 'success',
          result:
            getAnySwapOutput(
              amount,
              thorchainPools[inputAsset],
              thorchainPools[outputAsset]
            )
        });
      case "uniswapv3":
        const pool = uniswapv3Pools[inputAsset + "/" + outputAsset];
        if (!pool) return res.status(400).send({ status: 'success', result: 0 });
        return res.status(400).send({ status: 'success', result: amount * pool.price * (1 - pool.fee) });
      default:
        throw new Error("Unknown connection: " + connection);
    }
  } catch (err) {
    return res.status(500).send({ error: 'Failed to process request' })
  }
}