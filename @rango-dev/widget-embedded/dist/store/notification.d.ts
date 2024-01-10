import type { Notification } from '../types/notification';
import type { Route, RouteEvent, StepEvent } from '@rango-dev/queue-manager-rango-preset';
export interface NotificationState {
    notifications: Notification[];
    setNotification: (event: RouteEvent | StepEvent, route: Route) => void;
    setAsRead: (requestId: Notification['requestId']) => void;
    getUnreadNotifications: () => Notification[];
}
export declare const useNotificationStore: {
    (): NotificationState;
    <U>(selector: (state: NotificationState) => U, equals?: ((a: U, b: U) => boolean) | undefined): U;
} & Omit<Omit<import("zustand").StoreApi<NotificationState>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<NotificationState, NotificationState>>) => void;
        clearStorage: () => void;
        rehydrate: () => void | Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: NotificationState) => void) => () => void;
        onFinishHydration: (fn: (state: NotificationState) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<NotificationState, NotificationState>>;
    };
}, "subscribe"> & {
    subscribe: {
        (listener: (selectedState: NotificationState, previousSelectedState: NotificationState) => void): () => void;
        <U_1>(selector: (state: NotificationState) => U_1, listener: (selectedState: U_1, previousSelectedState: U_1) => void, options?: {
            equalityFn?: ((a: U_1, b: U_1) => boolean) | undefined;
            fireImmediately?: boolean | undefined;
        } | undefined): () => void;
    };
} & {
    use: {
        notifications: () => Notification[];
        setNotification: () => (event: RouteEvent | StepEvent, route: Route) => void;
        setAsRead: () => (requestId: Notification['requestId']) => void;
        getUnreadNotifications: () => () => Notification[];
    };
};
//# sourceMappingURL=notification.d.ts.map