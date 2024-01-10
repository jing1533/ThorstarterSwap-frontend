import type { WalletInfo } from '../../components';
import type { WalletType } from '@rango-dev/wallets-shared';
import React from 'react';
export interface PropTypes {
    open: boolean;
    list: WalletInfo[];
    onSelect: (walletType: WalletType) => void;
    onClose: () => void;
    error?: string;
}
export declare function ConnectWalletsModal(props: PropTypes): React.JSX.Element;
//# sourceMappingURL=ConnectWalletsModal.d.ts.map