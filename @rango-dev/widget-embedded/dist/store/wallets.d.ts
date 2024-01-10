import type { Wallet } from '../types';
import type { WalletType } from '@rango-dev/wallets-shared';
export type TokenBalance = {
    chain: string;
    symbol: string;
    ticker: string;
    address: string | null;
    rawAmount: string;
    decimal: number | null;
    amount: string;
    logo: string | null;
    usdPrice: number | null;
};
export interface ConnectedWallet extends Wallet {
    balances: TokenBalance[] | null;
    explorerUrl: string | null;
    selected: boolean;
    loading: boolean;
    error: boolean;
}
interface WalletsStore {
    connectedWallets: ConnectedWallet[];
    customDestination: string;
    loading: boolean;
    connectWallet: (accounts: Wallet[]) => void;
    disconnectWallet: (walletType: WalletType) => void;
    selectWallets: (wallets: {
        walletType: string;
        chain: string;
    }[]) => void;
    clearConnectedWallet: () => void;
    getWalletsDetails: (accounts: Wallet[], shouldRetry?: boolean) => void;
}
export declare const useWalletsStore: {
    (): WalletsStore;
    <U>(selector: (state: WalletsStore) => U, equals?: ((a: U, b: U) => boolean) | undefined): U;
} & Omit<import("zustand").StoreApi<WalletsStore>, "subscribe"> & {
    subscribe: {
        (listener: (selectedState: WalletsStore, previousSelectedState: WalletsStore) => void): () => void;
        <U_1>(selector: (state: WalletsStore) => U_1, listener: (selectedState: U_1, previousSelectedState: U_1) => void, options?: {
            equalityFn?: ((a: U_1, b: U_1) => boolean) | undefined;
            fireImmediately?: boolean | undefined;
        } | undefined): () => void;
    };
} & {
    use: {
        connectedWallets: () => ConnectedWallet[];
        customDestination: () => string;
        loading: () => boolean;
        connectWallet: () => (accounts: Wallet[]) => void;
        disconnectWallet: () => (walletType: WalletType) => void;
        selectWallets: () => (wallets: {
            walletType: string;
            chain: string;
        }[]) => void;
        clearConnectedWallet: () => () => void;
        getWalletsDetails: () => (accounts: Wallet[], shouldRetry?: boolean) => void;
    };
};
export declare const fetchingBalanceSelector: (state: WalletsStore) => boolean;
export {};
//# sourceMappingURL=wallets.d.ts.map