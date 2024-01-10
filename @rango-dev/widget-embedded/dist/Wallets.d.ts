import type { WidgetConfig } from './types';
import type { ProvidersOptions } from './utils/providers';
import type { EventHandler } from '@rango-dev/wallets-react';
import type { PropsWithChildren } from 'react';
import React from 'react';
type OnConnectHandler = (key: string) => void;
interface WidgetContextInterface {
    onConnectWallet(handler: OnConnectHandler): void;
}
export declare const WidgetContext: React.Context<WidgetContextInterface>;
export declare function WidgetWallets(props: PropsWithChildren<{
    providers: WidgetConfig['wallets'];
    options?: ProvidersOptions;
    onUpdateState?: EventHandler;
}>): React.JSX.Element;
export {};
//# sourceMappingURL=Wallets.d.ts.map