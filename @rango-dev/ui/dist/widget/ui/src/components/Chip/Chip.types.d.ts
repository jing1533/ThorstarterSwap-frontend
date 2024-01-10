import type { CSSProperties } from '@stitches/react';
import type { HTMLAttributes, ReactNode } from 'react';
type ButtonElement = Omit<HTMLAttributes<HTMLButtonElement>, 'prefix'>;
interface ChipProps {
    label: string;
    selected?: boolean;
    className?: string;
    style?: CSSProperties;
    prefix?: ReactNode;
    suffix?: ReactNode;
}
export type PropTypes = ButtonElement & ChipProps;
export {};
//# sourceMappingURL=Chip.types.d.ts.map