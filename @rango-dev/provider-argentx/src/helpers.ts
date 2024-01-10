declare global {
  interface Window {
    starknet_argentX: any;
  }
}

export function argentx() {
  const starknet_argentX = window.starknet_argentX;
  if (!!starknet_argentX) return starknet_argentX;
  return null;
}
