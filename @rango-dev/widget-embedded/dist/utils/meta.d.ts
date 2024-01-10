import type { Asset, BlockchainMeta, Token } from 'rango-sdk';
export declare function getBlockchainDisplayNameFor(blockchainName: string, blockchains: BlockchainMeta[]): string | undefined;
export declare function getBlockchainShortNameFor(blockchainName: string, blockchains: BlockchainMeta[]): string | undefined;
export declare function findToken(t: Asset, tokens: Token[]): Token | null;
export declare function findBlockchain(name: string, blockchains: BlockchainMeta[]): BlockchainMeta | null;
//# sourceMappingURL=meta.d.ts.map