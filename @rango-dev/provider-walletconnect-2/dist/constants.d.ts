import { Networks } from '@rango-dev/wallets-shared';
export declare const DEFAULT_NETWORK = Networks.ETHEREUM;
export declare const PING_TIMEOUT = 10000;
export declare enum NAMESPACES {
    ETHEREUM = "eip155",
    SOLANA = "solana",
    COSMOS = "cosmos",
    POLKADOT = "polkadot",
    CARDANO = "cip34",
    ERLOND = "elrond",
    MULTIVERSX = "multiversx"
}
export declare enum SolanaRPCMethods {
    GET_ACCOUNTS = "solana_getAccounts",
    REQUEST_ACCOUNTS = "solana_requestAccounts",
    SIGN_TRANSACTION = "solana_signTransaction",
    SIGN_MESSAGE = "solana_signMessage"
}
export declare enum CosmosRPCMethods {
    GET_ACCOUNTS = "cosmos_getAccounts",
    SIGN_DIRECT = "cosmos_signDirect",
    SIGN_AMINO = "cosmos_signAmino"
}
export declare enum EthereumRPCMethods {
    PERSONAL_SIGN = "personal_sign",
    SIGN = "eth_sign",
    SIGN_TYPED_DATA = "eth_signTypedData",
    SIGN_TRANSACTION = "eth_signTransaction",
    SEND_TRANSACTION = "eth_sendTransaction",
    SEND_RAW_TRANSACTION = "eth_sendRawTransaction"
}
export declare enum StarknetRPCMethods {
    REQUEST_ADD_INVOKE_TRANSACTION = "starknet_requestAddInvokeTransaction",
    SIGN_TYPED_DATA = "starknet_signTypedData"
}
export declare enum EthereumEvents {
    CHAIN_CHANGED = "chainChanged",
    ACCOUNTS_CHANGED = "accountsChanged"
}
export declare const DEFAULT_ETHEREUM_EVENTS: EthereumEvents[];
export declare const DEFAULT_ETHEREUM_METHODS: EthereumRPCMethods[];
export declare const DEFAULT_SOLANA_METHODS: SolanaRPCMethods[];
export declare const DEFAULT_COSMOS_METHODS: CosmosRPCMethods[];
export declare const DEFAULT_SOLANA_CHAIN_ID = "4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ";
export declare const DEFAULT_APP_METADATA: {
    name: string;
    description: string;
    url: string;
    icons: string[];
};
export declare const RELAY_URL = "wss://relay.walletconnect.com";
//# sourceMappingURL=constants.d.ts.map