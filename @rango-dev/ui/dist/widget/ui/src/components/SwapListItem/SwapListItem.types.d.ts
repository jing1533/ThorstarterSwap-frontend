export type Status = 'running' | 'failed' | 'success';
export interface SwapListItemProps {
    requestId: string;
    creationTime: string;
    status: Status;
    onClick: (requestId: string) => void;
    swapTokenData: SwapTokenData;
    onlyShowTime?: boolean;
}
export interface LoadingProps {
    isLoading: true;
}
export type PropTypes = SwapListItemProps | LoadingProps;
export declare const StatusColors: {
    failed: string;
    running: string;
    success: string;
};
export interface SwapTokenData {
    from: {
        token: {
            image: string;
            displayName: string;
        };
        blockchain: {
            image: string;
        };
        amount: string;
    };
    to: {
        token: {
            image: string;
            displayName: string;
        };
        blockchain: {
            image: string;
        };
        amount: string;
        estimatedAmount?: string;
    };
}
//# sourceMappingURL=SwapListItem.types.d.ts.map