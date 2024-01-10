import type { CanSwitchNetwork, Connect, Subscribe, WalletInfo } from '@rango-dev/wallets-shared';
import type { BlockchainMeta, SignerFactory } from 'rango-types';
import { Networks, WalletTypes } from '@rango-dev/wallets-shared';
import { tronLink as tronLink_instance } from './helpers';
export declare const config: {
    type: WalletTypes;
    defaultNetwork: Networks;
};
export declare const getInstance: typeof tronLink_instance;
export declare const connect: Connect;
export declare const subscribe: Subscribe;
export declare const canSwitchNetworkTo: CanSwitchNetwork;
export declare const getSigners: (provider: any) => SignerFactory;
export declare const getWalletInfo: (allBlockChains: BlockchainMeta[]) => WalletInfo;
//# sourceMappingURL=index.d.ts.map