import type { SignClient } from '@walletconnect/sign-client/dist/types/client';
import type { SessionTypes } from '@walletconnect/types';
import type { EvmTransaction } from 'rango-types/lib/api/main';
import { type GenericSigner } from 'rango-types';
declare class EVMSigner implements GenericSigner<EvmTransaction> {
    private client;
    private session;
    constructor(client: SignClient, session: SessionTypes.Struct);
    signMessage(msg: string, address: string, chainId: string | null): Promise<string>;
    signAndSendTx(tx: EvmTransaction, address: string, chainId: string | null): Promise<{
        hash: string;
    }>;
    private isNetworkAndAccountExistInSession;
}
export default EVMSigner;
//# sourceMappingURL=evm.d.ts.map