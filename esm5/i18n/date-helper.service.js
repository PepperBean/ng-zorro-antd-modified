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
import { formatDate } from '@angular/common';
import { Inject, Injectable, Injector, Optional } from '@angular/core';
import fnsFormat from 'date-fns/format';
import fnsGetISOWeek from 'date-fns/get_iso_week';
import fnsParse from 'date-fns/parse';
import { mergeDateConfig, NZ_DATE_CONFIG } from './date-config';
import { NzI18nService } from './nz-i18n.service';
import * as i0 from "@angular/core";
import * as i1 from "./date-config";
/**
 * @param {?} injector
 * @param {?} config
 * @return {?}
 */
export function DATE_HELPER_SERVICE_FACTORY(injector, config) {
    /** @type {?} */
    var i18n = injector.get(NzI18nService);
    return i18n.getDateLocale() ? new DateHelperByDateFns(i18n, config) : new DateHelperByDatePipe(i18n, config);
}
/**
 * Abstract DateHelperService(Token via Class)
 * Compatibility: compact for original usage by default which using DatePipe
 * @abstract
 */
var DateHelperService = /** @class */ (function () {
    function DateHelperService(i18n, config) {
        this.i18n = i18n;
        this.config = config;
        this.relyOnDatePipe = this instanceof DateHelperByDatePipe; // Indicate whether this service is rely on DatePipe
        this.config = mergeDateConfig(this.config);
    }
    /**
     * @param {?} text
     * @return {?}
     */
    DateHelperService.prototype.parseDate = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        if (!text) {
            return;
        }
        return fnsParse(text);
    };
    /**
     * @param {?} text
     * @return {?}
     */
    DateHelperService.prototype.parseTime = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        if (!text) {
            return;
        }
        return fnsParse("1970-01-01 " + text);
    };
    DateHelperService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                    useFactory: DATE_HELPER_SERVICE_FACTORY,
                    deps: [Injector, [new Optional(), NZ_DATE_CONFIG]]
                },] }
    ];
    /** @nocollapse */
    DateHelperService.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_CONFIG,] }] }
    ]; };
    /** @nocollapse */ DateHelperService.ngInjectableDef = i0.defineInjectable({ factory: function DateHelperService_Factory() { return DATE_HELPER_SERVICE_FACTORY(i0.inject(i0.INJECTOR), i0.inject(i1.NZ_DATE_CONFIG, 8)); }, token: DateHelperService, providedIn: "root" });
    return DateHelperService;
}());
export { DateHelperService };
if (false) {
    /** @type {?} */
    DateHelperService.prototype.relyOnDatePipe;
    /**
     * @type {?}
     * @protected
     */
    DateHelperService.prototype.i18n;
    /**
     * @type {?}
     * @protected
     */
    DateHelperService.prototype.config;
    /**
     * @abstract
     * @param {?} date
     * @return {?}
     */
    DateHelperService.prototype.getISOWeek = function (date) { };
    /**
     * @abstract
     * @return {?}
     */
    DateHelperService.prototype.getFirstDayOfWeek = function () { };
    /**
     * @abstract
     * @param {?} date
     * @param {?} formatStr
     * @return {?}
     */
    DateHelperService.prototype.format = function (date, formatStr) { };
}
/**
 * DateHelper that handles date formats with date-fns
 */
