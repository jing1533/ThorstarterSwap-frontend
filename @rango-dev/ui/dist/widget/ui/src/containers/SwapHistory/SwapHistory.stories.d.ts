import React from 'react';
import { PropTypes } from './SwapHistory';
declare const _default: import("@storybook/types").ComponentAnnotations<import("@storybook/react/dist/types-0a347bb9").R, {
    pendingSwap: import("@rango-dev/queue-manager-rango-preset").PendingSwap;
    onCopy: (requestId: string) => void;
    onBack: () => void;
    isCopied: boolean;
    onCancel: (requestId: string) => void;
    onRetry?: (() => void) | undefined;
    date: string;
    previewInputs?: React.ReactNode;
} & import("./SwapMessages").PropTypes>;
export default _default;
export declare const Main: (args: PropTypes) => React.JSX.Element;
//# sourceMappingURL=SwapHistory.stories.d.ts.map