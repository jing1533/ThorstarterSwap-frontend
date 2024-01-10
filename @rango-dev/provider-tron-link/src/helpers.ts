
declare global {
  interface Window {
    tronLink: any;
  }
}

export function tronLink() {
  const { tronLink } = window;
  if (!!tronLink) return tronLink;
  return null;
}
