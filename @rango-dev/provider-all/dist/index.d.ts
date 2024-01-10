import * as coinbase from '@rango-dev/provider-coinbase';
import * as halo from '@rango-dev/provider-halo';
import * as keplr from '@rango-dev/provider-keplr';
import * as phantom from '@rango-dev/provider-phantom';
import * as walletconnect2 from '@rango-dev/provider-walletconnect-2';
type Enviroments = Record<string, Record<string, string>>;
export declare const allProviders: (enviroments?: Enviroments) => (typeof coinbase | typeof halo | typeof keplr | typeof phantom | typeof walletconnect2)[];
export {};
//# sourceMappingURL=index.d.ts.map