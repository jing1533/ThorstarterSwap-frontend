import { ExecuterActions, QueueInfo } from '@rango-dev/queue-manager-core';
import { ArrayElement, SwapActionTypes, SwapQueueContext, SwapQueueDef, SwapStorage, Step } from './types';
import { Meta, Network, WalletState, WalletType } from '@rango-dev/wallets-shared';
import { Providers } from '@rango-dev/wallets-react';
import { Transaction, TransactionType, EvmBlockchainMeta, CreateTransactionResponse } from 'rango-sdk';
import { Manager } from '@rango-dev/queue-manager-core';
import { PendingSwap, PendingSwapNetworkStatus, PendingSwapStep, StepStatus, SwapStatus, Wallet } from './shared';
import { APIErrorCode, SignerErrorCode } from 'rango-types/lib';
type WhenTaskBlocked = Parameters<NonNullable<SwapQueueDef['whenTaskBlocked']>>;
type WhenTaskBlockedEvent = WhenTaskBlocked[0];
type WhenTaskBlockedMeta = WhenTaskBlocked[1];
/**
 *
 * We simply use module-level variable to keep track of which queue has claimed the execution of parallel runnings.
 *
 */
export declare function claimQueue(): {
    claimedBy: () => string | undefined;
    setClaimer: (queue_id: string) => void;
    reset: () => void;
};
/**
 *
 * We use module-level variable to keep track of
 * map of transactions hash to the TransactionResponse and ...
 *
 */
type TransactionData = {
    response?: any;
    receiptReceived?: boolean;
};
export declare function inMemoryTransactionsData(): {
    getTransactionDataByHash: (hash: string) => TransactionData;
    setTransactionDataByHash: (hash: string, data: TransactionData) => void;
};
/**
 * Sample inputs are:
 *  - "metamask-ETH"
 *  - "metamask-BSC-BSC:0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
 *  - "token-pocket-BSC-BSC:0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
 * Returns "wallet and network" separately, even if the wallet is dashed inside.
 *
 */
export declare function splitWalletNetwork(input: string): string[];
/**
 *
 * Returns `steps`, if it's a `running` swap.
 * Each `PendingSwap` has a `steps` inside it, `steps` shows how many tasks should be created and run to finish the swap.
 *
 */
export declare const getCurrentStep: (swap: PendingSwap) => PendingSwapStep | null;
/**
 *
 * Returns current step transaction
 *
 */
export declare const getCurrentStepTx: (currentStep: PendingSwapStep) => Transaction | null;
/**
 *
 * Set current step transaction
 *
 */
export declare const setCurrentStepTx: (currentStep: PendingSwapStep, transaction: Transaction) => PendingSwapStep;
/**
 *
 * Returns current step transaction type
 *
 */
export declare const getCurrentStepTxType: (currentStep: PendingSwapStep) => TransactionType | undefined;
/**
 *
 * Returns a boolean indicating that current step is an approval tx or not.
 *
 */
export declare const isApprovalCurrentStepTx: (currentStep: PendingSwapStep) => boolean;
/**
 * When we are doing a swap, there are some common fields that will be updated together.
 * This function helps us to update a swap status and also it will update some more fields like `extraMessageSeverity` based on the input.
 */
export declare function updateSwapStatus({ getStorage, setStorage, nextStatus, nextStepStatus, message, details, errorCode, hasAlreadyProceededToSign, }: {
    getStorage: ExecuterActions<SwapStorage, SwapActionTypes, SwapQueueContext>['getStorage'];
    setStorage: ExecuterActions<SwapStorage, SwapActionTypes, SwapQueueContext>['setStorage'];
    nextStatus?: SwapStatus;
    nextStepStatus?: StepStatus;
    message?: string;
    details?: string | null | undefined;
    errorCode?: APIErrorCode | SignerErrorCode | null;
    hasAlreadyProceededToSign?: boolean;
}): {
    swap: PendingSwap;
    step: PendingSwapStep | null;
    failureType?: APIErrorCode;
};
/**
 *
 * Set current step transaction hash, update pending swap status, and notify user if needed
 *
 */
export declare function setStepTransactionIds({ getStorage, setStorage }: ExecuterActions<SwapStorage, SwapActionTypes>, txId: string | null, explorerUrl?: {
    url?: string;
    description?: string;
}): void;
/**
 * If a swap needs a wallet to be connected,
 * By calling this function some related fields will be updated to show a correct message and state for notfiying the user.
 */
export declare function markRunningSwapAsWaitingForConnectingWallet({ getStorage, setStorage, }: Pick<ExecuterActions, 'getStorage' | 'setStorage'>, reason: string, reasonDetail: string): void;
/**
 * If a swap needs a certain network to proceed,
 * By calling this function some related fields will be updated to show a correct message and state for notfiying the user.
 */
export declare function markRunningSwapAsSwitchingNetwork({ getStorage, setStorage, }: Pick<ExecuterActions, 'getStorage' | 'setStorage'>): {
    swap: PendingSwap;
    step: PendingSwapStep;
} | undefined;
/**
 * We are marking the queue as it depends on other queues to be run (on Parallel mode)
 * By calling this function some related fields will be updated to show a correct message and state for notfiying the user.
 */
export declare function markRunningSwapAsDependsOnOtherQueues({ getStorage, setStorage, }: Pick<ExecuterActions, 'getStorage' | 'setStorage'>): {
    swap: PendingSwap;
    step: PendingSwapStep;
} | undefined;
export declare function delay(ms: number): Promise<unknown>;
/**
 *
 * To execute a swap, we are keeping the user prefrences on what wallet they are going to use for a sepecific blockchain
 * By passing the swap and the network we are looking for, it returns the wallet name that user selected.
 *
 */
