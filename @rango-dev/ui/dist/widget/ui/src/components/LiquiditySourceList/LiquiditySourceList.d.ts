import type { LiquiditySource, LoadingStatus } from '../../types/meta';
import type { CSSProperties } from '@stitches/react';
import React from 'react';
export interface PropTypes {
    list: LiquiditySource[];
    onChange: (liquiditySource: LiquiditySource) => void;
    listContainerStyle?: CSSProperties;
    loadingStatus: LoadingStatus;
    searchedFor: string;
}
export declare function LiquiditySourceList(props: PropTypes): React.JSX.Element;
//# sourceMappingURL=LiquiditySourceList.d.ts.map