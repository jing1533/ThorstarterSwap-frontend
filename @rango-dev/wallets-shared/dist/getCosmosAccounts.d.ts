import type { CosmosBlockchainMeta, CosmosChainInfo } from 'rango-types';
import { Connect } from './rango';
export interface CosmosInfo extends Omit<CosmosChainInfo, 'experimental'> {
    chainId: string;
}
export type CosmosExperimentalChainsInfo = {
    [k: string]: {
        id: string;
        info: CosmosInfo;
        experimental: boolean;
    };
};
export declare const getCosmosExperimentalChainInfo: (blockchains: CosmosBlockchainMeta[]) => CosmosExperimentalChainsInfo;
export declare const getCosmosAccounts: Connect;
//# sourceMappingURL=getCosmosAccounts.d.ts.map