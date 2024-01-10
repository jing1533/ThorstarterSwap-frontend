import type { WalletState } from '@rango-dev/wallets-shared';
import type { ProposalTypes } from '@walletconnect/types';
import type { BlockchainMeta } from 'rango-types';
import { WalletConnectModal } from '@walletconnect/modal';
import { NAMESPACES } from './constants';
export declare function createModalInstance(projectId: string): void;
export declare function getModal(): WalletConnectModal;
type FinalNamespaces = {
    [key in NAMESPACES]?: ProposalTypes.BaseRequiredNamespace;
};
export declare function generateRequiredNamespace(meta: BlockchainMeta[], network: string): FinalNamespaces | undefined;
export declare function generateOptionalNamespace(meta: BlockchainMeta[]): FinalNamespaces | undefined;
export declare function solanaChainIdToNetworkName(chainId: string): string;
/**
 *
 * In `rango-preset` we are working with `window.ethereum.request()`,
 * this is an interceptor for some RPC methods (e.g. eth_chainId).
 *
 */
export declare function simulateRequest(params: any, provider: any, meta: BlockchainMeta[], getState: () => WalletState): Promise<string>;
export declare function getChainIdByNetworkName(network: string, meta: BlockchainMeta[]): string | undefined;
export {};
//# sourceMappingURL=helpers.d.ts.map