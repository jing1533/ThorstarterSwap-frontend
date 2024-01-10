import type { WidgetConfig } from '../types';
import type { WalletType } from '@rango-dev/wallets-shared';
import type { PropsWithChildren } from 'react';
import React from 'react';
export declare function AppRouter({ children, ...props }: PropsWithChildren & {
    lastConnectedWallet: string;
    disconnectedWallet: WalletType | undefined;
    clearDisconnectedWallet: () => void;
    config: WidgetConfig | undefined;
}): React.JSX.Element;
//# sourceMappingURL=AppRouter.d.ts.map