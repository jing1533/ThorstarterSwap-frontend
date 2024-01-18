
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

export const supportedProviders: any = [
//  "KYBER",
//  "ONEINCH",
//  "SUSHISWAP",
  "THORCHAIN",
//  "UNISWAPV2",
  "UNISWAPV3",
//  "ZEROX",
  // "ONEINCH-AVAX",
  // "PANGOLIN",
  // "TRADERJOE",
  // "KYBER-AVAX",
  // "WOOFI-AVAX",
  // "PANCAKESWAPV2-BSC"
]

export const pools: any = [
  {
      "annualPercentageRate": "-0.15661034459603665",
      "asset": "ETH.USDT-0XDAC17F958D2EE523A2206206994597C13D831EC7",
      "assetDepth": "30946513533169",
      "assetPrice": "1.769685296278557",
      "assetPriceUSD": "0.9999999999999999",
      "liquidityUnits": "9347676385026009",
      "nativeDecimal": "6",
      "poolAPY": "0",
      "runeDepth": "5476558997073456",
      "saversAPR": "0",
      "saversDepth": "0",
      "saversUnits": "0",
      "status": "available",
      "synthSupply": "4993014598626",
      "synthUnits": "820264928415456",
      "totalCollateral": "0",
      "totalDebtTor": "0",
      "units": "10167941313441465",
      "volume24h": "703165565975935"
  },
  {
      "annualPercentageRate": "0.5179151346249885",
      "asset": "KUJI.USK",
      "assetDepth": "1023341312097",
      "assetPrice": "1.771028176672135",
      "assetPriceUSD": "1.0007588244058996",
      "liquidityUnits": "325083291096679",
      "nativeDecimal": "-1",
      "poolAPY": "0.5179151346249885",
      "runeDepth": "181236629807642",
      "saversAPR": "0",
      "saversDepth": "0",
      "saversUnits": "0",
      "status": "available",
      "synthSupply": "48872100",
      "synthUnits": "7762748510",
      "totalCollateral": "0",
      "totalDebtTor": "0",
      "units": "325091053845189",
      "volume24h": "912915999892"
  },
  {
      "annualPercentageRate": "-0.053598383187641443",
      "asset": "ETH.WSTETH-0X7F39C581F595B53C5CB19BD0B3F8DA6C935E2CA0",
      "assetDepth": "3478057899",
      "assetPrice": "5085.975834572741",
      "assetPriceUSD": "2873.9436583826277",
      "liquidityUnits": "888066689745059",
      "nativeDecimal": "-1",
      "poolAPY": "0",
      "runeDepth": "1768931842555884",
      "saversAPR": "0",
      "saversDepth": "0",
      "saversUnits": "0",
      "status": "available",
      "synthSupply": "297081529",
      "synthUnits": "39619590376886",
      "totalCollateral": "0",
      "totalDebtTor": "0",
      "units": "927686280121945",
      "volume24h": "20267612451700"
  },
  {
      "annualPercentageRate": "-0.059712521547256876",
      "asset": "BTC.BTC",
      "assetDepth": "12980159687",
      "assetPrice": "76422.78622089035",
      "assetPriceUSD": "43184.393508607776",
      "liquidityUnits": "160573607216525259",
      "nativeDecimal": "8",
      "poolAPY": "0",
      "runeDepth": "99197996887261996",
      "saversAPR": "0",
      "saversDepth": "0",
      "saversUnits": "0",
      "status": "available",
      "synthSupply": "513135528",
      "synthUnits": "3237923033863253",
      "totalCollateral": "0",
      "totalDebtTor": "0",
      "units": "163811530250388512",
      "volume24h": "6012307971788437"
  },
  {
      "annualPercentageRate": "-0.04602731194095104",
      "asset": "ETH.ETH",
      "assetDepth": "121103701357",
      "assetPrice": "4571.102007733499",
      "assetPriceUSD": "2583.002761759956",
      "liquidityUnits": "95693818585684085",
      "nativeDecimal": "18",
      "poolAPY": "0",
      "runeDepth": "55357737241694077",
      "saversAPR": "0",
      "saversDepth": "1261889",
      "saversUnits": "1261549",
      "status": "available",
      "synthSupply": "1812733065",
      "synthUnits": "721593990913611",
      "totalCollateral": "0",
      "totalDebtTor": "0",
      "units": "96415412576597696",
      "volume24h": "7261056085912097"
  },
  {
      "annualPercentageRate": "-0.007480104307181252",
      "asset": "THOR.RUNE",
      "assetDepth": "236728967576078",
      "assetPrice": "8.364920244916496",
      "assetPriceUSD": "4.726784057316266",
      "liquidityUnits": "230897865378047126",
      "nativeDecimal": "-1",
      "poolAPY": "0",
      "runeDepth": "198021893343531566",
      "saversAPR": "0",
      "saversDepth": "359587426",
      "saversUnits": "359563337",
      "status": "available",
      "synthSupply": "3979458277631",
      "synthUnits": "1957168362185799",
      "totalCollateral": "0",
      "totalDebtTor": "0",
      "units": "232855033740232925",
      "volume24h": "10699681333934539"
  },
  {
      "annualPercentageRate": "-0.4227817321749844",
      "asset": "ETH.USDC-0XA0B86991C6218B36C1D19D4A2E9EB0CE3606EB48",
      "assetDepth": "20808597491037",
      "assetPrice": "1.7628051580720667",
      "assetPriceUSD": "0.996112225026134",
      "liquidityUnits": "5779748632585483",
      "nativeDecimal": "6",
      "poolAPY": "0",
      "runeDepth": "3668150298944549",
      "saversAPR": "0",
      "saversDepth": "0",
      "saversUnits": "0",
      "status": "available",
      "synthSupply": "5091181736027",
      "synthUnits": "805610797949070",
      "totalCollateral": "0",
      "totalDebtTor": "0",
      "units": "6585359430534553",
      "volume24h": "140266887736824"
  },
  {
      "annualPercentageRate": "0.0036114710449292836",
      "asset": "DASH.DASH",
      "assetDepth": "1311567752936",
      "assetPrice": "51.6047080286478",
      "assetPriceUSD": "29.1603869553341",
      "liquidityUnits": "5220419164032592",
      "nativeDecimal": "-1",
      "poolAPY": "0.0036114710449292836",
      "runeDepth": "6768307095005196",
      "saversAPR": "0",
      "saversDepth": "1426901896",
      "saversUnits": "1426828181",
      "status": "available",
      "synthSupply": "1611014013",
      "synthUnits": "3208121248955",
      "totalCollateral": "0",
      "totalDebtTor": "0",
      "units": "5223627285281547",
      "volume24h": "83252644745707"
  },
  {
      "annualPercentageRate": "-0.09125950872962994",
      "asset": "KUJI.KUJI",
      "assetDepth": "15664309636011",
      "assetPrice": "6.847775350835565",
      "assetPriceUSD": "3.8694876231585598",
      "liquidityUnits": "4770955969457566",
      "nativeDecimal": "-1",
      "poolAPY": "0",
      "runeDepth": "10726567341333215",
      "saversAPR": "0",
      "saversDepth": "5782965383",
      "saversUnits": "5782309884",
      "status": "available",
      "synthSupply": "2449503391224",
      "synthUnits": "404668649649941",
      "totalCollateral": "0",
      "totalDebtTor": "0",
      "units": "5175624619107507",
      "volume24h": "655915078297977"
  }
]