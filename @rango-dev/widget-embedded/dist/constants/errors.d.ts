import type { ConfirmSwapError } from '../types';
export declare const errorMessages: {
    genericServerError: string;
    liquiditySourcesError: {
        title: string;
        description: string;
    };
    noRoutesError: {
        title: string;
        description: string;
    };
    bridgeLimitErrors: {
        increaseAmount: string;
        decreaseAmount: string;
    };
    highValueLossError: {
        impactTitle: string;
        title: string;
        description: string;
        confirmMessage: string;
    };
    routeUpdatedWithHighValueLoss: {
        title: string;
    };
    unknownPriceError: {
        impactTitle: string;
        title: string;
        description: string;
        confirmMessage: string;
    };
};
export declare function getConfirmSwapErrorMessage(error: ConfirmSwapError): string;
//# sourceMappingURL=errors.d.ts.map