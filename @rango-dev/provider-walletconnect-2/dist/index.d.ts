import type { WCInstance } from './types';
import type { CanSwitchNetwork, Connect, Disconnect, GetInstance, Subscribe, SwitchNetwork, WalletConfig, WalletInfo } from '@rango-dev/wallets-shared';
import type { BlockchainMeta, SignerFactory } from 'rango-types';
type Enviroments = Record<string, string>;
export declare const init: (enviroments: Enviroments) => void;
export declare const config: WalletConfig;
export declare const getInstance: GetInstance;
export declare const connect: Connect;
export declare const subscribe: Subscribe;
export declare const switchNetwork: SwitchNetwork;
/**
 *
 * Note:
 * There is no straight-forward way to detect the wallet supports which blockchain,
 * So we send request to wallet and expect to be rejected on the wallet if it's not supported.
 *
 */
export declare const canSwitchNetworkTo: CanSwitchNetwork;
export declare const disconnect: Disconnect;
export declare const getSigners: (provider: WCInstance) => SignerFactory;
export declare const getWalletInfo: (allBlockChains: BlockchainMeta[]) => WalletInfo;
export {};
//# sourceMappingURL=index.d.ts.map