import { QueueID, QueueName } from './manager';
import Queue, { QueueState, Task } from './queue';
export declare enum Status {
    PENDING = "PENDING",
    RUNNING = "RUNNING",
    FAILED = "FAILED",
    SUCCESS = "SUCCESS",
    CANCELED = "CANCELED",
    BLOCKED = "BLOCKED"
}
export declare const SYNC_POLLING_INTERVAL = 5000;
export type QueueStorage = Record<string, unknown>;
export type QueueType = Queue;
export interface PersistedQueue {
    id: QueueID;
    createdAt: number;
    name: QueueName;
    status: Status;
    state: QueueState;
    tasks: Task[];
    storage: QueueStorage;
}
//# sourceMappingURL=types.d.ts.map