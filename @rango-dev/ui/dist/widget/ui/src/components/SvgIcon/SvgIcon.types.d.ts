/// <reference types="react" />
export interface SvgIconProps {
    size?: number;
    color?: 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'black' | 'white' | 'info' | 'gray';
}
export type SvgIconPropsWithChildren = SvgIconProps & {
    children?: React.ReactElement;
};
//# sourceMappingURL=SvgIcon.types.d.ts.map