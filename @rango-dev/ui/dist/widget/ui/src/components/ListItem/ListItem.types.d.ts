/// <reference types="react" />
export type ListItemProps = {
    title?: string | React.ReactElement;
    description?: string | React.ReactElement;
    start?: React.ReactNode;
    end?: React.ReactNode;
    as?: 'div' | 'li';
    onClick?: () => void;
    hasDivider?: boolean;
};
//# sourceMappingURL=ListItem.types.d.ts.map