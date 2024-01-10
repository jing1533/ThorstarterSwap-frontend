import type { CollapsibleProps } from './Collapsible.types';
import React from 'react';
import { CollapsibleComponent as Collapsible } from './Collapsible';
declare const _default: {
    title: string;
    component: typeof Collapsible;
    args: {
        open: boolean;
        trigger: React.JSX.Element;
    };
    argTypes: {
        open: {
            name: string;
            defaultValue: boolean;
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const Main: (args: CollapsibleProps) => React.JSX.Element;
//# sourceMappingURL=Collapsible.stories.d.ts.map