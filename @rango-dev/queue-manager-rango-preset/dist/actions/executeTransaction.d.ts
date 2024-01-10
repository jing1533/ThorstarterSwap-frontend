import { ExecuterActions } from '@rango-dev/queue-manager-core';
import { SwapActionTypes, SwapQueueContext, SwapStorage } from '../types';
/**
 * Excecute a created transaction.
 *
 * This function implemented the parallel mode by `claim` mechanism which means
 * All the queues the meet certain situation (like multiple evm transaction) will go through
 * a `claim` mechanims that decides which queue should be run and it blocks other ones.
 *
 * A queue will be go to sign process, if the wallet and network is matched.
 */
export declare function executeTransaction(actions: ExecuterActions<SwapStorage, SwapActionTypes, SwapQueueContext>): Promise<void>;
//# sourceMappingURL=executeTransaction.d.ts.map