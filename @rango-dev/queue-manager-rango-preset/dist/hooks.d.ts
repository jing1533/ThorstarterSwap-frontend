import { UseQueueManagerParams } from './types';
/**
 *
 * Runs a migration (old swaps from localstorage to queue manager's IndexedDB)
 * It will be run only once on page load.
 *
 */
declare function useMigration(): {
    status: boolean;
};
/**
 *
 * On initial load and also connect/disconnet we may need to update swap's notified message.
 * And also if a new wallet is connected we will retry the queue to see we can resume it or not.
 *
 */
declare function useQueueManager(params: UseQueueManagerParams): void;
declare function useEvents(): import("mitt").Emitter<import("./types").RouteExecutionEvents>;
export { useQueueManager, useMigration, useEvents };
//# sourceMappingURL=hooks.d.ts.map