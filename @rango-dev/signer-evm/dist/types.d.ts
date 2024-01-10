export declare const MetamaskErrorCodes: {
    rpc: {
        invalidInput: number;
        resourceNotFound: number;
        resourceUnavailable: number;
        transactionRejected: number;
        methodNotSupported: number;
        limitExceeded: number;
        parse: number;
        invalidRequest: number;
        methodNotFound: number;
        invalidParams: number;
        internal: number;
    };
    provider: {
        userRejectedRequest: number;
        unauthorized: number;
        unsupportedMethod: number;
        disconnected: number;
        chainDisconnected: number;
    };
};
export declare enum RPCErrorCode {
    ACTION_REJECTED = "ACTION_REJECTED",
    INVALID_ARGUMENT = "INVALID_ARGUMENT",
    CALL_EXCEPTION = "CALL_EXCEPTION",
    INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS",
    TRANSACTION_REPLACED = "TRANSACTION_REPLACED"
}
export declare enum RPCErrorMessage {
    UNDER_PRICED = "underpriced",
    REPLACEMENT_FEE_TOO_LOW = "replacement fee too low",
    INTRINSIC_GAS_TOO_LOW = "intrinsic gas too low",
    OUT_OF_GAS = "out of gas",
    INTERNAL_ERROR = "Internal JSON-RPC error"
}
//# sourceMappingURL=types.d.ts.map