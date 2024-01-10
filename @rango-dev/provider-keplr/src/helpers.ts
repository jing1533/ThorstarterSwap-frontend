declare global {
  interface Window {
    keplr: any;
  }
}

export function keplr() {
  return window.keplr || null;
}


