declare global {
  interface Window {
    enkrypt: any;
  }
}

export function enkrypt() {
  const { enkrypt } = window;
  const ethereum = enkrypt?.providers?.ethereum;
  if (!ethereum) return null;
  return ethereum;
}
