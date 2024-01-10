import type { TypographyContainer } from './Typography.styles';
import type * as Stitches from '@stitches/react';
type BaseProps = Stitches.VariantProps<typeof TypographyContainer>;
type BaseSizes = Exclude<BaseProps['size'], object>;
type BaseVariants = Exclude<BaseProps['variant'], object>;
type BaseAlign = Exclude<BaseProps['align'], object>;
type margin = 2 | 4 | 8 | 12;
export interface PropTypes {
    variant: BaseVariants;
    size: BaseSizes;
    align?: BaseAlign;
    noWrap?: boolean;
    mt?: margin;
    mb?: margin;
    ml?: margin;
    mr?: margin;
    className?: string;
    style?: Stitches.CSSProperties;
    color?: string;
}
export {};
//# sourceMappingURL=Typography.types.d.ts.map