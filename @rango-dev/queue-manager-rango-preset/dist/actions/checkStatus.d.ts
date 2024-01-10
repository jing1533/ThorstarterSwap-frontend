import { ExecuterActions } from '@rango-dev/queue-manager-core';
import { SwapActionTypes, SwapQueueContext, SwapStorage } from '../types';
/**
 *
 * For doing a swap the user needs to accept a `contract` so it can use the user balance.
 * There is two types of check status:
 *  1. Checking approval transaction (Give permission to a contract)
 *  2. Checking swap transaction.
 *
 */
export declare function checkStatus(actions: ExecuterActions<SwapStorage, SwapActionTypes, SwapQueueContext>): Promise<void>;
//# sourceMappingURL=checkStatus.d.ts.map