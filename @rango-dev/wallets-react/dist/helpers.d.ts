import { WalletConfig, WalletType } from '@rango-dev/wallets-shared';
import Wallet from '@rango-dev/wallets-core';
import type { Options, State as WalletState, EventHandler as WalletEventHandler } from '@rango-dev/wallets-core';
import { State, WalletActions, ProviderInterface, WalletProviders } from './types';
export declare function choose(wallets: any[], type: WalletType): any | null;
export declare const defaultWalletState: WalletState;
export declare function state_reducer(state: State, action: any): State;
export declare function connectedWallets(providersState: State): WalletType[];
export declare function availableWallets(providersState: State): WalletType[];
export declare function checkWalletProviders(list: ProviderInterface[]): WalletProviders;
export declare function isAsync(fn: Function): boolean;
export declare function needsCheckInstallation(options: Options): boolean;
export declare function tryPersistWallet({ type, walletActions, getState, }: {
    type: WalletType;
    walletActions: WalletActions;
    getState: (walletType: WalletType) => WalletState;
}): Promise<void>;
export declare function tryRemoveWalletFromPersistance({ type, walletActions, }: {
    type: WalletType;
    walletActions: WalletActions;
}): void;
export declare function clearPersistance(): void;
export declare function autoConnect(wallets: WalletProviders, getWalletInstance: (wallet: {
    actions: WalletActions;
    config: WalletConfig;
}) => Wallet<any>): Promise<void>;
export declare function makeEventHandler(dispatcher: any, onUpdateState?: WalletEventHandler): WalletEventHandler;
//# sourceMappingURL=helpers.d.ts.map