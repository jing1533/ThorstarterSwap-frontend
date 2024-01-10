import type { Step } from '@rango-dev/ui/dist/widget/ui/src/components/BestRoute/BestRoute.types';
import type { BestRouteResponse, BlockchainMeta } from 'rango-sdk';
export declare function formatBestRoute(bestRoute: BestRouteResponse, blockchains: BlockchainMeta[]): Step[] | undefined;
export declare function getRequiredWallets(route: BestRouteResponse | null): string[];
export declare function isValidAddress(chain: BlockchainMeta, address: string): boolean;
//# sourceMappingURL=ConfirmWallets.helpers.d.ts.map