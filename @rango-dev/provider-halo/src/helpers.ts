import { Networks } from '@rango-dev/wallets-shared';

declare global {
  interface Window {
    kucoin: any;
  }
}

export function getHaloInstance() {
  const { kucoin } = window;
  if (kucoin && kucoin.isKuCoinWallet) {
    return kucoin;
  }

  return null;
}

export const HALO_WALLET_SUPPORTED_CHAINS = [
  Networks.ETHEREUM,
  Networks.POLYGON,
  Networks.BSC,
];
