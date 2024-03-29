import { DOWN_ARROW, ENTER, ESCAPE, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { ConnectionPositionPair, Overlay, OverlayConfig, OverlayModule } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT, CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { __spread, __decorate, __metadata } from 'tslib';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, ChangeDetectorRef, ElementRef, EventEmitter, Output, ContentChildren, Host, NgZone, Optional, TemplateRef, ViewChild, ViewChildren, forwardRef, Directive, Inject, ViewContainerRef, NgModule } from '@angular/core';
import { defer, merge, Subscription, fromEvent } from 'rxjs';
import { filter, switchMap, take, delay, distinct, map } from 'rxjs/operators';
import { scrollIntoView, InputBoolean, slideMotion, NzNoAnimationDirective, NzAddOnModule, NzNoAnimationModule } from 'ng-zorro-antd/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzAutocompleteOptgroupComponent = /** @class */ (function () {
    function NzAutocompleteOptgroupComponent() {
    }
    NzAutocompleteOptgroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-auto-optgroup',
                    exportAs: 'nzAutoOptgroup',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<div class=\"ant-select-dropdown-menu-item-group-title\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzLabel\">{{nzLabel}}</ng-container>\r\n</div>\r\n<ul class=\"ant-select-dropdown-menu-item-group-list\">\r\n  <ng-content select=\"nz-auto-option\"></ng-content>\r\n</ul>\r\n",
                    host: {
                        role: 'group',
                        class: 'ant-select-dropdown-menu-item-group'
                    }
                }] }
    ];
    /** @nocollapse */
    NzAutocompleteOptgroupComponent.ctorParameters = function () { return []; };
    NzAutocompleteOptgroupComponent.propDecorators = {
        nzLabel: [{ type: Input }]
    };
    return NzAutocompleteOptgroupComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzOptionSelectionChange = /** @class */ (function () {
    function NzOptionSelectionChange(source, isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.source = source;
        this.isUserInput = isUserInput;
    }
    return NzOptionSelectionChange;
}());
var NzAutocompleteOptionComponent = /** @class */ (function () {
    function NzAutocompleteOptionComponent(changeDetectorRef, element) {
        this.changeDetectorRef = changeDetectorRef;
        this.element = element;
        this.nzDisabled = false;
        this.selectionChange = new EventEmitter();
        this.active = false;
        this.selected = false;
    }
    /**
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.select = /**
     * @return {?}
     */
    function () {
        this.selected = true;
        this.changeDetectorRef.markForCheck();
        this.emitSelectionChangeEvent();
    };
    /**
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.deselect = /**
     * @return {?}
     */
    function () {
        this.selected = false;
        this.changeDetectorRef.markForCheck();
        this.emitSelectionChangeEvent();
    };
    /** Git display label */
    /**
     * Git display label
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.getLabel = /**
     * Git display label
     * @return {?}
     */
    function () {
        return this.nzLabel || this.nzValue.toString();
    };
    /** Set active (only styles) */
    /**
     * Set active (only styles)
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.setActiveStyles = /**
     * Set active (only styles)
     * @return {?}
     */
    function () {
        if (!this.active) {
            this.active = true;
            this.changeDetectorRef.markForCheck();
        }
    };
    /** Unset active (only styles) */
    /**
     * Unset active (only styles)
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.setInactiveStyles = /**
     * Unset active (only styles)
     * @return {?}
     */
    function () {
        if (this.active) {
            this.active = false;
            this.changeDetectorRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.scrollIntoViewIfNeeded = /**
     * @return {?}
     */
    function () {
        scrollIntoView(this.element.nativeElement);
    };
    /**
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.selectViaInteraction = /**
     * @return {?}
     */
    function () {
        if (!this.nzDisabled) {
            this.selected = !this.selected;
            if (this.selected) {
                this.setActiveStyles();
            }
            else {
                this.setInactiveStyles();
            }
            this.emitSelectionChangeEvent(true);
            this.changeDetectorRef.markForCheck();
        }
    };
    /**
     * @private
     * @param {?=} isUserInput
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.emitSelectionChangeEvent = /**
     * @private
     * @param {?=} isUserInput
     * @return {?}
     */
    function (isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.selectionChange.emit(new NzOptionSelectionChange(this, isUserInput));
    };
    NzAutocompleteOptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-auto-option',
                    exportAs: 'nzAutoOption',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<ng-content></ng-content>",
                    host: {
                        role: 'menuitem',
                        class: 'ant-select-dropdown-menu-item',
                        '[class.ant-select-dropdown-menu-item-selected]': 'selected',
                        '[class.ant-select-dropdown-menu-item-active]': 'active',
                        '[class.ant-select-dropdown-menu-item-disabled]': 'nzDisabled',
                        '[attr.aria-selected]': 'selected.toString()',
                        '[attr.aria-disabled]': 'nzDisabled.toString()',
                        '(click)': 'selectViaInteraction()',
                        '(mousedown)': '$event.preventDefault()'
                    }
                }] }
    ];
    /** @nocollapse */
    NzAutocompleteOptionComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    NzAutocompleteOptionComponent.propDecorators = {
        nzValue: [{ type: Input }],
        nzLabel: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        selectionChange: [{ type: Output }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzAutocompleteOptionComponent.prototype, "nzDisabled", void 0);
    return NzAutocompleteOptionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzAutocompleteComponent = /** @class */ (function () {
    function NzAutocompleteComponent(changeDetectorRef, ngZone, noAnimation) {
        var _this = this;
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.noAnimation = noAnimation;
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzDefaultActiveFirstOption = true;
        this.nzBackfill = false;
        this.selectionChange = new EventEmitter();
        this.showPanel = false;
        this.isOpen = false;
        this.dropDownPosition = 'bottom';
        this.activeItemIndex = -1;
        this.selectionChangeSubscription = Subscription.EMPTY;
        this.dataSourceChangeSubscription = Subscription.EMPTY;
        /**
         * Options changes listener
         */
        this.optionSelectionChanges = defer((/**
         * @return {?}
         */
        function () {
            if (_this.options) {
                return merge.apply(void 0, __spread(_this.options.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) { return option.selectionChange; }))));
            }
            return _this.ngZone.onStable.asObservable().pipe(take(1), switchMap((/**
             * @return {?}
             */
            function () { return _this.optionSelectionChanges; })));
        }));
    }
    Object.defineProperty(NzAutocompleteComponent.prototype, "options", {
        /**
         * Options accessor, its source may be content or dataSource
         */
        get: /**
         * Options accessor, its source may be content or dataSource
         * @return {?}
         */
        function () {
            // first dataSource
            if (this.nzDataSource) {
                return this.fromDataSourceOptions;
            }
            else {
                return this.fromContentOptions;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.optionsInit();
    };
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.dataSourceChangeSubscription.unsubscribe();
        this.selectionChangeSubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.setVisibility = /**
     * @return {?}
     */
    function () {
        this.showPanel = !!this.options.length;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzAutocompleteComponent.prototype.setActiveItem = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var activeItem = this.options.toArray()[index];
        if (activeItem && !activeItem.active) {
            this.activeItem = activeItem;
            this.activeItemIndex = index;
            this.clearSelectedOptions(this.activeItem);
            this.activeItem.setActiveStyles();
            this.changeDetectorRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.setNextItemActive = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nextIndex = this.activeItemIndex + 1 <= this.options.length - 1 ? this.activeItemIndex + 1 : 0;
        this.setActiveItem(nextIndex);
    };
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.setPreviousItemActive = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var previousIndex = this.activeItemIndex - 1 < 0 ? this.options.length - 1 : this.activeItemIndex - 1;
        this.setActiveItem(previousIndex);
    };
    /**
     * @param {?=} option
     * @return {?}
     */
    NzAutocompleteComponent.prototype.getOptionIndex = /**
     * @param {?=} option
     * @return {?}
     */
    function (option) {
        return (/** @type {?} */ (this.options.reduce((/**
         * @param {?} result
         * @param {?} current
         * @param {?} index
         * @return {?}
         */
        function (result, current, index) {
            return result === -1 ? (option === current ? index : -1) : result;
        }), -1)));
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteComponent.prototype.optionsInit = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.setVisibility();
        this.subscribeOptionChanges();
        /** @type {?} */
        var changes = this.nzDataSource ? this.fromDataSourceOptions.changes : this.fromContentOptions.changes;
        // async
        this.dataSourceChangeSubscription = changes.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (!e.dirty && _this.isOpen) {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.setVisibility(); }));
            }
            _this.subscribeOptionChanges();
        }));
    };
    /**
     * Clear the status of options
     */
    /**
     * Clear the status of options
     * @private
     * @param {?=} skip
     * @param {?=} deselect
     * @return {?}
     */
    NzAutocompleteComponent.prototype.clearSelectedOptions = /**
     * Clear the status of options
     * @private
     * @param {?=} skip
     * @param {?=} deselect
     * @return {?}
     */
    function (skip, deselect) {
        if (deselect === void 0) { deselect = false; }
        this.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            if (option !== skip) {
                if (deselect) {
                    option.deselect();
                }
                option.setInactiveStyles();
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteComponent.prototype.subscribeOptionChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.selectionChangeSubscription.unsubscribe();
        this.selectionChangeSubscription = this.optionSelectionChanges
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.isUserInput; })))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.source.select();
            event.source.setActiveStyles();
            _this.activeItem = event.source;
            _this.activeItemIndex = _this.getOptionIndex(_this.activeItem);
            _this.clearSelectedOptions(event.source, true);
            _this.selectionChange.emit(event.source);
        }));
    };
    NzAutocompleteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-autocomplete',
                    exportAs: 'nzAutocomplete',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<ng-template>\r\n  <div class=\"ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft\"\r\n    #panel\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [@slideMotion]=\"dropDownPosition\"\r\n    [class.ant-select-dropdown-hidden]=\"!showPanel\" [ngClass]=\"nzOverlayClassName\" [ngStyle]=\"nzOverlayStyle\">\r\n    <div style=\"overflow: auto;\">\r\n      <ul class=\"ant-select-dropdown-menu  ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\r\n        role=\"menu\"\r\n        aria-activedescendant>\r\n        <ng-template *ngTemplateOutlet=\"nzDataSource ? optionsTemplate : contentTemplate\"></ng-template>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <ng-template #contentTemplate>\r\n    <ng-content></ng-content>\r\n  </ng-template>\r\n  <ng-template #optionsTemplate>\r\n    <nz-auto-option *ngFor=\"let option of nzDataSource\" [nzValue]=\"option\">{{option}}</nz-auto-option>\r\n  </ng-template>\r\n</ng-template>",
                    animations: [slideMotion],
                    styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzAutocompleteComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzAutocompleteComponent.propDecorators = {
        nzWidth: [{ type: Input }],
        nzOverlayClassName: [{ type: Input }],
        nzOverlayStyle: [{ type: Input }],
        nzDefaultActiveFirstOption: [{ type: Input }],
        nzBackfill: [{ type: Input }],
        nzDataSource: [{ type: Input }],
        selectionChange: [{ type: Output }],
        fromContentOptions: [{ type: ContentChildren, args: [NzAutocompleteOptionComponent, { descendants: true },] }],
        fromDataSourceOptions: [{ type: ViewChildren, args: [NzAutocompleteOptionComponent,] }],
        template: [{ type: ViewChild, args: [TemplateRef,] }],
        panel: [{ type: ViewChild, args: ['panel',] }],
        content: [{ type: ViewChild, args: ['content',] }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzAutocompleteComponent.prototype, "nzDefaultActiveFirstOption", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzAutocompleteComponent.prototype, "nzBackfill", void 0);
    return NzAutocompleteComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NZ_AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NzAutocompleteTriggerDirective; })),
    multi: true
};
/**
 * @return {?}
 */
