import { ManagerContext, QueueDef, QueueID } from './manager';
import { QueueStorage, Status } from './types';
type TaskId = string;
export type TaskState = {
    status: Status;
    blockedFor: any;
};
export interface QueueContext {
    _queue?: {
        id: string;
    };
}
export type NextParams = {
    context: ManagerContext;
};
export interface QueueState {
    status: Status;
    activeTaskIndex: number;
    tasks: {
        [key in TaskId]: TaskState;
    };
}
export interface Task {
    id: TaskId;
    action: string;
}
export type InitTasks = {
    tasks: Task[];
    state: QueueState;
    storage: QueueStorage;
};
export interface TaskEvent {
    id: TaskId;
    task: TaskState;
    action: string;
}
export interface QueueEventHandlers {
    onUpdateListStatus: (status: Status) => void;
    onCreate: (event: TaskEvent) => void;
    onUpdate: (event: TaskEvent) => void;
    onStorageUpdate: (data: QueueStorage) => void;
    onBlock: (data: Omit<TaskEvent, 'task'> & {
        reason: Record<string, unknown>;
    }) => void;
    onUnblock: (data: {
        id: string;
    }) => void;
}
interface QueueOptions {
    id: QueueID;
    events: QueueEventHandlers;
    actions: QueueDef['actions'];
}
/**
 *
 * Notes on statuses:
 *  - Success: last task has success status
 *  - Failed: any of task has been failed
 *  - Running: first task is not on pending
 *  - Pending: default state. not started
 *
 */
declare class Queue {
    id: string;
    state: QueueState;
    tasks: Task[];
    private events;
    private actions;
    private storage;
    constructor(options: QueueOptions);
    /**
     * Update queue status and trigger an event
     *
     */
    private updateQueueStatus;
    private updateActiveTaskIndex;
    /**
     *
     * Update task state (`status`, `blockedFor`) and trigger an event.
     * @param id
     * @param nextState
     */
    private updateTaskState;
    /**
     * Create a task by providing an `action` name.
     *
     * this method creating the task, push it to the queue's tasks and trigger an event.
     * @param action
     */
    createTask(action: string): void;
    /**
     * Initilize a queue with some tasks, instead of an empty queue.
     *
     * Using it for recover the queue state from persistor.
     *
     */
    initTasks(info: InitTasks): void;
    checkBlock(): void;
    /**
     * Getting task state by ID
     */
    get(id: string): TaskState | null;
    /**
     *
     * Checking if status of the last is `SUCCESS` or not
     *
     */
    private lastTaskIsSuccessful;
    /**
     * If the first task started (it's not PENDING),
     * it means the queue has been ran.
     *
     * @returns
     */
    private firstTaskIsStarted;
    /**
     * Getting active task index from state and
     * returns the task and its state.
     *
     */
    private getActiveTask;
    /**
     * Update and find the queue status by checking state of each tasks in the queue.
     */
    check(): void;
    /**
     * Execute active task.
     * Based on the state of active task, the behaviour is different. If status is:
     *  - Success -> we need to go to next task by updating the active index and try `next` on more time.
     *  - Failed, Running, or no active task -> doesn't do anything.
     *  - Pending or Blocked -> update the task and queue status to running, and execute the provided `action` for the task.
     *
     * The queue is a linked list somehow, active task means the pointer to where we are in the queue right now.
     *
     */
    next(params: NextParams): void;
    /**
     * Change the `status` of active task and queue to BLOCKED, then trigger an event.
     */
    block({ reason, silent, }: {
        reason: Record<string, unknown>;
        silent?: boolean;
    }): void;
    /**
     * If the active task is `BLOCKED`, update the task status to `PENDING`, queue status to `RUNNING`
     * then trigger an event.
     */
    unblock(): void;
    /**
     * If the active task is `BLOCKED` then execute the `action` for the task.
     *
     * It is useful for when we need to run a blocked task without changing the status of task at the first place.
     * For scenarios like we have some conditions in `action` and needs to run the `action` again
     * to check the conditions are met or not, if yes, so we can proceed the `action`.
     *
     */
    forceRun(params: NextParams): void;
    private markCurrentTaskAsFinished;
    /**
     * If the active task is `RUNNING`, change it to `PENING` the try to run the task by calling `next`.
     * If it's other than `RUNNING` we reset the queue state and run the queue from the beggining.
     *
     * @param params
     * @returns
     */
    resume(params: NextParams): void;
    /**
     *
     * Cancel the queue by changing active task and queue status to `CANCELED`.
     *
     */
    cancel(): void;
    /**
     * Update queue status, and all the tasks inside queue to `PENDING`.
     */
    private resetState;
    getStorage(): QueueStorage;
    setStorage(data: QueueStorage): QueueStorage;
    private getContext;
}
export default Queue;
//# sourceMappingURL=queue.d.ts.map