(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('ng-zorro-antd/icon'), require('@angular/forms'), require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('ng-zorro-antd/core')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/tree', ['exports', '@angular/common', 'ng-zorro-antd/icon', '@angular/forms', 'rxjs', 'rxjs/operators', '@angular/core', 'ng-zorro-antd/core'], factory) :
    (factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].tree = {}),global.ng.common,global['ng-zorro-antd'].icon,global.ng.forms,global.rxjs,global.rxjs.operators,global.ng.core,global['ng-zorro-antd'].core));
}(this, (function (exports,common,icon,forms,rxjs,operators,core,core$1) { 'use strict';

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTreeNodeComponent = /** @class */ (function () {
        function NzTreeNodeComponent(nzTreeService, ngZone, renderer, elRef, cdr, noAnimation) {
            this.nzTreeService = nzTreeService;
            this.ngZone = ngZone;
            this.renderer = renderer;
            this.elRef = elRef;
            this.cdr = cdr;
            this.noAnimation = noAnimation;
            this.nzHideUnMatched = false;
            this.nzNoAnimation = false;
            this.nzSelectMode = false;
            this.nzShowIcon = false;
            // default var
            this.prefixCls = 'ant-tree';
            this.highlightKeys = [];
            this.nzNodeClass = {};
            this.nzNodeSwitcherClass = {};
            this.nzNodeContentClass = {};
            this.nzNodeCheckboxClass = {};
            this.nzNodeContentIconClass = {};
            this.nzNodeContentLoadingClass = {};
            /**
             * drag var
             */
            this.destroy$ = new rxjs.Subject();
            this.dragPos = 2;
            this.dragPosClass = {
                '0': 'drag-over',
                '1': 'drag-over-gap-bottom',
                '-1': 'drag-over-gap-top'
            };
            /**
             * default set
             */
            this._searchValue = '';
            this._nzDraggable = false;
            this._nzExpandAll = false;
        }
        Object.defineProperty(NzTreeNodeComponent.prototype, "nzDraggable", {
            get: /**
             * @return {?}
             */ function () {
                return this._nzDraggable;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._nzDraggable = value;
                this.handDragEvent();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeComponent.prototype, "nzDefaultExpandAll", {
            get: /**
             * @return {?}
             */ function () {
                return this._nzExpandAll;
            },
            /**
             * @deprecated use
             * nzExpandAll instead
             */
            set: /**
             * @deprecated use
             * nzExpandAll instead
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._nzExpandAll = value;
                if (value && this.nzTreeNode && !this.nzTreeNode.isLeaf) {
                    this.nzTreeNode.isExpanded = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeComponent.prototype, "nzExpandAll", {
            get: /**
             * @return {?}
             */ function () {
                return this._nzExpandAll;
            },
            // default set
            set: 
            // default set
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._nzExpandAll = value;
                if (value && this.nzTreeNode && !this.nzTreeNode.isLeaf) {
                    this.nzTreeNode.isExpanded = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeComponent.prototype, "nzSearchValue", {
            get: /**
             * @return {?}
             */ function () {
                return this._searchValue;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.highlightKeys = [];
                if (value && ( /** @type {?} */(this.nzTreeNode.title)).includes(value)) {
                    // match the search value
                    /** @type {?} */
                    var index = this.nzTreeNode.title.indexOf(value);
                    this.highlightKeys = [
                        this.nzTreeNode.title.slice(0, index),
                        this.nzTreeNode.title.slice(index + value.length, this.nzTreeNode.title.length)
                    ];
                }
                this._searchValue = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeComponent.prototype, "nzIcon", {
            get: /**
             * @return {?}
             */ function () {
                return this.nzTreeNode.icon;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeComponent.prototype, "canDraggable", {
            get: /**
             * @return {?}
             */ function () {
                return this.nzDraggable && !this.nzTreeNode.isDisabled ? true : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeComponent.prototype, "isShowLineIcon", {
            get: /**
             * @return {?}
             */ function () {
                return !this.nzTreeNode.isLeaf && this.nzShowLine;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeComponent.prototype, "isShowSwitchIcon", {
            get: /**
             * @return {?}
             */ function () {
                return !this.nzTreeNode.isLeaf && !this.nzShowLine;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeComponent.prototype, "isSwitcherOpen", {
            get: /**
             * @return {?}
             */ function () {
                return this.nzTreeNode.isExpanded && !this.nzTreeNode.isLeaf;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeComponent.prototype, "isSwitcherClose", {
            get: /**
             * @return {?}
             */ function () {
                return !this.nzTreeNode.isExpanded && !this.nzTreeNode.isLeaf;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeNodeComponent.prototype, "displayStyle", {
            get: /**
             * @return {?}
             */ function () {
                // to hide unmatched nodes
                return this.nzSearchValue && this.nzHideUnMatched && !this.nzTreeNode.isMatched && !this.nzTreeNode.isExpanded
                    ? 'none'
                    : '';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * reset node class
         */
        /**
         * reset node class
         * @return {?}
         */
        NzTreeNodeComponent.prototype.setClassMap = /**
         * reset node class
         * @return {?}
         */
            function () {
                var _a, _b, _c, _d, _e, _f;
                this.prefixCls = this.nzSelectMode ? 'ant-select-tree' : 'ant-tree';
                this.nzNodeClass = (_a = {},
                    _a[this.prefixCls + "-treenode-disabled"] = this.nzTreeNode.isDisabled,
                    _a[this.prefixCls + "-treenode-switcher-open"] = this.isSwitcherOpen,
                    _a[this.prefixCls + "-treenode-switcher-close"] = this.isSwitcherClose,
                    _a[this.prefixCls + "-treenode-checkbox-checked"] = this.nzTreeNode.isChecked,
                    _a[this.prefixCls + "-treenode-checkbox-indeterminate"] = this.nzTreeNode.isHalfChecked,
                    _a[this.prefixCls + "-treenode-selected"] = this.nzTreeNode.isSelected,
                    _a[this.prefixCls + "-treenode-loading"] = this.nzTreeNode.isLoading,
                    _a);
                this.nzNodeSwitcherClass = (_b = {},
                    _b[this.prefixCls + "-switcher"] = true,
                    _b[this.prefixCls + "-switcher-noop"] = this.nzTreeNode.isLeaf,
                    _b[this.prefixCls + "-switcher_open"] = this.isSwitcherOpen,
                    _b[this.prefixCls + "-switcher_close"] = this.isSwitcherClose,
                    _b);
                this.nzNodeCheckboxClass = (_c = {},
                    _c[this.prefixCls + "-checkbox"] = true,
                    _c[this.prefixCls + "-checkbox-checked"] = this.nzTreeNode.isChecked,
                    _c[this.prefixCls + "-checkbox-indeterminate"] = this.nzTreeNode.isHalfChecked,
                    _c[this.prefixCls + "-checkbox-disabled"] = this.nzTreeNode.isDisabled || this.nzTreeNode.isDisableCheckbox,
                    _c);
                this.nzNodeContentClass = (_d = {},
                    _d[this.prefixCls + "-node-content-wrapper"] = true,
                    _d[this.prefixCls + "-node-content-wrapper-open"] = this.isSwitcherOpen,
                    _d[this.prefixCls + "-node-content-wrapper-close"] = this.isSwitcherClose,
                    _d[this.prefixCls + "-node-selected"] = this.nzTreeNode.isSelected,
                    _d);
                this.nzNodeContentIconClass = (_e = {},
                    _e[this.prefixCls + "-iconEle"] = true,
                    _e[this.prefixCls + "-icon__customize"] = true,
                    _e);
                this.nzNodeContentLoadingClass = (_f = {},
                    _f[this.prefixCls + "-iconEle"] = true,
                    _f);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        NzTreeNodeComponent.prototype.onMousedown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this.nzSelectMode) {
                    event.preventDefault();
                }
            };
        /**
         * click node to select, 200ms to dbl click
         */
        /**
         * click node to select, 200ms to dbl click
         * @param {?} event
         * @return {?}
         */
        NzTreeNodeComponent.prototype.nzClick = /**
         * click node to select, 200ms to dbl click
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.preventDefault();
                event.stopPropagation();
                if (this.nzTreeNode.isSelectable && !this.nzTreeNode.isDisabled) {
                    this.nzTreeNode.isSelected = !this.nzTreeNode.isSelected;
                }
                /** @type {?} */
                var eventNext = this.nzTreeService.formatEvent('click', this.nzTreeNode, event);
                ( /** @type {?} */(( /** @type {?} */(this.nzTreeService)).triggerEventChange$)).next(eventNext);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        NzTreeNodeComponent.prototype.nzDblClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.preventDefault();
                event.stopPropagation();
                /** @type {?} */
                var eventNext = this.nzTreeService.formatEvent('dblclick', this.nzTreeNode, event);
                ( /** @type {?} */(( /** @type {?} */(this.nzTreeService)).triggerEventChange$)).next(eventNext);
            };
        /**
         * @param event
         */
        /**
         * @param {?} event
         * @return {?}
         */
        NzTreeNodeComponent.prototype.nzContextMenu = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.preventDefault();
                event.stopPropagation();
                /** @type {?} */
                var eventNext = this.nzTreeService.formatEvent('contextmenu', this.nzTreeNode, event);
                ( /** @type {?} */(( /** @type {?} */(this.nzTreeService)).triggerEventChange$)).next(eventNext);
            };
        /**
         * collapse node
         * @param event
         */
        /**
         * collapse node
         * @param {?} event
         * @return {?}
         */
        NzTreeNodeComponent.prototype._clickExpand = /**
         * collapse node
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.preventDefault();
                event.stopPropagation();
                if (!this.nzTreeNode.isLoading && !this.nzTreeNode.isLeaf) {
                    // set async state
                    if (this.nzAsyncData && this.nzTreeNode.children.length === 0 && !this.nzTreeNode.isExpanded) {
                        this.nzTreeNode.isLoading = true;
                    }
                    this.nzTreeNode.isExpanded = !this.nzTreeNode.isExpanded;
                    /** @type {?} */
                    var eventNext = this.nzTreeService.formatEvent('expand', this.nzTreeNode, event);
                    ( /** @type {?} */(( /** @type {?} */(this.nzTreeService)).triggerEventChange$)).next(eventNext);
                }
            };
        /**
         * check node
         * @param event
         */
        /**
         * check node
         * @param {?} event
         * @return {?}
         */
        NzTreeNodeComponent.prototype._clickCheckBox = /**
         * check node
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.preventDefault();
                event.stopPropagation();
                // return if node is disabled
                if (this.nzTreeNode.isDisabled || this.nzTreeNode.isDisableCheckbox) {
                    return;
                }
                this.nzTreeNode.isChecked = !this.nzTreeNode.isChecked;
                this.nzTreeNode.isHalfChecked = false;
                if (!this.nzTreeService.isCheckStrictly) {
                    this.nzTreeService.conduct(this.nzTreeNode);
                }
                /** @type {?} */
                var eventNext = this.nzTreeService.formatEvent('check', this.nzTreeNode, event);
                ( /** @type {?} */(( /** @type {?} */(this.nzTreeService)).triggerEventChange$)).next(eventNext);
            };
        /**
         * drag event
         * @param e
         */
        /**
         * drag event
         * @return {?}
         */
        NzTreeNodeComponent.prototype.clearDragClass = /**
         * drag event
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over'];
                dragClass.forEach(( /**
                 * @param {?} e
                 * @return {?}
                 */function (e) {
                    _this.renderer.removeClass(_this.dragElement.nativeElement, e);
                }));
            };
        /**
         * @param {?} e
         * @return {?}
         */
        NzTreeNodeComponent.prototype.handleDragStart = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                e.stopPropagation();
                try {
                    // ie throw error
                    // firefox-need-it
                    ( /** @type {?} */(e.dataTransfer)).setData('text/plain', ( /** @type {?} */(this.nzTreeNode.key)));
                }
                catch (error) {
                    // empty
                }
                this.nzTreeService.setSelectedNode(this.nzTreeNode);
                this.nzTreeNode.isExpanded = false;
                /** @type {?} */
                var eventNext = this.nzTreeService.formatEvent('dragstart', this.nzTreeNode, e);
                ( /** @type {?} */(( /** @type {?} */(this.nzTreeService)).triggerEventChange$)).next(eventNext);
            };
        /**
         * @param {?} e
         * @return {?}
         */
        NzTreeNodeComponent.prototype.handleDragEnter = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                var _this = this;
                e.preventDefault();
                e.stopPropagation();
                // reset position
                this.dragPos = 2;
                this.ngZone.run(( /**
                 * @return {?}
                 */function () {
                    /** @type {?} */
                    var node = _this.nzTreeService.getSelectedNode();
                    if (node && node.key !== _this.nzTreeNode.key && !_this.nzTreeNode.isExpanded && !_this.nzTreeNode.isLeaf) {
                        _this.nzTreeNode.isExpanded = true;
                    }
                    /** @type {?} */
                    var eventNext = _this.nzTreeService.formatEvent('dragenter', _this.nzTreeNode, e);
                    ( /** @type {?} */(( /** @type {?} */(_this.nzTreeService)).triggerEventChange$)).next(eventNext);
                }));
            };
        /**
         * @param {?} e
         * @return {?}
         */
        NzTreeNodeComponent.prototype.handleDragOver = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                e.preventDefault();
                e.stopPropagation();
                /** @type {?} */
                var dropPosition = this.nzTreeService.calcDropPosition(e);
                if (this.dragPos !== dropPosition) {
                    this.clearDragClass();
                    this.dragPos = dropPosition;
                    // leaf node will pass
                    if (!(this.dragPos === 0 && this.nzTreeNode.isLeaf)) {
                        this.renderer.addClass(this.dragElement.nativeElement, this.dragPosClass[this.dragPos]);
                    }
                }
                /** @type {?} */
                var eventNext = this.nzTreeService.formatEvent('dragover', this.nzTreeNode, e);
                ( /** @type {?} */(( /** @type {?} */(this.nzTreeService)).triggerEventChange$)).next(eventNext);
            };
        /**
         * @param {?} e
         * @return {?}
         */
        NzTreeNodeComponent.prototype.handleDragLeave = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                var _this = this;
                e.stopPropagation();
                this.ngZone.run(( /**
                 * @return {?}
                 */function () {
                    _this.clearDragClass();
                }));
                /** @type {?} */
                var eventNext = this.nzTreeService.formatEvent('dragleave', this.nzTreeNode, e);
                ( /** @type {?} */(( /** @type {?} */(this.nzTreeService)).triggerEventChange$)).next(eventNext);
            };
        /**
         * @param {?} e
         * @return {?}
         */
        NzTreeNodeComponent.prototype.handleDragDrop = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                var _this = this;
                e.preventDefault();
                e.stopPropagation();
                this.ngZone.run(( /**
                 * @return {?}
                 */function () {
                    _this.clearDragClass();
                    /** @type {?} */
                    var node = _this.nzTreeService.getSelectedNode();
                    if (!node || (node && node.key === _this.nzTreeNode.key) || (_this.dragPos === 0 && _this.nzTreeNode.isLeaf)) {
                        return;
                    }
                    // pass if node is leafNo
                    /** @type {?} */
                    var dropEvent = _this.nzTreeService.formatEvent('drop', _this.nzTreeNode, e);
                    /** @type {?} */
                    var dragEndEvent = _this.nzTreeService.formatEvent('dragend', _this.nzTreeNode, e);
                    if (_this.nzBeforeDrop) {
                        _this.nzBeforeDrop({
                            dragNode: ( /** @type {?} */(_this.nzTreeService.getSelectedNode())),
                            node: _this.nzTreeNode,
                            pos: _this.dragPos
                        }).subscribe(( /**
                         * @param {?} canDrop
                         * @return {?}
                         */function (canDrop) {
                            if (canDrop) {
                                _this.nzTreeService.dropAndApply(_this.nzTreeNode, _this.dragPos);
                            }
                            ( /** @type {?} */(( /** @type {?} */(_this.nzTreeService)).triggerEventChange$)).next(dropEvent);
                            ( /** @type {?} */(( /** @type {?} */(_this.nzTreeService)).triggerEventChange$)).next(dragEndEvent);
                        }));
                    }
                    else if (_this.nzTreeNode) {
                        _this.nzTreeService.dropAndApply(_this.nzTreeNode, _this.dragPos);
                        ( /** @type {?} */(( /** @type {?} */(_this.nzTreeService)).triggerEventChange$)).next(dropEvent);
                    }
                }));
            };
        /**
         * @param {?} e
         * @return {?}
         */
        NzTreeNodeComponent.prototype.handleDragEnd = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                var _this = this;
                e.stopPropagation();
                this.ngZone.run(( /**
                 * @return {?}
                 */function () {
                    // if user do not custom beforeDrop
                    if (!_this.nzBeforeDrop) {
                        /** @type {?} */
                        var eventNext = _this.nzTreeService.formatEvent('dragend', _this.nzTreeNode, e);
                        ( /** @type {?} */(( /** @type {?} */(_this.nzTreeService)).triggerEventChange$)).next(eventNext);
                    }
                }));
            };
        /**
         * 监听拖拽事件
         */
        /**
         * 监听拖拽事件
         * @return {?}
         */
        NzTreeNodeComponent.prototype.handDragEvent = /**
         * 监听拖拽事件
         * @return {?}
         */
            function () {
                var _this = this;
                this.ngZone.runOutsideAngular(( /**
                 * @return {?}
                 */function () {
                    if (_this.nzDraggable) {
                        _this.destroy$ = new rxjs.Subject();
                        rxjs.fromEvent(_this.elRef.nativeElement, 'dragstart')
                            .pipe(operators.takeUntil(_this.destroy$))
                            .subscribe(( /**
                     * @param {?} e
                     * @return {?}
                     */function (e) { return _this.handleDragStart(e); }));
                        rxjs.fromEvent(_this.elRef.nativeElement, 'dragenter')
                            .pipe(operators.takeUntil(_this.destroy$))
                            .subscribe(( /**
                     * @param {?} e
                     * @return {?}
                     */function (e) { return _this.handleDragEnter(e); }));
                        rxjs.fromEvent(_this.elRef.nativeElement, 'dragover')
                            .pipe(operators.takeUntil(_this.destroy$))
                            .subscribe(( /**
                     * @param {?} e
                     * @return {?}
                     */function (e) { return _this.handleDragOver(e); }));
                        rxjs.fromEvent(_this.elRef.nativeElement, 'dragleave')
                            .pipe(operators.takeUntil(_this.destroy$))
                            .subscribe(( /**
                     * @param {?} e
                     * @return {?}
                     */function (e) { return _this.handleDragLeave(e); }));
                        rxjs.fromEvent(_this.elRef.nativeElement, 'drop')
                            .pipe(operators.takeUntil(_this.destroy$))
                            .subscribe(( /**
                     * @param {?} e
                     * @return {?}
                     */function (e) { return _this.handleDragDrop(e); }));
                        rxjs.fromEvent(_this.elRef.nativeElement, 'dragend')
                            .pipe(operators.takeUntil(_this.destroy$))
                            .subscribe(( /**
                     * @param {?} e
                     * @return {?}
                     */function (e) { return _this.handleDragEnd(e); }));
                    }
                    else {
                        _this.destroy$.next();
                        _this.destroy$.complete();
                    }
                }));
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NzTreeNodeComponent.prototype.isTemplateRef = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return value instanceof core.TemplateRef;
            };
        /**
         * @return {?}
         */
        NzTreeNodeComponent.prototype.markForCheck = /**
         * @return {?}
         */
            function () {
                this.cdr.markForCheck();
            };
        /**
         * @return {?}
         */
        NzTreeNodeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // init expanded / selected / checked list
                if (this.nzTreeNode.isSelected) {
                    this.nzTreeService.setNodeActive(this.nzTreeNode);
                }
                if (this.nzTreeNode.isExpanded) {
                    this.nzTreeService.setExpandedNodeList(this.nzTreeNode);
                }
                if (this.nzTreeNode.isChecked) {
                    this.nzTreeService.setCheckedNodeList(this.nzTreeNode);
                }
                // TODO
                this.nzTreeNode.component = this;
                this.nzTreeService
                    .eventTriggerChanged()
                    .pipe(operators.filter(( /**
             * @param {?} data
             * @return {?}
             */function (data) { return ( /** @type {?} */(data.node)).key === _this.nzTreeNode.key; })), operators.takeUntil(this.destroy$))
                    .subscribe(( /**
             * @return {?}
             */function () {
                    _this.setClassMap();
                    _this.markForCheck();
                }));
                this.setClassMap();
            };
        /**
         * @return {?}
         */
        NzTreeNodeComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.setClassMap();
            };
        /**
         * @return {?}
         */
        NzTreeNodeComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.destroy$.next();
                this.destroy$.complete();
            };
        NzTreeNodeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-tree-node',
                        exportAs: 'nzTreeNode',
                        template: "<li\r\n  #dragElement\r\n  role=\"treeitem\"\r\n  [style.display]=\"displayStyle\"\r\n  [ngClass]=\"nzNodeClass\">\r\n  <ng-container *ngIf=\"nzShowExpand\">\r\n    <span\r\n      [ngClass]=\"nzNodeSwitcherClass\"\r\n      (click)=\"_clickExpand($event)\">\r\n      <ng-container *ngIf=\"isShowSwitchIcon\">\r\n        <ng-container *ngIf=\"!nzTreeNode.isLoading\">\r\n          <ng-template\r\n            *ngIf=\"isTemplateRef(nzExpandedIcon)\"\r\n            [ngTemplateOutlet]=\"nzExpandedIcon\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: nzTreeNode }\">\r\n          </ng-template>\r\n          <i\r\n            *ngIf=\"!isTemplateRef(nzExpandedIcon)\" \r\n            nz-icon \r\n            type=\"caret-down\"           \r\n            [class.ant-select-switcher-icon]=\"nzSelectMode\"\r\n            [class.ant-tree-switcher-icon]=\"!nzSelectMode\">\r\n          </i>\r\n        </ng-container>\r\n        <i *ngIf=\"nzTreeNode.isLoading\" nz-icon type=\"loading\" [spin]=\"true\" class=\"ant-tree-switcher-loading-icon\"></i>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"nzShowLine\">\r\n        <ng-template\r\n          *ngIf=\"isTemplateRef(nzExpandedIcon)\"\r\n          [ngTemplateOutlet]=\"nzExpandedIcon\"\r\n          [ngTemplateOutletContext]=\"{ $implicit: nzTreeNode }\">\r\n        </ng-template>\r\n        <ng-container *ngIf=\"!isTemplateRef(nzExpandedIcon)\">\r\n          <i *ngIf=\"isShowLineIcon\" nz-icon [type]=\"isSwitcherOpen ? 'minus-square' : 'plus-square'\" class=\"ant-tree-switcher-line-icon\"></i>\r\n          <i *ngIf=\"!isShowLineIcon\" nz-icon type=\"file\" class=\"ant-tree-switcher-line-icon\"></i>\r\n        </ng-container>\r\n      </ng-container>\r\n    </span>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"nzCheckable\">\r\n    <span\r\n      [ngClass]=\"nzNodeCheckboxClass\"\r\n      (click)=\"_clickCheckBox($event)\">\r\n      <span [class.ant-tree-checkbox-inner]=\"!nzSelectMode\"\r\n            [class.ant-select-tree-checkbox-inner]=\"nzSelectMode\"></span>\r\n    </span>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"!nzTreeTemplate\">\r\n    <span\r\n      title=\"{{nzTreeNode.title}}\"\r\n      [attr.draggable]=\"canDraggable\"\r\n      [attr.aria-grabbed]=\"canDraggable\"\r\n      [ngClass]=\"nzNodeContentClass\"\r\n      [class.draggable]=\"canDraggable\">\r\n      <span\r\n        *ngIf=\"nzTreeNode.icon && nzShowIcon\"\r\n        [class.ant-tree-icon__open]=\"isSwitcherOpen\"\r\n        [class.ant-tree-icon__close]=\"isSwitcherClose\"\r\n        [class.ant-tree-icon_loading]=\"nzTreeNode.isLoading\"\r\n        [ngClass]=\"nzNodeContentLoadingClass\">\r\n        <span\r\n          [ngClass]=\"nzNodeContentIconClass\">\r\n          <i nz-icon *ngIf=\"nzIcon\" [type]=\"nzIcon\"></i>\r\n        </span>\r\n      </span>\r\n      <span class=\"ant-tree-title\">\r\n        <ng-container *ngIf=\"nzTreeNode.isMatched\">\r\n          <span>\r\n            {{highlightKeys[0]}}<span class=\"font-highlight\">{{nzSearchValue}}</span>{{highlightKeys[1]}}\r\n          </span>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!nzTreeNode.isMatched\">\r\n          {{nzTreeNode.title}}\r\n        </ng-container>\r\n      </span>\r\n    </span>\r\n  </ng-container>\r\n  <ng-template\r\n    [ngTemplateOutlet]=\"nzTreeTemplate\"\r\n    [ngTemplateOutletContext]=\"{ $implicit: nzTreeNode }\">\r\n  </ng-template>\r\n\r\n  <ul\r\n    role=\"group\"\r\n    class=\"ant-tree-child-tree\"\r\n    [class.ant-tree-child-tree-open]=\"!nzSelectMode || nzTreeNode.isExpanded\"\r\n    data-expanded=\"true\"\r\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n    [@collapseMotion]=\"nzTreeNode.isExpanded ? 'expanded' : 'collapsed'\">\r\n    <nz-tree-node\r\n      *ngFor=\"let node of nzTreeNode.getChildren()\"\r\n      [nzTreeNode]=\"node\"\r\n      [nzShowExpand]=\"nzShowExpand\"\r\n      [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n      [nzSelectMode]=\"nzSelectMode\"\r\n      [nzShowLine]=\"nzShowLine\"\r\n      [nzExpandedIcon]=\"nzExpandedIcon\"\r\n      [nzDraggable]=\"nzDraggable\"\r\n      [nzCheckable]=\"nzCheckable\"\r\n      [nzAsyncData]=\"nzAsyncData\"\r\n      [nzExpandAll]=\"nzExpandAll\"\r\n      [nzDefaultExpandAll]=\"nzDefaultExpandAll\"\r\n      [nzShowIcon]=\"nzShowIcon\"\r\n      [nzSearchValue]=\"nzSearchValue\"\r\n      [nzHideUnMatched]=\"nzHideUnMatched\"\r\n      [nzBeforeDrop]=\"nzBeforeDrop\"\r\n      [nzTreeTemplate]=\"nzTreeTemplate\">\r\n    </nz-tree-node>\r\n  </ul>\r\n</li>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false,
                        animations: [core$1.collapseMotion]
                    }] }
        ];
        /** @nocollapse */
        NzTreeNodeComponent.ctorParameters = function () {
            return [
                { type: core$1.NzTreeBaseService },
                { type: core.NgZone },
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: core.ChangeDetectorRef },
                { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
            ];
        };
        NzTreeNodeComponent.propDecorators = {
            dragElement: [{ type: core.ViewChild, args: ['dragElement',] }],
            nzTreeNode: [{ type: core.Input }],
            nzShowLine: [{ type: core.Input }],
            nzShowExpand: [{ type: core.Input }],
            nzCheckable: [{ type: core.Input }],
            nzAsyncData: [{ type: core.Input }],
            nzHideUnMatched: [{ type: core.Input }],
            nzNoAnimation: [{ type: core.Input }],
            nzSelectMode: [{ type: core.Input }],
            nzShowIcon: [{ type: core.Input }],
            nzExpandedIcon: [{ type: core.Input }],
            nzTreeTemplate: [{ type: core.Input }],
            nzBeforeDrop: [{ type: core.Input }],
            nzDraggable: [{ type: core.Input }],
            nzDefaultExpandAll: [{ type: core.Input }],
            nzExpandAll: [{ type: core.Input }],
            nzSearchValue: [{ type: core.Input }],
            onMousedown: [{ type: core.HostListener, args: ['mousedown', ['$event'],] }],
            nzClick: [{ type: core.HostListener, args: ['click', ['$event'],] }],
            nzDblClick: [{ type: core.HostListener, args: ['dblclick', ['$event'],] }],
            nzContextMenu: [{ type: core.HostListener, args: ['contextmenu', ['$event'],] }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTreeNodeComponent.prototype, "nzShowLine", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTreeNodeComponent.prototype, "nzShowExpand", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTreeNodeComponent.prototype, "nzCheckable", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTreeNodeComponent.prototype, "nzAsyncData", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeNodeComponent.prototype, "nzHideUnMatched", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeNodeComponent.prototype, "nzNoAnimation", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeNodeComponent.prototype, "nzSelectMode", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeNodeComponent.prototype, "nzShowIcon", void 0);
        return NzTreeNodeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTreeService = /** @class */ (function (_super) {
        __extends(NzTreeService, _super);
        function NzTreeService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NzTreeService.decorators = [
            { type: core.Injectable }
        ];
        return NzTreeService;
    }(core$1.NzTreeBaseService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} higherOrderService
     * @param {?} treeService
     * @return {?}
     */
    function NzTreeServiceFactory(higherOrderService, treeService) {
        return higherOrderService ? higherOrderService : treeService;
    }
    var NzTreeComponent = /** @class */ (function (_super) {
        __extends(NzTreeComponent, _super);
        function NzTreeComponent(nzTreeService, cdr, noAnimation) {
            var _this = _super.call(this, nzTreeService) || this;
            _this.cdr = cdr;
            _this.noAnimation = noAnimation;
            _this.nzShowIcon = false;
            _this.nzShowExpand = true;
            _this.nzShowLine = false;
            _this.nzCheckable = false;
            _this.nzAsyncData = false;
            _this.nzDraggable = false;
            _this.nzExpandAll = false;
            _this.nzHideUnMatched = false;
            _this.nzSelectMode = false;
            _this.nzCheckStrictly = false;
            _this.nzBlockNode = false;
            /**
             * @deprecated use
             * nzExpandAll instead
             */
            _this.nzDefaultExpandAll = false;
            // model bind
            _this.nzExpandedKeysChange = new core.EventEmitter();
            _this.nzSelectedKeysChange = new core.EventEmitter();
            _this.nzCheckedKeysChange = new core.EventEmitter();
            _this.nzSearchValueChange = new core.EventEmitter();
            /**
             * @deprecated use
             * nzSearchValueChange instead
             */
            _this.nzOnSearchNode = new core.EventEmitter();
            _this.nzClick = new core.EventEmitter();
            _this.nzDblClick = new core.EventEmitter();
            _this.nzContextMenu = new core.EventEmitter();
            _this.nzCheckBoxChange = new core.EventEmitter();
            _this.nzExpandChange = new core.EventEmitter();
            _this.nzOnDragStart = new core.EventEmitter();
            _this.nzOnDragEnter = new core.EventEmitter();
            _this.nzOnDragOver = new core.EventEmitter();
            _this.nzOnDragLeave = new core.EventEmitter();
            _this.nzOnDrop = new core.EventEmitter();
            _this.nzOnDragEnd = new core.EventEmitter();
            _this._nzMultiple = false;
            _this.nzDefaultSubject = new rxjs.ReplaySubject(6);
            _this.destroy$ = new rxjs.Subject();
            _this.prefixCls = 'ant-tree';
            _this.classMap = {};
            _this.onChange = ( /**
             * @return {?}
             */function () { return null; });
            _this.onTouched = ( /**
             * @return {?}
             */function () { return null; });
            return _this;
        }
        Object.defineProperty(NzTreeComponent.prototype, "nzMultiple", {
            get: /**
             * @return {?}
             */ function () {
                return this._nzMultiple;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._nzMultiple = core$1.toBoolean(value);
                this.nzTreeService.isMultiple = core$1.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeComponent.prototype, "nzData", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.initNzData(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeComponent.prototype, "nzDefaultExpandedKeys", {
            /**
             * @deprecated use
             * nzExpandedKeys instead
             */
            set: /**
             * @deprecated use
             * nzExpandedKeys instead
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeComponent.prototype, "nzDefaultSelectedKeys", {
            /**
             * @deprecated use
             * nzSelectedKeys instead
             */
            set: /**
             * @deprecated use
             * nzSelectedKeys instead
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeComponent.prototype, "nzDefaultCheckedKeys", {
            /**
             * @deprecated use
             * nzCheckedKeys instead
             */
            set: /**
             * @deprecated use
             * nzCheckedKeys instead
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeComponent.prototype, "nzExpandedKeys", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeComponent.prototype, "nzSelectedKeys", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeComponent.prototype, "nzCheckedKeys", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeComponent.prototype, "nzSearchValue", {
            get: /**
             * @return {?}
             */ function () {
                return this._searchValue;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._searchValue = value;
                this.nzTreeService.searchExpand(value);
                if (core$1.isNotNil(value)) {
                    this.nzSearchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
                    this.nzOnSearchNode.emit(this.nzTreeService.formatEvent('search', null, null));
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeComponent.prototype, "nzNodes", {
            /**
             * To render nodes if root is changed
             */
            get: /**
             * To render nodes if root is changed
             * @return {?}
             */ function () {
                return this.nzTreeService.rootNodes;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzTreeComponent.prototype.setClassMap = /**
         * @return {?}
         */
            function () {
                var _a;
                this.classMap = (_a = {},
                    _a[this.prefixCls] = true,
                    _a[this.prefixCls + '-show-line'] = this.nzShowLine,
                    _a[this.prefixCls + "-icon-hide"] = !this.nzShowIcon,
                    _a[this.prefixCls + "-block-node"] = this.nzBlockNode,
                    _a['draggable-tree'] = this.nzDraggable,
                    _a['ant-select-tree'] = this.nzSelectMode,
                    _a);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NzTreeComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.initNzData(value);
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzTreeComponent.prototype.registerOnChange = /**
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
        NzTreeComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        /**
         * @param {?} value
         * @return {?}
         */
        NzTreeComponent.prototype.initNzData =
            // tslint:disable-next-line:no-any
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (Array.isArray(value)) {
                    this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
                    this.nzTreeService.isMultiple = this.nzMultiple;
                    this.nzTreeService.initTree(this.coerceTreeNodes(value));
                }
            };
        /**
         * @return {?}
         */
        NzTreeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.setClassMap();
                this.nzDefaultSubject.pipe(operators.takeUntil(this.destroy$)).subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    if (!data || !data.keys) {
                        return;
                    }
                    switch (data.type) {
                        case 'nzExpandedKeys':
                            _this.nzTreeService.calcExpandedKeys(data.keys, _this.nzNodes);
                            _this.nzExpandedKeysChange.emit(data.keys);
                            break;
                        case 'nzSelectedKeys':
                            _this.nzTreeService.calcSelectedKeys(data.keys, _this.nzNodes, _this.nzMultiple);
                            _this.nzSelectedKeysChange.emit(data.keys);
                            break;
                        case 'nzCheckedKeys':
                            _this.nzTreeService.calcCheckedKeys(data.keys, _this.nzNodes, _this.nzCheckStrictly);
                            _this.nzCheckedKeysChange.emit(data.keys);
                            break;
                    }
                    _this.cdr.markForCheck();
                }));
                this.nzTreeService
                    .eventTriggerChanged()
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(( /**
             * @param {?} data
             * @return {?}
             */function (data) {
                    switch (data.eventName) {
                        case 'expand':
                            _this.nzExpandChange.emit(data);
                            break;
                        case 'click':
                            _this.nzClick.emit(data);
                            break;
                        case 'check':
                            _this.nzCheckBoxChange.emit(data);
                            break;
                        case 'dblclick':
                            _this.nzDblClick.emit(data);
                            break;
                        case 'contextmenu':
                            _this.nzContextMenu.emit(data);
                            break;
                        // drag drop
                        case 'dragstart':
                            _this.nzOnDragStart.emit(data);
                            break;
                        case 'dragenter':
                            _this.nzOnDragEnter.emit(data);
                            break;
                        case 'dragover':
                            _this.nzOnDragOver.emit(data);
                            break;
                        case 'dragleave':
                            _this.nzOnDragLeave.emit(data);
                            break;
                        case 'drop':
                            _this.nzOnDrop.emit(data);
                            break;
                        case 'dragend':
                            _this.nzOnDragEnd.emit(data);
                            break;
                    }
                }));
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzTreeComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.nzCheckStrictly) {
                    this.nzTreeService.isCheckStrictly = core$1.toBoolean(changes.nzCheckStrictly.currentValue);
                }
                if (changes.nzMultiple) {
                    this.nzTreeService.isMultiple = core$1.toBoolean(changes.nzMultiple.currentValue);
                }
            };
        /**
         * @return {?}
         */
        NzTreeComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.destroy$.next();
                this.destroy$.complete();
            };
        NzTreeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-tree',
                        exportAs: 'nzTree',
                        template: "<ul\r\n  role=\"tree\"\r\n  unselectable=\"on\"\r\n  [ngClass]=\"classMap\">\r\n  <ng-container *ngFor=\"let node of nzNodes\">\r\n    <nz-tree-node\r\n      [nzTreeNode]=\"node\"\r\n      [nzSelectMode]=\"nzSelectMode\"\r\n      [nzShowLine]=\"nzShowLine\"\r\n      [nzExpandedIcon]=\"nzExpandedIcon\"\r\n      [nzDraggable]=\"nzDraggable\"\r\n      [nzCheckable]=\"nzCheckable\"\r\n      [nzShowExpand]=\"nzShowExpand\"\r\n      [nzAsyncData]=\"nzAsyncData\"\r\n      [nzSearchValue]=\"nzSearchValue\"\r\n      [nzHideUnMatched]=\"nzHideUnMatched\"\r\n      [nzBeforeDrop]=\"nzBeforeDrop\"\r\n      [nzExpandAll]=\"nzExpandAll\"\r\n      [nzDefaultExpandAll]=\"nzDefaultExpandAll\"\r\n      [nzShowIcon]=\"nzShowIcon\"\r\n      [nzTreeTemplate]=\"nzTreeTemplate\"\r\n      [nzNoAnimation]=\"noAnimation?.nzNoAnimation\">\r\n    </nz-tree-node>\r\n  </ng-container>\r\n</ul>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [
                            NzTreeService,
                            {
                                provide: core$1.NzTreeBaseService,
                                useFactory: NzTreeServiceFactory,
                                deps: [[new core.SkipSelf(), new core.Optional(), core$1.NzTreeHigherOrderServiceToken], NzTreeService]
                            },
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(( /**
                                 * @return {?}
                                 */function () { return NzTreeComponent; })),
                                multi: true
                            }
                        ]
                    }] }
        ];
        /** @nocollapse */
        NzTreeComponent.ctorParameters = function () {
            return [
                { type: core$1.NzTreeBaseService },
                { type: core.ChangeDetectorRef },
                { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
            ];
        };
        NzTreeComponent.propDecorators = {
            nzShowIcon: [{ type: core.Input }],
            nzShowExpand: [{ type: core.Input }],
            nzShowLine: [{ type: core.Input }],
            nzExpandedIcon: [{ type: core.Input }],
            nzCheckable: [{ type: core.Input }],
            nzAsyncData: [{ type: core.Input }],
            nzDraggable: [{ type: core.Input }],
            nzExpandAll: [{ type: core.Input }],
            nzHideUnMatched: [{ type: core.Input }],
            nzSelectMode: [{ type: core.Input }],
            nzCheckStrictly: [{ type: core.Input }],
            nzBlockNode: [{ type: core.Input }],
            nzTreeTemplate: [{ type: core.Input }, { type: core.ContentChild, args: ['nzTreeTemplate',] }],
            nzDefaultExpandAll: [{ type: core.Input }],
            nzBeforeDrop: [{ type: core.Input }],
            nzMultiple: [{ type: core.Input }],
            nzData: [{ type: core.Input }],
            nzDefaultExpandedKeys: [{ type: core.Input }],
            nzDefaultSelectedKeys: [{ type: core.Input }],
            nzDefaultCheckedKeys: [{ type: core.Input }],
            nzExpandedKeys: [{ type: core.Input }],
            nzSelectedKeys: [{ type: core.Input }],
            nzCheckedKeys: [{ type: core.Input }],
            nzSearchValue: [{ type: core.Input }],
            nzExpandedKeysChange: [{ type: core.Output }],
            nzSelectedKeysChange: [{ type: core.Output }],
            nzCheckedKeysChange: [{ type: core.Output }],
            nzSearchValueChange: [{ type: core.Output }],
            nzOnSearchNode: [{ type: core.Output }],
            nzClick: [{ type: core.Output }],
            nzDblClick: [{ type: core.Output }],
            nzContextMenu: [{ type: core.Output }],
            nzCheckBoxChange: [{ type: core.Output }],
            nzExpandChange: [{ type: core.Output }],
            nzOnDragStart: [{ type: core.Output }],
            nzOnDragEnter: [{ type: core.Output }],
            nzOnDragOver: [{ type: core.Output }],
            nzOnDragLeave: [{ type: core.Output }],
            nzOnDrop: [{ type: core.Output }],
            nzOnDragEnd: [{ type: core.Output }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeComponent.prototype, "nzShowIcon", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeComponent.prototype, "nzShowExpand", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeComponent.prototype, "nzShowLine", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeComponent.prototype, "nzCheckable", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeComponent.prototype, "nzAsyncData", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeComponent.prototype, "nzDraggable", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeComponent.prototype, "nzExpandAll", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeComponent.prototype, "nzHideUnMatched", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeComponent.prototype, "nzSelectMode", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeComponent.prototype, "nzCheckStrictly", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeComponent.prototype, "nzBlockNode", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeComponent.prototype, "nzDefaultExpandAll", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], NzTreeComponent.prototype, "nzMultiple", null);
        return NzTreeComponent;
    }(core$1.NzTreeBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTreeModule = /** @class */ (function () {
        function NzTreeModule() {
        }
        NzTreeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, core$1.NzAddOnModule, icon.NzIconModule, core$1.NzNoAnimationModule],
                        declarations: [NzTreeComponent, NzTreeNodeComponent],
                        exports: [NzTreeComponent, NzTreeNodeComponent]
                    },] }
        ];
        return NzTreeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NzTreeModule = NzTreeModule;
    exports.NzTreeServiceFactory = NzTreeServiceFactory;
    exports.NzTreeComponent = NzTreeComponent;
    exports.NzTreeNodeComponent = NzTreeNodeComponent;
    exports.NzTreeService = NzTreeService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-tree.umd.js.map