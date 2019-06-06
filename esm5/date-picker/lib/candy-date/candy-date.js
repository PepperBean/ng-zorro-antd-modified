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
import addMonths from 'date-fns/add_months';
import addYears from 'date-fns/add_years';
import endOfMonth from 'date-fns/end_of_month';
import setDay from 'date-fns/set_day';
import setMonth from 'date-fns/set_month';
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
 */
CandyDate = /** @class */ (function () {
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
        if (date === void 0) { date = this; }
        return date instanceof CandyDate ? date.nativeDate : date;
    };
    return CandyDate;
}());
/**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
export { CandyDate };
if (false) {
    /** @type {?} */
    CandyDate.prototype.nativeDate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuZHktZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY2FuZHktZGF0ZS9jYW5keS1kYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxTQUFTLE1BQU0scUJBQXFCLENBQUM7QUFDNUMsT0FBTyxRQUFRLE1BQU0sb0JBQW9CLENBQUM7QUFDMUMsT0FBTyxVQUFVLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxNQUFNLE1BQU0sa0JBQWtCLENBQUM7QUFDdEMsT0FBTyxRQUFRLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7QUFTMUM7Ozs7Ozs7SUFFRSxnREFBZ0Q7SUFFaEQsbUJBQVksSUFBb0I7UUFDOUIsc0NBQXNDO1FBQ3RDLGdDQUFnQztRQUNoQyxJQUFJO1FBRUosSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLElBQUksWUFBWSxJQUFJLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQ3hCO2lCQUFNLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2xDO2lCQUFNO2dCQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsK0VBQStFLENBQUMsQ0FBQzthQUNsRztTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QixJQUFJO0lBRUoseUNBQXlDO0lBQ3pDLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsSUFBSTtJQUVKLHdFQUF3RTtJQUN4RSxxQkFBcUI7SUFDckIsd0VBQXdFOzs7Ozs7Ozs7Ozs7OztJQUV4RSwyQkFBTzs7Ozs7Ozs7Ozs7Ozs7SUFBUDtRQUNFLE9B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QUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRTs0QkFDcEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFDbkMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxDQUFDLFdBQVcsRUFBRTs0QkFDekMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUU7NEJBQ3BDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFOzRCQUNsQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUNyQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLENBQUMsV0FBVyxFQUFFOzRCQUN6QyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRTs0QkFDcEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEtBQUssQ0FBQyxPQUFPLEVBQUU7NEJBQ2xDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxLQUFLLENBQUMsUUFBUSxFQUFFOzRCQUNwQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO3dCQUN6QyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLENBQUMsV0FBVyxFQUFFOzRCQUN6QyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRTs0QkFDcEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEtBQUssQ0FBQyxPQUFPLEVBQUU7NEJBQ2xDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxLQUFLLENBQUMsUUFBUSxFQUFFOzRCQUNwQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssS0FBSyxDQUFDLFVBQVUsRUFBRTs0QkFDeEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUMx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QyxJQUFJLElBQUksRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCw2QkFBUzs7O0lBQVQ7UUFDRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7O0lBRU8sZ0NBQVk7Ozs7O0lBQXBCLFVBQXFCLElBQTZCO1FBQTdCLHFCQUFBLEVBQUEsV0FBNkI7UUFDaEQsT0FBTyxJQUFJLFlBQVksU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDNUQsQ0FBQztJQVFILGdCQUFDO0FBQUQsQ0FBQyxBQS9WRCxJQStWQzs7Ozs7Ozs7OztJQTlWQywrQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCBhZGRNb250aHMgZnJvbSAnZGF0ZS1mbnMvYWRkX21vbnRocyc7XHJcbmltcG9ydCBhZGRZZWFycyBmcm9tICdkYXRlLWZucy9hZGRfeWVhcnMnO1xyXG5pbXBvcnQgZW5kT2ZNb250aCBmcm9tICdkYXRlLWZucy9lbmRfb2ZfbW9udGgnO1xyXG5pbXBvcnQgc2V0RGF5IGZyb20gJ2RhdGUtZm5zL3NldF9kYXknO1xyXG5pbXBvcnQgc2V0TW9udGggZnJvbSAnZGF0ZS1mbnMvc2V0X21vbnRoJztcclxuaW1wb3J0IHsgSW5kZXhhYmxlT2JqZWN0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBXcmFwcGluZyBraW5kIEFQSXMgZm9yIGRhdGUgb3BlcmF0aW5nIGFuZCB1bmlmeVxyXG4gKiBOT1RFOiBldmVyeSBuZXcgQVBJIHJldHVybiBuZXcgQ2FuZHlEYXRlIG9iamVjdCB3aXRob3V0IHNpZGUgZWZmZWN0cyB0byB0aGUgZm9ybWVyIERhdGUgb2JqZWN0XHJcbiAqIE5PVEU6IG1vc3QgQVBJcyBhcmUgYmFzZWQgb24gbG9jYWwgdGltZSBvdGhlciB0aGFuIGN1c3RvbWl6ZWQgbG9jYWxlIGlkICh0aGlzIG5lZWRzIHRvYmUgc3VwcG9ydCBpbiBmdXR1cmUpXHJcbiAqIFRPRE86IHN1cHBvcnQgZm9ybWF0KCkgYWdhaW5zdCB0byBhbmd1bGFyJ3MgY29yZSBBUElcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDYW5keURhdGUgaW1wbGVtZW50cyBJbmRleGFibGVPYmplY3Qge1xyXG4gIG5hdGl2ZURhdGU6IERhdGU7XHJcbiAgLy8gbG9jYWxlOiBzdHJpbmc7IC8vIEN1c3RvbSBzcGVjaWZpZWQgbG9jYWxlIElEXHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGU/OiBEYXRlIHwgc3RyaW5nKSB7XHJcbiAgICAvLyBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ2FuZHlEYXRlKSkge1xyXG4gICAgLy8gICByZXR1cm4gbmV3IENhbmR5RGF0ZShkYXRlKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBpZiAoZGF0ZSkge1xyXG4gICAgICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICB0aGlzLm5hdGl2ZURhdGUgPSBkYXRlO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHRoaXMubmF0aXZlRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGlucHV0IGRhdGUgdHlwZSBpcyBub3Qgc3VwcG9ydGVkIChcIkRhdGVcIiBhbmQgXCJzdHJpbmdcIiBpcyBub3cgcmVjb21tZW5kZWQpJyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubmF0aXZlRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBnZXRMb2NhbGUoKTogc3RyaW5nIHtcclxuICAvLyAgIHJldHVybiB0aGlzLmxvY2FsZTtcclxuICAvLyB9XHJcblxyXG4gIC8vIHNldExvY2FsZShsb2NhbGU6IHN0cmluZyk6IENhbmR5RGF0ZSB7XHJcbiAgLy8gICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcclxuICAvLyAgIHJldHVybiB0aGlzO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgLy8gfCBOYXRpdmUgc2hvcnRjdXRzXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIGdldFllYXIoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcclxuICB9XHJcblxyXG4gIGdldE1vbnRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldE1vbnRoKCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXkoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0RGF5KCk7XHJcbiAgfVxyXG5cclxuICBnZXRUaW1lKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldFRpbWUoKTtcclxuICB9XHJcblxyXG4gIGdldERhdGUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0RGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SG91cnMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0SG91cnMoKTtcclxuICB9XHJcblxyXG4gIGdldE1pbnV0ZXMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0TWludXRlcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2Vjb25kcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRNaWxsaXNlY29uZHMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvLyB8IE5ldyBpbXBsZW1lbnRpbmcgQVBJc1xyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICBjbG9uZSgpOiBDYW5keURhdGUge1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUobmV3IERhdGUodGhpcy5uYXRpdmVEYXRlKSk7XHJcbiAgfVxyXG5cclxuICBzZXRIbXMoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlciwgc2Vjb25kOiBudW1iZXIpOiBDYW5keURhdGUge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMubmF0aXZlRGF0ZSk7XHJcbiAgICBkYXRlLnNldEhvdXJzKGhvdXIsIG1pbnV0ZSwgc2Vjb25kKTtcclxuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgc2V0WWVhcih5ZWFyOiBudW1iZXIpOiBDYW5keURhdGUge1xyXG4gICAgLy8gcmV0dXJuIG5ldyBDYW5keURhdGUoc2V0WWVhcih0aGlzLmRhdGUsIHllYXIpKTtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLm5hdGl2ZURhdGUpO1xyXG4gICAgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcclxuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgYWRkWWVhcnMoYW1vdW50OiBudW1iZXIpOiBDYW5keURhdGUge1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoYWRkWWVhcnModGhpcy5uYXRpdmVEYXRlLCBhbW91bnQpKTtcclxuICB9XHJcblxyXG4gIC8vIE5PVEU6IG1vbnRoIHN0YXJ0cyBmcm9tIDBcclxuICAvLyBOT1RFOiBEb24ndCB1c2UgdGhlIG5hdGl2ZSBBUEkgZm9yIG1vbnRoIG1hbmlwdWxhdGlvbiBhcyBpdCBub3QgcmVzdHJpY3QgdGhlIGRhdGUgd2hlbiBpdCBvdmVyZmxvd3MsIGVnLiAobmV3IERhdGUoJzIwMTgtNy0zMScpKS5zZXRNb250aCgxKSB3aWxsIGJlIGRhdGUgb2YgMjAxOC0zLTAzIGluc3RlYWQgb2YgMjAxOC0yLTI4XHJcbiAgc2V0TW9udGgobW9udGg6IG51bWJlcik6IENhbmR5RGF0ZSB7XHJcbiAgICAvLyBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5uYXRpdmVEYXRlKTtcclxuICAgIC8vIGRhdGUuc2V0TW9udGgobW9udGgpO1xyXG4gICAgLy8gcmV0dXJuIG5ldyBDYW5keURhdGUoZGF0ZSk7XHJcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShzZXRNb250aCh0aGlzLm5hdGl2ZURhdGUsIG1vbnRoKSk7XHJcbiAgfVxyXG5cclxuICBhZGRNb250aHMoYW1vdW50OiBudW1iZXIpOiBDYW5keURhdGUge1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoYWRkTW9udGhzKHRoaXMubmF0aXZlRGF0ZSwgYW1vdW50KSk7XHJcbiAgfVxyXG5cclxuICBzZXREYXkoZGF5OiBudW1iZXIsIG9wdGlvbnM/OiB7IHdlZWtTdGFydHNPbjogbnVtYmVyIH0pOiBDYW5keURhdGUge1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoc2V0RGF5KHRoaXMubmF0aXZlRGF0ZSwgZGF5LCBvcHRpb25zKSk7XHJcbiAgfVxyXG5cclxuICBzZXREYXRlKGFtb3VudDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLm5hdGl2ZURhdGUpO1xyXG4gICAgZGF0ZS5zZXREYXRlKGFtb3VudCk7XHJcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShkYXRlKTtcclxuICB9XHJcblxyXG4gIGFkZERheXMoYW1vdW50OiBudW1iZXIpOiBDYW5keURhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0RGF0ZSh0aGlzLmdldERhdGUoKSArIGFtb3VudCk7XHJcbiAgfVxyXG5cclxuICBlbmRPZihncmFpbjogJ21vbnRoJyk6IENhbmR5RGF0ZSB8IG51bGwge1xyXG4gICAgc3dpdGNoIChncmFpbikge1xyXG4gICAgICBjYXNlICdtb250aCc6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDYW5keURhdGUoZW5kT2ZNb250aCh0aGlzLm5hdGl2ZURhdGUpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgaXNTYW1lKGRhdGU6IENhbmR5RGF0ZSB8IERhdGUsIGdyYWluOiBDYW5keURhdGVDb21wYXJlR3JhaW4pOiBib29sZWFuIHtcclxuICAgIC8vIFRPRE86IFByZWNpcGl0YXRlIGludG8gYSBmdW5jdGlvbiBcImNvbXBhcmUoKVwiXHJcbiAgICBpZiAoZGF0ZSkge1xyXG4gICAgICBjb25zdCBsZWZ0ID0gdGhpcy50b05hdGl2ZURhdGUoKTtcclxuICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnRvTmF0aXZlRGF0ZShkYXRlKTtcclxuICAgICAgc3dpdGNoIChncmFpbikge1xyXG4gICAgICAgIGNhc2UgJ3llYXInOlxyXG4gICAgICAgICAgcmV0dXJuIGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBjYXNlICdtb250aCc6XHJcbiAgICAgICAgICByZXR1cm4gbGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKTtcclxuICAgICAgICBjYXNlICdkYXknOlxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgbGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmXHJcbiAgICAgICAgICAgIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJlxyXG4gICAgICAgICAgICBsZWZ0LmdldERhdGUoKSA9PT0gcmlnaHQuZ2V0RGF0ZSgpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ2hvdXInOlxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgbGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmXHJcbiAgICAgICAgICAgIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJlxyXG4gICAgICAgICAgICBsZWZ0LmdldERhdGUoKSA9PT0gcmlnaHQuZ2V0RGF0ZSgpICYmXHJcbiAgICAgICAgICAgIGxlZnQuZ2V0SG91cnMoKSA9PT0gcmlnaHQuZ2V0SG91cnMoKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdtaW51dGUnOlxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgbGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmXHJcbiAgICAgICAgICAgIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJlxyXG4gICAgICAgICAgICBsZWZ0LmdldERhdGUoKSA9PT0gcmlnaHQuZ2V0RGF0ZSgpICYmXHJcbiAgICAgICAgICAgIGxlZnQuZ2V0SG91cnMoKSA9PT0gcmlnaHQuZ2V0SG91cnMoKSAmJlxyXG4gICAgICAgICAgICBsZWZ0LmdldE1pbnV0ZXMoKSA9PT0gcmlnaHQuZ2V0TWludXRlcygpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ3NlY29uZCc6XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcclxuICAgICAgICAgICAgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmXHJcbiAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiZcclxuICAgICAgICAgICAgbGVmdC5nZXRIb3VycygpID09PSByaWdodC5nZXRIb3VycygpICYmXHJcbiAgICAgICAgICAgIGxlZnQuZ2V0TWludXRlcygpID09PSByaWdodC5nZXRNaW51dGVzKCkgJiZcclxuICAgICAgICAgICAgbGVmdC5nZXRTZWNvbmRzKCkgPT09IHJpZ2h0LmdldFNlY29uZHMoKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaXNBZnRlcihkYXRlOiBDYW5keURhdGUgfCBEYXRlIHwgbnVsbCwgZ3JhaW46IENhbmR5RGF0ZUNvbXBhcmVHcmFpbik6IGJvb2xlYW4ge1xyXG4gICAgLy8gVE9ETzogUHJlY2lwaXRhdGUgaW50byBhIGZ1bmN0aW9uIFwiY29tcGFyZSgpXCJcclxuICAgIGlmIChkYXRlKSB7XHJcbiAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLnRvTmF0aXZlRGF0ZSgpO1xyXG4gICAgICBjb25zdCByaWdodCA9IHRoaXMudG9OYXRpdmVEYXRlKGRhdGUpO1xyXG4gICAgICBzd2l0Y2ggKGdyYWluKSB7XHJcbiAgICAgICAgY2FzZSAneWVhcic6XHJcbiAgICAgICAgICByZXR1cm4gbGVmdC5nZXRGdWxsWWVhcigpID4gcmlnaHQuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBjYXNlICdtb250aCc6XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBsZWZ0LmdldEZ1bGxZZWFyKCkgPiByaWdodC5nZXRGdWxsWWVhcigpIHx8XHJcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpID4gcmlnaHQuZ2V0TW9udGgoKSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnZGF5JzpcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGxlZnQuZ2V0RnVsbFllYXIoKSA+IHJpZ2h0LmdldEZ1bGxZZWFyKCkgfHxcclxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPiByaWdodC5nZXRNb250aCgpKSB8fFxyXG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXREYXRlKCkgPiByaWdodC5nZXREYXRlKCkpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ2hvdXInOlxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgbGVmdC5nZXRGdWxsWWVhcigpID4gcmlnaHQuZ2V0RnVsbFllYXIoKSB8fFxyXG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA+IHJpZ2h0LmdldE1vbnRoKCkpIHx8XHJcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldERhdGUoKSA+IHJpZ2h0LmdldERhdGUoKSkgfHxcclxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldEhvdXJzKCkgPiByaWdodC5nZXRIb3VycygpKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdtaW51dGUnOlxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgbGVmdC5nZXRGdWxsWWVhcigpID4gcmlnaHQuZ2V0RnVsbFllYXIoKSB8fFxyXG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA+IHJpZ2h0LmdldE1vbnRoKCkpIHx8XHJcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldERhdGUoKSA+IHJpZ2h0LmdldERhdGUoKSkgfHxcclxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldEhvdXJzKCkgPiByaWdodC5nZXRIb3VycygpKSB8fFxyXG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXREYXRlKCkgPT09IHJpZ2h0LmdldERhdGUoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0SG91cnMoKSA9PT0gcmlnaHQuZ2V0SG91cnMoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TWludXRlcygpID4gcmlnaHQuZ2V0TWludXRlcygpKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdzZWNvbmQnOlxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgbGVmdC5nZXRGdWxsWWVhcigpID4gcmlnaHQuZ2V0RnVsbFllYXIoKSB8fFxyXG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA+IHJpZ2h0LmdldE1vbnRoKCkpIHx8XHJcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldERhdGUoKSA+IHJpZ2h0LmdldERhdGUoKSkgfHxcclxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldEhvdXJzKCkgPiByaWdodC5nZXRIb3VycygpKSB8fFxyXG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXREYXRlKCkgPT09IHJpZ2h0LmdldERhdGUoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0SG91cnMoKSA9PT0gcmlnaHQuZ2V0SG91cnMoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TWludXRlcygpID4gcmlnaHQuZ2V0TWludXRlcygpKSB8fFxyXG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXREYXRlKCkgPT09IHJpZ2h0LmdldERhdGUoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0SG91cnMoKSA9PT0gcmlnaHQuZ2V0SG91cnMoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TWludXRlcygpID09PSByaWdodC5nZXRNaW51dGVzKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldFNlY29uZHMoKSA+IHJpZ2h0LmdldFNlY29uZHMoKSlcclxuICAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIFRPRE86IFByZWNpcGl0YXRlIGludG8gYSBmdW5jdGlvbiBcImNvbXBhcmUoKVwiXHJcbiAgaXNCZWZvcmUoZGF0ZTogQ2FuZHlEYXRlIHwgRGF0ZSB8IG51bGwsIGdyYWluOiBDYW5keURhdGVDb21wYXJlR3JhaW4pOiBib29sZWFuIHtcclxuICAgIGlmIChkYXRlKSB7XHJcbiAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLnRvTmF0aXZlRGF0ZSgpO1xyXG4gICAgICBjb25zdCByaWdodCA9IHRoaXMudG9OYXRpdmVEYXRlKGRhdGUpO1xyXG4gICAgICBzd2l0Y2ggKGdyYWluKSB7XHJcbiAgICAgICAgY2FzZSAneWVhcic6XHJcbiAgICAgICAgICByZXR1cm4gbGVmdC5nZXRGdWxsWWVhcigpIDwgcmlnaHQuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBjYXNlICdtb250aCc6XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBsZWZ0LmdldEZ1bGxZZWFyKCkgPCByaWdodC5nZXRGdWxsWWVhcigpIHx8XHJcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpIDwgcmlnaHQuZ2V0TW9udGgoKSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnZGF5JzpcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGxlZnQuZ2V0RnVsbFllYXIoKSA8IHJpZ2h0LmdldEZ1bGxZZWFyKCkgfHxcclxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPCByaWdodC5nZXRNb250aCgpKSB8fFxyXG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXREYXRlKCkgPCByaWdodC5nZXREYXRlKCkpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ2hvdXInOlxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgbGVmdC5nZXRGdWxsWWVhcigpIDwgcmlnaHQuZ2V0RnVsbFllYXIoKSB8fFxyXG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA8IHJpZ2h0LmdldE1vbnRoKCkpIHx8XHJcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldERhdGUoKSA8IHJpZ2h0LmdldERhdGUoKSkgfHxcclxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldEhvdXJzKCkgPCByaWdodC5nZXRIb3VycygpKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdtaW51dGUnOlxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgbGVmdC5nZXRGdWxsWWVhcigpIDwgcmlnaHQuZ2V0RnVsbFllYXIoKSB8fFxyXG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA8IHJpZ2h0LmdldE1vbnRoKCkpIHx8XHJcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldERhdGUoKSA8IHJpZ2h0LmdldERhdGUoKSkgfHxcclxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldEhvdXJzKCkgPCByaWdodC5nZXRIb3VycygpKSB8fFxyXG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXREYXRlKCkgPT09IHJpZ2h0LmdldERhdGUoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0SG91cnMoKSA9PT0gcmlnaHQuZ2V0SG91cnMoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TWludXRlcygpIDwgcmlnaHQuZ2V0TWludXRlcygpKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdzZWNvbmQnOlxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgbGVmdC5nZXRGdWxsWWVhcigpIDwgcmlnaHQuZ2V0RnVsbFllYXIoKSB8fFxyXG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA8IHJpZ2h0LmdldE1vbnRoKCkpIHx8XHJcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldERhdGUoKSA8IHJpZ2h0LmdldERhdGUoKSkgfHxcclxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldEhvdXJzKCkgPCByaWdodC5nZXRIb3VycygpKSB8fFxyXG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXREYXRlKCkgPT09IHJpZ2h0LmdldERhdGUoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0SG91cnMoKSA9PT0gcmlnaHQuZ2V0SG91cnMoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TWludXRlcygpIDwgcmlnaHQuZ2V0TWludXRlcygpKSB8fFxyXG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXREYXRlKCkgPT09IHJpZ2h0LmdldERhdGUoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0SG91cnMoKSA9PT0gcmlnaHQuZ2V0SG91cnMoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TWludXRlcygpID09PSByaWdodC5nZXRNaW51dGVzKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldFNlY29uZHMoKSA8IHJpZ2h0LmdldFNlY29uZHMoKSlcclxuICAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIEVxdWFsIHRvIHRvZGF5IGFjY3VyYXRlIHRvIFwiZGF5XCJcclxuICBpc1RvZGF5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lKG5ldyBEYXRlKCksICdkYXknKTtcclxuICB9XHJcblxyXG4gIGlzSW52YWxpZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpc05hTih0aGlzLm5hdGl2ZURhdGUudmFsdWVPZigpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9OYXRpdmVEYXRlKGRhdGU6IENhbmR5RGF0ZSB8IERhdGUgPSB0aGlzKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gZGF0ZSBpbnN0YW5jZW9mIENhbmR5RGF0ZSA/IGRhdGUubmF0aXZlRGF0ZSA6IGRhdGU7XHJcbiAgfVxyXG5cclxuICAvLyBjb21wYXJlKGRhdGU6IENhbmR5RGF0ZSwgRGF0ZSwgZ3JhaW46IENhbmR5RGF0ZUNvbXBhcmVHcmFpbiA9ICdtaWxsaXNlY29uZCcpOiBudW1iZXIge1xyXG4gIC8vICAgY29uc3QgbGV2ZWwgPSB7ICdtaWxsaXNlY29uZCc6IDEsICdzZWNvbmQnOiAxMDAwLCAnbWludXRlJzogMTAwMCAqIDYwLCAnaG91cic6IDEwMDAgKiA2MCAqIDYwLCAnZGF5JzogMTAwMCAqIDYwICogNjAgKiAyNCB9WyBncmFpbiBdO1xyXG4gIC8vICAgY29uc3QgbGVmdCA9IHRoaXMubmF0aXZlRGF0ZS5nZXRUaW1lKCkgLyBsZXZlbDtcclxuICAvLyAgIGNvbnN0IHJpZ2h0ID0gKGRhdGUgaW5zdGFuY2VvZiBDYW5keURhdGUgPyBkYXRlLm5hdGl2ZURhdGUgOiBkYXRlKS5nZXRUaW1lKCkgLyBsZXZlbDtcclxuICAvLyAgIHJldHVybiBNYXRoLmZsb29yKGxlZnQpIC0gTWF0aC5mbG9vcihyaWdodCk7XHJcbiAgLy8gfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDYW5keURhdGVDb21wYXJlR3JhaW4gPSAneWVhcicgfCAnbW9udGgnIHwgJ2RheScgfCAnaG91cicgfCAnbWludXRlJyB8ICdzZWNvbmQnO1xyXG5cclxuZXhwb3J0IHR5cGUgQ2FuZHlEYXRlQ29tcGFyZVR5cGUgPSAnZXEnIHwgJ2d0JyB8ICdsdCc7XHJcbiJdfQ==