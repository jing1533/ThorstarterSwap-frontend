import type { GenericSigner, CosmosTransaction } from 'rango-types';
import { Keplr } from '@keplr-wallet/types';
type CosmosExternalProvider = Keplr;
export declare class DefaultCosmosSigner implements GenericSigner<CosmosTransaction> {
    private provider;
    constructor(provider: CosmosExternalProvider);
    signMessage(msg: string, address: string, chainId: string | null): Promise<string>;
    signAndSendTx(tx: CosmosTransaction): Promise<{
        hash: string;
    }>;
}
export {};
//# sourceMappingURL=signer.d.ts.map