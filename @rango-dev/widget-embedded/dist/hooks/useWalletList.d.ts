import type { WidgetConfig } from '../types';
import { type WalletType } from '@rango-dev/wallets-shared';
interface Params {
    config?: WidgetConfig;
    chain?: string;
    onBeforeConnect?: (walletType: string) => void;
    onConnect?: (walletType: string) => void;
}
/**
 * gets list of wallets with their information and an action for handling click callback fo UI
 * we need to share the logic of rendering list of wallets and handle clicking on them in different places
 * you can use this list whenever you need to show the list of wallets and needed callbacks
 */
export declare function useWalletList(params: Params): {
    list: import("@rango-dev/ui").WalletInfo[];
    error: string;
    handleClick: (type: WalletType) => Promise<void>;
};
export {};
//# sourceMappingURL=useWalletList.d.ts.map