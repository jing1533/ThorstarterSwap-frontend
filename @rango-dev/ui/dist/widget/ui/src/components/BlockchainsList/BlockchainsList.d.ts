import type { BlockchainMeta } from 'rango-sdk';
import React from 'react';
export interface PropTypes {
    list: BlockchainMeta[];
    selected?: BlockchainMeta | null;
    onChange: (blockchain: BlockchainMeta) => void;
    multiSelect?: boolean;
    selectedList?: BlockchainMeta[] | 'all';
}
/**
 * @deprecated will be removed in v2
 */
export declare function BlockchainsList(props: PropTypes): React.JSX.Element;
//# sourceMappingURL=BlockchainsList.d.ts.map