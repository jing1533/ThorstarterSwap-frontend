import type { BestRouteEqualityParams, Wallet } from '../types';
import type { PendingSwap } from '@rango-dev/queue-manager-rango-preset';
import type { PriceImpactWarningLevel } from '@rango-dev/ui';
import type { SimulationAssetAndAmount, SimulationValidationStatus } from '@rango-dev/ui/dist/widget/ui/src/types/swaps';
import type { Asset, BestRouteResponse, BlockchainMeta, Token } from 'rango-sdk';
import BigNumber from 'bignumber.js';
export declare function searchParamsToToken(tokens: Token[], searchParams: string | null, chain: BlockchainMeta | null): Token | null;
export declare function getBestRouteToTokenUsdPrice(bestRoute: BestRouteResponse | null): number | null | undefined;
export declare function isNumberOfSwapsChanged(route1: BestRouteResponse, route2: BestRouteResponse): boolean;
export declare function isRouteSwappersUpdated(route1: BestRouteResponse, route2: BestRouteResponse): boolean;
export declare function isRouteInternalCoinsUpdated(route1: BestRouteResponse, route2: BestRouteResponse): boolean;
export declare function isRouteChanged(route1: BestRouteResponse, route2: BestRouteResponse): boolean;
export declare function outToRatioHasWarning(fromUsdValue: BigNumber | null, outToInRatio: BigNumber | 0): boolean;
export declare function getRequiredBalanceOfWallet(selectedWallet: Wallet, fee: SimulationValidationStatus[] | null): SimulationAssetAndAmount[] | null;
export declare function isRouteParametersChanged(params: BestRouteEqualityParams): boolean | undefined;
export declare function getFormattedBestRoute(bestRoute: BestRouteResponse | null): BestRouteResponse | null;
export declare function getFormattedPendingSwap(pendingSwap: PendingSwap): PendingSwap;
export declare const getBestRouteStatus: (loading: boolean, error: boolean) => "loading" | "success" | "failed";
export declare function getPriceImpactLevel(priceImpact: number): PriceImpactWarningLevel;
export declare function findCommonTokens<T extends Asset[], R extends Asset[]>(listA: T, listB: R): R;
export declare function createRetryRoute(pendingSwap: PendingSwap, blockchains: BlockchainMeta[], tokens: Token[]): {
    fromBlockchain: BlockchainMeta | null;
    fromToken: Token | null;
    toBlockchain: BlockchainMeta | null;
    toToken: Token | null;
    inputAmount: string;
};
//# sourceMappingURL=routing.d.ts.map