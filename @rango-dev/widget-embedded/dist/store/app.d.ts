import type { ConfigSlice } from './slices/config';
import type { DataSlice } from './slices/data';
export declare const useAppStore: {
    (): DataSlice & ConfigSlice;
    <U>(selector: (state: DataSlice & ConfigSlice) => U, equals?: ((a: U, b: U) => boolean) | undefined): U;
} & import("zustand").StoreApi<DataSlice & ConfigSlice> & {
    use: {
        _blockchains: () => import("rango-sdk").BlockchainMeta[];
        _tokens: () => import("rango-sdk").Token[];
        _popularTokens: () => import("rango-sdk").Token[];
        _swappers: () => import("rango-sdk").SwapperMeta[];
        blockchains: () => (options?: {
            type?: "destination" | "source" | undefined;
        } | undefined) => import("rango-sdk").BlockchainMeta[];
        tokens: () => (options?: {
            type?: "destination" | "source" | undefined;
            blockchain?: string | undefined;
            searchFor?: string | undefined;
        } | undefined) => import("rango-sdk").Token[];
        isTokenPinned: () => (token: import("rango-sdk").Token) => boolean;
        fetch: () => () => Promise<void>;
        config: () => import("..").WidgetConfig;
        updateConfig: () => (config: import("..").WidgetConfig) => void;
    };
};
//# sourceMappingURL=app.d.ts.map