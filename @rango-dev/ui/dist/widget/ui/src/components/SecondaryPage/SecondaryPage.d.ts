import type { ReactNode } from 'react';
import React from 'react';
export type PropTypes = ({
    textField: true;
    children?: (searchedFor: string) => ReactNode;
    textFieldPlaceholder: string;
} | {
    textField: false;
    children?: ReactNode;
}) & {
    title?: string;
    onBack?: () => void;
    TopButton?: React.ReactNode;
    Footer?: React.ReactNode;
    hasHeader?: boolean;
};
/**
 * @deprecated will be removed in v2
 */
export declare function SecondaryPage(props: PropTypes): React.JSX.Element;
//# sourceMappingURL=SecondaryPage.d.ts.map