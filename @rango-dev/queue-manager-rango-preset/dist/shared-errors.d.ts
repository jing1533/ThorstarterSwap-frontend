import type { APIErrorCode, SignerErrorCode as SignerErrorCodeType } from 'rango-types';
export type ErrorDetail = {
    extraMessage: string;
    extraMessageDetail?: string | null | undefined;
    extraMessageErrorCode: SignerErrorCodeType | APIErrorCode | null;
};
type ErrorRoot = string | Record<string, string> | null;
export declare class PrettyError extends Error {
    private readonly detail?;
    private readonly root?;
    private readonly code?;
    _isPrettyError: boolean;
    constructor(code: APIErrorCode, m: string, root?: ErrorRoot, detail?: string);
    static isPrettyError(obj: unknown): obj is PrettyError;
    getErrorDetail(): ErrorDetail;
    static AssertionFailed(m: string): PrettyError;
    static BadStatusCode(message: string, statusCode: number | string): PrettyError;
    static CreateTransaction(detail: string): PrettyError;
    static WalletMissing(): PrettyError;
    static BlockchainMissing(): PrettyError;
}
export declare function mapAppErrorCodesToAPIErrorCode(errorCode: string | null): APIErrorCode;
export declare const prettifyErrorMessage: (obj: unknown) => ErrorDetail;
export {};
//# sourceMappingURL=shared-errors.d.ts.map