import type { WidgetConfig } from '../types';
import React from 'react';
interface PropTypes {
    supportedWallets: WidgetConfig['wallets'];
    multiWallets: boolean;
    config?: WidgetConfig;
}
export declare const TIME_TO_CLOSE_MODAL = 3000;
export declare const TIME_TO_IGNORE_MODAL = 300;
export declare function WalletsPage({ config }: PropTypes): React.JSX.Element;
export {};
//# sourceMappingURL=WalletsPage.d.ts.map