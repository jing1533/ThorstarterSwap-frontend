import { TransactionRequest, TransactionResponse } from '@ethersproject/abstract-provider';
import type { GenericSigner } from 'rango-types';
import { EvmTransaction } from 'rango-types/lib/api/main';
import { providers } from 'ethers';
type ProviderType = ConstructorParameters<typeof providers.Web3Provider>[0];
export declare class DefaultEvmSigner implements GenericSigner<EvmTransaction> {
    private signer;
    private provider;
    constructor(provider: ProviderType);
    signMessage(msg: string): Promise<string>;
    signAndSendTx(tx: EvmTransaction, address: string, chainId: string | null): Promise<{
        hash: string;
        response: TransactionResponse;
    }>;
    wait(txHash: string, chainId?: string, txResponse?: TransactionResponse, confirmations?: number): Promise<{
        hash: string;
        response?: TransactionResponse;
    }>;
    static buildTx(evmTx: EvmTransaction, disableV2?: boolean): TransactionRequest;
}
export {};
//# sourceMappingURL=signer.d.ts.map