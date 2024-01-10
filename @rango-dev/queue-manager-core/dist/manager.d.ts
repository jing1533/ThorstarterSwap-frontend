import type { QueueEventHandlers, TaskEvent } from './queue';
import type { QueueStorage } from './types';
import Queue from './queue';
import { Status } from './types';
export type ManagerContext = object;
export type QueueName = string;
export type QueueID = string;
export type BlockedTask = {
    queue_id: string;
    task_id: string;
    action: string;
    reason: Record<string, unknown>;
    storage: {
        get: () => QueueStorage;
        set: (data: QueueStorage) => QueueStorage;
    };
};
export type SetStorage<T> = (nextStorage: T) => T;
export interface ExecuterActions<T extends QueueStorage = QueueStorage, V extends string = string, C = ManagerContext> {
    next: () => void;
    retry: () => void;
    failed: () => void;
    schedule: (actionName: V) => void;
    setStorage: SetStorage<T>;
    getStorage: () => T;
    block: (reason: Record<string, unknown>) => void;
    unblock: () => void;
    context: C;
}
export interface QueueDef<T extends QueueStorage = QueueStorage, V extends string = string, C = ManagerContext> {
    name: QueueName;
    actions: {
        [K in V]: (actions: ExecuterActions<T, V, C>) => void | Promise<void>;
    };
    events?: Partial<QueueEventHandlers>;
    run: V[];
    whenTaskBlocked?: (event: any, params: {
        queue_id: string;
        queue: Queue;
        context: C;
        getBlockedTasks: () => BlockedTask[];
        forceExecute: (queue_id: string, data?: object) => void;
        retry: () => void;
        manager: Manager;
    }) => void;
}
export interface Events {
    onCreateQueue: (queue: QueueInfo & {
        id: QueueID;
    }) => void;
    onUpdateQueue: (queue_id: QueueID, queue: QueueInfo) => void;
    onCreateTask: (queue_id: QueueID, event: TaskEvent) => void;
    onUpdateTask: (queue_id: QueueID, event: TaskEvent) => void;
    onStorageUpdate: (queue_id: QueueID, data: QueueStorage) => void;
    onTaskBlock: (queue_id: QueueID) => void;
    onDeleteQueue: (queue_id: QueueID) => void;
    onPersistedDataLoaded: (manager: Manager) => void;
}
interface ManagerOptions {
    events?: Partial<Events>;
    queuesDefs: QueueDef[];
    context?: ManagerContext;
    isPaused?: boolean;
}
export interface QueueInfo {
    name: QueueName;
    createdAt: number;
    status: Status;
    list: Queue;
    actions: {
        run: () => void;
        cancel: () => void;
        setStorage: SetStorage<any>;
        getStorage: () => any;
    };
}
declare class Manager {
    private queuesDefs;
    private queues;
    private events;
    private persistor;
    private context;
    private isPaused;
    private syncInterval;
    /**
     *
     * Making an instance, initilize events, setup a persistor and try to recover the last state of the manager.
     *
     *
     */
    constructor(options: ManagerOptions);
    /**
     *
     * Create a new queue by client.
     *
     * It will do the internal things to make a queue from definitions, and running using Manager.
     *
     * Notes:
     *  - After creating the queue, it will be run automatically.
     *
     * @returns an ID for queue so it can be used to get the created queue later by client.
     *
     */
    create(name: QueueName, storage: QueueStorage, options?: {
        id?: QueueID;
    }): Promise<string>;
    /**
     *
     * Reading persisted data from storage then brings into memory.
     *
     * Notes:
     *  - Reset the memory, so we can call this method whenever we want and not only on the initialize process.
     *  - All the events will be tirggered (like onCreateQueue, onCreateTask, onBlock, ....)
     *  - Try to `resume` if the status is `running`.
     *  - Trigger `onPersistedDataLoaded` event when queues recovered from storage.
     *
     */
    /**
     * Get a queue by its ID.
     *
     * @returns An object includes queue and its state in `Manager`.
     */
    get(queue_id: QueueID): QueueInfo | undefined;
    /**
     * Get all queues from `Manager`
     *
     * @returns a list of queues includes all the queues and their states.
     */
    getAll(): Map<string, QueueInfo>;
    deleteQueue(queue_id: QueueID): void;
    /**
     *
     * Ask from manager to run pending queues.
     *
     * It only try to run queues with `PENDING` status and ignore all the other statuses.
     *
     */
    execute(): void;
    /**
     *
     * Try to find queues with `RUNNING` status to run them again.
     *
     * It's useful for recovering the queue at some certain points
     * like running a currepted task (reloaded when it was running) or needs manual trigger from UI.
     *
     * @returns
     */
    resume(): void;
    /**
     *
     * Run all `BLOCKED` queues once again.
     *
     * If a queue has `BLOCKED` status and the last task is `BLOCKED` as well,
     * The task will be run one more time.
     *
     * Useful for scenarios like we are blocking the queue under some conditions in task,
     * We can use this method to ask the queue to run the blocked task one more time and
     * maybe this time condtions are met and the queue can be proceed.
     *
     * @returns
     */
    retry(): void;
    /**
     *
     * Run a blocked task on a specific queue with the ability to pass more data.
     *
     * Useful when we have a custom logic for running queue and needs to pass some specific data
     * to the task and try to run it manually with the provided data.
     *
     */
    forceExecute(queue_id: string, data?: object): void;
    /**
     * Active readonly mode for manager, it means it doesn't run anythin,
     * And only can be used to read the data.
     */
    pause(): void;
    /**
     * Activate normal mode which means it will be able to run the queuese as well.
     */
    run(): void;
    private sync;
    /**
     *
     * Making a new instance from `Queue` and adds Manager's event handlers to it.
     *
     * @returns An instance of `Queue` with wrapped event handlers from Manager.
     *
     */
    private createQueue;
    /**
     * Go through all tasks (from all queues) and return a list of blocked tasks
     *
     * @returns a list of blocked tasks including enough information to get the queue and mutate the storage.
     *
     */
    private getBlockedTasks;
    /**
     *
     * Add a queue to the manager to keep track of the queue and its state.
     *
     * @param id
     * @param queue
     * @returns
     */
    private add;
    /**
     *
     * Sync in-memory state (of `Manager`) with storage (persist).
     *
     * Usually we call this method after a change detected in the state of manager.
     *
     */
    private handleUpdate;
    private getContext;
    private shouldExecute;
}
export { Manager };
//# sourceMappingURL=manager.d.ts.map