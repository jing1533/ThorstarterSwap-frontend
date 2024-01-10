import { RemoveNameField, RouteExecutionEvents, StepEvent } from '../types';
import { PendingSwap, PendingSwapStep } from 'rango-types/lib';
type NotifierParams = {
    swap: PendingSwap;
    step: PendingSwapStep | null;
} & {
    event: RemoveNameField<StepEvent, 'message' | 'messageSeverity'>;
};
export declare const eventEmitter: import("mitt").Emitter<RouteExecutionEvents>;
export declare function notifier(params: NotifierParams): void;
export {};
//# sourceMappingURL=eventEmitter.d.ts.map