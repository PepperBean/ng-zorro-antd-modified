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
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, HostBinding, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import addDays from 'date-fns/add_days';
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days';
import differenceInCalendarMonths from 'date-fns/difference_in_calendar_months';
import differenceInCalendarWeeks from 'date-fns/difference_in_calendar_weeks';
import endOfMonth from 'date-fns/end_of_month';
import isSameDay from 'date-fns/is_same_day';
import isSameMonth from 'date-fns/is_same_month';
import isSameYear from 'date-fns/is_same_year';
import isThisMonth from 'date-fns/is_this_month';
import isThisYear from 'date-fns/is_this_year';
import setMonth from 'date-fns/set_month';
import setYear from 'date-fns/set_year';
import startOfMonth from 'date-fns/start_of_month';
import startOfWeek from 'date-fns/start_of_week';
import startOfYear from 'date-fns/start_of_year';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { NzDateCellDirective as DateCell, NzDateFullCellDirective as DateFullCell, NzMonthCellDirective as MonthCell, NzMonthFullCellDirective as MonthFullCell } from './nz-calendar-cells';
var NzCalendarComponent = /** @class */ (function () {
    function NzCalendarComponent(i18n, cdr, dateHelper) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.dateHelper = dateHelper;
        this.nzMode = 'month';
        this.nzModeChange = new EventEmitter();
        this.nzPanelChange = new EventEmitter();
        this.nzSelectChange = new EventEmitter();
        this.nzValueChange = new EventEmitter();
        this.fullscreen = true;
        this.daysInWeek = [];
        this.monthsInYear = [];
        this.dateMatrix = [];
        this.activeDate = new Date();
        this.currentDateRow = -1;
        this.currentDateCol = -1;
        this.activeDateRow = -1;
        this.activeDateCol = -1;
        this.currentMonthRow = -1;
        this.currentMonthCol = -1;
        this.activeMonthRow = -1;
        this.activeMonthCol = -1;
        this.dateCell = null;
        this.dateFullCell = null;
        this.monthCell = null;
        this.monthFullCell = null;
        this.currentDate = new Date();
        this.onChangeFn = (/**
         * @return {?}
         */
        function () { });
        this.onTouchFn = (/**
         * @return {?}
         */
        function () { });
    }
    Object.defineProperty(NzCalendarComponent.prototype, "nzValue", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.updateDate(value, false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "nzDateCell", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dateCell = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "nzDateFullCell", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dateFullCell = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "nzMonthCell", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.monthCell = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "nzMonthFullCell", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.monthFullCell = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "nzFullscreen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fullscreen;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.fullscreen = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "nzCard", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.fullscreen;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.fullscreen = !coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "dateCellChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.dateCell = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "dateFullCellChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.dateFullCell = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "monthCellChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.monthCell = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "monthFullCellChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.monthFullCell = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "calendarStart", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return startOfWeek(startOfMonth(this.activeDate), { weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setUpDaysInWeek();
        this.setUpMonthsInYear();
        this.setUpDateMatrix();
        this.calculateCurrentDate();
        this.calculateActiveDate();
        this.calculateCurrentMonth();
        this.calculateActiveMonth();
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    NzCalendarComponent.prototype.onModeChange = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.nzModeChange.emit(mode);
        this.nzPanelChange.emit({ date: this.activeDate, mode: mode });
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NzCalendarComponent.prototype.onDateSelect = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.updateDate(date);
        this.nzSelectChange.emit(date);
    };
    /**
     * @param {?} year
     * @return {?}
     */
    NzCalendarComponent.prototype.onYearSelect = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        /** @type {?} */
        var date = setYear(this.activeDate, year);
        this.updateDate(date);
        this.nzSelectChange.emit(date);
    };
    /**
     * @param {?} month
     * @return {?}
     */
    NzCalendarComponent.prototype.onMonthSelect = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        /** @type {?} */
        var date = setMonth(this.activeDate, month);
        this.updateDate(date);
        this.nzSelectChange.emit(date);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzCalendarComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.updateDate(value || new Date(), false);
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCalendarComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeFn = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCalendarComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchFn = fn;
    };
    /**
     * @private
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    NzCalendarComponent.prototype.updateDate = /**
     * @private
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    function (date, touched) {
        if (touched === void 0) { touched = true; }
        /** @type {?} */
        var dayChanged = !isSameDay(date, this.activeDate);
        /** @type {?} */
        var monthChanged = !isSameMonth(date, this.activeDate);
        /** @type {?} */
        var yearChanged = !isSameYear(date, this.activeDate);
        this.activeDate = date;
        if (dayChanged) {
            this.calculateActiveDate();
        }
        if (monthChanged) {
            this.setUpDateMatrix();
            this.calculateCurrentDate();
            this.calculateActiveMonth();
        }
        if (yearChanged) {
            this.calculateCurrentMonth();
        }
        if (touched) {
            this.onChangeFn(date);
            this.onTouchFn();
            this.nzValueChange.emit(date);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCalendarComponent.prototype.setUpDaysInWeek = /**
     * @private
     * @return {?}
     */
    function () {
        this.daysInWeek = [];
        /** @type {?} */
        var weekStart = startOfWeek(this.activeDate, { weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (var i = 0; i < 7; i++) {
            /** @type {?} */
            var date = addDays(weekStart, i);
            /** @type {?} */
            var title = this.dateHelper.format(date, this.dateHelper.relyOnDatePipe ? 'E' : 'ddd');
            /** @type {?} */
            var label = this.dateHelper.format(date, this.dateHelper.relyOnDatePipe ? 'EEEEEE' : 'dd');
            this.daysInWeek.push({ title: title, label: label });
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCalendarComponent.prototype.setUpMonthsInYear = /**
     * @private
     * @return {?}
     */
    function () {
        this.monthsInYear = [];
        for (var i = 0; i < 12; i++) {
            /** @type {?} */
            var date = setMonth(this.activeDate, i);
            /** @type {?} */
            var title = this.dateHelper.format(date, 'MMM');
            /** @type {?} */
            var label = this.dateHelper.format(date, 'MMM');
            /** @type {?} */
            var start = startOfMonth(date);
            this.monthsInYear.push({ title: title, label: label, start: start });
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCalendarComponent.prototype.setUpDateMatrix = /**
     * @private
     * @return {?}
     */
    function () {
        this.dateMatrix = [];
        /** @type {?} */
        var monthStart = startOfMonth(this.activeDate);
        /** @type {?} */
        var monthEnd = endOfMonth(this.activeDate);
        /** @type {?} */
        var weekDiff = differenceInCalendarWeeks(monthEnd, monthStart, { weekStartsOn: this.dateHelper.getFirstDayOfWeek() }) + 2;
        for (var week = 0; week < weekDiff; week++) {
            /** @type {?} */
            var row = [];
            /** @type {?} */
            var weekStart = addDays(this.calendarStart, week * 7);
            for (var day = 0; day < 7; day++) {
                /** @type {?} */
                var date = addDays(weekStart, day);
                /** @type {?} */
                var monthDiff = differenceInCalendarMonths(date, this.activeDate);
                /** @type {?} */
                var dateFormat = this.dateHelper.relyOnDatePipe
                    ? 'longDate'
                    : this.i18n.getLocaleData('DatePicker.lang.dateFormat', 'YYYY-MM-DD');
                /** @type {?} */
                var title = this.dateHelper.format(date, dateFormat);
                /** @type {?} */
                var label = this.dateHelper.format(date, this.dateHelper.relyOnDatePipe ? 'dd' : 'DD');
                /** @type {?} */
                var rel = monthDiff === 0 ? 'current' : monthDiff < 0 ? 'last' : 'next';
                row.push({ title: title, label: label, rel: rel, value: date });
            }
            this.dateMatrix.push(row);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCalendarComponent.prototype.calculateCurrentDate = /**
     * @private
     * @return {?}
     */
    function () {
        if (isThisMonth(this.activeDate)) {
            this.currentDateRow = differenceInCalendarWeeks(this.currentDate, this.calendarStart, {
                weekStartsOn: this.dateHelper.getFirstDayOfWeek()
            });
            this.currentDateCol = differenceInCalendarDays(this.currentDate, addDays(this.calendarStart, this.currentDateRow * 7));
        }
        else {
            this.currentDateRow = -1;
            this.currentDateCol = -1;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCalendarComponent.prototype.calculateActiveDate = /**
     * @private
     * @return {?}
     */
    function () {
        this.activeDateRow = differenceInCalendarWeeks(this.activeDate, this.calendarStart, {
            weekStartsOn: this.dateHelper.getFirstDayOfWeek()
        });
        this.activeDateCol = differenceInCalendarDays(this.activeDate, addDays(this.calendarStart, this.activeDateRow * 7));
    };
    /**
     * @private
     * @return {?}
     */
    NzCalendarComponent.prototype.calculateCurrentMonth = /**
     * @private
     * @return {?}
     */
    function () {
        if (isThisYear(this.activeDate)) {
            /** @type {?} */
            var yearStart = startOfYear(this.currentDate);
            /** @type {?} */
            var monthDiff = differenceInCalendarMonths(this.currentDate, yearStart);
            this.currentMonthRow = Math.floor(monthDiff / 3);
            this.currentMonthCol = monthDiff % 3;
        }
        else {
            this.currentMonthRow = -1;
            this.currentMonthCol = -1;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzCalendarComponent.prototype.calculateActiveMonth = /**
     * @private
     * @return {?}
     */
    function () {
        this.activeMonthRow = Math.floor(this.activeDate.getMonth() / 3);
        this.activeMonthCol = this.activeDate.getMonth() % 3;
    };
    NzCalendarComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'nz-calendar',
                    exportAs: 'nzCalendar',
                    template: "<nz-calendar-header [fullscreen]=\"fullscreen\" [activeDate]=\"activeDate\"\r\n                    [(mode)]=\"nzMode\" (modeChange)=\"onModeChange($event)\"\r\n                    (yearChange)=\"onYearSelect($event)\" (monthChange)=\"onMonthSelect($event)\">\r\n</nz-calendar-header>\r\n\r\n<div class=\"ant-fullcalendar ant-fullcalendar-full\" [ngClass]=\"fullscreen ? 'ant-fullcalendar-fullscreen' : ''\">\r\n  <div class=\"ant-fullcalendar-calendar-body\">\r\n    <ng-container *ngIf=\"nzMode === 'month' then monthModeTable else yearModeTable\"></ng-container>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #monthModeTable>\r\n  <table class=\"ant-fullcalendar-table\" cellspacing=\"0\" role=\"grid\">\r\n    <thead>\r\n      <tr role=\"row\">\r\n        <th *ngFor=\"let day of daysInWeek\" class=\"ant-fullcalendar-column-header\" role=\"columnheader\" [title]=\"day.title\">\r\n          <span class=\"ant-fullcalendar-column-header-inner\">{{ day.label }}</span>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody class=\"ant-fullcalendar-tbody\">\r\n      <tr *ngFor=\"let week of dateMatrix; index as row\"\r\n          [class.ant-fullcalendar-current-week]=\"row === currentDateRow\"\r\n          [class.ant-fullcalendar-active-week]=\"row === activeDateRow\">\r\n        <td *ngFor=\"let day of week; index as col\" role=\"gridcell\" class=\"ant-fullcalendar-cell\" [title]=\"day.title\"\r\n            [class.ant-fullcalendar-today]=\"row === currentDateRow && col === currentDateCol\"\r\n            [class.ant-fullcalendar-selected-day]=\"row === activeDateRow && col === activeDateCol\"\r\n            [class.ant-fullcalendar-last-month-cell]=\"day.rel === 'last'\"\r\n            [class.ant-fullcalendar-next-month-btn-day]=\"day.rel === 'next'\"\r\n            (click)=\"onDateSelect(day.value)\">\r\n            <div class=\"ant-fullcalendar-date\">\r\n              <ng-container *ngIf=\"dateFullCell else defaultCell\">\r\n                <ng-container *ngTemplateOutlet=\"dateFullCell; context: {$implicit: day.value}\"></ng-container>\r\n              </ng-container>\r\n              <ng-template #defaultCell>\r\n                <div class=\"ant-fullcalendar-value\">{{ day.label }}</div>\r\n                <div *ngIf=\"dateCell\" class=\"ant-fullcalendar-content\">\r\n                  <ng-container *ngTemplateOutlet=\"dateCell; context: {$implicit: day.value}\"></ng-container>\r\n                </div>\r\n              </ng-template>\r\n            </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</ng-template>\r\n\r\n<ng-template #yearModeTable>\r\n  <table class=\"ant-fullcalendar-month-panel-table\" cellspacing=\"0\" role=\"grid\">\r\n    <tbody class=\"ant-fullcalendar-month-panel-tbody\">\r\n      <tr *ngFor=\"let row of [0, 1, 2, 3]\" role=\"row\">\r\n        <td *ngFor=\"let col of [0, 1, 2]\" role=\"gridcell\" [title]=\"monthsInYear[row * 3 + col].title\"\r\n            class=\"ant-fullcalendar-month-panel-cell\"\r\n            [class.ant-fullcalendar-month-panel-current-cell]=\"row === currentMonthRow && col === currentMonthCol\"\r\n            [class.ant-fullcalendar-month-panel-selected-cell]=\"row === activeMonthRow && col === activeMonthCol\"\r\n            (click)=\"onMonthSelect(row * 3 + col)\">\r\n          <div class=\"ant-fullcalendar-month\">\r\n            <ng-container *ngIf=\"monthFullCell else defaultCell\">\r\n              <ng-container *ngTemplateOutlet=\"monthFullCell; context: {$implicit: monthsInYear[row * 3 + col].start}\"></ng-container>\r\n            </ng-container>\r\n            <ng-template #defaultCell>\r\n              <div class=\"ant-fullcalendar-value\">{{ monthsInYear[row * 3 + col].label }}</div>\r\n              <div *ngIf=\"monthCell\" class=\"ant-fullcalendar-content\">\r\n                <ng-container *ngTemplateOutlet=\"monthCell; context: {$implicit: monthsInYear[row * 3 + col].start}\"></ng-container>\r\n              </div>\r\n            </ng-template>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</ng-template>\r\n",
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzCalendarComponent; })), multi: true }]
                }] }
    ];
    /** @nocollapse */
    NzCalendarComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ChangeDetectorRef },
        { type: DateHelperService }
    ]; };
    NzCalendarComponent.propDecorators = {
        nzMode: [{ type: Input }],
        nzModeChange: [{ type: Output }],
        nzPanelChange: [{ type: Output }],
        nzSelectChange: [{ type: Output }],
        nzValue: [{ type: Input }],
        nzValueChange: [{ type: Output }],
        nzDateCell: [{ type: Input }],
        nzDateFullCell: [{ type: Input }],
        nzMonthCell: [{ type: Input }],
        nzMonthFullCell: [{ type: Input }],
        nzFullscreen: [{ type: Input }],
        nzCard: [{ type: Input }],
        dateCellChild: [{ type: ContentChild, args: [DateCell, { read: TemplateRef },] }],
        dateFullCellChild: [{ type: ContentChild, args: [DateFullCell, { read: TemplateRef },] }],
        monthCellChild: [{ type: ContentChild, args: [MonthCell, { read: TemplateRef },] }],
        monthFullCellChild: [{ type: ContentChild, args: [MonthFullCell, { read: TemplateRef },] }],
        fullscreen: [{ type: HostBinding, args: ['class.ant-fullcalendar--fullscreen',] }]
    };
    return NzCalendarComponent;
}());
export { NzCalendarComponent };
if (false) {
    /** @type {?} */
    NzCalendarComponent.prototype.nzMode;
    /** @type {?} */
    NzCalendarComponent.prototype.nzModeChange;
    /** @type {?} */
    NzCalendarComponent.prototype.nzPanelChange;
    /** @type {?} */
    NzCalendarComponent.prototype.nzSelectChange;
    /** @type {?} */
    NzCalendarComponent.prototype.nzValueChange;
    /** @type {?} */
    NzCalendarComponent.prototype.fullscreen;
    /** @type {?} */
    NzCalendarComponent.prototype.daysInWeek;
    /** @type {?} */
    NzCalendarComponent.prototype.monthsInYear;
    /** @type {?} */
    NzCalendarComponent.prototype.dateMatrix;
    /** @type {?} */
    NzCalendarComponent.prototype.activeDate;
    /** @type {?} */
    NzCalendarComponent.prototype.currentDateRow;
    /** @type {?} */
    NzCalendarComponent.prototype.currentDateCol;
    /** @type {?} */
    NzCalendarComponent.prototype.activeDateRow;
    /** @type {?} */
    NzCalendarComponent.prototype.activeDateCol;
    /** @type {?} */
    NzCalendarComponent.prototype.currentMonthRow;
    /** @type {?} */
    NzCalendarComponent.prototype.currentMonthCol;
    /** @type {?} */
    NzCalendarComponent.prototype.activeMonthRow;
    /** @type {?} */
    NzCalendarComponent.prototype.activeMonthCol;
    /** @type {?} */
    NzCalendarComponent.prototype.dateCell;
    /** @type {?} */
    NzCalendarComponent.prototype.dateFullCell;
    /** @type {?} */
    NzCalendarComponent.prototype.monthCell;
    /** @type {?} */
    NzCalendarComponent.prototype.monthFullCell;
    /**
     * @type {?}
     * @private
     */
    NzCalendarComponent.prototype.currentDate;
    /**
     * @type {?}
     * @private
     */
    NzCalendarComponent.prototype.onChangeFn;
    /**
     * @type {?}
     * @private
     */
    NzCalendarComponent.prototype.onTouchFn;
    /**
     * @type {?}
     * @private
     */
    NzCalendarComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    NzCalendarComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzCalendarComponent.prototype.dateHelper;
}
/**
 * @record
 */
