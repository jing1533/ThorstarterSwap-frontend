import type { GenericSigner, TronTransaction } from 'rango-types';
type TronExternalProvider = any;
export declare class DefaultTronSigner implements GenericSigner<TronTransaction> {
    private provider;
    constructor(provider: TronExternalProvider);
    signMessage(): Promise<string>;
    signAndSendTx(tx: TronTransaction): Promise<{
        hash: string;
    }>;
    static buildTx(tronTx: TronTransaction): {};
}
export {};
//# sourceMappingURL=signer.d.ts.map