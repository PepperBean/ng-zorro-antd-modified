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
import { getLocaleNumberSymbol, NumberSymbol } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, LOCALE_ID, TemplateRef, ViewEncapsulation } from '@angular/core';
export class NzStatisticNumberComponent {
    /**
     * @param {?} locale_id
     */
    constructor(locale_id) {
        this.locale_id = locale_id;
        this.displayInt = '';
        this.displayDecimal = '';
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.formatNumber();
    }
    /**
     * @private
     * @return {?}
     */
    formatNumber() {
        /** @type {?} */
        const decimalSeparator = typeof this.nzValue === 'number' ? '.' : getLocaleNumberSymbol(this.locale_id, NumberSymbol.Decimal);
        /** @type {?} */
        const value = String(this.nzValue);
        const [int, decimal] = value.split(decimalSeparator);
        this.displayInt = int;
        this.displayDecimal = decimal ? `${decimalSeparator}${decimal}` : '';
    }
}
NzStatisticNumberComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-statistic-number',
                exportAs: 'nzStatisticNumber',
                template: "<ng-container\r\n  *ngIf=\"nzValueTemplate\"\r\n  [ngTemplateOutlet]=\"nzValueTemplate\"\r\n  [ngTemplateOutletContext]=\"{ $implicit: nzValue }\">\r\n</ng-container>\r\n<ng-container *ngIf=\"!nzValueTemplate\">\r\n  <span *ngIf=\"displayInt\" class=\"ant-statistic-content-value-int\">{{ displayInt }}</span>\r\n  <span *ngIf=\"displayDecimal\" class=\"ant-statistic-content-value-decimal\">{{ displayDecimal }}</span>\r\n</ng-container>\r\n",
                host: {
                    class: 'ant-statistic-content-value'
                },
                styles: ['nz-number { display: inline }']
            }] }
];
/** @nocollapse */
NzStatisticNumberComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
NzStatisticNumberComponent.propDecorators = {
    nzValue: [{ type: Input }],
    nzValueTemplate: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzStatisticNumberComponent.prototype.nzValue;
    /** @type {?} */
    NzStatisticNumberComponent.prototype.nzValueTemplate;
    /** @type {?} */
    NzStatisticNumberComponent.prototype.displayInt;
    /** @type {?} */
    NzStatisticNumberComponent.prototype.displayDecimal;
    /**
     * @type {?}
     * @private
     */
    NzStatisticNumberComponent.prototype.locale_id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RhdGlzdGljLW51bWJlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3N0YXRpc3RpYy8iLCJzb3VyY2VzIjpbIm56LXN0YXRpc3RpYy1udW1iZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULE1BQU0sRUFDTixLQUFLLEVBQ0wsU0FBUyxFQUVULFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFldkIsTUFBTSxPQUFPLDBCQUEwQjs7OztJQU9yQyxZQUF1QyxTQUFpQjtRQUFqQixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBSHhELGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsbUJBQWMsR0FBRyxFQUFFLENBQUM7SUFFdUMsQ0FBQzs7OztJQUU1RCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRU8sWUFBWTs7Y0FDWixnQkFBZ0IsR0FDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUM7O2NBQ2hHLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztjQUM1QixDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1FBRXBELElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLGdCQUFnQixHQUFHLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdkUsQ0FBQzs7O1lBakNGLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLHNjQUFtRDtnQkFDbkQsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSw2QkFBNkI7aUJBQ3JDO3lCQUNRLCtCQUErQjthQUN6Qzs7Ozt5Q0FRYyxNQUFNLFNBQUMsU0FBUzs7O3NCQU41QixLQUFLOzhCQUNMLEtBQUs7Ozs7SUFETiw2Q0FBdUM7O0lBQ3ZDLHFEQUEyRTs7SUFFM0UsZ0RBQWdCOztJQUNoQixvREFBb0I7Ozs7O0lBRVIsK0NBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBnZXRMb2NhbGVOdW1iZXJTeW1ib2wsIE51bWJlclN5bWJvbCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBMT0NBTEVfSUQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56U3RhdGlzdGljVmFsdWVUeXBlIH0gZnJvbSAnLi9uei1zdGF0aXN0aWMtZGVmaW5pdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzZWxlY3RvcjogJ256LXN0YXRpc3RpYy1udW1iZXInLFxyXG4gIGV4cG9ydEFzOiAnbnpTdGF0aXN0aWNOdW1iZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1zdGF0aXN0aWMtbnVtYmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2FudC1zdGF0aXN0aWMtY29udGVudC12YWx1ZSdcclxuICB9LFxyXG4gIHN0eWxlczogWyduei1udW1iZXIgeyBkaXNwbGF5OiBpbmxpbmUgfSddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelN0YXRpc3RpY051bWJlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbnpWYWx1ZTogTnpTdGF0aXN0aWNWYWx1ZVR5cGU7XHJcbiAgQElucHV0KCkgbnpWYWx1ZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpTdGF0aXN0aWNWYWx1ZVR5cGUgfT47XHJcblxyXG4gIGRpc3BsYXlJbnQgPSAnJztcclxuICBkaXNwbGF5RGVjaW1hbCA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBsb2NhbGVfaWQ6IHN0cmluZykge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvcm1hdE51bWJlcigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtYXROdW1iZXIoKTogdm9pZCB7XHJcbiAgICBjb25zdCBkZWNpbWFsU2VwYXJhdG9yOiBzdHJpbmcgPVxyXG4gICAgICB0eXBlb2YgdGhpcy5uelZhbHVlID09PSAnbnVtYmVyJyA/ICcuJyA6IGdldExvY2FsZU51bWJlclN5bWJvbCh0aGlzLmxvY2FsZV9pZCwgTnVtYmVyU3ltYm9sLkRlY2ltYWwpO1xyXG4gICAgY29uc3QgdmFsdWUgPSBTdHJpbmcodGhpcy5uelZhbHVlKTtcclxuICAgIGNvbnN0IFtpbnQsIGRlY2ltYWxdID0gdmFsdWUuc3BsaXQoZGVjaW1hbFNlcGFyYXRvcik7XHJcblxyXG4gICAgdGhpcy5kaXNwbGF5SW50ID0gaW50O1xyXG4gICAgdGhpcy5kaXNwbGF5RGVjaW1hbCA9IGRlY2ltYWwgPyBgJHtkZWNpbWFsU2VwYXJhdG9yfSR7ZGVjaW1hbH1gIDogJyc7XHJcbiAgfVxyXG59XHJcbiJdfQ==