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
export class NzThComponent {
    /**
     * @param {?} cdr
     * @param {?} i18n
     */
    constructor(cdr, i18n) {
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
    updateSortValue() {
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setSortValue(value) {
        this.nzSort = value;
        this.nzSortChangeWithKey.emit({ key: this.nzSortKey, value: this.nzSort });
        this.nzSortChange.emit(this.nzSort);
    }
    /**
     * @return {?}
     */
    get filterList() {
        return this.multipleFilterList.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.checked)).map((/**
         * @param {?} item
         * @return {?}
         */
        item => item.value));
    }
    /* tslint:disable-next-line:no-any */
    /**
     * @return {?}
     */
    get filterValue() {
        /** @type {?} */
        const checkedFilter = this.singleFilterList.find((/**
         * @param {?} item
         * @return {?}
         */
        item => item.checked));
        return checkedFilter ? checkedFilter.value : null;
    }
    /**
     * @return {?}
     */
    updateFilterStatus() {
        if (this.nzFilterMultiple) {
            this.hasFilterValue = this.filterList.length > 0;
        }
        else {
            this.hasFilterValue = isNotNil(this.filterValue);
        }
    }
    /**
     * @return {?}
     */
    search() {
        this.updateFilterStatus();
        if (this.nzFilterMultiple) {
            this.nzFilterChange.emit(this.filterList);
        }
        else {
            this.nzFilterChange.emit(this.filterValue);
        }
    }
    /**
     * @return {?}
     */
    reset() {
        this.initMultipleFilterList(true);
        this.initSingleFilterList(true);
        this.hasFilterValue = false;
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    checkMultiple(filter) {
        filter.checked = !filter.checked;
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    checkSingle(filter) {
        this.singleFilterList.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => (item.checked = item === filter)));
    }
    /**
     * @return {?}
     */
    hideDropDown() {
        this.nzDropDownComponent.setVisibleStateWhen(false);
        this.filterVisible = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    dropDownVisibleChange(value) {
        this.filterVisible = value;
        if (!value) {
            this.search();
        }
    }
    /**
     * @param {?=} force
     * @return {?}
     */
    initMultipleFilterList(force) {
        this.multipleFilterList = this.nzFilters.map((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            /** @type {?} */
            const checked = force ? false : !!item.byDefault;
            if (checked) {
                this.hasDefaultFilter = true;
            }
            return { text: item.text, value: item.value, checked };
        }));
        this.checkDefaultFilters();
    }
    /**
     * @param {?=} force
     * @return {?}
     */
    initSingleFilterList(force) {
        this.singleFilterList = this.nzFilters.map((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            /** @type {?} */
            const checked = force ? false : !!item.byDefault;
            if (checked) {
                this.hasDefaultFilter = true;
            }
            return { text: item.text, value: item.value, checked };
        }));
        this.checkDefaultFilters();
    }
    /**
     * @return {?}
     */
    checkDefaultFilters() {
        if (!this.nzFilters || this.nzFilters.length === 0 || !this.hasDefaultFilter) {
            return;
        }
        this.updateFilterStatus();
    }
    /**
     * @return {?}
     */
    marForCheck() {
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Table');
            this.cdr.markForCheck();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzFilters) {
            this.initMultipleFilterList();
            this.initSingleFilterList();
            this.updateFilterStatus();
        }
        if (changes.nzWidth) {
            this.nzWidthChange$.next(this.nzWidth);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
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
                    '[class.ant-table-column-sort]': `nzSort === 'descend' || nzSort === 'ascend'`,
                    '[style.left]': 'nzLeft',
                    '[style.right]': 'nzRight',
                    '[style.text-align]': 'nzAlign'
                }
            }] }
];
/** @nocollapse */
NzThComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzI18nService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90YWJsZS8iLCJzb3VyY2VzIjpbIm56LXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRU4sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdELE9BQU8sRUFBbUIsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFLcEUsdUNBS0M7OztJQUpDLGlDQUFhOztJQUViLGtDQUFXOztJQUNYLG9DQUFpQjs7QUF5Qm5CLE1BQU0sT0FBTyxhQUFhOzs7OztJQTRJeEIsWUFBb0IsR0FBc0IsRUFBVSxJQUFtQjtRQUFuRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQWU7UUEzSXZFLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLHVCQUFrQixHQUF3QixFQUFFLENBQUM7UUFDN0MscUJBQWdCLEdBQXdCLEVBQUUsQ0FBQzs7UUFFM0MsV0FBTSxHQUE2QixtQkFBQSxFQUFFLEVBQTRCLENBQUM7UUFDbEUsbUJBQWMsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3ZCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLHFCQUFnQixHQUFH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QW9EOztJQUNwRCxrQ0FBd0M7O0lBQ3hDLGlDQUEwQzs7SUFDMUMsdUNBQWdEOztJQUNoRCx1Q0FBZ0Q7O0lBQ2hELG1DQUE0Qzs7SUFDNUMscUNBQThDOztJQUM5QywyQ0FBb0Q7O0lBQ3BELHdDQUFpRTs7SUFDakUscUNBQW9FOztJQUNwRSw0Q0FBbUc7O0lBRW5HLHVDQUFvRTs7Ozs7SUEwR3hELDRCQUE4Qjs7Ozs7SUFBRSw2QkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBpc05vdE5pbCwgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpEcm9wRG93bkNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xyXG5pbXBvcnQgeyBOekkxOG5JbnRlcmZhY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG5leHBvcnQgdHlwZSBOelRoRmlsdGVyVHlwZSA9IEFycmF5PHsgdGV4dDogc3RyaW5nOyB2YWx1ZTogYW55OyBieURlZmF1bHQ/OiBib29sZWFuIH0+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOelRoSXRlbUludGVyZmFjZSB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICB2YWx1ZTogYW55O1xyXG4gIGNoZWNrZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ3RoOm5vdCgubnotZGlzYWJsZS10aCknLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRoLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC10YWJsZS1jb2x1bW4taGFzLWFjdGlvbnNdJzogJ256U2hvd0ZpbHRlciB8fCBuelNob3dTb3J0IHx8IG56Q3VzdG9tRmlsdGVyJyxcclxuICAgICdbY2xhc3MuYW50LXRhYmxlLWNvbHVtbi1oYXMtZmlsdGVyc10nOiAnbnpTaG93RmlsdGVyIHx8IG56Q3VzdG9tRmlsdGVyJyxcclxuICAgICdbY2xhc3MuYW50LXRhYmxlLWNvbHVtbi1oYXMtc29ydGVyc10nOiAnbnpTaG93U29ydCcsXHJcbiAgICAnW2NsYXNzLmFudC10YWJsZS1zZWxlY3Rpb24tY29sdW1uLWN1c3RvbV0nOiAnbnpTaG93Um93U2VsZWN0aW9uJyxcclxuICAgICdbY2xhc3MuYW50LXRhYmxlLXNlbGVjdGlvbi1jb2x1bW5dJzogJ256U2hvd0NoZWNrYm94JyxcclxuICAgICdbY2xhc3MuYW50LXRhYmxlLWV4cGFuZC1pY29uLXRoXSc6ICduekV4cGFuZCcsXHJcbiAgICAnW2NsYXNzLmFudC10YWJsZS10aC1sZWZ0LXN0aWNreV0nOiAnbnpMZWZ0JyxcclxuICAgICdbY2xhc3MuYW50LXRhYmxlLXRoLXJpZ2h0LXN0aWNreV0nOiAnbnpSaWdodCcsXHJcbiAgICAnW2NsYXNzLmFudC10YWJsZS1jb2x1bW4tc29ydF0nOiBgbnpTb3J0ID09PSAnZGVzY2VuZCcgfHwgbnpTb3J0ID09PSAnYXNjZW5kJ2AsXHJcbiAgICAnW3N0eWxlLmxlZnRdJzogJ256TGVmdCcsXHJcbiAgICAnW3N0eWxlLnJpZ2h0XSc6ICduelJpZ2h0JyxcclxuICAgICdbc3R5bGUudGV4dC1hbGlnbl0nOiAnbnpBbGlnbidcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRoQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgaGFzRmlsdGVyVmFsdWUgPSBmYWxzZTtcclxuICBmaWx0ZXJWaXNpYmxlID0gZmFsc2U7XHJcbiAgbXVsdGlwbGVGaWx0ZXJMaXN0OiBOelRoSXRlbUludGVyZmFjZVtdID0gW107XHJcbiAgc2luZ2xlRmlsdGVyTGlzdDogTnpUaEl0ZW1JbnRlcmZhY2VbXSA9IFtdO1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBsb2NhbGU6IE56STE4bkludGVyZmFjZVsnVGFibGUnXSA9IHt9IGFzIE56STE4bkludGVyZmFjZVsnVGFibGUnXTtcclxuICBueldpZHRoQ2hhbmdlJCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBoYXNEZWZhdWx0RmlsdGVyID0gZmFsc2U7XHJcbiAgQFZpZXdDaGlsZChOekRyb3BEb3duQ29tcG9uZW50KSBuekRyb3BEb3duQ29tcG9uZW50OiBOekRyb3BEb3duQ29tcG9uZW50O1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBASW5wdXQoKSBuelNlbGVjdGlvbnM6IEFycmF5PHsgdGV4dDogc3RyaW5nOyBvblNlbGVjdCguLi5hcmdzOiBhbnlbXSk6IGFueSB9PiA9IFtdO1xyXG4gIEBJbnB1dCgpIG56Q2hlY2tlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56RGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuelNvcnRLZXk6IHN0cmluZztcclxuICBASW5wdXQoKSBuekZpbHRlck11bHRpcGxlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBueldpZHRoOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpMZWZ0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpSaWdodDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56QWxpZ246ICdsZWZ0JyB8ICdyaWdodCcgfCAnY2VudGVyJztcclxuICBASW5wdXQoKSBuelNvcnQ6ICdhc2NlbmQnIHwgJ2Rlc2NlbmQnIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgbnpGaWx0ZXJzOiBOelRoRmlsdGVyVHlwZSA9IFtdO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekV4cGFuZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dDaGVja2JveCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekN1c3RvbUZpbHRlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dTb3J0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0ZpbHRlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dSb3dTZWxlY3Rpb24gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bGw+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U29ydENoYW5nZVdpdGhLZXkgPSBuZXcgRXZlbnRFbWl0dGVyPHsga2V5OiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfCBudWxsIH0+KCk7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekZpbHRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10gfCBhbnk+KCk7XHJcblxyXG4gIHVwZGF0ZVNvcnRWYWx1ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56U2hvd1NvcnQpIHtcclxuICAgICAgaWYgKHRoaXMubnpTb3J0ID09PSAnZGVzY2VuZCcpIHtcclxuICAgICAgICB0aGlzLnNldFNvcnRWYWx1ZSgnYXNjZW5kJyk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5uelNvcnQgPT09ICdhc2NlbmQnKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTb3J0VmFsdWUobnVsbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTb3J0VmFsdWUoJ2Rlc2NlbmQnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0U29ydFZhbHVlKHZhbHVlOiAnYXNjZW5kJyB8ICdkZXNjZW5kJyB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMubnpTb3J0ID0gdmFsdWU7XHJcbiAgICB0aGlzLm56U29ydENoYW5nZVdpdGhLZXkuZW1pdCh7IGtleTogdGhpcy5uelNvcnRLZXksIHZhbHVlOiB0aGlzLm56U29ydCB9KTtcclxuICAgIHRoaXMubnpTb3J0Q2hhbmdlLmVtaXQodGhpcy5uelNvcnQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZpbHRlckxpc3QoKTogTnpUaEl0ZW1JbnRlcmZhY2VbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBsZUZpbHRlckxpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jaGVja2VkKS5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBnZXQgZmlsdGVyVmFsdWUoKTogYW55IHtcclxuICAgIGNvbnN0IGNoZWNrZWRGaWx0ZXIgPSB0aGlzLnNpbmdsZUZpbHRlckxpc3QuZmluZChpdGVtID0+IGl0ZW0uY2hlY2tlZCk7XHJcbiAgICByZXR1cm4gY2hlY2tlZEZpbHRlciA/IGNoZWNrZWRGaWx0ZXIudmFsdWUgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRmlsdGVyU3RhdHVzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpGaWx0ZXJNdWx0aXBsZSkge1xyXG4gICAgICB0aGlzLmhhc0ZpbHRlclZhbHVlID0gdGhpcy5maWx0ZXJMaXN0Lmxlbmd0aCA+IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhc0ZpbHRlclZhbHVlID0gaXNOb3ROaWwodGhpcy5maWx0ZXJWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWFyY2goKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUZpbHRlclN0YXR1cygpO1xyXG4gICAgaWYgKHRoaXMubnpGaWx0ZXJNdWx0aXBsZSkge1xyXG4gICAgICB0aGlzLm56RmlsdGVyQ2hhbmdlLmVtaXQodGhpcy5maWx0ZXJMaXN0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubnpGaWx0ZXJDaGFuZ2UuZW1pdCh0aGlzLmZpbHRlclZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0TXVsdGlwbGVGaWx0ZXJMaXN0KHRydWUpO1xyXG4gICAgdGhpcy5pbml0U2luZ2xlRmlsdGVyTGlzdCh0cnVlKTtcclxuICAgIHRoaXMuaGFzRmlsdGVyVmFsdWUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNoZWNrTXVsdGlwbGUoZmlsdGVyOiBOelRoSXRlbUludGVyZmFjZSk6IHZvaWQge1xyXG4gICAgZmlsdGVyLmNoZWNrZWQgPSAhZmlsdGVyLmNoZWNrZWQ7XHJcbiAgfVxyXG5cclxuICBjaGVja1NpbmdsZShmaWx0ZXI6IE56VGhJdGVtSW50ZXJmYWNlKTogdm9pZCB7XHJcbiAgICB0aGlzLnNpbmdsZUZpbHRlckxpc3QuZm9yRWFjaChpdGVtID0+IChpdGVtLmNoZWNrZWQgPSBpdGVtID09PSBmaWx0ZXIpKTtcclxuICB9XHJcblxyXG4gIGhpZGVEcm9wRG93bigpOiB2b2lkIHtcclxuICAgIHRoaXMubnpEcm9wRG93bkNvbXBvbmVudC5zZXRWaXNpYmxlU3RhdGVXaGVuKGZhbHNlKTtcclxuICAgIHRoaXMuZmlsdGVyVmlzaWJsZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZHJvcERvd25WaXNpYmxlQ2hhbmdlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmZpbHRlclZpc2libGUgPSB2YWx1ZTtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgdGhpcy5zZWFyY2goKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluaXRNdWx0aXBsZUZpbHRlckxpc3QoZm9yY2U/OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm11bHRpcGxlRmlsdGVyTGlzdCA9IHRoaXMubnpGaWx0ZXJzLm1hcChpdGVtID0+IHtcclxuICAgICAgY29uc3QgY2hlY2tlZCA9IGZvcmNlID8gZmFsc2UgOiAhIWl0ZW0uYnlEZWZhdWx0O1xyXG4gICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgIHRoaXMuaGFzRGVmYXVsdEZpbHRlciA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgdGV4dDogaXRlbS50ZXh0LCB2YWx1ZTogaXRlbS52YWx1ZSwgY2hlY2tlZCB9O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNoZWNrRGVmYXVsdEZpbHRlcnMoKTtcclxuICB9XHJcblxyXG4gIGluaXRTaW5nbGVGaWx0ZXJMaXN0KGZvcmNlPzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5zaW5nbGVGaWx0ZXJMaXN0ID0gdGhpcy5uekZpbHRlcnMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCBjaGVja2VkID0gZm9yY2UgPyBmYWxzZSA6ICEhaXRlbS5ieURlZmF1bHQ7XHJcbiAgICAgIGlmIChjaGVja2VkKSB7XHJcbiAgICAgICAgdGhpcy5oYXNEZWZhdWx0RmlsdGVyID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyB0ZXh0OiBpdGVtLnRleHQsIHZhbHVlOiBpdGVtLnZhbHVlLCBjaGVja2VkIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2hlY2tEZWZhdWx0RmlsdGVycygpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tEZWZhdWx0RmlsdGVycygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5uekZpbHRlcnMgfHwgdGhpcy5uekZpbHRlcnMubGVuZ3RoID09PSAwIHx8ICF0aGlzLmhhc0RlZmF1bHRGaWx0ZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVGaWx0ZXJTdGF0dXMoKTtcclxuICB9XHJcblxyXG4gIG1hckZvckNoZWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUYWJsZScpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpGaWx0ZXJzKSB7XHJcbiAgICAgIHRoaXMuaW5pdE11bHRpcGxlRmlsdGVyTGlzdCgpO1xyXG4gICAgICB0aGlzLmluaXRTaW5nbGVGaWx0ZXJMaXN0KCk7XHJcbiAgICAgIHRoaXMudXBkYXRlRmlsdGVyU3RhdHVzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5ueldpZHRoKSB7XHJcbiAgICAgIHRoaXMubnpXaWR0aENoYW5nZSQubmV4dCh0aGlzLm56V2lkdGgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19