import { GenericSigner, Transfer } from 'rango-types';
type TransferExternalProvider = any;
export declare class CustomTransferSigner implements GenericSigner<Transfer> {
    private provider;
    constructor(provider: TransferExternalProvider);
    signMessage(): Promise<string>;
    signAndSendTx(tx: Transfer): Promise<{
        hash: string;
    }>;
}
export {};
//# sourceMappingURL=utxo-signer.d.ts.map