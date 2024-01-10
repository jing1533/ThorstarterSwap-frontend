/// <reference types="react" />
/// <reference types="react" />
/// <reference types="trusted-types" />
export declare const Container: import("@stitches/react/types/styled-component").StyledComponent<import("react").ForwardRefExoticComponent<{
    slot?: string | undefined;
    style?: import("react").CSSProperties | undefined;
    title?: string | undefined;
    children?: import("react").ReactNode;
    color?: string | undefined;
    content?: string | undefined;
    translate?: "yes" | "no" | undefined;
    hidden?: boolean | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    autoFocus?: boolean | undefined;
    className?: string | undefined;
    contentEditable?: "inherit" | (boolean | "true" | "false") | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | "true" | "false") | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    nonce?: string | undefined;
    placeholder?: string | undefined;
    spellCheck?: (boolean | "true" | "false") | undefined;
    tabIndex?: number | undefined;
    radioGroup?: string | undefined;
    role?: import("react").AriaRole | undefined;
    about?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    property?: string | undefined;
    rel?: string | undefined;
    resource?: string | undefined;
    rev?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?: "search" | "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined;
    is?: string | undefined;
    'aria-activedescendant'?: string | undefined;
    'aria-atomic'?: (boolean | "true" | "false") | undefined;
    'aria-autocomplete'?: "both" | "none" | "inline" | "list" | undefined;
    'aria-braillelabel'?: string | undefined;
    'aria-brailleroledescription'?: string | undefined;
    'aria-busy'?: (boolean | "true" | "false") | undefined;
    'aria-checked'?: boolean | "mixed" | "true" | "false" | undefined;
    'aria-colcount'?: number | undefined;
    'aria-colindex'?: number | undefined;
    'aria-colindextext'?: string | undefined;
    'aria-colspan'?: number | undefined;
    'aria-controls'?: string | undefined;
    'aria-current'?: boolean | "time" | "page" | "true" | "false" | "step" | "location" | "date" | undefined;
    'aria-describedby'?: string | undefined;
    'aria-description'?: string | undefined;
    'aria-details'?: string | undefined;
    'aria-disabled'?: (boolean | "true" | "false") | undefined;
    'aria-dropeffect'?: "link" | "none" | "copy" | "move" | "execute" | "popup" | undefined;
    'aria-errormessage'?: string | undefined;
    'aria-expanded'?: (boolean | "true" | "false") | undefined;
    'aria-flowto'?: string | undefined;
    'aria-grabbed'?: (boolean | "true" | "false") | undefined;
    'aria-haspopup'?: boolean | "dialog" | "menu" | "grid" | "listbox" | "true" | "false" | "tree" | undefined;
    'aria-hidden'?: (boolean | "true" | "false") | undefined;
    'aria-invalid'?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
    'aria-keyshortcuts'?: string | undefined;
    'aria-label'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    'aria-level'?: number | undefined;
    'aria-live'?: "off" | "assertive" | "polite" | undefined;
    'aria-modal'?: (boolean | "true" | "false") | undefined;
    'aria-multiline'?: (boolean | "true" | "false") | undefined;
    'aria-multiselectable'?: (boolean | "true" | "false") | undefined;
    'aria-orientation'?: "vertical" | "horizontal" | undefined;
    'aria-owns'?: string | undefined;
    'aria-placeholder'?: string | undefined;
    'aria-posinset'?: number | undefined;
    'aria-pressed'?: boolean | "mixed" | "true" | "false" | undefined;
    'aria-readonly'?: (boolean | "true" | "false") | undefined;
    'aria-relevant'?: "text" | "all" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    'aria-required'?: (boolean | "true" | "false") | undefined;
    'aria-roledescription'?: string | undefined;
    'aria-rowcount'?: number | undefined;
    'aria-rowindex'?: number | undefined;
    'aria-rowindextext'?: string | undefined;
    'aria-rowspan'?: number | undefined;
    'aria-selected'?: (boolean | "true" | "false") | undefined;
    'aria-setsize'?: number | undefined;
    'aria-sort'?: "none" | "ascending" | "descending" | "other" | undefined;
    'aria-valuemax'?: number | undefined;
    'aria-valuemin'?: number | undefined;
    'aria-valuenow'?: number | undefined;
    'aria-valuetext'?: string | undefined;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    } | undefined;
    onCopy?: import("react").ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCopyCapture?: import("react").ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCut?: import("react").ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCutCapture?: import("react").ClipboardEventHandler<HTMLButtonElement> | undefined;
    onPaste?: import("react").ClipboardEventHandler<HTMLButtonElement> | undefined;
    onPasteCapture?: import("react").ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCompositionEnd?: import("react").CompositionEventHandler<HTMLButtonElement> | undefined;
    onCompositionEndCapture?: import("react").CompositionEventHandler<HTMLButtonElement> | undefined;
    onCompositionStart?: import("react").CompositionEventHandler<HTMLButtonElement> | undefined;
    onCompositionStartCapture?: import("react").CompositionEventHandler<HTMLButtonElement> | undefined;
    onCompositionUpdate?: import("react").CompositionEventHandler<HTMLButtonElement> | undefined;
    onCompositionUpdateCapture?: import("react").CompositionEventHandler<HTMLButtonElement> | undefined;
    onFocus?: import("react").FocusEventHandler<HTMLButtonElement> | undefined;
    onFocusCapture?: import("react").FocusEventHandler<HTMLButtonElement> | undefined;
    onBlur?: import("react").FocusEventHandler<HTMLButtonElement> | undefined;
    onBlurCapture?: import("react").FocusEventHandler<HTMLButtonElement> | undefined;
    onChange?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onChangeCapture?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onBeforeInput?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onBeforeInputCapture?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onInput?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onInputCapture?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onReset?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onResetCapture?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onSubmit?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onSubmitCapture?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onInvalid?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onInvalidCapture?: import("react").FormEventHandler<HTMLButtonElement> | undefined;
    onLoad?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onError?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onErrorCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onKeyDown?: import("react").KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyDownCapture?: import("react").KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyPress?: import("react").KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyPressCapture?: import("react").KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyUp?: import("react").KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyUpCapture?: import("react").KeyboardEventHandler<HTMLButtonElement> | undefined;
    onAbort?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onAbortCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlay?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlayCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlayThrough?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlayThroughCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onDurationChange?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onDurationChangeCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onEmptied?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onEmptiedCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onEncrypted?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onEncryptedCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onEnded?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onEndedCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadedData?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadedDataCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadedMetadata?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadedMetadataCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadStart?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadStartCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onPause?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onPauseCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onPlay?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onPlayCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onPlaying?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onPlayingCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onProgress?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onProgressCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onRateChange?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onRateChangeCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onResize?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onResizeCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onSeeked?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onSeekedCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onSeeking?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onSeekingCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onStalled?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onStalledCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onSuspend?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onSuspendCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onTimeUpdate?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onTimeUpdateCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onVolumeChange?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onVolumeChangeCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onWaiting?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onWaitingCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onAuxClick?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onAuxClickCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onClick?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onClickCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onContextMenu?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onContextMenuCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onDoubleClick?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onDoubleClickCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onDrag?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragCapture?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragEnd?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragEndCapture?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragEnter?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragEnterCapture?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragExit?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragExitCapture?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragLeave?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragLeaveCapture?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragOver?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragOverCapture?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragStart?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDragStartCapture?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDrop?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onDropCapture?: import("react").DragEventHandler<HTMLButtonElement> | undefined;
    onMouseDown?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseDownCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseEnter?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseLeave?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseMove?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseMoveCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOut?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOutCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOver?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOverCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseUp?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseUpCapture?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    onSelect?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onSelectCapture?: import("react").ReactEventHandler<HTMLButtonElement> | undefined;
    onTouchCancel?: import("react").TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchCancelCapture?: import("react").TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchEnd?: import("react").TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchEndCapture?: import("react").TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchMove?: import("react").TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchMoveCapture?: import("react").TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchStart?: import("react").TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchStartCapture?: import("react").TouchEventHandler<HTMLButtonElement> | undefined;
    onPointerDown?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerDownCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerMove?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerMoveCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerUp?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerUpCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerCancel?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerCancelCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerEnter?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerEnterCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerLeave?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerLeaveCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerOver?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerOverCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerOut?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerOutCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onGotPointerCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onGotPointerCaptureCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onLostPointerCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onLostPointerCaptureCapture?: import("react").PointerEventHandler<HTMLButtonElement> | undefined;
    onScroll?: import("react").UIEventHandler<HTMLButtonElement> | undefined;
    onScrollCapture?: import("react").UIEventHandler<HTMLButtonElement> | undefined;
    onWheel?: import("react").WheelEventHandler<HTMLButtonElement> | undefined;
    onWheelCapture?: import("react").WheelEventHandler<HTMLButtonElement> | undefined;
    onAnimationStart?: import("react").AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationStartCapture?: import("react").AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationEnd?: import("react").AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationEndCapture?: import("react").AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationIteration?: import("react").AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationIterationCapture?: import("react").AnimationEventHandler<HTMLButtonElement> | undefined;
    onTransitionEnd?: import("react").TransitionEventHandler<HTMLButtonElement> | undefined;
    onTransitionEndCapture?: import("react").TransitionEventHandler<HTMLButtonElement> | undefined;
} & {
    size?: "small" | "medium" | "large" | "xsmall" | "xxsmall" | undefined;
    variant?: "default" | "contained" | "outlined" | "ghost" | undefined;
    type?: "success" | "warning" | "error" | "primary" | "secondary" | undefined;
    loading?: boolean | undefined;
    disabled?: boolean | undefined;
    prefix?: import("react").ReactNode;
    suffix?: import("react").ReactNode;
    fullWidth?: boolean | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLButtonElement>>, {}, {
    sm: string;
    md: string;
    lg: string;
}, import("@stitches/react/types/css-util").CSS<{
    sm: string;
    md: string;
    lg: string;
}, {
    colors: {
        primary: string;
        primary500: string;
        primary600: string;
        secondary: string;
        secondary100: string;
        secondary200: string;
        secondary300: string;
        secondary400: string;
        secondary500: string;
        secondary600: string;
        secondary700: string;
        secondary800: string;
        secondary900: string;
        neutral: string;
        neutral100: string;
        neutral200: string;
        neutral300: string;
        neutral400: string;
        neutral500: string;
        neutral600: string;
        neutral700: string;
        neutral800: string;
        neutral900: string;
        error100: string;
        error300: string;
        error500: string;
        error600: string;
        error700: string;
        warning100: string;
        warning300: string;
        warning500: string;
        warning600: string;
        warning700: string;
        info100: string;
        info300: string;
        info500: string;
        info600: string;
        info700: string;
        success100: string;
        success300: string;
        success500: string;
        success600: string;
        success700: string;
        background: string;
        foreground: string;
    };
    space: {
        0: string;
        5: string;
        10: string;
        15: string;
        20: string;
        25: string;
        30: string;
        40: string;
        46: string;
        50: string;
        60: string;
        70: string;
        80: string;
        90: string;
        100: string;
        2: string;
        4: string;
        6: string;
        8: string;
        12: string;
        16: string;
        24: string;
        28: string;
        32: string;
    };
    radii: {
        xs: string;
        sm: string;
        xm: string;
        md: string;
        xl: string;
        lg: string;
        primary: string;
        secondary: string;
    };
    fontSizes: {
        10: string;
        12: string;
        14: string;
        16: string;
        18: string;
        20: string;
        22: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        48: string;
    };
    fonts: {
        primary: string;
        widget: string;
    };
    fontWeights: {
        regular: number;
        medium: number;
        semiBold: number;
        bold: number;
    };
    lineHeights: {
        12: string;
        16: string;
        20: string;
        24: string;
        26: string;
        28: string;
        30: string;
        36: string;
        40: string;
        44: string;
        52: string;
        64: string;
    };
    letterSpacings: {};
    sizes: {
        4: string;
        6: string;
        8: string;
        12: string;
        16: string;
        18: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        45: string;
        48: string;
    };
    borderWidths: {};
    borderStyles: {};
    shadows: {
        s: string;
    };
    zIndices: {};
    transitions: {};
}, import("@stitches/react/types/config").DefaultThemeMap, {}>>;
export declare const TokenSectionContainer: import("@stitches/react/types/styled-component").StyledComponent<"div", {}, {
    sm: string;
    md: string;
    lg: string;
}, import("@stitches/react/types/css-util").CSS<{
    sm: string;
    md: string;
    lg: string;
}, {
    colors: {
        primary: string;
        primary500: string;
        primary600: string;
        secondary: string;
        secondary100: string;
        secondary200: string;
        secondary300: string;
        secondary400: string;
        secondary500: string;
        secondary600: string;
        secondary700: string;
        secondary800: string;
        secondary900: string;
        neutral: string;
        neutral100: string;
        neutral200: string;
        neutral300: string;
        neutral400: string;
        neutral500: string;
        neutral600: string;
        neutral700: string;
        neutral800: string;
        neutral900: string;
        error100: string;
        error300: string;
        error500: string;
        error600: string;
        error700: string;
        warning100: string;
        warning300: string;
        warning500: string;
        warning600: string;
        warning700: string;
        info100: string;
        info300: string;
        info500: string;
        info600: string;
        info700: string;
        success100: string;
        success300: string;
        success500: string;
        success600: string;
        success700: string;
        background: string;
        foreground: string;
    };
    space: {
        0: string;
        5: string;
        10: string;
        15: string;
        20: string;
        25: string;
        30: string;
        40: string;
        46: string;
        50: string;
        60: string;
        70: string;
        80: string;
        90: string;
        100: string;
        2: string;
        4: string;
        6: string;
        8: string;
        12: string;
        16: string;
        24: string;
        28: string;
        32: string;
    };
    radii: {
        xs: string;
        sm: string;
        xm: string;
        md: string;
        xl: string;
        lg: string;
        primary: string;
        secondary: string;
    };
    fontSizes: {
        10: string;
        12: string;
        14: string;
        16: string;
        18: string;
        20: string;
        22: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        48: string;
    };
    fonts: {
        primary: string;
        widget: string;
    };
    fontWeights: {
        regular: number;
        medium: number;
        semiBold: number;
        bold: number;
    };
    lineHeights: {
        12: string;
        16: string;
        20: string;
        24: string;
        26: string;
        28: string;
        30: string;
        36: string;
        40: string;
        44: string;
        52: string;
        64: string;
    };
    letterSpacings: {};
    sizes: {
        4: string;
        6: string;
        8: string;
        12: string;
        16: string;
        18: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        45: string;
        48: string;
    };
    borderWidths: {};
    borderStyles: {};
    shadows: {
        s: string;
    };
    zIndices: {};
    transitions: {};
}, import("@stitches/react/types/config").DefaultThemeMap, {}>>;
//# sourceMappingURL=TokenSection.styles.d.ts.map