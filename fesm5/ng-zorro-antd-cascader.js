import { BACKSPACE, DOWN_ARROW, ENTER, ESCAPE, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { takeUntil } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { __spread, __decorate, __metadata } from 'tslib';
import { BehaviorSubject, Subject } from 'rxjs';
import { CdkConnectedOverlay, OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation, Injectable, forwardRef, EventEmitter, Host, HostListener, Optional, Output, ViewChild, ViewChildren, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { arraysEqual, slideMotion, toArray, DEFAULT_DROPDOWN_POSITIONS, InputBoolean, NzNoAnimationDirective, NzNoAnimationModule, NzOverlayModule } from 'ng-zorro-antd/core';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} options
 * @return {?}
 */
function isShowSearchObject(options) {
    return typeof options !== 'boolean';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @param {?} o
 * @return {?}
 */
function isChildOption(o) {
    return o.isLeaf || !o.children || !o.children.length;
}
/**
 * @param {?} o
 * @return {?}
 */
function isParentOption(o) {
    return !!o.children && !!o.children.length && !o.isLeaf;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzCascaderOptionComponent = /** @class */ (function () {
    function NzCascaderOptionComponent(sanitizer, cdr, elementRef, renderer) {
        this.sanitizer = sanitizer;
        this.cdr = cdr;
        this.activated = false;
        this.nzLabelProperty = 'label';
        renderer.addClass(elementRef.nativeElement, 'ant-cascader-menu-item');
    }
    /**
     * @return {?}
     */
    NzCascaderOptionComponent.prototype.getOptionLabel = /**
     * @return {?}
     */
    function () {
        return this.option ? this.option[this.nzLabelProperty] : '';
    };
    /**
     * @param {?} str
     * @return {?}
     */
    NzCascaderOptionComponent.prototype.renderHighlightString = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        /** @type {?} */
        var replaceStr = str.replace(new RegExp(this.highlightText, 'g'), "<span class=\"ant-cascader-menu-item-keyword\">" + this.highlightText + "</span>");
        return this.sanitizer.bypassSecurityTrustHtml(replaceStr);
    };
    /**
     * @return {?}
     */
    NzCascaderOptionComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    NzCascaderOptionComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: '[nz-cascader-option]',
                    exportAs: 'nzCascaderOption',
                    template: "<ng-container *ngIf=\"highlightText\">\r\n  <span [innerHTML]=\"renderHighlightString(getOptionLabel())\"></span>\r\n</ng-container>\r\n<ng-container *ngIf=\"!highlightText\">{{ getOptionLabel() }}</ng-container>\r\n<span\r\n  *ngIf=\"!option.isLeaf || option.children && option.children.length || option.loading\"\r\n  class=\"ant-cascader-menu-item-expand-icon\">\r\n  <i nz-icon [type]=\"option.loading ? 'loading' : 'right'\"></i>\r\n</span>\r\n",
                    host: {
                        '[attr.title]': 'option.title || getOptionLabel()',
                        '[class.ant-cascader-menu-item-active]': 'activated',
                        '[class.ant-cascader-menu-item-expand]': '!option.isLeaf',
                        '[class.ant-cascader-menu-item-disabled]': 'option.disabled'
                    }
                }] }
    ];
    /** @nocollapse */
    NzCascaderOptionComponent.ctorParameters = function () { return [
        { type: DomSanitizer },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzCascaderOptionComponent.propDecorators = {
        option: [{ type: Input }],
        activated: [{ type: Input }],
        highlightText: [{ type: Input }],
        nzLabelProperty: [{ type: Input }]
    };
    return NzCascaderOptionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * All data is stored and parsed in NzCascaderService.
 */
var NzCascaderService = /** @class */ (function () {
    function NzCascaderService() {
        /**
         * Activated options in each column.
         */
        this.activatedOptions = [];
        /**
         * An array to store cascader items arranged in different layers.
         */
        this.columns = [[]];
        /**
         * If user has entered searching mode.
         */
        this.inSearchingMode = false;
        /**
         * Selected options would be output to user.
         */
        this.selectedOptions = [];
        this.values = []; // tslint:disable-line:no-any
        // tslint:disable-line:no-any
        this.$loading = new BehaviorSubject(false);
        /**
         * Emit an event to notify cascader it needs to redraw because activated or
         * selected options are changed.
         */
        this.$redraw = new Subject();
        /**
         * Emit an event when an option gets selected.
         * Emit true if a leaf options is selected.
         */
        this.$optionSelected = new Subject();
        /**
         * Emit an event to notify cascader it needs to quit searching mode.
         * Only emit when user do select a searching option.
         */
        this.$quitSearching = new Subject();
        /**
         * To hold columns before entering searching mode.
         */
        this.columnsSnapshot = [[]];
        /**
         * To hold activated options before entering searching mode.
         */
        this.activatedOptionsSnapshot = [];
    }
    Object.defineProperty(NzCascaderService.prototype, "nzOptions", {
        /** Return cascader options in the first layer. */
        get: /**
         * Return cascader options in the first layer.
         * @return {?}
         */
        function () {
            return this.columns[0];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCascaderService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.$redraw.complete();
        this.$quitSearching.complete();
        this.$optionSelected.complete();
        this.$loading.complete();
    };
    /**
     * Make sure that value matches what is displayed in the dropdown.
     */
    /**
     * Make sure that value matches what is displayed in the dropdown.
     * @param {?=} first
     * @return {?}
     */
    NzCascaderService.prototype.syncOptions = /**
     * Make sure that value matches what is displayed in the dropdown.
     * @param {?=} first
     * @return {?}
     */
    function (first) {
        var _this = this;
        if (first === void 0) { first = false; }
        /** @type {?} */
        var values = this.values;
        /** @type {?} */
        var hasValue = values && values.length;
        /** @type {?} */
        var lastColumnIndex = values.length - 1;
        /** @type {?} */
        var initColumnWithIndex = (/**
         * @param {?} columnIndex
         * @return {?}
         */
        function (columnIndex) {
            /** @type {?} */
            var activatedOptionSetter = (/**
             * @return {?}
             */
            function () {
                var _a;
                /** @type {?} */
                var currentValue = values[columnIndex];
                if (!currentValue) {
                    _this.$redraw.next();
                    return;
                }
                /** @type {?} */
                var option = _this.findOptionWithValue(columnIndex, values[columnIndex]) ||
                    (typeof currentValue === 'object'
                        ? currentValue
                        : (_a = {},
                            _a["" + _this.cascaderComponent.nzValueProperty] = currentValue,
                            _a["" + _this.cascaderComponent.nzLabelProperty] = currentValue,
                            _a));
                _this.setOptionActivated(option, columnIndex, false, false);
                if (columnIndex < lastColumnIndex) {
                    initColumnWithIndex(columnIndex + 1);
                }
                else {
                    _this.dropBehindColumns(columnIndex);
                    _this.selectedOptions = __spread(_this.activatedOptions);
                    _this.$redraw.next();
                }
            });
            if (_this.isLoaded(columnIndex) || !_this.cascaderComponent.nzLoadData) {
                activatedOptionSetter();
            }
            else {
                /** @type {?} */
                var option = _this.activatedOptions[columnIndex - 1] || {};
                _this.loadChildren(option, columnIndex - 1, activatedOptionSetter);
            }
        });
        this.activatedOptions = [];
        this.selectedOptions = [];
        if (first && this.cascaderComponent.nzLoadData && !hasValue) {
            // Should also notify the component that value changes. Fix #3480.
            this.$redraw.next();
            return;
        }
        else {
            initColumnWithIndex(0);
        }
    };
    /**
     * Bind cascader component so this service could use inputs.
     */
    /**
     * Bind cascader component so this service could use inputs.
     * @param {?} cascaderComponent
     * @return {?}
     */
    NzCascaderService.prototype.withComponent = /**
     * Bind cascader component so this service could use inputs.
     * @param {?} cascaderComponent
     * @return {?}
     */
    function (cascaderComponent) {
        this.cascaderComponent = cascaderComponent;
    };
    /**
     * Reset all options. Rebuild searching options if in searching mode.
     */
    /**
     * Reset all options. Rebuild searching options if in searching mode.
     * @param {?} options
     * @return {?}
     */
    NzCascaderService.prototype.withOptions = /**
     * Reset all options. Rebuild searching options if in searching mode.
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.columnsSnapshot = this.columns = options && options.length ? [options] : [];
        if (this.inSearchingMode) {
            this.prepareSearchOptions(this.cascaderComponent.inputValue);
        }
        else if (this.columns.length) {
            this.syncOptions();
        }
    };
    /**
     * Try to set a option as activated.
     * @param option Cascader option
     * @param columnIndex Of which column this option is in
     * @param select Select
     * @param loadingChildren Try to load children asynchronously.
     */
    /**
     * Try to set a option as activated.
     * @param {?} option Cascader option
     * @param {?} columnIndex Of which column this option is in
     * @param {?=} select Select
     * @param {?=} loadingChildren Try to load children asynchronously.
     * @return {?}
     */
    NzCascaderService.prototype.setOptionActivated = /**
     * Try to set a option as activated.
     * @param {?} option Cascader option
     * @param {?} columnIndex Of which column this option is in
     * @param {?=} select Select
     * @param {?=} loadingChildren Try to load children asynchronously.
     * @return {?}
     */
    function (option, columnIndex, select, loadingChildren) {
        if (select === void 0) { select = false; }
        if (loadingChildren === void 0) { loadingChildren = true; }
        if (option.disabled) {
            return;
        }
        this.activatedOptions[columnIndex] = option;
        this.trackAncestorActivatedOptions(columnIndex);
        this.dropBehindActivatedOptions(columnIndex);
        /** @type {?} */
        var isParent = isParentOption(option);
        if (isParent) {
            // Parent option that has children.
            this.setColumnData((/** @type {?} */ (option.children)), columnIndex + 1, option);
        }
        else if (!option.isLeaf && loadingChildren) {
            // Parent option that should try to load children asynchronously.
            this.loadChildren(option, columnIndex);
        }
        else if (option.isLeaf) {
            // Leaf option.
            this.dropBehindColumns(columnIndex);
        }
        // Actually perform selection to make an options not only activated but also selected.
        if (select) {
            this.setOptionSelected(option, columnIndex);
        }
        this.$redraw.next();
    };
    /**
     * Set a searching option as activated, finishing up things.
     * @param option
     */
    /**
     * Set a searching option as activated, finishing up things.
     * @param {?} option
     * @return {?}
     */
    NzCascaderService.prototype.setSearchOptionSelected = /**
     * Set a searching option as activated, finishing up things.
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        this.activatedOptions = [option];
        this.selectedOptions = __spread(option.path);
        this.prepareEmitValue();
        this.$redraw.next();
        this.$optionSelected.next({ option: option, index: 0 });
        setTimeout((/**
         * @return {?}
         */
        function () {
            // Reset data and tell UI only to remove input and reset dropdown width style.
            _this.$quitSearching.next();
            _this.$redraw.next();
            _this.inSearchingMode = false;
            _this.columns = __spread(_this.columnsSnapshot);
            _this.activatedOptions = __spread(_this.selectedOptions);
        }), 200);
    };
    /**
     * Filter cascader options to reset `columns`.
     * @param searchValue The string user wants to search.
     */
    /**
     * Filter cascader options to reset `columns`.
     * @param {?} searchValue The string user wants to search.
     * @return {?}
     */
    NzCascaderService.prototype.prepareSearchOptions = /**
     * Filter cascader options to reset `columns`.
     * @param {?} searchValue The string user wants to search.
     * @return {?}
     */
    function (searchValue) {
        var _this = this;
        /** @type {?} */
        var results = [];
        // Search results only have one layer.
        /** @type {?} */
        var path = [];
        /** @type {?} */
        var defaultFilter = (/**
         * @param {?} i
         * @param {?} p
         * @return {?}
         */
        function (i, p) {
            return p.some((/**
             * @param {?} o
             * @return {?}
             */
            function (o) {
                /** @type {?} */
                var label = _this.getOptionLabel(o);
                return !!label && label.indexOf(i) !== -1;
            }));
        });
        /** @type {?} */
        var showSearch = this.cascaderComponent.nzShowSearch;
        /** @type {?} */
        var filter = isShowSearchObject(showSearch) && showSearch.filter ? showSearch.filter : defaultFilter;
        /** @type {?} */
        var sorter = isShowSearchObject(showSearch) && showSearch.sorter ? showSearch.sorter : null;
        /** @type {?} */
        var loopChild = (/**
         * @param {?} node
         * @param {?=} forceDisabled
         * @return {?}
         */
        function (node, forceDisabled) {
            if (forceDisabled === void 0) { forceDisabled = false; }
            var _a;
            path.push(node);
            /** @type {?} */
            var cPath = Array.from(path);
            if (filter(searchValue, cPath)) {
                /** @type {?} */
                var disabled = forceDisabled || node.disabled;
                /** @type {?} */
                var option = (_a = {
                        disabled: disabled,
                        isLeaf: true,
                        path: cPath
                    },
                    _a[_this.cascaderComponent.nzLabelProperty] = cPath.map((/**
                     * @param {?} p
                     * @return {?}
                     */
                    function (p) { return _this.getOptionLabel(p); })).join(' / '),
                    _a);
                results.push(option);
            }
            path.pop();
        });
        /** @type {?} */
        var loopParent = (/**
         * @param {?} node
         * @param {?=} forceDisabled
         * @return {?}
         */
        function (node, forceDisabled) {
            if (forceDisabled === void 0) { forceDisabled = false; }
            /** @type {?} */
            var disabled = forceDisabled || node.disabled;
            path.push(node);
            (/** @type {?} */ (node.children)).forEach((/**
             * @param {?} sNode
             * @return {?}
             */
            function (sNode) {
                if (!sNode.parent) {
                    sNode.parent = node;
                }
                if (!sNode.isLeaf) {
                    loopParent(sNode, disabled);
                }
                if (sNode.isLeaf || !sNode.children || !sNode.children.length) {
                    loopChild(sNode, disabled);
                }
            }));
            path.pop();
        });
        if (!this.columnsSnapshot.length) {
            this.columns = [[]];
            return;
        }
        this.columnsSnapshot[0].forEach((/**
         * @param {?} o
         * @return {?}
         */
        function (o) { return (isChildOption(o) ? loopChild(o) : loopParent(o)); }));
        if (sorter) {
            results.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return sorter(a.path, b.path, searchValue); }));
        }
        this.columns = [results];
    };
    /**
     * Toggle searching mode by UI. It deals with things not directly related to UI.
     * @param toSearching If this cascader is entering searching mode
     */
    /**
     * Toggle searching mode by UI. It deals with things not directly related to UI.
     * @param {?} toSearching If this cascader is entering searching mode
     * @return {?}
     */
    NzCascaderService.prototype.toggleSearchingMode = /**
     * Toggle searching mode by UI. It deals with things not directly related to UI.
     * @param {?} toSearching If this cascader is entering searching mode
     * @return {?}
     */
    function (toSearching) {
        this.inSearchingMode = toSearching;
        if (toSearching) {
            this.activatedOptionsSnapshot = __spread(this.activatedOptions);
            this.activatedOptions = [];
            this.selectedOptions = [];
            this.$redraw.next();
        }
        else {
            // User quit searching mode without selecting an option.
            this.activatedOptions = __spread(this.activatedOptionsSnapshot);
            this.selectedOptions = __spread(this.activatedOptions);
            this.columns = __spread(this.columnsSnapshot);
            this.syncOptions();
            this.$redraw.next();
        }
    };
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    NzCascaderService.prototype.setOptionSelected = /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    function (option, index) {
        /** @type {?} */
        var changeOn = this.cascaderComponent.nzChangeOn;
        /** @type {?} */
        var shouldPerformSelection = (/**
         * @param {?} o
         * @param {?} i
         * @return {?}
         */
        function (o, i) {
            return typeof changeOn === 'function' ? changeOn(o, i) : false;
        });
        if (option.isLeaf || this.cascaderComponent.nzChangeOnSelect || shouldPerformSelection(option, index)) {
            this.selectedOptions = __spread(this.activatedOptions);
            this.prepareEmitValue();
            this.$redraw.next();
            this.$optionSelected.next({ option: option, index: index });
        }
    };
    /**
     * Clear selected options.
     */
    /**
     * Clear selected options.
     * @return {?}
     */
    NzCascaderService.prototype.clear = /**
     * Clear selected options.
     * @return {?}
     */
    function () {
        this.values = [];
        this.selectedOptions = [];
        this.activatedOptions = [];
        this.dropBehindColumns(0);
        this.prepareEmitValue();
        this.$redraw.next();
        this.$optionSelected.next(null);
    };
    /**
     * @param {?} o
     * @return {?}
     */
    NzCascaderService.prototype.getOptionLabel = /**
     * @param {?} o
     * @return {?}
     */
    function (o) {
        return (/** @type {?} */ (o[this.cascaderComponent.nzLabelProperty || 'label']));
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} o
     * @return {?}
     */
    NzCascaderService.prototype.getOptionValue = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} o
     * @return {?}
     */
    function (o) {
        return o[this.cascaderComponent.nzValueProperty || 'value'];
    };
    /**
     * Try to insert options into a column.
     * @param options Options to insert
     * @param columnIndex Position
     */
    /**
     * Try to insert options into a column.
     * @private
     * @param {?} options Options to insert
     * @param {?} columnIndex Position
     * @param {?} parent
     * @return {?}
     */
    NzCascaderService.prototype.setColumnData = /**
     * Try to insert options into a column.
     * @private
     * @param {?} options Options to insert
     * @param {?} columnIndex Position
     * @param {?} parent
     * @return {?}
     */
    function (options, columnIndex, parent) {
        /** @type {?} */
        var existingOptions = this.columns[columnIndex];
        if (!arraysEqual(existingOptions, options)) {
            options.forEach((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return (o.parent = parent); }));
            this.columns[columnIndex] = options;
            this.dropBehindColumns(columnIndex);
        }
    };
    /**
     * Set all ancestor options as activated.
     */
    /**
     * Set all ancestor options as activated.
     * @private
     * @param {?} startIndex
     * @return {?}
     */
    NzCascaderService.prototype.trackAncestorActivatedOptions = /**
     * Set all ancestor options as activated.
     * @private
     * @param {?} startIndex
     * @return {?}
     */
    function (startIndex) {
        for (var i = startIndex - 1; i >= 0; i--) {
            if (!this.activatedOptions[i]) {
                this.activatedOptions[i] = (/** @type {?} */ (this.activatedOptions[i + 1].parent));
            }
        }
    };
    /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    NzCascaderService.prototype.dropBehindActivatedOptions = /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    function (lastReserveIndex) {
        this.activatedOptions = this.activatedOptions.splice(0, lastReserveIndex + 1);
    };
    /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    NzCascaderService.prototype.dropBehindColumns = /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    function (lastReserveIndex) {
        if (lastReserveIndex < this.columns.length - 1) {
            this.columns = this.columns.slice(0, lastReserveIndex + 1);
        }
    };
    /**
     * Load children of an option asynchronously.
     */
    /**
     * Load children of an option asynchronously.
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    NzCascaderService.prototype.loadChildren = /**
     * Load children of an option asynchronously.
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    function (option, // tslint:disable-line:no-any
    columnIndex, success, failure) {
        var _this = this;
        /** @type {?} */
        var loadFn = this.cascaderComponent.nzLoadData;
        if (loadFn) {
            // If there isn't any option in columns.
            this.$loading.next(columnIndex < 0);
            if (typeof option === 'object') {
                option.loading = true;
            }
            loadFn(option, columnIndex).then((/**
             * @return {?}
             */
            function () {
                option.loading = false;
                if (option.children) {
                    _this.setColumnData(option.children, columnIndex + 1, option);
                }
                if (success) {
                    success();
                }
                _this.$loading.next(false);
                _this.$redraw.next();
            }), (/**
             * @return {?}
             */
            function () {
                option.loading = false;
                option.isLeaf = true;
                if (failure) {
                    failure();
                }
                _this.$redraw.next();
            }));
        }
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    NzCascaderService.prototype.isLoaded = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.columns[index] && this.columns[index].length > 0;
    };
    /**
     * Find a option that has a given value in a given column.
     */
    /**
     * Find a option that has a given value in a given column.
     * @private
     * @param {?} columnIndex
     * @param {?} value
     * @return {?}
     */
    NzCascaderService.prototype.findOptionWithValue = /**
     * Find a option that has a given value in a given column.
     * @private
     * @param {?} columnIndex
     * @param {?} value
     * @return {?}
     */
    function (columnIndex, value // tslint:disable-line:no-any
    ) {
        var _this = this;
        /** @type {?} */
        var targetColumn = this.columns[columnIndex];
        if (targetColumn) {
            /** @type {?} */
            var v_1 = typeof value === 'object' ? this.getOptionValue(value) : value;
            return (/** @type {?} */ (targetColumn.find((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return v_1 === _this.getOptionValue(o); }))));
        }
        return null;
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderService.prototype.prepareEmitValue = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.values = this.selectedOptions.map((/**
         * @param {?} o
         * @return {?}
         */
        function (o) { return _this.getOptionValue(o); }));
    };
    NzCascaderService.decorators = [
        { type: Injectable }
    ];
    return NzCascaderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultDisplayRender = (/**
 * @param {?} labels
 * @return {?}
 */
function (labels) { return labels.join(' / '); });
var NzCascaderComponent = /** @class */ (function () {
    function NzCascaderComponent(cascaderService, cdr, elementRef, renderer, noAnimation) {
        this.cascaderService = cascaderService;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.nzShowInput = true;
        this.nzShowArrow = true;
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzChangeOnSelect = false;
        this.nzDisabled = false;
        this.nzExpandTrigger = 'click';
        this.nzValueProperty = 'value';
        this.nzLabelProperty = 'label';
        this.nzSize = 'default';
        this.nzPlaceHolder = 'Please select'; // TODO: i18n?
        this.nzMouseEnterDelay = 150; // ms
        // ms
        this.nzMouseLeaveDelay = 150; // ms
        // ms
        this.nzTriggerAction = (/** @type {?} */ (['click']));
        this.nzSelectionChange = new EventEmitter();
        this.nzSelect = new EventEmitter();
        this.nzClear = new EventEmitter();
        this.nzVisibleChange = new EventEmitter(); // Not exposed, only for test
        // Not exposed, only for test
        this.nzChange = new EventEmitter(); // Not exposed, only for test
        this.dropDownPosition = 'bottom';
        this.menuVisible = false;
        this.isLoading = false;
        this.labelRenderContext = {};
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.positions = __spread(DEFAULT_DROPDOWN_POSITIONS);
        this.isFocused = false;
        this.$destroy = new Subject();
        this.inputString = '';
        this.isOpening = false;
        this.el = elementRef.nativeElement;
        this.cascaderService.withComponent(this);
        renderer.addClass(elementRef.nativeElement, 'ant-cascader');
        renderer.addClass(elementRef.nativeElement, 'ant-cascader-picker');
    }
    Object.defineProperty(NzCascaderComponent.prototype, "nzOptions", {
        get: 
        // tslint:disable-line:no-any
        /**
         * @return {?}
         */
        function () {
            return this.cascaderService.nzOptions;
        },
        set: /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            this.cascaderService.withOptions(options);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "inSearchingMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.cascaderService.inSearchingMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "inputValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inputString;
        },
        set: /**
         * @param {?} inputValue
         * @return {?}
         */
        function (inputValue) {
            this.inputString = inputValue;
            this.toggleSearchingMode(!!inputValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "menuCls", {
        get: /**
         * @return {?}
         */
        function () {
            var _a;
            return _a = {}, _a["" + this.nzMenuClassName] = !!this.nzMenuClassName, _a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "menuColumnCls", {
        get: /**
         * @return {?}
         */
        function () {
            var _a;
            return _a = {}, _a["" + this.nzColumnClassName] = !!this.nzColumnClassName, _a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "hasInput", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return !!this.inputValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "hasValue", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.cascaderService.values && this.cascaderService.values.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "showPlaceholder", {
        get: /**
         * @return {?}
         */
        function () {
            return !(this.hasInput || this.hasValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "clearIconVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzAllowClear && !this.nzDisabled && (this.hasValue || this.hasInput);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "isLabelRenderTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.nzLabelRender;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var srv = this.cascaderService;
        srv.$redraw.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @return {?}
         */
        function () {
            // These operations would not mutate data.
            _this.checkChildren();
            _this.buildDisplayLabel();
            _this.reposition();
            _this.cdr.markForCheck();
        }));
        srv.$loading.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @param {?} loading
         * @return {?}
         */
        function (loading) {
            _this.isLoading = loading;
        }));
        srv.$optionSelected.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (!data) {
                _this.onChange([]);
                _this.nzSelect.emit(null);
            }
            else {
                var option = data.option, index = data.index;
                /** @type {?} */
                var shouldClose = option.isLeaf;
                if (shouldClose) {
                    _this.delaySetMenuVisible(false);
                }
                _this.onChange(_this.cascaderService.values);
                _this.nzSelectionChange.emit(_this.cascaderService.selectedOptions);
                _this.nzSelect.emit({ option: option, index: index });
                _this.cdr.markForCheck();
            }
        }));
        srv.$quitSearching.pipe(takeUntil(this.$destroy)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.inputString = '';
            _this.dropdownWidthStyle = '';
        }));
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.$destroy.next();
        this.$destroy.complete();
        this.clearDelayMenuTimer();
        this.clearDelaySelectTimer();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCascaderComponent.prototype.registerOnChange = /**
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
    NzCascaderComponent.prototype.registerOnTouched = /**
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
    NzCascaderComponent.prototype.writeValue = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.cascaderService.values = toArray(value);
        this.cascaderService.syncOptions(true);
    };
    /**
     * @param {?} visible
     * @param {?=} delay
     * @param {?=} setOpening
     * @return {?}
     */
    NzCascaderComponent.prototype.delaySetMenuVisible = /**
     * @param {?} visible
     * @param {?=} delay
     * @param {?=} setOpening
     * @return {?}
     */
    function (visible, delay, setOpening) {
        var _this = this;
        if (delay === void 0) { delay = 100; }
        if (setOpening === void 0) { setOpening = false; }
        this.clearDelayMenuTimer();
        if (delay) {
            if (visible && setOpening) {
                this.isOpening = true;
            }
            this.delayMenuTimer = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.setMenuVisible(visible);
                _this.cdr.detectChanges();
                _this.clearDelayMenuTimer();
                if (visible) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.isOpening = false;
                    }), 100);
                }
            }), delay);
        }
        else {
            this.setMenuVisible(visible);
        }
    };
    /**
     * @param {?} visible
     * @return {?}
     */
    NzCascaderComponent.prototype.setMenuVisible = /**
     * @param {?} visible
     * @return {?}
     */
    function (visible) {
        if (this.nzDisabled || this.menuVisible === visible) {
            return;
        }
        if (visible) {
            this.cascaderService.syncOptions();
        }
        this.menuVisible = visible;
        this.nzVisibleChange.emit(visible);
        this.cdr.detectChanges();
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.clearDelayMenuTimer = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.delayMenuTimer) {
            clearTimeout(this.delayMenuTimer);
            this.delayMenuTimer = null;
        }
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    NzCascaderComponent.prototype.clearSelection = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.labelRenderText = '';
        this.labelRenderContext = {};
        this.inputValue = '';
        this.setMenuVisible(false);
        this.cascaderService.clear();
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.getSubmitValue = 
    // tslint:disable-next-line:no-any
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.cascaderService.selectedOptions.map((/**
         * @param {?} o
         * @return {?}
         */
        function (o) { return _this.cascaderService.getOptionValue(o); }));
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (!this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).focus();
            this.isFocused = true;
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        if (this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).blur();
            this.isFocused = false;
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.handleInputBlur = /**
     * @return {?}
     */
    function () {
        this.menuVisible ? this.focus() : this.blur();
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.handleInputFocus = /**
     * @return {?}
     */
    function () {
        this.focus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
        if (keyCode !== DOWN_ARROW &&
            keyCode !== UP_ARROW &&
            keyCode !== LEFT_ARROW &&
            keyCode !== RIGHT_ARROW &&
            keyCode !== ENTER &&
            keyCode !== BACKSPACE &&
            keyCode !== ESCAPE) {
            return;
        }
        // Press any keys above to reopen menu.
        if (!this.menuVisible && keyCode !== BACKSPACE && keyCode !== ESCAPE) {
            return this.setMenuVisible(true);
        }
        // Make these keys work as default in searching mode.
        if (this.inSearchingMode && (keyCode === BACKSPACE || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW)) {
            return;
        }
        // Interact with the component.
        if (this.menuVisible) {
            event.preventDefault();
            if (keyCode === DOWN_ARROW) {
                this.moveUpOrDown(false);
            }
            else if (keyCode === UP_ARROW) {
                this.moveUpOrDown(true);
            }
            else if (keyCode === LEFT_ARROW) {
                this.moveLeft();
            }
            else if (keyCode === RIGHT_ARROW) {
                this.moveRight();
            }
            else if (keyCode === ENTER) {
                this.onEnter();
            }
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.onTriggerClick = /**
     * @return {?}
     */
    function () {
        if (this.nzDisabled) {
            return;
        }
        if (this.nzShowSearch) {
            this.focus();
        }
        if (this.isActionTrigger('click')) {
            this.delaySetMenuVisible(!this.menuVisible, 100);
        }
        this.onTouched();
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.onTriggerMouseEnter = /**
     * @return {?}
     */
    function () {
        if (this.nzDisabled) {
            return;
        }
        if (this.isActionTrigger('hover')) {
            this.delaySetMenuVisible(true, this.nzMouseEnterDelay, true);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onTriggerMouseLeave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.nzDisabled) {
            return;
        }
        if (!this.menuVisible || this.isOpening) {
            event.preventDefault();
            return;
        }
        if (this.isActionTrigger('hover')) {
            /** @type {?} */
            var mouseTarget = (/** @type {?} */ (event.relatedTarget));
            /** @type {?} */
            var hostEl = this.el;
            /** @type {?} */
            var menuEl = this.menu && ((/** @type {?} */ (this.menu.nativeElement)));
            if (hostEl.contains(mouseTarget) || (menuEl && menuEl.contains(mouseTarget))) {
                return;
            }
            this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
        }
    };
    /**
     * @private
     * @param {?} action
     * @return {?}
     */
    NzCascaderComponent.prototype.isActionTrigger = /**
     * @private
     * @param {?} action
     * @return {?}
     */
    function (action) {
        return typeof this.nzTriggerAction === 'string'
            ? this.nzTriggerAction === action
            : this.nzTriggerAction.indexOf(action) !== -1;
    };
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onOptionClick = /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    function (option, columnIndex, event) {
        if (event) {
            event.preventDefault();
        }
        if (option && option.disabled) {
            return;
        }
        this.el.focus();
        this.inSearchingMode
            ? this.cascaderService.setSearchOptionSelected((/** @type {?} */ (option)))
            : this.cascaderService.setOptionActivated(option, columnIndex, true);
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.onEnter = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var columnIndex = Math.max(this.cascaderService.activatedOptions.length - 1, 0);
        /** @type {?} */
        var option = this.cascaderService.activatedOptions[columnIndex];
        if (option && !option.disabled) {
            this.inSearchingMode
                ? this.cascaderService.setSearchOptionSelected((/** @type {?} */ (option)))
                : this.cascaderService.setOptionActivated(option, columnIndex, true);
        }
    };
    /**
     * @private
     * @param {?} isUp
     * @return {?}
     */
    NzCascaderComponent.prototype.moveUpOrDown = /**
     * @private
     * @param {?} isUp
     * @return {?}
     */
    function (isUp) {
        /** @type {?} */
        var columnIndex = Math.max(this.cascaderService.activatedOptions.length - 1, 0);
        /** @type {?} */
        var activeOption = this.cascaderService.activatedOptions[columnIndex];
        /** @type {?} */
        var options = this.cascaderService.columns[columnIndex] || [];
        /** @type {?} */
        var length = options.length;
        /** @type {?} */
        var nextIndex = -1;
        if (!activeOption) {
            // Not selected options in this column
            nextIndex = isUp ? length : -1;
        }
        else {
            nextIndex = options.indexOf(activeOption);
        }
        while (true) {
            nextIndex = isUp ? nextIndex - 1 : nextIndex + 1;
            if (nextIndex < 0 || nextIndex >= length) {
                break;
            }
            /** @type {?} */
            var nextOption = options[nextIndex];
            if (!nextOption || nextOption.disabled) {
                continue;
            }
            this.cascaderService.setOptionActivated(nextOption, columnIndex);
            break;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.moveLeft = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = this.cascaderService.activatedOptions;
        if (options.length) {
            options.pop(); // Remove the last one
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.moveRight = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var length = this.cascaderService.activatedOptions.length;
        /** @type {?} */
        var options = this.cascaderService.columns[length];
        if (options && options.length) {
            /** @type {?} */
            var nextOpt = options.find((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return !o.disabled; }));
            if (nextOpt) {
                this.cascaderService.setOptionActivated(nextOpt, length);
            }
        }
    };
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onOptionMouseEnter = /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    function (option, columnIndex, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
            this.delaySelectOption(option, columnIndex, true);
        }
    };
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onOptionMouseLeave = /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    function (option, columnIndex, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
            this.delaySelectOption(option, columnIndex, false);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.clearDelaySelectTimer = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.delaySelectTimer) {
            clearTimeout(this.delaySelectTimer);
            this.delaySelectTimer = null;
        }
    };
    /**
     * @private
     * @param {?} option
     * @param {?} index
     * @param {?} doSelect
     * @return {?}
     */
    NzCascaderComponent.prototype.delaySelectOption = /**
     * @private
     * @param {?} option
     * @param {?} index
     * @param {?} doSelect
     * @return {?}
     */
    function (option, index, doSelect) {
        var _this = this;
        this.clearDelaySelectTimer();
        if (doSelect) {
            this.delaySelectTimer = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.cascaderService.setOptionActivated(option, index);
                _this.delaySelectTimer = null;
            }), 150);
        }
    };
    /**
     * @private
     * @param {?} toSearching
     * @return {?}
     */
    NzCascaderComponent.prototype.toggleSearchingMode = /**
     * @private
     * @param {?} toSearching
     * @return {?}
     */
    function (toSearching) {
        if (this.inSearchingMode !== toSearching) {
            this.cascaderService.toggleSearchingMode(toSearching);
            this.dropdownWidthStyle = toSearching ? this.input.nativeElement.offsetWidth + "px" : '';
        }
        if (this.inSearchingMode) {
            this.cascaderService.prepareSearchOptions(this.inputValue);
        }
    };
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    NzCascaderComponent.prototype.isOptionActivated = /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    function (option, index) {
        /** @type {?} */
        var activeOpt = this.cascaderService.activatedOptions[index];
        return activeOpt === option;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzCascaderComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        if (isDisabled) {
            this.closeMenu();
        }
        this.nzDisabled = isDisabled;
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.closeMenu = /**
     * @return {?}
     */
    function () {
        this.blur();
        this.clearDelayMenuTimer();
        this.setMenuVisible(false);
    };
    /**
     * @param {?} position
     * @return {?}
     */
    NzCascaderComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        /** @type {?} */
        var newValue = position.connectionPair.originY === 'bottom' ? 'bottom' : 'top';
        if (this.dropDownPosition !== newValue) {
            this.dropDownPosition = newValue;
            this.cdr.detectChanges();
        }
    };
    /**
     * Reposition the cascader panel. When a menu opens, the cascader expands
     * and may exceed the boundary of browser's window.
     */
    /**
     * Reposition the cascader panel. When a menu opens, the cascader expands
     * and may exceed the boundary of browser's window.
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.reposition = /**
     * Reposition the cascader panel. When a menu opens, the cascader expands
     * and may exceed the boundary of browser's window.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.overlay && this.overlay.overlayRef && this.menuVisible) {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                _this.overlay.overlayRef.updatePosition();
            }));
        }
    };
    /**
     * When a cascader options is changed, a child needs to know that it should re-render.
     */
    /**
     * When a cascader options is changed, a child needs to know that it should re-render.
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.checkChildren = /**
     * When a cascader options is changed, a child needs to know that it should re-render.
     * @private
     * @return {?}
     */
    function () {
        if (this.cascaderItems) {
            this.cascaderItems.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.markForCheck(); }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCascaderComponent.prototype.buildDisplayLabel = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var selectedOptions = this.cascaderService.selectedOptions;
        /** @type {?} */
        var labels = selectedOptions.map((/**
         * @param {?} o
         * @return {?}
         */
        function (o) { return _this.cascaderService.getOptionLabel(o); }));
        if (this.isLabelRenderTemplate) {
            this.labelRenderContext = { labels: labels, selectedOptions: selectedOptions };
        }
        else {
            this.labelRenderText = defaultDisplayRender.call(this, labels, selectedOptions);
        }
    };
    NzCascaderComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-cascader,[nz-cascader]',
                    exportAs: 'nzCascader',
                    preserveWhitespaces: false,
                    template: "<div\r\n  cdkOverlayOrigin\r\n  #origin=\"cdkOverlayOrigin\"\r\n  #trigger>\r\n  <div *ngIf=\"nzShowInput\">\r\n    <input\r\n      #input\r\n      nz-input\r\n      class=\"ant-cascader-input\"\r\n      [class.ant-cascader-input-disabled]=\"nzDisabled\"\r\n      [class.ant-cascader-input-lg]=\"nzSize === 'large'\"\r\n      [class.ant-cascader-input-sm]=\"nzSize === 'small'\"\r\n      [attr.autoComplete]=\"'off'\"\r\n      [attr.placeholder]=\"showPlaceholder ? nzPlaceHolder : null\"\r\n      [attr.autofocus]=\"nzAutoFocus ? 'autofocus' : null\"\r\n      [readonly]=\"!nzShowSearch\"\r\n      [disabled]=\"nzDisabled\"\r\n      [nzSize]=\"nzSize\"\r\n      [(ngModel)]=\"inputValue\"\r\n      (blur)=\"handleInputBlur()\"\r\n      (focus)=\"handleInputFocus()\"\r\n      (change)=\"$event.stopPropagation()\">\r\n    <i *ngIf=\"clearIconVisible\"\r\n      nz-icon\r\n      type=\"close-circle\"\r\n      theme=\"fill\"\r\n      class=\"ant-cascader-picker-clear\"\r\n      (click)=\"clearSelection($event)\"></i>\r\n    <i *ngIf=\"nzShowArrow && !isLoading\"\r\n      nz-icon\r\n      type=\"down\"\r\n      class=\"ant-cascader-picker-arrow\"\r\n      [class.ant-cascader-picker-arrow-expand]=\"menuVisible\">\r\n    </i>\r\n    <i *ngIf=\"isLoading\" nz-icon type=\"loading\" class=\"ant-cascader-picker-arrow\"></i>\r\n    <span\r\n      class=\"ant-cascader-picker-label\"\r\n      [class.ant-cascader-show-search]=\"!!nzShowSearch\"\r\n      [class.ant-focusd]=\"!!nzShowSearch && isFocused && !inputValue\">\r\n      <ng-container *ngIf=\"!isLabelRenderTemplate; else labelTemplate\">{{ labelRenderText }}</ng-container>\r\n      <ng-template #labelTemplate>\r\n        <ng-template [ngTemplateOutlet]=\"nzLabelRender\" [ngTemplateOutletContext]=\"labelRenderContext\"></ng-template>\r\n      </ng-template>\r\n    </span>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  cdkConnectedOverlayHasBackdrop\r\n  [cdkConnectedOverlayOrigin]=\"origin\"\r\n  [cdkConnectedOverlayPositions]=\"positions\"\r\n  (backdropClick)=\"closeMenu()\"\r\n  (detach)=\"closeMenu()\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayOpen]=\"menuVisible\">\r\n  <div\r\n    #menu\r\n    class=\"ant-cascader-menus\"\r\n    *ngIf=\"nzOptions && nzOptions.length || inSearchingMode\"\r\n    [class.ant-cascader-menus-hidden]=\"!menuVisible\"\r\n    [ngClass]=\"menuCls\"\r\n    [ngStyle]=\"nzMenuStyle\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [@slideMotion]=\"dropDownPosition\"\r\n    (mouseleave)=\"onTriggerMouseLeave($event)\">\r\n    <ul *ngFor=\"let options of cascaderService.columns; let i = index;\" class=\"ant-cascader-menu\"\r\n      [ngClass]=\"menuColumnCls\"\r\n      [style.height]=\"inSearchingMode && !cascaderService.columns[0].length ? 'auto': ''\"\r\n      [style.width]=\"dropdownWidthStyle\">\r\n      <li\r\n        nz-cascader-option\r\n        *ngFor=\"let option of options\"\r\n        [nzLabelProperty]=\"nzLabelProperty\"\r\n        [activated]=\"isOptionActivated(option, i)\"\r\n        [highlightText]=\"inSearchingMode ? inputValue : ''\"\r\n        [option]=\"option\"\r\n        (mouseenter)=\"onOptionMouseEnter(option, i, $event)\"\r\n        (mouseleave)=\"onOptionMouseLeave(option, i, $event)\"\r\n        (click)=\"onOptionClick(option, i, $event)\">\r\n      </li>\r\n      <li *ngIf=\"inSearchingMode && !cascaderService.columns[0].length\"\r\n        class=\"ant-cascader-menu-item ant-cascader-menu-item-expanded ant-cascader-menu-item-disabled\">\r\n        <nz-embed-empty [nzComponentName]=\"'cascader'\" [specificContent]=\"nzNotFoundContent\"></nz-embed-empty>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</ng-template>\r\n",
                    animations: [slideMotion],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzCascaderComponent; })),
                            multi: true
                        },
                        NzCascaderService
                    ],
                    host: {
                        '[attr.tabIndex]': '"0"',
                        '[class.ant-cascader-lg]': 'nzSize === "large"',
                        '[class.ant-cascader-sm]': 'nzSize === "small"',
                        '[class.ant-cascader-picker-disabled]': 'nzDisabled',
                        '[class.ant-cascader-picker-open]': 'menuVisible',
                        '[class.ant-cascader-picker-with-value]': '!!inputValue',
                        '[class.ant-cascader-focused]': 'isFocused'
                    },
                    styles: ["\n      .ant-cascader-menus {\n        margin-top: 4px;\n        margin-bottom: 4px;\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzCascaderComponent.ctorParameters = function () { return [
        { type: NzCascaderService },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzCascaderComponent.propDecorators = {
        input: [{ type: ViewChild, args: ['input',] }],
        menu: [{ type: ViewChild, args: ['menu',] }],
        overlay: [{ type: ViewChild, args: [CdkConnectedOverlay,] }],
        cascaderItems: [{ type: ViewChildren, args: [NzCascaderOptionComponent,] }],
        nzShowInput: [{ type: Input }],
        nzShowArrow: [{ type: Input }],
        nzAllowClear: [{ type: Input }],
        nzAutoFocus: [{ type: Input }],
        nzChangeOnSelect: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzColumnClassName: [{ type: Input }],
        nzExpandTrigger: [{ type: Input }],
        nzValueProperty: [{ type: Input }],
        nzLabelRender: [{ type: Input }],
        nzLabelProperty: [{ type: Input }],
        nzNotFoundContent: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzShowSearch: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzMenuClassName: [{ type: Input }],
        nzMenuStyle: [{ type: Input }],
        nzMouseEnterDelay: [{ type: Input }],
        nzMouseLeaveDelay: [{ type: Input }],
        nzTriggerAction: [{ type: Input }],
        nzChangeOn: [{ type: Input }],
        nzLoadData: [{ type: Input }],
        nzOptions: [{ type: Input }],
        nzSelectionChange: [{ type: Output }],
        nzSelect: [{ type: Output }],
        nzClear: [{ type: Output }],
        nzVisibleChange: [{ type: Output }],
        nzChange: [{ type: Output }],
        onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
        onTriggerClick: [{ type: HostListener, args: ['click',] }],
        onTriggerMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
        onTriggerMouseLeave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzShowInput", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzShowArrow", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzAllowClear", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzAutoFocus", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzChangeOnSelect", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzDisabled", void 0);
    return NzCascaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzCascaderModule = /** @class */ (function () {
    function NzCascaderModule() {
    }
    NzCascaderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        OverlayModule,
                        NzInputModule,
                        NzIconModule,
                        NzEmptyModule,
                        NzOverlayModule,
                        NzNoAnimationModule
                    ],
                    declarations: [NzCascaderComponent, NzCascaderOptionComponent],
                    exports: [NzCascaderComponent]
                },] }
    ];
    return NzCascaderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { isShowSearchObject, isChildOption, isParentOption, NzCascaderComponent, NzCascaderModule, NzCascaderService, NzCascaderOptionComponent };

//# sourceMappingURL=ng-zorro-antd-cascader.js.map