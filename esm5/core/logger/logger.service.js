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
import { Inject, Injectable, InjectionToken, Optional, SkipSelf } from '@angular/core';
/** @type {?} */
export var NZ_LOGGER_STATE = new InjectionToken('nz-logger-state');
// Whether print the log
var LoggerService = /** @class */ (function () {
    function LoggerService(_loggerState) {
        this._loggerState = _loggerState;
    }
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.log = 
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            console.log.apply(console, tslib_1.__spread(args));
        }
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.warn = 
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            console.warn.apply(console, tslib_1.__spread(args));
        }
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.error = 
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            console.error.apply(console, tslib_1.__spread(args));
        }
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.info = 
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            console.log.apply(console, tslib_1.__spread(args));
        }
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.debug = 
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            console.log.apply(console, tslib_1.__spread(['[NG-ZORRO-DEBUG]'], args));
        }
    };
    LoggerService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LoggerService.ctorParameters = function () { return [
        { type: Boolean, decorators: [{ type: Inject, args: [NZ_LOGGER_STATE,] }] }
    ]; };
    return LoggerService;
}());
export { LoggerService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LoggerService.prototype._loggerState;
}
/**
 * @param {?} exist
 * @param {?} loggerState
 * @return {?}
 */
export function LOGGER_SERVICE_PROVIDER_FACTORY(exist, loggerState) {
    return exist || new LoggerService(loggerState);
}
/** @type {?} */
export var LOGGER_SERVICE_PROVIDER = {
    provide: LoggerService,
    useFactory: LOGGER_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), LoggerService], NZ_LOGGER_STATE]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJsb2dnZXIvbG9nZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBWSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRWpHLE1BQU0sS0FBTyxlQUFlLEdBQUcsSUFBSSxjQUFjLENBQVUsaUJBQWlCLENBQUM7O0FBRTdFO0lBRUUsdUJBQTZDLFlBQXFCO1FBQXJCLGlCQUFZLEdBQVosWUFBWSxDQUFTO0lBQUcsQ0FBQztJQUV0RSxrQ0FBa0M7Ozs7OztJQUNsQywyQkFBRzs7Ozs7O0lBQUg7UUFBSSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUNoQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsT0FBTyxDQUFDLEdBQUcsT0FBWCxPQUFPLG1CQUFRLElBQUksR0FBRTtTQUN0QjtJQUNILENBQUM7SUFFRCxrQ0FBa0M7Ozs7OztJQUNsQyw0QkFBSTs7Ozs7O0lBQUo7UUFBSyxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUNqQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsT0FBTyxDQUFDLElBQUksT0FBWixPQUFPLG1CQUFTLElBQUksR0FBRTtTQUN2QjtJQUNILENBQUM7SUFFRCxrQ0FBa0M7Ozs7OztJQUNsQyw2QkFBSzs7Ozs7O0lBQUw7UUFBTSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUNsQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsT0FBTyxDQUFDLEtBQUssT0FBYixPQUFPLG1CQUFVLElBQUksR0FBRTtTQUN4QjtJQUNILENBQUM7SUFFRCxrQ0FBa0M7Ozs7OztJQUNsQyw0QkFBSTs7Ozs7O0lBQUo7UUFBSyxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUNqQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsT0FBTyxDQUFDLEdBQUcsT0FBWCxPQUFPLG1CQUFRLElBQUksR0FBRTtTQUN0QjtJQUNILENBQUM7SUFFRCxrQ0FBa0M7Ozs7OztJQUNsQyw2QkFBSzs7Ozs7O0lBQUw7UUFBTSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUNsQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsT0FBTyxDQUFDLEdBQUcsT0FBWCxPQUFPLG9CQUFLLGtCQUFrQixHQUFLLElBQUksR0FBRTtTQUMxQztJQUNILENBQUM7O2dCQXJDRixVQUFVOzs7OzhDQUVJLE1BQU0sU0FBQyxlQUFlOztJQW9DckMsb0JBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQXJDWSxhQUFhOzs7Ozs7SUFDWixxQ0FBc0Q7Ozs7Ozs7QUFzQ3BFLE1BQU0sVUFBVSwrQkFBK0IsQ0FBQyxLQUFvQixFQUFFLFdBQW9CO0lBQ3hGLE9BQU8sS0FBSyxJQUFJLElBQUksYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2pELENBQUM7O0FBRUQsTUFBTSxLQUFPLHVCQUF1QixHQUFhO0lBQy9DLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFVBQVUsRUFBRSwrQkFBK0I7SUFDM0MsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsYUFBYSxDQUFDLEVBQUUsZUFBZSxDQUFDO0NBQ3pFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgUHJvdmlkZXIsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgY29uc3QgTlpfTE9HR0VSX1NUQVRFID0gbmV3IEluamVjdGlvblRva2VuPGJvb2xlYW4+KCduei1sb2dnZXItc3RhdGUnKTsgLy8gV2hldGhlciBwcmludCB0aGUgbG9nXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2dnZXJTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE5aX0xPR0dFUl9TVEFURSkgcHJpdmF0ZSBfbG9nZ2VyU3RhdGU6IGJvb2xlYW4pIHt9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBsb2coLi4uYXJnczogYW55W10pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9sb2dnZXJTdGF0ZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICB3YXJuKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fbG9nZ2VyU3RhdGUpIHtcclxuICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGVycm9yKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fbG9nZ2VyU3RhdGUpIHtcclxuICAgICAgY29uc29sZS5lcnJvciguLi5hcmdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBpbmZvKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fbG9nZ2VyU3RhdGUpIHtcclxuICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgZGVidWcoLi4uYXJnczogYW55W10pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9sb2dnZXJTdGF0ZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnW05HLVpPUlJPLURFQlVHXScsIC4uLmFyZ3MpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExPR0dFUl9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlkoZXhpc3Q6IExvZ2dlclNlcnZpY2UsIGxvZ2dlclN0YXRlOiBib29sZWFuKTogTG9nZ2VyU2VydmljZSB7XHJcbiAgcmV0dXJuIGV4aXN0IHx8IG5ldyBMb2dnZXJTZXJ2aWNlKGxvZ2dlclN0YXRlKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPR0dFUl9TRVJWSUNFX1BST1ZJREVSOiBQcm92aWRlciA9IHtcclxuICBwcm92aWRlOiBMb2dnZXJTZXJ2aWNlLFxyXG4gIHVzZUZhY3Rvcnk6IExPR0dFUl9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlksXHJcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIExvZ2dlclNlcnZpY2VdLCBOWl9MT0dHRVJfU1RBVEVdXHJcbn07XHJcbiJdfQ==