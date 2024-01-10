import type { BestRouteRequest, BestRouteResponse } from 'rango-sdk';
interface UseFetchBestRoute {
    fetch: (requestBody: BestRouteRequest) => Promise<BestRouteResponse>;
    cancelFetch: () => void;
    loading: boolean;
}
export declare function useFetchBestRoute(): UseFetchBestRoute;
export {};
//# sourceMappingURL=useFetchBestRoute.d.ts.map