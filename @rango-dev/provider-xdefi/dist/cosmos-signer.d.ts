import { CosmosTransaction, GenericSigner } from 'rango-types';
type CosmosExternalProvider = any;
export declare class CustomCosmosSigner implements GenericSigner<CosmosTransaction> {
    private provider;
    constructor(provider: CosmosExternalProvider);
    signMessage(): Promise<string>;
    signAndSendTx(tx: CosmosTransaction): Promise<{
        hash: string;
    }>;
}
export {};
//# sourceMappingURL=cosmos-signer.d.ts.map