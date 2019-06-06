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
import { Inject, Injectable, InjectionToken, Optional, SkipSelf } from '@angular/core';
/** @type {?} */
export const NZ_LOGGER_STATE = new InjectionToken('nz-logger-state');
// Whether print the log
export class LoggerService {
    /**
     * @param {?} _loggerState
     */
    constructor(_loggerState) {
        this._loggerState = _loggerState;
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    log(...args) {
        if (this._loggerState) {
            console.log(...args);
        }
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    warn(...args) {
        if (this._loggerState) {
            console.warn(...args);
        }
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    error(...args) {
        if (this._loggerState) {
            console.error(...args);
        }
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    info(...args) {
        if (this._loggerState) {
            console.log(...args);
        }
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    debug(...args) {
        if (this._loggerState) {
            console.log('[NG-ZORRO-DEBUG]', ...args);
        }
    }
}
LoggerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LoggerService.ctorParameters = () => [
    { type: Boolean, decorators: [{ type: Inject, args: [NZ_LOGGER_STATE,] }] }
];
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
export const LOGGER_SERVICE_PROVIDER = {
    provide: LoggerService,
    useFactory: LOGGER_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), LoggerService], NZ_LOGGER_STATE]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJsb2dnZXIvbG9nZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFZLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFakcsTUFBTSxPQUFPLGVBQWUsR0FBRyxJQUFJLGNBQWMsQ0FBVSxpQkFBaUIsQ0FBQzs7QUFHN0UsTUFBTSxPQUFPLGFBQWE7Ozs7SUFDeEIsWUFBNkMsWUFBcUI7UUFBckIsaUJBQVksR0FBWixZQUFZLENBQVM7SUFBRyxDQUFDOzs7Ozs7SUFHdEUsR0FBRyxDQUFDLEdBQUcsSUFBVztRQUNoQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7Ozs7O0lBR0QsSUFBSSxDQUFDLEdBQUcsSUFBVztRQUNqQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7Ozs7O0lBR0QsS0FBSyxDQUFDLEdBQUcsSUFBVztRQUNsQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7Ozs7O0lBR0QsSUFBSSxDQUFDLEdBQUcsSUFBVztRQUNqQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7Ozs7O0lBR0QsS0FBSyxDQUFDLEdBQUcsSUFBVztRQUNsQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQzFDO0lBQ0gsQ0FBQzs7O1lBckNGLFVBQVU7Ozs7MENBRUksTUFBTSxTQUFDLGVBQWU7Ozs7Ozs7SUFBdkIscUNBQXNEOzs7Ozs7O0FBc0NwRSxNQUFNLFVBQVUsK0JBQStCLENBQUMsS0FBb0IsRUFBRSxXQUFvQjtJQUN4RixPQUFPLEtBQUssSUFBSSxJQUFJLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNqRCxDQUFDOztBQUVELE1BQU0sT0FBTyx1QkFBdUIsR0FBYTtJQUMvQyxPQUFPLEVBQUUsYUFBYTtJQUN0QixVQUFVLEVBQUUsK0JBQStCO0lBQzNDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFFLGVBQWUsQ0FBQztDQUN6RSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIFByb3ZpZGVyLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5aX0xPR0dFUl9TVEFURSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxib29sZWFuPignbnotbG9nZ2VyLXN0YXRlJyk7IC8vIFdoZXRoZXIgcHJpbnQgdGhlIGxvZ1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9nZ2VyU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChOWl9MT0dHRVJfU1RBVEUpIHByaXZhdGUgX2xvZ2dlclN0YXRlOiBib29sZWFuKSB7fVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgbG9nKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fbG9nZ2VyU3RhdGUpIHtcclxuICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgd2FybiguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2xvZ2dlclN0YXRlKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBlcnJvciguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2xvZ2dlclN0YXRlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoLi4uYXJncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgaW5mbyguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2xvZ2dlclN0YXRlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGRlYnVnKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fbG9nZ2VyU3RhdGUpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1tORy1aT1JSTy1ERUJVR10nLCAuLi5hcmdzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMT0dHRVJfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZKGV4aXN0OiBMb2dnZXJTZXJ2aWNlLCBsb2dnZXJTdGF0ZTogYm9vbGVhbik6IExvZ2dlclNlcnZpY2Uge1xyXG4gIHJldHVybiBleGlzdCB8fCBuZXcgTG9nZ2VyU2VydmljZShsb2dnZXJTdGF0ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMT0dHRVJfU0VSVklDRV9QUk9WSURFUjogUHJvdmlkZXIgPSB7XHJcbiAgcHJvdmlkZTogTG9nZ2VyU2VydmljZSxcclxuICB1c2VGYWN0b3J5OiBMT0dHRVJfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZLFxyXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBMb2dnZXJTZXJ2aWNlXSwgTlpfTE9HR0VSX1NUQVRFXVxyXG59O1xyXG4iXX0=