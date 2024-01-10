import type { BlockchainMeta } from 'rango-sdk';
interface PrepareListOptions {
    limit?: number;
    selected?: string;
}
interface PrepareListOutput {
    list: BlockchainMeta[];
    more: BlockchainMeta[];
}
/**
 *
 * UI needs some specific logics like limiting the list and sorting,
 * this function is getting the raw blockchains list and return a list for showing in UI.
 *
 */
export declare function usePrepareBlockchainList(blockchains: BlockchainMeta[], options?: PrepareListOptions): PrepareListOutput;
export {};
//# sourceMappingURL=usePrepareBlockchainList.d.ts.map