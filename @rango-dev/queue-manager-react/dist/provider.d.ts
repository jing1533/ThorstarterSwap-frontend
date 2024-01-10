import type { ManagerContext, ManagerState } from './types';
import type { ManagerContext as Context, Events, QueueDef } from '@rango-dev/queue-manager-core';
import type { PropsWithChildren } from 'react';
import React from 'react';
interface PropTypes {
    queuesDefs: QueueDef<any, any, any>[];
    context: Context;
    onPersistedDataLoaded?: Events['onPersistedDataLoaded'];
    isPaused?: boolean;
}
declare function Provider(props: PropsWithChildren<PropTypes>): React.JSX.Element;
export declare function useManager(): {
    manager: ManagerContext;
    state: ManagerState;
};
export default Provider;
//# sourceMappingURL=provider.d.ts.map