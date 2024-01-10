import { ManagerState } from './types';
type Update<T> = (name: keyof T, value: T[keyof T]) => void;
export declare const initState: ManagerState;
export declare function useManagerState(): {
    state: ManagerState;
    update: Update<ManagerState>;
};
export {};
//# sourceMappingURL=state.d.ts.map