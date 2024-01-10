import { Network, ProviderConnectResult } from '@rango-dev/wallets-shared';
export declare function clover(): Map<any, any> | null;
type Provider = Map<Network, any>;
export declare function getNonEvmAccounts(instances: Provider): Promise<ProviderConnectResult[]>;
export {};
//# sourceMappingURL=helpers.d.ts.map