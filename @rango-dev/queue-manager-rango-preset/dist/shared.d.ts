import { Network, WalletType } from '@rango-dev/wallets-shared';
import { CosmosTransaction, EvmTransaction, SimulationResult, SolanaTransaction, StarknetTransaction, TronTransaction, Transfer as TransferTransaction, AmountRestrictionType, BestRouteResponse, MetaResponse, Token, SwapResult, BlockchainMeta } from 'rango-sdk';
import BigNumber from 'bignumber.js';
import { TonTransaction } from 'rango-types';
export interface PendingSwapWithQueueID {
    id: string;
    swap: PendingSwap;
}
export type WalletBalance = {
    chain: Network;
    symbol: string;
    ticker: string;
    address: string | null;
    rawAmount: string;
    decimal: number | null;
    amount: string;
    logo: string | null;
    usdPrice: number | null;
};
export type Account = {
    balances: WalletBalance[] | null;
    address: string;
    loading: boolean;
    walletType: WalletType;
    error: boolean;
    explorerUrl: string | null;
    isConnected?: boolean;
};
export type Blockchain = {
    name: string;
    accounts: Account[];
};
export type Wallet = {
    blockchains: Blockchain[];
};
export type EventType = 'swap_started' | 'confirm_contract' | 'confirm_transfer' | 'task_failed' | 'task_completed' | 'task_canceled' | 'task_paused' | 'contract_confirmed' | 'confirm_approve_contract' | 'contract_rejected' | 'check_tx_status' | 'check_approve_tx_status' | 'transfer_rejected' | 'transfer_failed' | 'calling_smart_contract' | 'smart_contract_called' | 'smart_contract_call_failed' | 'step_completed_with_output' | 'waiting_for_network_change' | 'waiting_for_connecting_wallet' | 'waiting_for_change_wallet_account' | 'network_changed' | 'not_enough_balance' | 'not_enough_approval' | 'waiting_for_queue' | 'check_fee_failed' | 'route_failed_to_find' | 'transaction_expired';
export type SwapSavedSettings = {
    slippage: string;
    disabledSwappersIds?: string[];
    disabledSwappersGroups?: string[];
    infiniteApprove?: boolean;
};
type InternalStepState = 'PENDING' | 'CREATED' | 'WAITING' | 'SIGNED' | 'SUCCESSED' | 'FAILED';
export type SwapperStatusStep = {
    name: string;
    state: InternalStepState;
    current: boolean;
};
export declare enum PendingSwapNetworkStatus {
    WaitingForConnectingWallet = "waitingForConnectingWallet",
    WaitingForQueue = "waitingForQueue",
    WaitingForNetworkChange = "waitingForNetworkChange",
    NetworkChanged = "networkChanged"
}
export type SwapExplorerUrl = {
    url: string;
    description: string | null;
};
export type StepStatus = 'created' | 'running' | 'failed' | 'success' | 'waitingForApproval' | 'approved';
export type PendingSwapStep = {
    id: number;
    fromBlockchain: string;
    fromSymbol: string;
    fromSymbolAddress: string | null;
    fromDecimals: number;
    fromAmountPrecision: string | null;
    fromAmountMinValue: string | null;
    fromAmountMaxValue: string | null;
    fromAmountRestrictionType: AmountRestrictionType | null;
    fromLogo: string;
    toBlockchain: string;
    toSymbol: string;
    toSymbolAddress: string | null;
    toDecimals: number;
    toLogo: string;
    swapperId: string;
    expectedOutputAmountHumanReadable: string | null;
    startTransactionTime: number;
    internalSteps: SwapperStatusStep[] | null;
    estimatedTimeInSeconds: number | null;
    status: StepStatus;
    networkStatus: PendingSwapNetworkStatus | null;
    executedTransactionId: string | null;
    executedTransactionTime: string | null;
    explorerUrl: SwapExplorerUrl[] | null;
    diagnosisUrl: string | null;
    outputAmount: string | null;
    cosmosTransaction: CosmosTransaction | null;
    transferTransaction: TransferTransaction | null;
    solanaTransaction: SolanaTransaction | null;
    evmApprovalTransaction: EvmTransaction | null;
    evmTransaction: EvmTransaction | null;
    tronApprovalTransaction: TronTransaction | null;
    tronTransaction: TronTransaction | null;
    starknetApprovalTransaction: StarknetTransaction | null;
    starknetTransaction: StarknetTransaction | null;
    tonTransaction: TonTransaction | null;
    swapperLogo: string | null;
    swapperType: string | null;
    fromBlockchainLogo: string | null;
    toBlockchainLogo: string | null;
    feeInUsd: string | null;
};
export type WalletTypeAndAddress = {
    walletType: WalletType;
    address: string;
};
export declare enum MessageSeverity {
    error = "error",
    warning = "warning",
    info = "info",
    success = "success"
}
export type SwapStatus = 'running' | 'failed' | 'success';
export type PendingSwap = {
    creationTime: string;
    finishTime: string | null;
    requestId: string;
    inputAmount: string;
    status: SwapStatus;
    isPaused: boolean;
    extraMessage: string | null;
    extraMessageSeverity: MessageSeverity | null;
    extraMessageErrorCode: string | null;
    extraMessageDetail: string | null | undefined;
    networkStatusExtraMessage: string | null;
    networkStatusExtraMessageDetail: string | null;
    lastNotificationTime: string | null;
    wallets: {
        [p: string]: WalletTypeAndAddress;
    };
    settings: SwapSavedSettings;
    steps: PendingSwapStep[];
    simulationResult: SimulationResult;
    validateBalanceOrFee: boolean;
    hasAlreadyProceededToSign?: boolean | null;
};
export declare const getCurrentBlockchainOfOrNull: (swap: PendingSwap, step: PendingSwapStep) => Network | null;
export declare const getCurrentBlockchainOf: (swap: PendingSwap, step: PendingSwapStep) => Network;
export declare const getScannerUrl: (txHash: string, network: Network, blockchainMetaMap: {
    [key: string]: BlockchainMeta;
}) => string | undefined;
export declare function getNextStep(swap: PendingSwap, currentStep: PendingSwapStep): PendingSwapStep | null;
/**
 * Returns the wallet address, based on the current step of `PendingSwap`.
 */
export declare const getCurrentAddressOf: (swap: PendingSwap, step: PendingSwapStep) => string;
export declare function getRelatedWallet(swap: PendingSwap, currentStep: PendingSwapStep): WalletTypeAndAddress;
export declare function getRelatedWalletOrNull(swap: PendingSwap, currentStep: PendingSwapStep): WalletTypeAndAddress | null;
export declare const getUsdPrice: (blockchain: string, symbol: string, address: string | null, allTokens: Token[]) => number | null;
export declare function getUsdFeeOfStep(step: SwapResult, allTokens: Token[]): BigNumber;
export declare function calculatePendingSwap(inputAmount: string, bestRoute: BestRouteResponse, wallets: {
    [p: string]: WalletTypeAndAddress;
}, settings: SwapSavedSettings, validateBalanceOrFee: boolean, meta: MetaResponse | null): PendingSwap;
export {};
//# sourceMappingURL=shared.d.ts.map