import type { TokenWithBalance } from '../components/TokenList';
import type { Wallet } from '../types';
import type { PendingSwap } from '@rango-dev/queue-manager-rango-preset/dist/shared';
import type { BestRouteResponse, BlockchainMeta, Token } from 'rango-sdk';
import BigNumber from 'bignumber.js';
export interface RouteState {
    fromBlockchain: BlockchainMeta | null;
    toBlockchain: BlockchainMeta | null;
    inputAmount: string;
    inputUsdValue: BigNumber | null;
    outputAmount: BigNumber | null;
    outputUsdValue: BigNumber | null;
    fromToken: TokenWithBalance | null;
    toToken: TokenWithBalance | null;
    routeWalletsConfirmed: boolean;
    selectedWallets: Wallet[];
    resetRoute: () => void;
    resetToBlockchain: () => void;
    resetFromBlockchain: () => void;
    setFromBlockchain: (chain: BlockchainMeta | null) => void;
    setToBlockchain: (chian: BlockchainMeta | null) => void;
    setFromToken: (token: Token | null) => void;
    setToToken: (token: Token | null) => void;
    setInputAmount: (amount: string) => void;
    bestRoute: BestRouteResponse | null;
    setRoute: (bestRoute: BestRouteResponse | null) => void;
    retry: (pendingSwap: PendingSwap) => void;
    switchFromAndTo: () => void;
    setRouteWalletConfirmed: (flag: boolean) => void;
    setSelectedWallets: (wallets: Wallet[]) => void;
    customDestination: string;
    setCustomDestination: (address: string) => void;
    resetRouteWallets: () => void;
}
export declare const useBestRouteStore: {
    (): RouteState;
    <U>(selector: (state: RouteState) => U, equals?: ((a: U, b: U) => boolean) | undefined): U;
} & Omit<import("zustand").StoreApi<RouteState>, "subscribe"> & {
    subscribe: {
        (listener: (selectedState: RouteState, previousSelectedState: RouteState) => void): () => void;
        <U_1>(selector: (state: RouteState) => U_1, listener: (selectedState: U_1, previousSelectedState: U_1) => void, options?: {
            equalityFn?: ((a: U_1, b: U_1) => boolean) | undefined;
            fireImmediately?: boolean | undefined;
        } | undefined): () => void;
    };
} & {
    use: {
        fromBlockchain: () => BlockchainMeta | null;
        toBlockchain: () => BlockchainMeta | null;
        inputAmount: () => string;
        inputUsdValue: () => BigNumber | null;
        outputAmount: () => BigNumber | null;
        outputUsdValue: () => BigNumber | null;
        fromToken: () => TokenWithBalance | null;
        toToken: () => TokenWithBalance | null;
        routeWalletsConfirmed: () => boolean;
        selectedWallets: () => Wallet[];
        resetRoute: () => () => void;
        resetToBlockchain: () => () => void;
        resetFromBlockchain: () => () => void;
        setFromBlockchain: () => (chain: BlockchainMeta | null) => void;
        setToBlockchain: () => (chian: BlockchainMeta | null) => void;
        setFromToken: () => (token: Token | null) => void;
        setToToken: () => (token: Token | null) => void;
        setInputAmount: () => (amount: string) => void;
        bestRoute: () => BestRouteResponse | null;
        setRoute: () => (bestRoute: BestRouteResponse | null) => void;
        retry: () => (pendingSwap: PendingSwap) => void;
        switchFromAndTo: () => () => void;
        setRouteWalletConfirmed: () => (flag: boolean) => void;
        setSelectedWallets: () => (wallets: Wallet[]) => void;
        customDestination: () => string;
        setCustomDestination: () => (address: string) => void;
        resetRouteWallets: () => () => void;
    };
};
//# sourceMappingURL=bestRoute.d.ts.map