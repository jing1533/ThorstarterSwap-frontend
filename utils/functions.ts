import { thorchainPools, uniswapv3Pools } from "./constants"

export function getSwapOutput(a: number, pool: any, toRune: any) {
  const X = parseFloat(toRune ? pool.balance_asset : pool.balance_rune) / 1e8;
  const Y = parseFloat(toRune ? pool.balance_rune : pool.balance_asset) / 1e8;
  return (a * X * Y) / (a + X) ** 2;
}

export function getDoubleSwapOutput(amount: number, pool1: any, pool2: any) {
  return getSwapOutput(getSwapOutput(amount, pool1, true), pool2, false);
}

export function getAnySwapOutput(amount: number, pool1: any, pool2: any) {
  if (pool1.asset == "THOR.RUNE") {
    return getSwapOutput(amount, pool2, false);
  } else if (pool2.asset == "THOR.RUNE") {
    return getSwapOutput(amount, pool1, true);
  } else {
    return getDoubleSwapOutput(amount, pool1, pool2);
  }
}

export function quote(connection: string, inputAsset: string, outputAsset: string, amount: number) {
  switch (connection.toLowerCase()) {
    case "thorchain":
      return getAnySwapOutput(
        amount,
        thorchainPools[inputAsset],
        thorchainPools[outputAsset]
      );
    case "uniswapv3":
      const pool = uniswapv3Pools[inputAsset + "/" + outputAsset];
      if (!pool) return 0;
      return amount * pool.price * (1 - pool.fee);
    default:
      throw new Error("Unknown connection: " + connection);
  }
}