/// <reference types="react" />
export interface PropTypes {
    header: {
        title: string;
        hasConnectWallet?: boolean;
        hasSettings?: boolean;
        suffix?: React.ReactNode;
        onBack?: () => void;
        onCancel?: () => void;
    };
    hasLogo?: boolean;
    footer?: React.ReactNode;
    noPadding?: boolean;
    fixedHeight?: boolean;
}
export type Ref = ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
//# sourceMappingURL=Layout.types.d.ts.map