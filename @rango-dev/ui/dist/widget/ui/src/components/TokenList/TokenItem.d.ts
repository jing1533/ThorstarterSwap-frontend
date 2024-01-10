import type { TokenWithAmount } from './TokenList';
import type { Token } from 'rango-sdk';
import type { CSSProperties } from 'react';
import React from 'react';
interface PropTypes {
    token: TokenWithAmount;
    selected: boolean;
    onClick: (token: Token) => void;
    style?: CSSProperties;
}
export declare function TokenItem(props: PropTypes): React.JSX.Element;
export {};
//# sourceMappingURL=TokenItem.d.ts.map