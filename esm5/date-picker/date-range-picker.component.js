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
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { toBoolean, valueFunctionProp, InputBoolean, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { AbstractPickerComponent } from './abstract-picker.component';
var DateRangePickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DateRangePickerComponent, _super);
    function DateRangePickerComponent(i18n, cdr, dateHelper, noAnimation) {
        var _this = _super.call(this, i18n, cdr, dateHelper, noAnimation) || this;
        _this.showWeek = false; // Should show as week picker
        _this.nzShowToday = true;
        _this.nzOnPanelChange = new EventEmitter();
        _this.nzOnCalendarChange = new EventEmitter();
        _this.nzOnOk = new EventEmitter();
        return _this;
    }
    Object.defineProperty(DateRangePickerComponent.prototype, "nzShowTime", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showTime;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showTime = typeof value === 'object' ? value : toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateRangePickerComponent.prototype, "realShowToday", {
        get: /**
         * @return {?}
         */
        function () {
            // Range not support nzShowToday currently
            return !this.isRange && this.nzShowToday;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DateRangePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        // Default format when it's empty
        if (!this.nzFormat) {
            if (this.showWeek) {
                this.nzFormat = this.dateHelper.relyOnDatePipe ? 'yyyy-ww' : 'YYYY-WW'; // Format for week
            }
            else {
                if (this.dateHelper.relyOnDatePipe) {
                    this.nzFormat = this.nzShowTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd';
                }
                else {
                    this.nzFormat = this.nzShowTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
                }
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DateRangePickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if (changes.nzRenderExtraFooter) {
            this.extraFooter = valueFunctionProp(this.nzRenderExtraFooter);
        }
        if (changes.nzShowTime || changes.nzStyle) {
            this.setFixedPickerStyle();
        }
    };
    // If has no timepicker and the user select a date by date panel, then close picker
    // If has no timepicker and the user select a date by date panel, then close picker
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePickerComponent.prototype.onValueChange = 
    // If has no timepicker and the user select a date by date panel, then close picker
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        _super.prototype.onValueChange.call(this, value);
        if (!this.nzShowTime) {
            this.closeOverlay();
        }
    };
    // Emit nzOnCalendarChange when select date by nz-range-picker
    // Emit nzOnCalendarChange when select date by nz-range-picker
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePickerComponent.prototype.onCalendarChange = 
    // Emit nzOnCalendarChange when select date by nz-range-picker
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isRange) {
            /** @type {?} */
            var rangeValue = value.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.nativeDate; }));
            this.nzOnCalendarChange.emit(rangeValue);
        }
    };
    // Emitted when done with date selecting
    // Emitted when done with date selecting
    /**
     * @return {?}
     */
    DateRangePickerComponent.prototype.onResultOk = 
    // Emitted when done with date selecting
    /**
     * @return {?}
     */
    function () {
        if (this.isRange) {
            /** @type {?} */
            var value = (/** @type {?} */ (this.nzValue));
            if (value.length) {
                this.nzOnOk.emit([value[0].nativeDate, value[1].nativeDate]);
            }
            else {
                this.nzOnOk.emit([]);
            }
        }
        else {
            if (this.nzValue) {
                this.nzOnOk.emit(((/** @type {?} */ (this.nzValue))).nativeDate);
            }
            else {
                this.nzOnOk.emit(null);
            }
        }
        this.closeOverlay();
    };
    /**
     * @param {?} open
     * @return {?}
     */
    DateRangePickerComponent.prototype.onOpenChange = /**
     * @param {?} open
     * @return {?}
     */
    function (open) {
        this.nzOnOpenChange.emit(open);
    };
    // Setup fixed style for picker
    // Setup fixed style for picker
    /**
     * @private
     * @return {?}
     */
    DateRangePickerComponent.prototype.setFixedPickerStyle = 
    // Setup fixed style for picker
    /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var showTimeFixes = {};
        if (this.nzShowTime) {
            showTimeFixes.width = this.isRange ? '350px' : '195px';
        }
        this.pickerStyle = tslib_1.__assign({}, showTimeFixes, this.nzStyle);
    };
    DateRangePickerComponent.decorators = [
        { type: Component, args: [{
                    template: "" // Just for rollup
                }] }
    ];
    /** @nocollapse */
    DateRangePickerComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ChangeDetectorRef },
        { type: DateHelperService },
        { type: NzNoAnimationDirective }
    ]; };
    DateRangePickerComponent.propDecorators = {
        nzDateRender: [{ type: Input }],
        nzDisabledTime: [{ type: Input }],
        nzRenderExtraFooter: [{ type: Input }],
        nzShowToday: [{ type: Input }],
        nzMode: [{ type: Input }],
        nzRanges: [{ type: Input }],
        nzOnPanelChange: [{ type: Output }],
        nzOnCalendarChange: [{ type: Output }],
        nzShowTime: [{ type: Input }],
        nzOnOk: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], DateRangePickerComponent.prototype, "nzShowToday", void 0);
    return DateRangePickerComponent;
}(AbstractPickerComponent));
export { DateRangePickerComponent };
if (false) {
    /** @type {?} */
    DateRangePickerComponent.prototype.showWeek;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzDateRender;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzDisabledTime;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzRenderExtraFooter;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzShowToday;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzMode;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzRanges;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzOnPanelChange;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzOnCalendarChange;
    /**
     * @type {?}
     * @private
     */
    DateRangePickerComponent.prototype._showTime;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzOnOk;
    /** @type {?} */
    DateRangePickerComponent.prototype.pickerStyle;
    /** @type {?} */
    DateRangePickerComponent.prototype.extraFooter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImRhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFHUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFnQixZQUFZLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0SCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEUsT0FBTyxFQUFFLHVCQUF1QixFQUFrQixNQUFNLDZCQUE2QixDQUFDO0FBSXRGO0lBRzhDLG9EQUF1QjtJQThCbkUsa0NBQ0UsSUFBbUIsRUFDbkIsR0FBc0IsRUFDdEIsVUFBNkIsRUFDN0IsV0FBb0M7UUFKdEMsWUFNRSxrQkFBTSxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsU0FDMUM7UUFwQ0QsY0FBUSxHQUFZLEtBQUssQ0FBQyxDQUFDLDZCQUE2QjtRQUsvQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUdsQyxxQkFBZSxHQUFHLElBQUksWUFBWSxFQUEyQixDQUFDO1FBQzlELHdCQUFrQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFVaEQsWUFBTSxHQUFHLElBQUksWUFBWSxFQUF5QixDQUFDOztJQWlCdEUsQ0FBQztJQXhCRCxzQkFBYSxnREFBVTs7OztRQUF2QjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7OztRQUNELFVBQWUsS0FBdUI7WUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLEtBQUssS0FBSyxR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QUFxRDs7SUFDckQsMENBQXlDOztJQUN6Qyw0Q0FBZ0M7O0lBQ2hDLG1EQUFpRjs7SUFDakYsc0RBQW1FOzs7OztJQUVuRSw2Q0FBb0M7O0lBUXBDLDBDQUFzRTs7SUFPdEUsK0NBQW9COztJQUNwQiwrQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyB0b0Jvb2xlYW4sIHZhbHVlRnVuY3Rpb25Qcm9wLCBGdW5jdGlvblByb3AsIElucHV0Qm9vbGVhbiwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCB7IEFic3RyYWN0UGlja2VyQ29tcG9uZW50LCBDb21wYXRpYmxlRGF0ZSB9IGZyb20gJy4vYWJzdHJhY3QtcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJy4vbGliL2NhbmR5LWRhdGUvY2FuZHktZGF0ZSc7XHJcbmltcG9ydCB7IERpc2FibGVkVGltZUZuLCBQYW5lbE1vZGUsIFByZXNldFJhbmdlcyB9IGZyb20gJy4vc3RhbmRhcmQtdHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGU6IGBgIC8vIEp1c3QgZm9yIHJvbGx1cFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgc2hvd1dlZWs6IGJvb2xlYW4gPSBmYWxzZTsgLy8gU2hvdWxkIHNob3cgYXMgd2VlayBwaWNrZXJcclxuXHJcbiAgQElucHV0KCkgbnpEYXRlUmVuZGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+O1xyXG4gIEBJbnB1dCgpIG56RGlzYWJsZWRUaW1lOiBEaXNhYmxlZFRpbWVGbjtcclxuICBASW5wdXQoKSBuelJlbmRlckV4dHJhRm9vdGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dUb2RheTogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgbnpNb2RlOiBQYW5lbE1vZGUgfCBQYW5lbE1vZGVbXTtcclxuICBASW5wdXQoKSBuelJhbmdlczogUHJlc2V0UmFuZ2VzO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uUGFuZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBhbmVsTW9kZSB8IFBhbmVsTW9kZVtdPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ2FsZW5kYXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGVbXT4oKTtcclxuXHJcbiAgcHJpdmF0ZSBfc2hvd1RpbWU6IG9iamVjdCB8IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZ2V0IG56U2hvd1RpbWUoKTogb2JqZWN0IHwgYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hvd1RpbWU7XHJcbiAgfVxyXG4gIHNldCBuelNob3dUaW1lKHZhbHVlOiBvYmplY3QgfCBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zaG93VGltZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbk9rID0gbmV3IEV2ZW50RW1pdHRlcjxDb21wYXRpYmxlRGF0ZSB8IG51bGw+KCk7XHJcblxyXG4gIGdldCByZWFsU2hvd1RvZGF5KCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gUmFuZ2Ugbm90IHN1cHBvcnQgbnpTaG93VG9kYXkgY3VycmVudGx5XHJcbiAgICByZXR1cm4gIXRoaXMuaXNSYW5nZSAmJiB0aGlzLm56U2hvd1RvZGF5O1xyXG4gIH1cclxuXHJcbiAgcGlja2VyU3R5bGU6IG9iamVjdDsgLy8gRmluYWwgcGlja2VyIHN0eWxlIHRoYXQgY29udGFpbnMgd2lkdGggZml4IGNvcnJlY3Rpb25zIGV0Yy5cclxuICBleHRyYUZvb3RlcjogVGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSxcclxuICAgIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoaTE4biwgY2RyLCBkYXRlSGVscGVyLCBub0FuaW1hdGlvbik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcblxyXG4gICAgLy8gRGVmYXVsdCBmb3JtYXQgd2hlbiBpdCdzIGVtcHR5XHJcbiAgICBpZiAoIXRoaXMubnpGb3JtYXQpIHtcclxuICAgICAgaWYgKHRoaXMuc2hvd1dlZWspIHtcclxuICAgICAgICB0aGlzLm56Rm9ybWF0ID0gdGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlID8gJ3l5eXktd3cnIDogJ1lZWVktV1cnOyAvLyBGb3JtYXQgZm9yIHdlZWtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlKSB7XHJcbiAgICAgICAgICB0aGlzLm56Rm9ybWF0ID0gdGhpcy5uelNob3dUaW1lID8gJ3l5eXktTU0tZGQgSEg6bW06c3MnIDogJ3l5eXktTU0tZGQnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm56Rm9ybWF0ID0gdGhpcy5uelNob3dUaW1lID8gJ1lZWVktTU0tREQgSEg6bW06c3MnIDogJ1lZWVktTU0tREQnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcblxyXG4gICAgaWYgKGNoYW5nZXMubnpSZW5kZXJFeHRyYUZvb3Rlcikge1xyXG4gICAgICB0aGlzLmV4dHJhRm9vdGVyID0gdmFsdWVGdW5jdGlvblByb3AodGhpcy5uelJlbmRlckV4dHJhRm9vdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5uelNob3dUaW1lIHx8IGNoYW5nZXMubnpTdHlsZSkge1xyXG4gICAgICB0aGlzLnNldEZpeGVkUGlja2VyU3R5bGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIElmIGhhcyBubyB0aW1lcGlja2VyIGFuZCB0aGUgdXNlciBzZWxlY3QgYSBkYXRlIGJ5IGRhdGUgcGFuZWwsIHRoZW4gY2xvc2UgcGlja2VyXHJcbiAgb25WYWx1ZUNoYW5nZSh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICBzdXBlci5vblZhbHVlQ2hhbmdlKHZhbHVlKTtcclxuXHJcbiAgICBpZiAoIXRoaXMubnpTaG93VGltZSkge1xyXG4gICAgICB0aGlzLmNsb3NlT3ZlcmxheSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRW1pdCBuek9uQ2FsZW5kYXJDaGFuZ2Ugd2hlbiBzZWxlY3QgZGF0ZSBieSBuei1yYW5nZS1waWNrZXJcclxuICBvbkNhbGVuZGFyQ2hhbmdlKHZhbHVlOiBDYW5keURhdGVbXSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBjb25zdCByYW5nZVZhbHVlID0gdmFsdWUubWFwKHggPT4geC5uYXRpdmVEYXRlKTtcclxuICAgICAgdGhpcy5uek9uQ2FsZW5kYXJDaGFuZ2UuZW1pdChyYW5nZVZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEVtaXR0ZWQgd2hlbiBkb25lIHdpdGggZGF0ZSBzZWxlY3RpbmdcclxuICBvblJlc3VsdE9rKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMubnpWYWx1ZSBhcyBDYW5keURhdGVbXTtcclxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMubnpPbk9rLmVtaXQoW3ZhbHVlWzBdLm5hdGl2ZURhdGUsIHZhbHVlWzFdLm5hdGl2ZURhdGVdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm56T25Pay5lbWl0KFtdKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMubnpWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMubnpPbk9rLmVtaXQoKHRoaXMubnpWYWx1ZSBhcyBDYW5keURhdGUpLm5hdGl2ZURhdGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubnpPbk9rLmVtaXQobnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY2xvc2VPdmVybGF5KCk7XHJcbiAgfVxyXG5cclxuICBvbk9wZW5DaGFuZ2Uob3BlbjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5uek9uT3BlbkNoYW5nZS5lbWl0KG9wZW4pO1xyXG4gIH1cclxuXHJcbiAgLy8gU2V0dXAgZml4ZWQgc3R5bGUgZm9yIHBpY2tlclxyXG4gIHByaXZhdGUgc2V0Rml4ZWRQaWNrZXJTdHlsZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNob3dUaW1lRml4ZXM6IHsgd2lkdGg/OiBzdHJpbmcgfSA9IHt9O1xyXG4gICAgaWYgKHRoaXMubnpTaG93VGltZSkge1xyXG4gICAgICBzaG93VGltZUZpeGVzLndpZHRoID0gdGhpcy5pc1JhbmdlID8gJzM1MHB4JyA6ICcxOTVweCc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5waWNrZXJTdHlsZSA9IHsgLi4uc2hvd1RpbWVGaXhlcywgLi4udGhpcy5uelN0eWxlIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==