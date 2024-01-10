import type { SignClient } from '@walletconnect/sign-client/dist/types/client';
import type { SessionTypes } from '@walletconnect/types';
import type { GenericSigner, SolanaTransaction } from 'rango-types';
declare class SOLANASigner implements GenericSigner<SolanaTransaction> {
    private client;
    private session;
    constructor(client: SignClient, session: SessionTypes.Struct);
    signMessage(msg: string, address: string, chainId: string | null): Promise<string>;
    signAndSendTx(tx: SolanaTransaction, address: string, chainId: string | null): Promise<{
        hash: string;
    }>;
    private isNetworkAndAccountExistInSession;
}
export default SOLANASigner;
//# sourceMappingURL=solana.d.ts.map