import type { TokenWithBalance } from '../components/TokenList';
import type { MetaResponse } from 'rango-sdk';
export type LoadingStatus = 'loading' | 'success' | 'failed';
export interface MetaState {
    meta: MetaResponse & {
        tokens: TokenWithBalance[];
    };
    loadingStatus: LoadingStatus;
    fetchMeta: () => Promise<void>;
}
export declare const useMetaStore: {
    (): MetaState;
    <U>(selector: (state: MetaState) => U, equals?: ((a: U, b: U) => boolean) | undefined): U;
} & import("zustand").StoreApi<MetaState> & {
    use: {
        meta: () => MetaResponse & {
            tokens: TokenWithBalance[];
        };
        loadingStatus: () => LoadingStatus;
        fetchMeta: () => () => Promise<void>;
    };
};
//# sourceMappingURL=meta.d.ts.map