export function DayCellContext() { }
if (false) {
    /** @type {?} */
    DayCellContext.prototype.title;
    /** @type {?} */
    DayCellContext.prototype.label;
}
/**
 * @record
 */
export function MonthCellContext() { }
if (false) {
    /** @type {?} */
    MonthCellContext.prototype.title;
    /** @type {?} */
    MonthCellContext.prototype.label;
    /** @type {?} */
    MonthCellContext.prototype.start;
}
/**
 * @record
 */
export function DateCellContext() { }
if (false) {
    /** @type {?} */
    DateCellContext.prototype.title;
    /** @type {?} */
    DateCellContext.prototype.label;
    /** @type {?} */
    DateCellContext.prototype.rel;
    /** @type {?} */
    DateCellContext.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm56LWNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFDTCxVQUFVLEVBQ1YsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUVMLE1BQU0sRUFDTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLE9BQU8sTUFBTSxtQkFBbUIsQ0FBQztBQUN4QyxPQUFPLHdCQUF3QixNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sMEJBQTBCLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyx5QkFBeUIsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLFVBQVUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLFNBQVMsTUFBTSxzQkFBc0IsQ0FBQztBQUM3QyxPQUFPLFdBQVcsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRCxPQUFPLFVBQVUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLFdBQVcsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRCxPQUFPLFVBQVUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLFFBQVEsTUFBTSxvQkFBb0IsQ0FBQztBQUMxQyxPQUFPLE9BQU8sTUFBTSxtQkFBbUIsQ0FBQztBQUN4QyxPQUFPLFlBQVksTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLFdBQVcsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRCxPQUFPLFdBQVcsTUFBTSx3QkFBd0Is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SUFDOUIscUNBQW9DOztJQUNwQywyQ0FBNkU7O0lBQzdFLDRDQUFvRzs7SUFFcEcsNkNBQTJFOztJQUszRSw0Q0FBMEU7O0lBa0UxRSx5Q0FDa0I7O0lBRWxCLHlDQUFrQzs7SUFDbEMsMkNBQXNDOztJQUN0Qyx5Q0FBcUM7O0lBQ3JDLHlDQUE4Qjs7SUFDOUIsNkNBQTRCOztJQUM1Qiw2Q0FBNEI7O0lBQzVCLDRDQUEyQjs7SUFDM0IsNENBQTJCOztJQUMzQiw4Q0FBNkI7O0lBQzdCLDhDQUE2Qjs7SUFDN0IsNkNBQTRCOztJQUM1Qiw2Q0FBNEI7O0lBQzVCLHVDQUF5RDs7SUFDekQsMkNBQTZEOztJQUM3RCx3Q0FBMEQ7O0lBQzFELDRDQUE4RDs7Ozs7SUFFOUQsMENBQWlDOzs7OztJQUNqQyx5Q0FBb0Q7Ozs7O0lBQ3BELHdDQUF5Qzs7Ozs7SUFNN0IsbUNBQTJCOzs7OztJQUFFLGtDQUE4Qjs7Ozs7SUFBRSx5Q0FBcUM7Ozs7O0FBaUtoSCxvQ0FHQzs7O0lBRkMsK0JBQWM7O0lBQ2QsK0JBQWM7Ozs7O0FBR2hCLHNDQUlDOzs7SUFIQyxpQ0FBYzs7SUFDZCxpQ0FBYzs7SUFDZCxpQ0FBWTs7Ozs7QUFHZCxxQ0FLQzs7O0lBSkMsZ0NBQWM7O0lBQ2QsZ0NBQWM7O0lBQ2QsOEJBQWlDOztJQUNqQyxnQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgYWRkRGF5cyBmcm9tICdkYXRlLWZucy9hZGRfZGF5cyc7XHJcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgZnJvbSAnZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl9kYXlzJztcclxuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzIGZyb20gJ2RhdGUtZm5zL2RpZmZlcmVuY2VfaW5fY2FsZW5kYXJfbW9udGhzJztcclxuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MgZnJvbSAnZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl93ZWVrcyc7XHJcbmltcG9ydCBlbmRPZk1vbnRoIGZyb20gJ2RhdGUtZm5zL2VuZF9vZl9tb250aCc7XHJcbmltcG9ydCBpc1NhbWVEYXkgZnJvbSAnZGF0ZS1mbnMvaXNfc2FtZV9kYXknO1xyXG5pbXBvcnQgaXNTYW1lTW9udGggZnJvbSAnZGF0ZS1mbnMvaXNfc2FtZV9tb250aCc7XHJcbmltcG9ydCBpc1NhbWVZZWFyIGZyb20gJ2RhdGUtZm5zL2lzX3NhbWVfeWVhcic7XHJcbmltcG9ydCBpc1RoaXNNb250aCBmcm9tICdkYXRlLWZucy9pc190aGlzX21vbnRoJztcclxuaW1wb3J0IGlzVGhpc1llYXIgZnJvbSAnZGF0ZS1mbnMvaXNfdGhpc195ZWFyJztcclxuaW1wb3J0IHNldE1vbnRoIGZyb20gJ2RhdGUtZm5zL3NldF9tb250aCc7XHJcbmltcG9ydCBzZXRZZWFyIGZyb20gJ2RhdGUtZm5zL3NldF95ZWFyJztcclxuaW1wb3J0IHN0YXJ0T2ZNb250aCBmcm9tICdkYXRlLWZucy9zdGFydF9vZl9tb250aCc7XHJcbmltcG9ydCBzdGFydE9mV2VlayBmcm9tICdkYXRlLWZucy9zdGFydF9vZl93ZWVrJztcclxuaW1wb3J0IHN0YXJ0T2ZZZWFyIGZyb20gJ2RhdGUtZm5zL3N0YXJ0X29mX3llYXInO1xyXG5cclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHtcclxuICBOekRhdGVDZWxsRGlyZWN0aXZlIGFzIERhdGVDZWxsLFxyXG4gIE56RGF0ZUZ1bGxDZWxsRGlyZWN0aXZlIGFzIERhdGVGdWxsQ2VsbCxcclxuICBOek1vbnRoQ2VsbERpcmVjdGl2ZSBhcyBNb250aENlbGwsXHJcbiAgTnpNb250aEZ1bGxDZWxsRGlyZWN0aXZlIGFzIE1vbnRoRnVsbENlbGxcclxufSBmcm9tICcuL256LWNhbGVuZGFyLWNlbGxzJztcclxuXHJcbmV4cG9ydCB0eXBlIE1vZGVUeXBlID0gJ21vbnRoJyB8ICd5ZWFyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc2VsZWN0b3I6ICduei1jYWxlbmRhcicsXHJcbiAgZXhwb3J0QXM6ICduekNhbGVuZGFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56Q2FsZW5kYXJDb21wb25lbnQpLCBtdWx0aTogdHJ1ZSB9XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xyXG4gIEBJbnB1dCgpIG56TW9kZTogTW9kZVR5cGUgPSAnbW9udGgnO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek1vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxNb2RlVHlwZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UGFuZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGRhdGU6IERhdGU7IG1vZGU6IE1vZGVUeXBlIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWxlY3RDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQElucHV0KCkgc2V0IG56VmFsdWUodmFsdWU6IERhdGUpIHtcclxuICAgIHRoaXMudXBkYXRlRGF0ZSh2YWx1ZSwgZmFsc2UpO1xyXG4gIH1cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRhdGVDZWxsKHZhbHVlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9Pikge1xyXG4gICAgdGhpcy5kYXRlQ2VsbCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEYXRlRnVsbENlbGwodmFsdWU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBEYXRlIH0+KSB7XHJcbiAgICB0aGlzLmRhdGVGdWxsQ2VsbCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpNb250aENlbGwodmFsdWU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBEYXRlIH0+KSB7XHJcbiAgICB0aGlzLm1vbnRoQ2VsbCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpNb250aEZ1bGxDZWxsKHZhbHVlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9Pikge1xyXG4gICAgdGhpcy5tb250aEZ1bGxDZWxsID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekZ1bGxzY3JlZW4odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZnVsbHNjcmVlbiA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XHJcbiAgfVxyXG4gIGdldCBuekZ1bGxzY3JlZW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5mdWxsc2NyZWVuO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpDYXJkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmZ1bGxzY3JlZW4gPSAhY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxuICB9XHJcbiAgZ2V0IG56Q2FyZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5mdWxsc2NyZWVuO1xyXG4gIH1cclxuXHJcbiAgQENvbnRlbnRDaGlsZChEYXRlQ2VsbCwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxyXG4gIHNldCBkYXRlQ2VsbENoaWxkKHZhbHVlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9Pikge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZGF0ZUNlbGwgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoRGF0ZUZ1bGxDZWxsLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXHJcbiAgc2V0IGRhdGVGdWxsQ2VsbENoaWxkKHZhbHVlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9Pikge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZGF0ZUZ1bGxDZWxsID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAQ29udGVudENoaWxkKE1vbnRoQ2VsbCwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxyXG4gIHNldCBtb250aENlbGxDaGlsZCh2YWx1ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IERhdGUgfT4pIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLm1vbnRoQ2VsbCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQENvbnRlbnRDaGlsZChNb250aEZ1bGxDZWxsLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXHJcbiAgc2V0IG1vbnRoRnVsbENlbGxDaGlsZCh2YWx1ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IERhdGUgfT4pIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLm1vbnRoRnVsbENlbGwgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWZ1bGxjYWxlbmRhci0tZnVsbHNjcmVlbicpXHJcbiAgZnVsbHNjcmVlbiA9IHRydWU7XHJcblxyXG4gIGRheXNJbldlZWs6IERheUNlbGxDb250ZXh0W10gPSBbXTtcclxuICBtb250aHNJblllYXI6IE1vbnRoQ2VsbENvbnRleHRbXSA9IFtdO1xyXG4gIGRhdGVNYXRyaXg6IERhdGVDZWxsQ29udGV4dFtdW10gPSBbXTtcclxuICBhY3RpdmVEYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcclxuICBjdXJyZW50RGF0ZVJvdzogbnVtYmVyID0gLTE7XHJcbiAgY3VycmVudERhdGVDb2w6IG51bWJlciA9IC0xO1xyXG4gIGFjdGl2ZURhdGVSb3c6IG51bWJlciA9IC0xO1xyXG4gIGFjdGl2ZURhdGVDb2w6IG51bWJlciA9IC0xO1xyXG4gIGN1cnJlbnRNb250aFJvdzogbnVtYmVyID0gLTE7XHJcbiAgY3VycmVudE1vbnRoQ29sOiBudW1iZXIgPSAtMTtcclxuICBhY3RpdmVNb250aFJvdzogbnVtYmVyID0gLTE7XHJcbiAgYWN0aXZlTW9udGhDb2w6IG51bWJlciA9IC0xO1xyXG4gIGRhdGVDZWxsOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9PiB8IG51bGwgPSBudWxsO1xyXG4gIGRhdGVGdWxsQ2VsbDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IERhdGUgfT4gfCBudWxsID0gbnVsbDtcclxuICBtb250aENlbGw6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBEYXRlIH0+IHwgbnVsbCA9IG51bGw7XHJcbiAgbW9udGhGdWxsQ2VsbDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IERhdGUgfT4gfCBudWxsID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgcHJpdmF0ZSBvbkNoYW5nZUZuOiAoZGF0ZTogRGF0ZSkgPT4gdm9pZCA9ICgpID0+IHt9O1xyXG4gIHByaXZhdGUgb25Ub3VjaEZuOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XHJcblxyXG4gIHByaXZhdGUgZ2V0IGNhbGVuZGFyU3RhcnQoKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gc3RhcnRPZldlZWsoc3RhcnRPZk1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksIHsgd2Vla1N0YXJ0c09uOiB0aGlzLmRhdGVIZWxwZXIuZ2V0Rmlyc3REYXlPZldlZWsoKSB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0VXBEYXlzSW5XZWVrKCk7XHJcbiAgICB0aGlzLnNldFVwTW9udGhzSW5ZZWFyKCk7XHJcbiAgICB0aGlzLnNldFVwRGF0ZU1hdHJpeCgpO1xyXG4gICAgdGhpcy5jYWxjdWxhdGVDdXJyZW50RGF0ZSgpO1xyXG4gICAgdGhpcy5jYWxjdWxhdGVBY3RpdmVEYXRlKCk7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRNb250aCgpO1xyXG4gICAgdGhpcy5jYWxjdWxhdGVBY3RpdmVNb250aCgpO1xyXG4gIH1cclxuXHJcbiAgb25Nb2RlQ2hhbmdlKG1vZGU6IE1vZGVUeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLm56TW9kZUNoYW5nZS5lbWl0KG1vZGUpO1xyXG4gICAgdGhpcy5uelBhbmVsQ2hhbmdlLmVtaXQoeyBkYXRlOiB0aGlzLmFjdGl2ZURhdGUsIG1vZGUgfSk7XHJcbiAgfVxyXG5cclxuICBvbkRhdGVTZWxlY3QoZGF0ZTogRGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVEYXRlKGRhdGUpO1xyXG4gICAgdGhpcy5uelNlbGVjdENoYW5nZS5lbWl0KGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgb25ZZWFyU2VsZWN0KHllYXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgZGF0ZSA9IHNldFllYXIodGhpcy5hY3RpdmVEYXRlLCB5ZWFyKTtcclxuICAgIHRoaXMudXBkYXRlRGF0ZShkYXRlKTtcclxuICAgIHRoaXMubnpTZWxlY3RDaGFuZ2UuZW1pdChkYXRlKTtcclxuICB9XHJcblxyXG4gIG9uTW9udGhTZWxlY3QobW9udGg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgZGF0ZSA9IHNldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSwgbW9udGgpO1xyXG4gICAgdGhpcy51cGRhdGVEYXRlKGRhdGUpO1xyXG4gICAgdGhpcy5uelNlbGVjdENoYW5nZS5lbWl0KGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlRGF0ZSh2YWx1ZSB8fCBuZXcgRGF0ZSgpLCBmYWxzZSk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChkYXRlOiBEYXRlKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlRm4gPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hGbiA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVEYXRlKGRhdGU6IERhdGUsIHRvdWNoZWQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXlDaGFuZ2VkID0gIWlzU2FtZURheShkYXRlLCB0aGlzLmFjdGl2ZURhdGUpO1xyXG4gICAgY29uc3QgbW9udGhDaGFuZ2VkID0gIWlzU2FtZU1vbnRoKGRhdGUsIHRoaXMuYWN0aXZlRGF0ZSk7XHJcbiAgICBjb25zdCB5ZWFyQ2hhbmdlZCA9ICFpc1NhbWVZZWFyKGRhdGUsIHRoaXMuYWN0aXZlRGF0ZSk7XHJcblxyXG4gICAgdGhpcy5hY3RpdmVEYXRlID0gZGF0ZTtcclxuXHJcbiAgICBpZiAoZGF5Q2hhbmdlZCkge1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZUFjdGl2ZURhdGUoKTtcclxuICAgIH1cclxuICAgIGlmIChtb250aENoYW5nZWQpIHtcclxuICAgICAgdGhpcy5zZXRVcERhdGVNYXRyaXgoKTtcclxuICAgICAgdGhpcy5jYWxjdWxhdGVDdXJyZW50RGF0ZSgpO1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZUFjdGl2ZU1vbnRoKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoeWVhckNoYW5nZWQpIHtcclxuICAgICAgdGhpcy5jYWxjdWxhdGVDdXJyZW50TW9udGgoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodG91Y2hlZCkge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlRm4oZGF0ZSk7XHJcbiAgICAgIHRoaXMub25Ub3VjaEZuKCk7XHJcbiAgICAgIHRoaXMubnpWYWx1ZUNoYW5nZS5lbWl0KGRhdGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRVcERheXNJbldlZWsoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRheXNJbldlZWsgPSBbXTtcclxuICAgIGNvbnN0IHdlZWtTdGFydCA9IHN0YXJ0T2ZXZWVrKHRoaXMuYWN0aXZlRGF0ZSwgeyB3ZWVrU3RhcnRzT246IHRoaXMuZGF0ZUhlbHBlci5nZXRGaXJzdERheU9mV2VlaygpIH0pO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgICAgY29uc3QgZGF0ZSA9IGFkZERheXMod2Vla1N0YXJ0LCBpKTtcclxuICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRhdGUsIHRoaXMuZGF0ZUhlbHBlci5yZWx5T25EYXRlUGlwZSA/ICdFJyA6ICdkZGQnKTtcclxuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRhdGUsIHRoaXMuZGF0ZUhlbHBlci5yZWx5T25EYXRlUGlwZSA/ICdFRUVFRUUnIDogJ2RkJyk7XHJcbiAgICAgIHRoaXMuZGF5c0luV2Vlay5wdXNoKHsgdGl0bGUsIGxhYmVsIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRVcE1vbnRoc0luWWVhcigpOiB2b2lkIHtcclxuICAgIHRoaXMubW9udGhzSW5ZZWFyID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgY29uc3QgZGF0ZSA9IHNldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSwgaSk7XHJcbiAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdChkYXRlLCAnTU1NJyk7XHJcbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdChkYXRlLCAnTU1NJyk7XHJcbiAgICAgIGNvbnN0IHN0YXJ0ID0gc3RhcnRPZk1vbnRoKGRhdGUpO1xyXG4gICAgICB0aGlzLm1vbnRoc0luWWVhci5wdXNoKHsgdGl0bGUsIGxhYmVsLCBzdGFydCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VXBEYXRlTWF0cml4KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRlTWF0cml4ID0gW107XHJcbiAgICBjb25zdCBtb250aFN0YXJ0ID0gc3RhcnRPZk1vbnRoKHRoaXMuYWN0aXZlRGF0ZSk7XHJcbiAgICBjb25zdCBtb250aEVuZCA9IGVuZE9mTW9udGgodGhpcy5hY3RpdmVEYXRlKTtcclxuICAgIGNvbnN0IHdlZWtEaWZmID1cclxuICAgICAgZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyhtb250aEVuZCwgbW9udGhTdGFydCwgeyB3ZWVrU3RhcnRzT246IHRoaXMuZGF0ZUhlbHBlci5nZXRGaXJzdERheU9mV2VlaygpIH0pICsgMjtcclxuXHJcbiAgICBmb3IgKGxldCB3ZWVrID0gMDsgd2VlayA8IHdlZWtEaWZmOyB3ZWVrKyspIHtcclxuICAgICAgY29uc3Qgcm93OiBEYXRlQ2VsbENvbnRleHRbXSA9IFtdO1xyXG4gICAgICBjb25zdCB3ZWVrU3RhcnQgPSBhZGREYXlzKHRoaXMuY2FsZW5kYXJTdGFydCwgd2VlayAqIDcpO1xyXG5cclxuICAgICAgZm9yIChsZXQgZGF5ID0gMDsgZGF5IDwgNzsgZGF5KyspIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gYWRkRGF5cyh3ZWVrU3RhcnQsIGRheSk7XHJcbiAgICAgICAgY29uc3QgbW9udGhEaWZmID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGF0ZSwgdGhpcy5hY3RpdmVEYXRlKTtcclxuICAgICAgICBjb25zdCBkYXRlRm9ybWF0ID0gdGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlXHJcbiAgICAgICAgICA/ICdsb25nRGF0ZSdcclxuICAgICAgICAgIDogdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ0RhdGVQaWNrZXIubGFuZy5kYXRlRm9ybWF0JywgJ1lZWVktTU0tREQnKTtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF0ZSwgZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRhdGUsIHRoaXMuZGF0ZUhlbHBlci5yZWx5T25EYXRlUGlwZSA/ICdkZCcgOiAnREQnKTtcclxuICAgICAgICBjb25zdCByZWwgPSBtb250aERpZmYgPT09IDAgPyAnY3VycmVudCcgOiBtb250aERpZmYgPCAwID8gJ2xhc3QnIDogJ25leHQnO1xyXG4gICAgICAgIHJvdy5wdXNoKHsgdGl0bGUsIGxhYmVsLCByZWwsIHZhbHVlOiBkYXRlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGF0ZU1hdHJpeC5wdXNoKHJvdyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZUN1cnJlbnREYXRlKCk6IHZvaWQge1xyXG4gICAgaWYgKGlzVGhpc01vbnRoKHRoaXMuYWN0aXZlRGF0ZSkpIHtcclxuICAgICAgdGhpcy5jdXJyZW50RGF0ZVJvdyA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3ModGhpcy5jdXJyZW50RGF0ZSwgdGhpcy5jYWxlbmRhclN0YXJ0LCB7XHJcbiAgICAgICAgd2Vla1N0YXJ0c09uOiB0aGlzLmRhdGVIZWxwZXIuZ2V0Rmlyc3REYXlPZldlZWsoKVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jdXJyZW50RGF0ZUNvbCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcclxuICAgICAgICB0aGlzLmN1cnJlbnREYXRlLFxyXG4gICAgICAgIGFkZERheXModGhpcy5jYWxlbmRhclN0YXJ0LCB0aGlzLmN1cnJlbnREYXRlUm93ICogNylcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY3VycmVudERhdGVSb3cgPSAtMTtcclxuICAgICAgdGhpcy5jdXJyZW50RGF0ZUNvbCA9IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVBY3RpdmVEYXRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmVEYXRlUm93ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyh0aGlzLmFjdGl2ZURhdGUsIHRoaXMuY2FsZW5kYXJTdGFydCwge1xyXG4gICAgICB3ZWVrU3RhcnRzT246IHRoaXMuZGF0ZUhlbHBlci5nZXRGaXJzdERheU9mV2VlaygpXHJcbiAgICB9KTtcclxuICAgIHRoaXMuYWN0aXZlRGF0ZUNvbCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyh0aGlzLmFjdGl2ZURhdGUsIGFkZERheXModGhpcy5jYWxlbmRhclN0YXJ0LCB0aGlzLmFjdGl2ZURhdGVSb3cgKiA3KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZUN1cnJlbnRNb250aCgpOiB2b2lkIHtcclxuICAgIGlmIChpc1RoaXNZZWFyKHRoaXMuYWN0aXZlRGF0ZSkpIHtcclxuICAgICAgY29uc3QgeWVhclN0YXJ0ID0gc3RhcnRPZlllYXIodGhpcy5jdXJyZW50RGF0ZSk7XHJcbiAgICAgIGNvbnN0IG1vbnRoRGlmZiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKHRoaXMuY3VycmVudERhdGUsIHllYXJTdGFydCk7XHJcbiAgICAgIHRoaXMuY3VycmVudE1vbnRoUm93ID0gTWF0aC5mbG9vcihtb250aERpZmYgLyAzKTtcclxuICAgICAgdGhpcy5jdXJyZW50TW9udGhDb2wgPSBtb250aERpZmYgJSAzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdXJyZW50TW9udGhSb3cgPSAtMTtcclxuICAgICAgdGhpcy5jdXJyZW50TW9udGhDb2wgPSAtMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlQWN0aXZlTW9udGgoKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2ZU1vbnRoUm93ID0gTWF0aC5mbG9vcih0aGlzLmFjdGl2ZURhdGUuZ2V0TW9udGgoKSAvIDMpO1xyXG4gICAgdGhpcy5hY3RpdmVNb250aENvbCA9IHRoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpICUgMztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF5Q2VsbENvbnRleHQge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgbGFiZWw6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb250aENlbGxDb250ZXh0IHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgc3RhcnQ6IERhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZUNlbGxDb250ZXh0IHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgcmVsOiAnbGFzdCcgfCAnY3VycmVudCcgfCAnbmV4dCc7XHJcbiAgdmFsdWU6IERhdGU7XHJcbn1cclxuIl19