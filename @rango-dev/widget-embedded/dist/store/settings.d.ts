type Theme = 'auto' | 'dark' | 'light';
export interface SettingsState {
    slippage: number;
    customSlippage: number | null;
    infiniteApprove: boolean;
    disabledLiquiditySources: string[];
    theme: Theme;
    affiliateRef: string | null;
    affiliatePercent: number | null;
    affiliateWallets: {
        [key: string]: string;
    } | null;
    setSlippage: (slippage: number) => void;
    setCustomSlippage: (customSlippage: number | null) => void;
    toggleInfiniteApprove: () => void;
    toggleLiquiditySource: (name: string) => void;
    setTheme: (theme: Theme) => void;
    toggleAllLiquiditySources: (shouldReset?: boolean) => void;
    setAffiliateRef: (affiliateRef: string | null) => void;
    setAffiliatePercent: (affiliatePercent: number | null) => void;
    setAffiliateWallets: (affiliateWallets: {
        [key: string]: string;
    } | null) => void;
}
export declare const useSettingsStore: {
    (): SettingsState;
    <U>(selector: (state: SettingsState) => U, equals?: ((a: U, b: U) => boolean) | undefined): U;
} & Omit<Omit<import("zustand").StoreApi<SettingsState>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<SettingsState, SettingsState>>) => void;
        clearStorage: () => void;
        rehydrate: () => void | Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: SettingsState) => void) => () => void;
        onFinishHydration: (fn: (state: SettingsState) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<SettingsState, SettingsState>>;
    };
}, "subscribe"> & {
    subscribe: {
        (listener: (selectedState: SettingsState, previousSelectedState: SettingsState) => void): () => void;
        <U_1>(selector: (state: SettingsState) => U_1, listener: (selectedState: U_1, previousSelectedState: U_1) => void, options?: {
            equalityFn?: ((a: U_1, b: U_1) => boolean) | undefined;
            fireImmediately?: boolean | undefined;
        } | undefined): () => void;
    };
} & {
    use: {
        slippage: () => number;
        customSlippage: () => number | null;
        infiniteApprove: () => boolean;
        disabledLiquiditySources: () => string[];
        theme: () => Theme;
        affiliateRef: () => string | null;
        affiliatePercent: () => number | null;
        affiliateWallets: () => {
            [key: string]: string;
        } | null;
        setSlippage: () => (slippage: number) => void;
        setCustomSlippage: () => (customSlippage: number | null) => void;
        toggleInfiniteApprove: () => () => void;
        toggleLiquiditySource: () => (name: string) => void;
        setTheme: () => (theme: Theme) => void;
        toggleAllLiquiditySources: () => (shouldReset?: boolean) => void;
        setAffiliateRef: () => (affiliateRef: string | null) => void;
        setAffiliatePercent: () => (affiliatePercent: number | null) => void;
        setAffiliateWallets: () => (affiliateWallets: {
            [key: string]: string;
        } | null) => void;
    };
};
export {};
//# sourceMappingURL=settings.d.ts.map