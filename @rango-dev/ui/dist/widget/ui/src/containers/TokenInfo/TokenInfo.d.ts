import type { ConnectedWallet } from '../..';
import type { TokenWithBalance } from '../../types/meta';
import type { BestRouteResponse, BlockchainMeta, Token } from 'rango-sdk';
import React from 'react';
type PropTypes = ({
    type: 'From';
    onAmountChange: (amount: string) => void;
} | {
    type: 'To';
    outputAmount: string;
    outputUsdValue: string;
    percentageChange: string;
    showPercentageChange: boolean;
}) & {
    chain: BlockchainMeta | null;
    token: Token | null;
    loadingStatus: 'loading' | 'success' | 'failed';
    fromBlockchain: BlockchainMeta | null;
    toBlockchain: BlockchainMeta | null;
    inputUsdValue: string;
    fromToken: TokenWithBalance | null;
    setInputAmount: (amount: string) => void;
    connectedWallets: ConnectedWallet[];
    inputAmount: string;
    bestRoute: BestRouteResponse | null;
    fetchingBestRoute: boolean;
    onChainClick: () => void;
    onTokenClick: () => void;
    tokenBalanceReal: string;
    tokenBalance: string;
};
export declare function TokenInfo(props: PropTypes): React.JSX.Element;
export {};
//# sourceMappingURL=TokenInfo.d.ts.map