import { ExecuterActions } from '@rango-dev/queue-manager-core';
import { SwapActionTypes, SwapQueueContext, SwapStorage } from '../types';
/**
 *
 * When a user asks for a swap, We first create the transaction by sending a request to server
 * Server will return the transaction that need to be sent to wallet.
 * It can be failed if server goes through an error, If not, we will schedule the `EXECTUTE_TRANSACTION`.
 *
 */
export declare function createTransaction(actions: ExecuterActions<SwapStorage, SwapActionTypes, SwapQueueContext>): Promise<void>;
//# sourceMappingURL=createTransaction.d.ts.map