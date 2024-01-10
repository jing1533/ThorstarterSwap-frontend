/// <reference types="trusted-types" />
import React from 'react';
declare const Button: React.ForwardRefExoticComponent<{
    slot?: string | undefined;
    style?: React.CSSProperties | undefined;
    title?: string | undefined;
    children?: React.ReactNode;
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
    role?: React.AriaRole | undefined;
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
    onCopy?: React.ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCopyCapture?: React.ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCut?: React.ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCutCapture?: React.ClipboardEventHandler<HTMLButtonElement> | undefined;
    onPaste?: React.ClipboardEventHandler<HTMLButtonElement> | undefined;
    onPasteCapture?: React.ClipboardEventHandler<HTMLButtonElement> | undefined;
    onCompositionEnd?: React.CompositionEventHandler<HTMLButtonElement> | undefined;
    onCompositionEndCapture?: React.CompositionEventHandler<HTMLButtonElement> | undefined;
    onCompositionStart?: React.CompositionEventHandler<HTMLButtonElement> | undefined;
    onCompositionStartCapture?: React.CompositionEventHandler<HTMLButtonElement> | undefined;
    onCompositionUpdate?: React.CompositionEventHandler<HTMLButtonElement> | undefined;
    onCompositionUpdateCapture?: React.CompositionEventHandler<HTMLButtonElement> | undefined;
    onFocus?: React.FocusEventHandler<HTMLButtonElement> | undefined;
    onFocusCapture?: React.FocusEventHandler<HTMLButtonElement> | undefined;
    onBlur?: React.FocusEventHandler<HTMLButtonElement> | undefined;
    onBlurCapture?: React.FocusEventHandler<HTMLButtonElement> | undefined;
    onChange?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onChangeCapture?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onBeforeInput?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onBeforeInputCapture?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onInput?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onInputCapture?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onReset?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onResetCapture?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onSubmit?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onSubmitCapture?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onInvalid?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onInvalidCapture?: React.FormEventHandler<HTMLButtonElement> | undefined;
    onLoad?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onError?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onErrorCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyDownCapture?: React.KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyPress?: React.KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyPressCapture?: React.KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyUp?: React.KeyboardEventHandler<HTMLButtonElement> | undefined;
    onKeyUpCapture?: React.KeyboardEventHandler<HTMLButtonElement> | undefined;
    onAbort?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onAbortCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlay?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlayCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlayThrough?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onCanPlayThroughCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onDurationChange?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onDurationChangeCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onEmptied?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onEmptiedCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onEncrypted?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onEncryptedCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onEnded?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onEndedCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadedData?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadedDataCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadedMetadata?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadedMetadataCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadStart?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onLoadStartCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onPause?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onPauseCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onPlay?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onPlayCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onPlaying?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onPlayingCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onProgress?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onProgressCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onRateChange?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onRateChangeCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onResize?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onResizeCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSeeked?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSeekedCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSeeking?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSeekingCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onStalled?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onStalledCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSuspend?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSuspendCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onTimeUpdate?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onTimeUpdateCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onVolumeChange?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onVolumeChangeCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onWaiting?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onWaitingCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onAuxClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onAuxClickCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onClickCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onContextMenu?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onContextMenuCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onDoubleClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onDoubleClickCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onDrag?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragEnd?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragEndCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragEnter?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragEnterCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragExit?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragExitCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragLeave?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragLeaveCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragOver?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragOverCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragStart?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDragStartCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDrop?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onDropCapture?: React.DragEventHandler<HTMLButtonElement> | undefined;
    onMouseDown?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseDownCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseEnter?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseLeave?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseMove?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseMoveCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOut?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOutCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOver?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseOverCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseUp?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseUpCapture?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onSelect?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onSelectCapture?: React.ReactEventHandler<HTMLButtonElement> | undefined;
    onTouchCancel?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchCancelCapture?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchEnd?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchEndCapture?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchMove?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchMoveCapture?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchStart?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onTouchStartCapture?: React.TouchEventHandler<HTMLButtonElement> | undefined;
    onPointerDown?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerDownCapture?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerMove?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerMoveCapture?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerUp?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerUpCapture?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerCancel?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerCancelCapture?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerEnter?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerLeave?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerOver?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerOverCapture?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerOut?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onPointerOutCapture?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onGotPointerCapture?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onGotPointerCaptureCapture?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onLostPointerCapture?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onLostPointerCaptureCapture?: React.PointerEventHandler<HTMLButtonElement> | undefined;
    onScroll?: React.UIEventHandler<HTMLButtonElement> | undefined;
    onScrollCapture?: React.UIEventHandler<HTMLButtonElement> | undefined;
    onWheel?: React.WheelEventHandler<HTMLButtonElement> | undefined;
    onWheelCapture?: React.WheelEventHandler<HTMLButtonElement> | undefined;
    onAnimationStart?: React.AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationStartCapture?: React.AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationEnd?: React.AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationEndCapture?: React.AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationIteration?: React.AnimationEventHandler<HTMLButtonElement> | undefined;
    onAnimationIterationCapture?: React.AnimationEventHandler<HTMLButtonElement> | undefined;
    onTransitionEnd?: React.TransitionEventHandler<HTMLButtonElement> | undefined;
    onTransitionEndCapture?: React.TransitionEventHandler<HTMLButtonElement> | undefined;
} & {
    size?: "small" | "medium" | "large" | "xsmall" | "xxsmall" | undefined;
    variant?: "default" | "contained" | "outlined" | "ghost" | undefined;
    type?: "success" | "warning" | "error" | "primary" | "secondary" | undefined;
    loading?: boolean | undefined;
    disabled?: boolean | undefined;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    fullWidth?: boolean | undefined;
} & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLButtonElement>>;
export { Button };
//# sourceMappingURL=Button.d.ts.map