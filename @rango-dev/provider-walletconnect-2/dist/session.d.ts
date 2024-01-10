import type { ConnectParams, CreateSessionParams, WCInstance } from './types';
import type { SignClient } from '@walletconnect/sign-client/dist/types/client';
import type { PairingTypes, SessionTypes, SignClientTypes } from '@walletconnect/types';
export declare function getLastSession(client: SignClient): SessionTypes.Struct;
/**
 *
 * Try to ping the wallet, if wallet responded with `pong`, session is a valid and we will use the session.
 * If the wallet didn't respond during 10 seconds (PING_TIME), we assume the wallet isn't available and we need to create a new session.
 *
 */
export declare function restoreSession(client: SignClient, pairing: PairingTypes.Struct): Promise<SessionTypes.Struct | undefined>;
/**
 *
 * Getting a  pair of required and optional namespaces then tries to show a modal and connect (pair)
 * To the wallet.
 * @param client
 * @param options
 * @returns
 */
export declare function createSession(client: SignClient, options: CreateSessionParams): Promise<SessionTypes.Struct>;
/**
 *
 * A user (client) can have multiple pairings (to different wallets), we are assuming
 * the last pairing is the active pairing for now. A better UX can be showing a list of pairings
 * and let the user to choose the right pairing manually. Because we don't have that yet, we will pick up the last one.
 *
 */
export declare function tryGetPairing(client: SignClient): PairingTypes.Struct | undefined;
/**
 *
 * Try to restore the session first, if couldn't, create a new session by showing a modal.
 *
 */
export declare function tryConnect(client: SignClient, params: ConnectParams): Promise<SessionTypes.Struct>;
/**
 * Wallet connect is a multichain protocol and we can not determine the connected wallet
 * supports which wallet, `extend`ing session doesn't work during a bug in their utils packages.
 * So we will try to make a new session with `network` that user needs to switch.
 */
export declare function trySwitchByCreatingNewSession(instance: WCInstance, params: ConnectParams): Promise<SessionTypes.Struct>;
/**
 *
 * Try to find sessions with a topic id and expire them.
 *
 */
export declare function cleanupSingleSession(client: SignClient, topic: string): Promise<void>;
/**
 *
 * Disconnect means to delete the session on both parties (dApp & wallet) at the same time.
 *
 */
export declare function disconnectSessions(client: SignClient): Promise<void[]>;
export declare function getAccountsFromSession(session: SessionTypes.Struct): {
    accounts: string[];
    chainId: string;
}[];
export declare function getAccountsFromEvent(event: SignClientTypes.BaseEventArgs<{
    namespaces: SessionTypes.Namespaces;
}>): {
    accounts: string[];
    chainId: string;
}[];
//# sourceMappingURL=session.d.ts.map