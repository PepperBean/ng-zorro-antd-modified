/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { arraysEqual } from 'ng-zorro-antd/core';
import { isShowSearchObject } from './nz-cascader-definitions';
import { isChildOption, isParentOption } from './nz-cascader-utils';
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
                    _this.selectedOptions = tslib_1.__spread(_this.activatedOptions);
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
        this.selectedOptions = tslib_1.__spread(option.path);
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
            _this.columns = tslib_1.__spread(_this.columnsSnapshot);
            _this.activatedOptions = tslib_1.__spread(_this.selectedOptions);
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
            this.activatedOptionsSnapshot = tslib_1.__spread(this.activatedOptions);
            this.activatedOptions = [];
            this.selectedOptions = [];
            this.$redraw.next();
        }
        else {
            // User quit searching mode without selecting an option.
            this.activatedOptions = tslib_1.__spread(this.activatedOptionsSnapshot);
            this.selectedOptions = tslib_1.__spread(this.activatedOptions);
            this.columns = tslib_1.__spread(this.columnsSnapshot);
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
            this.selectedOptions = tslib_1.__spread(this.activatedOptions);
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
export { NzCascaderService };
if (false) {
    /**
     * Activated options in each column.
     * @type {?}
     */
    NzCascaderService.prototype.activatedOptions;
    /**
     * An array to store cascader items arranged in different layers.
     * @type {?}
     */
    NzCascaderService.prototype.columns;
    /**
     * If user has entered searching mode.
     * @type {?}
     */
    NzCascaderService.prototype.inSearchingMode;
    /**
     * Selected options would be output to user.
     * @type {?}
     */
    NzCascaderService.prototype.selectedOptions;
    /** @type {?} */
    NzCascaderService.prototype.values;
    /** @type {?} */
    NzCascaderService.prototype.$loading;
    /**
     * Emit an event to notify cascader it needs to redraw because activated or
     * selected options are changed.
     * @type {?}
     */
    NzCascaderService.prototype.$redraw;
    /**
     * Emit an event when an option gets selected.
     * Emit true if a leaf options is selected.
     * @type {?}
     */
    NzCascaderService.prototype.$optionSelected;
    /**
     * Emit an event to notify cascader it needs to quit searching mode.
     * Only emit when user do select a searching option.
     * @type {?}
     */
    NzCascaderService.prototype.$quitSearching;
    /**
     * To hold columns before entering searching mode.
     * @type {?}
     * @private
     */
    NzCascaderService.prototype.columnsSnapshot;
    /**
     * To hold activated options before entering searching mode.
     * @type {?}
     * @private
     */
    NzCascaderService.prototype.activatedOptionsSnapshot;
    /**
     * @type {?}
     * @private
     */
    NzCascaderService.prototype.cascaderComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FzY2FkZXIvIiwic291cmNlcyI6WyJuei1jYXNjYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWpELE9BQU8sRUFDTCxrQkFBa0IsRUFLbkIsTUFBTSwyQkFBMkIsQ0FBQztBQUNuQyxPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBS3BFO0lBQUE7Ozs7UUFHRSxxQkFBZ0IsR0FBcUIsRUFBRSxDQUFDOzs7O1FBR3hDLFlBQU8sR0FBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7OztRQUduQyxvQkFBZSxHQUFHLEtBQUssQ0FBQzs7OztRQUd4QixvQkFBZSxHQUFxQixFQUFFLENBQUM7UUFFdkMsV0FBTSxHQUFVLEVBQUUsQ0FBQyxDQUFDLDZCQUE2Qjs7UUFFeEMsYUFBUSxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDOzs7OztRQU0vQyxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQzs7Ozs7UUFNOUIsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFHM0IsQ0FBQzs7Ozs7UUFNSCxtQkFBYyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7Ozs7UUFHdEMsb0JBQWUsR0FBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7OztRQUczQyw2QkFBd0IsR0FBcUIsRUFBRSxDQUFDO0lBdVgxRCxDQUFDO0lBbFhDLHNCQUFJLHdDQUFTO1FBRGIsa0RBQWtEOzs7OztRQUNsRDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FB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LENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUM5QyxJQUFJLFlBQVksRUFBRTs7Z0JBQ1YsR0FBQyxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUN4RSxPQUFPLG1CQUFBLFlBQVksQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxHQUFDLEtBQUssS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBNUIsQ0FBNEIsRUFBQyxFQUFDLENBQUM7U0FDOUQ7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRU8sNENBQWdCOzs7O0lBQXhCO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBdEIsQ0FBc0IsRUFBQyxDQUFDO0lBQ3RFLENBQUM7O2dCQWphRixVQUFVOztJQWthWCx3QkFBQztDQUFBLEFBbGFELElBa2FDO1NBamFZLGlCQUFpQjs7Ozs7O0lBRTVCLDZDQUF3Qzs7Ozs7SUFHeEMsb0NBQW1DOzs7OztJQUduQyw0Q0FBd0I7Ozs7O0lBR3hCLDRDQUF1Qzs7SUFFdkMsbUNBQW1COztJQUVuQixxQ0FBd0Q7Ozs7OztJQU14RCxvQ0FBdUM7Ozs7OztJQU12Qyw0Q0FHWTs7Ozs7O0lBTVosMkNBQThDOzs7Ozs7SUFHOUMsNENBQW1EOzs7Ozs7SUFHbkQscURBQXdEOzs7OztJQUV4RCw4Q0FBdUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IGFycmF5c0VxdWFsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNTaG93U2VhcmNoT2JqZWN0LFxyXG4gIENhc2NhZGVyT3B0aW9uLFxyXG4gIENhc2NhZGVyU2VhcmNoT3B0aW9uLFxyXG4gIE56Q2FzY2FkZXJDb21wb25lbnRBc1NvdXJjZSxcclxuICBOekNhc2NhZGVyRmlsdGVyXHJcbn0gZnJvbSAnLi9uei1jYXNjYWRlci1kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IGlzQ2hpbGRPcHRpb24sIGlzUGFyZW50T3B0aW9uIH0gZnJvbSAnLi9uei1jYXNjYWRlci11dGlscyc7XHJcblxyXG4vKipcclxuICogQWxsIGRhdGEgaXMgc3RvcmVkIGFuZCBwYXJzZWQgaW4gTnpDYXNjYWRlclNlcnZpY2UuXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOekNhc2NhZGVyU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgLyoqIEFjdGl2YXRlZCBvcHRpb25zIGluIGVhY2ggY29sdW1uLiAqL1xyXG4gIGFjdGl2YXRlZE9wdGlvbnM6IENhc2NhZGVyT3B0aW9uW10gPSBbXTtcclxuXHJcbiAgLyoqIEFuIGFycmF5IHRvIHN0b3JlIGNhc2NhZGVyIGl0ZW1zIGFycmFuZ2VkIGluIGRpZmZlcmVudCBsYXllcnMuICovXHJcbiAgY29sdW1uczogQ2FzY2FkZXJPcHRpb25bXVtdID0gW1tdXTtcclxuXHJcbiAgLyoqIElmIHVzZXIgaGFzIGVudGVyZWQgc2VhcmNoaW5nIG1vZGUuICovXHJcbiAgaW5TZWFyY2hpbmdNb2RlID0gZmFsc2U7XHJcblxyXG4gIC8qKiBTZWxlY3RlZCBvcHRpb25zIHdvdWxkIGJlIG91dHB1dCB0byB1c2VyLiAqL1xyXG4gIHNlbGVjdGVkT3B0aW9uczogQ2FzY2FkZXJPcHRpb25bXSA9IFtdO1xyXG5cclxuICB2YWx1ZXM6IGFueVtdID0gW107IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcblxyXG4gIHJlYWRvbmx5ICRsb2FkaW5nID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXQgYW4gZXZlbnQgdG8gbm90aWZ5IGNhc2NhZGVyIGl0IG5lZWRzIHRvIHJlZHJhdyBiZWNhdXNlIGFjdGl2YXRlZCBvclxyXG4gICAqIHNlbGVjdGVkIG9wdGlvbnMgYXJlIGNoYW5nZWQuXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgJHJlZHJhdyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXQgYW4gZXZlbnQgd2hlbiBhbiBvcHRpb24gZ2V0cyBzZWxlY3RlZC5cclxuICAgKiBFbWl0IHRydWUgaWYgYSBsZWFmIG9wdGlvbnMgaXMgc2VsZWN0ZWQuXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgJG9wdGlvblNlbGVjdGVkID0gbmV3IFN1YmplY3Q8e1xyXG4gICAgb3B0aW9uOiBDYXNjYWRlck9wdGlvbjtcclxuICAgIGluZGV4OiBudW1iZXI7XHJcbiAgfSB8IG51bGw+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXQgYW4gZXZlbnQgdG8gbm90aWZ5IGNhc2NhZGVyIGl0IG5lZWRzIHRvIHF1aXQgc2VhcmNoaW5nIG1vZGUuXHJcbiAgICogT25seSBlbWl0IHdoZW4gdXNlciBkbyBzZWxlY3QgYSBzZWFyY2hpbmcgb3B0aW9uLlxyXG4gICAqL1xyXG4gIHJlYWRvbmx5ICRxdWl0U2VhcmNoaW5nID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgLyoqIFRvIGhvbGQgY29sdW1ucyBiZWZvcmUgZW50ZXJpbmcgc2VhcmNoaW5nIG1vZGUuICovXHJcbiAgcHJpdmF0ZSBjb2x1bW5zU25hcHNob3Q6IENhc2NhZGVyT3B0aW9uW11bXSA9IFtbXV07XHJcblxyXG4gIC8qKiBUbyBob2xkIGFjdGl2YXRlZCBvcHRpb25zIGJlZm9yZSBlbnRlcmluZyBzZWFyY2hpbmcgbW9kZS4gKi9cclxuICBwcml2YXRlIGFjdGl2YXRlZE9wdGlvbnNTbmFwc2hvdDogQ2FzY2FkZXJPcHRpb25bXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGNhc2NhZGVyQ29tcG9uZW50OiBOekNhc2NhZGVyQ29tcG9uZW50QXNTb3VyY2U7XHJcblxyXG4gIC8qKiBSZXR1cm4gY2FzY2FkZXIgb3B0aW9ucyBpbiB0aGUgZmlyc3QgbGF5ZXIuICovXHJcbiAgZ2V0IG56T3B0aW9ucygpOiBDYXNjYWRlck9wdGlvbltdIHtcclxuICAgIHJldHVybiB0aGlzLmNvbHVtbnNbMF07XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuJHJlZHJhdy5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy4kcXVpdFNlYXJjaGluZy5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy4kb3B0aW9uU2VsZWN0ZWQuY29tcGxldGUoKTtcclxuICAgIHRoaXMuJGxvYWRpbmcuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1ha2Ugc3VyZSB0aGF0IHZhbHVlIG1hdGNoZXMgd2hhdCBpcyBkaXNwbGF5ZWQgaW4gdGhlIGRyb3Bkb3duLlxyXG4gICAqL1xyXG4gIHN5bmNPcHRpb25zKGZpcnN0OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzO1xyXG4gICAgY29uc3QgaGFzVmFsdWUgPSB2YWx1ZXMgJiYgdmFsdWVzLmxlbmd0aDtcclxuICAgIGNvbnN0IGxhc3RDb2x1bW5JbmRleCA9IHZhbHVlcy5sZW5ndGggLSAxO1xyXG4gICAgY29uc3QgaW5pdENvbHVtbldpdGhJbmRleCA9IChjb2x1bW5JbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFjdGl2YXRlZE9wdGlvblNldHRlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB2YWx1ZXNbY29sdW1uSW5kZXhdO1xyXG5cclxuICAgICAgICBpZiAoIWN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9XHJcbiAgICAgICAgICB0aGlzLmZpbmRPcHRpb25XaXRoVmFsdWUoY29sdW1uSW5kZXgsIHZhbHVlc1tjb2x1bW5JbmRleF0pIHx8XHJcbiAgICAgICAgICAodHlwZW9mIGN1cnJlbnRWYWx1ZSA9PT0gJ29iamVjdCdcclxuICAgICAgICAgICAgPyBjdXJyZW50VmFsdWVcclxuICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICBbYCR7dGhpcy5jYXNjYWRlckNvbXBvbmVudC5uelZhbHVlUHJvcGVydHl9YF06IGN1cnJlbnRWYWx1ZSxcclxuICAgICAgICAgICAgICAgIFtgJHt0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56TGFiZWxQcm9wZXJ0eX1gXTogY3VycmVudFZhbHVlXHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0T3B0aW9uQWN0aXZhdGVkKG9wdGlvbiwgY29sdW1uSW5kZXgsIGZhbHNlLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIGlmIChjb2x1bW5JbmRleCA8IGxhc3RDb2x1bW5JbmRleCkge1xyXG4gICAgICAgICAgaW5pdENvbHVtbldpdGhJbmRleChjb2x1bW5JbmRleCArIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmRyb3BCZWhpbmRDb2x1bW5zKGNvbHVtbkluZGV4KTtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gWy4uLnRoaXMuYWN0aXZhdGVkT3B0aW9uc107XHJcbiAgICAgICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmlzTG9hZGVkKGNvbHVtbkluZGV4KSB8fCAhdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekxvYWREYXRhKSB7XHJcbiAgICAgICAgYWN0aXZhdGVkT3B0aW9uU2V0dGVyKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zW2NvbHVtbkluZGV4IC0gMV0gfHwge307XHJcbiAgICAgICAgdGhpcy5sb2FkQ2hpbGRyZW4ob3B0aW9uLCBjb2x1bW5JbmRleCAtIDEsIGFjdGl2YXRlZE9wdGlvblNldHRlcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gW107XHJcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xyXG5cclxuICAgIGlmIChmaXJzdCAmJiB0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56TG9hZERhdGEgJiYgIWhhc1ZhbHVlKSB7XHJcbiAgICAgIC8vIFNob3VsZCBhbHNvIG5vdGlmeSB0aGUgY29tcG9uZW50IHRoYXQgdmFsdWUgY2hhbmdlcy4gRml4ICMzNDgwLlxyXG4gICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbml0Q29sdW1uV2l0aEluZGV4KDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCBjYXNjYWRlciBjb21wb25lbnQgc28gdGhpcyBzZXJ2aWNlIGNvdWxkIHVzZSBpbnB1dHMuXHJcbiAgICovXHJcbiAgd2l0aENvbXBvbmVudChjYXNjYWRlckNvbXBvbmVudDogTnpDYXNjYWRlckNvbXBvbmVudEFzU291cmNlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhc2NhZGVyQ29tcG9uZW50ID0gY2FzY2FkZXJDb21wb25lbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldCBhbGwgb3B0aW9ucy4gUmVidWlsZCBzZWFyY2hpbmcgb3B0aW9ucyBpZiBpbiBzZWFyY2hpbmcgbW9kZS5cclxuICAgKi9cclxuICB3aXRoT3B0aW9ucyhvcHRpb25zOiBDYXNjYWRlck9wdGlvbltdIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb2x1bW5zU25hcHNob3QgPSB0aGlzLmNvbHVtbnMgPSBvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID8gW29wdGlvbnNdIDogW107XHJcblxyXG4gICAgaWYgKHRoaXMuaW5TZWFyY2hpbmdNb2RlKSB7XHJcbiAgICAgIHRoaXMucHJlcGFyZVNlYXJjaE9wdGlvbnModGhpcy5jYXNjYWRlckNvbXBvbmVudC5pbnB1dFZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5jb2x1bW5zLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnN5bmNPcHRpb25zKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcnkgdG8gc2V0IGEgb3B0aW9uIGFzIGFjdGl2YXRlZC5cclxuICAgKiBAcGFyYW0gb3B0aW9uIENhc2NhZGVyIG9wdGlvblxyXG4gICAqIEBwYXJhbSBjb2x1bW5JbmRleCBPZiB3aGljaCBjb2x1bW4gdGhpcyBvcHRpb24gaXMgaW5cclxuICAgKiBAcGFyYW0gc2VsZWN0IFNlbGVjdFxyXG4gICAqIEBwYXJhbSBsb2FkaW5nQ2hpbGRyZW4gVHJ5IHRvIGxvYWQgY2hpbGRyZW4gYXN5bmNocm9ub3VzbHkuXHJcbiAgICovXHJcbiAgc2V0T3B0aW9uQWN0aXZhdGVkKFxyXG4gICAgb3B0aW9uOiBDYXNjYWRlck9wdGlvbixcclxuICAgIGNvbHVtbkluZGV4OiBudW1iZXIsXHJcbiAgICBzZWxlY3Q6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgIGxvYWRpbmdDaGlsZHJlbjogYm9vbGVhbiA9IHRydWVcclxuICApOiB2b2lkIHtcclxuICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uc1tjb2x1bW5JbmRleF0gPSBvcHRpb247XHJcbiAgICB0aGlzLnRyYWNrQW5jZXN0b3JBY3RpdmF0ZWRPcHRpb25zKGNvbHVtbkluZGV4KTtcclxuICAgIHRoaXMuZHJvcEJlaGluZEFjdGl2YXRlZE9wdGlvbnMoY29sdW1uSW5kZXgpO1xyXG5cclxuICAgIGNvbnN0IGlzUGFyZW50ID0gaXNQYXJlbnRPcHRpb24ob3B0aW9uKTtcclxuXHJcbiAgICBpZiAoaXNQYXJlbnQpIHtcclxuICAgICAgLy8gUGFyZW50IG9wdGlvbiB0aGF0IGhhcyBjaGlsZHJlbi5cclxuICAgICAgdGhpcy5zZXRDb2x1bW5EYXRhKG9wdGlvbi5jaGlsZHJlbiEsIGNvbHVtbkluZGV4ICsgMSwgb3B0aW9uKTtcclxuICAgIH0gZWxzZSBpZiAoIW9wdGlvbi5pc0xlYWYgJiYgbG9hZGluZ0NoaWxkcmVuKSB7XHJcbiAgICAgIC8vIFBhcmVudCBvcHRpb24gdGhhdCBzaG91bGQgdHJ5IHRvIGxvYWQgY2hpbGRyZW4gYXN5bmNocm9ub3VzbHkuXHJcbiAgICAgIHRoaXMubG9hZENoaWxkcmVuKG9wdGlvbiwgY29sdW1uSW5kZXgpO1xyXG4gICAgfSBlbHNlIGlmIChvcHRpb24uaXNMZWFmKSB7XHJcbiAgICAgIC8vIExlYWYgb3B0aW9uLlxyXG4gICAgICB0aGlzLmRyb3BCZWhpbmRDb2x1bW5zKGNvbHVtbkluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBY3R1YWxseSBwZXJmb3JtIHNlbGVjdGlvbiB0byBtYWtlIGFuIG9wdGlvbnMgbm90IG9ubHkgYWN0aXZhdGVkIGJ1dCBhbHNvIHNlbGVjdGVkLlxyXG4gICAgaWYgKHNlbGVjdCkge1xyXG4gICAgICB0aGlzLnNldE9wdGlvblNlbGVjdGVkKG9wdGlvbiwgY29sdW1uSW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgYSBzZWFyY2hpbmcgb3B0aW9uIGFzIGFjdGl2YXRlZCwgZmluaXNoaW5nIHVwIHRoaW5ncy5cclxuICAgKiBAcGFyYW0gb3B0aW9uXHJcbiAgICovXHJcbiAgc2V0U2VhcmNoT3B0aW9uU2VsZWN0ZWQob3B0aW9uOiBDYXNjYWRlclNlYXJjaE9wdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gW29wdGlvbl07XHJcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFsuLi5vcHRpb24ucGF0aF07XHJcbiAgICB0aGlzLnByZXBhcmVFbWl0VmFsdWUoKTtcclxuICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XHJcbiAgICB0aGlzLiRvcHRpb25TZWxlY3RlZC5uZXh0KHsgb3B0aW9uLCBpbmRleDogMCB9KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgLy8gUmVzZXQgZGF0YSBhbmQgdGVsbCBVSSBvbmx5IHRvIHJlbW92ZSBpbnB1dCBhbmQgcmVzZXQgZHJvcGRvd24gd2lkdGggc3R5bGUuXHJcbiAgICAgIHRoaXMuJHF1aXRTZWFyY2hpbmcubmV4dCgpO1xyXG4gICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gICAgICB0aGlzLmluU2VhcmNoaW5nTW9kZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNvbHVtbnMgPSBbLi4udGhpcy5jb2x1bW5zU25hcHNob3RdO1xyXG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbLi4udGhpcy5zZWxlY3RlZE9wdGlvbnNdO1xyXG4gICAgfSwgMjAwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbHRlciBjYXNjYWRlciBvcHRpb25zIHRvIHJlc2V0IGBjb2x1bW5zYC5cclxuICAgKiBAcGFyYW0gc2VhcmNoVmFsdWUgVGhlIHN0cmluZyB1c2VyIHdhbnRzIHRvIHNlYXJjaC5cclxuICAgKi9cclxuICBwcmVwYXJlU2VhcmNoT3B0aW9ucyhzZWFyY2hWYWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBDYXNjYWRlck9wdGlvbltdID0gW107IC8vIFNlYXJjaCByZXN1bHRzIG9ubHkgaGF2ZSBvbmUgbGF5ZXIuXHJcbiAgICBjb25zdCBwYXRoOiBDYXNjYWRlck9wdGlvbltdID0gW107XHJcbiAgICBjb25zdCBkZWZhdWx0RmlsdGVyOiBOekNhc2NhZGVyRmlsdGVyID0gKGksIHApID0+IHtcclxuICAgICAgcmV0dXJuIHAuc29tZShvID0+IHtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMuZ2V0T3B0aW9uTGFiZWwobyk7XHJcbiAgICAgICAgcmV0dXJuICEhbGFiZWwgJiYgbGFiZWwuaW5kZXhPZihpKSAhPT0gLTE7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHNob3dTZWFyY2ggPSB0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56U2hvd1NlYXJjaDtcclxuICAgIGNvbnN0IGZpbHRlciA9IGlzU2hvd1NlYXJjaE9iamVjdChzaG93U2VhcmNoKSAmJiBzaG93U2VhcmNoLmZpbHRlciA/IHNob3dTZWFyY2guZmlsdGVyIDogZGVmYXVsdEZpbHRlcjtcclxuICAgIGNvbnN0IHNvcnRlciA9IGlzU2hvd1NlYXJjaE9iamVjdChzaG93U2VhcmNoKSAmJiBzaG93U2VhcmNoLnNvcnRlciA/IHNob3dTZWFyY2guc29ydGVyIDogbnVsbDtcclxuICAgIGNvbnN0IGxvb3BDaGlsZCA9IChub2RlOiBDYXNjYWRlck9wdGlvbiwgZm9yY2VEaXNhYmxlZCA9IGZhbHNlKSA9PiB7XHJcbiAgICAgIHBhdGgucHVzaChub2RlKTtcclxuICAgICAgY29uc3QgY1BhdGggPSBBcnJheS5mcm9tKHBhdGgpO1xyXG4gICAgICBpZiAoZmlsdGVyKHNlYXJjaFZhbHVlLCBjUGF0aCkpIHtcclxuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IGZvcmNlRGlzYWJsZWQgfHwgbm9kZS5kaXNhYmxlZDtcclxuICAgICAgICBjb25zdCBvcHRpb246IENhc2NhZGVyU2VhcmNoT3B0aW9uID0ge1xyXG4gICAgICAgICAgZGlzYWJsZWQsXHJcbiAgICAgICAgICBpc0xlYWY6IHRydWUsXHJcbiAgICAgICAgICBwYXRoOiBjUGF0aCxcclxuICAgICAgICAgIFt0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56TGFiZWxQcm9wZXJ0eV06IGNQYXRoLm1hcChwID0+IHRoaXMuZ2V0T3B0aW9uTGFiZWwocCkpLmpvaW4oJyAvICcpXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXN1bHRzLnB1c2gob3B0aW9uKTtcclxuICAgICAgfVxyXG4gICAgICBwYXRoLnBvcCgpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvb3BQYXJlbnQgPSAobm9kZTogQ2FzY2FkZXJPcHRpb24sIGZvcmNlRGlzYWJsZWQgPSBmYWxzZSkgPT4ge1xyXG4gICAgICBjb25zdCBkaXNhYmxlZCA9IGZvcmNlRGlzYWJsZWQgfHwgbm9kZS5kaXNhYmxlZDtcclxuICAgICAgcGF0aC5wdXNoKG5vZGUpO1xyXG4gICAgICBub2RlLmNoaWxkcmVuIS5mb3JFYWNoKHNOb2RlID0+IHtcclxuICAgICAgICBpZiAoIXNOb2RlLnBhcmVudCkge1xyXG4gICAgICAgICAgc05vZGUucGFyZW50ID0gbm9kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzTm9kZS5pc0xlYWYpIHtcclxuICAgICAgICAgIGxvb3BQYXJlbnQoc05vZGUsIGRpc2FibGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNOb2RlLmlzTGVhZiB8fCAhc05vZGUuY2hpbGRyZW4gfHwgIXNOb2RlLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgbG9vcENoaWxkKHNOb2RlLCBkaXNhYmxlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcGF0aC5wb3AoKTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCF0aGlzLmNvbHVtbnNTbmFwc2hvdC5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5jb2x1bW5zID0gW1tdXTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29sdW1uc1NuYXBzaG90WzBdLmZvckVhY2gobyA9PiAoaXNDaGlsZE9wdGlvbihvKSA/IGxvb3BDaGlsZChvKSA6IGxvb3BQYXJlbnQobykpKTtcclxuXHJcbiAgICBpZiAoc29ydGVyKSB7XHJcbiAgICAgIHJlc3VsdHMuc29ydCgoYSwgYikgPT4gc29ydGVyKGEucGF0aCwgYi5wYXRoLCBzZWFyY2hWYWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29sdW1ucyA9IFtyZXN1bHRzXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZSBzZWFyY2hpbmcgbW9kZSBieSBVSS4gSXQgZGVhbHMgd2l0aCB0aGluZ3Mgbm90IGRpcmVjdGx5IHJlbGF0ZWQgdG8gVUkuXHJcbiAgICogQHBhcmFtIHRvU2VhcmNoaW5nIElmIHRoaXMgY2FzY2FkZXIgaXMgZW50ZXJpbmcgc2VhcmNoaW5nIG1vZGVcclxuICAgKi9cclxuICB0b2dnbGVTZWFyY2hpbmdNb2RlKHRvU2VhcmNoaW5nOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmluU2VhcmNoaW5nTW9kZSA9IHRvU2VhcmNoaW5nO1xyXG5cclxuICAgIGlmICh0b1NlYXJjaGluZykge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnNTbmFwc2hvdCA9IFsuLi50aGlzLmFjdGl2YXRlZE9wdGlvbnNdO1xyXG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbXTtcclxuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcclxuICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFVzZXIgcXVpdCBzZWFyY2hpbmcgbW9kZSB3aXRob3V0IHNlbGVjdGluZyBhbiBvcHRpb24uXHJcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFsuLi50aGlzLmFjdGl2YXRlZE9wdGlvbnNTbmFwc2hvdF07XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gWy4uLnRoaXMuYWN0aXZhdGVkT3B0aW9uc107XHJcbiAgICAgIHRoaXMuY29sdW1ucyA9IFsuLi50aGlzLmNvbHVtbnNTbmFwc2hvdF07XHJcbiAgICAgIHRoaXMuc3luY09wdGlvbnMoKTtcclxuICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldE9wdGlvblNlbGVjdGVkKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNoYW5nZU9uID0gdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekNoYW5nZU9uO1xyXG4gICAgY29uc3Qgc2hvdWxkUGVyZm9ybVNlbGVjdGlvbiA9IChvOiBDYXNjYWRlck9wdGlvbiwgaTogbnVtYmVyKTogYm9vbGVhbiA9PiB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgY2hhbmdlT24gPT09ICdmdW5jdGlvbicgPyBjaGFuZ2VPbihvLCBpKSA6IGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAob3B0aW9uLmlzTGVhZiB8fCB0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56Q2hhbmdlT25TZWxlY3QgfHwgc2hvdWxkUGVyZm9ybVNlbGVjdGlvbihvcHRpb24sIGluZGV4KSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFsuLi50aGlzLmFjdGl2YXRlZE9wdGlvbnNdO1xyXG4gICAgICB0aGlzLnByZXBhcmVFbWl0VmFsdWUoKTtcclxuICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcclxuICAgICAgdGhpcy4kb3B0aW9uU2VsZWN0ZWQubmV4dCh7IG9wdGlvbiwgaW5kZXggfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhciBzZWxlY3RlZCBvcHRpb25zLlxyXG4gICAqL1xyXG4gIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZXMgPSBbXTtcclxuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XHJcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbXTtcclxuICAgIHRoaXMuZHJvcEJlaGluZENvbHVtbnMoMCk7XHJcbiAgICB0aGlzLnByZXBhcmVFbWl0VmFsdWUoKTtcclxuICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XHJcbiAgICB0aGlzLiRvcHRpb25TZWxlY3RlZC5uZXh0KG51bGwpO1xyXG4gIH1cclxuXHJcbiAgZ2V0T3B0aW9uTGFiZWwobzogQ2FzY2FkZXJPcHRpb24pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIG9bdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekxhYmVsUHJvcGVydHkgfHwgJ2xhYmVsJ10gYXMgc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGdldE9wdGlvblZhbHVlKG86IENhc2NhZGVyT3B0aW9uKTogYW55IHtcclxuICAgIHJldHVybiBvW3RoaXMuY2FzY2FkZXJDb21wb25lbnQubnpWYWx1ZVByb3BlcnR5IHx8ICd2YWx1ZSddO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJ5IHRvIGluc2VydCBvcHRpb25zIGludG8gYSBjb2x1bW4uXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyB0byBpbnNlcnRcclxuICAgKiBAcGFyYW0gY29sdW1uSW5kZXggUG9zaXRpb25cclxuICAgKi9cclxuICBwcml2YXRlIHNldENvbHVtbkRhdGEob3B0aW9uczogQ2FzY2FkZXJPcHRpb25bXSwgY29sdW1uSW5kZXg6IG51bWJlciwgcGFyZW50OiBDYXNjYWRlck9wdGlvbik6IHZvaWQge1xyXG4gICAgY29uc3QgZXhpc3RpbmdPcHRpb25zID0gdGhpcy5jb2x1bW5zW2NvbHVtbkluZGV4XTtcclxuICAgIGlmICghYXJyYXlzRXF1YWwoZXhpc3RpbmdPcHRpb25zLCBvcHRpb25zKSkge1xyXG4gICAgICBvcHRpb25zLmZvckVhY2gobyA9PiAoby5wYXJlbnQgPSBwYXJlbnQpKTtcclxuICAgICAgdGhpcy5jb2x1bW5zW2NvbHVtbkluZGV4XSA9IG9wdGlvbnM7XHJcbiAgICAgIHRoaXMuZHJvcEJlaGluZENvbHVtbnMoY29sdW1uSW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IGFsbCBhbmNlc3RvciBvcHRpb25zIGFzIGFjdGl2YXRlZC5cclxuICAgKi9cclxuICBwcml2YXRlIHRyYWNrQW5jZXN0b3JBY3RpdmF0ZWRPcHRpb25zKHN0YXJ0SW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICBpZiAoIXRoaXMuYWN0aXZhdGVkT3B0aW9uc1tpXSkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uc1tpXSA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1tpICsgMV0ucGFyZW50ITtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcm9wQmVoaW5kQWN0aXZhdGVkT3B0aW9ucyhsYXN0UmVzZXJ2ZUluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IHRoaXMuYWN0aXZhdGVkT3B0aW9ucy5zcGxpY2UoMCwgbGFzdFJlc2VydmVJbmRleCArIDEpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcm9wQmVoaW5kQ29sdW1ucyhsYXN0UmVzZXJ2ZUluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChsYXN0UmVzZXJ2ZUluZGV4IDwgdGhpcy5jb2x1bW5zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgdGhpcy5jb2x1bW5zID0gdGhpcy5jb2x1bW5zLnNsaWNlKDAsIGxhc3RSZXNlcnZlSW5kZXggKyAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvYWQgY2hpbGRyZW4gb2YgYW4gb3B0aW9uIGFzeW5jaHJvbm91c2x5LlxyXG4gICAqL1xyXG4gIGxvYWRDaGlsZHJlbihcclxuICAgIG9wdGlvbjogQ2FzY2FkZXJPcHRpb24gfCBhbnksIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgICBjb2x1bW5JbmRleDogbnVtYmVyLFxyXG4gICAgc3VjY2Vzcz86IFZvaWRGdW5jdGlvbixcclxuICAgIGZhaWx1cmU/OiBWb2lkRnVuY3Rpb25cclxuICApOiB2b2lkIHtcclxuICAgIGNvbnN0IGxvYWRGbiA9IHRoaXMuY2FzY2FkZXJDb21wb25lbnQubnpMb2FkRGF0YTtcclxuXHJcbiAgICBpZiAobG9hZEZuKSB7XHJcbiAgICAgIC8vIElmIHRoZXJlIGlzbid0IGFueSBvcHRpb24gaW4gY29sdW1ucy5cclxuICAgICAgdGhpcy4kbG9hZGluZy5uZXh0KGNvbHVtbkluZGV4IDwgMCk7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBvcHRpb24ubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxvYWRGbihvcHRpb24sIGNvbHVtbkluZGV4KS50aGVuKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIG9wdGlvbi5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAob3B0aW9uLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29sdW1uRGF0YShvcHRpb24uY2hpbGRyZW4sIGNvbHVtbkluZGV4ICsgMSwgb3B0aW9uKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3MoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuJGxvYWRpbmcubmV4dChmYWxzZSk7XHJcbiAgICAgICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgb3B0aW9uLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIG9wdGlvbi5pc0xlYWYgPSB0cnVlO1xyXG4gICAgICAgICAgaWYgKGZhaWx1cmUpIHtcclxuICAgICAgICAgICAgZmFpbHVyZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzTG9hZGVkKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbHVtbnNbaW5kZXhdICYmIHRoaXMuY29sdW1uc1tpbmRleF0ubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmQgYSBvcHRpb24gdGhhdCBoYXMgYSBnaXZlbiB2YWx1ZSBpbiBhIGdpdmVuIGNvbHVtbi5cclxuICAgKi9cclxuICBwcml2YXRlIGZpbmRPcHRpb25XaXRoVmFsdWUoXHJcbiAgICBjb2x1bW5JbmRleDogbnVtYmVyLFxyXG4gICAgdmFsdWU6IENhc2NhZGVyT3B0aW9uIHwgYW55IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgKTogQ2FzY2FkZXJPcHRpb24gfCBudWxsIHtcclxuICAgIGNvbnN0IHRhcmdldENvbHVtbiA9IHRoaXMuY29sdW1uc1tjb2x1bW5JbmRleF07XHJcbiAgICBpZiAodGFyZ2V0Q29sdW1uKSB7XHJcbiAgICAgIGNvbnN0IHYgPSB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdGhpcy5nZXRPcHRpb25WYWx1ZSh2YWx1ZSkgOiB2YWx1ZTtcclxuICAgICAgcmV0dXJuIHRhcmdldENvbHVtbi5maW5kKG8gPT4gdiA9PT0gdGhpcy5nZXRPcHRpb25WYWx1ZShvKSkhO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByZXBhcmVFbWl0VmFsdWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlcyA9IHRoaXMuc2VsZWN0ZWRPcHRpb25zLm1hcChvID0+IHRoaXMuZ2V0T3B0aW9uVmFsdWUobykpO1xyXG4gIH1cclxufVxyXG4iXX0=