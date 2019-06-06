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
export class NzCalendarComponent {
    /**
     * @param {?} i18n
     * @param {?} cdr
     * @param {?} dateHelper
     */
    constructor(i18n, cdr, dateHelper) {
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
        () => { });
        this.onTouchFn = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzValue(value) {
        this.updateDate(value, false);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDateCell(value) {
        this.dateCell = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDateFullCell(value) {
        this.dateFullCell = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzMonthCell(value) {
        this.monthCell = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzMonthFullCell(value) {
        this.monthFullCell = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzFullscreen(value) {
        this.fullscreen = coerceBooleanProperty(value);
    }
    /**
     * @return {?}
     */
    get nzFullscreen() {
        return this.fullscreen;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzCard(value) {
        this.fullscreen = !coerceBooleanProperty(value);
    }
    /**
     * @return {?}
     */
    get nzCard() {
        return !this.fullscreen;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dateCellChild(value) {
        if (value) {
            this.dateCell = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dateFullCellChild(value) {
        if (value) {
            this.dateFullCell = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set monthCellChild(value) {
        if (value) {
            this.monthCell = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set monthFullCellChild(value) {
        if (value) {
            this.monthFullCell = value;
        }
    }
    /**
     * @private
     * @return {?}
     */
    get calendarStart() {
        return startOfWeek(startOfMonth(this.activeDate), { weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setUpDaysInWeek();
        this.setUpMonthsInYear();
        this.setUpDateMatrix();
        this.calculateCurrentDate();
        this.calculateActiveDate();
        this.calculateCurrentMonth();
        this.calculateActiveMonth();
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    onModeChange(mode) {
        this.nzModeChange.emit(mode);
        this.nzPanelChange.emit({ date: this.activeDate, mode });
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onDateSelect(date) {
        this.updateDate(date);
        this.nzSelectChange.emit(date);
    }
    /**
     * @param {?} year
     * @return {?}
     */
    onYearSelect(year) {
        /** @type {?} */
        const date = setYear(this.activeDate, year);
        this.updateDate(date);
        this.nzSelectChange.emit(date);
    }
    /**
     * @param {?} month
     * @return {?}
     */
    onMonthSelect(month) {
        /** @type {?} */
        const date = setMonth(this.activeDate, month);
        this.updateDate(date);
        this.nzSelectChange.emit(date);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.updateDate(value || new Date(), false);
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchFn = fn;
    }
    /**
     * @private
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    updateDate(date, touched = true) {
        /** @type {?} */
        const dayChanged = !isSameDay(date, this.activeDate);
        /** @type {?} */
        const monthChanged = !isSameMonth(date, this.activeDate);
        /** @type {?} */
        const yearChanged = !isSameYear(date, this.activeDate);
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
    }
    /**
     * @private
     * @return {?}
     */
    setUpDaysInWeek() {
        this.daysInWeek = [];
        /** @type {?} */
        const weekStart = startOfWeek(this.activeDate, { weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (let i = 0; i < 7; i++) {
            /** @type {?} */
            const date = addDays(weekStart, i);
            /** @type {?} */
            const title = this.dateHelper.format(date, this.dateHelper.relyOnDatePipe ? 'E' : 'ddd');
            /** @type {?} */
            const label = this.dateHelper.format(date, this.dateHelper.relyOnDatePipe ? 'EEEEEE' : 'dd');
            this.daysInWeek.push({ title, label });
        }
    }
    /**
     * @private
     * @return {?}
     */
    setUpMonthsInYear() {
        this.monthsInYear = [];
        for (let i = 0; i < 12; i++) {
            /** @type {?} */
            const date = setMonth(this.activeDate, i);
            /** @type {?} */
            const title = this.dateHelper.format(date, 'MMM');
            /** @type {?} */
            const label = this.dateHelper.format(date, 'MMM');
            /** @type {?} */
            const start = startOfMonth(date);
            this.monthsInYear.push({ title, label, start });
        }
    }
    /**
     * @private
     * @return {?}
     */
    setUpDateMatrix() {
        this.dateMatrix = [];
        /** @type {?} */
        const monthStart = startOfMonth(this.activeDate);
        /** @type {?} */
        const monthEnd = endOfMonth(this.activeDate);
        /** @type {?} */
        const weekDiff = differenceInCalendarWeeks(monthEnd, monthStart, { weekStartsOn: this.dateHelper.getFirstDayOfWeek() }) + 2;
        for (let week = 0; week < weekDiff; week++) {
            /** @type {?} */
            const row = [];
            /** @type {?} */
            const weekStart = addDays(this.calendarStart, week * 7);
            for (let day = 0; day < 7; day++) {
                /** @type {?} */
                const date = addDays(weekStart, day);
                /** @type {?} */
                const monthDiff = differenceInCalendarMonths(date, this.activeDate);
                /** @type {?} */
                const dateFormat = this.dateHelper.relyOnDatePipe
                    ? 'longDate'
                    : this.i18n.getLocaleData('DatePicker.lang.dateFormat', 'YYYY-MM-DD');
                /** @type {?} */
                const title = this.dateHelper.format(date, dateFormat);
                /** @type {?} */
                const label = this.dateHelper.format(date, this.dateHelper.relyOnDatePipe ? 'dd' : 'DD');
                /** @type {?} */
                const rel = monthDiff === 0 ? 'current' : monthDiff < 0 ? 'last' : 'next';
                row.push({ title, label, rel, value: date });
            }
            this.dateMatrix.push(row);
        }
    }
    /**
     * @private
     * @return {?}
     */
    calculateCurrentDate() {
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
    }
    /**
     * @private
     * @return {?}
     */
    calculateActiveDate() {
        this.activeDateRow = differenceInCalendarWeeks(this.activeDate, this.calendarStart, {
            weekStartsOn: this.dateHelper.getFirstDayOfWeek()
        });
        this.activeDateCol = differenceInCalendarDays(this.activeDate, addDays(this.calendarStart, this.activeDateRow * 7));
    }
    /**
     * @private
     * @return {?}
     */
    calculateCurrentMonth() {
        if (isThisYear(this.activeDate)) {
            /** @type {?} */
            const yearStart = startOfYear(this.currentDate);
            /** @type {?} */
            const monthDiff = differenceInCalendarMonths(this.currentDate, yearStart);
            this.currentMonthRow = Math.floor(monthDiff / 3);
            this.currentMonthCol = monthDiff % 3;
        }
        else {
            this.currentMonthRow = -1;
            this.currentMonthCol = -1;
        }
    }
    /**
     * @private
     * @return {?}
     */
    calculateActiveMonth() {
        this.activeMonthRow = Math.floor(this.activeDate.getMonth() / 3);
        this.activeMonthCol = this.activeDate.getMonth() % 3;
    }
}
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
                        () => NzCalendarComponent)), multi: true }]
            }] }
];
/** @nocollapse */
NzCalendarComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ChangeDetectorRef },
    { type: DateHelperService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm56LWNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFDTCxVQUFVLEVBQ1YsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUVMLE1BQU0sRUFDTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLE9BQU8sTUFBTSxtQkFBbUIsQ0FBQztBQUN4QyxPQUFPLHdCQUF3QixNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sMEJBQTBCLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyx5QkFBeUIsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLFVBQVUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLFNBQVMsTUFBTSxzQkFBc0IsQ0FBQztBQUM3QyxPQUFPLFdBQVcsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRCxPQUFPLFVBQVUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLFdBQVcsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRCxPQUFPLFVBQVUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLFFBQVEsTUFBTSxvQkFBb0IsQ0FBQztBQUMxQyxPQUFPLE9BQU8sTUFBTSxtQkFBbUIsQ0FBQztBQUN4QyxPQUFPLFlBQVksTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLFdBQVcsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRCxPQUFPLFdBQVcsTUFBTSx3QkFBd0Is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a0NBQThCOzs7OztJQUFFLHlDQUFxQzs7Ozs7QUFpS2hILG9DQUdDOzs7SUFGQywrQkFBYzs7SUFDZCwrQkFBYzs7Ozs7QUFHaEIsc0NBSUM7OztJQUhDLGlDQUFjOztJQUNkLGlDQUFjOztJQUNkLGlDQUFZOzs7OztBQUdkLHFDQUtDOzs7SUFKQyxnQ0FBYzs7SUFDZCxnQ0FBYzs7SUFDZCw4QkFBaUM7O0lBQ2pDLGdDQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCBhZGREYXlzIGZyb20gJ2RhdGUtZm5zL2FkZF9kYXlzJztcclxuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyBmcm9tICdkYXRlLWZucy9kaWZmZXJlbmNlX2luX2NhbGVuZGFyX2RheXMnO1xyXG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMgZnJvbSAnZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl9tb250aHMnO1xyXG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyBmcm9tICdkYXRlLWZucy9kaWZmZXJlbmNlX2luX2NhbGVuZGFyX3dlZWtzJztcclxuaW1wb3J0IGVuZE9mTW9udGggZnJvbSAnZGF0ZS1mbnMvZW5kX29mX21vbnRoJztcclxuaW1wb3J0IGlzU2FtZURheSBmcm9tICdkYXRlLWZucy9pc19zYW1lX2RheSc7XHJcbmltcG9ydCBpc1NhbWVNb250aCBmcm9tICdkYXRlLWZucy9pc19zYW1lX21vbnRoJztcclxuaW1wb3J0IGlzU2FtZVllYXIgZnJvbSAnZGF0ZS1mbnMvaXNfc2FtZV95ZWFyJztcclxuaW1wb3J0IGlzVGhpc01vbnRoIGZyb20gJ2RhdGUtZm5zL2lzX3RoaXNfbW9udGgnO1xyXG5pbXBvcnQgaXNUaGlzWWVhciBmcm9tICdkYXRlLWZucy9pc190aGlzX3llYXInO1xyXG5pbXBvcnQgc2V0TW9udGggZnJvbSAnZGF0ZS1mbnMvc2V0X21vbnRoJztcclxuaW1wb3J0IHNldFllYXIgZnJvbSAnZGF0ZS1mbnMvc2V0X3llYXInO1xyXG5pbXBvcnQgc3RhcnRPZk1vbnRoIGZyb20gJ2RhdGUtZm5zL3N0YXJ0X29mX21vbnRoJztcclxuaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gJ2RhdGUtZm5zL3N0YXJ0X29mX3dlZWsnO1xyXG5pbXBvcnQgc3RhcnRPZlllYXIgZnJvbSAnZGF0ZS1mbnMvc3RhcnRfb2ZfeWVhcic7XHJcblxyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5pbXBvcnQge1xyXG4gIE56RGF0ZUNlbGxEaXJlY3RpdmUgYXMgRGF0ZUNlbGwsXHJcbiAgTnpEYXRlRnVsbENlbGxEaXJlY3RpdmUgYXMgRGF0ZUZ1bGxDZWxsLFxyXG4gIE56TW9udGhDZWxsRGlyZWN0aXZlIGFzIE1vbnRoQ2VsbCxcclxuICBOek1vbnRoRnVsbENlbGxEaXJlY3RpdmUgYXMgTW9udGhGdWxsQ2VsbFxyXG59IGZyb20gJy4vbnotY2FsZW5kYXItY2VsbHMnO1xyXG5cclxuZXhwb3J0IHR5cGUgTW9kZVR5cGUgPSAnbW9udGgnIHwgJ3llYXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzZWxlY3RvcjogJ256LWNhbGVuZGFyJyxcclxuICBleHBvcnRBczogJ256Q2FsZW5kYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpDYWxlbmRhckNvbXBvbmVudCksIG11bHRpOiB0cnVlIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgbnpNb2RlOiBNb2RlVHlwZSA9ICdtb250aCc7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56TW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPE1vZGVUeXBlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpQYW5lbENoYW5nZTogRXZlbnRFbWl0dGVyPHsgZGF0ZTogRGF0ZTsgbW9kZTogTW9kZVR5cGUgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdENoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoKSBzZXQgbnpWYWx1ZSh2YWx1ZTogRGF0ZSkge1xyXG4gICAgdGhpcy51cGRhdGVEYXRlKHZhbHVlLCBmYWxzZSk7XHJcbiAgfVxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RGF0ZUNlbGwodmFsdWU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBEYXRlIH0+KSB7XHJcbiAgICB0aGlzLmRhdGVDZWxsID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRhdGVGdWxsQ2VsbCh2YWx1ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IERhdGUgfT4pIHtcclxuICAgIHRoaXMuZGF0ZUZ1bGxDZWxsID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuek1vbnRoQ2VsbCh2YWx1ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IERhdGUgfT4pIHtcclxuICAgIHRoaXMubW9udGhDZWxsID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuek1vbnRoRnVsbENlbGwodmFsdWU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBEYXRlIH0+KSB7XHJcbiAgICB0aGlzLm1vbnRoRnVsbENlbGwgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RnVsbHNjcmVlbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5mdWxsc2NyZWVuID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxuICB9XHJcbiAgZ2V0IG56RnVsbHNjcmVlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmZ1bGxzY3JlZW47XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekNhcmQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZnVsbHNjcmVlbiA9ICFjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xyXG4gIH1cclxuICBnZXQgbnpDYXJkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLmZ1bGxzY3JlZW47XHJcbiAgfVxyXG5cclxuICBAQ29udGVudENoaWxkKERhdGVDZWxsLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXHJcbiAgc2V0IGRhdGVDZWxsQ2hpbGQodmFsdWU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBEYXRlIH0+KSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5kYXRlQ2VsbCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQENvbnRlbnRDaGlsZChEYXRlRnVsbENlbGwsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcclxuICBzZXQgZGF0ZUZ1bGxDZWxsQ2hpbGQodmFsdWU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBEYXRlIH0+KSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5kYXRlRnVsbENlbGwgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoTW9udGhDZWxsLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXHJcbiAgc2V0IG1vbnRoQ2VsbENoaWxkKHZhbHVlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9Pikge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMubW9udGhDZWxsID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAQ29udGVudENoaWxkKE1vbnRoRnVsbENlbGwsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcclxuICBzZXQgbW9udGhGdWxsQ2VsbENoaWxkKHZhbHVlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9Pikge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMubW9udGhGdWxsQ2VsbCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZnVsbGNhbGVuZGFyLS1mdWxsc2NyZWVuJylcclxuICBmdWxsc2NyZWVuID0gdHJ1ZTtcclxuXHJcbiAgZGF5c0luV2VlazogRGF5Q2VsbENvbnRleHRbXSA9IFtdO1xyXG4gIG1vbnRoc0luWWVhcjogTW9udGhDZWxsQ29udGV4dFtdID0gW107XHJcbiAgZGF0ZU1hdHJpeDogRGF0ZUNlbGxDb250ZXh0W11bXSA9IFtdO1xyXG4gIGFjdGl2ZURhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGN1cnJlbnREYXRlUm93OiBudW1iZXIgPSAtMTtcclxuICBjdXJyZW50RGF0ZUNvbDogbnVtYmVyID0gLTE7XHJcbiAgYWN0aXZlRGF0ZVJvdzogbnVtYmVyID0gLTE7XHJcbiAgYWN0aXZlRGF0ZUNvbDogbnVtYmVyID0gLTE7XHJcbiAgY3VycmVudE1vbnRoUm93OiBudW1iZXIgPSAtMTtcclxuICBjdXJyZW50TW9udGhDb2w6IG51bWJlciA9IC0xO1xyXG4gIGFjdGl2ZU1vbnRoUm93OiBudW1iZXIgPSAtMTtcclxuICBhY3RpdmVNb250aENvbDogbnVtYmVyID0gLTE7XHJcbiAgZGF0ZUNlbGw6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBEYXRlIH0+IHwgbnVsbCA9IG51bGw7XHJcbiAgZGF0ZUZ1bGxDZWxsOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9PiB8IG51bGwgPSBudWxsO1xyXG4gIG1vbnRoQ2VsbDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IERhdGUgfT4gfCBudWxsID0gbnVsbDtcclxuICBtb250aEZ1bGxDZWxsOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9PiB8IG51bGwgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICBwcml2YXRlIG9uQ2hhbmdlRm46IChkYXRlOiBEYXRlKSA9PiB2b2lkID0gKCkgPT4ge307XHJcbiAgcHJpdmF0ZSBvblRvdWNoRm46ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcclxuXHJcbiAgcHJpdmF0ZSBnZXQgY2FsZW5kYXJTdGFydCgpOiBEYXRlIHtcclxuICAgIHJldHVybiBzdGFydE9mV2VlayhzdGFydE9mTW9udGgodGhpcy5hY3RpdmVEYXRlKSwgeyB3ZWVrU3RhcnRzT246IHRoaXMuZGF0ZUhlbHBlci5nZXRGaXJzdERheU9mV2VlaygpIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRVcERheXNJbldlZWsoKTtcclxuICAgIHRoaXMuc2V0VXBNb250aHNJblllYXIoKTtcclxuICAgIHRoaXMuc2V0VXBEYXRlTWF0cml4KCk7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZUN1cnJlbnREYXRlKCk7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZUFjdGl2ZURhdGUoKTtcclxuICAgIHRoaXMuY2FsY3VsYXRlQ3VycmVudE1vbnRoKCk7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZUFjdGl2ZU1vbnRoKCk7XHJcbiAgfVxyXG5cclxuICBvbk1vZGVDaGFuZ2UobW9kZTogTW9kZVR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMubnpNb2RlQ2hhbmdlLmVtaXQobW9kZSk7XHJcbiAgICB0aGlzLm56UGFuZWxDaGFuZ2UuZW1pdCh7IGRhdGU6IHRoaXMuYWN0aXZlRGF0ZSwgbW9kZSB9KTtcclxuICB9XHJcblxyXG4gIG9uRGF0ZVNlbGVjdChkYXRlOiBEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZURhdGUoZGF0ZSk7XHJcbiAgICB0aGlzLm56U2VsZWN0Q2hhbmdlLmVtaXQoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBvblllYXJTZWxlY3QoeWVhcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXRlID0gc2V0WWVhcih0aGlzLmFjdGl2ZURhdGUsIHllYXIpO1xyXG4gICAgdGhpcy51cGRhdGVEYXRlKGRhdGUpO1xyXG4gICAgdGhpcy5uelNlbGVjdENoYW5nZS5lbWl0KGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgb25Nb250aFNlbGVjdChtb250aDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXRlID0gc2V0TW9udGgodGhpcy5hY3RpdmVEYXRlLCBtb250aCk7XHJcbiAgICB0aGlzLnVwZGF0ZURhdGUoZGF0ZSk7XHJcbiAgICB0aGlzLm56U2VsZWN0Q2hhbmdlLmVtaXQoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVEYXRlKHZhbHVlIHx8IG5ldyBEYXRlKCksIGZhbHNlKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKGRhdGU6IERhdGUpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2VGbiA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaEZuID0gZm47XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZURhdGUoZGF0ZTogRGF0ZSwgdG91Y2hlZDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRheUNoYW5nZWQgPSAhaXNTYW1lRGF5KGRhdGUsIHRoaXMuYWN0aXZlRGF0ZSk7XHJcbiAgICBjb25zdCBtb250aENoYW5nZWQgPSAhaXNTYW1lTW9udGgoZGF0ZSwgdGhpcy5hY3RpdmVEYXRlKTtcclxuICAgIGNvbnN0IHllYXJDaGFuZ2VkID0gIWlzU2FtZVllYXIoZGF0ZSwgdGhpcy5hY3RpdmVEYXRlKTtcclxuXHJcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSBkYXRlO1xyXG5cclxuICAgIGlmIChkYXlDaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlQWN0aXZlRGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKG1vbnRoQ2hhbmdlZCkge1xyXG4gICAgICB0aGlzLnNldFVwRGF0ZU1hdHJpeCgpO1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZUN1cnJlbnREYXRlKCk7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlQWN0aXZlTW9udGgoKTtcclxuICAgIH1cclxuICAgIGlmICh5ZWFyQ2hhbmdlZCkge1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRNb250aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0b3VjaGVkKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VGbihkYXRlKTtcclxuICAgICAgdGhpcy5vblRvdWNoRm4oKTtcclxuICAgICAgdGhpcy5uelZhbHVlQ2hhbmdlLmVtaXQoZGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFVwRGF5c0luV2VlaygpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF5c0luV2VlayA9IFtdO1xyXG4gICAgY29uc3Qgd2Vla1N0YXJ0ID0gc3RhcnRPZldlZWsodGhpcy5hY3RpdmVEYXRlLCB7IHdlZWtTdGFydHNPbjogdGhpcy5kYXRlSGVscGVyLmdldEZpcnN0RGF5T2ZXZWVrKCkgfSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgICBjb25zdCBkYXRlID0gYWRkRGF5cyh3ZWVrU3RhcnQsIGkpO1xyXG4gICAgICBjb25zdCB0aXRsZSA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF0ZSwgdGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlID8gJ0UnIDogJ2RkZCcpO1xyXG4gICAgICBjb25zdCBsYWJlbCA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF0ZSwgdGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlID8gJ0VFRUVFRScgOiAnZGQnKTtcclxuICAgICAgdGhpcy5kYXlzSW5XZWVrLnB1c2goeyB0aXRsZSwgbGFiZWwgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFVwTW9udGhzSW5ZZWFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5tb250aHNJblllYXIgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xyXG4gICAgICBjb25zdCBkYXRlID0gc2V0TW9udGgodGhpcy5hY3RpdmVEYXRlLCBpKTtcclxuICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRhdGUsICdNTU0nKTtcclxuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRhdGUsICdNTU0nKTtcclxuICAgICAgY29uc3Qgc3RhcnQgPSBzdGFydE9mTW9udGgoZGF0ZSk7XHJcbiAgICAgIHRoaXMubW9udGhzSW5ZZWFyLnB1c2goeyB0aXRsZSwgbGFiZWwsIHN0YXJ0IH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRVcERhdGVNYXRyaXgoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGVNYXRyaXggPSBbXTtcclxuICAgIGNvbnN0IG1vbnRoU3RhcnQgPSBzdGFydE9mTW9udGgodGhpcy5hY3RpdmVEYXRlKTtcclxuICAgIGNvbnN0IG1vbnRoRW5kID0gZW5kT2ZNb250aCh0aGlzLmFjdGl2ZURhdGUpO1xyXG4gICAgY29uc3Qgd2Vla0RpZmYgPVxyXG4gICAgICBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzKG1vbnRoRW5kLCBtb250aFN0YXJ0LCB7IHdlZWtTdGFydHNPbjogdGhpcy5kYXRlSGVscGVyLmdldEZpcnN0RGF5T2ZXZWVrKCkgfSkgKyAyO1xyXG5cclxuICAgIGZvciAobGV0IHdlZWsgPSAwOyB3ZWVrIDwgd2Vla0RpZmY7IHdlZWsrKykge1xyXG4gICAgICBjb25zdCByb3c6IERhdGVDZWxsQ29udGV4dFtdID0gW107XHJcbiAgICAgIGNvbnN0IHdlZWtTdGFydCA9IGFkZERheXModGhpcy5jYWxlbmRhclN0YXJ0LCB3ZWVrICogNyk7XHJcblxyXG4gICAgICBmb3IgKGxldCBkYXkgPSAwOyBkYXkgPCA3OyBkYXkrKykge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBhZGREYXlzKHdlZWtTdGFydCwgZGF5KTtcclxuICAgICAgICBjb25zdCBtb250aERpZmYgPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkYXRlLCB0aGlzLmFjdGl2ZURhdGUpO1xyXG4gICAgICAgIGNvbnN0IGRhdGVGb3JtYXQgPSB0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGVcclxuICAgICAgICAgID8gJ2xvbmdEYXRlJ1xyXG4gICAgICAgICAgOiB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnRGF0ZVBpY2tlci5sYW5nLmRhdGVGb3JtYXQnLCAnWVlZWS1NTS1ERCcpO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdChkYXRlLCBkYXRlRm9ybWF0KTtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF0ZSwgdGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlID8gJ2RkJyA6ICdERCcpO1xyXG4gICAgICAgIGNvbnN0IHJlbCA9IG1vbnRoRGlmZiA9PT0gMCA/ICdjdXJyZW50JyA6IG1vbnRoRGlmZiA8IDAgPyAnbGFzdCcgOiAnbmV4dCc7XHJcbiAgICAgICAgcm93LnB1c2goeyB0aXRsZSwgbGFiZWwsIHJlbCwgdmFsdWU6IGRhdGUgfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kYXRlTWF0cml4LnB1c2gocm93KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlQ3VycmVudERhdGUoKTogdm9pZCB7XHJcbiAgICBpZiAoaXNUaGlzTW9udGgodGhpcy5hY3RpdmVEYXRlKSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnREYXRlUm93ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyh0aGlzLmN1cnJlbnREYXRlLCB0aGlzLmNhbGVuZGFyU3RhcnQsIHtcclxuICAgICAgICB3ZWVrU3RhcnRzT246IHRoaXMuZGF0ZUhlbHBlci5nZXRGaXJzdERheU9mV2VlaygpXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmN1cnJlbnREYXRlQ29sID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxyXG4gICAgICAgIHRoaXMuY3VycmVudERhdGUsXHJcbiAgICAgICAgYWRkRGF5cyh0aGlzLmNhbGVuZGFyU3RhcnQsIHRoaXMuY3VycmVudERhdGVSb3cgKiA3KVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdXJyZW50RGF0ZVJvdyA9IC0xO1xyXG4gICAgICB0aGlzLmN1cnJlbnREYXRlQ29sID0gLTE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZUFjdGl2ZURhdGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2ZURhdGVSb3cgPSBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzKHRoaXMuYWN0aXZlRGF0ZSwgdGhpcy5jYWxlbmRhclN0YXJ0LCB7XHJcbiAgICAgIHdlZWtTdGFydHNPbjogdGhpcy5kYXRlSGVscGVyLmdldEZpcnN0RGF5T2ZXZWVrKClcclxuICAgIH0pO1xyXG4gICAgdGhpcy5hY3RpdmVEYXRlQ29sID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKHRoaXMuYWN0aXZlRGF0ZSwgYWRkRGF5cyh0aGlzLmNhbGVuZGFyU3RhcnQsIHRoaXMuYWN0aXZlRGF0ZVJvdyAqIDcpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlQ3VycmVudE1vbnRoKCk6IHZvaWQge1xyXG4gICAgaWYgKGlzVGhpc1llYXIodGhpcy5hY3RpdmVEYXRlKSkge1xyXG4gICAgICBjb25zdCB5ZWFyU3RhcnQgPSBzdGFydE9mWWVhcih0aGlzLmN1cnJlbnREYXRlKTtcclxuICAgICAgY29uc3QgbW9udGhEaWZmID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHModGhpcy5jdXJyZW50RGF0ZSwgeWVhclN0YXJ0KTtcclxuICAgICAgdGhpcy5jdXJyZW50TW9udGhSb3cgPSBNYXRoLmZsb29yKG1vbnRoRGlmZiAvIDMpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRNb250aENvbCA9IG1vbnRoRGlmZiAlIDM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN1cnJlbnRNb250aFJvdyA9IC0xO1xyXG4gICAgICB0aGlzLmN1cnJlbnRNb250aENvbCA9IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVBY3RpdmVNb250aCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZlTW9udGhSb3cgPSBNYXRoLmZsb29yKHRoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpIC8gMyk7XHJcbiAgICB0aGlzLmFjdGl2ZU1vbnRoQ29sID0gdGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCkgJSAzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXlDZWxsQ29udGV4dCB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBsYWJlbDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vbnRoQ2VsbENvbnRleHQge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBzdGFydDogRGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRlQ2VsbENvbnRleHQge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICByZWw6ICdsYXN0JyB8ICdjdXJyZW50JyB8ICduZXh0JztcclxuICB2YWx1ZTogRGF0ZTtcclxufVxyXG4iXX0=