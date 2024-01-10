import type { QueueID } from './manager';
import type { PersistedQueue } from './types';
import type { DBSchema, IDBPDatabase } from 'idb';
export declare const DB_NAME = "queues-manager";
type UpdatePersistedQueue = Partial<Pick<PersistedQueue, 'status' | 'state' | 'tasks' | 'storage'>>;
interface Database extends DBSchema {
    queues: {
        value: PersistedQueue;
        key: string;
    };
}
declare class Persistor {
    db: Promise<IDBPDatabase<Database>>;
    constructor();
    insertQueue(queue: PersistedQueue): Promise<void>;
    updateQueue(id: QueueID, queue: UpdatePersistedQueue): Promise<void>;
    getAll(): Promise<PersistedQueue[]>;
    deleteQueue(id: QueueID): Promise<void>;
}
export default Persistor;
//# sourceMappingURL=persistor.d.ts.map