export declare const getSwapWalletType: (swap: PendingSwap, network: Network) => WalletType;
/**
 *
 * We are keeping the connected wallet in a specific structure (`Wallet`),
 * By using this function we normally want to check a specific wallet is connected and exists or not.
 *
 */
export declare function isWalletNull(wallet: Wallet | null): boolean;
/**
 * On our implementation for `wallets` package, We keep the instance in 2 ways
 * If it's a single chain wallet, it returns the instance directly,
 * If it's a multichain wallet, it returns a `Map` of instances.
 * This function will get the `ETHEREUM` instance in both types.
 */
export declare function getEvmProvider(providers: Providers, type: WalletType): any;
/**
 * In a `PendingSwap`, each step needs a wallet to proceed,
 * By using this function we can access what wallet exactly we need to run current step.
 */
export declare function getRequiredWallet(swap: PendingSwap): {
    type: WalletType | null;
    network: Network | null;
    address: string | null;
};
/**
 * For running a swap safely, we need to make sure about the state of wallet
 * which means the netowrk/chain of wallet should be exactly on what a transaction needs.
 */
export declare function isNetworkMatchedForTransaction(swap: PendingSwap, step: PendingSwapStep, wallet: Wallet | null, meta: Meta, providers: Providers): Promise<boolean>;
export declare const isTxAlreadyCreated: (swap: PendingSwap, step: PendingSwapStep) => boolean;
export declare function resetNetworkStatus(actions: ExecuterActions<SwapStorage, SwapActionTypes, SwapQueueContext>): void;
export declare function updateNetworkStatus(actions: ExecuterActions<SwapStorage, SwapActionTypes, SwapQueueContext>, data?: {
    message: string;
    details: string;
    status: PendingSwapNetworkStatus | null;
}): void;
/**
 * Event handler for blocked tasks.
 * If a transcation execution is manually blocked (like for parallel or waiting for wallet),
 * This function will be called by queue manager using `queue definition`.
 *
 * It checks if the required wallet is connected, unblock the queue to be run.
 */
export declare function onBlockForConnectWallet(event: WhenTaskBlockedEvent, meta: WhenTaskBlockedMeta): void;
/**
 * Event handler for blocked tasks.
 * If a transcation execution is manually blocked (like for parallel or waiting for walle),
 * This function will be called by queue manager using `queue definition`.
 *
 * It checks if the required network is connected, unblock the queue to be run.
 * Note: it automatically try to switch the network if its `provider` supports.
 */
export declare function onBlockForChangeNetwork(_event: WhenTaskBlockedEvent, meta: WhenTaskBlockedMeta): void;
/**
 * Event handler for blocked tasks. (Parallel mode)
 * If a transcation execution flow is manually blocked (like for parallel or waiting for walle),
 * This function will be called by queue manager using `queue definition`.
 *
 * It checks the blocked tasks, if there is no active `claimed` queue, try to give it to the best candidate.
 */
export declare function onDependsOnOtherQueues(_event: WhenTaskBlockedEvent, meta: WhenTaskBlockedMeta): void;
export declare function isRequiredWalletConnected(swap: PendingSwap, getState: (type: WalletType) => WalletState): {
    ok: boolean;
    reason: 'not_connected' | 'account_miss_match';
};
export declare function singTransaction(actions: ExecuterActions<SwapStorage, SwapActionTypes, SwapQueueContext>): void;
export declare function checkWaitingForConnectWalletChange(params: {
    wallet_network: string;
    manager?: Manager;
    evmChains: EvmBlockchainMeta[];
}): void;
export declare function checkWaitingForNetworkChange(manager?: Manager): void;
/**
 * Get list of all running swaps
 *
 * @param manager
 * @returns list of pending swaps
 */
export declare function getRunningSwaps(manager: Manager): PendingSwap[];
/**
 *
 * Trying to reset notifications for pending swaps to correct message on page load.
 * We could remove this after supporting auto connect for wallets.
 *
 * @param swaps
 * @param notifier
 * @returns
 */
export declare function resetRunningSwapNotifsOnPageLoad(runningSwaps: PendingSwap[]): void;
/**
 *
 * Try to run blocked tasks by wallet and network name.
 * Goes through queues and extract blocked queues with matched wallet.
 * If found any blocked tasks with same wallet and network, runs them.
 * If not, runs only blocked tasks with matched wallet.
 *
 * @param wallet_network a string includes `wallet` type and `network` type.
 * @param manager
 * @returns
 */
export declare function retryOn(wallet_network: string, manager?: Manager, canSwitchNetworkTo?: (type: WalletType, network: Network) => boolean, options?: {
    fallbackToOnlyWallet: boolean;
}): void;
export declare function isNeedBlockQueueForParallel(step: PendingSwapStep): boolean;
export declare function throwOnOK(rawResponse: Promise<CreateTransactionResponse>): Promise<CreateTransactionResponse>;
export declare function cancelSwap(swap: QueueInfo, manager?: Manager): {
    swap: PendingSwap;
    step: PendingSwapStep | null;
};
export declare function getLastSuccessfulStep<T extends {
    status: StepStatus;
}[]>(steps: T): ArrayElement<T> | undefined;
export declare function getFailedStep<T extends {
    status: StepStatus;
}[]>(steps: T): ArrayElement<T> | undefined;
export declare function isApprovalTX(step: Step): boolean;
export {};
//# sourceMappingURL=helpers.d.ts.map