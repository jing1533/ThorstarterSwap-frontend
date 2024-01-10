import React from 'react';
declare const TextField: React.ForwardRefExoticComponent<{
    label?: string | undefined;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    size?: "small" | "large" | undefined;
    variant?: "contained" | "outlined" | "ghost" | undefined;
    fullWidth?: boolean | undefined;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix"> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLInputElement>>;
export { TextField };
//# sourceMappingURL=TextField.d.ts.map