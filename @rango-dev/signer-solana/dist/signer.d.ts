import type { GenericSigner, SolanaTransaction } from 'rango-types';
import { PublicKey, SendOptions, Transaction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
export interface SolanaExternalProvider {
    isPhantom?: boolean;
    publicKey?: {
        toBytes(): Uint8Array;
    };
    isConnected: boolean;
    signTransaction<T extends Transaction | VersionedTransaction>(transaction: T): Promise<T>;
    signAllTransactions<T extends Transaction | VersionedTransaction>(transactions: T[]): Promise<T[]>;
    signAndSendTransaction<T extends Transaction | VersionedTransaction>(transaction: T, options?: SendOptions): Promise<{
        signature: TransactionSignature;
    }>;
    signMessage(message: Uint8Array): Promise<{
        signature: Uint8Array;
    }>;
    request(...args: any[]): Promise<any>;
    connect(...args: any[]): Promise<any>;
    disconnect(): Promise<void>;
    accountChanged(newPublicKey: PublicKey): any;
}
export declare class DefaultSolanaSigner implements GenericSigner<SolanaTransaction> {
    private provider;
    constructor(provider: SolanaExternalProvider);
    signMessage(msg: string): Promise<string>;
    signAndSendTx(tx: SolanaTransaction): Promise<{
        hash: string;
    }>;
}
//# sourceMappingURL=signer.d.ts.map