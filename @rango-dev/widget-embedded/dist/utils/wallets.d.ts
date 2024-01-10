import type { TokenWithBalance } from '../components/TokenList';
import type { ConnectedWallet, TokenBalance } from '../store/wallets';
import type { Wallet } from '../types';
import type { WalletInfo as ModalWalletInfo } from '@rango-dev/ui';
import type { Network, WalletInfo, WalletState, WalletType } from '@rango-dev/wallets-shared';
import type { BestRouteResponse, BlockchainMeta, Token, WalletDetail } from 'rango-sdk';
import { WalletState as WalletStatus } from '@rango-dev/ui';
export declare function mapStatusToWalletState(state: WalletState): WalletStatus;
export declare function mapWalletTypesToWalletInfo(getState: (type: WalletType) => WalletState, getWalletInfo: (type: WalletType) => WalletInfo, list: WalletType[], chain?: string): ModalWalletInfo[];
export declare function walletAndSupportedChainsNames(supportedBlockchains: BlockchainMeta[]): Network[] | null;
export declare function prepareAccountsForWalletStore(wallet: WalletType, accounts: string[], evmBasedChains: string[], supportedChainNames: Network[] | null): Wallet[];
export declare function getRequiredChains(route: BestRouteResponse | null): string[];
export declare function getSelectableWallets(connectedWallets: ConnectedWallet[], getWalletInfo: (type: WalletType) => WalletInfo, destinationChain?: string): Wallet[];
export declare function getBalanceFromWallet(connectedWallets: ConnectedWallet[], chain: string, symbol: string, address: string | null): TokenBalance | null;
export declare function isAccountAndWalletMatched(account: Wallet, connectedWallet: ConnectedWallet): boolean;
export declare function makeBalanceFor(retrievedBalance: WalletDetail, tokens: Token[]): TokenBalance[];
export declare function resetConnectedWalletState(connectedWallet: ConnectedWallet): ConnectedWallet;
export declare const calculateWalletUsdValue: (connectedWallet: ConnectedWallet[]) => string;
export declare const sortTokens: (tokens: TokenWithBalance[]) => TokenWithBalance[];
export declare const getUsdPrice: (blockchain: string, symbol: string, address: string | null, allTokens: Token[]) => number | null;
export declare const isExperimentalChain: (blockchains: BlockchainMeta[], wallet: string) => boolean;
export declare const getKeplrCompatibleConnectedWallets: (selectableWallets: Wallet[]) => WalletType[];
export declare function getTokensWithBalance(tokens: TokenWithBalance[], connectedWallets: ConnectedWallet[]): TokenWithBalance[];
export declare function getTokensBalanceFromWalletAndSort(tokens: TokenWithBalance[], connectedWallets: ConnectedWallet[]): TokenWithBalance[];
export declare function getSortedTokens(chain: BlockchainMeta | null, tokens: Token[], connectedWallets: ConnectedWallet[], otherChainTokens: TokenWithBalance[]): TokenWithBalance[];
export declare function tokensAreEqual(tokenA: Pick<Token, 'blockchain' | 'symbol' | 'address'> | null, tokenB: Pick<Token, 'blockchain' | 'symbol' | 'address'> | null): boolean;
export declare function sortWalletsBasedOnConnectionState(wallets: ModalWalletInfo[]): ModalWalletInfo[];
export declare function getConciseAddress(address: string, maxChars?: number, ellipsisLength?: number): string;
export declare function getAddress({ chain, connectedWallets, walletType, }: {
    connectedWallets: ConnectedWallet[];
    walletType: string;
    chain: string;
}): string | undefined;
//# sourceMappingURL=wallets.d.ts.map