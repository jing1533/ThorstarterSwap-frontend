import type { LoadingStatus } from '../../types/meta';
import type { ReactNode } from 'react';
import React from 'react';
interface PropTypes {
    label: string;
    amount: string;
    usdValue: string | null;
    loadingStatus: LoadingStatus;
    chain: {
        displayName: string;
        logo: string;
    };
    token: {
        symbol: string;
        image: string;
    };
    percentageChange?: ReactNode;
}
export declare function TokenPreview(props: PropTypes): React.JSX.Element;
export {};
//# sourceMappingURL=TokenPreview.d.ts.map