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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isNotNil, InputBoolean } from 'ng-zorro-antd/core';
import { NzDropDownComponent } from 'ng-zorro-antd/dropdown';
import { NzI18nService } from 'ng-zorro-antd/i18n';
/**
 * @record
 */
export function NzThItemInterface() { }
if (false) {
    /** @type {?} */
    NzThItemInterface.prototype.text;
    /** @type {?} */
    NzThItemInterface.prototype.value;
    /** @type {?} */
    NzThItemInterface.prototype.checked;
}
var NzThComponent = /** @class */ (function () {
    function NzThComponent(cdr, i18n) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.hasFilterValue = false;
        this.filterVisible = false;
        this.multipleFilterList = [];
        this.singleFilterList = [];
        /* tslint:disable-next-line:no-any */
        this.locale = (/** @type {?} */ ({}));
        this.nzWidthChange$ = new Subject();
        this.destroy$ = new Subject();
        this.hasDefaultFilter = false;
        /* tslint:disable-next-line:no-any */
        this.nzSelections = [];
        this.nzChecked = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzFilterMultiple = true;
        this.nzSort = null;
        this.nzFilters = [];
        this.nzExpand = false;
        this.nzShowCheckbox = false;
        this.nzCustomFilter = false;
        this.nzShowSort = false;
        this.nzShowFilter = false;
        this.nzShowRowSelection = false;
        this.nzCheckedChange = new EventEmitter();
        this.nzSortChange = new EventEmitter();
        this.nzSortChangeWithKey = new EventEmitter();
        /* tslint:disable-next-line:no-any */
        this.nzFilterChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NzThComponent.prototype.updateSortValue = /**
     * @return {?}
     */
    function () {
        if (this.nzShowSort) {
            if (this.nzSort === 'descend') {
                this.setSortValue('ascend');
            }
            else if (this.nzSort === 'ascend') {
                this.setSortValue(null);
            }
            else {
                this.setSortValue('descend');
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzThComponent.prototype.setSortValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.nzSort = value;
        this.nzSortChangeWithKey.emit({ key: this.nzSortKey, value: this.nzSort });
        this.nzSortChange.emit(this.nzSort);
    };
    Object.defineProperty(NzThComponent.prototype, "filterList", {
        get: /**
         * @return {?}
         */
        function () {
            return this.multipleFilterList.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.checked; })).map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.value; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzThComponent.prototype, "filterValue", {
        /* tslint:disable-next-line:no-any */
        get: /* tslint:disable-next-line:no-any */
        /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var checkedFilter = this.singleFilterList.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.checked; }));
            return checkedFilter ? checkedFilter.value : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzThComponent.prototype.updateFilterStatus = /**
     * @return {?}
     */
    function () {
        if (this.nzFilterMultiple) {
            this.hasFilterValue = this.filterList.length > 0;
        }
        else {
            this.hasFilterValue = isNotNil(this.filterValue);
        }
    };
    /**
     * @return {?}
     */
    NzThComponent.prototype.search = /**
     * @return {?}
     */
    function () {
        this.updateFilterStatus();
        if (this.nzFilterMultiple) {
            this.nzFilterChange.emit(this.filterList);
        }
        else {
            this.nzFilterChange.emit(this.filterValue);
        }
    };
    /**
     * @return {?}
     */
    NzThComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.initMultipleFilterList(true);
        this.initSingleFilterList(true);
        this.hasFilterValue = false;
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    NzThComponent.prototype.checkMultiple = /**
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        filter.checked = !filter.checked;
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    NzThComponent.prototype.checkSingle = /**
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        this.singleFilterList.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return (item.checked = item === filter); }));
    };
    /**
     * @return {?}
     */
    NzThComponent.prototype.hideDropDown = /**
     * @return {?}
     */
    function () {
        this.nzDropDownComponent.setVisibleStateWhen(false);
        this.filterVisible = false;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzThComponent.prototype.dropDownVisibleChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.filterVisible = value;
        if (!value) {
            this.search();
        }
    };
    /**
     * @param {?=} force
     * @return {?}
     */
    NzThComponent.prototype.initMultipleFilterList = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        var _this = this;
        this.multipleFilterList = this.nzFilters.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var checked = force ? false : !!item.byDefault;
            if (checked) {
                _this.hasDefaultFilter = true;
            }
            return { text: item.text, value: item.value, checked: checked };
        }));
        this.checkDefaultFilters();
    };
    /**
     * @param {?=} force
     * @return {?}
     */
    NzThComponent.prototype.initSingleFilterList = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        var _this = this;
        this.singleFilterList = this.nzFilters.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var checked = force ? false : !!item.byDefault;
            if (checked) {
                _this.hasDefaultFilter = true;
            }
            return { text: item.text, value: item.value, checked: checked };
        }));
        this.checkDefaultFilters();
    };
    /**
     * @return {?}
     */
    NzThComponent.prototype.checkDefaultFilters = /**
     * @return {?}
     */
    function () {
        if (!this.nzFilters || this.nzFilters.length === 0 || !this.hasDefaultFilter) {
            return;
        }
        this.updateFilterStatus();
    };
    /**
     * @return {?}
     */
    NzThComponent.prototype.marForCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzThComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.i18n.getLocaleData('Table');
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzThComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzFilters) {
            this.initMultipleFilterList();
            this.initSingleFilterList();
            this.updateFilterStatus();
        }
        if (changes.nzWidth) {
            this.nzWidthChange$.next(this.nzWidth);
        }
    };
    /**
     * @return {?}
     */
    NzThComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzThComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'th:not(.nz-disable-th)',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ng-template #checkboxTemplate>\r\n  <label nz-checkbox\r\n    [class.ant-table-selection-select-all-custom]=\"nzShowRowSelection\"\r\n    [(ngModel)]=\"nzChecked\"\r\n    [nzDisabled]=\"nzDisabled\"\r\n    [nzIndeterminate]=\"nzIndeterminate\"\r\n    (ngModelChange)=\"nzCheckedChange.emit($event)\">\r\n  </label>\r\n</ng-template>\r\n<span class=\"ant-table-header-column\">\r\n  <div [class.ant-table-column-sorters]=\"nzShowSort\" (click)=\"updateSortValue()\">\r\n    <span class=\"ant-table-column-title\">\r\n      <ng-container *ngIf=\"nzShowCheckbox && !nzShowRowSelection\">\r\n        <ng-template [ngTemplateOutlet]=\"checkboxTemplate\"></ng-template>\r\n      </ng-container>\r\n      <div class=\"ant-table-selection\" *ngIf=\"nzShowRowSelection\">\r\n        <ng-container *ngIf=\"nzShowCheckbox\">\r\n          <ng-template [ngTemplateOutlet]=\"checkboxTemplate\"></ng-template>\r\n        </ng-container>\r\n        <nz-dropdown nzPlacement=\"bottomLeft\">\r\n          <div nz-dropdown class=\"ant-table-selection-down\">\r\n            <i nz-icon type=\"down\"></i>\r\n          </div>\r\n          <ul nz-menu class=\"ant-table-selection-menu\">\r\n            <li nz-menu-item *ngFor=\"let selection of nzSelections\" (click)=\"selection.onSelect()\">{{selection.text}}</li>\r\n          </ul>\r\n        </nz-dropdown>\r\n      </div>\r\n      <ng-content></ng-content>\r\n    </span>\r\n    <ng-content selector=\"nz-dropdown\"></ng-content>\r\n    <div class=\"ant-table-column-sorter\" *ngIf=\"nzShowSort\">\r\n      <div class=\"ant-table-column-sorter-inner ant-table-column-sorter-inner-full\">\r\n        <i nz-icon\r\n          type=\"caret-up\"\r\n          class=\"ant-table-column-sorter-up\"\r\n          [class.on]=\"nzSort == 'ascend'\"\r\n          [class.off]=\"nzSort != 'ascend'\"></i>\r\n        <i nz-icon\r\n          type=\"caret-down\"\r\n          class=\"ant-table-column-sorter-down\"\r\n          [class.on]=\"nzSort == 'descend'\"\r\n          [class.off]=\"nzSort != 'descend'\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</span>\r\n<nz-dropdown nzTrigger=\"click\" *ngIf=\"nzShowFilter\" [nzClickHide]=\"false\" nzTableFilter (nzVisibleChange)=\"dropDownVisibleChange($event)\">\r\n  <i nz-icon type=\"filter\" theme=\"fill\" [class.ant-table-filter-selected]=\"hasFilterValue\" [class.ant-table-filter-open]=\"filterVisible\" nz-dropdown></i>\r\n  <ul nz-menu>\r\n    <ng-container *ngIf=\"nzFilterMultiple\">\r\n      <li nz-menu-item *ngFor=\"let filter of multipleFilterList\" (click)=\"checkMultiple(filter)\">\r\n        <label nz-checkbox [ngModel]=\"filter.checked\" (ngModelChange)=\"checkMultiple(filter)\"></label><span>{{filter.text}}</span>\r\n      </li>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!nzFilterMultiple\">\r\n      <li nz-menu-item *ngFor=\"let filter of singleFilterList\" (click)=\"checkSingle(filter)\">\r\n        <label nz-radio [ngModel]=\"filter.checked\" (ngModelChange)=\"checkSingle(filter)\">{{filter.text}}</label>\r\n      </li>\r\n    </ng-container>\r\n  </ul>\r\n  <div class=\"ant-table-filter-dropdown-btns\">\r\n    <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"hideDropDown()\">\r\n      <span>{{ locale.filterConfirm }}</span>\r\n    </a>\r\n    <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"reset();hideDropDown()\">\r\n      <span>{{ locale.filterReset }}</span>\r\n    </a>\r\n  </div>\r\n</nz-dropdown>\r\n",
                    host: {
                        '[class.ant-table-column-has-actions]': 'nzShowFilter || nzShowSort || nzCustomFilter',
                        '[class.ant-table-column-has-filters]': 'nzShowFilter || nzCustomFilter',
                        '[class.ant-table-column-has-sorters]': 'nzShowSort',
                        '[class.ant-table-selection-column-custom]': 'nzShowRowSelection',
                        '[class.ant-table-selection-column]': 'nzShowCheckbox',
                        '[class.ant-table-expand-icon-th]': 'nzExpand',
                        '[class.ant-table-th-left-sticky]': 'nzLeft',
                        '[class.ant-table-th-right-sticky]': 'nzRight',
                        '[class.ant-table-column-sort]': "nzSort === 'descend' || nzSort === 'ascend'",
                        '[style.left]': 'nzLeft',
                        '[style.right]': 'nzRight',
                        '[style.text-align]': 'nzAlign'
                    }
                }] }
    ];
    /** @nocollapse */
    NzThComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzI18nService }
    ]; };
    NzThComponent.propDecorators = {
        nzDropDownComponent: [{ type: ViewChild, args: [NzDropDownComponent,] }],
        nzSelections: [{ type: Input }],
        nzChecked: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzIndeterminate: [{ type: Input }],
        nzSortKey: [{ type: Input }],
        nzFilterMultiple: [{ type: Input }],
        nzWidth: [{ type: Input }],
        nzLeft: [{ type: Input }],
        nzRight: [{ type: Input }],
        nzAlign: [{ type: Input }],
        nzSort: [{ type: Input }],
        nzFilters: [{ type: Input }],
        nzExpand: [{ type: Input }],
        nzShowCheckbox: [{ type: Input }],
        nzCustomFilter: [{ type: Input }],
        nzShowSort: [{ type: Input }],
        nzShowFilter: [{ type: Input }],
        nzShowRowSelection: [{ type: Input }],
        nzCheckedChange: [{ type: Output }],
        nzSortChange: [{ type: Output }],
        nzSortChangeWithKey: [{ type: Output }],
        nzFilterChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzThComponent.prototype, "nzExpand", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzThComponent.prototype, "nzShowCheckbox", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzThComponent.prototype, "nzCustomFilter", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzThComponent.prototype, "nzShowSort", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzThComponent.prototype, "nzShowFilter", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzThComponent.prototype, "nzShowRowSelection", void 0);
    return NzThComponent;
}());
export { NzThComponent };
if (false) {
    /** @type {?} */
    NzThComponent.prototype.hasFilterValue;
    /** @type {?} */
    NzThComponent.prototype.filterVisible;
    /** @type {?} */
    NzThComponent.prototype.multipleFilterList;
    /** @type {?} */
    NzThComponent.prototype.singleFilterList;
    /** @type {?} */
    NzThComponent.prototype.locale;
    /** @type {?} */
    NzThComponent.prototype.nzWidthChange$;
    /**
     * @type {?}
     * @private
     */
    NzThComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzThComponent.prototype.hasDefaultFilter;
    /** @type {?} */
    NzThComponent.prototype.nzDropDownComponent;
    /** @type {?} */
    NzThComponent.prototype.nzSelections;
    /** @type {?} */
    NzThComponent.prototype.nzChecked;
    /** @type {?} */
    NzThComponent.prototype.nzDisabled;
    /** @type {?} */
    NzThComponent.prototype.nzIndeterminate;
    /** @type {?} */
    NzThComponent.prototype.nzSortKey;
    /** @type {?} */
    NzThComponent.prototype.nzFilterMultiple;
    /** @type {?} */
    NzThComponent.prototype.nzWidth;
    /** @type {?} */
    NzThComponent.prototype.nzLeft;
    /** @type {?} */
    NzThComponent.prototype.nzRight;
    /** @type {?} */
    NzThComponent.prototype.nzAlign;
    /** @type {?} */
    NzThComponent.prototype.nzSort;
    /** @type {?} */
    NzThComponent.prototype.nzFilters;
    /** @type {?} */
    NzThComponent.prototype.nzExpand;
    /** @type {?} */
    NzThComponent.prototype.nzShowCheckbox;
    /** @type {?} */
    NzThComponent.prototype.nzCustomFilter;
    /** @type {?} */
    NzThComponent.prototype.nzShowSort;
    /** @type {?} */
    NzThComponent.prototype.nzShowFilter;
    /** @type {?} */
    NzThComponent.prototype.nzShowRowSelection;
    /** @type {?} */
    NzThComponent.prototype.nzCheckedChange;
    /** @type {?} */
    NzThComponent.prototype.nzSortChange;
    /** @type {?} */
    NzThComponent.prototype.nzSortChangeWithKey;
    /** @type {?} */
    NzThComponent.prototype.nzFilterChange;
    /**
     * @type {?}
     * @private
     */
    NzThComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzThComponent.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRU4sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdELE9BQU8sRUFBbUIsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFLcEUsdUNBS0M7OztJQUpDLGlDQUFhOztJQUViLGtDQUFXOztJQUNYLG9DQUFpQjs7QUFHbkI7SUFrS0UsdUJBQW9CLEdBQXNCLEVBQVUsSUFBbUI7UUFBbkQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFlO1FBM0l2RSxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0Qix1QkFBa0IsR0FBd0IsRUFBRSxDQUFDO1FBQzdDLHFCQUFnQixHQUF3QixFQUFFLENBQUM7O1FBRTNDLFdBQU0sR0FBNkIsbUJBQUEsRUFBRSxFQUE0QixDQUFDO1FBQ2xFLG1CQUFjLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN2QixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN6QixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7O1FBR3hCLGlC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QUN2QixzQ0FBc0I7O0lBQ3RCLDJDQUE2Qzs7SUFDN0MseUNBQTJDOztJQUUzQywrQkFBa0U7O0lBQ2xFLHVDQUErQjs7Ozs7SUFDL0IsaUNBQWlDOzs7OztJQUNqQyx5Q0FBaUM7O0lBQ2pDLDRDQUF5RTs7SUFFekUscUNBQW1GOztJQUNuRixrQ0FBMkI7O0lBQzNCLG1DQUE0Qjs7SUFDNUIsd0NBQWlDOztJQUNqQyxrQ0FBMkI7O0lBQzNCLHlDQUFpQzs7SUFDakMsZ0NBQXlCOztJQUN6QiwrQkFBd0I7O0lBQ3hCLGdDQUF5Qjs7SUFDekIsZ0NBQThDOztJQUM5QywrQkFBb0Q7O0lBQ3BELGtDQUF3Qzs7SUFDeEMsaUNBQTBDOztJQUMxQyx1Q0FBZ0Q7O0lBQ2hELHVDQUFnRDs7SUFDaEQsbUNBQTRDOztJQUM1QyxxQ0FBOEM7O0lBQzlDLDJDQUFvRDs7SUFDcEQsd0NBQWlFOztJQUNqRSxxQ0FBb0U7O0lBQ3BFLDRDQUFtRzs7SUFFbkcsdUNBQW9FOzs7OztJQTBHeEQsNEJBQThCOzs7OztJQUFFLDZCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGlzTm90TmlsLCBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekRyb3BEb3duQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XHJcbmltcG9ydCB7IE56STE4bkludGVyZmFjZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbmV4cG9ydCB0eXBlIE56VGhGaWx0ZXJUeXBlID0gQXJyYXk8eyB0ZXh0OiBzdHJpbmc7IHZhbHVlOiBhbnk7IGJ5RGVmYXVsdD86IGJvb2xlYW4gfT47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE56VGhJdGVtSW50ZXJmYWNlIHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIHZhbHVlOiBhbnk7XHJcbiAgY2hlY2tlZDogYm9vbGVhbjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAndGg6bm90KC5uei1kaXNhYmxlLXRoKScsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGguY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXRhYmxlLWNvbHVtbi1oYXMtYWN0aW9uc10nOiAnbnpTaG93RmlsdGVyIHx8IG56U2hvd1NvcnQgfHwgbnpDdXN0b21GaWx0ZXInLFxyXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtY29sdW1uLWhhcy1maWx0ZXJzXSc6ICduelNob3dGaWx0ZXIgfHwgbnpDdXN0b21GaWx0ZXInLFxyXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtY29sdW1uLWhhcy1zb3J0ZXJzXSc6ICduelNob3dTb3J0JyxcclxuICAgICdbY2xhc3MuYW50LXRhYmxlLXNlbGVjdGlvbi1jb2x1bW4tY3VzdG9tXSc6ICduelNob3dSb3dTZWxlY3Rpb24nLFxyXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtc2VsZWN0aW9uLWNvbHVtbl0nOiAnbnpTaG93Q2hlY2tib3gnLFxyXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtZXhwYW5kLWljb24tdGhdJzogJ256RXhwYW5kJyxcclxuICAgICdbY2xhc3MuYW50LXRhYmxlLXRoLWxlZnQtc3RpY2t5XSc6ICduekxlZnQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtdGgtcmlnaHQtc3RpY2t5XSc6ICduelJpZ2h0JyxcclxuICAgICdbY2xhc3MuYW50LXRhYmxlLWNvbHVtbi1zb3J0XSc6IGBuelNvcnQgPT09ICdkZXNjZW5kJyB8fCBuelNvcnQgPT09ICdhc2NlbmQnYCxcclxuICAgICdbc3R5bGUubGVmdF0nOiAnbnpMZWZ0JyxcclxuICAgICdbc3R5bGUucmlnaHRdJzogJ256UmlnaHQnLFxyXG4gICAgJ1tzdHlsZS50ZXh0LWFsaWduXSc6ICduekFsaWduJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56VGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBoYXNGaWx0ZXJWYWx1ZSA9IGZhbHNlO1xyXG4gIGZpbHRlclZpc2libGUgPSBmYWxzZTtcclxuICBtdWx0aXBsZUZpbHRlckxpc3Q6IE56VGhJdGVtSW50ZXJmYWNlW10gPSBbXTtcclxuICBzaW5nbGVGaWx0ZXJMaXN0OiBOelRoSXRlbUludGVyZmFjZVtdID0gW107XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIGxvY2FsZTogTnpJMThuSW50ZXJmYWNlWydUYWJsZSddID0ge30gYXMgTnpJMThuSW50ZXJmYWNlWydUYWJsZSddO1xyXG4gIG56V2lkdGhDaGFuZ2UkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIGhhc0RlZmF1bHRGaWx0ZXIgPSBmYWxzZTtcclxuICBAVmlld0NoaWxkKE56RHJvcERvd25Db21wb25lbnQpIG56RHJvcERvd25Db21wb25lbnQ6IE56RHJvcERvd25Db21wb25lbnQ7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIEBJbnB1dCgpIG56U2VsZWN0aW9uczogQXJyYXk8eyB0ZXh0OiBzdHJpbmc7IG9uU2VsZWN0KC4uLmFyZ3M6IGFueVtdKTogYW55IH0+ID0gW107XHJcbiAgQElucHV0KCkgbnpDaGVja2VkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56SW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56U29ydEtleTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56RmlsdGVyTXVsdGlwbGUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG56V2lkdGg6IHN0cmluZztcclxuICBASW5wdXQoKSBuekxlZnQ6IHN0cmluZztcclxuICBASW5wdXQoKSBuelJpZ2h0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpBbGlnbjogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdjZW50ZXInO1xyXG4gIEBJbnB1dCgpIG56U29ydDogJ2FzY2VuZCcgfCAnZGVzY2VuZCcgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBuekZpbHRlcnM6IE56VGhGaWx0ZXJUeXBlID0gW107XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RXhwYW5kID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0NoZWNrYm94ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q3VzdG9tRmlsdGVyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1NvcnQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93RmlsdGVyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1Jvd1NlbGVjdGlvbiA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoZWNrZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U29ydENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVsbD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTb3J0Q2hhbmdlV2l0aEtleSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBrZXk6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB8IG51bGwgfT4oKTtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RmlsdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXSB8IGFueT4oKTtcclxuXHJcbiAgdXBkYXRlU29ydFZhbHVlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpTaG93U29ydCkge1xyXG4gICAgICBpZiAodGhpcy5uelNvcnQgPT09ICdkZXNjZW5kJykge1xyXG4gICAgICAgIHRoaXMuc2V0U29ydFZhbHVlKCdhc2NlbmQnKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLm56U29ydCA9PT0gJ2FzY2VuZCcpIHtcclxuICAgICAgICB0aGlzLnNldFNvcnRWYWx1ZShudWxsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFNvcnRWYWx1ZSgnZGVzY2VuZCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTb3J0VmFsdWUodmFsdWU6ICdhc2NlbmQnIHwgJ2Rlc2NlbmQnIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNvcnQgPSB2YWx1ZTtcclxuICAgIHRoaXMubnpTb3J0Q2hhbmdlV2l0aEtleS5lbWl0KHsga2V5OiB0aGlzLm56U29ydEtleSwgdmFsdWU6IHRoaXMubnpTb3J0IH0pO1xyXG4gICAgdGhpcy5uelNvcnRDaGFuZ2UuZW1pdCh0aGlzLm56U29ydCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZmlsdGVyTGlzdCgpOiBOelRoSXRlbUludGVyZmFjZVtdIHtcclxuICAgIHJldHVybiB0aGlzLm11bHRpcGxlRmlsdGVyTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLmNoZWNrZWQpLm1hcChpdGVtID0+IGl0ZW0udmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIGdldCBmaWx0ZXJWYWx1ZSgpOiBhbnkge1xyXG4gICAgY29uc3QgY2hlY2tlZEZpbHRlciA9IHRoaXMuc2luZ2xlRmlsdGVyTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5jaGVja2VkKTtcclxuICAgIHJldHVybiBjaGVja2VkRmlsdGVyID8gY2hlY2tlZEZpbHRlci52YWx1ZSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVGaWx0ZXJTdGF0dXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekZpbHRlck11bHRpcGxlKSB7XHJcbiAgICAgIHRoaXMuaGFzRmlsdGVyVmFsdWUgPSB0aGlzLmZpbHRlckxpc3QubGVuZ3RoID4gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFzRmlsdGVyVmFsdWUgPSBpc05vdE5pbCh0aGlzLmZpbHRlclZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlYXJjaCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlRmlsdGVyU3RhdHVzKCk7XHJcbiAgICBpZiAodGhpcy5uekZpbHRlck11bHRpcGxlKSB7XHJcbiAgICAgIHRoaXMubnpGaWx0ZXJDaGFuZ2UuZW1pdCh0aGlzLmZpbHRlckxpc3QpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uekZpbHRlckNoYW5nZS5lbWl0KHRoaXMuZmlsdGVyVmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXRNdWx0aXBsZUZpbHRlckxpc3QodHJ1ZSk7XHJcbiAgICB0aGlzLmluaXRTaW5nbGVGaWx0ZXJMaXN0KHRydWUpO1xyXG4gICAgdGhpcy5oYXNGaWx0ZXJWYWx1ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tNdWx0aXBsZShmaWx0ZXI6IE56VGhJdGVtSW50ZXJmYWNlKTogdm9pZCB7XHJcbiAgICBmaWx0ZXIuY2hlY2tlZCA9ICFmaWx0ZXIuY2hlY2tlZDtcclxuICB9XHJcblxyXG4gIGNoZWNrU2luZ2xlKGZpbHRlcjogTnpUaEl0ZW1JbnRlcmZhY2UpOiB2b2lkIHtcclxuICAgIHRoaXMuc2luZ2xlRmlsdGVyTGlzdC5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uY2hlY2tlZCA9IGl0ZW0gPT09IGZpbHRlcikpO1xyXG4gIH1cclxuXHJcbiAgaGlkZURyb3BEb3duKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekRyb3BEb3duQ29tcG9uZW50LnNldFZpc2libGVTdGF0ZVdoZW4oZmFsc2UpO1xyXG4gICAgdGhpcy5maWx0ZXJWaXNpYmxlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBkcm9wRG93blZpc2libGVDaGFuZ2UodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZmlsdGVyVmlzaWJsZSA9IHZhbHVlO1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICB0aGlzLnNlYXJjaCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdE11bHRpcGxlRmlsdGVyTGlzdChmb3JjZT86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubXVsdGlwbGVGaWx0ZXJMaXN0ID0gdGhpcy5uekZpbHRlcnMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBjaGVja2VkID0gZm9yY2UgPyBmYWxzZSA6ICEhaXRlbS5ieURlZmF1bHQ7XHJcbiAgICAgIGlmIChjaGVja2VkKSB7XHJcbiAgICAgICAgdGhpcy5oYXNEZWZhdWx0RmlsdGVyID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyB0ZXh0OiBpdGVtLnRleHQsIHZhbHVlOiBpdGVtLnZhbHVlLCBjaGVja2VkIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2hlY2tEZWZhdWx0RmlsdGVycygpO1xyXG4gIH1cclxuXHJcbiAgaW5pdFNpbmdsZUZpbHRlckxpc3QoZm9yY2U/OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLnNpbmdsZUZpbHRlckxpc3QgPSB0aGlzLm56RmlsdGVycy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IGNoZWNrZWQgPSBmb3JjZSA/IGZhbHNlIDogISFpdGVtLmJ5RGVmYXVsdDtcclxuICAgICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICB0aGlzLmhhc0RlZmF1bHRGaWx0ZXIgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7IHRleHQ6IGl0ZW0udGV4dCwgdmFsdWU6IGl0ZW0udmFsdWUsIGNoZWNrZWQgfTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jaGVja0RlZmF1bHRGaWx0ZXJzKCk7XHJcbiAgfVxyXG5cclxuICBjaGVja0RlZmF1bHRGaWx0ZXJzKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm56RmlsdGVycyB8fCB0aGlzLm56RmlsdGVycy5sZW5ndGggPT09IDAgfHwgIXRoaXMuaGFzRGVmYXVsdEZpbHRlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZUZpbHRlclN0YXR1cygpO1xyXG4gIH1cclxuXHJcbiAgbWFyRm9yQ2hlY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1RhYmxlJyk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uekZpbHRlcnMpIHtcclxuICAgICAgdGhpcy5pbml0TXVsdGlwbGVGaWx0ZXJMaXN0KCk7XHJcbiAgICAgIHRoaXMuaW5pdFNpbmdsZUZpbHRlckxpc3QoKTtcclxuICAgICAgdGhpcy51cGRhdGVGaWx0ZXJTdGF0dXMoKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56V2lkdGgpIHtcclxuICAgICAgdGhpcy5ueldpZHRoQ2hhbmdlJC5uZXh0KHRoaXMubnpXaWR0aCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=