import React, { PropsWithChildren } from 'react';
export interface PropTypes {
    logo: string;
    chainLogo: string;
    amount: string;
    symbol: string;
    blockchain: string;
    estimatedAmount?: string;
    direction?: 'horizontal' | 'vertical';
    success?: boolean;
}
export declare function StepDetail(props: PropsWithChildren<PropTypes>): React.JSX.Element;
//# sourceMappingURL=StepDetail.d.ts.map