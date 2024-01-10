import type { Step } from './BestRoute.types';
import type { PriceImpactWarningLevel } from '../PriceImpact';
import React from 'react';
type PropTypes = {
    from: Step['from'];
    to: Step['to'];
    percentageChange?: string | null;
    warningLevel: PriceImpactWarningLevel;
};
export declare function RouteSummary(props: PropTypes): React.JSX.Element;
export {};
//# sourceMappingURL=RouteSummary.d.ts.map