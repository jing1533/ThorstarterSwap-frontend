import type { SignClient } from '@walletconnect/sign-client/dist/types/client';
import type { SessionTypes } from '@walletconnect/types';
import type { CosmosTransaction, GenericSigner } from 'rango-types';
declare class COSMOSSigner implements GenericSigner<CosmosTransaction> {
    private client;
    private session;
    constructor(client: SignClient, session: SessionTypes.Struct);
    signMessage(): Promise<string>;
    signAndSendTx(tx: CosmosTransaction, address: string, chainId: string | null): Promise<{
        hash: string;
    }>;
    private isNetworkAndAccountExistInSession;
}
export default COSMOSSigner;
//# sourceMappingURL=cosmos.d.ts.map