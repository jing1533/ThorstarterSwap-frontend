import type { RouteState } from '../store/bestRoute';
import type { SettingsState } from '../store/settings';
interface BestRouteStoreParams {
    fromBlockchain?: RouteState['fromBlockchain'];
    toBlockchain?: RouteState['toBlockchain'];
    fromToken?: RouteState['fromToken'];
    toToken?: RouteState['toToken'];
    inputAmount?: RouteState['inputAmount'];
}
interface SettingsStoreParams {
    slippage?: SettingsState['slippage'];
    customSlippage?: SettingsState['customSlippage'];
    disabledLiquiditySources?: SettingsState['disabledLiquiditySources'];
    infiniteApprove?: SettingsState['infiniteApprove'];
}
export type BestRouteEqualityParams = {
    store: 'bestRoute';
    prevState: BestRouteStoreParams;
    currentState: BestRouteStoreParams;
} | {
    store: 'settings';
    prevState: SettingsStoreParams;
    currentState: SettingsStoreParams;
};
export declare enum ConfirmSwapErrorTypes {
    NO_ROUTE = 0,
    ROUTE_UPDATED_WITH_HIGH_VALUE_LOSS = 1,
    REQUEST_FAILED = 2,
    REQUEST_CANCELED = 3
}
export type ConfirmSwapError = {
    type: ConfirmSwapErrorTypes.NO_ROUTE;
    diagnosisMessage?: string;
} | {
    type: Exclude<ConfirmSwapErrorTypes, ConfirmSwapErrorTypes.NO_ROUTE>;
};
export declare enum RouteWarningType {
    ROUTE_UPDATED = 0,
    ROUTE_SWAPPERS_UPDATED = 1,
    ROUTE_COINS_UPDATED = 2,
    ROUTE_AND_OUTPUT_AMOUNT_UPDATED = 3
}
export type RouteWarning = {
    type: RouteWarningType.ROUTE_AND_OUTPUT_AMOUNT_UPDATED;
    newOutputAmount: string;
    percentageChange: string;
} | {
    type: Exclude<RouteWarningType, RouteWarningType.ROUTE_AND_OUTPUT_AMOUNT_UPDATED>;
};
export declare enum SlippageWarningType {
    INSUFFICIENT_SLIPPAGE = 0,
    HIGH_SLIPPAGE = 1
}
export type ConfirmSwapWarnings = {
    route: RouteWarning | null;
    balance: {
        messages: string[];
    } | null;
    slippage: {
        type: SlippageWarningType;
        slippage: string | null;
    } | null;
};
export {};
//# sourceMappingURL=routing.d.ts.map