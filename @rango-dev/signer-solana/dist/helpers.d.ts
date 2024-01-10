/// <reference types="node" />
import { Transaction, VersionedTransaction } from '@solana/web3.js';
import type { SolanaTransaction } from 'rango-types';
import { SolanaExternalProvider } from './signer';
export type SolanaWeb3Signer = (solanaWeb3Transaction: Transaction | VersionedTransaction) => Promise<number[] | Buffer | Uint8Array>;
export declare const generalSolanaTransactionExecutor: (tx: SolanaTransaction, DefaultSolanaSigner: SolanaWeb3Signer) => Promise<string>;
export declare function executeSolanaTransaction(tx: SolanaTransaction, solanaProvider: SolanaExternalProvider): Promise<string>;
//# sourceMappingURL=helpers.d.ts.map