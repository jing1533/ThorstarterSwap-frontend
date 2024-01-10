import type { ConfigSlice } from './config';
import type { BlockchainMeta, SwapperMeta, Token } from 'rango-sdk';
import type { StateCreator } from 'zustand';
type BlockchainOptions = {
    type?: 'source' | 'destination';
};
type TokenOptions = {
    type?: 'source' | 'destination';
    blockchain?: string;
    searchFor?: string;
};
export interface DataSlice {
    _blockchains: BlockchainMeta[];
    _tokens: Token[];
    _popularTokens: Token[];
    _swappers: SwapperMeta[];
    blockchains: (options?: BlockchainOptions) => BlockchainMeta[];
    tokens: (options?: TokenOptions) => Token[];
    isTokenPinned: (token: Token) => boolean;
    fetch: () => Promise<void>;
}
export declare const createDataSlice: StateCreator<DataSlice & ConfigSlice, [
], [
], DataSlice>;
export {};
//# sourceMappingURL=data.d.ts.map