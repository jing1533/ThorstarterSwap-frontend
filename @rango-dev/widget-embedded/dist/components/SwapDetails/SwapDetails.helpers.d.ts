import type { GetStep } from '../SwapDetailsAlerts';
import type { PendingSwapStep } from '@rango-dev/queue-manager-rango-preset';
import type { Step, StepDetailsProps } from '@rango-dev/ui';
export declare const RESET_INTERVAL = 2000;
export declare const SECONDS = 60;
export declare const getSteps: ({ swap, blockchains, ...args }: GetStep) => Step[];
export declare function getStepState(step: PendingSwapStep): StepDetailsProps['state'];
//# sourceMappingURL=SwapDetails.helpers.d.ts.map