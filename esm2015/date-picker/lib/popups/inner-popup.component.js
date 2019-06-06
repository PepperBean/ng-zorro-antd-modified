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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate } from '../candy-date/candy-date';
export class InnerPopupComponent {
    constructor() {
        this.panelModeChange = new EventEmitter();
        this.headerChange = new EventEmitter(); // Emitted when user changed the header's value
        // Emitted when user changed the header's value
        this.selectDate = new EventEmitter(); // Emitted when the date is selected by click the date panel
        // Emitted when the date is selected by click the date panel
        this.selectTime = new EventEmitter();
        this.dayHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
        // Emitted when hover on a day by mouse enter
        this.prefixCls = 'ant-calendar';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.value && !this.value) {
            this.value = new CandyDate();
        }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onSelectTime(date) {
        this.selectTime.emit(new CandyDate(date));
    }
    // The value real changed to outside
    /**
     * @param {?} date
     * @return {?}
     */
    onSelectDate(date) {
        /** @type {?} */
        const value = date instanceof CandyDate ? date : new CandyDate(date);
        this.selectDate.emit(value);
    }
}
InnerPopupComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'inner-popup',
                exportAs: 'innerPopup',
                template: "<calendar-header\r\n  [(panelMode)]=\"panelMode\"\r\n  (panelModeChange)=\"panelModeChange.emit($event)\"\r\n  [(value)]=\"value\"\r\n  (valueChange)=\"headerChange.emit($event)\"\r\n  [locale]=\"locale\"\r\n  [showTimePicker]=\"showTimePicker\"\r\n  [enablePrev]=\"enablePrev\"\r\n  [enableNext]=\"enableNext\"\r\n></calendar-header>\r\n\r\n<ng-container *ngIf=\"showTimePicker && timeOptions\">\r\n  <nz-time-picker-panel\r\n    [nzInDatePicker]=\"true\"\r\n    [ngModel]=\"value.nativeDate\"\r\n    (ngModelChange)=\"onSelectTime($event)\"\r\n    [format]=\"timeOptions.nzFormat\"\r\n    [nzHourStep]=\"timeOptions.nzHourStep\"\r\n    [nzMinuteStep]=\"timeOptions.nzMinuteStep\"\r\n    [nzSecondStep]=\"timeOptions.nzSecondStep\"\r\n    [nzDisabledHours]=\"timeOptions.nzDisabledHours\"\r\n    [nzDisabledMinutes]=\"timeOptions.nzDisabledMinutes\"\r\n    [nzDisabledSeconds]=\"timeOptions.nzDisabledSeconds\"\r\n    [nzHideDisabledOptions]=\"timeOptions.nzHideDisabledOptions\"\r\n    [nzDefaultOpenValue]=\"timeOptions.nzDefaultOpenValue\"\r\n    [nzAddOn]=\"timeOptions.nzAddOn\"\r\n  ></nz-time-picker-panel>\r\n</ng-container>\r\n\r\n<div class=\"{{ prefixCls }}-body\">\r\n  <date-table\r\n    [locale]=\"locale\"\r\n    [showWeek]=\"showWeek\"\r\n    [value]=\"value\"\r\n    (valueChange)=\"onSelectDate($event)\"\r\n    showWeekNumber=\"false\"\r\n    [disabledDate]=\"disabledDate\"\r\n    [dateRender]=\"dateRender\"\r\n    [selectedValue]=\"selectedValue\"\r\n    [hoverValue]=\"hoverValue\"\r\n    (dayHover)=\"dayHover.emit($event)\"\r\n  ></date-table>\r\n</div>"
            }] }
];
/** @nocollapse */
InnerPopupComponent.ctorParameters = () => [];
InnerPopupComponent.propDecorators = {
    showWeek: [{ type: Input }],
    locale: [{ type: Input }],
    showTimePicker: [{ type: Input }],
    timeOptions: [{ type: Input }],
    enablePrev: [{ type: Input }],
    enableNext: [{ type: Input }],
    disabledDate: [{ type: Input }],
    dateRender: [{ type: Input }],
    selectedValue: [{ type: Input }],
    hoverValue: [{ type: Input }],
    panelMode: [{ type: Input }],
    panelModeChange: [{ type: Output }],
    value: [{ type: Input }],
    headerChange: [{ type: Output }],
    selectDate: [{ type: Output }],
    selectTime: [{ type: Output }],
    dayHover: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    InnerPopupComponent.prototype.showWeek;
    /** @type {?} */
    InnerPopupComponent.prototype.locale;
    /** @type {?} */
    InnerPopupComponent.prototype.showTimePicker;
    /** @type {?} */
    InnerPopupComponent.prototype.timeOptions;
    /** @type {?} */
    InnerPopupComponent.prototype.enablePrev;
    /** @type {?} */
    InnerPopupComponent.prototype.enableNext;
    /** @type {?} */
    InnerPopupComponent.prototype.disabledDate;
    /** @type {?} */
    InnerPopupComponent.prototype.dateRender;
    /** @type {?} */
    InnerPopupComponent.prototype.selectedValue;
    /** @type {?} */
    InnerPopupComponent.prototype.hoverValue;
    /** @type {?} */
    InnerPopupComponent.prototype.panelMode;
    /** @type {?} */
    InnerPopupComponent.prototype.panelModeChange;
    /** @type {?} */
    InnerPopupComponent.prototype.value;
    /** @type {?} */
    InnerPopupComponent.prototype.headerChange;
    /** @type {?} */
    InnerPopupComponent.prototype.selectDate;
    /** @type {?} */
    InnerPopupComponent.prototype.selectTime;
    /** @type {?} */
    InnerPopupComponent.prototype.dayHover;
    /** @type {?} */
    InnerPopupComponent.prototype.prefixCls;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItcG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi9wb3B1cHMvaW5uZXItcG9wdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBS3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVVyRCxNQUFNLE9BQU8sbUJBQW1CO0lBMEI5QjtRQVhtQixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFJaEQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDLENBQUMsK0NBQStDOztRQUM3RixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQyxDQUFDLDREQUE0RDs7UUFDeEcsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFDM0MsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUMsQ0FBQyw2Q0FBNkM7O1FBRTFHLGNBQVMsR0FBVyxjQUFjLENBQUM7SUFFcEIsQ0FBQzs7OztJQUVoQixRQUFRLEtBQVUsQ0FBQzs7Ozs7SUFFbkIsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBVTtRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7OztJQUdELFlBQVksQ0FBQyxJQUFzQjs7Y0FDM0IsS0FBSyxHQUFHLElBQUksWUFBWSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQ3BFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQXBERixTQUFTLFNBQUM7Z0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztnQkFFL0MsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSxZQUFZO2dCQUN0Qix1akRBQXlDO2FBQzFDOzs7Ozt1QkFFRSxLQUFLO3FCQUVMLEtBQUs7NkJBQ0wsS0FBSzswQkFFTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLO3lCQUNMLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUVMLEtBQUs7OEJBQ0wsTUFBTTtvQkFFTixLQUFLOzJCQUVMLE1BQU07eUJBQ04sTUFBTTt5QkFDTixNQUFNO3VCQUNOLE1BQU07Ozs7SUFyQlAsdUNBQTJCOztJQUUzQixxQ0FBeUM7O0lBQ3pDLDZDQUFpQzs7SUFFakMsMENBQTBCOztJQUMxQix5Q0FBNkI7O0lBQzdCLHlDQUE2Qjs7SUFDN0IsMkNBQXNDOztJQUN0Qyx5Q0FBOEQ7O0lBQzlELDRDQUFvQzs7SUFDcEMseUNBQWlDOztJQUVqQyx3Q0FBOEI7O0lBQzlCLDhDQUFtRTs7SUFFbkUsb0NBQTBCOztJQUUxQiwyQ0FBZ0U7O0lBQ2hFLHlDQUE4RDs7SUFDOUQseUNBQThEOztJQUM5RCx1Q0FBNEQ7O0lBRTVELHdDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEZ1bmN0aW9uUHJvcCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgRGlzYWJsZWREYXRlRm4sIFBhbmVsTW9kZSB9IGZyb20gJy4uLy4uL3N0YW5kYXJkLXR5cGVzJztcclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi4vY2FuZHktZGF0ZS9jYW5keS1kYXRlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnaW5uZXItcG9wdXAnLFxyXG4gIGV4cG9ydEFzOiAnaW5uZXJQb3B1cCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdpbm5lci1wb3B1cC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIElubmVyUG9wdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgc2hvd1dlZWs6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgc2hvd1RpbWVQaWNrZXI6IGJvb2xlYW47XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBJbnB1dCgpIHRpbWVPcHRpb25zOiBhbnk7XHJcbiAgQElucHV0KCkgZW5hYmxlUHJldjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBlbmFibGVOZXh0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZTogRGlzYWJsZWREYXRlRm47XHJcbiAgQElucHV0KCkgZGF0ZVJlbmRlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcclxuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlOiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxyXG4gIEBJbnB1dCgpIGhvdmVyVmFsdWU6IENhbmR5RGF0ZVtdOyAvLyBSYW5nZSBPTkxZXHJcblxyXG4gIEBJbnB1dCgpIHBhbmVsTW9kZTogUGFuZWxNb2RlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBwYW5lbE1vZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBhbmVsTW9kZT4oKTtcclxuXHJcbiAgQElucHV0KCkgdmFsdWU6IENhbmR5RGF0ZTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGhlYWRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpOyAvLyBFbWl0dGVkIHdoZW4gdXNlciBjaGFuZ2VkIHRoZSBoZWFkZXIncyB2YWx1ZVxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3REYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7IC8vIEVtaXR0ZWQgd2hlbiB0aGUgZGF0ZSBpcyBzZWxlY3RlZCBieSBjbGljayB0aGUgZGF0ZSBwYW5lbFxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3RUaW1lID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRheUhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7IC8vIEVtaXR0ZWQgd2hlbiBob3ZlciBvbiBhIGRheSBieSBtb3VzZSBlbnRlclxyXG5cclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXInO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMudmFsdWUgJiYgIXRoaXMudmFsdWUpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IG5ldyBDYW5keURhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2VsZWN0VGltZShkYXRlOiBEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdFRpbWUuZW1pdChuZXcgQ2FuZHlEYXRlKGRhdGUpKTtcclxuICB9XHJcblxyXG4gIC8vIFRoZSB2YWx1ZSByZWFsIGNoYW5nZWQgdG8gb3V0c2lkZVxyXG4gIG9uU2VsZWN0RGF0ZShkYXRlOiBDYW5keURhdGUgfCBEYXRlKTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGRhdGUgaW5zdGFuY2VvZiBDYW5keURhdGUgPyBkYXRlIDogbmV3IENhbmR5RGF0ZShkYXRlKTtcclxuICAgIHRoaXMuc2VsZWN0RGF0ZS5lbWl0KHZhbHVlKTtcclxuICB9XHJcbn1cclxuIl19