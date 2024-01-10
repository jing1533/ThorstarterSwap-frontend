import type { BestRouteResponse } from 'rango-sdk';
import { BigNumber } from 'bignumber.js';
export declare const percentToString: (p: number, fractions?: number) => string;
export declare const secondsToString: (s: number) => string;
export declare const numberToString: (number: BigNumber | string | null | undefined, minDecimals?: number | null, maxDecimals?: number | null) => string;
export declare const convertBigNumberToHex: (value: BigNumber, decimals: number) => string;
export declare const uint8ArrayToHex: (buffer: Uint8Array) => string;
export declare function dollarToConciseString(num: number | undefined): string;
export declare function removeExtraDecimals(num: string, maxDecimals: number): string;
export declare const totalArrivalTime: (data: {
    estimatedTimeInSeconds: number | null;
}[] | undefined) => number;
export declare const rawFees: (data: BestRouteResponse) => string;
export declare const containsText: (text: string, searchText: string) => boolean;
export declare const isPositiveNumber: (text?: string) => boolean;
export declare function limitDecimalPlaces(numberString: string, maxDecimalPlaces?: number): string;
//# sourceMappingURL=numbers.d.ts.map