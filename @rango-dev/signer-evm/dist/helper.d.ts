import type { SignerError as SignerErrorType } from 'rango-types';
export declare const cleanEvmError: (error: any) => SignerErrorType;
export declare function getTenderlyError(chainId: string | undefined, txHash: string): Promise<string | undefined>;
export declare const waitMs: (ms: number) => Promise<unknown>;
//# sourceMappingURL=helper.d.ts.map