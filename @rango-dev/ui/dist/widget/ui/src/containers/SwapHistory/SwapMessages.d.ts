import React from 'react';
export type PropTypes = {
    currentStepBlockchain: string;
    switchNetwork?: () => Promise<any>;
    shortMessage: string;
    detailedMessage: {
        content: string;
        long: boolean;
    };
    type?: 'success' | 'error' | 'warning' | 'info';
    lastConvertedTokenInFailedSwap?: {
        symbol: string;
        blockchain: string;
        outputAmount: string;
    };
};
export declare const SwapMessages: React.FC<PropTypes>;
//# sourceMappingURL=SwapMessages.d.ts.map