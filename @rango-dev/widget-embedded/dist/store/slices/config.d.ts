import type { WidgetConfig } from '../../types';
import type { StateCreator } from 'zustand';
export type ConfigSlice = {
    config: WidgetConfig;
    updateConfig: (config: WidgetConfig) => void;
};
export declare const createConfigSlice: StateCreator<ConfigSlice>;
//# sourceMappingURL=config.d.ts.map