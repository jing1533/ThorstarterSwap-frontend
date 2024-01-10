import type { ConfirmSwapError, ConfirmSwapWarnings, Wallet } from '../types';
import type { PendingSwap } from '@rango-dev/queue-manager-rango-preset';
export type ConfirmSwapFetchResult = {
    swap: PendingSwap | null;
    error: ConfirmSwapError | null;
    warnings: ConfirmSwapWarnings | null;
};
export type ConfirmSwap = {
    loading: boolean;
    fetch: (params: Params) => Promise<ConfirmSwapFetchResult>;
    cancelFetch: () => void;
};
type Params = {
    selectedWallets: Wallet[];
    customDestination?: string;
};
export declare function useConfirmSwap(): ConfirmSwap;
export {};
//# sourceMappingURL=useConfirmSwap.d.ts.map