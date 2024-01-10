export interface PersistStorage<T> {
    getItem: (name: string) => T | null;
    setItem: (name: string, value: T) => void;
    removeItem: (name: string) => void;
}
export declare class Persistor<T> implements PersistStorage<T> {
    getItem(name: string): T | null;
    setItem(name: string, value: T): void;
    removeItem(name: string): void;
}
//# sourceMappingURL=persistor.d.ts.map