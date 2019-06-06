(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('date-fns/add_months'), require('date-fns/add_years'), require('date-fns/end_of_month'), require('date-fns/set_day'), require('date-fns/set_month'), require('ng-zorro-antd/icon'), require('@angular/common'), require('ng-zorro-antd/time-picker'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/overlay'), require('@angular/core'), require('@angular/forms'), require('ng-zorro-antd/core'), require('ng-zorro-antd/i18n')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/date-picker', ['exports', 'date-fns/add_months', 'date-fns/add_years', 'date-fns/end_of_month', 'date-fns/set_day', 'date-fns/set_month', 'ng-zorro-antd/icon', '@angular/common', 'ng-zorro-antd/time-picker', 'rxjs', 'rxjs/operators', '@angular/cdk/overlay', '@angular/core', '@angular/forms', 'ng-zorro-antd/core', 'ng-zorro-antd/i18n'], factory) :
    (factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd']['date-picker'] = {}),global.addMonths,global.addYears,global.endOfMonth,global.setDay,global.setMonth,global['ng-zorro-antd'].icon,global.ng.common,global['ng-zorro-antd']['time-picker'],global.rxjs,global.rxjs.operators,global.ng.cdk.overlay,global.ng.core,global.ng.forms,global['ng-zorro-antd'].core,global['ng-zorro-antd'].i18n));
}(this, (function (exports,addMonths,addYears,endOfMonth,setDay,setMonth,icon,common,timePicker,rxjs,operators,overlay,core,forms,core$1,i18n) { 'use strict';

    addMonths = addMonths && addMonths.hasOwnProperty('default') ? addMonths['default'] : addMonths;
    addYears = addYears && addYears.hasOwnProperty('default') ? addYears['default'] : addYears;
    endOfMonth = endOfMonth && endOfMonth.hasOwnProperty('default') ? endOfMonth['default'] : endOfMonth;
    setDay = setDay && setDay.hasOwnProperty('default') ? setDay['default'] : setDay;
    setMonth = setMonth && setMonth.hasOwnProperty('default') ? setMonth['default'] : setMonth;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Wrapping kind APIs for date operating and unify
     * NOTE: every new API return new CandyDate object without side effects to the former Date object
     * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
     * TODO: support format() against to angular's core API
     */
    var /**
     * Wrapping kind APIs for date operating and unify
     * NOTE: every new API return new CandyDate object without side effects to the former Date object
     * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
     * TODO: support format() against to angular's core API
     */ CandyDate = /** @class */ (function () {
        // locale: string; // Custom specified locale ID
        function CandyDate(date) {
            // if (!(this instanceof CandyDate)) {
            //   return new CandyDate(date);
            // }
            if (date) {
                if (date instanceof Date) {
                    this.nativeDate = date;
                }
                else if (typeof date === 'string') {
                    this.nativeDate = new Date(date);
                }
                else {
                    throw new Error('The input date type is not supported ("Date" and "string" is now recommended)');
                }
            }
            else {
                this.nativeDate = new Date();
            }
        }
        // getLocale(): string {
        //   return this.locale;
        // }
        // setLocale(locale: string): CandyDate {
        //   this.locale = locale;
        //   return this;
        // }
        // ---------------------------------------------------------------------
        // | Native shortcuts
        // ---------------------------------------------------------------------
        // getLocale(): string {
        //   return this.locale;
        // }
        // setLocale(locale: string): CandyDate {
        //   this.locale = locale;
        //   return this;
        // }
        // ---------------------------------------------------------------------
        // | Native shortcuts
        // ---------------------------------------------------------------------
        /**
         * @return {?}
         */
        CandyDate.prototype.getYear =
            // getLocale(): string {
            //   return this.locale;
            // }
            // setLocale(locale: string): CandyDate {
            //   this.locale = locale;
            //   return this;
            // }
            // ---------------------------------------------------------------------
            // | Native shortcuts
            // ---------------------------------------------------------------------
            /**
             * @return {?}
             */
            function () {
                return this.nativeDate.getFullYear();
            };
        /**
         * @return {?}
         */
        CandyDate.prototype.getMonth = /**
         * @return {?}
         */
            function () {
                return this.nativeDate.getMonth();
            };
        /**
         * @return {?}
         */
        CandyDate.prototype.getDay = /**
         * @return {?}
         */
            function () {
                return this.nativeDate.getDay();
            };
        /**
         * @return {?}
         */
        CandyDate.prototype.getTime = /**
         * @return {?}
         */
            function () {
                return this.nativeDate.getTime();
            };
        /**
         * @return {?}
         */
        CandyDate.prototype.getDate = /**
         * @return {?}
         */
            function () {
                return this.nativeDate.getDate();
            };
        /**
         * @return {?}
         */
        CandyDate.prototype.getHours = /**
         * @return {?}
         */
            function () {
                return this.nativeDate.getHours();
            };
        /**
         * @return {?}
         */
        CandyDate.prototype.getMinutes = /**
         * @return {?}
         */
            function () {
                return this.nativeDate.getMinutes();
            };
        /**
         * @return {?}
         */
        CandyDate.prototype.getSeconds = /**
         * @return {?}
         */
            function () {
                return this.nativeDate.getSeconds();
            };
        /**
         * @return {?}
         */
        CandyDate.prototype.getMilliseconds = /**
         * @return {?}
         */
            function () {
                return this.nativeDate.getMilliseconds();
            };
        // ---------------------------------------------------------------------
        // | New implementing APIs
        // ---------------------------------------------------------------------
        // ---------------------------------------------------------------------
        // | New implementing APIs
        // ---------------------------------------------------------------------
        /**
         * @return {?}
         */
        CandyDate.prototype.clone =
            // ---------------------------------------------------------------------
            // | New implementing APIs
            // ---------------------------------------------------------------------
            /**
             * @return {?}
             */
            function () {
                return new CandyDate(new Date(this.nativeDate));
            };
        /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} second
         * @return {?}
         */
        CandyDate.prototype.setHms = /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} second
         * @return {?}
         */
            function (hour, minute, second) {
                /** @type {?} */
                var date = new Date(this.nativeDate);
                date.setHours(hour, minute, second);
                return new CandyDate(date);
            };
        /**
         * @param {?} year
         * @return {?}
         */
        CandyDate.prototype.setYear = /**
         * @param {?} year
         * @return {?}
         */
            function (year) {
                // return new CandyDate(setYear(this.date, year));
                /** @type {?} */
                var date = new Date(this.nativeDate);
                date.setFullYear(year);
                return new CandyDate(date);
            };
        /**
         * @param {?} amount
         * @return {?}
         */
        CandyDate.prototype.addYears = /**
         * @param {?} amount
         * @return {?}
         */
            function (amount) {
                return new CandyDate(addYears(this.nativeDate, amount));
            };
        // NOTE: month starts from 0
        // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
        // NOTE: month starts from 0
        // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
        /**
         * @param {?} month
         * @return {?}
         */
        CandyDate.prototype.setMonth =
            // NOTE: month starts from 0
            // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
            /**
             * @param {?} month
             * @return {?}
             */
            function (month) {
                // const date = new Date(this.nativeDate);
                // date.setMonth(month);
                // return new CandyDate(date);
                return new CandyDate(setMonth(this.nativeDate, month));
            };
        /**
         * @param {?} amount
         * @return {?}
         */
        CandyDate.prototype.addMonths = /**
         * @param {?} amount
         * @return {?}
         */
            function (amount) {
                return new CandyDate(addMonths(this.nativeDate, amount));
            };
        /**
         * @param {?} day
         * @param {?=} options
         * @return {?}
         */
        CandyDate.prototype.setDay = /**
         * @param {?} day
         * @param {?=} options
         * @return {?}
         */
            function (day, options) {
                return new CandyDate(setDay(this.nativeDate, day, options));
            };
        /**
         * @param {?} amount
         * @return {?}
         */
        CandyDate.prototype.setDate = /**
         * @param {?} amount
         * @return {?}
         */
            function (amount) {
                /** @type {?} */
                var date = new Date(this.nativeDate);
                date.setDate(amount);
                return new CandyDate(date);
            };
        /**
         * @param {?} amount
         * @return {?}
         */
        CandyDate.prototype.addDays = /**
         * @param {?} amount
         * @return {?}
         */
            function (amount) {
                return this.setDate(this.getDate() + amount);
            };
        /**
         * @param {?} grain
         * @return {?}
         */
        CandyDate.prototype.endOf = /**
         * @param {?} grain
         * @return {?}
         */
            function (grain) {
                switch (grain) {
                    case 'month':
                        return new CandyDate(endOfMonth(this.nativeDate));
                }
                return null;
            };
        /**
         * @param {?} date
         * @param {?} grain
         * @return {?}
         */
        CandyDate.prototype.isSame = /**
         * @param {?} date
         * @param {?} grain
         * @return {?}
         */
            function (date, grain) {
                // TODO: Precipitate into a function "compare()"
                if (date) {
                    /** @type {?} */
                    var left = this.toNativeDate();
                    /** @type {?} */
                    var right = this.toNativeDate(date);
                    switch (grain) {
                        case 'year':
                            return left.getFullYear() === right.getFullYear();
                        case 'month':
                            return left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth();
                        case 'day':
                            return (left.getFullYear() === right.getFullYear() &&
                                left.getMonth() === right.getMonth() &&
                                left.getDate() === right.getDate());
                        case 'hour':
                            return (left.getFullYear() === right.getFullYear() &&
                                left.getMonth() === right.getMonth() &&
                                left.getDate() === right.getDate() &&
                                left.getHours() === right.getHours());
                        case 'minute':
                            return (left.getFullYear() === right.getFullYear() &&
                                left.getMonth() === right.getMonth() &&
                                left.getDate() === right.getDate() &&
                                left.getHours() === right.getHours() &&
                                left.getMinutes() === right.getMinutes());
                        case 'second':
                            return (left.getFullYear() === right.getFullYear() &&
                                left.getMonth() === right.getMonth() &&
                                left.getDate() === right.getDate() &&
                                left.getHours() === right.getHours() &&
                                left.getMinutes() === right.getMinutes() &&
                                left.getSeconds() === right.getSeconds());
                    }
                }
                return false;
            };
        /**
         * @param {?} date
         * @param {?} grain
         * @return {?}
         */
        CandyDate.prototype.isAfter = /**
         * @param {?} date
         * @param {?} grain
         * @return {?}
         */
            function (date, grain) {
                // TODO: Precipitate into a function "compare()"
                if (date) {
                    /** @type {?} */
                    var left = this.toNativeDate();
                    /** @type {?} */
                    var right = this.toNativeDate(date);
                    switch (grain) {
                        case 'year':
                            return left.getFullYear() > right.getFullYear();
                        case 'month':
                            return (left.getFullYear() > right.getFullYear() ||
                                (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth()));
                        case 'day':
                            return (left.getFullYear() > right.getFullYear() ||
                                (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth()) ||
                                (left.getFullYear() === right.getFullYear() &&
                                    left.getMonth() === right.getMonth() &&
                                    left.getDate() > right.getDate()));
                        case 'hour':
                            return (left.getFullYear() > right.getFullYear() ||
                                (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth()) ||
                                (left.getFullYear() === right.getFullYear() &&
                                    left.getMonth() === right.getMonth() &&
                                    left.getDate() > right.getDate()) ||
                                (left.getFullYear() === right.getFullYear() &&
                                    left.getMonth() === right.getMonth() &&
                                    left.getDate() === right.getDate() &&
                                    left.getHours() > right.getHours()));
                        case 'minute':
                            return (left.getFullYear() > right.getFullYear() ||
                                (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth()) ||
                                (left.getFullYear() === right.getFullYear() &&
                                    left.getMonth() === right.getMonth() &&
                                    left.getDate() > right.getDate()) ||
                                (left.getFullYear() === right.getFullYear() &&
                                    left.getMonth() === right.getMonth() &&
                                    left.getDate() === right.getDate() &&
                                    left.getHours() > right.getHours()) ||
                                (left.getFullYear() === right.getFullYear() &&
                                    left.getMonth() === right.getMonth() &&
                                    left.getDate() === right.getDate() &&
                                    left.getHours() === right.getHours() &&
                                    left.getMinutes() > right.getMinutes()));
                        case 'second':
                            return (left.getFullYear() > right.getFullYear() ||
                                (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth()) ||
                                (left.getFullYear() === right.getFullYear() &&
                                    left.getMonth() === right.getMonth() &&
                                    left.getDate() > right.getDate()) ||
                                (left.getFullYear() === right.getFullYear() &&
                                    left.getMonth() === right.getMonth() &&
                                    left.getDate() === right.getDate() &&
                                    left.getHours() > right.getHours()) ||
                                (left.getFullYear() === right.getFullYear() &&
                                    left.getMonth() === right.getMonth() &&
                                    left.getDate() === right.getDate() &&
                                    left.getHours() === right.getHours() &&
                                    left.getMinutes() > right.getMinutes()) ||
                                (left.getFullYear() === right.getFullYear() &&
                                    left.getMonth() === right.getMonth() &&
                                    left.getDate() === right.getDate() &&
                                    left.getHours() === right.getHours() &&
                                    left.getMinutes() === right.getMinutes() &&
                                    left.getSeconds() > right.getSeconds()));
                    }
                }
                return false;
            };
        // TODO: Precipitate into a function "compare()"
        // TODO: Precipitate into a function "compare()"
        /**
         * @param {?} date
         * @param {?} grain
         * @return {?}
         */
        CandyDate.prototype.isBefore =
            // TODO: Precipitate into a function "compare()"
            /**
             * @param {?} date
             * @param {?} grain
             * @return {?}
             */
            function (date, grain) {
                if (date) {
                    /** @type {?} */
                    var left = this.toNativeDate();
                    /** @type {?} */
                    var right = this.toNativeDate(date);
                    switch (grain) {
                        case 'year':
                            return left.getFullYear() < right.getFullYear();
                        case 'month':
                            return (left.getFullYear() < right.getFullYear() ||
                                (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth()));
                        case 'day':
                            return (left.getFullYear() < right.getFullYear() ||
                                (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth()) ||
                                (left.getFullYear() === right.getFullYear() &&
                                    left.getMonth() === right.getMonth() &&
                                    left.getDate() < right.getDate()));
                        case 'hour':
                            return (left.getFullYear() < right.getFullYear() ||
                                (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth()) ||
                                (left.getFullYear() === right.getFullYear() &&
                                    left.getMonth() === right.getMonth() &&
                                    left.getDate() < right.getDate()) ||
                                (left.getFullYear() === right.getFullYear() &&
                                    left.getMonth() === right.getMonth() &&
                                    left.getDate() === right.getDate() &&
                                    left.getHours() < right.getHours()));
                        case 'minute':
                            return (left.getFullYear() < right.getFullYear() ||
                                (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth()) ||
                                (left.getFullYear() === right.getFullYear() &&
                                    left.getMonth() === right.getMonth() &&
                                    left.getDate() < right.getDate()) ||
                                (left.getFullYear() === right.getFullYear() &&
                                    left.getMonth() === right.getMonth() &&
                                    left.getDate() === right.getDate() &&
                                    left.getHours() < right.getHours()) ||
                                (left.getFullYear() === right.getFullYear() &&
                                    left.getMonth() === right.getMonth() &&
                                    left.getDate() === right.getDate() &&
                                    left.getHours() === right.getHours() &&
                                    left.getMinutes() < right.getMinutes()));
                        case 'second':
                            return (left.getFullYear() < right.getFullYear() ||
                                (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth()) ||
                                (left.getFullYear() === right.getFullYear() &&
                                    left.getMonth() === right.getMonth() &&
                                    left.getDate() < right.getDate()) ||
                                (left.getFullYear() === right.getFullYear() &&
                                    left.getMonth() === right.getMonth() &&
                                    left.getDate() === right.getDate() &&
                                    left.getHours() < right.getHours()) ||
                                (left.getFullYear() === right.getFullYear() &&
                                    left.getMonth() === right.getMonth() &&
                                    left.getDate() === right.getDate() &&
                                    left.getHours() === right.getHours() &&
                                    left.getMinutes() < right.getMinutes()) ||
                                (left.getFullYear() === right.getFullYear() &&
                                    left.getMonth() === right.getMonth() &&
                                    left.getDate() === right.getDate() &&
                                    left.getHours() === right.getHours() &&
                                    left.getMinutes() === right.getMinutes() &&
                                    left.getSeconds() < right.getSeconds()));
                    }
                }
                return false;
            };
        // Equal to today accurate to "day"
        // Equal to today accurate to "day"
        /**
         * @return {?}
         */
        CandyDate.prototype.isToday =
            // Equal to today accurate to "day"
            /**
             * @return {?}
             */
            function () {
                return this.isSame(new Date(), 'day');
            };
        /**
         * @return {?}
         */
        CandyDate.prototype.isInvalid = /**
         * @return {?}
         */
            function () {
                return isNaN(this.nativeDate.valueOf());
            };
        /**
         * @private
         * @param {?=} date
         * @return {?}
         */
        CandyDate.prototype.toNativeDate = /**
         * @private
         * @param {?=} date
         * @return {?}
         */
            function (date) {
                if (date === void 0) {
                    date = this;
                }
                return date instanceof CandyDate ? date.nativeDate : date;
            };
        return CandyDate;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CalendarFooterComponent = /** @class */ (function () {
        function CalendarFooterComponent() {
            this.showToday = false;
            this.hasTimePicker = false;
            this.isRange = false;
            this.showTimePicker = false;
            this.showTimePickerChange = new core.EventEmitter();
            this.timePickerDisabled = false;
            this.okDisabled = false;
            this.clickOk = new core.EventEmitter();
            this.clickToday = new core.EventEmitter();
            this.prefixCls = 'ant-calendar';
            this.isTemplateRef = core$1.isTemplateRef;
            this.isNonEmptyString = core$1.isNonEmptyString;
        }
        CalendarFooterComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line:component-selector
                        selector: 'calendar-footer',
                        exportAs: 'calendarFooter',
                        template: "<div class=\"{{ prefixCls }}-footer {{ isRange ? prefixCls + '-range-bottom' : '' }} {{ hasTimePicker ? prefixCls + '-footer-show-ok' : '' }}\">\r\n  <div *ngIf=\"rangeQuickSelector\" class=\"{{ prefixCls }}-footer-extra {{ prefixCls }}-range-quick-selector\">\r\n    <ng-container *ngTemplateOutlet=\"rangeQuickSelector\"></ng-container>\r\n  </div>\r\n  <div *ngIf=\"extraFooter\" class=\"{{ prefixCls }}-footer-extra {{ isRange ? prefixCls + '-range-quick-selector' : '' }}\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(extraFooter)\">\r\n        <ng-container *ngTemplateOutlet=\"extraFooter\"></ng-container>\r\n      </ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(extraFooter)\">\r\n        <span [innerHTML]=\"extraFooter\"></span>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n  <span *ngIf=\"showToday || hasTimePicker\" class=\"{{ prefixCls }}-footer-btn\">\r\n    <today-button\r\n      *ngIf=\"showToday\"\r\n      [locale]=\"locale\"\r\n      [disabledDate]=\"disabledDate\"\r\n      [hasTimePicker]=\"hasTimePicker\"\r\n      (clickToday)=\"clickToday.emit($event)\"\r\n    ></today-button>\r\n    <time-picker-button\r\n      *ngIf=\"hasTimePicker\"\r\n      [locale]=\"locale\"\r\n      [timePickerDisabled]=\"timePickerDisabled\"\r\n      [showTimePicker]=\"showTimePicker\"\r\n      (showTimePickerChange)=\"showTimePickerChange.emit($event)\"\r\n    ></time-picker-button>\r\n    <ok-button\r\n      *ngIf=\"hasTimePicker\"\r\n      [okDisabled]=\"okDisabled\"\r\n      [locale]=\"locale\"\r\n      (clickOk)=\"clickOk.emit()\"\r\n    ></ok-button>\r\n  </span>\r\n</div>"
                    }] }
        ];
        CalendarFooterComponent.propDecorators = {
            locale: [{ type: core.Input }],
            showToday: [{ type: core.Input }],
            hasTimePicker: [{ type: core.Input }],
            isRange: [{ type: core.Input }],
            showTimePicker: [{ type: core.Input }],
            showTimePickerChange: [{ type: core.Output }],
            timePickerDisabled: [{ type: core.Input }],
            okDisabled: [{ type: core.Input }],
            disabledDate: [{ type: core.Input }],
            extraFooter: [{ type: core.Input }],
            rangeQuickSelector: [{ type: core.Input }],
            clickOk: [{ type: core.Output }],
            clickToday: [{ type: core.Output }]
        };
        return CalendarFooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CalendarHeaderComponent = /** @class */ (function () {
        function CalendarHeaderComponent(dateHelper) {
            this.dateHelper = dateHelper;
            this.enablePrev = true;
            this.enableNext = true;
            this.showTimePicker = false;
            this.valueChange = new core.EventEmitter();
            this.panelModeChange = new core.EventEmitter();
            this.chooseDecade = new core.EventEmitter();
            this.chooseYear = new core.EventEmitter();
            this.chooseMonth = new core.EventEmitter();
            this.prefixCls = 'ant-calendar';
            this.yearToMonth = false; // Indicate whether should change to month panel when current is year panel (if referer=month, it should show month panel when choosed a year)
        }
        /**
         * @return {?}
         */
        CalendarHeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (!this.value) {
                    this.value = new CandyDate(); // Show today by default
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        CalendarHeaderComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.value || changes.showTimePicker || changes.panelMode) {
                    this.render();
                }
            };
        /**
         * @return {?}
         */
        CalendarHeaderComponent.prototype.previousYear = /**
         * @return {?}
         */
            function () {
                this.gotoYear(-1);
            };
        /**
         * @return {?}
         */
        CalendarHeaderComponent.prototype.nextYear = /**
         * @return {?}
         */
            function () {
                this.gotoYear(1);
            };
        /**
         * @return {?}
         */
        CalendarHeaderComponent.prototype.previousMonth = /**
         * @return {?}
         */
            function () {
                this.gotoMonth(-1);
            };
        /**
         * @return {?}
         */
        CalendarHeaderComponent.prototype.nextMonth = /**
         * @return {?}
         */
            function () {
                this.gotoMonth(1);
            };
        /**
         * @param {?} mode
         * @param {?=} value
         * @return {?}
         */
        CalendarHeaderComponent.prototype.changePanel = /**
         * @param {?} mode
         * @param {?=} value
         * @return {?}
         */
            function (mode, value) {
                this.panelModeChange.emit(mode);
                if (value) {
                    this.changeValueFromInside(value);
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        CalendarHeaderComponent.prototype.onChooseDecade = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.changePanel('year', value);
                this.chooseDecade.emit(value);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        CalendarHeaderComponent.prototype.onChooseYear = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.changePanel(this.yearToMonth ? 'month' : 'date', value);
                this.yearToMonth = false; // Clear
                this.chooseYear.emit(value);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        CalendarHeaderComponent.prototype.onChooseMonth = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.changePanel('date', value);
                this.yearToMonth = false; // Clear
                this.chooseMonth.emit(value);
            };
        /**
         * @return {?}
         */
        CalendarHeaderComponent.prototype.changeToMonthPanel = /**
         * @return {?}
         */
            function () {
                this.changePanel('month');
                this.yearToMonth = true;
            };
        /**
         * @private
         * @return {?}
         */
        CalendarHeaderComponent.prototype.render = /**
         * @private
         * @return {?}
         */
            function () {
                if (this.value) {
                    this.yearMonthDaySelectors = this.createYearMonthDaySelectors();
                }
            };
        /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        CalendarHeaderComponent.prototype.gotoMonth = /**
         * @private
         * @param {?} amount
         * @return {?}
         */
            function (amount) {
                this.changeValueFromInside(this.value.addMonths(amount));
            };
        /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        CalendarHeaderComponent.prototype.gotoYear = /**
         * @private
         * @param {?} amount
         * @return {?}
         */
            function (amount) {
                this.changeValueFromInside(this.value.addYears(amount));
            };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        CalendarHeaderComponent.prototype.changeValueFromInside = /**
         * @private
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.value !== value) {
                    this.value = value;
                    this.valueChange.emit(this.value);
                    this.render();
                }
            };
        /**
         * @private
         * @param {?} localeFormat
         * @return {?}
         */
        CalendarHeaderComponent.prototype.formatDateTime = /**
         * @private
         * @param {?} localeFormat
         * @return {?}
         */
            function (localeFormat) {
                return this.dateHelper.format(this.value.nativeDate, localeFormat);
            };
        /**
         * @private
         * @return {?}
         */
        CalendarHeaderComponent.prototype.createYearMonthDaySelectors = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var year;
                /** @type {?} */
                var month;
                /** @type {?} */
                var day;
                // NOTE: Compat for DatePipe formatting rules
                /** @type {?} */
                var yearFormat = this.locale.yearFormat;
                if (this.dateHelper.relyOnDatePipe) {
                    yearFormat = (( /** @type {?} */(this.dateHelper))).transCompatFormat(yearFormat);
                }
                year = {
                    className: this.prefixCls + "-year-select",
                    title: this.locale.yearSelect,
                    onClick: ( /**
                     * @return {?}
                     */function () { return (_this.showTimePicker ? null : _this.changePanel('year')); }),
                    label: this.formatDateTime(yearFormat)
                };
                month = {
                    className: this.prefixCls + "-month-select",
                    title: this.locale.monthSelect,
                    onClick: ( /**
                     * @return {?}
                     */function () { return (_this.showTimePicker ? null : _this.changeToMonthPanel()); }),
                    label: this.formatDateTime(this.locale.monthFormat || 'MMM')
                };
                // NOTE: Compat for DatePipe formatting rules
                /** @type {?} */
                var dayFormat = this.locale.dayFormat;
                if (this.dateHelper.relyOnDatePipe) {
                    dayFormat = (( /** @type {?} */(this.dateHelper))).transCompatFormat(dayFormat);
                }
                if (this.showTimePicker) {
                    day = {
                        className: this.prefixCls + "-day-select",
                        label: this.formatDateTime(dayFormat)
                    };
                }
                /** @type {?} */
                var result;
                if (this.locale.monthBeforeYear) {
                    result = [month, ( /** @type {?} */(day)), year];
                }
                else {
                    result = [year, month, ( /** @type {?} */(day))];
                }
                return result.filter(( /**
                 * @param {?} selector
                 * @return {?}
                 */function (selector) { return !!selector; }));
            };
        CalendarHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line:component-selector
                        selector: 'calendar-header',
                        exportAs: 'calendarHeader',
                        template: "<div class=\"{{ prefixCls }}-header\">\r\n  <div style=\"position: relative;\">\r\n    <a *ngIf=\"enablePrev && !showTimePicker\"\r\n      class=\"{{ prefixCls }}-prev-year-btn\"\r\n      role=\"button\"\r\n      (click)=\"previousYear()\"\r\n      title=\"{{ locale.previousYear }}\"\r\n    ></a>\r\n    <a *ngIf=\"enablePrev && !showTimePicker\"\r\n      class=\"{{ prefixCls }}-prev-month-btn\"\r\n      role=\"button\"\r\n      (click)=\"previousMonth()\"\r\n      title=\"{{ locale.previousMonth }}\"\r\n    ></a>\r\n\r\n    <span class=\"{{ prefixCls }}-{{ locale.monthBeforeYear ? 'my-select' : 'ym-select' }}\">\r\n      <ng-container *ngFor=\"let selector of yearMonthDaySelectors\">\r\n        <a class=\"{{ selector.className }}\"\r\n          role=\"button\"\r\n          (click)=\"selector.onClick ? selector.onClick() : null\"\r\n          title=\"{{ selector.title || null }}\"\r\n        >\r\n          {{ selector.label }}\r\n        </a>\r\n      </ng-container>\r\n    </span>\r\n\r\n    <a *ngIf=\"enableNext && !showTimePicker\"\r\n      class=\"{{ prefixCls }}-next-month-btn\"\r\n      role=\"button\"\r\n      (click)=\"nextMonth()\"\r\n      title=\"{{ locale.nextMonth }}\"\r\n    ></a>\r\n    <a *ngIf=\"enableNext && !showTimePicker\"\r\n      class=\"{{ prefixCls }}-next-year-btn\"\r\n      role=\"button\"\r\n      (click)=\"nextYear()\"\r\n      title=\"{{ locale.nextYear }}\"\r\n    ></a>\r\n  </div>\r\n\r\n  <ng-container [ngSwitch]=\"panelMode\">\r\n    <ng-container *ngSwitchCase=\"'decade'\">\r\n      <decade-panel\r\n        [locale]=\"locale\"\r\n        [value]=\"value\"\r\n        (valueChange)=\"onChooseDecade($event)\"\r\n      ></decade-panel>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"'year'\">\r\n      <year-panel\r\n        [locale]=\"locale\"\r\n        [value]=\"value\"\r\n        [disabledDate]=\"disabledYear\"\r\n        (valueChange)=\"onChooseYear($event)\"\r\n        (decadePanelShow)=\"changePanel('decade')\"\r\n      ></year-panel>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"'month'\">\r\n      <month-panel\r\n        [locale]=\"locale\"\r\n        [value]=\"value\"\r\n        [disabledDate]=\"disabledMonth\"\r\n        (valueChange)=\"onChooseMonth($event)\"\r\n        (yearPanelShow)=\"changePanel('year')\"\r\n      ></month-panel>\r\n    </ng-container>\r\n  </ng-container>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        CalendarHeaderComponent.ctorParameters = function () {
            return [
                { type: i18n.DateHelperService }
            ];
        };
        CalendarHeaderComponent.propDecorators = {
            locale: [{ type: core.Input }],
            enablePrev: [{ type: core.Input }],
            enableNext: [{ type: core.Input }],
            disabledMonth: [{ type: core.Input }],
            disabledYear: [{ type: core.Input }],
            showTimePicker: [{ type: core.Input }],
            value: [{ type: core.Input }],
            valueChange: [{ type: core.Output }],
            panelMode: [{ type: core.Input }],
            panelModeChange: [{ type: core.Output }],
            chooseDecade: [{ type: core.Output }],
            chooseYear: [{ type: core.Output }],
            chooseMonth: [{ type: core.Output }]
        };
        return CalendarHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CalendarInputComponent = /** @class */ (function () {
        function CalendarInputComponent(dateHelper) {
            this.dateHelper = dateHelper;
            this.valueChange = new core.EventEmitter();
            this.prefixCls = 'ant-calendar';
            this.invalidInputClass = '';
        }
        /**
         * @return {?}
         */
        CalendarInputComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} event
         * @return {?}
         */
        CalendarInputComponent.prototype.onInputKeyup = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var date = this.checkValidInputDate(event);
                if (!date || (this.disabledDate && this.disabledDate(date.nativeDate))) {
                    return;
                }
                if (!date.isSame(this.value, 'second')) {
                    // Not same with original value
                    this.value = date;
                    this.valueChange.emit(this.value);
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        CalendarInputComponent.prototype.toReadableInput = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return value ? this.dateHelper.format(value.nativeDate, this.format) : '';
            };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        CalendarInputComponent.prototype.checkValidInputDate = /**
         * @private
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var input = (( /** @type {?} */(event.target))).value;
                /** @type {?} */
                var date = new CandyDate(input);
                this.invalidInputClass = '';
                if (date.isInvalid() || input !== this.toReadableInput(date)) {
                    // Should also match the input format exactly
                    this.invalidInputClass = this.prefixCls + "-input-invalid";
                    return null;
                }
                return date;
            };
        CalendarInputComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line:component-selector
                        selector: 'calendar-input',
                        exportAs: 'calendarInput',
                        template: "<div class=\"{{ prefixCls }}-input-wrap\">\r\n  <div class=\"{{ prefixCls }}-date-input-wrap\">\r\n    <input\r\n      class=\"{{ prefixCls }}-input {{ invalidInputClass }}\"\r\n      placeholder=\"{{ placeholder || locale.dateSelect }}\"\r\n      value=\"{{ toReadableInput(value) }}\"\r\n      (keyup)=\"onInputKeyup($event)\"\r\n    />\r\n  </div>\r\n  <a class=\"{{ prefixCls }}-clear-btn\" role=\"button\" title=\"{{ locale.clear }}\">\r\n    <!--<i nz-icon type=\"close\"></i>-->\r\n  </a>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        CalendarInputComponent.ctorParameters = function () {
            return [
                { type: i18n.DateHelperService }
            ];
        };
        CalendarInputComponent.propDecorators = {
            locale: [{ type: core.Input }],
            format: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            disabledDate: [{ type: core.Input }],
            value: [{ type: core.Input }],
            valueChange: [{ type: core.Output }]
        };
        return CalendarInputComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OkButtonComponent = /** @class */ (function () {
        function OkButtonComponent() {
            this.okDisabled = false;
            this.clickOk = new core.EventEmitter();
            this.prefixCls = 'ant-calendar';
        }
        OkButtonComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line:component-selector
                        selector: 'ok-button',
                        exportAs: 'okButton',
                        template: "<a\r\n    class=\"{{ prefixCls }}-ok-btn {{ okDisabled ? prefixCls + '-ok-btn-disabled' : '' }}\"\r\n    role=\"button\"\r\n    (click)=\"okDisabled ? null : clickOk.emit()\"\r\n  >\r\n    {{ locale.ok }}\r\n  </a>"
                    }] }
        ];
        OkButtonComponent.propDecorators = {
            locale: [{ type: core.Input }],
            okDisabled: [{ type: core.Input }],
            clickOk: [{ type: core.Output }]
        };
        return OkButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TimePickerButtonComponent = /** @class */ (function () {
        function TimePickerButtonComponent() {
            this.timePickerDisabled = false;
            this.showTimePicker = false;
            this.showTimePickerChange = new core.EventEmitter();
            this.prefixCls = 'ant-calendar';
        }
        /**
         * @return {?}
         */
        TimePickerButtonComponent.prototype.onClick = /**
         * @return {?}
         */
            function () {
                this.showTimePicker = !this.showTimePicker;
                this.showTimePickerChange.emit(this.showTimePicker);
            };
        TimePickerButtonComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line:component-selector
                        selector: 'time-picker-button',
                        exportAs: 'timePickerButton',
                        template: "<a\r\n  class=\"{{ prefixCls }}-time-picker-btn {{ timePickerDisabled ? prefixCls + '-time-picker-btn-disabled' : '' }}\"\r\n  role=\"button\"\r\n  (click)=\"timePickerDisabled ? null : onClick()\"\r\n>\r\n  {{ showTimePicker ? locale.dateSelect : locale.timeSelect }}\r\n</a>"
                    }] }
        ];
        TimePickerButtonComponent.propDecorators = {
            locale: [{ type: core.Input }],
            timePickerDisabled: [{ type: core.Input }],
            showTimePicker: [{ type: core.Input }],
            showTimePickerChange: [{ type: core.Output }]
        };
        return TimePickerButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TodayButtonComponent = /** @class */ (function () {
        function TodayButtonComponent(dateHelper) {
            this.dateHelper = dateHelper;
            this.hasTimePicker = false;
            this.clickToday = new core.EventEmitter();
            this.prefixCls = 'ant-calendar';
            this.isDisabled = false;
            this.now = new CandyDate();
        }
        /**
         * @return {?}
         */
        TodayButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        TodayButtonComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.disabledDate) {
                    this.isDisabled = this.disabledDate && this.disabledDate(this.now.nativeDate);
                }
                if (changes.locale) {
                    // NOTE: Compat for DatePipe formatting rules
                    /** @type {?} */
                    var dateFormat = this.locale.dateFormat;
                    if (this.dateHelper.relyOnDatePipe) {
                        dateFormat = (( /** @type {?} */(this.dateHelper))).transCompatFormat(dateFormat);
                    }
                    this.title = this.dateHelper.format(this.now.nativeDate, dateFormat);
                }
            };
        /**
         * @return {?}
         */
        TodayButtonComponent.prototype.onClickToday = /**
         * @return {?}
         */
            function () {
                this.clickToday.emit(this.now.clone()); // To prevent the "now" being modified from outside, we use clone
            };
        TodayButtonComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line:component-selector
                        selector: 'today-button',
                        exportAs: 'todayButton',
                        template: "<a\r\n  class=\"{{ prefixCls }}-today-btn {{ isDisabled ? prefixCls + '-today-btn-disabled' : '' }}\"\r\n  role=\"button\"\r\n  (click)=\"isDisabled ? null : onClickToday()\"\r\n  title=\"{{ title }}\"\r\n>\r\n  {{ hasTimePicker ? locale.now : locale.today }}\r\n</a>"
                    }] }
        ];
        /** @nocollapse */
        TodayButtonComponent.ctorParameters = function () {
            return [
                { type: i18n.DateHelperService }
            ];
        };
        TodayButtonComponent.propDecorators = {
            locale: [{ type: core.Input }],
            hasTimePicker: [{ type: core.Input }],
            disabledDate: [{ type: core.Input }],
            clickToday: [{ type: core.Output }]
        };
        return TodayButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DATE_ROW_NUM = 6;
    /** @type {?} */
    var DATE_COL_NUM = 7;
    var DateTableComponent = /** @class */ (function () {
        function DateTableComponent(i18n$$1, dateHelper) {
            this.i18n = i18n$$1;
            this.dateHelper = dateHelper;
            this.valueChange = new core.EventEmitter();
            // Customize date content while rendering
            this.dayHover = new core.EventEmitter(); // Emitted when hover on a day by mouse enter
            // Emitted when hover on a day by mouse enter
            this.prefixCls = 'ant-calendar';
            this.isTemplateRef = core$1.isTemplateRef;
            this.isNonEmptyString = core$1.isNonEmptyString;
        }
        /**
         * @return {?}
         */
        DateTableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        DateTableComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (this.isDateRealChange(changes.value) ||
                    this.isDateRealChange(changes.selectedValue) ||
                    this.isDateRealChange(changes.hoverValue)) {
                    this.render();
                }
            };
        /**
         * @private
         * @param {?} change
         * @return {?}
         */
        DateTableComponent.prototype.isDateRealChange = /**
         * @private
         * @param {?} change
         * @return {?}
         */
            function (change) {
                var _this = this;
                if (change) {
                    /** @type {?} */
                    var previousValue_1 = change.previousValue;
                    /** @type {?} */
                    var currentValue = change.currentValue;
                    if (Array.isArray(currentValue)) {
                        return (!Array.isArray(previousValue_1) ||
                            currentValue.length !== previousValue_1.length ||
                            currentValue.some(( /**
                             * @param {?} value
                             * @param {?} index
                             * @return {?}
                             */function (value, index) { return !_this.isSameDate(previousValue_1[index], value); })));
                    }
                    else {
                        return !this.isSameDate(( /** @type {?} */(previousValue_1)), currentValue);
                    }
                }
                return false;
            };
        /**
         * @private
         * @param {?} left
         * @param {?} right
         * @return {?}
         */
        DateTableComponent.prototype.isSameDate = /**
         * @private
         * @param {?} left
         * @param {?} right
         * @return {?}
         */
            function (left, right) {
                return (!left && !right) || (left && right && right.isSame(left, 'day'));
            };
        /**
         * @private
         * @return {?}
         */
        DateTableComponent.prototype.render = /**
         * @private
         * @return {?}
         */
            function () {
                if (this.value) {
                    this.headWeekDays = this.makeHeadWeekDays();
                    this.weekRows = this.makeWeekRows();
                }
            };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        DateTableComponent.prototype.changeValueFromInside = /**
         * @private
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.value !== value) {
                    this.valueChange.emit(value);
                }
            };
        /**
         * @private
         * @return {?}
         */
        DateTableComponent.prototype.makeHeadWeekDays = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var weekDays = [];
                /** @type {?} */
                var firstDayOfWeek = this.dateHelper.getFirstDayOfWeek();
                for (var colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
                    /** @type {?} */
                    var day = (firstDayOfWeek + colIndex) % DATE_COL_NUM;
                    /** @type {?} */
                    var tempDate = this.value.setDay(day);
                    weekDays[colIndex] = {
                        short: this.dateHelper.format(tempDate.nativeDate, this.dateHelper.relyOnDatePipe ? 'E' : 'ddd'),
                        // eg. Tue
                        veryShort: this.dateHelper.format(tempDate.nativeDate, this.getVeryShortWeekFormat()) // eg. Tu
                    };
                }
                return weekDays;
            };
        /**
         * @private
         * @return {?}
         */
        DateTableComponent.prototype.getVeryShortWeekFormat = /**
         * @private
         * @return {?}
         */
            function () {
                if (this.dateHelper.relyOnDatePipe) {
                    return this.i18n
                        .getLocaleId()
                        .toLowerCase()
                        .indexOf('zh') === 0
                        ? 'EEEEE'
                        : 'EEEEEE'; // Use extreme short for chinese
                }
                return 'dd';
            };
        /**
         * @private
         * @return {?}
         */
        DateTableComponent.prototype.makeWeekRows = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                var _a;
                /** @type {?} */
                var weekRows = [];
                /** @type {?} */
                var firstDayOfWeek = this.dateHelper.getFirstDayOfWeek();
                /** @type {?} */
                var firstDateOfMonth = this.value.setDate(1);
                /** @type {?} */
                var firstDateOffset = (firstDateOfMonth.getDay() + 7 - firstDayOfWeek) % 7;
                /** @type {?} */
                var firstDateToShow = firstDateOfMonth.addDays(0 - firstDateOffset);
                /** @type {?} */
                var increased = 0;
                for (var rowIndex = 0; rowIndex < DATE_ROW_NUM; rowIndex++) {
                    /** @type {?} */
                    var week = (weekRows[rowIndex] = {
                        isActive: false,
                        isCurrent: false,
                        dateCells: []
                    });
                    var _loop_1 = function (colIndex) {
                        var _a;
                        /** @type {?} */
                        var current = firstDateToShow.addDays(increased++);
                        /** @type {?} */
                        var isBeforeMonthYear = this_1.isBeforeMonthYear(current, this_1.value);
                        /** @type {?} */
                        var isAfterMonthYear = this_1.isAfterMonthYear(current, this_1.value);
                        /** @type {?} */
                        var cell = {
                            value: current,
                            isSelected: false,
                            isDisabled: false,
                            isToday: false,
                            title: this_1.getDateTitle(current),
                            customContent: core$1.valueFunctionProp(this_1.dateRender, current),
                            // Customized content
                            content: "" + current.getDate(),
                            onClick: ( /**
                             * @return {?}
                             */function () { return _this.changeValueFromInside(current); }),
                            onMouseEnter: ( /**
                             * @return {?}
                             */function () { return _this.dayHover.emit(cell.value); })
                        };
                        if (this_1.showWeek && !week.weekNum) {
                            week.weekNum = this_1.getWeekNum(current);
                        }
                        if (current.isToday()) {
                            cell.isToday = true;
                            week.isCurrent = true;
                        }
                        if (Array.isArray(this_1.selectedValue) && !isBeforeMonthYear && !isAfterMonthYear) {
                            // Range selections
                            /** @type {?} */
                            var rangeValue = this_1.hoverValue && this_1.hoverValue.length ? this_1.hoverValue : this_1.selectedValue;
                            /** @type {?} */
                            var start = rangeValue[0];
                            /** @type {?} */
                            var end = rangeValue[1];
                            if (start) {
                                if (current.isSame(start, 'day')) {
                                    cell.isSelectedStartDate = true;
                                    cell.isSelected = true;
                                    week.isActive = true;
                                }
                                if (end) {
                                    if (current.isSame(end, 'day')) {
                                        cell.isSelectedEndDate = true;
                                        cell.isSelected = true;
                                        week.isActive = true;
                                    }
                                    else if (current.isAfter(start, 'day') && current.isBefore(end, 'day')) {
                                        cell.isInRange = true;
                                    }
                                }
                            }
                        }
                        else if (current.isSame(this_1.value, 'day')) {
                            cell.isSelected = true;
                            week.isActive = true;
                        }
                        if (this_1.disabledDate && this_1.disabledDate(current.nativeDate)) {
                            cell.isDisabled = true;
                        }
                        cell.classMap = (_a = {},
                            _a[this_1.prefixCls + "-cell"] = true,
                            // [`${this.prefixCls}-selected-date`]: false,
                            _a[this_1.prefixCls + "-today"] = cell.isToday,
                            _a[this_1.prefixCls + "-last-month-cell"] = isBeforeMonthYear,
                            _a[this_1.prefixCls + "-next-month-btn-day"] = isAfterMonthYear,
                            _a[this_1.prefixCls + "-selected-day"] = cell.isSelected,
                            _a[this_1.prefixCls + "-disabled-cell"] = cell.isDisabled,
                            _a[this_1.prefixCls + "-selected-start-date"] = !!cell.isSelectedStartDate,
                            _a[this_1.prefixCls + "-selected-end-date"] = !!cell.isSelectedEndDate,
                            _a[this_1.prefixCls + "-in-range-cell"] = !!cell.isInRange,
                            _a);
                        week.dateCells.push(cell);
                    };
                    var this_1 = this;
                    for (var colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
                        _loop_1(colIndex);
                    }
                    week.classMap = (_a = {},
                        _a[this.prefixCls + "-current-week"] = week.isCurrent,
                        _a[this.prefixCls + "-active-week"] = week.isActive,
                        _a);
                }
                return weekRows;
            };
        /**
         * @private
         * @param {?} date
         * @return {?}
         */
        DateTableComponent.prototype.getDateTitle = /**
         * @private
         * @param {?} date
         * @return {?}
         */
            function (date) {
                // NOTE: Compat for DatePipe formatting rules
                /** @type {?} */
                var dateFormat = (this.locale && this.locale.dateFormat) || 'YYYY-MM-DD';
                if (this.dateHelper.relyOnDatePipe) {
                    dateFormat = (( /** @type {?} */(this.dateHelper))).transCompatFormat(dateFormat);
                }
                return this.dateHelper.format(date.nativeDate, dateFormat);
            };
        /**
         * @private
         * @param {?} date
         * @return {?}
         */
        DateTableComponent.prototype.getWeekNum = /**
         * @private
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return this.dateHelper.getISOWeek(date.nativeDate);
            };
        /**
         * @private
         * @param {?} current
         * @param {?} target
         * @return {?}
         */
        DateTableComponent.prototype.isBeforeMonthYear = /**
         * @private
         * @param {?} current
         * @param {?} target
         * @return {?}
         */
            function (current, target) {
                if (current.getYear() < target.getYear()) {
                    return true;
                }
                return current.getYear() === target.getYear() && current.getMonth() < target.getMonth();
            };
        /**
         * @private
         * @param {?} current
         * @param {?} target
         * @return {?}
         */
        DateTableComponent.prototype.isAfterMonthYear = /**
         * @private
         * @param {?} current
         * @param {?} target
         * @return {?}
         */
            function (current, target) {
                if (current.getYear() > target.getYear()) {
                    return true;
                }
                return current.getYear() === target.getYear() && current.getMonth() > target.getMonth();
            };
        DateTableComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line:component-selector
                        selector: 'date-table',
                        exportAs: 'dateTable',
                        template: "<table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\r\n  <thead>\r\n    <tr role=\"row\">\r\n      <th *ngIf=\"showWeek\" role=\"columnheader\" class=\"{{ prefixCls }}-column-header {{ prefixCls }}-week-number-header\">\r\n        <span class=\"{{ prefixCls }}-column-header-inner\">x</span>\r\n      </th>\r\n      <th *ngFor=\"let cell of headWeekDays\"\r\n        role=\"columnheader\"\r\n        title=\"{{ cell.short }}\"\r\n        class=\"{{ prefixCls }}-column-header\"\r\n      >\r\n        <span class=\"{{ prefixCls }}-column-header-inner\">{{ cell.veryShort }}</span>\r\n      </th>\r\n    </tr>\r\n  </thead>\r\n  <tbody class=\"{{ prefixCls }}-tbody\">\r\n    <tr *ngFor=\"let row of weekRows\" [ngClass]=\"row.classMap\" role=\"row\">\r\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-week-number-cell\">\r\n        {{ row.weekNum }}\r\n      </td>\r\n      <td\r\n        *ngFor=\"let cell of row.dateCells\"\r\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\r\n        (mouseenter)=\"cell.isDisabled ? null : cell.onMouseEnter()\"\r\n        title=\"{{ cell.title }}\"\r\n        [ngClass]=\"cell.classMap\"\r\n        role=\"gridcell\"\r\n      >\r\n\r\n        <ng-container [ngSwitch]=\"true\">\r\n          <ng-container *ngSwitchCase=\"isTemplateRef(cell.customContent)\">\r\n            <ng-container *ngTemplateOutlet=\"cell.customContent; context: { $implicit: cell.value }\"></ng-container>\r\n          </ng-container>\r\n          <ng-container *ngSwitchCase=\"isNonEmptyString(cell.customContent)\">\r\n            <span [innerHTML]=\"cell.customContent\"></span>\r\n          </ng-container>\r\n          <ng-container *ngSwitchDefault>\r\n            <div\r\n              class=\"{{ prefixCls }}-date\"\r\n              [attr.aria-selected]=\"cell.isSelected\"\r\n              [attr.aria-disabled]=\"cell.isDisabled\"\r\n            >\r\n              {{ cell.content }}\r\n            </div>\r\n          </ng-container>\r\n        </ng-container>\r\n\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"
                    }] }
        ];
        /** @nocollapse */
        DateTableComponent.ctorParameters = function () {
            return [
                { type: i18n.NzI18nService },
                { type: i18n.DateHelperService }
            ];
        };
        DateTableComponent.propDecorators = {
            locale: [{ type: core.Input }],
            selectedValue: [{ type: core.Input }],
            hoverValue: [{ type: core.Input }],
            value: [{ type: core.Input }],
            valueChange: [{ type: core.Output }],
            showWeek: [{ type: core.Input }],
            disabledDate: [{ type: core.Input }],
            dateRender: [{ type: core.Input }],
            dayHover: [{ type: core.Output }]
        };
        return DateTableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MAX_ROW = 4;
    /** @type {?} */
    var MAX_COL = 3;
    var DecadePanelComponent = /** @class */ (function () {
        function DecadePanelComponent() {
            this.valueChange = new core.EventEmitter();
            this.prefixCls = 'ant-calendar-decade-panel';
        }
        Object.defineProperty(DecadePanelComponent.prototype, "startYear", {
            get: /**
             * @return {?}
             */ function () {
                return parseInt("" + this.value.getYear() / 100, 10) * 100;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DecadePanelComponent.prototype, "endYear", {
            get: /**
             * @return {?}
             */ function () {
                return this.startYear + 99;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        DecadePanelComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.value) {
                    this.render();
                }
            };
        /**
         * @return {?}
         */
        DecadePanelComponent.prototype.previousCentury = /**
         * @return {?}
         */
            function () {
                this.gotoYear(-100);
            };
        /**
         * @return {?}
         */
        DecadePanelComponent.prototype.nextCentury = /**
         * @return {?}
         */
            function () {
                this.gotoYear(100);
            };
        /**
         * @param {?} _index
         * @param {?} decadeData
         * @return {?}
         */
        DecadePanelComponent.prototype.trackPanelDecade = /**
         * @param {?} _index
         * @param {?} decadeData
         * @return {?}
         */
            function (_index, decadeData) {
                return decadeData.content;
            };
        /**
         * @private
         * @return {?}
         */
        DecadePanelComponent.prototype.render = /**
         * @private
         * @return {?}
         */
            function () {
                if (this.value) {
                    this.panelDecades = this.makePanelDecades();
                }
            };
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        DecadePanelComponent.prototype.gotoYear =
            // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
            /**
             * @private
             * @param {?} amount
             * @return {?}
             */
            function (amount) {
                this.value = this.value.addYears(amount);
                // this.valueChange.emit(this.value); // Do not try to trigger final value change
                this.render();
            };
        /**
         * @private
         * @param {?} startYear
         * @return {?}
         */
        DecadePanelComponent.prototype.chooseDecade = /**
         * @private
         * @param {?} startYear
         * @return {?}
         */
            function (startYear) {
                this.value = this.value.setYear(startYear);
                this.valueChange.emit(this.value);
            };
        /**
         * @private
         * @return {?}
         */
        DecadePanelComponent.prototype.makePanelDecades = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var decades = [];
                /** @type {?} */
                var currentYear = this.value.getYear();
                /** @type {?} */
                var startYear = this.startYear;
                /** @type {?} */
                var endYear = this.endYear;
                /** @type {?} */
                var previousYear = startYear - 10;
                /** @type {?} */
                var index = 0;
                for (var rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
                    decades[rowIndex] = [];
                    var _loop_1 = function (colIndex) {
                        var _a;
                        /** @type {?} */
                        var start = previousYear + index * 10;
                        /** @type {?} */
                        var end = previousYear + index * 10 + 9;
                        /** @type {?} */
                        var content = start + "-" + end;
                        /** @type {?} */
                        var cell = (decades[rowIndex][colIndex] = {
                            content: content,
                            title: content,
                            isCurrent: currentYear >= start && currentYear <= end,
                            isLowerThanStart: end < startYear,
                            isBiggerThanEnd: start > endYear,
                            classMap: null,
                            onClick: null
                        });
                        cell.classMap = (_a = {},
                            _a[this_1.prefixCls + "-cell"] = true,
                            _a[this_1.prefixCls + "-selected-cell"] = cell.isCurrent,
                            _a[this_1.prefixCls + "-last-century-cell"] = cell.isLowerThanStart,
                            _a[this_1.prefixCls + "-next-century-cell"] = cell.isBiggerThanEnd,
                            _a);
                        if (cell.isLowerThanStart) {
                            cell.onClick = ( /**
                             * @return {?}
                             */function () { return _this.previousCentury(); });
                        }
                        else if (cell.isBiggerThanEnd) {
                            cell.onClick = ( /**
                             * @return {?}
                             */function () { return _this.nextCentury(); });
                        }
                        else {
                            cell.onClick = ( /**
                             * @return {?}
                             */function () { return _this.chooseDecade(start); });
                        }
                        index++;
                    };
                    var this_1 = this;
                    for (var colIndex = 0; colIndex < MAX_COL; colIndex++) {
                        _loop_1(colIndex);
                    }
                }
                return decades;
            };
        DecadePanelComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line:component-selector
                        selector: 'decade-panel',
                        exportAs: 'decadePanel',
                        template: "<div class=\"{{ prefixCls }}\">\r\n  <div class=\"{{ prefixCls }}-header\">\r\n    <a\r\n      class=\"{{ prefixCls }}-prev-century-btn\"\r\n      role=\"button\"\r\n      (click)=\"previousCentury()\"\r\n      title=\"{{ locale.previousCentury }}\"\r\n    ></a>\r\n\r\n    <div class=\"{{ prefixCls }}-century\">\r\n      {{ startYear }}-{{ endYear }}\r\n    </div>\r\n    <a\r\n      class=\"{{ prefixCls }}-next-century-btn\"\r\n      role=\"button\"\r\n      (click)=\"nextCentury()\"\r\n      title=\"{{ locale.nextCentury }}\"\r\n    ></a>\r\n  </div>\r\n  <div class=\"{{ prefixCls }}-body\">\r\n    <table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\r\n      <tbody class=\"{{ prefixCls }}-tbody\">\r\n        <tr *ngFor=\"let row of panelDecades\" role=\"row\">\r\n          <td *ngFor=\"let cell of row; trackBy: trackPanelDecade\"\r\n            role=\"gridcell\"\r\n            title=\"{{ cell.title }}\"\r\n            (click)=\"cell.onClick()\"\r\n            [ngClass]=\"cell.classMap\"\r\n          >\r\n            <a class=\"{{ prefixCls }}-decade\">{{ cell.content }}</a>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        DecadePanelComponent.ctorParameters = function () { return []; };
        DecadePanelComponent.propDecorators = {
            locale: [{ type: core.Input }],
            value: [{ type: core.Input }],
            valueChange: [{ type: core.Output }]
        };
        return DecadePanelComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MonthPanelComponent = /** @class */ (function () {
        function MonthPanelComponent() {
            this.valueChange = new core.EventEmitter();
            this.yearPanelShow = new core.EventEmitter();
            this.prefixCls = 'ant-calendar-month-panel';
        }
        /**
         * @return {?}
         */
        MonthPanelComponent.prototype.previousYear = /**
         * @return {?}
         */
            function () {
                this.gotoYear(-1);
            };
        /**
         * @return {?}
         */
        MonthPanelComponent.prototype.nextYear = /**
         * @return {?}
         */
            function () {
                this.gotoYear(1);
            };
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        MonthPanelComponent.prototype.gotoYear =
            // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
            /**
             * @private
             * @param {?} amount
             * @return {?}
             */
            function (amount) {
                this.value = this.value.addYears(amount);
                // this.valueChange.emit(this.value); // Do not try to trigger final value change
            };
        MonthPanelComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        selector: 'month-panel',
                        // tslint:disable-line:component-selector
                        exportAs: 'monthPanel',
                        template: "<div class=\"{{ prefixCls }}\">\r\n  <div>\r\n    <div class=\"{{ prefixCls }}-header\">\r\n      <a\r\n        class=\"{{ prefixCls }}-prev-year-btn\"\r\n        role=\"button\"\r\n        (click)=\"previousYear()\"\r\n        title=\"{{ locale.previousYear }}\"\r\n      ></a>\r\n\r\n      <a\r\n        class=\"{{ prefixCls }}-year-select\"\r\n        role=\"button\"\r\n        (click)=\"yearPanelShow.emit()\"\r\n        title=\"{{ locale.yearSelect }}\"\r\n      >\r\n        <span class=\"{{ prefixCls }}-year-select-content\">{{ value.getYear() }}</span>\r\n        <span class=\"{{ prefixCls }}-year-select-arrow\">x</span>\r\n      </a>\r\n\r\n      <a\r\n        class=\"{{ prefixCls }}-next-year-btn\"\r\n        role=\"button\"\r\n        (click)=\"nextYear()\"\r\n        title=\"{{ locale.nextYear }}\"\r\n      ></a>\r\n    </div>\r\n    <div class=\"{{ prefixCls }}-body\">\r\n      <month-table [disabledDate]=\"disabledDate\" [value]=\"value\" (valueChange)=\"valueChange.emit($event)\"></month-table>\r\n    </div>\r\n  </div>\r\n</div>"
                    }] }
        ];
        MonthPanelComponent.propDecorators = {
            locale: [{ type: core.Input }],
            value: [{ type: core.Input }],
            disabledDate: [{ type: core.Input }],
            valueChange: [{ type: core.Output }],
            yearPanelShow: [{ type: core.Output }]
        };
        return MonthPanelComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MAX_ROW$1 = 4;
    /** @type {?} */
    var MAX_COL$1 = 3;
    var MonthTableComponent = /** @class */ (function () {
        function MonthTableComponent(dateHelper) {
            this.dateHelper = dateHelper;
            this.valueChange = new core.EventEmitter();
            this.prefixCls = 'ant-calendar-month-panel';
        }
        /**
         * @return {?}
         */
        MonthTableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        MonthTableComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.value || changes.disabledDate) {
                    this.render();
                }
            };
        /**
         * @param {?} _index
         * @param {?} monthData
         * @return {?}
         */
        MonthTableComponent.prototype.trackPanelMonth = /**
         * @param {?} _index
         * @param {?} monthData
         * @return {?}
         */
            function (_index, monthData) {
                return monthData.month;
            };
        /**
         * @private
         * @return {?}
         */
        MonthTableComponent.prototype.render = /**
         * @private
         * @return {?}
         */
            function () {
                if (this.value) {
                    this.panelMonths = this.makePanelMonths();
                }
            };
        /**
         * @private
         * @return {?}
         */
        MonthTableComponent.prototype.makePanelMonths = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var months = [];
                /** @type {?} */
                var currentMonth = this.value.getMonth();
                /** @type {?} */
                var today = new CandyDate();
                /** @type {?} */
                var monthValue = 0;
                for (var rowIndex = 0; rowIndex < MAX_ROW$1; rowIndex++) {
                    months[rowIndex] = [];
                    var _loop_1 = function (colIndex) {
                        var _a;
                        /** @type {?} */
                        var month = this_1.value.setMonth(monthValue);
                        /** @type {?} */
                        var disabled = this_1.disabledDate ? this_1.disabledDate(this_1.value.setMonth(monthValue).nativeDate) : false;
                        /** @type {?} */
                        var content = this_1.dateHelper.format(month.nativeDate, 'MMM');
                        /** @type {?} */
                        var cell = (months[rowIndex][colIndex] = {
                            disabled: disabled,
                            content: content,
                            month: monthValue,
                            title: content,
                            classMap: null,
                            onClick: ( /**
                             * @return {?}
                             */function () { return _this.chooseMonth(cell.month); })
                        });
                        cell.classMap = (_a = {},
                            _a[this_1.prefixCls + "-cell"] = true,
                            _a[this_1.prefixCls + "-cell-disabled"] = disabled,
                            _a[this_1.prefixCls + "-selected-cell"] = cell.month === currentMonth,
                            _a[this_1.prefixCls + "-current-cell"] = today.getYear() === this_1.value.getYear() && cell.month === today.getMonth(),
                            _a);
                        monthValue++;
                    };
                    var this_1 = this;
                    for (var colIndex = 0; colIndex < MAX_COL$1; colIndex++) {
                        _loop_1(colIndex);
                    }
                }
                return months;
            };
        /**
         * @private
         * @param {?} month
         * @return {?}
         */
        MonthTableComponent.prototype.chooseMonth = /**
         * @private
         * @param {?} month
         * @return {?}
         */
            function (month) {
                this.value = this.value.setMonth(month);
                this.valueChange.emit(this.value);
                this.render();
            };
        MonthTableComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line:component-selector
                        selector: 'month-table',
                        exportAs: 'monthTable',
                        template: "<table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\r\n  <tbody class=\"{{ prefixCls }}-tbody\">\r\n    <tr *ngFor=\"let row of panelMonths\" role=\"row\">\r\n      <td *ngFor=\"let monthCell of row; trackBy: trackPanelMonth\"\r\n        role=\"gridcell\"\r\n        title=\"{{ monthCell.title }}\"\r\n        (click)=\"monthCell.disabled ? null : monthCell.onClick()\"\r\n        [ngClass]=\"monthCell.classMap\"\r\n      >\r\n        <a class=\"{{ prefixCls }}-month\">{{ monthCell.content }}</a>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"
                    }] }
        ];
        /** @nocollapse */
        MonthTableComponent.ctorParameters = function () {
            return [
                { type: i18n.DateHelperService }
            ];
        };
        MonthTableComponent.propDecorators = {
            value: [{ type: core.Input }],
            valueChange: [{ type: core.Output }],
            disabledDate: [{ type: core.Input }]
        };
        return MonthTableComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
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
    /** @type {?} */
    var defaultDisabledTime = {
        nzDisabledHours: /**
         * @return {?}
         */ function () {
            return [];
        },
        nzDisabledMinutes: /**
         * @return {?}
         */ function () {
            return [];
        },
        nzDisabledSeconds: /**
         * @return {?}
         */ function () {
            return [];
        }
    };
    /**
     * @param {?} value
     * @param {?} disabledTime
     * @return {?}
     */
    function getTimeConfig(value, disabledTime) {
        /** @type {?} */
        var disabledTimeConfig = disabledTime ? disabledTime(value && value.nativeDate) : (( /** @type {?} */({})));
        disabledTimeConfig = __assign({}, defaultDisabledTime, disabledTimeConfig);
        return disabledTimeConfig;
    }
    /**
     * @param {?} value
     * @param {?} disabledTimeConfig
     * @return {?}
     */
    function isTimeValidByConfig(value, disabledTimeConfig) {
        /** @type {?} */
        var invalidTime = false;
        if (value) {
            /** @type {?} */
            var hour = value.getHours();
            /** @type {?} */
            var minutes = value.getMinutes();
            /** @type {?} */
            var seconds = value.getSeconds();
            /** @type {?} */
            var disabledHours = disabledTimeConfig.nzDisabledHours();
            if (disabledHours.indexOf(hour) === -1) {
                /** @type {?} */
                var disabledMinutes = disabledTimeConfig.nzDisabledMinutes(hour);
                if (disabledMinutes.indexOf(minutes) === -1) {
                    /** @type {?} */
                    var disabledSeconds = disabledTimeConfig.nzDisabledSeconds(hour, minutes);
                    invalidTime = disabledSeconds.indexOf(seconds) !== -1;
                }
                else {
                    invalidTime = true;
                }
            }
            else {
                invalidTime = true;
            }
        }
        return !invalidTime;
    }
    /**
     * @param {?} value
     * @param {?} disabledTime
     * @return {?}
     */
    function isTimeValid(value, disabledTime) {
        /** @type {?} */
        var disabledTimeConfig = getTimeConfig(value, disabledTime);
        return isTimeValidByConfig(value, disabledTimeConfig);
    }
    /**
     * @param {?} value
     * @param {?=} disabledDate
     * @param {?=} disabledTime
     * @return {?}
     */
    function isAllowedDate(value, disabledDate, disabledTime) {
        if (disabledDate) {
            if (disabledDate(value.nativeDate)) {
                return false;
            }
        }
        if (disabledTime) {
            if (!isTimeValid(value, disabledTime)) {
                return false;
            }
        }
        return true;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DateRangePopupComponent = /** @class */ (function () {
        function DateRangePopupComponent() {
            var _this = this;
            this.panelModeChange = new core.EventEmitter();
            this.calendarChange = new core.EventEmitter();
            this.valueChange = new core.EventEmitter();
            this.resultOk = new core.EventEmitter(); // Emitted when done with date selecting
            // Emitted when done with date selecting
            this.closePicker = new core.EventEmitter(); // Notify outside to close the picker panel
            // Notify outside to close the picker panel
            this.prefixCls = 'ant-calendar';
            this.showTimePicker = false;
            this.partTypeMap = { left: 0, right: 1 };
            this.disabledStartTime = ( /**
             * @param {?} value
             * @return {?}
             */function (value) {
                return _this.disabledTime && _this.disabledTime(value, 'start');
            });
            this.disabledEndTime = ( /**
             * @param {?} value
             * @return {?}
             */function (value) {
                return _this.disabledTime && _this.disabledTime(value, 'end');
            });
        }
        Object.defineProperty(DateRangePopupComponent.prototype, "hasTimePicker", {
            get: 
            // Range ONLY
            /**
             * @return {?}
             */
            function () {
                return !!this.showTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateRangePopupComponent.prototype, "hasFooter", {
            get: /**
             * @return {?}
             */ function () {
                return this.showToday || this.hasTimePicker || !!this.extraFooter || !!this.ranges;
            },
            enumerable: true,
            configurable: true
        });
        // tslint:disable-line:no-any
        /**
         * @return {?}
         */
        DateRangePopupComponent.prototype.ngOnInit =
            // tslint:disable-line:no-any
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                // Initialization for range properties to prevent errors while later assignment
                if (this.isRange) {
                    ['placeholder', 'panelMode', 'selectedValue', 'hoverValue'].forEach(( /**
                     * @param {?} prop
                     * @return {?}
                     */function (prop) { return _this.initialArray(prop); }));
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        DateRangePopupComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (this.isRange) {
                    if (changes.value) {
                        // Re-initialize all related values
                        this.clearHoverValue();
                        this.selectedValue = ( /** @type {?} */(this.value));
                        this.valueForRangeShow = this.normalizeRangeValue(( /** @type {?} */(this.value)));
                    }
                }
                // Parse showTime options
                if (changes.showTime || changes.disabledTime) {
                    if (this.showTime) {
                        this.buildTimeOptions();
                    }
                }
                // Show time picker when assigned panel mode as "time"
                if (changes.panelMode && this.hasTimePicker) {
                    this.showTimePicker = this.panelMode === 'time';
                }
            };
        /**
         * @param {?} show
         * @return {?}
         */
        DateRangePopupComponent.prototype.onShowTimePickerChange = /**
         * @param {?} show
         * @return {?}
         */
            function (show) {
                // this.panelMode = show ? 'time' : 'date';
                // this.panelModeChange.emit(this.panelMode);
                this.panelModeChange.emit(show ? 'time' : 'date');
            };
        /**
         * @param {?} value
         * @return {?}
         */
        DateRangePopupComponent.prototype.onClickToday = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                // if (this.isRange) { // Show today is not support by range
                //   throw new Error('"nzShowToday" is not support for "RangePicker"!');
                // } else {
                if (!this.isRange) {
                    this.value = null; // Clear current value to not sync time by next step
                    this.changeValue(value);
                }
                this.closePickerPanel();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        DateRangePopupComponent.prototype.onDayHover = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.isRange && this.selectedValue[0] && !this.selectedValue[1]) {
                    // When right value is selected, don't do hover
                    /** @type {?} */
                    var base = this.selectedValue[0];
                    if (base.isBefore(value, 'day')) {
                        this.hoverValue = [base, value];
                    }
                    else {
                        this.hoverValue = [value, base];
                    }
                }
            };
        /**
         * @param {?} mode
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.onPanelModeChange = /**
         * @param {?} mode
         * @param {?=} partType
         * @return {?}
         */
            function (mode, partType) {
                if (this.isRange) {
                    (( /** @type {?} */(this.panelMode)))[this.getPartTypeIndex(partType)] = mode;
                }
                else {
                    this.panelMode = mode;
                }
                this.panelModeChange.emit(this.panelMode);
            };
        /**
         * @param {?} value
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.onHeaderChange = /**
         * @param {?} value
         * @param {?=} partType
         * @return {?}
         */
            function (value, partType) {
                if (this.isRange) {
                    this.valueForRangeShow[this.getPartTypeIndex(partType)] = value;
                    this.valueForRangeShow = this.normalizeRangeValue(this.valueForRangeShow); // Should always take care of start/end
                }
            };
        /**
         * @param {?} value
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.onSelectTime = /**
         * @param {?} value
         * @param {?=} partType
         * @return {?}
         */
            function (value, partType) {
                if (this.isRange) {
                    /** @type {?} */
                    var newValue = this.cloneRangeDate(( /** @type {?} */(this.value)));
                    /** @type {?} */
                    var index = this.getPartTypeIndex(partType);
                    newValue[index] = ( /** @type {?} */(this.overrideHms(value, newValue[index])));
                    this.setValue(newValue);
                }
                else {
                    this.setValue(( /** @type {?} */(this.overrideHms(value, (( /** @type {?} */(this.value))) || new CandyDate())))); // If not select a date currently, use today
                }
            };
        /**
         * @param {?} value
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.changeValue = /**
         * @param {?} value
         * @param {?=} partType
         * @return {?}
         */
            function (value, partType) {
                if (this.isRange) {
                    /** @type {?} */
                    var index = this.getPartTypeIndex(partType);
                    this.selectedValue[index] = value;
                    if (this.isValidRange(this.selectedValue)) {
                        this.valueForRangeShow = this.normalizeRangeValue(this.selectedValue);
                        this.setValue(this.cloneRangeDate(this.selectedValue));
                    }
                }
                else {
                    this.setValue(value);
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        DateRangePopupComponent.prototype.changeValueFromSelect = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.isRange) {
                    var _a = __read(( /** @type {?} */(this.selectedValue)), 2), left = _a[0], right = _a[1];
                    if ((!left && !right) || (left && right)) {
                        // If totally full or empty, clean up && re-assign left first
                        this.hoverValue = this.selectedValue = [value];
                        this.calendarChange.emit([value.clone()]);
                    }
                    else if (left && !right) {
                        // If one of them is empty, assign the other one and sort, then set the final values
                        this.clearHoverValue(); // Clean up
                        this.setRangeValue('selectedValue', 'right', value);
                        this.sortRangeValue('selectedValue'); // Sort
                        this.valueForRangeShow = this.normalizeRangeValue(this.selectedValue);
                        this.setValue(this.cloneRangeDate(this.selectedValue));
                        this.calendarChange.emit(this.cloneRangeDate(this.selectedValue));
                    }
                }
                else {
                    this.setValue(value);
                }
                // this.selectDate.emit(value);
            };
        /**
         * @param {?} direction
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.enablePrevNext = /**
         * @param {?} direction
         * @param {?=} partType
         * @return {?}
         */
            function (direction, partType) {
                if (this.isRange) {
                    var _a = __read(this.valueForRangeShow, 2), start = _a[0], end = _a[1];
                    /** @type {?} */
                    var showMiddle = !start.addMonths(1).isSame(end, 'month');
                    if ((partType === 'left' && direction === 'next') || (partType === 'right' && direction === 'prev')) {
                        return showMiddle;
                    }
                    return true;
                }
                else {
                    return true;
                }
            };
        /**
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.getPanelMode = /**
         * @param {?=} partType
         * @return {?}
         */
            function (partType) {
                if (this.isRange) {
                    return ( /** @type {?} */(this.panelMode[this.getPartTypeIndex(partType)]));
                }
                else {
                    return ( /** @type {?} */(this.panelMode));
                }
            };
        // Get single value or part value of a range
        // Get single value or part value of a range
        /**
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.getValue =
            // Get single value or part value of a range
            /**
             * @param {?=} partType
             * @return {?}
             */
            function (partType) {
                if (this.isRange) {
                    return (( /** @type {?} */(this.value)))[this.getPartTypeIndex(partType)];
                }
                else {
                    return ( /** @type {?} */(this.value));
                }
            };
        /**
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.getValueBySelector = /**
         * @param {?=} partType
         * @return {?}
         */
            function (partType) {
                if (this.isRange) {
                    /** @type {?} */
                    var valueShow = this.showTimePicker ? this.value : this.valueForRangeShow;
                    return (( /** @type {?} */(valueShow)))[this.getPartTypeIndex(partType)];
                }
                else {
                    return ( /** @type {?} */(this.value));
                }
            };
        /**
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.getPartTypeIndex = /**
         * @param {?=} partType
         * @return {?}
         */
            function (partType) {
                return this.partTypeMap[( /** @type {?} */(partType))];
            };
        /**
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.getPlaceholder = /**
         * @param {?=} partType
         * @return {?}
         */
            function (partType) {
                return this.isRange ? this.placeholder[this.getPartTypeIndex(partType)] : (( /** @type {?} */(this.placeholder)));
            };
        /**
         * @return {?}
         */
        DateRangePopupComponent.prototype.hasSelectedValue = /**
         * @return {?}
         */
            function () {
                return this.selectedValue && !!this.selectedValue[1] && !!this.selectedValue[0];
            };
        /**
         * @return {?}
         */
        DateRangePopupComponent.prototype.isAllowedSelectedValue = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var selectedValue = this.selectedValue;
                if (selectedValue && selectedValue[0] && selectedValue[1]) {
                    return (isAllowedDate(selectedValue[0], this.disabledDate, this.disabledStartTime) &&
                        isAllowedDate(selectedValue[1], this.disabledDate, this.disabledEndTime));
                }
                return false;
            };
        /**
         * @return {?}
         */
        DateRangePopupComponent.prototype.timePickerDisabled = /**
         * @return {?}
         */
            function () {
                if (!this.hasTimePicker) {
                    return true;
                }
                if (this.isRange) {
                    return !this.hasSelectedValue() || !!this.hoverValue.length;
                }
                else {
                    return false;
                }
            };
        /**
         * @return {?}
         */
        DateRangePopupComponent.prototype.okDisabled = /**
         * @return {?}
         */
            function () {
                if (!this.hasTimePicker) {
                    return true;
                }
                if (this.isRange) {
                    return !this.isAllowedSelectedValue() || !this.hasSelectedValue() || !!this.hoverValue.length;
                }
                else {
                    return this.value ? !isAllowedDate(( /** @type {?} */(this.value)), this.disabledDate, this.disabledTime) : false;
                }
            };
        /**
         * @param {?=} partType
         * @return {?}
         */
        DateRangePopupComponent.prototype.getTimeOptions = /**
         * @param {?=} partType
         * @return {?}
         */
            function (partType) {
                if (this.showTime && this.timeOptions) {
                    return this.timeOptions instanceof Array ? this.timeOptions[this.getPartTypeIndex(partType)] : this.timeOptions;
                }
                return null;
            };
        /**
         * @param {?} val
         * @return {?}
         */
        DateRangePopupComponent.prototype.onClickPresetRange = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                /** @type {?} */
                var value = typeof val === 'function' ? val() : val;
                this.setValue([new CandyDate(value[0]), new CandyDate(value[1])]);
                this.resultOk.emit();
            };
        /**
         * @return {?}
         */
        DateRangePopupComponent.prototype.onPresetRangeMouseLeave = /**
         * @return {?}
         */
            function () {
                this.clearHoverValue();
            };
        /**
         * @param {?} val
         * @return {?}
         */
        DateRangePopupComponent.prototype.onHoverPresetRange = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                if (typeof val !== 'function') {
                    this.hoverValue = [new CandyDate(val[0]), new CandyDate(val[1])];
                }
            };
        /**
         * @param {?} obj
         * @return {?}
         */
        DateRangePopupComponent.prototype.getObjectKeys = /**
         * @param {?} obj
         * @return {?}
         */
            function (obj) {
                return obj ? Object.keys(obj) : [];
            };
        /**
         * @private
         * @return {?}
         */
        DateRangePopupComponent.prototype.closePickerPanel = /**
         * @private
         * @return {?}
         */
            function () {
                this.closePicker.emit();
            };
        /**
         * @private
         * @return {?}
         */
        DateRangePopupComponent.prototype.clearHoverValue = /**
         * @private
         * @return {?}
         */
            function () {
                this.hoverValue = [];
            };
        /**
         * @private
         * @return {?}
         */
        DateRangePopupComponent.prototype.buildTimeOptions = /**
         * @private
         * @return {?}
         */
            function () {
                if (this.showTime) {
                    /** @type {?} */
                    var showTime = typeof this.showTime === 'object' ? this.showTime : {};
                    if (this.isRange) {
                        /** @type {?} */
                        var value = ( /** @type {?} */(this.value));
                        this.timeOptions = [
                            this.overrideTimeOptions(showTime, value[0], 'start'),
                            this.overrideTimeOptions(showTime, value[1], 'end')
                        ];
                    }
                    else {
                        this.timeOptions = this.overrideTimeOptions(showTime, ( /** @type {?} */(this.value)));
                    }
                }
                else {
                    this.timeOptions = null;
                }
            };
        /**
         * @private
         * @param {?} origin
         * @param {?} value
         * @param {?=} partial
         * @return {?}
         */
        DateRangePopupComponent.prototype.overrideTimeOptions = /**
         * @private
         * @param {?} origin
         * @param {?} value
         * @param {?=} partial
         * @return {?}
         */
            function (origin, value, partial) {
                /** @type {?} */
                var disabledTimeFn;
                if (partial) {
                    disabledTimeFn = partial === 'start' ? this.disabledStartTime : this.disabledEndTime;
                }
                else {
                    disabledTimeFn = this.disabledTime;
                }
                return __assign({}, origin, getTimeConfig(value, disabledTimeFn));
            };
        // Set value and trigger change event
        // Set value and trigger change event
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        DateRangePopupComponent.prototype.setValue =
            // Set value and trigger change event
            /**
             * @private
             * @param {?} value
             * @return {?}
             */
            function (value) {
                /** @type {?} */
                var newValue = value;
                // TODO: Sync original time (NOTE: this should take more care of beacuse it may depend on many change sources)
                // if (this.isRange) {
                //   // TODO: Sync time
                // } else {
                //   if (this.value) { // Sync time from the original one if it's available
                //     newValue = this.overrideHms(this.value as CandyDate, newValue as CandyDate);
                //   }
                // }
                this.value = newValue;
                this.valueChange.emit(this.value);
                this.buildTimeOptions();
            };
        /**
         * @private
         * @param {?} from
         * @param {?} to
         * @return {?}
         */
        DateRangePopupComponent.prototype.overrideHms = /**
         * @private
         * @param {?} from
         * @param {?} to
         * @return {?}
         */
            function (from, to) {
                if (!from || !to) {
                    return null;
                }
                return to.setHms(from.getHours(), from.getMinutes(), from.getSeconds());
            };
        // Check if it's a valid range value
        // Check if it's a valid range value
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        DateRangePopupComponent.prototype.isValidRange =
            // Check if it's a valid range value
            /**
             * @private
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (Array.isArray(value)) {
                    var _a = __read(value, 2), start = _a[0], end = _a[1];
                    /** @type {?} */
                    var grain = this.hasTimePicker ? 'second' : 'day';
                    return start && end && (start.isBefore(end, grain) || start.isSame(end, grain));
                }
                return false;
            };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        DateRangePopupComponent.prototype.normalizeRangeValue = /**
         * @private
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var _a = __read(value, 2), start = _a[0], end = _a[1];
                /** @type {?} */
                var newStart = start || new CandyDate();
                /** @type {?} */
                var newEnd = end && end.isSame(newStart, 'month') ? end.addMonths(1) : end || newStart.addMonths(1);
                return [newStart, newEnd];
            };
        // private isEmptyRangeValue(value: CandyDate[]): boolean {
        //   return !value || !Array.isArray(value) || value.every((val) => !val);
        // }
        // Sort a range value (accurate to second)
        // private isEmptyRangeValue(value: CandyDate[]): boolean {
        //   return !value || !Array.isArray(value) || value.every((val) => !val);
        // }
        // Sort a range value (accurate to second)
        /**
         * @private
         * @param {?} key
         * @return {?}
         */
        DateRangePopupComponent.prototype.sortRangeValue =
            // private isEmptyRangeValue(value: CandyDate[]): boolean {
            //   return !value || !Array.isArray(value) || value.every((val) => !val);
            // }
            // Sort a range value (accurate to second)
            /**
             * @private
             * @param {?} key
             * @return {?}
             */
            function (key) {
                if (Array.isArray(this[key])) {
                    var _a = __read(this[key], 2), start = _a[0], end = _a[1];
                    if (start && end && start.isAfter(end, 'day')) {
                        this[key] = [end, start];
                    }
                }
            };
        // Renew and set a range value to trigger sub-component's change detection
        // Renew and set a range value to trigger sub-component's change detection
        /**
         * @private
         * @param {?} key
         * @param {?} partType
         * @param {?} value
         * @return {?}
         */
        DateRangePopupComponent.prototype.setRangeValue =
            // Renew and set a range value to trigger sub-component's change detection
            /**
             * @private
             * @param {?} key
             * @param {?} partType
             * @param {?} value
             * @return {?}
             */
            function (key, partType, value) {
                /** @type {?} */
                var ref = (this[key] = this.cloneRangeDate(( /** @type {?} */(this[key]))));
                ref[this.getPartTypeIndex(partType)] = value;
            };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        DateRangePopupComponent.prototype.cloneRangeDate = /**
         * @private
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return ( /** @type {?} */([value[0] && value[0].clone(), value[1] && value[1].clone()]));
            };
        /**
         * @private
         * @param {?} key
         * @return {?}
         */
        DateRangePopupComponent.prototype.initialArray = /**
         * @private
         * @param {?} key
         * @return {?}
         */
            function (key) {
                if (!this[key] || !Array.isArray(this[key])) {
                    this[key] = [];
                }
            };
        DateRangePopupComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line:component-selector
                        selector: 'date-range-popup',
                        exportAs: 'dateRangePopup',
                        template: "<div\r\n  class=\"{{ prefixCls }}-picker-container {{ dropdownClassName }} {{ prefixCls }}-picker-container-placement-bottomLeft\"\r\n  [ngStyle]=\"popupStyle\">\r\n\r\n  <div class=\"{{ prefixCls }} {{ showWeek ? prefixCls + '-week-number': '' }} {{ hasTimePicker ? prefixCls + '-time' : '' }} {{ isRange ? prefixCls + '-range' : '' }}\" tabindex=\"0\">\r\n    <div class=\"{{ prefixCls }}-panel\">\r\n      <ng-container *ngIf=\"!isRange\"> <!-- Single ONLY -->\r\n        <ng-container *ngTemplateOutlet=\"tplCalendarInput\"></ng-container>\r\n      </ng-container>\r\n      <div class=\"{{ prefixCls }}-date-panel\">\r\n        <ng-container *ngIf=\"isRange; else tplSinglePart\">\r\n          <!-- Range Selectors -->\r\n          <ng-container *ngTemplateOutlet=\"tplRangePart; context: { partType: 'left' }\"></ng-container>\r\n          <div class=\"ant-calendar-range-middle\">~</div>\r\n          <ng-container *ngTemplateOutlet=\"tplRangePart; context: { partType: 'right' }\"></ng-container>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"!isRange\"> <!-- Single ONLY -->\r\n          <ng-container *ngTemplateOutlet=\"tplFooter\"></ng-container>\r\n        </ng-container>\r\n      </div>\r\n      <ng-container *ngIf=\"isRange\"> <!-- Range ONLY -->\r\n        <ng-container *ngTemplateOutlet=\"tplFooter\"></ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #tplCalendarInput let-partType=\"partType\">\r\n  <calendar-input\r\n    [value]=\"getValue(partType)\"\r\n    (valueChange)=\"changeValue($event, partType)\"\r\n    [locale]=\"locale\"\r\n    [disabledDate]=\"disabledDate\"\r\n    [format]=\"format\"\r\n    [placeholder]=\"getPlaceholder(partType)\"\r\n  ></calendar-input>\r\n</ng-template>\r\n\r\n<ng-template #tplInnerPopup let-partType=\"partType\">\r\n  <inner-popup\r\n    [showWeek]=\"showWeek\"\r\n    [locale]=\"locale\"\r\n    [showTimePicker]=\"hasTimePicker && showTimePicker\"\r\n    [timeOptions]=\"getTimeOptions(partType)\"\r\n    [panelMode]=\"getPanelMode(partType)\"\r\n    (panelModeChange)=\"onPanelModeChange($event, partType)\"\r\n    [value]=\"getValueBySelector(partType)\"\r\n    [disabledDate]=\"disabledDate\"\r\n    [dateRender]=\"dateRender\"\r\n    [selectedValue]=\"selectedValue\"\r\n    [hoverValue]=\"hoverValue\"\r\n    [enablePrev]=\"enablePrevNext('prev', partType)\"\r\n    [enableNext]=\"enablePrevNext('next', partType)\"\r\n    (dayHover)=\"onDayHover($event)\"\r\n    (selectDate)=\"changeValueFromSelect($event)\"\r\n    (selectTime)=\"onSelectTime($event, partType)\"\r\n    (headerChange)=\"onHeaderChange($event, partType)\"\r\n  ></inner-popup>\r\n</ng-template>\r\n\r\n<ng-template #tplFooter>\r\n  <calendar-footer\r\n    *ngIf=\"hasFooter\"\r\n    [locale]=\"locale\"\r\n    [showToday]=\"showToday\"\r\n    [hasTimePicker]=\"hasTimePicker\"\r\n    [timePickerDisabled]=\"timePickerDisabled()\"\r\n    [okDisabled]=\"okDisabled()\"\r\n    [extraFooter]=\"extraFooter\"\r\n    [rangeQuickSelector]=\"ranges ? tplRangeQuickSelector : null\"\r\n    [(showTimePicker)]=\"showTimePicker\"\r\n    (showTimePickerChange)=\"onShowTimePickerChange($event)\"\r\n    (clickOk)=\"resultOk.emit()\"\r\n    (clickToday)=\"onClickToday($event)\"\r\n  ></calendar-footer>\r\n</ng-template>\r\n\r\n<!-- Single ONLY -->\r\n<ng-template #tplSinglePart>\r\n  <ng-container *ngTemplateOutlet=\"tplInnerPopup\"></ng-container>\r\n</ng-template>\r\n\r\n<!-- Range ONLY -->\r\n<ng-template #tplRangePart let-partType=\"partType\">\r\n  <div class=\"{{ prefixCls }}-range-part {{ prefixCls }}-range-{{ partType }}\">\r\n    <ng-container *ngTemplateOutlet=\"tplCalendarInput; context: { partType: partType }\"></ng-container>\r\n    <div style=\"outline: none;\">\r\n      <ng-container *ngTemplateOutlet=\"tplInnerPopup; context: { partType: partType }\"></ng-container>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- Range ONLY: Range Quick Selector -->\r\n<ng-template #tplRangeQuickSelector>\r\n  <a *ngFor=\"let name of getObjectKeys(ranges)\"\r\n    (click)=\"onClickPresetRange(ranges[name])\"\r\n    (mouseenter)=\"onHoverPresetRange(ranges[name])\"\r\n    (mouseleave)=\"onPresetRangeMouseLeave()\"\r\n  >{{ name }}</a>\r\n</ng-template>"
                    }] }
        ];
        DateRangePopupComponent.propDecorators = {
            isRange: [{ type: core.Input }],
            showWeek: [{ type: core.Input }],
            locale: [{ type: core.Input }],
            format: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            disabledDate: [{ type: core.Input }],
            disabledTime: [{ type: core.Input }],
            showToday: [{ type: core.Input }],
            showTime: [{ type: core.Input }],
            extraFooter: [{ type: core.Input }],
            ranges: [{ type: core.Input }],
            dateRender: [{ type: core.Input }],
            popupStyle: [{ type: core.Input }],
            dropdownClassName: [{ type: core.Input }],
            panelMode: [{ type: core.Input }],
            panelModeChange: [{ type: core.Output }],
            calendarChange: [{ type: core.Output }],
            value: [{ type: core.Input }],
            valueChange: [{ type: core.Output }],
            resultOk: [{ type: core.Output }],
            closePicker: [{ type: core.Output }]
        };
        return DateRangePopupComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InnerPopupComponent = /** @class */ (function () {
        function InnerPopupComponent() {
            this.panelModeChange = new core.EventEmitter();
            this.headerChange = new core.EventEmitter(); // Emitted when user changed the header's value
            // Emitted when user changed the header's value
            this.selectDate = new core.EventEmitter(); // Emitted when the date is selected by click the date panel
            // Emitted when the date is selected by click the date panel
            this.selectTime = new core.EventEmitter();
            this.dayHover = new core.EventEmitter(); // Emitted when hover on a day by mouse enter
            // Emitted when hover on a day by mouse enter
            this.prefixCls = 'ant-calendar';
        }
        /**
         * @return {?}
         */
        InnerPopupComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} changes
         * @return {?}
         */
        InnerPopupComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.value && !this.value) {
                    this.value = new CandyDate();
                }
            };
        /**
         * @param {?} date
         * @return {?}
         */
        InnerPopupComponent.prototype.onSelectTime = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                this.selectTime.emit(new CandyDate(date));
            };
        // The value real changed to outside
        // The value real changed to outside
        /**
         * @param {?} date
         * @return {?}
         */
        InnerPopupComponent.prototype.onSelectDate =
            // The value real changed to outside
            /**
             * @param {?} date
             * @return {?}
             */
            function (date) {
                /** @type {?} */
                var value = date instanceof CandyDate ? date : new CandyDate(date);
                this.selectDate.emit(value);
            };
        InnerPopupComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line:component-selector
                        selector: 'inner-popup',
                        exportAs: 'innerPopup',
                        template: "<calendar-header\r\n  [(panelMode)]=\"panelMode\"\r\n  (panelModeChange)=\"panelModeChange.emit($event)\"\r\n  [(value)]=\"value\"\r\n  (valueChange)=\"headerChange.emit($event)\"\r\n  [locale]=\"locale\"\r\n  [showTimePicker]=\"showTimePicker\"\r\n  [enablePrev]=\"enablePrev\"\r\n  [enableNext]=\"enableNext\"\r\n></calendar-header>\r\n\r\n<ng-container *ngIf=\"showTimePicker && timeOptions\">\r\n  <nz-time-picker-panel\r\n    [nzInDatePicker]=\"true\"\r\n    [ngModel]=\"value.nativeDate\"\r\n    (ngModelChange)=\"onSelectTime($event)\"\r\n    [format]=\"timeOptions.nzFormat\"\r\n    [nzHourStep]=\"timeOptions.nzHourStep\"\r\n    [nzMinuteStep]=\"timeOptions.nzMinuteStep\"\r\n    [nzSecondStep]=\"timeOptions.nzSecondStep\"\r\n    [nzDisabledHours]=\"timeOptions.nzDisabledHours\"\r\n    [nzDisabledMinutes]=\"timeOptions.nzDisabledMinutes\"\r\n    [nzDisabledSeconds]=\"timeOptions.nzDisabledSeconds\"\r\n    [nzHideDisabledOptions]=\"timeOptions.nzHideDisabledOptions\"\r\n    [nzDefaultOpenValue]=\"timeOptions.nzDefaultOpenValue\"\r\n    [nzAddOn]=\"timeOptions.nzAddOn\"\r\n  ></nz-time-picker-panel>\r\n</ng-container>\r\n\r\n<div class=\"{{ prefixCls }}-body\">\r\n  <date-table\r\n    [locale]=\"locale\"\r\n    [showWeek]=\"showWeek\"\r\n    [value]=\"value\"\r\n    (valueChange)=\"onSelectDate($event)\"\r\n    showWeekNumber=\"false\"\r\n    [disabledDate]=\"disabledDate\"\r\n    [dateRender]=\"dateRender\"\r\n    [selectedValue]=\"selectedValue\"\r\n    [hoverValue]=\"hoverValue\"\r\n    (dayHover)=\"dayHover.emit($event)\"\r\n  ></date-table>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        InnerPopupComponent.ctorParameters = function () { return []; };
        InnerPopupComponent.propDecorators = {
            showWeek: [{ type: core.Input }],
            locale: [{ type: core.Input }],
            showTimePicker: [{ type: core.Input }],
            timeOptions: [{ type: core.Input }],
            enablePrev: [{ type: core.Input }],
            enableNext: [{ type: core.Input }],
            disabledDate: [{ type: core.Input }],
            dateRender: [{ type: core.Input }],
            selectedValue: [{ type: core.Input }],
            hoverValue: [{ type: core.Input }],
            panelMode: [{ type: core.Input }],
            panelModeChange: [{ type: core.Output }],
            value: [{ type: core.Input }],
            headerChange: [{ type: core.Output }],
            selectDate: [{ type: core.Output }],
            selectTime: [{ type: core.Output }],
            dayHover: [{ type: core.Output }]
        };
        return InnerPopupComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MAX_ROW$2 = 4;
    /** @type {?} */
    var MAX_COL$2 = 3;
    var YearPanelComponent = /** @class */ (function () {
        function YearPanelComponent() {
            this.valueChange = new core.EventEmitter();
            this.decadePanelShow = new core.EventEmitter();
            this.prefixCls = 'ant-calendar-year-panel';
        }
        Object.defineProperty(YearPanelComponent.prototype, "currentYear", {
            get: /**
             * @return {?}
             */ function () {
                return this.value.getYear();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(YearPanelComponent.prototype, "startYear", {
            get: /**
             * @return {?}
             */ function () {
                return parseInt("" + this.currentYear / 10, 10) * 10;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(YearPanelComponent.prototype, "endYear", {
            get: /**
             * @return {?}
             */ function () {
                return this.startYear + 9;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        YearPanelComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.value || changes.disabledDate) {
                    this.render();
                }
            };
        /**
         * @return {?}
         */
        YearPanelComponent.prototype.previousDecade = /**
         * @return {?}
         */
            function () {
                this.gotoYear(-10);
            };
        /**
         * @return {?}
         */
        YearPanelComponent.prototype.nextDecade = /**
         * @return {?}
         */
            function () {
                this.gotoYear(10);
            };
        /**
         * @param {?} _index
         * @param {?} yearData
         * @return {?}
         */
        YearPanelComponent.prototype.trackPanelYear = /**
         * @param {?} _index
         * @param {?} yearData
         * @return {?}
         */
            function (_index, yearData) {
                return yearData.content;
            };
        /**
         * @private
         * @return {?}
         */
        YearPanelComponent.prototype.render = /**
         * @private
         * @return {?}
         */
            function () {
                if (this.value) {
                    this.panelYears = this.makePanelYears();
                }
            };
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
        /**
         * @private
         * @param {?} amount
         * @return {?}
         */
        YearPanelComponent.prototype.gotoYear =
            // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
            /**
             * @private
             * @param {?} amount
             * @return {?}
             */
            function (amount) {
                this.value = this.value.addYears(amount);
                // this.valueChange.emit(this.value); // Do not trigger final value change
                this.render();
            };
        /**
         * @private
         * @param {?} year
         * @return {?}
         */
        YearPanelComponent.prototype.chooseYear = /**
         * @private
         * @param {?} year
         * @return {?}
         */
            function (year) {
                this.value = this.value.setYear(year);
                this.valueChange.emit(this.value);
                this.render();
            };
        /**
         * @private
         * @return {?}
         */
        YearPanelComponent.prototype.makePanelYears = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var years = [];
                /** @type {?} */
                var currentYear = this.currentYear;
                /** @type {?} */
                var startYear = this.startYear;
                /** @type {?} */
                var endYear = this.endYear;
                /** @type {?} */
                var previousYear = startYear - 1;
                /** @type {?} */
                var index = 0;
                for (var rowIndex = 0; rowIndex < MAX_ROW$2; rowIndex++) {
                    years[rowIndex] = [];
                    var _loop_1 = function (colIndex) {
                        var _a;
                        /** @type {?} */
                        var year = previousYear + index;
                        /** @type {?} */
                        var content = String(year);
                        /** @type {?} */
                        var disabled = this_1.disabledDate ? this_1.disabledDate(this_1.value.setYear(year).nativeDate) : false;
                        /** @type {?} */
                        var cell = (years[rowIndex][colIndex] = {
                            disabled: disabled,
                            content: content,
                            year: year,
                            title: content,
                            isCurrent: year === currentYear,
                            isLowerThanStart: year < startYear,
                            isBiggerThanEnd: year > endYear,
                            classMap: null,
                            onClick: null
                        });
                        cell.classMap = (_a = {},
                            _a[this_1.prefixCls + "-cell"] = true,
                            _a[this_1.prefixCls + "-selected-cell"] = cell.isCurrent,
                            _a[this_1.prefixCls + "-cell-disabled"] = disabled,
                            _a[this_1.prefixCls + "-last-decade-cell"] = cell.isLowerThanStart,
                            _a[this_1.prefixCls + "-next-decade-cell"] = cell.isBiggerThanEnd,
                            _a);
                        if (cell.isLowerThanStart) {
                            cell.onClick = ( /**
                             * @return {?}
                             */function () { return _this.previousDecade(); });
                        }
                        else if (cell.isBiggerThanEnd) {
                            cell.onClick = ( /**
                             * @return {?}
                             */function () { return _this.nextDecade(); });
                        }
                        else {
                            cell.onClick = ( /**
                             * @return {?}
                             */function () { return _this.chooseYear(cell.year); });
                        }
                        index++;
                    };
                    var this_1 = this;
                    for (var colIndex = 0; colIndex < MAX_COL$2; colIndex++) {
                        _loop_1(colIndex);
                    }
                }
                return years;
            };
        YearPanelComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line:component-selector
                        selector: 'year-panel',
                        exportAs: 'yearPanel',
                        template: "<div class=\"{{ prefixCls }}\">\r\n  <div>\r\n    <div class=\"{{ prefixCls }}-header\">\r\n      <a\r\n        class=\"{{ prefixCls }}-prev-decade-btn\"\r\n        role=\"button\"\r\n        (click)=\"previousDecade()\"\r\n        title=\"{{ locale.previousDecade }}\"\r\n      ></a>\r\n      <a\r\n        class=\"{{ prefixCls }}-decade-select\"\r\n        role=\"button\"\r\n        (click)=\"decadePanelShow.emit()\"\r\n        title=\"{{ locale.decadeSelect }}\"\r\n      >\r\n        <span class=\"{{ prefixCls }}-decade-select-content\">\r\n          {{ startYear }}-{{ endYear }}\r\n        </span>\r\n        <span class=\"{{ prefixCls }}-decade-select-arrow\">x</span>\r\n      </a>\r\n\r\n      <a class=\"{{ prefixCls }}-next-decade-btn\" (click)=\"nextDecade()\" title=\"{{ locale.nextDecade }}\" role=\"button\"></a>\r\n    </div>\r\n    <div class=\"{{ prefixCls }}-body\">\r\n      <table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\r\n        <tbody class=\"{{ prefixCls }}-tbody\">\r\n          <tr *ngFor=\"let row of panelYears\" role=\"row\">\r\n            <td *ngFor=\"let yearCell of row; trackBy: trackPanelYear\"\r\n              role=\"gridcell\"\r\n              title=\"{{ yearCell.title }}\"\r\n              (click)=\"yearCell.disabled ? null : yearCell.onClick()\"\r\n              [ngClass]=\"yearCell.classMap\"\r\n            >\r\n              <a class=\"{{ prefixCls }}-year\">{{ yearCell.content }}</a>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>",
                        styles: [
                            // Support disabledDate
                            "\n      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year,\n      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year:hover {\n        color: rgba(0, 0, 0, 0.25);\n        background: #f5f5f5;\n        cursor: not-allowed;\n      }\n    "
                        ]
                    }] }
        ];
        /** @nocollapse */
        YearPanelComponent.ctorParameters = function () { return []; };
        YearPanelComponent.propDecorators = {
            locale: [{ type: core.Input }],
            value: [{ type: core.Input }],
            valueChange: [{ type: core.Output }],
            disabledDate: [{ type: core.Input }],
            decadePanelShow: [{ type: core.Output }]
        };
        return YearPanelComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LibPackerModule = /** @class */ (function () {
        function LibPackerModule() {
        }
        LibPackerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule, i18n.NzI18nModule, timePicker.NzTimePickerModule],
                        exports: [
                            CalendarHeaderComponent,
                            CalendarInputComponent,
                            CalendarFooterComponent,
                            OkButtonComponent,
                            TimePickerButtonComponent,
                            TodayButtonComponent,
                            DateTableComponent,
                            YearPanelComponent,
                            MonthPanelComponent,
                            MonthTableComponent,
                            DecadePanelComponent,
                            InnerPopupComponent,
                            DateRangePopupComponent
                        ],
                        declarations: [
                            CalendarHeaderComponent,
                            CalendarInputComponent,
                            CalendarFooterComponent,
                            OkButtonComponent,
                            TimePickerButtonComponent,
                            TodayButtonComponent,
                            DateTableComponent,
                            YearPanelComponent,
                            MonthPanelComponent,
                            MonthTableComponent,
                            DecadePanelComponent,
                            InnerPopupComponent,
                            DateRangePopupComponent
                        ]
                    },] }
        ];
        return LibPackerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzPickerComponent = /** @class */ (function () {
        function NzPickerComponent(dateHelper, changeDetector) {
            this.dateHelper = dateHelper;
            this.changeDetector = changeDetector;
            this.noAnimation = false;
            this.isRange = false;
            this.open = undefined;
            this.valueChange = new core.EventEmitter();
            this.openChange = new core.EventEmitter(); // Emitted when overlay's open state change
            this.prefixCls = 'ant-calendar';
            this.animationOpenState = false;
            this.overlayOpen = false; // Available when "open"=undefined
            // Available when "open"=undefined
            this.overlayOffsetY = 0;
            this.overlayOffsetX = -2;
            this.overlayPositions = ( /** @type {?} */([
                {
                    // offsetX: -10, // TODO: What a pity, cdk/overlay current not support offset configs even though it already provide these properties
                    // offsetY: -10,
                    originX: 'start',
                    originY: 'top',
                    overlayX: 'start',
                    overlayY: 'top'
                },
                {
                    originX: 'start',
                    originY: 'bottom',
                    overlayX: 'start',
                    overlayY: 'bottom'
                },
                {
                    originX: 'end',
                    originY: 'top',
                    overlayX: 'end',
                    overlayY: 'top'
                },
                {
                    originX: 'end',
                    originY: 'bottom',
                    overlayX: 'end',
                    overlayY: 'bottom'
                }
            ]));
            this.dropdownAnimation = 'bottom';
            this.currentPositionX = 'start';
            this.currentPositionY = 'top';
        }
        Object.defineProperty(NzPickerComponent.prototype, "realOpenState", {
            get: /**
             * @return {?}
             */ function () {
                // The value that really decide the open state of overlay
                return this.isOpenHandledByUser() ? !!this.open : this.overlayOpen;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                if (this.autoFocus) {
                    if (this.isRange) {
                        /** @type {?} */
                        var firstInput = ( /** @type {?} */((( /** @type {?} */(this.pickerInput.nativeElement))).querySelector('input:first-child')));
                        firstInput.focus(); // Focus on the first input
                    }
                    else {
                        this.pickerInput.nativeElement.focus();
                    }
                }
            };
        // Show overlay content
        // Show overlay content
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.showOverlay =
            // Show overlay content
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                if (!this.realOpenState) {
                    this.overlayOpen = true;
                    this.openChange.emit(this.overlayOpen);
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                            _this.cdkConnectedOverlay.overlayRef.updatePosition();
                        }
                    }));
                }
            };
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.hideOverlay = /**
         * @return {?}
         */
            function () {
                if (this.realOpenState) {
                    this.overlayOpen = false;
                    this.openChange.emit(this.overlayOpen);
                }
            };
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.onClickInputBox = /**
         * @return {?}
         */
            function () {
                if (!this.disabled && !this.isOpenHandledByUser()) {
                    this.showOverlay();
                }
            };
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.onClickBackdrop = /**
         * @return {?}
         */
            function () {
                this.hideOverlay();
            };
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.onOverlayDetach = /**
         * @return {?}
         */
            function () {
                this.hideOverlay();
            };
        // NOTE: A issue here, the first time position change, the animation will not be triggered.
        // Because the overlay's "positionChange" event is emitted after the content's full shown up.
        // All other components like "nz-dropdown" which depends on overlay also has the same issue.
        // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429
        // NOTE: A issue here, the first time position change, the animation will not be triggered.
        // Because the overlay's "positionChange" event is emitted after the content's full shown up.
        // All other components like "nz-dropdown" which depends on overlay also has the same issue.
        // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429
        /**
         * @param {?} position
         * @return {?}
         */
        NzPickerComponent.prototype.onPositionChange =
            // NOTE: A issue here, the first time position change, the animation will not be triggered.
            // Because the overlay's "positionChange" event is emitted after the content's full shown up.
            // All other components like "nz-dropdown" which depends on overlay also has the same issue.
            // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429
            /**
             * @param {?} position
             * @return {?}
             */
            function (position) {
                this.dropdownAnimation = position.connectionPair.originY === 'top' ? 'bottom' : 'top';
                this.currentPositionX = ( /** @type {?} */(position.connectionPair.originX));
                this.currentPositionY = ( /** @type {?} */(position.connectionPair.originY));
                this.changeDetector.detectChanges(); // Take side-effects to position styles
            };
        /**
         * @param {?} event
         * @return {?}
         */
        NzPickerComponent.prototype.onClickClear = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.preventDefault();
                event.stopPropagation();
                this.value = this.isRange ? [] : null;
                this.valueChange.emit(this.value);
            };
        /**
         * @param {?=} partType
         * @return {?}
         */
        NzPickerComponent.prototype.getReadableValue = /**
         * @param {?=} partType
         * @return {?}
         */
            function (partType) {
                /** @type {?} */
                var value;
                if (this.isRange) {
                    value = (( /** @type {?} */(this.value)))[this.getPartTypeIndex(( /** @type {?} */(partType)))];
                }
                else {
                    value = ( /** @type {?} */(this.value));
                }
                return value ? this.dateHelper.format(value.nativeDate, this.format) : null;
            };
        /**
         * @param {?} partType
         * @return {?}
         */
        NzPickerComponent.prototype.getPartTypeIndex = /**
         * @param {?} partType
         * @return {?}
         */
            function (partType) {
                return { left: 0, right: 1 }[partType];
            };
        /**
         * @param {?=} partType
         * @return {?}
         */
        NzPickerComponent.prototype.getPlaceholder = /**
         * @param {?=} partType
         * @return {?}
         */
            function (partType) {
                return this.isRange ? this.placeholder[this.getPartTypeIndex(( /** @type {?} */(partType)))] : (( /** @type {?} */(this.placeholder)));
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NzPickerComponent.prototype.isEmptyValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value === null) {
                    return true;
                }
                else if (this.isRange) {
                    return !value || !Array.isArray(value) || value.every(( /**
                     * @param {?} val
                     * @return {?}
                     */function (val) { return !val; }));
                }
                else {
                    return !value;
                }
            };
        // Whether open state is permanently controlled by user himself
        // Whether open state is permanently controlled by user himself
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.isOpenHandledByUser =
            // Whether open state is permanently controlled by user himself
            /**
             * @return {?}
             */
            function () {
                return this.open !== undefined;
            };
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.animationStart = /**
         * @return {?}
         */
            function () {
                if (this.realOpenState) {
                    this.animationOpenState = true;
                }
            };
        /**
         * @return {?}
         */
        NzPickerComponent.prototype.animationDone = /**
         * @return {?}
         */
            function () {
                this.animationOpenState = this.realOpenState;
            };
        NzPickerComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        selector: 'nz-picker',
                        exportAs: 'nzPicker',
                        template: "<span\r\n  cdkOverlayOrigin\r\n  #origin=\"cdkOverlayOrigin\"\r\n  class=\"{{ prefixCls }}-picker {{ size ? prefixCls + '-picker-' + size : '' }} {{ className }}\"\r\n  [ngStyle]=\"style\"\r\n  tabindex=\"0\"\r\n  (click)=\"onClickInputBox()\"\r\n>\r\n  <!-- Content of single picker -->\r\n  <ng-container *ngIf=\"!isRange\">\r\n    <input\r\n      #pickerInput\r\n      class=\"{{ prefixCls }}-picker-input ant-input\"\r\n      [class.ant-input-lg]=\"size === 'large'\"\r\n      [class.ant-input-sm]=\"size === 'small'\"\r\n      [class.ant-input-disabled]=\"disabled\"\r\n\r\n      [disabled]=\"disabled\"\r\n      readonly\r\n      value=\"{{ getReadableValue() }}\"\r\n      placeholder=\"{{ getPlaceholder() }}\"\r\n    />\r\n    <ng-container *ngTemplateOutlet=\"tplRightRest\"></ng-container>\r\n  </ng-container>\r\n\r\n  <!-- Content of range picker -->\r\n  <ng-container *ngIf=\"isRange\">\r\n    <span\r\n      #pickerInput\r\n      class=\"{{ prefixCls }}-picker-input ant-input\"\r\n      [class.ant-input-lg]=\"size === 'large'\"\r\n      [class.ant-input-sm]=\"size === 'small'\"\r\n      [class.ant-input-disabled]=\"disabled\"\r\n    >\r\n      <ng-container *ngTemplateOutlet=\"tplRangeInput; context: { partType: 'left' }\"></ng-container>\r\n      <span class=\"{{ prefixCls }}-range-picker-separator\"> ~ </span>\r\n      <ng-container *ngTemplateOutlet=\"tplRangeInput; context: { partType: 'right' }\"></ng-container>\r\n      <ng-container *ngTemplateOutlet=\"tplRightRest\"></ng-container>\r\n    </span>\r\n  </ng-container>\r\n</span>\r\n\r\n<!-- Input for Range ONLY -->\r\n<ng-template #tplRangeInput let-partType=\"partType\">\r\n  <input\r\n    class=\"{{ prefixCls }}-range-picker-input\"\r\n    [disabled]=\"disabled\"\r\n    readonly\r\n    value=\"{{ getReadableValue(partType) }}\"\r\n    placeholder=\"{{ getPlaceholder(partType) }}\"\r\n  />\r\n</ng-template>\r\n\r\n<!-- Right operator icons -->\r\n<ng-template #tplRightRest>\r\n  <i\r\n    nz-icon\r\n    type=\"close-circle\"\r\n    theme=\"fill\"\r\n    *ngIf=\"!disabled && !isEmptyValue(value) && allowClear\"\r\n    class=\"{{ prefixCls }}-picker-clear\"\r\n    (click)=\"onClickClear($event)\"\r\n  ></i>\r\n  <span class=\"{{ prefixCls }}-picker-icon\">\r\n    <i nz-icon type=\"calendar\"></i>\r\n  </span>\r\n</ng-template>\r\n\r\n<!-- Overlay -->\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"origin\"\r\n  [cdkConnectedOverlayOpen]=\"realOpenState\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"!isOpenHandledByUser()\"\r\n  [cdkConnectedOverlayPositions]=\"overlayPositions\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  (backdropClick)=\"onClickBackdrop()\"\r\n  (detach)=\"onOverlayDetach()\"\r\n>\r\n  <div\r\n    [nzNoAnimation]=\"noAnimation\"\r\n    [@slideMotion]=\"dropdownAnimation\"\r\n    (@slideMotion.start)=\"animationStart()\"\r\n    (@slideMotion.done)=\"animationDone()\"\r\n    style=\"position: relative;\"\r\n    [style.left]=\"currentPositionX === 'start' ? '-2px' : '2px'\"\r\n    [style.top]=\"currentPositionY === 'top' ? '-2px' : '2px'\"\r\n  > <!-- Compatible for overlay that not support offset dynamically and immediately -->\r\n    <ng-content></ng-content>\r\n  </div>\r\n</ng-template>",
                        animations: [core$1.slideMotion],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        NzPickerComponent.ctorParameters = function () {
            return [
                { type: i18n.DateHelperService },
                { type: core.ChangeDetectorRef }
            ];
        };
        NzPickerComponent.propDecorators = {
            noAnimation: [{ type: core.Input }],
            isRange: [{ type: core.Input }],
            open: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            allowClear: [{ type: core.Input }],
            autoFocus: [{ type: core.Input }],
            className: [{ type: core.Input }],
            format: [{ type: core.Input }],
            size: [{ type: core.Input }],
            style: [{ type: core.Input }],
            value: [{ type: core.Input }],
            valueChange: [{ type: core.Output }],
            openChange: [{ type: core.Output }],
            origin: [{ type: core.ViewChild, args: ['origin',] }],
            cdkConnectedOverlay: [{ type: core.ViewChild, args: [overlay.CdkConnectedOverlay,] }],
            pickerInput: [{ type: core.ViewChild, args: ['pickerInput',] }]
        };
        return NzPickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var POPUP_STYLE_PATCH = { position: 'relative' };
    // Aim to override antd's style to support overlay's position strategy (position:absolute will cause it not working beacuse the overlay can't get the height/width of it's content)
    /**
     * The base picker for all common APIs
     * @abstract
     */
    var AbstractPickerComponent = /** @class */ (function () {
        function AbstractPickerComponent(i18n$$1, cdr, dateHelper, noAnimation) {
            this.i18n = i18n$$1;
            this.cdr = cdr;
            this.dateHelper = dateHelper;
            this.noAnimation = noAnimation;
            // --- Common API
            this.nzAllowClear = true;
            this.nzAutoFocus = false;
            this.nzDisabled = false;
            this.nzPopupStyle = POPUP_STYLE_PATCH;
            this.nzOnOpenChange = new core.EventEmitter();
            this.isRange = false; // Indicate whether the value is a range value
            this.destroyed$ = new rxjs.Subject();
            this.isCustomPlaceHolder = false;
            // ------------------------------------------------------------------------
            // | Control value accessor implements
            // ------------------------------------------------------------------------
            // NOTE: onChangeFn/onTouchedFn will not be assigned if user not use as ngModel
            this.onChangeFn = ( /**
             * @return {?}
             */function () { return void 0; });
            this.onTouchedFn = ( /**
             * @return {?}
             */function () { return void 0; });
        }
        Object.defineProperty(AbstractPickerComponent.prototype, "realOpenState", {
            get: 
            // Indicate whether the value is a range value
            /**
             * @return {?}
             */
            function () {
                return this.picker.animationOpenState;
            } // Use picker's real open state to let re-render the picker's content when shown up
            ,
            enumerable: true,
            configurable: true
        });
        // Use picker's real open state to let re-render the picker's content when shown up
        /**
         * @return {?}
         */
        AbstractPickerComponent.prototype.initValue =
            // Use picker's real open state to let re-render the picker's content when shown up
            /**
             * @return {?}
             */
            function () {
                this.nzValue = this.isRange ? [] : null;
            };
        /**
         * @return {?}
         */
        AbstractPickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // Subscribe the every locale change if the nzLocale is not handled by user
                if (!this.nzLocale) {
                    this.i18n.localeChange.pipe(operators.takeUntil(this.destroyed$)).subscribe(( /**
                     * @return {?}
                     */function () { return _this.setLocale(); }));
                }
                // Default value
                this.initValue();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        AbstractPickerComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.nzPopupStyle) {
                    // Always assign the popup style patch
                    this.nzPopupStyle = this.nzPopupStyle ? __assign({}, this.nzPopupStyle, POPUP_STYLE_PATCH) : POPUP_STYLE_PATCH;
                }
                // Mark as customized placeholder by user once nzPlaceHolder assigned at the first time
                if (changes.nzPlaceHolder && changes.nzPlaceHolder.firstChange && typeof this.nzPlaceHolder !== 'undefined') {
                    this.isCustomPlaceHolder = true;
                }
                if (changes.nzLocale) {
                    // The nzLocale is currently handled by user
                    this.setDefaultPlaceHolder();
                }
            };
        /**
         * @return {?}
         */
        AbstractPickerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.destroyed$.next();
                this.destroyed$.complete();
            };
        /**
         * @return {?}
         */
        AbstractPickerComponent.prototype.closeOverlay = /**
         * @return {?}
         */
            function () {
                this.picker.hideOverlay();
            };
        /**
         * Common handle for value changes
         * @param value changed value
         */
        /**
         * Common handle for value changes
         * @param {?} value changed value
         * @return {?}
         */
        AbstractPickerComponent.prototype.onValueChange = /**
         * Common handle for value changes
         * @param {?} value changed value
         * @return {?}
         */
            function (value) {
                this.nzValue = value;
                if (this.isRange) {
                    /** @type {?} */
                    var vAsRange = ( /** @type {?} */(this.nzValue));
                    if (vAsRange.length) {
                        this.onChangeFn([vAsRange[0].nativeDate, vAsRange[1].nativeDate]);
                    }
                    else {
                        this.onChangeFn([]);
                    }
                }
                else {
                    if (this.nzValue) {
                        this.onChangeFn((( /** @type {?} */(this.nzValue))).nativeDate);
                    }
                    else {
                        this.onChangeFn(null);
                    }
                }
                this.onTouchedFn();
            };
        /**
         * Triggered when overlayOpen changes (different with realOpenState)
         * @param open The overlayOpen in picker component
         */
        /**
         * Triggered when overlayOpen changes (different with realOpenState)
         * @param {?} open The overlayOpen in picker component
         * @return {?}
         */
        AbstractPickerComponent.prototype.onOpenChange = /**
         * Triggered when overlayOpen changes (different with realOpenState)
         * @param {?} open The overlayOpen in picker component
         * @return {?}
         */
            function (open) {
                this.nzOnOpenChange.emit(open);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        AbstractPickerComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.setValue(value);
                this.cdr.markForCheck();
            };
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        /**
         * @param {?} fn
         * @return {?}
         */
        AbstractPickerComponent.prototype.registerOnChange =
            // tslint:disable-next-line:no-any
            /**
             * @param {?} fn
             * @return {?}
             */
            function (fn) {
                this.onChangeFn = fn;
            };
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        /**
         * @param {?} fn
         * @return {?}
         */
        AbstractPickerComponent.prototype.registerOnTouched =
            // tslint:disable-next-line:no-any
            /**
             * @param {?} fn
             * @return {?}
             */
            function (fn) {
                this.onTouchedFn = fn;
            };
        /**
         * @param {?} disabled
         * @return {?}
         */
        AbstractPickerComponent.prototype.setDisabledState = /**
         * @param {?} disabled
         * @return {?}
         */
            function (disabled) {
                this.nzDisabled = disabled;
                this.cdr.markForCheck();
            };
        // ------------------------------------------------------------------------
        // | Internal methods
        // ------------------------------------------------------------------------
        // Reload locale from i18n with side effects
        // ------------------------------------------------------------------------
        // | Internal methods
        // ------------------------------------------------------------------------
        // Reload locale from i18n with side effects
        /**
         * @private
         * @return {?}
         */
        AbstractPickerComponent.prototype.setLocale =
            // ------------------------------------------------------------------------
            // | Internal methods
            // ------------------------------------------------------------------------
            // Reload locale from i18n with side effects
            /**
             * @private
             * @return {?}
             */
            function () {
                this.nzLocale = this.i18n.getLocaleData('DatePicker', {});
                this.setDefaultPlaceHolder();
                this.cdr.markForCheck();
            };
        /**
         * @private
         * @return {?}
         */
        AbstractPickerComponent.prototype.setDefaultPlaceHolder = /**
         * @private
         * @return {?}
         */
            function () {
                if (!this.isCustomPlaceHolder && this.nzLocale) {
                    this.nzPlaceHolder = this.isRange ? this.nzLocale.lang.rangePlaceholder : this.nzLocale.lang.placeholder;
                }
            };
        // Safe way of setting value with default
        // Safe way of setting value with default
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        AbstractPickerComponent.prototype.setValue =
            // Safe way of setting value with default
            /**
             * @private
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (this.isRange) {
                    this.nzValue = value ? (( /** @type {?} */(value))).map(( /**
                     * @param {?} val
                     * @return {?}
                     */function (val) { return new CandyDate(val); })) : [];
                }
                else {
                    this.nzValue = value ? new CandyDate(( /** @type {?} */(value))) : null;
                }
            };
        AbstractPickerComponent.propDecorators = {
            nzAllowClear: [{ type: core.Input }],
            nzAutoFocus: [{ type: core.Input }],
            nzDisabled: [{ type: core.Input }],
            nzOpen: [{ type: core.Input }],
            nzClassName: [{ type: core.Input }],
            nzDisabledDate: [{ type: core.Input }],
            nzLocale: [{ type: core.Input }],
            nzPlaceHolder: [{ type: core.Input }],
            nzPopupStyle: [{ type: core.Input }],
            nzDropdownClassName: [{ type: core.Input }],
            nzSize: [{ type: core.Input }],
            nzStyle: [{ type: core.Input }],
            nzFormat: [{ type: core.Input }],
            nzValue: [{ type: core.Input }],
            nzOnOpenChange: [{ type: core.Output }],
            picker: [{ type: core.ViewChild, args: [NzPickerComponent,] }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], AbstractPickerComponent.prototype, "nzAllowClear", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], AbstractPickerComponent.prototype, "nzAutoFocus", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], AbstractPickerComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], AbstractPickerComponent.prototype, "nzOpen", void 0);
        return AbstractPickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DateRangePickerComponent = /** @class */ (function (_super) {
        __extends(DateRangePickerComponent, _super);
        function DateRangePickerComponent(i18n$$1, cdr, dateHelper, noAnimation) {
            var _this = _super.call(this, i18n$$1, cdr, dateHelper, noAnimation) || this;
            _this.showWeek = false; // Should show as week picker
            _this.nzShowToday = true;
            _this.nzOnPanelChange = new core.EventEmitter();
            _this.nzOnCalendarChange = new core.EventEmitter();
            _this.nzOnOk = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(DateRangePickerComponent.prototype, "nzShowTime", {
            get: /**
             * @return {?}
             */ function () {
                return this._showTime;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._showTime = typeof value === 'object' ? value : core$1.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateRangePickerComponent.prototype, "realShowToday", {
            get: /**
             * @return {?}
             */ function () {
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
                    this.extraFooter = core$1.valueFunctionProp(this.nzRenderExtraFooter);
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
                    var rangeValue = value.map(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) { return x.nativeDate; }));
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
                    var value = ( /** @type {?} */(this.nzValue));
                    if (value.length) {
                        this.nzOnOk.emit([value[0].nativeDate, value[1].nativeDate]);
                    }
                    else {
                        this.nzOnOk.emit([]);
                    }
                }
                else {
                    if (this.nzValue) {
                        this.nzOnOk.emit((( /** @type {?} */(this.nzValue))).nativeDate);
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
                this.pickerStyle = __assign({}, showTimeFixes, this.nzStyle);
            };
        DateRangePickerComponent.decorators = [
            { type: core.Component, args: [{
                        template: "" // Just for rollup
                    }] }
        ];
        /** @nocollapse */
        DateRangePickerComponent.ctorParameters = function () {
            return [
                { type: i18n.NzI18nService },
                { type: core.ChangeDetectorRef },
                { type: i18n.DateHelperService },
                { type: core$1.NzNoAnimationDirective }
            ];
        };
        DateRangePickerComponent.propDecorators = {
            nzDateRender: [{ type: core.Input }],
            nzDisabledTime: [{ type: core.Input }],
            nzRenderExtraFooter: [{ type: core.Input }],
            nzShowToday: [{ type: core.Input }],
            nzMode: [{ type: core.Input }],
            nzRanges: [{ type: core.Input }],
            nzOnPanelChange: [{ type: core.Output }],
            nzOnCalendarChange: [{ type: core.Output }],
            nzShowTime: [{ type: core.Input }],
            nzOnOk: [{ type: core.Output }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], DateRangePickerComponent.prototype, "nzShowToday", void 0);
        return DateRangePickerComponent;
    }(AbstractPickerComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzDatePickerComponent = /** @class */ (function (_super) {
        __extends(NzDatePickerComponent, _super);
        function NzDatePickerComponent(i18n$$1, cdr, dateHelper, renderer, elementRef, noAnimation) {
            var _this = _super.call(this, i18n$$1, cdr, dateHelper, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this.isRange = false;
            renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
            return _this;
        }
        NzDatePickerComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        selector: 'nz-date-picker',
                        exportAs: 'nzDatePicker',
                        template: "<nz-picker\r\n  [isRange]=\"isRange\"\r\n  [value]=\"nzValue\"\r\n  (valueChange)=\"onValueChange($event)\"\r\n  [open]=\"nzOpen\"\r\n  [disabled]=\"nzDisabled\"\r\n  [format]=\"nzFormat\"\r\n  [allowClear]=\"nzAllowClear\"\r\n  [autoFocus]=\"nzAutoFocus\"\r\n  [className]=\"nzClassName\"\r\n  [placeholder]=\"nzPlaceHolder\"\r\n  [size]=\"nzSize\"\r\n  [style]=\"pickerStyle\"\r\n  [noAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  (openChange)=\"onOpenChange($event)\"\r\n>\r\n  <date-range-popup *ngIf=\"realOpenState\"\r\n    [isRange]=\"isRange\"\r\n    [showWeek]=\"showWeek\"\r\n    [panelMode]=\"nzMode\"\r\n    (panelModeChange)=\"nzOnPanelChange.emit($event)\"\r\n    [value]=\"nzValue\"\r\n    (valueChange)=\"onValueChange($event)\"\r\n    (calendarChange)=\"onCalendarChange($event)\"\r\n    [locale]=\"nzLocale?.lang\"\r\n    [showToday]=\"realShowToday\"\r\n    [showTime]=\"nzShowTime\"\r\n    [format]=\"nzFormat\"\r\n    [dateRender]=\"nzDateRender\"\r\n    [disabledDate]=\"nzDisabledDate\"\r\n    [disabledTime]=\"nzDisabledTime\"\r\n    [placeholder]=\"nzPlaceHolder\"\r\n    [dropdownClassName]=\"nzDropdownClassName\"\r\n    [popupStyle]=\"nzPopupStyle\"\r\n    [extraFooter]=\"extraFooter\"\r\n    [ranges]=\"nzRanges\"\r\n    (resultOk)=\"onResultOk()\"\r\n    (closePicker)=\"closeOverlay()\"\r\n  ></date-range-popup>\r\n</nz-picker>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                multi: true,
                                useExisting: core.forwardRef(( /**
                                 * @return {?}
                                 */function () { return NzDatePickerComponent; }))
                            }
                        ]
                    }] }
        ];
        /** @nocollapse */
        NzDatePickerComponent.ctorParameters = function () {
            return [
                { type: i18n.NzI18nService },
                { type: core.ChangeDetectorRef },
                { type: i18n.DateHelperService },
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
            ];
        };
        return NzDatePickerComponent;
    }(DateRangePickerComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * The base picker for header panels, current support: Year/Month
     */
    var HeaderPickerComponent = /** @class */ (function (_super) {
        __extends(HeaderPickerComponent, _super);
        function HeaderPickerComponent(i18n$$1, cdr, dateHelper, noAnimation) {
            return _super.call(this, i18n$$1, cdr, dateHelper, noAnimation) || this;
        }
        /**
         * @return {?}
         */
        HeaderPickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                _super.prototype.ngOnInit.call(this);
                this.panelMode = this.endPanelMode;
                /** @type {?} */
                var allHeaderPanels = ['decade', 'year', 'month'];
                this.supportPanels = allHeaderPanels.slice(0, allHeaderPanels.indexOf(this.endPanelMode) + 1);
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        HeaderPickerComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                _super.prototype.ngOnChanges.call(this, changes);
                if (changes.nzRenderExtraFooter) {
                    this.extraFooter = core$1.valueFunctionProp(this.nzRenderExtraFooter);
                }
            };
        /**
         * @param {?} mode
         * @return {?}
         */
        HeaderPickerComponent.prototype.onPanelModeChange = /**
         * @param {?} mode
         * @return {?}
         */
            function (mode) {
                if (this.supportPanels.indexOf(mode) > -1) {
                    this.panelMode = mode;
                }
                else {
                    // Since the default "click year" logic can be "year panel" -> "date panel", we need force to the end panel otherwise
                    this.panelMode = this.endPanelMode;
                }
            };
        /**
         * @param {?} mode
         * @param {?} value
         * @return {?}
         */
        HeaderPickerComponent.prototype.onChooseValue = /**
         * @param {?} mode
         * @param {?} value
         * @return {?}
         */
            function (mode, value) {
                if (this.endPanelMode === mode) {
                    _super.prototype.onValueChange.call(this, value);
                    this.closeOverlay();
                }
            };
        /**
         * @param {?} open
         * @return {?}
         */
        HeaderPickerComponent.prototype.onOpenChange = /**
         * @param {?} open
         * @return {?}
         */
            function (open) {
                if (!open) {
                    this.cleanUp();
                }
                this.nzOnOpenChange.emit(open);
            };
        // Restore some initial props to let open as new in next time
        // Restore some initial props to let open as new in next time
        /**
         * @private
         * @return {?}
         */
        HeaderPickerComponent.prototype.cleanUp =
            // Restore some initial props to let open as new in next time
            /**
             * @private
             * @return {?}
             */
            function () {
                this.panelMode = this.endPanelMode;
            };
        HeaderPickerComponent.decorators = [
            { type: core.Component, args: [{
                        template: ""
                    }] }
        ];
        /** @nocollapse */
        HeaderPickerComponent.ctorParameters = function () {
            return [
                { type: i18n.NzI18nService },
                { type: core.ChangeDetectorRef },
                { type: i18n.DateHelperService },
                { type: core$1.NzNoAnimationDirective }
            ];
        };
        HeaderPickerComponent.propDecorators = {
            nzPlaceHolder: [{ type: core.Input }],
            nzRenderExtraFooter: [{ type: core.Input }],
            nzDefaultValue: [{ type: core.Input }],
            nzFormat: [{ type: core.Input }]
        };
        return HeaderPickerComponent;
    }(AbstractPickerComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzMonthPickerComponent = /** @class */ (function (_super) {
        __extends(NzMonthPickerComponent, _super);
        function NzMonthPickerComponent(i18n$$1, cdr, dateHelper, renderer, elementRef, noAnimation) {
            var _this = _super.call(this, i18n$$1, cdr, dateHelper, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this.nzFormat = 'yyyy-MM';
            _this.endPanelMode = 'month';
            renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
            return _this;
        }
        NzMonthPickerComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        selector: 'nz-month-picker',
                        exportAs: 'nzMonthPicker',
                        template: "<nz-picker\r\n  [isRange]=\"false\"\r\n  [value]=\"nzValue\"\r\n  (valueChange)=\"onValueChange($event)\"\r\n  [open]=\"nzOpen\"\r\n  [disabled]=\"nzDisabled\"\r\n  [format]=\"nzFormat\"\r\n  [allowClear]=\"nzAllowClear\"\r\n  [autoFocus]=\"nzAutoFocus\"\r\n  [className]=\"nzClassName\"\r\n  [placeholder]=\"nzPlaceHolder\"\r\n  [size]=\"nzSize\"\r\n  [style]=\"nzStyle\"\r\n  [noAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  (openChange)=\"onOpenChange($event)\"\r\n>\r\n  <div *ngIf=\"realOpenState\">\r\n    <div class=\"ant-calendar-picker-container {{ nzDropdownClassName }} ant-calendar-picker-container-placement-bottomLeft\" [ngStyle]=\"nzPopupStyle\">\r\n      <div class=\"ant-calendar ant-calendar-month ant-calendar-month-calendar\" tabindex=\"0\">\r\n        <div class=\"ant-calendar-month-calendar-content\">\r\n          <div class=\"ant-calendar-month-header-wrap\">\r\n            <calendar-header\r\n              [disabledMonth]=\"nzDisabledDate\"\r\n              [disabledYear]=\"nzDisabledDate\"\r\n              [panelMode]=\"panelMode\"\r\n              (panelModeChange)=\"onPanelModeChange($event)\"\r\n              [value]=\"nzValue\"\r\n              (chooseYear)=\"onChooseValue('year', $event)\"\r\n              (chooseMonth)=\"onChooseValue('month', $event)\"\r\n              [locale]=\"nzLocale.lang\"\r\n              [enablePrev]=\"true\"\r\n              [enableNext]=\"true\"\r\n            ></calendar-header>\r\n          </div>\r\n          <calendar-footer *ngIf=\"extraFooter\" [extraFooter]=\"extraFooter\"></calendar-footer>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nz-picker>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                multi: true,
                                useExisting: core.forwardRef(( /**
                                 * @return {?}
                                 */function () { return NzMonthPickerComponent; }))
                            }
                        ]
                    }] }
        ];
        /** @nocollapse */
        NzMonthPickerComponent.ctorParameters = function () {
            return [
                { type: i18n.NzI18nService },
                { type: core.ChangeDetectorRef },
                { type: i18n.DateHelperService },
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
            ];
        };
        NzMonthPickerComponent.propDecorators = {
            nzFormat: [{ type: core.Input }]
        };
        return NzMonthPickerComponent;
    }(HeaderPickerComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzRangePickerComponent = /** @class */ (function (_super) {
        __extends(NzRangePickerComponent, _super);
        function NzRangePickerComponent(i18n$$1, cdr, dateHelper, renderer, elementRef, noAnimation) {
            var _this = _super.call(this, i18n$$1, cdr, dateHelper, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this.isRange = true;
            renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
            return _this;
        }
        NzRangePickerComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        selector: 'nz-range-picker',
                        exportAs: 'nzRangePicker',
                        template: "<nz-picker\r\n  [isRange]=\"isRange\"\r\n  [value]=\"nzValue\"\r\n  (valueChange)=\"onValueChange($event)\"\r\n  [open]=\"nzOpen\"\r\n  [disabled]=\"nzDisabled\"\r\n  [format]=\"nzFormat\"\r\n  [allowClear]=\"nzAllowClear\"\r\n  [autoFocus]=\"nzAutoFocus\"\r\n  [className]=\"nzClassName\"\r\n  [placeholder]=\"nzPlaceHolder\"\r\n  [size]=\"nzSize\"\r\n  [style]=\"pickerStyle\"\r\n  [noAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  (openChange)=\"onOpenChange($event)\"\r\n>\r\n  <date-range-popup *ngIf=\"realOpenState\"\r\n    [isRange]=\"isRange\"\r\n    [showWeek]=\"showWeek\"\r\n    [panelMode]=\"nzMode\"\r\n    (panelModeChange)=\"nzOnPanelChange.emit($event)\"\r\n    [value]=\"nzValue\"\r\n    (valueChange)=\"onValueChange($event)\"\r\n    (calendarChange)=\"onCalendarChange($event)\"\r\n    [locale]=\"nzLocale?.lang\"\r\n    [showToday]=\"realShowToday\"\r\n    [showTime]=\"nzShowTime\"\r\n    [format]=\"nzFormat\"\r\n    [dateRender]=\"nzDateRender\"\r\n    [disabledDate]=\"nzDisabledDate\"\r\n    [disabledTime]=\"nzDisabledTime\"\r\n    [placeholder]=\"nzPlaceHolder\"\r\n    [dropdownClassName]=\"nzDropdownClassName\"\r\n    [popupStyle]=\"nzPopupStyle\"\r\n    [extraFooter]=\"extraFooter\"\r\n    [ranges]=\"nzRanges\"\r\n    (resultOk)=\"onResultOk()\"\r\n    (closePicker)=\"closeOverlay()\"\r\n  ></date-range-popup>\r\n</nz-picker>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                multi: true,
                                useExisting: core.forwardRef(( /**
                                 * @return {?}
                                 */function () { return NzRangePickerComponent; }))
                            }
                        ]
                    }] }
        ];
        /** @nocollapse */
        NzRangePickerComponent.ctorParameters = function () {
            return [
                { type: i18n.NzI18nService },
                { type: core.ChangeDetectorRef },
                { type: i18n.DateHelperService },
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
            ];
        };
        return NzRangePickerComponent;
    }(DateRangePickerComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzWeekPickerComponent = /** @class */ (function (_super) {
        __extends(NzWeekPickerComponent, _super);
        function NzWeekPickerComponent(i18n$$1, cdr, dateHelper, renderer, elementRef, noAnimation) {
            var _this = _super.call(this, i18n$$1, cdr, dateHelper, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this.showWeek = true;
            renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
            return _this;
        }
        NzWeekPickerComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        selector: 'nz-week-picker',
                        exportAs: 'nzWeekPicker',
                        template: "<nz-picker\r\n  [isRange]=\"isRange\"\r\n  [value]=\"nzValue\"\r\n  (valueChange)=\"onValueChange($event)\"\r\n  [open]=\"nzOpen\"\r\n  [disabled]=\"nzDisabled\"\r\n  [format]=\"nzFormat\"\r\n  [allowClear]=\"nzAllowClear\"\r\n  [autoFocus]=\"nzAutoFocus\"\r\n  [className]=\"nzClassName\"\r\n  [placeholder]=\"nzPlaceHolder\"\r\n  [size]=\"nzSize\"\r\n  [style]=\"pickerStyle\"\r\n  [noAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  (openChange)=\"onOpenChange($event)\"\r\n>\r\n  <date-range-popup *ngIf=\"realOpenState\"\r\n    [isRange]=\"isRange\"\r\n    [showWeek]=\"showWeek\"\r\n    [panelMode]=\"nzMode\"\r\n    (panelModeChange)=\"nzOnPanelChange.emit($event)\"\r\n    [value]=\"nzValue\"\r\n    (valueChange)=\"onValueChange($event)\"\r\n    (calendarChange)=\"onCalendarChange($event)\"\r\n    [locale]=\"nzLocale?.lang\"\r\n    [showToday]=\"realShowToday\"\r\n    [showTime]=\"nzShowTime\"\r\n    [format]=\"nzFormat\"\r\n    [dateRender]=\"nzDateRender\"\r\n    [disabledDate]=\"nzDisabledDate\"\r\n    [disabledTime]=\"nzDisabledTime\"\r\n    [placeholder]=\"nzPlaceHolder\"\r\n    [dropdownClassName]=\"nzDropdownClassName\"\r\n    [popupStyle]=\"nzPopupStyle\"\r\n    [extraFooter]=\"extraFooter\"\r\n    [ranges]=\"nzRanges\"\r\n    (resultOk)=\"onResultOk()\"\r\n    (closePicker)=\"closeOverlay()\"\r\n  ></date-range-popup>\r\n</nz-picker>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                multi: true,
                                useExisting: core.forwardRef(( /**
                                 * @return {?}
                                 */function () { return NzWeekPickerComponent; }))
                            }
                        ]
                    }] }
        ];
        /** @nocollapse */
        NzWeekPickerComponent.ctorParameters = function () {
            return [
                { type: i18n.NzI18nService },
                { type: core.ChangeDetectorRef },
                { type: i18n.DateHelperService },
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
            ];
        };
        return NzWeekPickerComponent;
    }(DateRangePickerComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzYearPickerComponent = /** @class */ (function (_super) {
        __extends(NzYearPickerComponent, _super);
        function NzYearPickerComponent(i18n$$1, cdr, dateHelper, renderer, elementRef, noAnimation) {
            var _this = _super.call(this, i18n$$1, cdr, dateHelper, noAnimation) || this;
            _this.noAnimation = noAnimation;
            _this.nzFormat = 'yyyy';
            _this.endPanelMode = 'year';
            renderer.addClass(elementRef.nativeElement, 'ant-calendar-picker');
            return _this;
        }
        NzYearPickerComponent.decorators = [
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        selector: 'nz-year-picker',
                        exportAs: 'nzYearPicker',
                        template: "<nz-picker\r\n  [isRange]=\"false\"\r\n  [value]=\"nzValue\"\r\n  (valueChange)=\"onValueChange($event)\"\r\n  [open]=\"nzOpen\"\r\n  [disabled]=\"nzDisabled\"\r\n  [format]=\"nzFormat\"\r\n  [allowClear]=\"nzAllowClear\"\r\n  [autoFocus]=\"nzAutoFocus\"\r\n  [className]=\"nzClassName\"\r\n  [placeholder]=\"nzPlaceHolder\"\r\n  [size]=\"nzSize\"\r\n  [style]=\"nzStyle\"\r\n  [noAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  (openChange)=\"onOpenChange($event)\"\r\n>\r\n  <div *ngIf=\"realOpenState\">\r\n    <div class=\"ant-calendar-picker-container {{ nzDropdownClassName }} ant-calendar-picker-container-placement-bottomLeft\" [ngStyle]=\"nzPopupStyle\">\r\n      <div class=\"ant-calendar ant-calendar-month ant-calendar-month-calendar\" tabindex=\"0\">\r\n        <div class=\"ant-calendar-month-calendar-content\">\r\n          <div class=\"ant-calendar-month-header-wrap\">\r\n            <calendar-header\r\n              [disabledMonth]=\"nzDisabledDate\"\r\n              [disabledYear]=\"nzDisabledDate\"\r\n              [panelMode]=\"panelMode\"\r\n              (panelModeChange)=\"onPanelModeChange($event)\"\r\n              [value]=\"nzValue\"\r\n              (chooseYear)=\"onChooseValue('year', $event)\"\r\n              (chooseMonth)=\"onChooseValue('month', $event)\"\r\n              [locale]=\"nzLocale.lang\"\r\n              [enablePrev]=\"true\"\r\n              [enableNext]=\"true\"\r\n            ></calendar-header>\r\n          </div>\r\n          <calendar-footer *ngIf=\"extraFooter\" [extraFooter]=\"extraFooter\"></calendar-footer>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nz-picker>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                multi: true,
                                useExisting: core.forwardRef(( /**
                                 * @return {?}
                                 */function () { return NzYearPickerComponent; }))
                            }
                        ]
                    }] }
        ];
        /** @nocollapse */
        NzYearPickerComponent.ctorParameters = function () {
            return [
                { type: i18n.NzI18nService },
                { type: core.ChangeDetectorRef },
                { type: i18n.DateHelperService },
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
            ];
        };
        NzYearPickerComponent.propDecorators = {
            nzFormat: [{ type: core.Input }]
        };
        return NzYearPickerComponent;
    }(HeaderPickerComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzDatePickerModule = /** @class */ (function () {
        function NzDatePickerModule() {
        }
        NzDatePickerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, overlay.OverlayModule, LibPackerModule, icon.NzIconModule, core$1.NzOverlayModule, core$1.NzNoAnimationModule],
                        exports: [
                            NzDatePickerComponent,
                            NzRangePickerComponent,
                            NzMonthPickerComponent,
                            NzYearPickerComponent,
                            NzWeekPickerComponent
                        ],
                        declarations: [
                            HeaderPickerComponent,
                            DateRangePickerComponent,
                            NzPickerComponent,
                            NzDatePickerComponent,
                            NzMonthPickerComponent,
                            NzYearPickerComponent,
                            NzWeekPickerComponent,
                            NzRangePickerComponent
                        ]
                    },] }
        ];
        return NzDatePickerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CandyDate = CandyDate;
    exports.NzDatePickerModule = NzDatePickerModule;
    exports.NzDatePickerComponent = NzDatePickerComponent;
    exports.NzRangePickerComponent = NzRangePickerComponent;
    exports.NzMonthPickerComponent = NzMonthPickerComponent;
    exports.NzWeekPickerComponent = NzWeekPickerComponent;
    exports.NzYearPickerComponent = NzYearPickerComponent;
    exports.ɵp = AbstractPickerComponent;
    exports.ɵo = DateRangePickerComponent;
    exports.ɵr = HeaderPickerComponent;
    exports.ɵd = CalendarFooterComponent;
    exports.ɵb = CalendarHeaderComponent;
    exports.ɵc = CalendarInputComponent;
    exports.ɵe = OkButtonComponent;
    exports.ɵf = TimePickerButtonComponent;
    exports.ɵg = TodayButtonComponent;
    exports.ɵh = DateTableComponent;
    exports.ɵl = DecadePanelComponent;
    exports.ɵa = LibPackerModule;
    exports.ɵj = MonthPanelComponent;
    exports.ɵk = MonthTableComponent;
    exports.ɵn = DateRangePopupComponent;
    exports.ɵm = InnerPopupComponent;
    exports.ɵi = YearPanelComponent;
    exports.ɵq = NzPickerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-date-picker.umd.js.map