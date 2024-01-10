import { GenericSigner, SolanaTransaction } from 'rango-types';
type SolanaExternalProvider = any;
export declare class CustomSolanaSigner implements GenericSigner<SolanaTransaction> {
    private provider;
    constructor(provider: SolanaExternalProvider);
    signMessage(): Promise<string>;
    signAndSendTx(tx: SolanaTransaction): Promise<{
        hash: string;
    }>;
}
export {};
//# sourceMappingURL=solana-signer.d.ts.map