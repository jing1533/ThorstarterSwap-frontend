import { Network, ProviderConnectResult } from '@rango-dev/wallets-shared';
type Provider = Map<Network, any>;
export declare function xdefi(): Map<any, any> | null;
export declare function getEthChainsInstance(netowrk: Network | null): Network | null;
export declare function getNonEvmAccounts(instances: Provider): Promise<ProviderConnectResult[]>;
export declare function xdefiTransfer(blockchain: string, ticker: string, from: string, amount: string, decimals: number, recipientAddress: string | null, provider: any, method: string, memo: string | null): Promise<string>;
export {};
//# sourceMappingURL=helpers.d.ts.map