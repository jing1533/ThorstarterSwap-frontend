declare global {
  interface Window {
      starknet_braavos: any;
  }
}

export function getBraavosInstance() {
  const { starknet_braavos } = window;
  if (!!starknet_braavos) return starknet_braavos;
  return null;
}
