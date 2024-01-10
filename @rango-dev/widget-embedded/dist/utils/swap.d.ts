import type { LoadingStatus } from '../store/meta';
import type { ConnectedWallet } from '../store/wallets';
import type { ConvertedToken, SwapButtonState, Wallet } from '../types';
import type { PendingSwap, PendingSwapStep } from '@rango-dev/queue-manager-rango-preset';
import type { WalletType } from '@rango-dev/wallets-shared';
import type { BestRouteRequest, BestRouteResponse, BlockchainMeta, RecommendedSlippage, SwapResult, Token } from 'rango-sdk';
import BigNumber from 'bignumber.js';
export declare function getOutputRatio(inputUsdValue: BigNumber | null, outputUsdValue: BigNumber | null): BigNumber | 0;
export declare function outputRatioHasWarning(inputUsdValue: BigNumber | null, outputRatio: BigNumber | 0): boolean;
export declare function hasLimitError(bestRoute: BestRouteResponse | null): boolean;
export declare function LimitErrorMessage(bestRoute: BestRouteResponse | null): {
    swap: SwapResult | null;
    fromAmountRangeError: string;
    recommendation: string;
};
export declare function getSwapButtonState(loadingMetaStatus: LoadingStatus, connectedWallets: ConnectedWallet[], loading: boolean, bestRoute: BestRouteResponse | null, hasLimitError: boolean, highValueLoss: boolean, priceImpactCanNotBeComputed: boolean, needsToWarnEthOnPath: boolean, inputAmount: string): SwapButtonState;
export declare function canComputePriceImpact(bestRoute: BestRouteResponse | null, inputAmount: string, usdValue: BigNumber | null): boolean;
export declare function requiredWallets(route: BestRouteResponse | null): string[];
export declare const getUsdPrice: (blockchain: string, symbol: string, address: string | null, allTokens: Token[]) => number | null;
export declare function getUsdFeeOfStep(step: SwapResult, allTokens: Token[]): BigNumber;
export declare function getTotalFeeInUsd(bestRoute: BestRouteResponse | null, allTokens: Token[]): BigNumber | null;
export declare function hasHighFee(totalFeeInUsd: BigNumber | null): boolean;
export declare function hasSlippageError(slippages: (RecommendedSlippage | null)[] | undefined): boolean;
export declare function getMinRequiredSlippage(route: BestRouteResponse): string | null;
export declare function hasProperSlippage(userSlippage: string, minRequiredSlippage: string | null): boolean;
export declare function hasEnoughBalance(route: BestRouteResponse, selectedWallets: Wallet[]): boolean;
export declare function hasEnoughBalanceAndProperSlippage(route: BestRouteResponse, selectedWallets: Wallet[], userSlippage: string, minRequiredSlippage: string | null): boolean;
export declare function createBestRouteRequestBody(params: {
    fromToken: Token;
    toToken: Token;
    inputAmount: string;
    wallets?: Wallet[];
    selectedWallets?: Wallet[];
    disabledLiquiditySources: string[];
    slippage: number;
    affiliateRef: string | null;
    affiliatePercent: number | null;
    affiliateWallets: {
        [key: string]: string;
    } | null;
    initialRoute?: BestRouteResponse;
    destination?: string;
}): BestRouteRequest;
export declare function getWalletsForNewSwap(selectedWallets: Wallet[]): {
    [p: string]: {
        address: string;
        walletType: WalletType;
    };
};
export declare function getRouteOutputAmount(route: BestRouteResponse | null): string | null;
export declare function getPercentageChange(inputUsdValue: string | number | null, outputUsdValue: string | number | null): BigNumber | null;
export declare function isOutputAmountChangedALot(oldRoute: BestRouteResponse, newRoute: BestRouteResponse): boolean;
export declare function getBalanceWarnings(route: BestRouteResponse, selectedWallets: Wallet[]): string[];
export declare function calcOutputUsdValue(outputAmount?: string, tokenPrice?: number | null): BigNumber;
export declare function isNetworkStatusInWarningState(pendingSwapStep: PendingSwapStep | null): boolean;
export declare function getSwapMessages(pendingSwap: PendingSwap, currentStep: PendingSwapStep | null): {
    shortMessage: string;
    detailedMessage: {
        content: string;
        long: boolean;
    };
};
export declare function getLastConvertedTokenInFailedSwap(pendingSwap: PendingSwap): ConvertedToken;
export declare function shouldRetrySwap(pendingSwap: PendingSwap): boolean;
export declare function isValidCustomDestination(blockchain: string, address: string): boolean;
export declare function confirmSwapDisabled(fetching: boolean, showCustomDestination: boolean, customDestination: string, bestRoute: BestRouteResponse | null, selectedWallets: {
    walletType: string;
    chain: string;
}[], lastStepToBlockchain?: BlockchainMeta): boolean | undefined;
//# sourceMappingURL=swap.d.ts.map