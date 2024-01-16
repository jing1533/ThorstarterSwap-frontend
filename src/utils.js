const tokens = [
  {
    name: "Bitcoin",
    chain: "Bitcoin",
    symbol: "BTC",
    address: "BTC",
    decimals: 6,
  },
  {
    name: "Ethereum",
    chain: "Ethereum",
    symbol: "ETH",
    decimals: 6,
  },
  {
    name: "Link Token",
    chain: "Ethereum",
    symbol: "LINK",
    address: "ETH.LINK-0x123abc",
    decimals: 6,
  },
];

const prices = {
  "ETH.LINK-0x123abc": 15.34,
};

const bridges = [
  {
    type: "bridge",
    id: "thorchain",
    name: "Thorchain",
    assets: ["BTC", "ETH", "AVAX", "ETH.LINK-0x123abc"],
  },
];

const dexes = [
  {
    type: "dex",
    id: "uniswapv3",
    name: "Uniswap V3",
    assets: [
      "ETH",
      "ETH.USDC-0x",
      "ETH.USDT-0x",
      "ETH.UNI-0x",
      "ETH.LINK-0x123abc",
    ],
  },
];

const thorchainPools = {
  "THOR.RUNE": {
    asset: "THOR.RUNE",
  },
  AVAX: {
    asset: "AVAX.AVAX",
    status: "Available",
    balance_asset: "18453557551087",
    balance_rune: "139872731317342",
  },
  ETH: {
    asset: "ETH.ETH",
    status: "Available",
    balance_asset: "1381058403894",
    balance_rune: "749542707231386",
  },
  BTC: {
    asset: "BTC.BTC",
    status: "Available",
    balance_asset: "135500708775",
    balance_rune: "1237692339067823",
  },
  "ETH.LINK-0x123abc": {
    asset: "ETH.LINK-0X514910771AF9CA656AF840DFF83E8264ECF986CA",
    status: "Available",
    balance_asset: "999159471620",
    balance_rune: "3205197354695",
  },
};

function getSwapOutput(a, pool, toRune) {
  const X = parseFloat(toRune ? pool.balance_asset : pool.balance_rune) / 1e8;
  const Y = parseFloat(toRune ? pool.balance_rune : pool.balance_asset) / 1e8;
  return (a * X * Y) / (a + X) ** 2;
}

function getDoubleSwapOutput(a, pool1, pool2) {
  return getSwapOutput(getSwapOutput(a, pool1, true), pool2, false);
}

function getAnySwapOutput(a, pool1, pool2) {
  if (pool1.asset == "THOR.RUNE") {
    return getSwapOutput(a, pool2, false);
  } else if (pool2.asset == "THOR.RUNE") {
    return getSwapOutput(a, pool1, true);
  } else {
    return getDoubleSwapOutput(a, pool1, pool2);
  }
}

const uniswapv3Pools = {
  "ETH/ETH.LINK-0x123abc": {
    fee: 0.003,
    price: 169.6526,
  },
};

function quote(connection, inputAsset, outputAsset, amount) {
  switch (connection) {
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

function findQuotes(inputAsset, outputAsset, amount) {
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

  return routes
    .map((r) => {
      r.output = r.swaps[r.swaps.length - 1].outputAmount;
      return r;
    })
    .filter((r) => r.swaps[r.swaps.length - 1].output == outputAsset);
}

console.log(
  JSON.stringify(findQuotes("BTC", "ETH.LINK-0x123abc", 0.01), null, 2)
);
