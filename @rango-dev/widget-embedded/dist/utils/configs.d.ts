export interface Configs {
    API_KEY: string;
}
export declare function getConfig(name: keyof Configs): string;
export declare function setConfig(name: keyof Configs, value: any): any;
/**
 * Getting new configs from params and reset the value of global `configs` with provided param.
 */
export declare function initConfig(nextConfigs: Configs): Configs;
export declare const DEFAULT_PRIMARY_RADIUS = 20;
export declare const DEFAULT_SECONDARY_RADIUS = 25;
//# sourceMappingURL=configs.d.ts.map