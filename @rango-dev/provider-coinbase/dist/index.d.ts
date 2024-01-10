import type { CanEagerConnect, CanSwitchNetwork, Connect, Subscribe, SwitchNetwork, WalletInfo } from '@rango-dev/wallets-shared';
import type { BlockchainMeta, SignerFactory } from 'rango-types';
import { getCoinbaseInstance as coinbase_instance, Networks, WalletTypes } from '@rango-dev/wallets-shared';
export declare const config: {
    type: WalletTypes;
    defaultNetwork: Networks;
};
export declare const getInstance: typeof coinbase_instance;
export declare const connect: Connect;
export declare const subscribe: Subscribe;
export declare const switchNetwork: SwitchNetwork;
export declare const canSwitchNetworkTo: CanSwitchNetwork;
export declare const getSigners: (provider: any) => SignerFactory;
export declare const canEagerConnect: CanEagerConnect;
export declare const getWalletInfo: (allBlockChains: BlockchainMeta[]) => WalletInfo;
//# sourceMappingURL=index.d.ts.map