import type { ConnectedWallet } from '../..';
import type { LoadingStatus, TokenWithBalance } from '../../types/meta';
import type { BestRouteResponse, BlockchainMeta, SwapResult } from 'rango-sdk';
import React from 'react';
interface HomePanelProps {
    bestRoute: BestRouteResponse | null;
    bestRouteError: string;
    fetchBestRoute: () => void;
    onClickHistory: () => void;
    onClickSettings: () => void;
    fromBlockchain: BlockchainMeta | null;
    toBlockchain: BlockchainMeta | null;
    fromToken: TokenWithBalance | null;
    toToken: TokenWithBalance | null;
    setInputAmount: (amount: string) => void;
    outputAmount: string;
    outputUsdValue: string;
    inputUsdValue: string;
    inputAmount: string;
    loadingStatus: LoadingStatus;
    showBestRoute: boolean;
    fetchingBestRoute: boolean;
    swapButtonTitle: string;
    swapButtonDisabled: boolean;
    swapButtonClick: () => void;
    onChainClick: (route: 'from-chain' | 'to-chain') => void;
    onTokenClick: (route: 'from-token' | 'to-token') => void;
    connectedWallets: ConnectedWallet[];
    highFee: boolean;
    errorMessage: string;
    hasLimitError: (bestRoute: BestRouteResponse | null) => boolean;
    swap: SwapResult | null;
    swapFromAmount: string | null;
    fromAmountRangeError: string;
    recommendation: string;
    totalFeeInUsd: string;
    swithFromAndToComponent: React.ReactNode;
    percentageChange: string;
    tokenBalanceReal: string;
    tokenBalance: string;
    totalTime: string;
    bestRouteData: BestRouteResponse | null;
    showPercentageChange: boolean;
}
/**
 * @deprecated Will be removed in v2
 */
export declare function HomePanel({ bestRoute, fromBlockchain, toBlockchain, fromToken, toToken, setInputAmount, outputAmount, inputAmount, loadingStatus, showBestRoute, fetchingBestRoute, outputUsdValue, inputUsdValue, swapButtonTitle, swapButtonDisabled, swapButtonClick, onChainClick, onTokenClick, connectedWallets, errorMessage, hasLimitError, swap, fromAmountRangeError, recommendation, swithFromAndToComponent, percentageChange, tokenBalanceReal, tokenBalance, swapFromAmount, showPercentageChange, }: HomePanelProps): React.JSX.Element;
export {};
//# sourceMappingURL=HomePanel.d.ts.map