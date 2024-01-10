
declare global {
  interface Window {
    trustwallet: any;
  }
}

export function trustWallet() {
  const { trustwallet } = window;
  
  if (!!trustwallet && (trustwallet?.isTrust || trustwallet?.isTrustWallet)) {
    return trustwallet;
  }
  return null;
}
