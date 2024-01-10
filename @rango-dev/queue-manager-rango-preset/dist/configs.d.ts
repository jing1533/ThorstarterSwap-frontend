export interface Configs {
    API_KEY: string;
    BASE_URL?: string;
}
export declare function getConfig(name: keyof Configs): string;
export declare function setConfig(name: keyof Configs, value: any): any;
export declare function initConfig(nextConfigs: Configs): Configs;
//# sourceMappingURL=configs.d.ts.map