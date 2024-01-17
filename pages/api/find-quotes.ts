import type { NextApiRequest, NextApiResponse } from 'next'
import { bridges, dexes, tokens, prices } from '../../utils/constants'
import { quote } from '../../utils/functions'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { inputAsset, outputAsset, amount }: {inputAsset: string, outputAsset: string, amount: number} = req.body
 
  try {
    const routes = [];

    for (let b of bridges.concat(dexes)) {
      if (b.assets.includes(inputAsset)) {
        for (let a of b.assets) {
          if (a == inputAsset) continue;
          routes.push({
            swaps: [
              {
                connection: b,
                input: inputAsset,
                output: a,
                inputAmount: amount,
                outputAmount: quote(b.id, inputAsset, a, amount),
              },
            ],
            output: 0, 
          });
        }
      }
    }

    for (let d of dexes) {
      for (let r of routes) {
        const lastSwap = r.swaps[r.swaps.length - 1];
        if (lastSwap.connection.type == "dex") continue;
        if (lastSwap.output === outputAsset) continue;
        if (!d.assets.includes(lastSwap.output)) continue;
        if (!d.assets.includes(outputAsset)) continue;
        r.swaps.push({
          connection: d,
          input: lastSwap.output,
          output: outputAsset,
          inputAmount: lastSwap.outputAmount,
          outputAmount: quote(
            d.id,
            lastSwap.output,
            outputAsset,
            lastSwap.outputAmount
          ),
        });
      }
    }

    return res.status(400).send({
      status: 'success',
      result: routes.map((r) => {
        r.output = r.swaps[r.swaps.length - 1].outputAmount;
        return r;
      }).filter((r) => r.swaps[r.swaps.length - 1].output == outputAsset) });
  } catch (err) {
    console.log(err)
    return res.status(500).send({ error: 'Failed to process request' })
  }
}