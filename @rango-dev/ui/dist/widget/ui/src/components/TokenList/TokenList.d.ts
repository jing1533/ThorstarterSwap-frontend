import type { Asset, Token } from 'rango-sdk';
import React from 'react';
export interface TokenWithAmount extends Token {
    balance?: {
        amount: string;
        usdValue: string;
    };
}
export interface PropTypes {
    list: TokenWithAmount[];
    selected?: TokenWithAmount | null;
    searchedText: string;
    onChange: (token: TokenWithAmount) => void;
    multiSelect?: boolean;
    selectedList?: Asset[];
}
/**
 * @deprecated will be removed in v2
 */
export declare function TokenList(props: PropTypes): React.JSX.Element;
//# sourceMappingURL=TokenList.d.ts.map