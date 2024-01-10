import { ExecuterActions } from '@rango-dev/queue-manager-core';
import { SwapActionTypes, SwapQueueContext, SwapStorage } from '../types';
/**
 *
 * This function is responsibe for scheduling the correct `action` based on `PendingSwap` status.
 * It means `action`s schedule this step to decide what should be the next step/task.
 *
 * It's acts like a `while(true)` and will `break` the loop on certain `action`s like `CHECK_STATUS`.
 *
 *
 */
export declare function scheduleNextStep({ schedule, next, failed, setStorage, getStorage, }: ExecuterActions<SwapStorage, SwapActionTypes, SwapQueueContext>): void;
//# sourceMappingURL=scheduleNextStep.d.ts.map