interface UiState {
    connectWalletsButtonDisabled: boolean;
    selectedSwapRequestId: string | null;
    currentPage: string;
    setSelectedSwap: (requestId: string | null) => void;
    setCurrentPage: (path: string) => void;
}
export declare const useUiStore: {
    (): UiState;
    <U>(selector: (state: UiState) => U, equals?: ((a: U, b: U) => boolean) | undefined): U;
} & import("zustand").StoreApi<UiState> & {
    use: {
        connectWalletsButtonDisabled: () => boolean;
        selectedSwapRequestId: () => string | null;
        currentPage: () => string;
        setSelectedSwap: () => (requestId: string | null) => void;
        setCurrentPage: () => (path: string) => void;
    };
};
export {};
//# sourceMappingURL=ui.d.ts.map