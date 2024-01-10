import type { EvmBlockchainMeta } from 'rango-types';
import { EvmNetworksChainInfo, AddEthereumChainParameter, Network, Connect, Wallet, InstallObjects } from './rango';
export { isAddress as isEvmAddress } from 'ethers/lib/utils.js';
export declare function deepCopy(obj: any): any;
export declare function switchOrAddNetworkForMetamaskCompatibleWallets(instance: any, network: Network, evmNetworksChainInfo: EvmNetworksChainInfo): Promise<void>;
export declare function timeout<T = any>(forPromise: Promise<any>, time: number): Promise<T>;
export declare const convertEvmBlockchainMetaToEvmChainInfo: (evmBlockchains: EvmBlockchainMeta[]) => {
    [key: string]: AddEthereumChainParameter;
};
export declare const evmChainsToRpcMap: (evmNetworkChainInfo: EvmNetworksChainInfo) => {
    [k: string]: string;
};
export declare const getSolanaAccounts: Connect;
export declare function getCoinbaseInstance(lookingFor?: 'coinbase' | 'metamask'): any;
export declare function sortWalletsBasedOnState(wallets: Wallet[]): Wallet[];
export declare function detectInstallLink(install: InstallObjects | string): string;
export declare function detectMobileScreens(): boolean;
//# sourceMappingURL=helpers.d.ts.map