var DateHelperByDateFns = /** @class */ (function (_super) {
    tslib_1.__extends(DateHelperByDateFns, _super);
    function DateHelperByDateFns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    DateHelperByDateFns.prototype.getISOWeek = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return fnsGetISOWeek(date);
    };
    // TODO: Use date-fns's "weekStartsOn" to support different locale when "config.firstDayOfWeek" is null
    // when v2.0 is ready: https://github.com/date-fns/date-fns/blob/v2.0.0-alpha.27/src/locale/en-US/index.js#L23
    // TODO: Use date-fns's "weekStartsOn" to support different locale when "config.firstDayOfWeek" is null
    // when v2.0 is ready: https://github.com/date-fns/date-fns/blob/v2.0.0-alpha.27/src/locale/en-US/index.js#L23
    /**
     * @return {?}
     */
    DateHelperByDateFns.prototype.getFirstDayOfWeek = 
    // TODO: Use date-fns's "weekStartsOn" to support different locale when "config.firstDayOfWeek" is null
    // when v2.0 is ready: https://github.com/date-fns/date-fns/blob/v2.0.0-alpha.27/src/locale/en-US/index.js#L23
    /**
     * @return {?}
     */
    function () {
        return this.config.firstDayOfWeek == null ? 1 : this.config.firstDayOfWeek;
    };
    /**
     * Format a date
     * @see https://date-fns.org/docs/format#description
     * @param date Date
     * @param formatStr format string
     */
    /**
     * Format a date
     * @see https://date-fns.org/docs/format#description
     * @param {?} date Date
     * @param {?} formatStr format string
     * @return {?}
     */
    DateHelperByDateFns.prototype.format = /**
     * Format a date
     * @see https://date-fns.org/docs/format#description
     * @param {?} date Date
     * @param {?} formatStr format string
     * @return {?}
     */
    function (date, formatStr) {
        return fnsFormat(date, formatStr, { locale: this.i18n.getDateLocale() });
    };
    /** @nocollapse */ DateHelperByDateFns.ngInjectableDef = i0.defineInjectable({ factory: function DateHelperByDateFns_Factory() { return DATE_HELPER_SERVICE_FACTORY(i0.inject(i0.INJECTOR), i0.inject(i1.NZ_DATE_CONFIG, 8)); }, token: DateHelperByDateFns, providedIn: "root" });
    return DateHelperByDateFns;
}(DateHelperService));
export { DateHelperByDateFns };
/**
 * DateHelper that handles date formats with angular's date-pipe
 * [BUG] Use DatePipe may cause non-standard week bug, see: https://github.com/NG-ZORRO/ng-zorro-antd/issues/2406
 *
 * @deprecated Maybe removed in next major version due to this serious bug
 */
