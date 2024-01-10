import { Network } from '@rango-dev/wallets-shared';
import { Options } from './wallet';
export declare function formatAddressWithNetwork(address: string, network?: Network | null): string;
export declare function accountAddressesWithNetwork(addresses: string[] | null, network?: Network | null): string[];
export declare function readAccountAddress(addressWithNetwork: string): {
    address: string;
    network: Network;
};
export declare function needsCheckInstallation(options: Options): boolean;
//# sourceMappingURL=helpers.d.ts.map