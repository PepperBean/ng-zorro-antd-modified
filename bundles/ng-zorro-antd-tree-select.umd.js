(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/keycodes'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/overlay'), require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('ng-zorro-antd/core'), require('ng-zorro-antd/empty'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/tree')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/tree-select', ['exports', '@angular/cdk/keycodes', 'rxjs', 'rxjs/operators', '@angular/cdk/overlay', '@angular/common', '@angular/core', '@angular/forms', 'ng-zorro-antd/core', 'ng-zorro-antd/empty', 'ng-zorro-antd/icon', 'ng-zorro-antd/tree'], factory) :
    (factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd']['tree-select'] = {}),global.ng.cdk.keycodes,global.rxjs,global.rxjs.operators,global.ng.cdk.overlay,global.ng.common,global.ng.core,global.ng.forms,global['ng-zorro-antd'].core,global['ng-zorro-antd'].empty,global['ng-zorro-antd'].icon,global['ng-zorro-antd'].tree));
}(this, (function (exports,keycodes,rxjs,operators,overlay,common,core,forms,core$1,empty,icon,tree) { 'use strict';

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
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
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
    var NzTreeSelectService = /** @class */ (function (_super) {
        __extends(NzTreeSelectService, _super);
        function NzTreeSelectService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NzTreeSelectService.decorators = [
            { type: core.Injectable }
        ];
        return NzTreeSelectService;
    }(core$1.NzTreeBaseService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} injector
     * @return {?}
     */
    function higherOrderServiceFactory(injector) {
        return injector.get(NzTreeSelectService);
    }
    var NzTreeSelectComponent = /** @class */ (function (_super) {
        __extends(NzTreeSelectComponent, _super);
        function NzTreeSelectComponent(nzTreeService, renderer, cdr, elementRef, noAnimation) {
            var _this = _super.call(this, nzTreeService) || this;
            _this.renderer = renderer;
            _this.cdr = cdr;
            _this.elementRef = elementRef;
            _this.noAnimation = noAnimation;
            _this.nzAllowClear = true;
            _this.nzShowExpand = true;
            _this.nzShowLine = false;
            _this.nzDropdownMatchSelectWidth = true;
            _this.nzCheckable = false;
            _this.nzShowIcon = false;
            _this.nzShowSearch = false;
            _this.nzDisabled = false;
            _this.nzAsyncData = false;
            _this.nzMultiple = false;
            _this.nzDefaultExpandAll = false;
            _this.nzNodes = [];
            _this.nzOpen = false;
            _this.nzSize = 'default';
            _this.nzPlaceHolder = '';
            _this.nzDefaultExpandedKeys = [];
            _this.nzDisplayWith = ( /**
             * @param {?} node
             * @return {?}
             */function (node) { return node.title; });
            _this.nzOpenChange = new core.EventEmitter();
            _this.nzCleared = new core.EventEmitter();
            _this.nzRemoved = new core.EventEmitter();
            _this.nzExpandChange = new core.EventEmitter();
            _this.nzTreeClick = new core.EventEmitter();
            _this.nzTreeCheckBoxChange = new core.EventEmitter();
            _this.isComposing = false;
            _this.isDestroy = true;
            _this.isNotFound = false;
            _this.inputValue = '';
            _this.dropDownPosition = 'bottom';
            _this.selectedNodes = [];
            _this.value = [];
            _this.onTouched = ( /**
             * @return {?}
             */function () { return null; });
            _this.renderer.addClass(_this.elementRef.nativeElement, 'ant-select');
            return _this;
        }
        Object.defineProperty(NzTreeSelectComponent.prototype, "placeHolderDisplay", {
            get: /**
             * @return {?}
             */ function () {
                return this.inputValue || this.isComposing || this.selectedNodes.length ? 'none' : 'block';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeSelectComponent.prototype, "searchDisplay", {
            get: /**
             * @return {?}
             */ function () {
                return this.nzOpen ? 'block' : 'none';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeSelectComponent.prototype, "isMultiple", {
            get: /**
             * @return {?}
             */ function () {
                return this.nzMultiple || this.nzCheckable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeSelectComponent.prototype, "selectedValueDisplay", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var showSelectedValue = false;
                /** @type {?} */
                var opacity = 1;
                if (!this.nzShowSearch) {
                    showSelectedValue = true;
                }
                else {
                    if (this.nzOpen) {
                        showSelectedValue = !(this.inputValue || this.isComposing);
                        if (showSelectedValue) {
                            opacity = 0.4;
                        }
                    }
                    else {
                        showSelectedValue = true;
                    }
                }
                return {
                    display: showSelectedValue ? 'block' : 'none',
                    opacity: "" + opacity
                };
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.isDestroy = false;
                this.selectionChangeSubscription = this.subscribeSelectionChange();
            };
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.isDestroy = true;
                this.closeDropDown();
                this.selectionChangeSubscription.unsubscribe();
            };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NzTreeSelectComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this.nzDisabled = isDisabled;
                this.closeDropDown();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzTreeSelectComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.hasOwnProperty('nzNodes')) {
                    this.updateSelectedNodes(true);
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NzTreeSelectComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var _this = this;
                if (core$1.isNotNil(value)) {
                    if (this.isMultiple && Array.isArray(value)) {
                        this.value = value;
                    }
                    else {
                        this.value = [( /** @type {?} */(value))];
                    }
                    this.updateSelectedNodes(true);
                }
                else {
                    this.value = [];
                    this.selectedNodes.forEach(( /**
                     * @param {?} node
                     * @return {?}
                     */function (node) {
                        _this.removeSelected(node, false);
                    }));
                    this.selectedNodes = [];
                }
                this.cdr.markForCheck();
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzTreeSelectComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChange = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzTreeSelectComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.trigger = /**
         * @return {?}
         */
            function () {
                if (this.nzDisabled || (!this.nzDisabled && this.nzOpen)) {
                    this.closeDropDown();
                }
                else {
                    this.openDropdown();
                    if (this.nzShowSearch || this.isMultiple) {
                        this.focusOnInput();
                    }
                }
            };
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.openDropdown = /**
         * @return {?}
         */
            function () {
                if (!this.nzDisabled) {
                    this.nzOpen = true;
                    this.nzOpenChange.emit(this.nzOpen);
                    this.updateCdkConnectedOverlayStatus();
                    this.updatePosition();
                }
            };
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.closeDropDown = /**
         * @return {?}
         */
            function () {
                this.onTouched();
                this.nzOpen = false;
                this.nzOpenChange.emit(this.nzOpen);
                this.cdr.markForCheck();
            };
        /**
         * @param {?} e
         * @return {?}
         */
        NzTreeSelectComponent.prototype.onKeyDownInput = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                /** @type {?} */
                var keyCode = e.keyCode;
                /** @type {?} */
                var eventTarget = ( /** @type {?} */(e.target));
                if (this.isMultiple && !eventTarget.value && keyCode === keycodes.BACKSPACE) {
                    e.preventDefault();
                    if (this.selectedNodes.length) {
                        /** @type {?} */
                        var removeNode = this.selectedNodes[this.selectedNodes.length - 1];
                        this.removeSelected(removeNode);
                        ( /** @type {?} */(( /** @type {?} */(this.nzTreeService)).triggerEventChange$)).next({
                            eventName: 'removeSelect',
                            node: removeNode
                        });
                    }
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NzTreeSelectComponent.prototype.onExpandedKeysChange = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.nzExpandChange.emit(value);
                this.nzDefaultExpandedKeys = __spread(( /** @type {?} */(value.keys)));
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NzTreeSelectComponent.prototype.setInputValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.inputValue = value;
                this.updateInputWidth();
                this.updatePosition();
            };
        /**
         * @param {?} node
         * @param {?=} emit
         * @param {?=} event
         * @return {?}
         */
        NzTreeSelectComponent.prototype.removeSelected = /**
         * @param {?} node
         * @param {?=} emit
         * @param {?=} event
         * @return {?}
         */
            function (node, emit, event) {
                if (emit === void 0) {
                    emit = true;
                }
                node.isSelected = false;
                node.isChecked = false;
                if (this.nzCheckable) {
                    this.nzTreeService.conduct(node);
                }
                else {
                    this.nzTreeService.setSelectedNodeList(node, this.nzMultiple);
                }
                if (emit) {
                    this.nzRemoved.emit(node);
                }
                // Do not trigger the popup
                if (event && event.stopPropagation) {
                    event.stopPropagation();
                }
            };
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.focusOnInput = /**
         * @return {?}
         */
            function () {
                var _this = this;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    if (_this.inputElement) {
                        _this.inputElement.nativeElement.focus();
                    }
                }));
            };
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.subscribeSelectionChange = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return rxjs.merge(this.nzTreeClick.pipe(operators.tap(( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) {
                    /** @type {?} */
                    var node = ( /** @type {?} */(event.node));
                    if (_this.nzCheckable && !node.isDisabled && !node.isDisableCheckbox) {
                        node.isChecked = !node.isChecked;
                        _this.nzTreeService.conduct(node);
                    }
                    if (_this.nzCheckable) {
                        node.isSelected = false;
                    }
                })), operators.filter(( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) {
                    /** @type {?} */
                    var node = ( /** @type {?} */(event.node));
                    return _this.nzCheckable ? !node.isDisabled && !node.isDisableCheckbox : !node.isDisabled;
                }))), this.nzCheckable ? this.nzTreeCheckBoxChange : rxjs.of(), this.nzCleared, this.nzRemoved).subscribe(( /**
                 * @return {?}
                 */function () {
                    _this.updateSelectedNodes();
                    /** @type {?} */
                    var value = _this.selectedNodes.map(( /**
                     * @param {?} node
                     * @return {?}
                     */function (node) { return ( /** @type {?} */(node.key)); }));
                    _this.value = __spread(value);
                    if (_this.nzShowSearch || _this.isMultiple) {
                        _this.inputValue = '';
                        _this.isNotFound = false;
                    }
                    if (_this.isMultiple) {
                        _this.onChange(value);
                        _this.focusOnInput();
                        _this.updatePosition();
                    }
                    else {
                        _this.closeDropDown();
                        _this.onChange(value.length ? value[0] : null);
                    }
                }));
            };
        /**
         * @param {?=} init
         * @return {?}
         */
        NzTreeSelectComponent.prototype.updateSelectedNodes = /**
         * @param {?=} init
         * @return {?}
         */
            function (init) {
                if (init === void 0) {
                    init = false;
                }
                if (init) {
                    /** @type {?} */
                    var nodes = this.coerceTreeNodes(this.nzNodes);
                    this.nzTreeService.isMultiple = this.isMultiple;
                    this.nzTreeService.initTree(nodes);
                    if (this.nzCheckable) {
                        this.nzTreeService.calcCheckedKeys(this.value, nodes);
                    }
                    else {
                        this.nzTreeService.calcSelectedKeys(this.value, nodes, this.isMultiple);
                    }
                }
                this.selectedNodes = __spread((this.nzCheckable ? this.getCheckedNodeList() : this.getSelectedNodeList()));
            };
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.updatePosition = /**
         * @return {?}
         */
            function () {
                var _this = this;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                        _this.cdkConnectedOverlay.overlayRef.updatePosition();
                    }
                }));
            };
        /**
         * @param {?} position
         * @return {?}
         */
        NzTreeSelectComponent.prototype.onPositionChange = /**
         * @param {?} position
         * @return {?}
         */
            function (position) {
                this.dropDownPosition = position.connectionPair.originY;
            };
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.updateInputWidth = /**
         * @return {?}
         */
            function () {
                if (this.isMultiple && this.inputElement) {
                    if (this.inputValue || this.isComposing) {
                        this.renderer.setStyle(this.inputElement.nativeElement, 'width', this.inputElement.nativeElement.scrollWidth + "px");
                    }
                    else {
                        this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
                    }
                }
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NzTreeSelectComponent.prototype.onClearSelection = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                var _this = this;
                $event.stopPropagation();
                $event.preventDefault();
                this.selectedNodes.forEach(( /**
                 * @param {?} node
                 * @return {?}
                 */function (node) {
                    _this.removeSelected(node, false);
                }));
                this.nzCleared.emit();
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NzTreeSelectComponent.prototype.setSearchValues = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                var _this = this;
                Promise.resolve().then(( /**
                 * @return {?}
                 */function () {
                    _this.isNotFound = (_this.nzShowSearch || _this.isMultiple) && !!_this.inputValue && ( /** @type {?} */($event.matchedKeys)).length === 0;
                }));
            };
        /**
         * @return {?}
         */
        NzTreeSelectComponent.prototype.updateCdkConnectedOverlayStatus = /**
         * @return {?}
         */
            function () {
                this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
            };
        /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */
        NzTreeSelectComponent.prototype.trackValue = /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */
            function (_index, option) {
                return ( /** @type {?} */(option.key));
            };
        NzTreeSelectComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-tree-select',
                        exportAs: 'nzTreeSelect',
                        animations: [core$1.slideMotion, core$1.zoomMotion],
                        template: "<ng-template #inputTemplate>\r\n  <input\r\n    #inputElement\r\n    autocomplete=\"off\"\r\n    class=\"ant-select-search__field\"\r\n    (compositionstart)=\"isComposing = true\"\r\n    (compositionend)=\"isComposing = false\"\r\n    (keydown)=\"onKeyDownInput($event)\"\r\n    [ngModel]=\"inputValue\"\r\n    (ngModelChange)=\"setInputValue($event)\"\r\n    [disabled]=\"nzDisabled\">\r\n</ng-template>\r\n\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\r\n  [cdkConnectedOverlayOpen]=\"nzOpen\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\r\n  [cdkConnectedOverlayMinWidth]=\"nzDropdownMatchSelectWidth? null : triggerWidth\"\r\n  [cdkConnectedOverlayWidth]=\"nzDropdownMatchSelectWidth? triggerWidth : null\"\r\n  (backdropClick)=\"closeDropDown()\"\r\n  (detach)=\"closeDropDown()\"\r\n  (positionChange)=\"onPositionChange($event)\">\r\n  <div class=\"ant-select-dropdown ant-select-tree-dropdown\"\r\n    [@slideMotion]=\"nzOpen ? dropDownPosition : 'void'\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [class.ant-select-dropdown--single]=\"!nzMultiple\"\r\n    [class.ant-select-dropdown--multiple]=\"nzMultiple\"\r\n    [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\r\n    [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\r\n    [ngStyle]=\"nzDropdownStyle\">\r\n    <nz-tree\r\n      #treeRef\r\n      [hidden]=\"isNotFound\"\r\n      nzNoAnimation\r\n      nzSelectMode\r\n      [nzData]=\"nzNodes\"\r\n      [nzMultiple]=\"nzMultiple\"\r\n      [nzSearchValue]=\"inputValue\"\r\n      [nzShowIcon]=\"nzShowIcon\"\r\n      [nzCheckable]=\"nzCheckable\"\r\n      [nzAsyncData]=\"nzAsyncData\"\r\n      [nzShowExpand]=\"nzShowExpand\"\r\n      [nzShowLine]=\"nzShowLine\"\r\n      [nzExpandedIcon]=\"nzExpandedIcon\"\r\n      [nzExpandAll]=\"nzDefaultExpandAll\"\r\n      [nzExpandedKeys]=\"nzDefaultExpandedKeys\"\r\n      [nzCheckedKeys]=\"nzCheckable ? value : []\"\r\n      [nzSelectedKeys]=\"!nzCheckable ? value : []\"\r\n      [nzTreeTemplate]=\"nzTreeTemplate\"\r\n      (nzExpandChange)=\"onExpandedKeysChange($event)\"\r\n      (nzClick)=\"nzTreeClick.emit($event)\"\r\n      (nzCheckedKeysChange)=\"updateSelectedNodes()\"\r\n      (nzSelectedKeysChange)=\"updateSelectedNodes()\"\r\n      (nzCheckBoxChange)=\"nzTreeCheckBoxChange.emit($event)\"\r\n      (nzSearchValueChange)=\"setSearchValues($event)\">\r\n    </nz-tree>\r\n    <span *ngIf=\"nzNodes.length === 0 || isNotFound\" class=\"ant-select-not-found\">\r\n      <nz-embed-empty [nzComponentName]=\"'tree-select'\" [specificContent]=\"nzNotFoundContent\"></nz-embed-empty>\r\n    </span>\r\n  </div>\r\n</ng-template>\r\n\r\n<div\r\n  cdkOverlayOrigin\r\n  class=\"ant-select-selection\"\r\n  [class.ant-select-selection--single]=\"!isMultiple\"\r\n  [class.ant-select-selection--multiple]=\"isMultiple\"\r\n  tabindex=\"0\">\r\n  <ng-container *ngIf=\"!isMultiple\">\r\n    <div class=\"ant-select-selection__rendered\">\r\n      <div\r\n        *ngIf=\"nzPlaceHolder && selectedNodes.length === 0\"\r\n        [style.display]=\"placeHolderDisplay\"\r\n        class=\"ant-select-selection__placeholder\">\r\n        {{ nzPlaceHolder }}\r\n      </div>\r\n\r\n      <div\r\n        *ngIf=\"selectedNodes.length === 1\"\r\n        class=\"ant-select-selection-selected-value\"\r\n        [attr.title]=\"nzDisplayWith(selectedNodes[0])\"\r\n        [ngStyle]=\"selectedValueDisplay\">\r\n        {{ nzDisplayWith(selectedNodes[0]) }}\r\n      </div>\r\n\r\n      <div\r\n        *ngIf=\"nzShowSearch\"\r\n        [style.display]=\"searchDisplay\"\r\n        class=\"ant-select-search ant-select-search--inline\">\r\n        <div class=\"ant-select-search__field__wrap\">\r\n          <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n          <span class=\"ant-select-search__field__mirror\">{{inputValue}}&nbsp;</span>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"isMultiple\">\r\n    <ul class=\"ant-select-selection__rendered\">\r\n      <div\r\n        *ngIf=\"nzPlaceHolder && selectedNodes.length === 0\"\r\n        [style.display]=\"placeHolderDisplay\"\r\n        class=\"ant-select-selection__placeholder\">\r\n        {{ nzPlaceHolder }}\r\n      </div>\r\n      <ng-container *ngFor=\"let node of selectedNodes | slice: 0 : nzMaxTagCount; trackBy:trackValue\">\r\n        <li\r\n          [@zoomMotion]\r\n          [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n          [attr.title]=\"nzDisplayWith(node)\"\r\n          [class.ant-select-selection__choice__disabled]=\"node.isDisabled\"\r\n          class=\"ant-select-selection__choice\">\r\n               <span *ngIf=\"!node.isDisabled\" class=\"ant-select-selection__choice__remove\"\r\n                 (mousedown)=\"$event.preventDefault()\"\r\n                 (click)=\"removeSelected(node, true, $event)\">\r\n                 <i nz-icon type=\"close\" class=\"ant-select-remove-icon\"></i>\r\n               </span>\r\n          <span class=\"ant-select-selection__choice__content\">{{ nzDisplayWith(node) }}</span>\r\n        </li>\r\n      </ng-container>\r\n      <li [@zoomMotion]\r\n        *ngIf=\"selectedNodes.length > nzMaxTagCount\"\r\n        class=\"ant-select-selection__choice\">\r\n        <div class=\"ant-select-selection__choice__content\">\r\n          <ng-container *ngIf=\"nzMaxTagPlaceholder\">\r\n            <ng-template\r\n              [ngTemplateOutlet]=\"nzMaxTagPlaceholder\"\r\n              [ngTemplateOutletContext]=\"{ $implicit: selectedNodes | slice: nzMaxTagCount}\">\r\n            </ng-template>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"!nzMaxTagPlaceholder\">\r\n            + {{ selectedNodes.length - nzMaxTagCount }} ...\r\n          </ng-container>\r\n        </div>\r\n      </li>\r\n      <li class=\"ant-select-search ant-select-search--inline\">\r\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n      </li>\r\n    </ul>\r\n  </ng-container>\r\n  <span *ngIf=\"nzAllowClear\" class=\"ant-select-selection__clear\"\r\n    (mousedown)=\"$event.preventDefault()\"\r\n    (click)=\"onClearSelection($event)\">\r\n    <i nz-icon type=\"close-circle\" class=\"ant-select-clear-icon\" theme=\"fill\"></i>\r\n  </span>\r\n  <span *ngIf=\"!isMultiple\" class=\"ant-select-arrow\">\r\n    <i nz-icon type=\"down\" class=\"ant-select-arrow-icon\"></i>\r\n  </span>\r\n</div>",
                        providers: [
                            NzTreeSelectService,
                            {
                                provide: core$1.NzTreeHigherOrderServiceToken,
                                useFactory: higherOrderServiceFactory,
                                deps: [[new core.Self(), core.Injector]]
                            },
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(( /**
                                 * @return {?}
                                 */function () { return NzTreeSelectComponent; })),
                                multi: true
                            }
                        ],
                        host: {
                            '[class.ant-select-lg]': 'nzSize==="large"',
                            '[class.ant-select-sm]': 'nzSize==="small"',
                            '[class.ant-select-enabled]': '!nzDisabled',
                            '[class.ant-select-disabled]': 'nzDisabled',
                            '[class.ant-select-allow-clear]': 'nzAllowClear',
                            '[class.ant-select-open]': 'nzOpen',
                            '(click)': 'trigger()'
                        },
                        styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n        overflow: auto;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzTreeSelectComponent.ctorParameters = function () {
            return [
                { type: NzTreeSelectService },
                { type: core.Renderer2 },
                { type: core.ChangeDetectorRef },
                { type: core.ElementRef },
                { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
            ];
        };
        NzTreeSelectComponent.propDecorators = {
            nzAllowClear: [{ type: core.Input }],
            nzShowExpand: [{ type: core.Input }],
            nzShowLine: [{ type: core.Input }],
            nzDropdownMatchSelectWidth: [{ type: core.Input }],
            nzCheckable: [{ type: core.Input }],
            nzShowIcon: [{ type: core.Input }],
            nzShowSearch: [{ type: core.Input }],
            nzDisabled: [{ type: core.Input }],
            nzAsyncData: [{ type: core.Input }],
            nzMultiple: [{ type: core.Input }],
            nzDefaultExpandAll: [{ type: core.Input }],
            nzExpandedIcon: [{ type: core.Input }],
            nzNotFoundContent: [{ type: core.Input }],
            nzNodes: [{ type: core.Input }],
            nzOpen: [{ type: core.Input }],
            nzSize: [{ type: core.Input }],
            nzPlaceHolder: [{ type: core.Input }],
            nzDropdownStyle: [{ type: core.Input }],
            nzDefaultExpandedKeys: [{ type: core.Input }],
            nzDisplayWith: [{ type: core.Input }],
            nzMaxTagCount: [{ type: core.Input }],
            nzMaxTagPlaceholder: [{ type: core.Input }],
            nzOpenChange: [{ type: core.Output }],
            nzCleared: [{ type: core.Output }],
            nzRemoved: [{ type: core.Output }],
            nzExpandChange: [{ type: core.Output }],
            nzTreeClick: [{ type: core.Output }],
            nzTreeCheckBoxChange: [{ type: core.Output }],
            inputElement: [{ type: core.ViewChild, args: ['inputElement',] }],
            treeRef: [{ type: core.ViewChild, args: ['treeRef',] }],
            cdkOverlayOrigin: [{ type: core.ViewChild, args: [overlay.CdkOverlayOrigin,] }],
            cdkConnectedOverlay: [{ type: core.ViewChild, args: [overlay.CdkConnectedOverlay,] }],
            nzTreeTemplate: [{ type: core.Input }, { type: core.ContentChild, args: ['nzTreeTemplate',] }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeSelectComponent.prototype, "nzAllowClear", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeSelectComponent.prototype, "nzShowExpand", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeSelectComponent.prototype, "nzShowLine", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeSelectComponent.prototype, "nzDropdownMatchSelectWidth", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeSelectComponent.prototype, "nzCheckable", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeSelectComponent.prototype, "nzShowIcon", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeSelectComponent.prototype, "nzShowSearch", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeSelectComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeSelectComponent.prototype, "nzAsyncData", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeSelectComponent.prototype, "nzMultiple", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeSelectComponent.prototype, "nzDefaultExpandAll", void 0);
        return NzTreeSelectComponent;
    }(core$1.NzTreeBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTreeSelectModule = /** @class */ (function () {
        function NzTreeSelectModule() {
        }
        NzTreeSelectModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            overlay.OverlayModule,
                            forms.FormsModule,
                            tree.NzTreeModule,
                            icon.NzIconModule,
                            empty.NzEmptyModule,
                            core$1.NzOverlayModule,
                            core$1.NzNoAnimationModule
                        ],
                        declarations: [NzTreeSelectComponent],
                        exports: [NzTreeSelectComponent]
                    },] }
        ];
        return NzTreeSelectModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.higherOrderServiceFactory = higherOrderServiceFactory;
    exports.NzTreeSelectComponent = NzTreeSelectComponent;
    exports.NzTreeSelectModule = NzTreeSelectModule;
    exports.NzTreeSelectService = NzTreeSelectService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-tree-select.umd.js.map