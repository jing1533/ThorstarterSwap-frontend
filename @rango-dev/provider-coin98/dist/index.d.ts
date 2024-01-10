import type { CanSwitchNetwork, Connect, Subscribe, SwitchNetwork, WalletInfo } from '@rango-dev/wallets-shared';
import type { BlockchainMeta, SignerFactory } from 'rango-types';
import { Networks, WalletTypes } from '@rango-dev/wallets-shared';
import { coin98 as coin98_instances } from './helpers';
export declare const config: {
    type: WalletTypes;
    defaultNetwork: Networks;
};
export declare const getInstance: typeof coin98_instances;
export declare const connect: Connect;
export declare const subscribe: Subscribe;
export declare const switchNetwork: SwitchNetwork;
export declare const canSwitchNetworkTo: CanSwitchNetwork;
export declare const getSigners: (provider: any) => SignerFactory;
export declare const getWalletInfo: (allBlockChains: BlockchainMeta[]) => WalletInfo;
//# sourceMappingURL=index.d.ts.map