var DateHelperByDatePipe = /** @class */ (function (_super) {
    tslib_1.__extends(DateHelperByDatePipe, _super);
    function DateHelperByDatePipe(i18n, config) {
        return _super.call(this, i18n, config) || this;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    DateHelperByDatePipe.prototype.getISOWeek = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return +this.format(date, 'w');
    };
    /**
     * @return {?}
     */
    DateHelperByDatePipe.prototype.getFirstDayOfWeek = /**
     * @return {?}
     */
    function () {
        if (this.config.firstDayOfWeek === undefined) {
            /** @type {?} */
            var locale = this.i18n.getLocaleId();
            return locale && ['zh-cn', 'zh-tw'].indexOf(locale.toLowerCase()) > -1 ? 1 : 0;
        }
        return this.config.firstDayOfWeek;
    };
    /**
     * @param {?} date
     * @param {?} formatStr
     * @return {?}
     */
    DateHelperByDatePipe.prototype.format = /**
     * @param {?} date
     * @param {?} formatStr
     * @return {?}
     */
    function (date, formatStr) {
        return date ? (/** @type {?} */ (formatDate(date, formatStr, this.i18n.getLocaleId()))) : '';
    };
    /**
     * Compatible translate the moment-like format pattern to angular's pattern
     * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
     *
     * TODO: compare and complete all format patterns
     * Each format docs as below:
     * @link https://momentjs.com/docs/#/displaying/format/
     * @link https://angular.io/api/common/DatePipe#description
     * @param format input format pattern
     */
    /**
     * Compatible translate the moment-like format pattern to angular's pattern
     * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
     *
     * TODO: compare and complete all format patterns
     * Each format docs as below:
     * @link https://momentjs.com/docs/#/displaying/format/ / https://angular.io/api/common/DatePipe#description
     * @param {?} format input format pattern
     * @return {?}
     */
    DateHelperByDatePipe.prototype.transCompatFormat = /**
     * Compatible translate the moment-like format pattern to angular's pattern
     * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
     *
     * TODO: compare and complete all format patterns
     * Each format docs as below:
     * @link https://momentjs.com/docs/#/displaying/format/ / https://angular.io/api/common/DatePipe#description
     * @param {?} format input format pattern
     * @return {?}
     */
    function (format) {
        return (format &&
            format
                .replace(/Y/g, 'y') // only support y, yy, yyy, yyyy
                .replace(/D/g, 'd')); // d, dd represent of D, DD for momentjs, others are not support
    };
    /** @nocollapse */
    DateHelperByDatePipe.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_CONFIG,] }] }
    ]; };
    /** @nocollapse */ DateHelperByDatePipe.ngInjectableDef = i0.defineInjectable({ factory: function DateHelperByDatePipe_Factory() { return DATE_HELPER_SERVICE_FACTORY(i0.inject(i0.INJECTOR), i0.inject(i1.NZ_DATE_CONFIG, 8)); }, token: DateHelperByDatePipe, providedIn: "root" });
    return DateHelperByDatePipe;
}(DateHelperService));
export { DateHelperByDatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1oZWxwZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvaTE4bi8iLCJzb3VyY2VzIjpbImRhdGUtaGVscGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxTQUFTLE1BQU0saUJBQWlCLENBQUM7QUFDeEMsT0FBTyxhQUFhLE1BQU0sdUJBQXVCLENBQUM7QUFDbEQsT0FBTyxRQUFRLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLGVBQWUsRUFBZ0IsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7QUFFbEQsTUFBTSxVQUFVLDJCQUEyQixDQUFDLFFBQWtCLEVBQUUsTUFBb0I7O1FBQzVFLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUN4QyxPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksb0JBQW9CLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQy9HLENBQUM7Ozs7OztBQU1EO0lBUUUsMkJBQXNCLElBQW1CLEVBQWdELE1BQW9CO1FBQXZGLFNBQUksR0FBSixJQUFJLENBQWU7UUFBZ0QsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUY3RyxtQkFBYyxHQUFZLElBQUksWUFBWSxvQkFBb0IsQ0FBQyxDQUFDLG9EQUFvRDtRQUdsSCxJQUFJLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxJQUFJLENB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LENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDM0UsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRzs7Ozs7Ozs7Ozs7SUFDSCxnREFBaUI7Ozs7Ozs7Ozs7SUFBakIsVUFBa0IsTUFBYztRQUM5QixPQUFPLENBQ0wsTUFBTTtZQUNOLE1BQU07aUJBQ0gsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxnQ0FBZ0M7aUJBQ25ELE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQ3RCLENBQUMsQ0FBQyxnRUFBZ0U7SUFDckUsQ0FBQzs7O2dCQS9HTSxhQUFhO2dEQTBFYyxRQUFRLFlBQUksTUFBTSxTQUFDLGNBQWM7OzsrQkF4RnJFO0NBOEhDLEFBdkNELENBQTBDLGlCQUFpQixHQXVDMUQ7U0F2Q1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IGZuc0Zvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xyXG5pbXBvcnQgZm5zR2V0SVNPV2VlayBmcm9tICdkYXRlLWZucy9nZXRfaXNvX3dlZWsnO1xyXG5pbXBvcnQgZm5zUGFyc2UgZnJvbSAnZGF0ZS1mbnMvcGFyc2UnO1xyXG5pbXBvcnQgeyBtZXJnZURhdGVDb25maWcsIE56RGF0ZUNvbmZpZywgTlpfREFURV9DT05GSUcgfSBmcm9tICcuL2RhdGUtY29uZmlnJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJy4vbnotaTE4bi5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEQVRFX0hFTFBFUl9TRVJWSUNFX0ZBQ1RPUlkoaW5qZWN0b3I6IEluamVjdG9yLCBjb25maWc6IE56RGF0ZUNvbmZpZyk6IERhdGVIZWxwZXJTZXJ2aWNlIHtcclxuICBjb25zdCBpMThuID0gaW5qZWN0b3IuZ2V0KE56STE4blNlcnZpY2UpO1xyXG4gIHJldHVybiBpMThuLmdldERhdGVMb2NhbGUoKSA/IG5ldyBEYXRlSGVscGVyQnlEYXRlRm5zKGkxOG4sIGNvbmZpZykgOiBuZXcgRGF0ZUhlbHBlckJ5RGF0ZVBpcGUoaTE4biwgY29uZmlnKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFic3RyYWN0IERhdGVIZWxwZXJTZXJ2aWNlKFRva2VuIHZpYSBDbGFzcylcclxuICogQ29tcGF0aWJpbGl0eTogY29tcGFjdCBmb3Igb3JpZ2luYWwgdXNhZ2UgYnkgZGVmYXVsdCB3aGljaCB1c2luZyBEYXRlUGlwZVxyXG4gKi9cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxuICB1c2VGYWN0b3J5OiBEQVRFX0hFTFBFUl9TRVJWSUNFX0ZBQ1RPUlksXHJcbiAgZGVwczogW0luamVjdG9yLCBbbmV3IE9wdGlvbmFsKCksIE5aX0RBVEVfQ09ORklHXV1cclxufSlcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERhdGVIZWxwZXJTZXJ2aWNlIHtcclxuICByZWx5T25EYXRlUGlwZTogYm9vbGVhbiA9IHRoaXMgaW5zdGFuY2VvZiBEYXRlSGVscGVyQnlEYXRlUGlwZTsgLy8gSW5kaWNhdGUgd2hldGhlciB0aGlzIHNlcnZpY2UgaXMgcmVseSBvbiBEYXRlUGlwZVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaTE4bjogTnpJMThuU2VydmljZSwgQE9wdGlvbmFsKCkgQEluamVjdChOWl9EQVRFX0NPTkZJRykgcHJvdGVjdGVkIGNvbmZpZzogTnpEYXRlQ29uZmlnKSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IG1lcmdlRGF0ZUNvbmZpZyh0aGlzLmNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBhYnN0cmFjdCBnZXRJU09XZWVrKGRhdGU6IERhdGUpOiBudW1iZXI7XHJcbiAgYWJzdHJhY3QgZ2V0Rmlyc3REYXlPZldlZWsoKTogV2Vla0RheUluZGV4O1xyXG4gIGFic3RyYWN0IGZvcm1hdChkYXRlOiBEYXRlLCBmb3JtYXRTdHI6IHN0cmluZyk6IHN0cmluZztcclxuXHJcbiAgcGFyc2VEYXRlKHRleHQ6IHN0cmluZyk6IERhdGUgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKCF0ZXh0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJldHVybiBmbnNQYXJzZSh0ZXh0KTtcclxuICB9XHJcblxyXG4gIHBhcnNlVGltZSh0ZXh0OiBzdHJpbmcpOiBEYXRlIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICghdGV4dCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm5zUGFyc2UoYDE5NzAtMDEtMDEgJHt0ZXh0fWApO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERhdGVIZWxwZXIgdGhhdCBoYW5kbGVzIGRhdGUgZm9ybWF0cyB3aXRoIGRhdGUtZm5zXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRGF0ZUhlbHBlckJ5RGF0ZUZucyBleHRlbmRzIERhdGVIZWxwZXJTZXJ2aWNlIHtcclxuICBnZXRJU09XZWVrKGRhdGU6IERhdGUpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGZuc0dldElTT1dlZWsoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPOiBVc2UgZGF0ZS1mbnMncyBcIndlZWtTdGFydHNPblwiIHRvIHN1cHBvcnQgZGlmZmVyZW50IGxvY2FsZSB3aGVuIFwiY29uZmlnLmZpcnN0RGF5T2ZXZWVrXCIgaXMgbnVsbFxyXG4gIC8vIHdoZW4gdjIuMCBpcyByZWFkeTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvdjIuMC4wLWFscGhhLjI3L3NyYy9sb2NhbGUvZW4tVVMvaW5kZXguanMjTDIzXHJcbiAgZ2V0Rmlyc3REYXlPZldlZWsoKTogMCB8IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZmlyc3REYXlPZldlZWsgPT0gbnVsbCA/IDEgOiB0aGlzLmNvbmZpZy5maXJzdERheU9mV2VlaztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvcm1hdCBhIGRhdGVcclxuICAgKiBAc2VlIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZm9ybWF0I2Rlc2NyaXB0aW9uXHJcbiAgICogQHBhcmFtIGRhdGUgRGF0ZVxyXG4gICAqIEBwYXJhbSBmb3JtYXRTdHIgZm9ybWF0IHN0cmluZ1xyXG4gICAqL1xyXG4gIGZvcm1hdChkYXRlOiBEYXRlLCBmb3JtYXRTdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZm5zRm9ybWF0KGRhdGUsIGZvcm1hdFN0ciwgeyBsb2NhbGU6IHRoaXMuaTE4bi5nZXREYXRlTG9jYWxlKCkgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogRGF0ZUhlbHBlciB0aGF0IGhhbmRsZXMgZGF0ZSBmb3JtYXRzIHdpdGggYW5ndWxhcidzIGRhdGUtcGlwZVxyXG4gKiBbQlVHXSBVc2UgRGF0ZVBpcGUgbWF5IGNhdXNlIG5vbi1zdGFuZGFyZCB3ZWVrIGJ1Zywgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9pc3N1ZXMvMjQwNlxyXG4gKlxyXG4gKiBAZGVwcmVjYXRlZCBNYXliZSByZW1vdmVkIGluIG5leHQgbWFqb3IgdmVyc2lvbiBkdWUgdG8gdGhpcyBzZXJpb3VzIGJ1Z1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERhdGVIZWxwZXJCeURhdGVQaXBlIGV4dGVuZHMgRGF0ZUhlbHBlclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKGkxOG46IE56STE4blNlcnZpY2UsIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfREFURV9DT05GSUcpIGNvbmZpZzogTnpEYXRlQ29uZmlnKSB7XHJcbiAgICBzdXBlcihpMThuLCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SVNPV2VlayhkYXRlOiBEYXRlKTogbnVtYmVyIHtcclxuICAgIHJldHVybiArdGhpcy5mb3JtYXQoZGF0ZSwgJ3cnKTtcclxuICB9XHJcblxyXG4gIGdldEZpcnN0RGF5T2ZXZWVrKCk6IFdlZWtEYXlJbmRleCB7XHJcbiAgICBpZiAodGhpcy5jb25maWcuZmlyc3REYXlPZldlZWsgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zdCBsb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlSWQoKTtcclxuICAgICAgcmV0dXJuIGxvY2FsZSAmJiBbJ3poLWNuJywgJ3poLXR3J10uaW5kZXhPZihsb2NhbGUudG9Mb3dlckNhc2UoKSkgPiAtMSA/IDEgOiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmZpcnN0RGF5T2ZXZWVrO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0KGRhdGU6IERhdGUsIGZvcm1hdFN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBkYXRlID8gZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXRTdHIsIHRoaXMuaTE4bi5nZXRMb2NhbGVJZCgpKSEgOiAnJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbXBhdGlibGUgdHJhbnNsYXRlIHRoZSBtb21lbnQtbGlrZSBmb3JtYXQgcGF0dGVybiB0byBhbmd1bGFyJ3MgcGF0dGVyblxyXG4gICAqIFdoeT8gRm9yIG5vdywgd2UgbmVlZCB0byBzdXBwb3J0IHRoZSBleGlzdGluZyBsYW5ndWFnZSBmb3JtYXRzIGluIEFudEQsIGFuZCBBbnREIHVzZXMgdGhlIGRlZmF1bHQgdGVtcG9yYWwgc3ludGF4LlxyXG4gICAqXHJcbiAgICogVE9ETzogY29tcGFyZSBhbmQgY29tcGxldGUgYWxsIGZvcm1hdCBwYXR0ZXJuc1xyXG4gICAqIEVhY2ggZm9ybWF0IGRvY3MgYXMgYmVsb3c6XHJcbiAgICogQGxpbmsgaHR0cHM6Ly9tb21lbnRqcy5jb20vZG9jcy8jL2Rpc3BsYXlpbmcvZm9ybWF0L1xyXG4gICAqIEBsaW5rIGh0dHBzOi8vYW5ndWxhci5pby9hcGkvY29tbW9uL0RhdGVQaXBlI2Rlc2NyaXB0aW9uXHJcbiAgICogQHBhcmFtIGZvcm1hdCBpbnB1dCBmb3JtYXQgcGF0dGVyblxyXG4gICAqL1xyXG4gIHRyYW5zQ29tcGF0Rm9ybWF0KGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGZvcm1hdCAmJlxyXG4gICAgICBmb3JtYXRcclxuICAgICAgICAucmVwbGFjZSgvWS9nLCAneScpIC8vIG9ubHkgc3VwcG9ydCB5LCB5eSwgeXl5LCB5eXl5XHJcbiAgICAgICAgLnJlcGxhY2UoL0QvZywgJ2QnKVxyXG4gICAgKTsgLy8gZCwgZGQgcmVwcmVzZW50IG9mIEQsIEREIGZvciBtb21lbnRqcywgb3RoZXJzIGFyZSBub3Qgc3VwcG9ydFxyXG4gIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgdHlwZSBXZWVrRGF5SW5kZXggPSAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2O1xyXG4iXX0=