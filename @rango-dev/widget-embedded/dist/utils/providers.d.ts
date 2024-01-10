import { ProviderInterface } from '@rango-dev/wallets-react';
import { WidgetConfig } from '../types';
export interface ProvidersOptions {
    walletConnectProjectId?: WidgetConfig['walletConnectProjectId'];
}
/**
 *
 * Generate a list of providers by passing a provider name (e.g. metamask) or a custom provider which implemented ProviderInterface.
 * @returns ProviderInterface[] a list of ProviderInterface
 *
 */
export declare function matchAndGenerateProviders(providers: WidgetConfig['wallets'], options?: ProvidersOptions): ProviderInterface[];
export declare function configWalletsToWalletName(config: WidgetConfig['wallets'], options?: ProvidersOptions): string[];
//# sourceMappingURL=providers.d.ts.map