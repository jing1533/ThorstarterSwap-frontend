import { ProviderContext, WalletActions, WalletConfig } from './types';
import Wallet, { EventHandler as WalletEventHandler } from '@rango-dev/wallets-core';
/**
 *
 *
 */
export declare function useInitializers(onChangeState: WalletEventHandler): (wallet: {
    actions: WalletActions;
    config: WalletConfig;
}) => Wallet;
export declare function useWallets(): ProviderContext;
//# sourceMappingURL=hooks.d.ts.map