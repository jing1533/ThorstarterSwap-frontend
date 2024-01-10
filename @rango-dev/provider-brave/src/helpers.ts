import { Networks } from '@rango-dev/wallets-shared';

declare global {
  interface Window {
    ethereum: any;
    braveSolana: any;
  }
}

export function brave() {
  const { ethereum, braveSolana } = window;

  const instances = new Map();

  if (ethereum?.isBraveWallet) instances.set(Networks.ETHEREUM, ethereum);
  if (braveSolana) instances.set(Networks.SOLANA, braveSolana);

  if (instances.size === 0) return null;

  return instances;
}
