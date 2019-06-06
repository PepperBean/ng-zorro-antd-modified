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
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { arraysEqual } from 'ng-zorro-antd/core';
import { isShowSearchObject } from './nz-cascader-definitions';
import { isChildOption, isParentOption } from './nz-cascader-utils';
/**
 * All data is stored and parsed in NzCascaderService.
 */
export class NzCascaderService {
    constructor() {
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
    /**
     * Return cascader options in the first layer.
     * @return {?}
     */
    get nzOptions() {
        return this.columns[0];
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.$redraw.complete();
        this.$quitSearching.complete();
        this.$optionSelected.complete();
        this.$loading.complete();
    }
    /**
     * Make sure that value matches what is displayed in the dropdown.
     * @param {?=} first
     * @return {?}
     */
    syncOptions(first = false) {
        /** @type {?} */
        const values = this.values;
        /** @type {?} */
        const hasValue = values && values.length;
        /** @type {?} */
        const lastColumnIndex = values.length - 1;
        /** @type {?} */
        const initColumnWithIndex = (/**
         * @param {?} columnIndex
         * @return {?}
         */
        (columnIndex) => {
            /** @type {?} */
            const activatedOptionSetter = (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const currentValue = values[columnIndex];
                if (!currentValue) {
                    this.$redraw.next();
                    return;
                }
                /** @type {?} */
                const option = this.findOptionWithValue(columnIndex, values[columnIndex]) ||
                    (typeof currentValue === 'object'
                        ? currentValue
                        : {
                            [`${this.cascaderComponent.nzValueProperty}`]: currentValue,
                            [`${this.cascaderComponent.nzLabelProperty}`]: currentValue
                        });
                this.setOptionActivated(option, columnIndex, false, false);
                if (columnIndex < lastColumnIndex) {
                    initColumnWithIndex(columnIndex + 1);
                }
                else {
                    this.dropBehindColumns(columnIndex);
                    this.selectedOptions = [...this.activatedOptions];
                    this.$redraw.next();
                }
            });
            if (this.isLoaded(columnIndex) || !this.cascaderComponent.nzLoadData) {
                activatedOptionSetter();
            }
            else {
                /** @type {?} */
                const option = this.activatedOptions[columnIndex - 1] || {};
                this.loadChildren(option, columnIndex - 1, activatedOptionSetter);
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
    }
    /**
     * Bind cascader component so this service could use inputs.
     * @param {?} cascaderComponent
     * @return {?}
     */
    withComponent(cascaderComponent) {
        this.cascaderComponent = cascaderComponent;
    }
    /**
     * Reset all options. Rebuild searching options if in searching mode.
     * @param {?} options
     * @return {?}
     */
    withOptions(options) {
        this.columnsSnapshot = this.columns = options && options.length ? [options] : [];
        if (this.inSearchingMode) {
            this.prepareSearchOptions(this.cascaderComponent.inputValue);
        }
        else if (this.columns.length) {
            this.syncOptions();
        }
    }
    /**
     * Try to set a option as activated.
     * @param {?} option Cascader option
     * @param {?} columnIndex Of which column this option is in
     * @param {?=} select Select
     * @param {?=} loadingChildren Try to load children asynchronously.
     * @return {?}
     */
    setOptionActivated(option, columnIndex, select = false, loadingChildren = true) {
        if (option.disabled) {
            return;
        }
        this.activatedOptions[columnIndex] = option;
        this.trackAncestorActivatedOptions(columnIndex);
        this.dropBehindActivatedOptions(columnIndex);
        /** @type {?} */
        const isParent = isParentOption(option);
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
    }
    /**
     * Set a searching option as activated, finishing up things.
     * @param {?} option
     * @return {?}
     */
    setSearchOptionSelected(option) {
        this.activatedOptions = [option];
        this.selectedOptions = [...option.path];
        this.prepareEmitValue();
        this.$redraw.next();
        this.$optionSelected.next({ option, index: 0 });
        setTimeout((/**
         * @return {?}
         */
        () => {
            // Reset data and tell UI only to remove input and reset dropdown width style.
            this.$quitSearching.next();
            this.$redraw.next();
            this.inSearchingMode = false;
            this.columns = [...this.columnsSnapshot];
            this.activatedOptions = [...this.selectedOptions];
        }), 200);
    }
    /**
     * Filter cascader options to reset `columns`.
     * @param {?} searchValue The string user wants to search.
     * @return {?}
     */
    prepareSearchOptions(searchValue) {
        /** @type {?} */
        const results = [];
        // Search results only have one layer.
        /** @type {?} */
        const path = [];
        /** @type {?} */
        const defaultFilter = (/**
         * @param {?} i
         * @param {?} p
         * @return {?}
         */
        (i, p) => {
            return p.some((/**
             * @param {?} o
             * @return {?}
             */
            o => {
                /** @type {?} */
                const label = this.getOptionLabel(o);
                return !!label && label.indexOf(i) !== -1;
            }));
        });
        /** @type {?} */
        const showSearch = this.cascaderComponent.nzShowSearch;
        /** @type {?} */
        const filter = isShowSearchObject(showSearch) && showSearch.filter ? showSearch.filter : defaultFilter;
        /** @type {?} */
        const sorter = isShowSearchObject(showSearch) && showSearch.sorter ? showSearch.sorter : null;
        /** @type {?} */
        const loopChild = (/**
         * @param {?} node
         * @param {?=} forceDisabled
         * @return {?}
         */
        (node, forceDisabled = false) => {
            path.push(node);
            /** @type {?} */
            const cPath = Array.from(path);
            if (filter(searchValue, cPath)) {
                /** @type {?} */
                const disabled = forceDisabled || node.disabled;
                /** @type {?} */
                const option = {
                    disabled,
                    isLeaf: true,
                    path: cPath,
                    [this.cascaderComponent.nzLabelProperty]: cPath.map((/**
                     * @param {?} p
                     * @return {?}
                     */
                    p => this.getOptionLabel(p))).join(' / ')
                };
                results.push(option);
            }
            path.pop();
        });
        /** @type {?} */
        const loopParent = (/**
         * @param {?} node
         * @param {?=} forceDisabled
         * @return {?}
         */
        (node, forceDisabled = false) => {
            /** @type {?} */
            const disabled = forceDisabled || node.disabled;
            path.push(node);
            (/** @type {?} */ (node.children)).forEach((/**
             * @param {?} sNode
             * @return {?}
             */
            sNode => {
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
        o => (isChildOption(o) ? loopChild(o) : loopParent(o))));
        if (sorter) {
            results.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => sorter(a.path, b.path, searchValue)));
        }
        this.columns = [results];
    }
    /**
     * Toggle searching mode by UI. It deals with things not directly related to UI.
     * @param {?} toSearching If this cascader is entering searching mode
     * @return {?}
     */
    toggleSearchingMode(toSearching) {
        this.inSearchingMode = toSearching;
        if (toSearching) {
            this.activatedOptionsSnapshot = [...this.activatedOptions];
            this.activatedOptions = [];
            this.selectedOptions = [];
            this.$redraw.next();
        }
        else {
            // User quit searching mode without selecting an option.
            this.activatedOptions = [...this.activatedOptionsSnapshot];
            this.selectedOptions = [...this.activatedOptions];
            this.columns = [...this.columnsSnapshot];
            this.syncOptions();
            this.$redraw.next();
        }
    }
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    setOptionSelected(option, index) {
        /** @type {?} */
        const changeOn = this.cascaderComponent.nzChangeOn;
        /** @type {?} */
        const shouldPerformSelection = (/**
         * @param {?} o
         * @param {?} i
         * @return {?}
         */
        (o, i) => {
            return typeof changeOn === 'function' ? changeOn(o, i) : false;
        });
        if (option.isLeaf || this.cascaderComponent.nzChangeOnSelect || shouldPerformSelection(option, index)) {
            this.selectedOptions = [...this.activatedOptions];
            this.prepareEmitValue();
            this.$redraw.next();
            this.$optionSelected.next({ option, index });
        }
    }
    /**
     * Clear selected options.
     * @return {?}
     */
    clear() {
        this.values = [];
        this.selectedOptions = [];
        this.activatedOptions = [];
        this.dropBehindColumns(0);
        this.prepareEmitValue();
        this.$redraw.next();
        this.$optionSelected.next(null);
    }
    /**
     * @param {?} o
     * @return {?}
     */
    getOptionLabel(o) {
        return (/** @type {?} */ (o[this.cascaderComponent.nzLabelProperty || 'label']));
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} o
     * @return {?}
     */
    getOptionValue(o) {
        return o[this.cascaderComponent.nzValueProperty || 'value'];
    }
    /**
     * Try to insert options into a column.
     * @private
     * @param {?} options Options to insert
     * @param {?} columnIndex Position
     * @param {?} parent
     * @return {?}
     */
    setColumnData(options, columnIndex, parent) {
        /** @type {?} */
        const existingOptions = this.columns[columnIndex];
        if (!arraysEqual(existingOptions, options)) {
            options.forEach((/**
             * @param {?} o
             * @return {?}
             */
            o => (o.parent = parent)));
            this.columns[columnIndex] = options;
            this.dropBehindColumns(columnIndex);
        }
    }
    /**
     * Set all ancestor options as activated.
     * @private
     * @param {?} startIndex
     * @return {?}
     */
    trackAncestorActivatedOptions(startIndex) {
        for (let i = startIndex - 1; i >= 0; i--) {
            if (!this.activatedOptions[i]) {
                this.activatedOptions[i] = (/** @type {?} */ (this.activatedOptions[i + 1].parent));
            }
        }
    }
    /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    dropBehindActivatedOptions(lastReserveIndex) {
        this.activatedOptions = this.activatedOptions.splice(0, lastReserveIndex + 1);
    }
    /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    dropBehindColumns(lastReserveIndex) {
        if (lastReserveIndex < this.columns.length - 1) {
            this.columns = this.columns.slice(0, lastReserveIndex + 1);
        }
    }
    /**
     * Load children of an option asynchronously.
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    loadChildren(option, // tslint:disable-line:no-any
    columnIndex, success, failure) {
        /** @type {?} */
        const loadFn = this.cascaderComponent.nzLoadData;
        if (loadFn) {
            // If there isn't any option in columns.
            this.$loading.next(columnIndex < 0);
            if (typeof option === 'object') {
                option.loading = true;
            }
            loadFn(option, columnIndex).then((/**
             * @return {?}
             */
            () => {
                option.loading = false;
                if (option.children) {
                    this.setColumnData(option.children, columnIndex + 1, option);
                }
                if (success) {
                    success();
                }
                this.$loading.next(false);
                this.$redraw.next();
            }), (/**
             * @return {?}
             */
            () => {
                option.loading = false;
                option.isLeaf = true;
                if (failure) {
                    failure();
                }
                this.$redraw.next();
            }));
        }
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    isLoaded(index) {
        return this.columns[index] && this.columns[index].length > 0;
    }
    /**
     * Find a option that has a given value in a given column.
     * @private
     * @param {?} columnIndex
     * @param {?} value
     * @return {?}
     */
    findOptionWithValue(columnIndex, value // tslint:disable-line:no-any
    ) {
        /** @type {?} */
        const targetColumn = this.columns[columnIndex];
        if (targetColumn) {
            /** @type {?} */
            const v = typeof value === 'object' ? this.getOptionValue(value) : value;
            return (/** @type {?} */ (targetColumn.find((/**
             * @param {?} o
             * @return {?}
             */
            o => v === this.getOptionValue(o)))));
        }
        return null;
    }
    /**
     * @private
     * @return {?}
     */
    prepareEmitValue() {
        this.values = this.selectedOptions.map((/**
         * @param {?} o
         * @return {?}
         */
        o => this.getOptionValue(o)));
    }
}
NzCascaderService.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2FzY2FkZXIvIiwic291cmNlcyI6WyJuei1jYXNjYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakQsT0FBTyxFQUNMLGtCQUFrQixFQUtuQixNQUFNLDJCQUEyQixDQUFDO0FBQ25DLE9BQU8sRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFNcEUsTUFBTSxPQUFPLGlCQUFpQjtJQUQ5Qjs7OztRQUdFLHFCQUFnQixHQUFxQixFQUFFLENBQUM7Ozs7UUFHeEMsWUFBTyxHQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDOzs7O1FBR25DLG9CQUFlLEdBQUcsS0FBSyxDQUFDOzs7O1FBR3hCLG9CQUFlLEdBQXFCLEVBQUUsQ0FBQztRQUV2QyxXQUFNLEdBQVUsRUFBRSxDQUFDLENBQUMsNkJBQTZCOztRQUV4QyxhQUFRLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7Ozs7O1FBTS9DLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDOzs7OztRQU05QixvQkFBZSxHQUFHLElBQUksT0FBTyxFQUczQixDQUFDOzs7OztRQU1ILG1CQUFjLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQzs7OztRQUd0QyxvQkFBZSxHQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDOzs7O1FBRzNDLDZCQUF3QixHQUFxQixFQUFFLENBQUM7SUF1WDFELENBQUM7Ozs7O0lBbFhDLElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxD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Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUN0RSxDQUFDOzs7WUFqYUYsVUFBVTs7Ozs7OztJQUdULDZDQUF3Qzs7Ozs7SUFHeEMsb0NBQW1DOzs7OztJQUduQyw0Q0FBd0I7Ozs7O0lBR3hCLDRDQUF1Qzs7SUFFdkMsbUNBQW1COztJQUVuQixxQ0FBd0Q7Ozs7OztJQU14RCxvQ0FBdUM7Ozs7OztJQU12Qyw0Q0FHWTs7Ozs7O0lBTVosMkNBQThDOzs7Ozs7SUFHOUMsNENBQW1EOzs7Ozs7SUFHbkQscURBQXdEOzs7OztJQUV4RCw4Q0FBdUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IGFycmF5c0VxdWFsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNTaG93U2VhcmNoT2JqZWN0LFxyXG4gIENhc2NhZGVyT3B0aW9uLFxyXG4gIENhc2NhZGVyU2VhcmNoT3B0aW9uLFxyXG4gIE56Q2FzY2FkZXJDb21wb25lbnRBc1NvdXJjZSxcclxuICBOekNhc2NhZGVyRmlsdGVyXHJcbn0gZnJvbSAnLi9uei1jYXNjYWRlci1kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IGlzQ2hpbGRPcHRpb24sIGlzUGFyZW50T3B0aW9uIH0gZnJvbSAnLi9uei1jYXNjYWRlci11dGlscyc7XHJcblxyXG4vKipcclxuICogQWxsIGRhdGEgaXMgc3RvcmVkIGFuZCBwYXJzZWQgaW4gTnpDYXNjYWRlclNlcnZpY2UuXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOekNhc2NhZGVyU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgLyoqIEFjdGl2YXRlZCBvcHRpb25zIGluIGVhY2ggY29sdW1uLiAqL1xyXG4gIGFjdGl2YXRlZE9wdGlvbnM6IENhc2NhZGVyT3B0aW9uW10gPSBbXTtcclxuXHJcbiAgLyoqIEFuIGFycmF5IHRvIHN0b3JlIGNhc2NhZGVyIGl0ZW1zIGFycmFuZ2VkIGluIGRpZmZlcmVudCBsYXllcnMuICovXHJcbiAgY29sdW1uczogQ2FzY2FkZXJPcHRpb25bXVtdID0gW1tdXTtcclxuXHJcbiAgLyoqIElmIHVzZXIgaGFzIGVudGVyZWQgc2VhcmNoaW5nIG1vZGUuICovXHJcbiAgaW5TZWFyY2hpbmdNb2RlID0gZmFsc2U7XHJcblxyXG4gIC8qKiBTZWxlY3RlZCBvcHRpb25zIHdvdWxkIGJlIG91dHB1dCB0byB1c2VyLiAqL1xyXG4gIHNlbGVjdGVkT3B0aW9uczogQ2FzY2FkZXJPcHRpb25bXSA9IFtdO1xyXG5cclxuICB2YWx1ZXM6IGFueVtdID0gW107IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcblxyXG4gIHJlYWRvbmx5ICRsb2FkaW5nID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXQgYW4gZXZlbnQgdG8gbm90aWZ5IGNhc2NhZGVyIGl0IG5lZWRzIHRvIHJlZHJhdyBiZWNhdXNlIGFjdGl2YXRlZCBvclxyXG4gICAqIHNlbGVjdGVkIG9wdGlvbnMgYXJlIGNoYW5nZWQuXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgJHJlZHJhdyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXQgYW4gZXZlbnQgd2hlbiBhbiBvcHRpb24gZ2V0cyBzZWxlY3RlZC5cclxuICAgKiBFbWl0IHRydWUgaWYgYSBsZWFmIG9wdGlvbnMgaXMgc2VsZWN0ZWQuXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgJG9wdGlvblNlbGVjdGVkID0gbmV3IFN1YmplY3Q8e1xyXG4gICAgb3B0aW9uOiBDYXNjYWRlck9wdGlvbjtcclxuICAgIGluZGV4OiBudW1iZXI7XHJcbiAgfSB8IG51bGw+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXQgYW4gZXZlbnQgdG8gbm90aWZ5IGNhc2NhZGVyIGl0IG5lZWRzIHRvIHF1aXQgc2VhcmNoaW5nIG1vZGUuXHJcbiAgICogT25seSBlbWl0IHdoZW4gdXNlciBkbyBzZWxlY3QgYSBzZWFyY2hpbmcgb3B0aW9uLlxyXG4gICAqL1xyXG4gIHJlYWRvbmx5ICRxdWl0U2VhcmNoaW5nID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgLyoqIFRvIGhvbGQgY29sdW1ucyBiZWZvcmUgZW50ZXJpbmcgc2VhcmNoaW5nIG1vZGUuICovXHJcbiAgcHJpdmF0ZSBjb2x1bW5zU25hcHNob3Q6IENhc2NhZGVyT3B0aW9uW11bXSA9IFtbXV07XHJcblxyXG4gIC8qKiBUbyBob2xkIGFjdGl2YXRlZCBvcHRpb25zIGJlZm9yZSBlbnRlcmluZyBzZWFyY2hpbmcgbW9kZS4gKi9cclxuICBwcml2YXRlIGFjdGl2YXRlZE9wdGlvbnNTbmFwc2hvdDogQ2FzY2FkZXJPcHRpb25bXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGNhc2NhZGVyQ29tcG9uZW50OiBOekNhc2NhZGVyQ29tcG9uZW50QXNTb3VyY2U7XHJcblxyXG4gIC8qKiBSZXR1cm4gY2FzY2FkZXIgb3B0aW9ucyBpbiB0aGUgZmlyc3QgbGF5ZXIuICovXHJcbiAgZ2V0IG56T3B0aW9ucygpOiBDYXNjYWRlck9wdGlvbltdIHtcclxuICAgIHJldHVybiB0aGlzLmNvbHVtbnNbMF07XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuJHJlZHJhdy5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy4kcXVpdFNlYXJjaGluZy5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy4kb3B0aW9uU2VsZWN0ZWQuY29tcGxldGUoKTtcclxuICAgIHRoaXMuJGxvYWRpbmcuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1ha2Ugc3VyZSB0aGF0IHZhbHVlIG1hdGNoZXMgd2hhdCBpcyBkaXNwbGF5ZWQgaW4gdGhlIGRyb3Bkb3duLlxyXG4gICAqL1xyXG4gIHN5bmNPcHRpb25zKGZpcnN0OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzO1xyXG4gICAgY29uc3QgaGFzVmFsdWUgPSB2YWx1ZXMgJiYgdmFsdWVzLmxlbmd0aDtcclxuICAgIGNvbnN0IGxhc3RDb2x1bW5JbmRleCA9IHZhbHVlcy5sZW5ndGggLSAxO1xyXG4gICAgY29uc3QgaW5pdENvbHVtbldpdGhJbmRleCA9IChjb2x1bW5JbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFjdGl2YXRlZE9wdGlvblNldHRlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB2YWx1ZXNbY29sdW1uSW5kZXhdO1xyXG5cclxuICAgICAgICBpZiAoIWN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9XHJcbiAgICAgICAgICB0aGlzLmZpbmRPcHRpb25XaXRoVmFsdWUoY29sdW1uSW5kZXgsIHZhbHVlc1tjb2x1bW5JbmRleF0pIHx8XHJcbiAgICAgICAgICAodHlwZW9mIGN1cnJlbnRWYWx1ZSA9PT0gJ29iamVjdCdcclxuICAgICAgICAgICAgPyBjdXJyZW50VmFsdWVcclxuICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICBbYCR7dGhpcy5jYXNjYWRlckNvbXBvbmVudC5uelZhbHVlUHJvcGVydHl9YF06IGN1cnJlbnRWYWx1ZSxcclxuICAgICAgICAgICAgICAgIFtgJHt0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56TGFiZWxQcm9wZXJ0eX1gXTogY3VycmVudFZhbHVlXHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0T3B0aW9uQWN0aXZhdGVkKG9wdGlvbiwgY29sdW1uSW5kZXgsIGZhbHNlLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIGlmIChjb2x1bW5JbmRleCA8IGxhc3RDb2x1bW5JbmRleCkge1xyXG4gICAgICAgICAgaW5pdENvbHVtbldpdGhJbmRleChjb2x1bW5JbmRleCArIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmRyb3BCZWhpbmRDb2x1bW5zKGNvbHVtbkluZGV4KTtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gWy4uLnRoaXMuYWN0aXZhdGVkT3B0aW9uc107XHJcbiAgICAgICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmlzTG9hZGVkKGNvbHVtbkluZGV4KSB8fCAhdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekxvYWREYXRhKSB7XHJcbiAgICAgICAgYWN0aXZhdGVkT3B0aW9uU2V0dGVyKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zW2NvbHVtbkluZGV4IC0gMV0gfHwge307XHJcbiAgICAgICAgdGhpcy5sb2FkQ2hpbGRyZW4ob3B0aW9uLCBjb2x1bW5JbmRleCAtIDEsIGFjdGl2YXRlZE9wdGlvblNldHRlcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gW107XHJcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xyXG5cclxuICAgIGlmIChmaXJzdCAmJiB0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56TG9hZERhdGEgJiYgIWhhc1ZhbHVlKSB7XHJcbiAgICAgIC8vIFNob3VsZCBhbHNvIG5vdGlmeSB0aGUgY29tcG9uZW50IHRoYXQgdmFsdWUgY2hhbmdlcy4gRml4ICMzNDgwLlxyXG4gICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbml0Q29sdW1uV2l0aEluZGV4KDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCBjYXNjYWRlciBjb21wb25lbnQgc28gdGhpcyBzZXJ2aWNlIGNvdWxkIHVzZSBpbnB1dHMuXHJcbiAgICovXHJcbiAgd2l0aENvbXBvbmVudChjYXNjYWRlckNvbXBvbmVudDogTnpDYXNjYWRlckNvbXBvbmVudEFzU291cmNlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhc2NhZGVyQ29tcG9uZW50ID0gY2FzY2FkZXJDb21wb25lbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldCBhbGwgb3B0aW9ucy4gUmVidWlsZCBzZWFyY2hpbmcgb3B0aW9ucyBpZiBpbiBzZWFyY2hpbmcgbW9kZS5cclxuICAgKi9cclxuICB3aXRoT3B0aW9ucyhvcHRpb25zOiBDYXNjYWRlck9wdGlvbltdIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb2x1bW5zU25hcHNob3QgPSB0aGlzLmNvbHVtbnMgPSBvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID8gW29wdGlvbnNdIDogW107XHJcblxyXG4gICAgaWYgKHRoaXMuaW5TZWFyY2hpbmdNb2RlKSB7XHJcbiAgICAgIHRoaXMucHJlcGFyZVNlYXJjaE9wdGlvbnModGhpcy5jYXNjYWRlckNvbXBvbmVudC5pbnB1dFZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5jb2x1bW5zLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnN5bmNPcHRpb25zKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcnkgdG8gc2V0IGEgb3B0aW9uIGFzIGFjdGl2YXRlZC5cclxuICAgKiBAcGFyYW0gb3B0aW9uIENhc2NhZGVyIG9wdGlvblxyXG4gICAqIEBwYXJhbSBjb2x1bW5JbmRleCBPZiB3aGljaCBjb2x1bW4gdGhpcyBvcHRpb24gaXMgaW5cclxuICAgKiBAcGFyYW0gc2VsZWN0IFNlbGVjdFxyXG4gICAqIEBwYXJhbSBsb2FkaW5nQ2hpbGRyZW4gVHJ5IHRvIGxvYWQgY2hpbGRyZW4gYXN5bmNocm9ub3VzbHkuXHJcbiAgICovXHJcbiAgc2V0T3B0aW9uQWN0aXZhdGVkKFxyXG4gICAgb3B0aW9uOiBDYXNjYWRlck9wdGlvbixcclxuICAgIGNvbHVtbkluZGV4OiBudW1iZXIsXHJcbiAgICBzZWxlY3Q6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgIGxvYWRpbmdDaGlsZHJlbjogYm9vbGVhbiA9IHRydWVcclxuICApOiB2b2lkIHtcclxuICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uc1tjb2x1bW5JbmRleF0gPSBvcHRpb247XHJcbiAgICB0aGlzLnRyYWNrQW5jZXN0b3JBY3RpdmF0ZWRPcHRpb25zKGNvbHVtbkluZGV4KTtcclxuICAgIHRoaXMuZHJvcEJlaGluZEFjdGl2YXRlZE9wdGlvbnMoY29sdW1uSW5kZXgpO1xyXG5cclxuICAgIGNvbnN0IGlzUGFyZW50ID0gaXNQYXJlbnRPcHRpb24ob3B0aW9uKTtcclxuXHJcbiAgICBpZiAoaXNQYXJlbnQpIHtcclxuICAgICAgLy8gUGFyZW50IG9wdGlvbiB0aGF0IGhhcyBjaGlsZHJlbi5cclxuICAgICAgdGhpcy5zZXRDb2x1bW5EYXRhKG9wdGlvbi5jaGlsZHJlbiEsIGNvbHVtbkluZGV4ICsgMSwgb3B0aW9uKTtcclxuICAgIH0gZWxzZSBpZiAoIW9wdGlvbi5pc0xlYWYgJiYgbG9hZGluZ0NoaWxkcmVuKSB7XHJcbiAgICAgIC8vIFBhcmVudCBvcHRpb24gdGhhdCBzaG91bGQgdHJ5IHRvIGxvYWQgY2hpbGRyZW4gYXN5bmNocm9ub3VzbHkuXHJcbiAgICAgIHRoaXMubG9hZENoaWxkcmVuKG9wdGlvbiwgY29sdW1uSW5kZXgpO1xyXG4gICAgfSBlbHNlIGlmIChvcHRpb24uaXNMZWFmKSB7XHJcbiAgICAgIC8vIExlYWYgb3B0aW9uLlxyXG4gICAgICB0aGlzLmRyb3BCZWhpbmRDb2x1bW5zKGNvbHVtbkluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBY3R1YWxseSBwZXJmb3JtIHNlbGVjdGlvbiB0byBtYWtlIGFuIG9wdGlvbnMgbm90IG9ubHkgYWN0aXZhdGVkIGJ1dCBhbHNvIHNlbGVjdGVkLlxyXG4gICAgaWYgKHNlbGVjdCkge1xyXG4gICAgICB0aGlzLnNldE9wdGlvblNlbGVjdGVkKG9wdGlvbiwgY29sdW1uSW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgYSBzZWFyY2hpbmcgb3B0aW9uIGFzIGFjdGl2YXRlZCwgZmluaXNoaW5nIHVwIHRoaW5ncy5cclxuICAgKiBAcGFyYW0gb3B0aW9uXHJcbiAgICovXHJcbiAgc2V0U2VhcmNoT3B0aW9uU2VsZWN0ZWQob3B0aW9uOiBDYXNjYWRlclNlYXJjaE9wdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gW29wdGlvbl07XHJcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFsuLi5vcHRpb24ucGF0aF07XHJcbiAgICB0aGlzLnByZXBhcmVFbWl0VmFsdWUoKTtcclxuICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XHJcbiAgICB0aGlzLiRvcHRpb25TZWxlY3RlZC5uZXh0KHsgb3B0aW9uLCBpbmRleDogMCB9KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgLy8gUmVzZXQgZGF0YSBhbmQgdGVsbCBVSSBvbmx5IHRvIHJlbW92ZSBpbnB1dCBhbmQgcmVzZXQgZHJvcGRvd24gd2lkdGggc3R5bGUuXHJcbiAgICAgIHRoaXMuJHF1aXRTZWFyY2hpbmcubmV4dCgpO1xyXG4gICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gICAgICB0aGlzLmluU2VhcmNoaW5nTW9kZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNvbHVtbnMgPSBbLi4udGhpcy5jb2x1bW5zU25hcHNob3RdO1xyXG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbLi4udGhpcy5zZWxlY3RlZE9wdGlvbnNdO1xyXG4gICAgfSwgMjAwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbHRlciBjYXNjYWRlciBvcHRpb25zIHRvIHJlc2V0IGBjb2x1bW5zYC5cclxuICAgKiBAcGFyYW0gc2VhcmNoVmFsdWUgVGhlIHN0cmluZyB1c2VyIHdhbnRzIHRvIHNlYXJjaC5cclxuICAgKi9cclxuICBwcmVwYXJlU2VhcmNoT3B0aW9ucyhzZWFyY2hWYWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBDYXNjYWRlck9wdGlvbltdID0gW107IC8vIFNlYXJjaCByZXN1bHRzIG9ubHkgaGF2ZSBvbmUgbGF5ZXIuXHJcbiAgICBjb25zdCBwYXRoOiBDYXNjYWRlck9wdGlvbltdID0gW107XHJcbiAgICBjb25zdCBkZWZhdWx0RmlsdGVyOiBOekNhc2NhZGVyRmlsdGVyID0gKGksIHApID0+IHtcclxuICAgICAgcmV0dXJuIHAuc29tZShvID0+IHtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMuZ2V0T3B0aW9uTGFiZWwobyk7XHJcbiAgICAgICAgcmV0dXJuICEhbGFiZWwgJiYgbGFiZWwuaW5kZXhPZihpKSAhPT0gLTE7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHNob3dTZWFyY2ggPSB0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56U2hvd1NlYXJjaDtcclxuICAgIGNvbnN0IGZpbHRlciA9IGlzU2hvd1NlYXJjaE9iamVjdChzaG93U2VhcmNoKSAmJiBzaG93U2VhcmNoLmZpbHRlciA/IHNob3dTZWFyY2guZmlsdGVyIDogZGVmYXVsdEZpbHRlcjtcclxuICAgIGNvbnN0IHNvcnRlciA9IGlzU2hvd1NlYXJjaE9iamVjdChzaG93U2VhcmNoKSAmJiBzaG93U2VhcmNoLnNvcnRlciA/IHNob3dTZWFyY2guc29ydGVyIDogbnVsbDtcclxuICAgIGNvbnN0IGxvb3BDaGlsZCA9IChub2RlOiBDYXNjYWRlck9wdGlvbiwgZm9yY2VEaXNhYmxlZCA9IGZhbHNlKSA9PiB7XHJcbiAgICAgIHBhdGgucHVzaChub2RlKTtcclxuICAgICAgY29uc3QgY1BhdGggPSBBcnJheS5mcm9tKHBhdGgpO1xyXG4gICAgICBpZiAoZmlsdGVyKHNlYXJjaFZhbHVlLCBjUGF0aCkpIHtcclxuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IGZvcmNlRGlzYWJsZWQgfHwgbm9kZS5kaXNhYmxlZDtcclxuICAgICAgICBjb25zdCBvcHRpb246IENhc2NhZGVyU2VhcmNoT3B0aW9uID0ge1xyXG4gICAgICAgICAgZGlzYWJsZWQsXHJcbiAgICAgICAgICBpc0xlYWY6IHRydWUsXHJcbiAgICAgICAgICBwYXRoOiBjUGF0aCxcclxuICAgICAgICAgIFt0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56TGFiZWxQcm9wZXJ0eV06IGNQYXRoLm1hcChwID0+IHRoaXMuZ2V0T3B0aW9uTGFiZWwocCkpLmpvaW4oJyAvICcpXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXN1bHRzLnB1c2gob3B0aW9uKTtcclxuICAgICAgfVxyXG4gICAgICBwYXRoLnBvcCgpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvb3BQYXJlbnQgPSAobm9kZTogQ2FzY2FkZXJPcHRpb24sIGZvcmNlRGlzYWJsZWQgPSBmYWxzZSkgPT4ge1xyXG4gICAgICBjb25zdCBkaXNhYmxlZCA9IGZvcmNlRGlzYWJsZWQgfHwgbm9kZS5kaXNhYmxlZDtcclxuICAgICAgcGF0aC5wdXNoKG5vZGUpO1xyXG4gICAgICBub2RlLmNoaWxkcmVuIS5mb3JFYWNoKHNOb2RlID0+IHtcclxuICAgICAgICBpZiAoIXNOb2RlLnBhcmVudCkge1xyXG4gICAgICAgICAgc05vZGUucGFyZW50ID0gbm9kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzTm9kZS5pc0xlYWYpIHtcclxuICAgICAgICAgIGxvb3BQYXJlbnQoc05vZGUsIGRpc2FibGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNOb2RlLmlzTGVhZiB8fCAhc05vZGUuY2hpbGRyZW4gfHwgIXNOb2RlLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgbG9vcENoaWxkKHNOb2RlLCBkaXNhYmxlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcGF0aC5wb3AoKTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCF0aGlzLmNvbHVtbnNTbmFwc2hvdC5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5jb2x1bW5zID0gW1tdXTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29sdW1uc1NuYXBzaG90WzBdLmZvckVhY2gobyA9PiAoaXNDaGlsZE9wdGlvbihvKSA/IGxvb3BDaGlsZChvKSA6IGxvb3BQYXJlbnQobykpKTtcclxuXHJcbiAgICBpZiAoc29ydGVyKSB7XHJcbiAgICAgIHJlc3VsdHMuc29ydCgoYSwgYikgPT4gc29ydGVyKGEucGF0aCwgYi5wYXRoLCBzZWFyY2hWYWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29sdW1ucyA9IFtyZXN1bHRzXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZSBzZWFyY2hpbmcgbW9kZSBieSBVSS4gSXQgZGVhbHMgd2l0aCB0aGluZ3Mgbm90IGRpcmVjdGx5IHJlbGF0ZWQgdG8gVUkuXHJcbiAgICogQHBhcmFtIHRvU2VhcmNoaW5nIElmIHRoaXMgY2FzY2FkZXIgaXMgZW50ZXJpbmcgc2VhcmNoaW5nIG1vZGVcclxuICAgKi9cclxuICB0b2dnbGVTZWFyY2hpbmdNb2RlKHRvU2VhcmNoaW5nOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmluU2VhcmNoaW5nTW9kZSA9IHRvU2VhcmNoaW5nO1xyXG5cclxuICAgIGlmICh0b1NlYXJjaGluZykge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnNTbmFwc2hvdCA9IFsuLi50aGlzLmFjdGl2YXRlZE9wdGlvbnNdO1xyXG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbXTtcclxuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcclxuICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFVzZXIgcXVpdCBzZWFyY2hpbmcgbW9kZSB3aXRob3V0IHNlbGVjdGluZyBhbiBvcHRpb24uXHJcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFsuLi50aGlzLmFjdGl2YXRlZE9wdGlvbnNTbmFwc2hvdF07XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gWy4uLnRoaXMuYWN0aXZhdGVkT3B0aW9uc107XHJcbiAgICAgIHRoaXMuY29sdW1ucyA9IFsuLi50aGlzLmNvbHVtbnNTbmFwc2hvdF07XHJcbiAgICAgIHRoaXMuc3luY09wdGlvbnMoKTtcclxuICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldE9wdGlvblNlbGVjdGVkKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNoYW5nZU9uID0gdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekNoYW5nZU9uO1xyXG4gICAgY29uc3Qgc2hvdWxkUGVyZm9ybVNlbGVjdGlvbiA9IChvOiBDYXNjYWRlck9wdGlvbiwgaTogbnVtYmVyKTogYm9vbGVhbiA9PiB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgY2hhbmdlT24gPT09ICdmdW5jdGlvbicgPyBjaGFuZ2VPbihvLCBpKSA6IGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAob3B0aW9uLmlzTGVhZiB8fCB0aGlzLmNhc2NhZGVyQ29tcG9uZW50Lm56Q2hhbmdlT25TZWxlY3QgfHwgc2hvdWxkUGVyZm9ybVNlbGVjdGlvbihvcHRpb24sIGluZGV4KSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFsuLi50aGlzLmFjdGl2YXRlZE9wdGlvbnNdO1xyXG4gICAgICB0aGlzLnByZXBhcmVFbWl0VmFsdWUoKTtcclxuICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcclxuICAgICAgdGhpcy4kb3B0aW9uU2VsZWN0ZWQubmV4dCh7IG9wdGlvbiwgaW5kZXggfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhciBzZWxlY3RlZCBvcHRpb25zLlxyXG4gICAqL1xyXG4gIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZXMgPSBbXTtcclxuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XHJcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbXTtcclxuICAgIHRoaXMuZHJvcEJlaGluZENvbHVtbnMoMCk7XHJcbiAgICB0aGlzLnByZXBhcmVFbWl0VmFsdWUoKTtcclxuICAgIHRoaXMuJHJlZHJhdy5uZXh0KCk7XHJcbiAgICB0aGlzLiRvcHRpb25TZWxlY3RlZC5uZXh0KG51bGwpO1xyXG4gIH1cclxuXHJcbiAgZ2V0T3B0aW9uTGFiZWwobzogQ2FzY2FkZXJPcHRpb24pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIG9bdGhpcy5jYXNjYWRlckNvbXBvbmVudC5uekxhYmVsUHJvcGVydHkgfHwgJ2xhYmVsJ10gYXMgc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGdldE9wdGlvblZhbHVlKG86IENhc2NhZGVyT3B0aW9uKTogYW55IHtcclxuICAgIHJldHVybiBvW3RoaXMuY2FzY2FkZXJDb21wb25lbnQubnpWYWx1ZVByb3BlcnR5IHx8ICd2YWx1ZSddO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJ5IHRvIGluc2VydCBvcHRpb25zIGludG8gYSBjb2x1bW4uXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyB0byBpbnNlcnRcclxuICAgKiBAcGFyYW0gY29sdW1uSW5kZXggUG9zaXRpb25cclxuICAgKi9cclxuICBwcml2YXRlIHNldENvbHVtbkRhdGEob3B0aW9uczogQ2FzY2FkZXJPcHRpb25bXSwgY29sdW1uSW5kZXg6IG51bWJlciwgcGFyZW50OiBDYXNjYWRlck9wdGlvbik6IHZvaWQge1xyXG4gICAgY29uc3QgZXhpc3RpbmdPcHRpb25zID0gdGhpcy5jb2x1bW5zW2NvbHVtbkluZGV4XTtcclxuICAgIGlmICghYXJyYXlzRXF1YWwoZXhpc3RpbmdPcHRpb25zLCBvcHRpb25zKSkge1xyXG4gICAgICBvcHRpb25zLmZvckVhY2gobyA9PiAoby5wYXJlbnQgPSBwYXJlbnQpKTtcclxuICAgICAgdGhpcy5jb2x1bW5zW2NvbHVtbkluZGV4XSA9IG9wdGlvbnM7XHJcbiAgICAgIHRoaXMuZHJvcEJlaGluZENvbHVtbnMoY29sdW1uSW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IGFsbCBhbmNlc3RvciBvcHRpb25zIGFzIGFjdGl2YXRlZC5cclxuICAgKi9cclxuICBwcml2YXRlIHRyYWNrQW5jZXN0b3JBY3RpdmF0ZWRPcHRpb25zKHN0YXJ0SW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICBpZiAoIXRoaXMuYWN0aXZhdGVkT3B0aW9uc1tpXSkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uc1tpXSA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1tpICsgMV0ucGFyZW50ITtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcm9wQmVoaW5kQWN0aXZhdGVkT3B0aW9ucyhsYXN0UmVzZXJ2ZUluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IHRoaXMuYWN0aXZhdGVkT3B0aW9ucy5zcGxpY2UoMCwgbGFzdFJlc2VydmVJbmRleCArIDEpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcm9wQmVoaW5kQ29sdW1ucyhsYXN0UmVzZXJ2ZUluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChsYXN0UmVzZXJ2ZUluZGV4IDwgdGhpcy5jb2x1bW5zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgdGhpcy5jb2x1bW5zID0gdGhpcy5jb2x1bW5zLnNsaWNlKDAsIGxhc3RSZXNlcnZlSW5kZXggKyAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvYWQgY2hpbGRyZW4gb2YgYW4gb3B0aW9uIGFzeW5jaHJvbm91c2x5LlxyXG4gICAqL1xyXG4gIGxvYWRDaGlsZHJlbihcclxuICAgIG9wdGlvbjogQ2FzY2FkZXJPcHRpb24gfCBhbnksIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgICBjb2x1bW5JbmRleDogbnVtYmVyLFxyXG4gICAgc3VjY2Vzcz86IFZvaWRGdW5jdGlvbixcclxuICAgIGZhaWx1cmU/OiBWb2lkRnVuY3Rpb25cclxuICApOiB2b2lkIHtcclxuICAgIGNvbnN0IGxvYWRGbiA9IHRoaXMuY2FzY2FkZXJDb21wb25lbnQubnpMb2FkRGF0YTtcclxuXHJcbiAgICBpZiAobG9hZEZuKSB7XHJcbiAgICAgIC8vIElmIHRoZXJlIGlzbid0IGFueSBvcHRpb24gaW4gY29sdW1ucy5cclxuICAgICAgdGhpcy4kbG9hZGluZy5uZXh0KGNvbHVtbkluZGV4IDwgMCk7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBvcHRpb24ubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxvYWRGbihvcHRpb24sIGNvbHVtbkluZGV4KS50aGVuKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIG9wdGlvbi5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAob3B0aW9uLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29sdW1uRGF0YShvcHRpb24uY2hpbGRyZW4sIGNvbHVtbkluZGV4ICsgMSwgb3B0aW9uKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3MoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuJGxvYWRpbmcubmV4dChmYWxzZSk7XHJcbiAgICAgICAgICB0aGlzLiRyZWRyYXcubmV4dCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgb3B0aW9uLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIG9wdGlvbi5pc0xlYWYgPSB0cnVlO1xyXG4gICAgICAgICAgaWYgKGZhaWx1cmUpIHtcclxuICAgICAgICAgICAgZmFpbHVyZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy4kcmVkcmF3Lm5leHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzTG9hZGVkKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbHVtbnNbaW5kZXhdICYmIHRoaXMuY29sdW1uc1tpbmRleF0ubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmQgYSBvcHRpb24gdGhhdCBoYXMgYSBnaXZlbiB2YWx1ZSBpbiBhIGdpdmVuIGNvbHVtbi5cclxuICAgKi9cclxuICBwcml2YXRlIGZpbmRPcHRpb25XaXRoVmFsdWUoXHJcbiAgICBjb2x1bW5JbmRleDogbnVtYmVyLFxyXG4gICAgdmFsdWU6IENhc2NhZGVyT3B0aW9uIHwgYW55IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgKTogQ2FzY2FkZXJPcHRpb24gfCBudWxsIHtcclxuICAgIGNvbnN0IHRhcmdldENvbHVtbiA9IHRoaXMuY29sdW1uc1tjb2x1bW5JbmRleF07XHJcbiAgICBpZiAodGFyZ2V0Q29sdW1uKSB7XHJcbiAgICAgIGNvbnN0IHYgPSB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdGhpcy5nZXRPcHRpb25WYWx1ZSh2YWx1ZSkgOiB2YWx1ZTtcclxuICAgICAgcmV0dXJuIHRhcmdldENvbHVtbi5maW5kKG8gPT4gdiA9PT0gdGhpcy5nZXRPcHRpb25WYWx1ZShvKSkhO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByZXBhcmVFbWl0VmFsdWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlcyA9IHRoaXMuc2VsZWN0ZWRPcHRpb25zLm1hcChvID0+IHRoaXMuZ2V0T3B0aW9uVmFsdWUobykpO1xyXG4gIH1cclxufVxyXG4iXX0=