import { Network, CanSwitchNetwork, Subscribe, SwitchNetwork, CanEagerConnect } from './rango';
import type { BlockchainMeta } from 'rango-types';
export declare function getEvmAccounts(instance: any): Promise<{
    accounts: string[];
    chainId: string;
}>;
export declare const subscribeToEvm: Subscribe;
export declare const canEagerlyConnectToEvm: CanEagerConnect;
export declare const switchNetworkForEvm: SwitchNetwork;
export declare const canSwitchNetworkToEvm: CanSwitchNetwork;
export declare function evmNetworkNames(meta: BlockchainMeta[]): string[];
export declare function getEthChainsInstance(network: Network | null, meta: BlockchainMeta[]): Network | null;
export declare function chooseInstance(instances: null | Map<any, any>, meta: BlockchainMeta[], network?: Network | null): any;
export declare function getNetworkInstance(provider: any, network: Network): any;
//# sourceMappingURL=providers.d.ts.map