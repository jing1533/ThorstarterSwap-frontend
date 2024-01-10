import type { PropTypes } from './Chip.types';
import React from 'react';
import { Chip } from './Chip';
declare const _default: {
    title: string;
    component: typeof Chip;
    args: {
        label: string;
        selected: boolean;
    };
    argTypes: {
        label: {
            name: string;
            defaultValue: string;
            control: {
                type: string;
            };
        };
        selected: {
            name: string;
            control: {
                type: string;
            };
            defaultValue: boolean;
        };
    };
};
export default _default;
export declare const Main: (args: PropTypes) => React.JSX.Element;
export declare const ChipWithPrefix: (args: PropTypes) => React.JSX.Element;
export declare const ChipWithSuffix: (args: PropTypes) => React.JSX.Element;
//# sourceMappingURL=Chip.stories.d.ts.map