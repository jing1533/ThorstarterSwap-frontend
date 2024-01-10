import React from 'react';
export interface PropTypes {
    color?: string;
    place: 'top' | 'bottom' | 'left' | 'right';
    onChangeColor: (color?: string) => void;
    label?: string;
    placeholder?: string;
}
export declare function ColorPicker({ color, onChangeColor, label, place, placeholder, }: PropTypes): React.JSX.Element;
//# sourceMappingURL=ColorPicker.d.ts.map