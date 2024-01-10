import type { WalletActions, WalletConfig } from './types';
import type { Network, WalletType } from '@rango-dev/wallets-shared';
import type { BlockchainMeta } from 'rango-types';
import { Events } from './types';
export type EventHandler = (type: WalletType, event: Events, value: any, coreState: State, supportedChains: BlockchainMeta[]) => void;
export interface State {
    connected: boolean;
    connecting: boolean;
    reachable: boolean;
    installed: boolean;
    accounts: string[] | null;
    network: Network | null;
}
export interface Options {
    config: WalletConfig;
    handler: EventHandler;
}
declare class Wallet<InstanceType = any> {
    private actions;
    private state;
    private options;
    private meta;
    provider: InstanceType | null;
    constructor(options: Options, actions: WalletActions);
    private getConnectionFromState;
    connect(network?: Network): Promise<{
        accounts: string[] | null;
        network: string | null;
        provider: InstanceType | null;
    }>;
    disconnect(): Promise<void>;
    eagerConnect(): Promise<{
        accounts: string[] | null;
        network: string | null;
        provider: InstanceType | null;
    }>;
    getSigners(provider: any): import("rango-types").SignerFactory;
    getWalletInfo(allBlockChains: BlockchainMeta[]): import("@rango-dev/wallets-shared").WalletInfo;
    canSwitchNetworkTo(network: Network, provider: any): boolean;
    onInit(): void;
    setProvider(value: any): void;
    setMeta(value: BlockchainMeta[]): void;
    setHandler(handler: EventHandler): void;
    getState(): State;
    updateState(states: Partial<State>): void;
    resetState(): void;
    private updateChainId;
    private setInstalledAs;
    private tryGetInstance;
}
export default Wallet;
//# sourceMappingURL=wallet.d.ts.map