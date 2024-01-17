
export const CHAINS = ["MAYA", "THOR", "ETH", "BTC", "DASH", "KUJI"];
export const CHAINS_NAMES = {
  MAYA: "MAYAChain",
  THOR: "THORChain",
  ETH: "Ethereum",
  BTC: "Bitcoin",
  DASH: "Dash",
  KUJI: "Kujira"
};
export const CHAINS_NATIVE_ASSET = {
  MAYA: "CACAO",
  THOR: "RUNE",
  ETH: "ETH",
  BTC: "BTC",
  DASH: "DASH",
  KUJI: "KUJI"
};

export const tokens = [
  {
    name: "Bitcoin",
    chain: "Bitcoin",
    symbol: "BTC",
    address: "native",
    decimals: 8,
  },
  {
    name: "Ethereum",
    chain: "Ethereum",
    symbol: "ETH",
    address: "native",
    decimals: 18,
  },
  {
    name: "Link Token",
    chain: "Ethereum",
    symbol: "LINK",
    address: "ETH.LINK-0x514910771AF9Ca656af840dff83E8264EcF986CA",
    decimals: 18,
  },
];

export const prices: any = {
  "ETH.LINK-0x514910771AF9Ca656af840dff83E8264EcF986CA": 15.34,
};

export const bridges = [
  {
    type: "bridge",
    id: "thorchain",
    name: "Thorchain",
    assets: ["BTC", "ETH", "AVAX", "ETH.LINK-0x514910771AF9Ca656af840dff83E8264EcF986CA"],
  },
];

export const dexes = [
  {
    type: "dex",
    id: "uniswapv3",
    name: "Uniswap V3",
    assets: [
      "ETH",
      "ETH.USDC-0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      "ETH.USDT-0xdAC17F958D2ee523a2206206994597C13D831ec7",
      "ETH.UNI-0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
      "ETH.LINK-0x514910771AF9Ca656af840dff83E8264EcF986CA",
    ],
  },
];

export const thorchainPools: any = {
  "THOR.RUNE": {
    asset: "THOR.RUNE",
  },
  "AVAX": {
    asset: "AVAX.AVAX",
    status: "Available",
    balance_asset: "18453557551087",
    balance_rune: "139872731317342",
  },
  "ETH": {
    asset: "ETH.ETH",
    status: "Available",
    balance_asset: "1381058403894",
    balance_rune: "749542707231386",
  },
  "BTC": {
    asset: "BTC.BTC",
    status: "Available",
    balance_asset: "135500708775",
    balance_rune: "1237692339067823",
  },
  "ETH.LINK-0x514910771AF9Ca656af840dff83E8264EcF986CA": {
    asset: "ETH.LINK-0X514910771AF9CA656AF840DFF83E8264ECF986CA",
    status: "Available",
    balance_asset: "999159471620",
    balance_rune: "3205197354695",
  },
};

export const uniswapv3Pools: any = {
  "ETH/ETH.LINK-0x514910771AF9Ca656af840dff83E8264EcF986CA": {
    fee: 0.003,
    price: 169.6526,
  },
};