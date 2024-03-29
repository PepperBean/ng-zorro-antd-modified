(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/keycodes'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('@angular/common'), require('@angular/forms'), require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/auto-complete', ['exports', '@angular/cdk/keycodes', '@angular/cdk/overlay', '@angular/cdk/portal', '@angular/common', '@angular/forms', '@angular/core', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core'], factory) :
    (factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd']['auto-complete'] = {}),global.ng.cdk.keycodes,global.ng.cdk.overlay,global.ng.cdk.portal,global.ng.common,global.ng.forms,global.ng.core,global.rxjs,global.rxjs.operators,global['ng-zorro-antd'].core));
}(this, (function (exports,keycodes,overlay,portal,common,forms,core,rxjs,operators,core$1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzAutocompleteOptgroupComponent = /** @class */ (function () {
        function NzAutocompleteOptgroupComponent() {
        }
        NzAutocompleteOptgroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-auto-optgroup',
                        exportAs: 'nzAutoOptgroup',
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
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
            nzLabel: [{ type: core.Input }]
        };
        return NzAutocompleteOptgroupComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzOptionSelectionChange = /** @class */ (function () {
        function NzOptionSelectionChange(source, isUserInput) {
            if (isUserInput === void 0) {
                isUserInput = false;
            }
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
            this.selectionChange = new core.EventEmitter();
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
                core$1.scrollIntoView(this.element.nativeElement);
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
                if (isUserInput === void 0) {
                    isUserInput = false;
                }
                this.selectionChange.emit(new NzOptionSelectionChange(this, isUserInput));
            };
        NzAutocompleteOptionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-auto-option',
                        exportAs: 'nzAutoOption',
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
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
        NzAutocompleteOptionComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef },
                { type: core.ElementRef }
            ];
        };
        NzAutocompleteOptionComponent.propDecorators = {
            nzValue: [{ type: core.Input }],
            nzLabel: [{ type: core.Input }],
            nzDisabled: [{ type: core.Input }],
            selectionChange: [{ type: core.Output }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzAutocompleteOptionComponent.prototype, "nzDisabled", void 0);
        return NzAutocompleteOptionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NZ_AUTOCOMPLETE_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(( /**
         * @return {?}
         */function () { return NzAutocompleteTriggerDirective; })),
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
            this._onChange = ( /**
             * @return {?}
             */function () { });
            this._onTouched = ( /**
             * @return {?}
             */function () { });
            this.panelOpen = false;
        }
        Object.defineProperty(NzAutocompleteTriggerDirective.prototype, "activeOption", {
            /** Current active option */
            get: /**
             * Current active option
             * @return {?}
             */ function () {
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
                var isArrowKey = keyCode === keycodes.UP_ARROW || keyCode === keycodes.DOWN_ARROW;
                if (keyCode === keycodes.ESCAPE) {
                    event.preventDefault();
                }
                if (this.panelOpen && (keyCode === keycodes.ESCAPE || keyCode === keycodes.TAB)) {
                    // Reset value when tab / ESC close
                    if (this.activeOption && this.activeOption.getLabel() !== this.previousValue) {
                        this.setTriggerValue(this.previousValue);
                    }
                    this.closePanel();
                }
                else if (this.panelOpen && keyCode === keycodes.ENTER) {
                    if (this.nzAutocomplete.showPanel && this.activeOption) {
                        event.preventDefault();
                        this.activeOption.selectViaInteraction();
                    }
                }
                else if (this.panelOpen && isArrowKey && this.nzAutocomplete.showPanel) {
                    event.stopPropagation();
                    event.preventDefault();
                    if (keyCode === keycodes.UP_ARROW) {
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
                var target = ( /** @type {?} */(event.target));
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
                return this.nzAutocomplete.options.changes.pipe(operators.delay(0)).subscribe(( /**
                 * @return {?}
                 */function () {
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
                return this.nzAutocomplete.selectionChange.subscribe(( /**
                 * @param {?} option
                 * @return {?}
                 */function (option) {
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
                return rxjs.merge(rxjs.fromEvent(this.document, 'click'), rxjs.fromEvent(this.document, 'touchend')).subscribe(( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) {
                    /** @type {?} */
                    var clickTarget = ( /** @type {?} */(event.target));
                    // Make sure is not self
                    if (clickTarget !== _this.elementRef.nativeElement &&
                        !( /** @type {?} */(_this.overlayRef)).overlayElement.contains(clickTarget) &&
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
                    .pipe(operators.map(( /**
             * @param {?} position
             * @return {?}
             */function (position) { return position.connectionPair.originY; })), operators.distinct())
                    .subscribe(( /**
             * @param {?} position
             * @return {?}
             */function (position) {
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
                    this.portal = new portal.TemplatePortal(this.nzAutocomplete.template, this.viewContainerRef);
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
                setTimeout(( /**
                 * @return {?}
                 */function () {
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
                return new overlay.OverlayConfig({
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
                    new overlay.ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
                    new overlay.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
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
            { type: core.Directive, args: [{
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
        NzAutocompleteTriggerDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: overlay.Overlay },
                { type: core.ViewContainerRef },
                { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common.DOCUMENT,] }] }
            ];
        };
        NzAutocompleteTriggerDirective.propDecorators = {
            nzAutocomplete: [{ type: core.Input }]
        };
        return NzAutocompleteTriggerDirective;
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
            this.selectionChange = new core.EventEmitter();
            this.showPanel = false;
            this.isOpen = false;
            this.dropDownPosition = 'bottom';
            this.activeItemIndex = -1;
            this.selectionChangeSubscription = rxjs.Subscription.EMPTY;
            this.dataSourceChangeSubscription = rxjs.Subscription.EMPTY;
            /**
             * Options changes listener
             */
            this.optionSelectionChanges = rxjs.defer(( /**
             * @return {?}
             */function () {
                if (_this.options) {
                    return rxjs.merge.apply(void 0, __spread(_this.options.map(( /**
                     * @param {?} option
                     * @return {?}
                     */function (option) { return option.selectionChange; }))));
                }
                return _this.ngZone.onStable.asObservable().pipe(operators.take(1), operators.switchMap(( /**
                 * @return {?}
                 */function () { return _this.optionSelectionChanges; })));
            }));
        }
        Object.defineProperty(NzAutocompleteComponent.prototype, "options", {
            /**
             * Options accessor, its source may be content or dataSource
             */
            get: /**
             * Options accessor, its source may be content or dataSource
             * @return {?}
             */ function () {
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
                return ( /** @type {?} */(this.options.reduce(( /**
                 * @param {?} result
                 * @param {?} current
                 * @param {?} index
                 * @return {?}
                 */function (result, current, index) {
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
                this.dataSourceChangeSubscription = changes.subscribe(( /**
                 * @param {?} e
                 * @return {?}
                 */function (e) {
                    if (!e.dirty && _this.isOpen) {
                        setTimeout(( /**
                         * @return {?}
                         */function () { return _this.setVisibility(); }));
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
                if (deselect === void 0) {
                    deselect = false;
                }
                this.options.forEach(( /**
                 * @param {?} option
                 * @return {?}
                 */function (option) {
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
                    .pipe(operators.filter(( /**
             * @param {?} event
             * @return {?}
             */function (event) { return event.isUserInput; })))
                    .subscribe(( /**
             * @param {?} event
             * @return {?}
             */function (event) {
                    event.source.select();
                    event.source.setActiveStyles();
                    _this.activeItem = event.source;
                    _this.activeItemIndex = _this.getOptionIndex(_this.activeItem);
                    _this.clearSelectedOptions(event.source, true);
                    _this.selectionChange.emit(event.source);
                }));
            };
        NzAutocompleteComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-autocomplete',
                        exportAs: 'nzAutocomplete',
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        template: "<ng-template>\r\n  <div class=\"ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft\"\r\n    #panel\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [@slideMotion]=\"dropDownPosition\"\r\n    [class.ant-select-dropdown-hidden]=\"!showPanel\" [ngClass]=\"nzOverlayClassName\" [ngStyle]=\"nzOverlayStyle\">\r\n    <div style=\"overflow: auto;\">\r\n      <ul class=\"ant-select-dropdown-menu  ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\r\n        role=\"menu\"\r\n        aria-activedescendant>\r\n        <ng-template *ngTemplateOutlet=\"nzDataSource ? optionsTemplate : contentTemplate\"></ng-template>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <ng-template #contentTemplate>\r\n    <ng-content></ng-content>\r\n  </ng-template>\r\n  <ng-template #optionsTemplate>\r\n    <nz-auto-option *ngFor=\"let option of nzDataSource\" [nzValue]=\"option\">{{option}}</nz-auto-option>\r\n  </ng-template>\r\n</ng-template>",
                        animations: [core$1.slideMotion],
                        styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzAutocompleteComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef },
                { type: core.NgZone },
                { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
            ];
        };
        NzAutocompleteComponent.propDecorators = {
            nzWidth: [{ type: core.Input }],
            nzOverlayClassName: [{ type: core.Input }],
            nzOverlayStyle: [{ type: core.Input }],
            nzDefaultActiveFirstOption: [{ type: core.Input }],
            nzBackfill: [{ type: core.Input }],
            nzDataSource: [{ type: core.Input }],
            selectionChange: [{ type: core.Output }],
            fromContentOptions: [{ type: core.ContentChildren, args: [NzAutocompleteOptionComponent, { descendants: true },] }],
            fromDataSourceOptions: [{ type: core.ViewChildren, args: [NzAutocompleteOptionComponent,] }],
            template: [{ type: core.ViewChild, args: [core.TemplateRef,] }],
            panel: [{ type: core.ViewChild, args: ['panel',] }],
            content: [{ type: core.ViewChild, args: ['content',] }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzAutocompleteComponent.prototype, "nzDefaultActiveFirstOption", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzAutocompleteComponent.prototype, "nzBackfill", void 0);
        return NzAutocompleteComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzAutocompleteModule = /** @class */ (function () {
        function NzAutocompleteModule() {
        }
        NzAutocompleteModule.decorators = [
            { type: core.NgModule, args: [{
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
                        imports: [common.CommonModule, overlay.OverlayModule, forms.FormsModule, core$1.NzAddOnModule, core$1.NzNoAnimationModule]
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

    exports.NzAutocompleteModule = NzAutocompleteModule;
    exports.NzAutocompleteComponent = NzAutocompleteComponent;
    exports.getNzAutocompleteMissingPanelError = getNzAutocompleteMissingPanelError;
    exports.NZ_AUTOCOMPLETE_VALUE_ACCESSOR = NZ_AUTOCOMPLETE_VALUE_ACCESSOR;
    exports.NzAutocompleteTriggerDirective = NzAutocompleteTriggerDirective;
    exports.NzOptionSelectionChange = NzOptionSelectionChange;
    exports.NzAutocompleteOptionComponent = NzAutocompleteOptionComponent;
    exports.NzAutocompleteOptgroupComponent = NzAutocompleteOptgroupComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-auto-complete.umd.js.map