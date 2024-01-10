import React from 'react';
import { BlockchainMeta } from 'rango-sdk';
import { CSSProperties } from '@stitches/react';
import { LoadingStatus } from '../../types/meta';
export interface PropTypes {
    type?: 'Source' | 'Destination';
    list: BlockchainMeta[];
    selected?: BlockchainMeta | null;
    onChange: (blockchain: BlockchainMeta) => void;
    onBack?: () => void;
    loadingStatus: LoadingStatus;
    hasHeader?: boolean;
    listContainerStyle?: CSSProperties;
    multiSelect?: boolean;
    selectedList?: BlockchainMeta[] | 'all';
}
export declare function BlockchainSelector(props: PropTypes): React.JSX.Element;
//# sourceMappingURL=BlockchainSelector.d.ts.map