import type { PropTypes } from './TextField.types';
import React from 'react';
declare const _default: import("@storybook/types").ComponentAnnotations<import("@storybook/react/dist/types-0a347bb9").R, {
    label?: string | undefined;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    size?: "small" | "large" | undefined;
    variant?: "contained" | "outlined" | "ghost" | undefined;
    fullWidth?: boolean | undefined;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix"> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLInputElement>>;
export default _default;
export declare const Main: (args: PropTypes) => React.JSX.Element;
export declare const WithPrefix: (args: PropTypes) => React.JSX.Element;
export declare const WithSuffix: (args: PropTypes) => React.JSX.Element;
//# sourceMappingURL=TextField.stories.d.ts.map