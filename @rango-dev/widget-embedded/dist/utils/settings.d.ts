export type LiquiditySourceType = 'BRIDGE' | 'AGGREGATOR' | 'DEX';
export type UniqueSwappersGroupType = {
    id: string;
    groupTitle: string;
    logo: string;
    type: LiquiditySourceType;
    selected: boolean;
};
export declare function getUniqueSwappersGroups(supportedSwappers?: string[]): UniqueSwappersGroupType[];
export declare function sortLiquiditySourcesByGroupTitle(a: UniqueSwappersGroupType, b: UniqueSwappersGroupType): 0 | 1 | -1;
//# sourceMappingURL=settings.d.ts.map