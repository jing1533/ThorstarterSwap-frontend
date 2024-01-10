import type { GenericSigner, StarknetTransaction } from 'rango-types';
type StarknetExternalProvider = any;
export declare class DefaultStarknetSigner implements GenericSigner<StarknetTransaction> {
    private provider;
    constructor(provider: StarknetExternalProvider);
    signMessage(): Promise<string>;
    signAndSendTx(tx: StarknetTransaction): Promise<{
        hash: string;
    }>;
}
export {};
//# sourceMappingURL=signer.d.ts.map