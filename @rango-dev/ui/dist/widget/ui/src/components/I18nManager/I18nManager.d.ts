import type { PropsWithChildren } from 'react';
import React from 'react';
declare const messages: {
    en: any;
    es: any;
    jp: any;
    fr: any;
};
export type Language = keyof typeof messages;
interface PropTypes {
    language?: Language;
}
declare function I18nManager(props: PropsWithChildren<PropTypes>): React.JSX.Element;
export { I18nManager };
//# sourceMappingURL=I18nManager.d.ts.map