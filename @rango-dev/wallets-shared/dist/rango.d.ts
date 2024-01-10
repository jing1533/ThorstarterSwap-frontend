import type { BlockchainMeta, EvmBlockchainMeta } from 'rango-types';
export declare const IS_DEV: boolean;
export declare const getBlockChainNameFromId: (chainId: string | number, blockchains: BlockchainMeta[]) => Network | null;
export declare const getBlockchainChainIdByName: (netwok: Network, allBlockChains: AllBlockchains) => string | null;
export declare const uint8ArrayToHex: (buffer: Uint8Array) => string;
export type WalletType = string;
export type Network = string;
export declare enum WalletTypes {
    META_MASK = "metamask",
    WALLET_CONNECT_2 = "wallet-connect-2",
    TRUST_WALLET = "trust-wallet",
    KEPLR = "keplr",
    PHANTOM = "phantom",
    BINANCE_CHAIN = "binance-chain",
    BITGET = "bitget",
    TRON_LINK = "tron-link",
    COINBASE = "coinbase",
    XDEFI = "xdefi",
    CLOVER = "clover",
    ARGENTX = "argentx",
    FRONTIER = "frontier",
    COSMOSTATION = "cosmostation",
    COIN98 = "coin98",
    SAFEPAL = "safepal",
    SAFE = "safe",
    TOKEN_POCKET = "token-pocket",
    BRAVE = "brave",
    BRAAVOS = "braavos",
    MATH = "math",
    EXODUS = "exodus",
    OKX = "okx",
    HALO = "halo",
    LEAP = "leap",
    LEAP_COSMOS = "leap-cosmos",
    STATION = "station",
    ENKRYPT = "enkrypt",
    TAHO = "taho",
    MY_TON_WALLET = "mytonwallet"
}
export declare enum Networks {
    BTC = "BTC",
    BSC = "BSC",
    LTC = "LTC",
    THORCHAIN = "THOR",
    BCH = "BCH",
    BINANCE = "BNB",
    ETHEREUM = "ETH",
    POLYGON = "POLYGON",
    TERRA = "TERRA",
    POLKADOT = "",
    TRON = "TRON",
    DOGE = "DOGE",
    HARMONY = "HARMONY",
    AVAX_CCHAIN = "AVAX_CCHAIN",
    FANTOM = "FANTOM",
    MOONBEAM = "MOONBEAM",
    ARBITRUM = "ARBITRUM",
    BOBA = "BOBA",
    OPTIMISM = "OPTIMISM",
    FUSE = "FUSE",
    CRONOS = "CRONOS",
    SOLANA = "SOLANA",
    MOONRIVER = "MOONRIVER",
    GNOSIS = "GNOSIS",
    COSMOS = "COSMOS",
    OSMOSIS = "OSMOSIS",
    AKASH = "AKASH",
    IRIS = "IRIS",
    PERSISTENCE = "PERSISTENCE",
    SENTINEL = "SENTINEL",
    REGEN = "REGEN",
    CRYPTO_ORG = "CRYPTO_ORG",
    SIF = "SIF",
    CHIHUAHUA = "CHIHUAHUA",
    JUNO = "JUNO",
    KUJIRA = "KUJIRA",
    STARNAME = "STARNAME",
    COMDEX = "COMDEX",
    STARGAZE = "STARGAZE",
    DESMOS = "DESMOS",
    BITCANNA = "BITCANNA",
    SECRET = "SECRET",
    INJECTIVE = "INJECTIVE",
    LUMNETWORK = "LUMNETWORK",
    BANDCHAIN = "BANDCHAIN",
    EMONEY = "EMONEY",
    BITSONG = "BITSONG",
    KI = "KI",
    MEDIBLOC = "MEDIBLOC",
    KONSTELLATION = "KONSTELLATION",
    UMEE = "UMEE",
    STARKNET = "STARKNET",
    TON = "TON",
    Unknown = "Unkown"
}
export declare const XDEFI_WALLET_SUPPORTED_NATIVE_CHAINS: string[];
export declare const KEPLR_COMPATIBLE_WALLETS: string[];
export type Asset = {
    blockchain: Network;
    symbol: string;
    address: string | null;
};
export type AllBlockchains = {
    [key: string]: BlockchainMeta;
};
export type AddEthereumChainParameter = {
    chainId: string;
    chainName: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
    rpcUrls: string[];
    blockExplorerUrls?: string[];
    iconUrls?: string[];
};
export type EvmNetworksChainInfo = {
    [key: string]: AddEthereumChainParameter;
};
export interface Meta {
    blockchains: AllBlockchains;
    evmNetworkChainInfo: EvmNetworksChainInfo;
    getSupportedChainNames: (type: WalletType) => Network[] | null;
    evmBasedChains: EvmBlockchainMeta[];
}
export interface WalletState {
    connected: boolean;
    connecting: boolean;
    reachable: boolean;
    installed: boolean;
    accounts: string[] | null;
    network: Network | null;
}
export interface WalletConfig {
    type: WalletType;
    defaultNetwork?: Network;
    checkInstallation?: boolean;
    isAsyncInstance?: boolean;
}
export type GetInstanceOptions = {
    network?: Network;
    currentProvider: any;
    meta: BlockchainMeta[];
    force?: boolean;
    updateChainId: (chainId: number | string) => void;
    getState: () => WalletState;
};
export type TryGetInstance = (() => any) | ((options: Pick<GetInstanceOptions, 'force' | 'network'>) => Promise<any>);
export type GetInstance = (() => any) | ((options: GetInstanceOptions) => Promise<any>);
export type ProviderConnectResult = {
    accounts: string[];
    chainId: string;
};
export type Connect = (options: {
    instance: any;
    network?: Network;
    meta: BlockchainMeta[];
}) => Promise<ProviderConnectResult | ProviderConnectResult[]>;
export type Disconnect = (options: {
    instance: any;
    destroyInstance: () => void;
}) => Promise<void>;
export type Subscribe = (options: {
    instance: any;
    state: WalletState;
    meta: BlockchainMeta[];
    updateChainId: (chainId: string) => void;
    updateAccounts: (accounts: string[], chainId?: string) => void;
    connect: (network?: Network) => void;
    disconnect: () => void;
}) => void;
export type CanEagerConnect = (options: {
    instance: any;
    meta: BlockchainMeta[];
}) => Promise<boolean>;
export type SwitchNetwork = (options: {
    instance: any;
    network: Network;
    meta: BlockchainMeta[];
    newInstance?: TryGetInstance;
}) => Promise<void>;
export type CanSwitchNetwork = (options: {
    network: Network;
    meta: BlockchainMeta[];
    provider: any;
}) => boolean;
export type InstallObjects = {
    CHROME?: string;
    FIREFOX?: string;
    EDGE?: string;
    BRAVE?: string;
    DEFAULT: string;
};
export type WalletInfo = {
    name: string;
    img: string;
    installLink: InstallObjects | string;
    color: string;
    supportedChains: BlockchainMeta[];
    showOnMobile?: boolean;
    mobileWallet?: boolean;
};
export interface Wallet {
    type: WalletType;
    extensionAvailable: boolean;
    connected: boolean;
    info: Omit<WalletInfo, 'color' | 'supportedChains'>;
}
//# sourceMappingURL=rango.d.ts.map