function getNzAutocompleteMissingPanelError() {
    return Error('Attempting to open an undefined instance of `nz-autocomplete`. ' +
        'Make sure that the id passed to the `nzAutocomplete` is correct and that ' +
        "you're attempting to open it after the ngAfterContentInit hook.");
}
var NzAutocompleteTriggerDirective = /** @class */ (function () {
    function NzAutocompleteTriggerDirective(elementRef, _overlay, viewContainerRef, document) {
        this.elementRef = elementRef;
        this._overlay = _overlay;
        this.viewContainerRef = viewContainerRef;
        this.document = document;
        // tslint:disable-next-line:no-any
        this._onChange = (/**
         * @return {?}
         */
        function () { });
        this._onTouched = (/**
         * @return {?}
         */
        function () { });
        this.panelOpen = false;
    }
    Object.defineProperty(NzAutocompleteTriggerDirective.prototype, "activeOption", {
        /** Current active option */
        get: /**
         * Current active option
         * @return {?}
         */
        function () {
            if (this.nzAutocomplete && this.nzAutocomplete.options.length) {
                return this.nzAutocomplete.activeItem;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyPanel();
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.writeValue = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.setTriggerValue(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        /** @type {?} */
        var element = this.elementRef.nativeElement;
        element.disabled = isDisabled;
        this.closePanel();
    };
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.openPanel = /**
     * @return {?}
     */
    function () {
        this.previousValue = this.elementRef.nativeElement.value;
        this.attachOverlay();
    };
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.closePanel = /**
     * @return {?}
     */
    function () {
        if (this.panelOpen) {
            this.nzAutocomplete.isOpen = this.panelOpen = false;
            if (this.overlayRef && this.overlayRef.hasAttached()) {
                this.selectionChangeSubscription.unsubscribe();
                this.overlayBackdropClickSubscription.unsubscribe();
                this.overlayPositionChangeSubscription.unsubscribe();
                this.optionsChangeSubscription.unsubscribe();
                this.overlayRef.detach();
                this.overlayRef = null;
                this.portal = null;
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.handleKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
        /** @type {?} */
        var isArrowKey = keyCode === UP_ARROW || keyCode === DOWN_ARROW;
        if (keyCode === ESCAPE) {
            event.preventDefault();
        }
        if (this.panelOpen && (keyCode === ESCAPE || keyCode === TAB)) {
            // Reset value when tab / ESC close
            if (this.activeOption && this.activeOption.getLabel() !== this.previousValue) {
                this.setTriggerValue(this.previousValue);
            }
            this.closePanel();
        }
        else if (this.panelOpen && keyCode === ENTER) {
            if (this.nzAutocomplete.showPanel && this.activeOption) {
                event.preventDefault();
                this.activeOption.selectViaInteraction();
            }
        }
        else if (this.panelOpen && isArrowKey && this.nzAutocomplete.showPanel) {
            event.stopPropagation();
            event.preventDefault();
            if (keyCode === UP_ARROW) {
                this.nzAutocomplete.setPreviousItemActive();
            }
            else {
                this.nzAutocomplete.setNextItemActive();
            }
            if (this.activeOption) {
                this.activeOption.scrollIntoViewIfNeeded();
            }
            this.doBackfill();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.handleInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var target = (/** @type {?} */ (event.target));
        /** @type {?} */
        var value = target.value;
        if (this.canOpen() && document.activeElement === target && this.previousValue !== value) {
            if (target.type === 'number') {
                value = value === '' ? null : parseFloat(value);
            }
            this._onChange(value);
            this.openPanel();
        }
    };
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.handleFocus = /**
     * @return {?}
     */
    function () {
        if (this.canOpen()) {
            this.openPanel();
        }
    };
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.handleBlur = /**
     * @return {?}
     */
    function () {
        this.closePanel();
        this._onTouched();
    };
    /**
     * Subscription data source changes event
     */
    /**
     * Subscription data source changes event
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.subscribeOptionsChange = /**
     * Subscription data source changes event
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return this.nzAutocomplete.options.changes.pipe(delay(0)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.resetActiveItem();
        }));
    };
    /**
     * Subscription option changes event and set the value
     */
    /**
     * Subscription option changes event and set the value
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.subscribeSelectionChange = /**
     * Subscription option changes event and set the value
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return this.nzAutocomplete.selectionChange.subscribe((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            _this.setValueAndClose(option);
        }));
    };
    /**
     * Subscription external click and close panel
     */
    /**
     * Subscription external click and close panel
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.subscribeOverlayBackdropClick = /**
     * Subscription external click and close panel
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return merge(fromEvent(this.document, 'click'), fromEvent(this.document, 'touchend')).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var clickTarget = (/** @type {?} */ (event.target));
            // Make sure is not self
            if (clickTarget !== _this.elementRef.nativeElement &&
                !(/** @type {?} */ (_this.overlayRef)).overlayElement.contains(clickTarget) &&
                _this.panelOpen) {
                _this.closePanel();
            }
        }));
    };
    /**
     * Subscription overlay position changes and reset dropdown position
     */
    /**
     * Subscription overlay position changes and reset dropdown position
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.subscribeOverlayPositionChange = /**
     * Subscription overlay position changes and reset dropdown position
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return this.positionStrategy.positionChanges
            .pipe(map((/**
         * @param {?} position
         * @return {?}
         */
        function (position) { return position.connectionPair.originY; })), distinct())
            .subscribe((/**
         * @param {?} position
         * @return {?}
         */
        function (position) {
            _this.nzAutocomplete.dropDownPosition = position;
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.attachOverlay = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.nzAutocomplete) {
            throw getNzAutocompleteMissingPanelError();
        }
        if (!this.portal) {
            this.portal = new TemplatePortal(this.nzAutocomplete.template, this.viewContainerRef);
        }
        if (!this.overlayRef) {
            this.overlayRef = this._overlay.create(this.getOverlayConfig());
        }
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            this.overlayPositionChangeSubscription = this.subscribeOverlayPositionChange();
            this.selectionChangeSubscription = this.subscribeSelectionChange();
            this.overlayBackdropClickSubscription = this.subscribeOverlayBackdropClick();
            this.optionsChangeSubscription = this.subscribeOptionsChange();
        }
        this.nzAutocomplete.isOpen = this.panelOpen = true;
        this.nzAutocomplete.setVisibility();
        this.overlayRef.updateSize({ width: this.nzAutocomplete.nzWidth || this.getHostWidth() });
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.overlayRef) {
                _this.overlayRef.updatePosition();
            }
        }), 150);
        this.resetActiveItem();
        if (this.activeOption) {
            this.activeOption.scrollIntoViewIfNeeded();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.destroyPanel = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.overlayRef) {
            this.closePanel();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.getOverlayConfig = /**
     * @private
     * @return {?}
     */
    function () {
        return new OverlayConfig({
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this._overlay.scrollStrategies.reposition(),
            // default host element width
            width: this.nzAutocomplete.nzWidth || this.getHostWidth()
        });
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.getConnectedElement = /**
     * @private
     * @return {?}
     */
    function () {
        return this.elementRef;
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.getHostWidth = /**
     * @private
     * @return {?}
     */
    function () {
        return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.getOverlayPosition = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
        ];
        this.positionStrategy = this._overlay
            .position()
            .flexibleConnectedTo(this.getConnectedElement())
            .withPositions(positions)
            .withFlexibleDimensions(false)
            .withPush(false);
        return this.positionStrategy;
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.resetActiveItem = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index = this.nzAutocomplete.getOptionIndex(this.nzAutocomplete.activeItem);
        if (this.nzAutocomplete.activeItem && index !== -1) {
            this.nzAutocomplete.setActiveItem(index);
        }
        else {
            this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption ? 0 : -1);
        }
    };
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.setValueAndClose = /**
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        /** @type {?} */
        var value = option.nzValue;
        this.setTriggerValue(option.getLabel());
        this._onChange(value);
        this.elementRef.nativeElement.focus();
        this.closePanel();
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.setTriggerValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.elementRef.nativeElement.value = value || '';
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.doBackfill = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.nzAutocomplete.nzBackfill && this.nzAutocomplete.activeItem) {
            this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel());
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.canOpen = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.elementRef.nativeElement;
        return !element.readOnly && !element.disabled;
    };
    NzAutocompleteTriggerDirective.decorators = [
        { type: Directive, args: [{
                    selector: "input[nzAutocomplete], textarea[nzAutocomplete]",
                    exportAs: 'nzAutocompleteTrigger',
                    providers: [NZ_AUTOCOMPLETE_VALUE_ACCESSOR],
                    host: {
                        autocomplete: 'off',
                        'aria-autocomplete': 'list',
                        '(focusin)': 'handleFocus()',
                        '(blur)': 'handleBlur()',
                        '(input)': 'handleInput($event)',
                        '(keydown)': 'handleKeydown($event)'
                    }
                },] }
    ];
    /** @nocollapse */
    NzAutocompleteTriggerDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Overlay },
        { type: ViewContainerRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
    ]; };
    NzAutocompleteTriggerDirective.propDecorators = {
        nzAutocomplete: [{ type: Input }]
    };
    return NzAutocompleteTriggerDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzAutocompleteModule = /** @class */ (function () {
    function NzAutocompleteModule() {
    }
    NzAutocompleteModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        NzAutocompleteComponent,
                        NzAutocompleteOptionComponent,
                        NzAutocompleteTriggerDirective,
                        NzAutocompleteOptgroupComponent
                    ],
                    exports: [
                        NzAutocompleteComponent,
                        NzAutocompleteOptionComponent,
                        NzAutocompleteTriggerDirective,
                        NzAutocompleteOptgroupComponent
                    ],
                    imports: [CommonModule, OverlayModule, FormsModule, NzAddOnModule, NzNoAnimationModule]
                },] }
    ];
    return NzAutocompleteModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzAutocompleteModule, NzAutocompleteComponent, getNzAutocompleteMissingPanelError, NZ_AUTOCOMPLETE_VALUE_ACCESSOR, NzAutocompleteTriggerDirective, NzOptionSelectionChange, NzAutocompleteOptionComponent, NzAutocompleteOptgroupComponent };

//# sourceMappingURL=ng-zorro-antd-auto-complete.js.map