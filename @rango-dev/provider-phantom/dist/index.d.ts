import type { CanEagerConnect, CanSwitchNetwork, Connect, Subscribe, WalletInfo } from '@rango-dev/wallets-shared';
import type { BlockchainMeta, SignerFactory } from 'rango-types';
import { WalletTypes } from '@rango-dev/wallets-shared';
import { phantom as phantom_instance } from './helpers';
export declare const config: {
    type: WalletTypes;
};
export declare const getInstance: typeof phantom_instance;
export declare const connect: Connect;
export declare const subscribe: Subscribe;
export declare const canSwitchNetworkTo: CanSwitchNetwork;
export declare const getSigners: (provider: any) => SignerFactory;
export declare const canEagerConnect: CanEagerConnect;
export declare const getWalletInfo: (allBlockChains: BlockchainMeta[]) => WalletInfo;
//# sourceMappingURL=index.d.ts.map