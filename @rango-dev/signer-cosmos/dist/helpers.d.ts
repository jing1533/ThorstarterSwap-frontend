import type { AminoSignResponse } from '@cosmjs/launchpad';
import type { Keplr } from '@keplr-wallet/types';
import type { CosmosTransaction } from 'rango-types';
export declare const executeCosmosTransaction: (cosmosTx: CosmosTransaction, cosmosProvider: Keplr) => Promise<string>;
export declare function getsignedTx(cosmosTx: CosmosTransaction, signResponse: AminoSignResponse): Uint8Array;
//# sourceMappingURL=helpers.d.ts.map