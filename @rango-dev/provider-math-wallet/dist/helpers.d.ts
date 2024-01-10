import { Network, ProviderConnectResult } from '@rango-dev/wallets-shared';
type Provider = Map<Network, any>;
export declare function mathWallet(): Map<any, any> | null;
export declare function getNonEvmAccounts(instances: Provider): Promise<ProviderConnectResult[]>;
export {};
//# sourceMappingURL=helpers.d.ts.map