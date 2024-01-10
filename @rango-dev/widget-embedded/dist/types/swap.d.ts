import type { SwapSavedSettings } from 'rango-types/lib';
export type PendingSwapSettings = Omit<SwapSavedSettings, 'disabledSwappersIds'>;
export declare enum ButtonState {
    WAITFORCONNECTING = "waitForConnecting",
    SWAP = "swap",
    NEEDTOCONFIRM = "needToConfirm",
    WARNING = "warning"
}
export type SwapButtonState = ({
    disabled: true;
} | {
    disabled: false;
    hasWarning?: boolean;
}) & {
    title: string;
    state: ButtonState;
};
export type ConvertedToken = {
    symbol: string;
    address: string | null;
    blockchain: string;
    outputAmount: string | null;
} | null;
//# sourceMappingURL=swap.d.ts.map