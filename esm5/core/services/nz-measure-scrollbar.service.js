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
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { isNotNil } from '../util/check';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var NzMeasureScrollbarService = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function NzMeasureScrollbarService(document) {
        this.document = document;
        this.scrollbarMeasure = {
            position: 'absolute',
            top: '-9999px',
            width: '50px',
            height: '50px',
            overflow: 'scroll'
        };
        this.initScrollBarWidth();
    }
    Object.defineProperty(NzMeasureScrollbarService.prototype, "scrollBarWidth", {
        get: /**
         * @return {?}
         */
        function () {
            if (isNotNil(this._scrollbarWidth)) {
                return this._scrollbarWidth;
            }
            this.initScrollBarWidth();
            return this._scrollbarWidth;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzMeasureScrollbarService.prototype.initScrollBarWidth = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollDiv = this.document.createElement('div');
        for (var scrollProp in this.scrollbarMeasure) {
            if (this.scrollbarMeasure.hasOwnProperty(scrollProp)) {
                scrollDiv.style[scrollProp] = this.scrollbarMeasure[scrollProp];
            }
        }
        this.document.body.appendChild(scrollDiv);
        /** @type {?} */
        var width = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.document.body.removeChild(scrollDiv);
        this._scrollbarWidth = width;
    };
    NzMeasureScrollbarService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzMeasureScrollbarService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ NzMeasureScrollbarService.ngInjectableDef = i0.defineInjectable({ factory: function NzMeasureScrollbarService_Factory() { return new NzMeasureScrollbarService(i0.inject(i1.DOCUMENT)); }, token: NzMeasureScrollbarService, providedIn: "root" });
    return NzMeasureScrollbarService;
}());
export { NzMeasureScrollbarService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzMeasureScrollbarService.prototype._scrollbarWidth;
    /**
     * @type {?}
     * @private
     */
    NzMeasureScrollbarService.prototype.scrollbarMeasure;
    /**
     * @type {?}
     * @private
     */
    NzMeasureScrollbarService.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVhc3VyZS1zY3JvbGxiYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL256LW1lYXN1cmUtc2Nyb2xsYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBRXpDO0lBa0NFLGtDQUFrQztJQUNsQyxtQ0FBc0MsUUFBYTtRQUFiLGFBQVEsR0FBUixRQUFRLENBQUs7UUE5QjNDLHFCQUFnQixHQUFvQjtZQUMxQyxRQUFRLEVBQUUsVUFBVTtZQUNwQixHQUFHLEVBQUUsU0FBUztZQUNkLEtBQUssRUFBRSxNQUFNO1lBQ2IsTUFBTSxFQUFFLE1BQU07WUFDZCxRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDO1FBeUJBLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUF4QkQsc0JBQUkscURBQWM7Ozs7UUFBbEI7WUFDRSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQ2xDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQzthQUM3QjtZQUNELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzFCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTs7OztJQUVELHNEQUFrQjs7O0lBQWxCOztZQUNRLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDcEQsS0FBSyxJQUFNLFVBQVUsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDOUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNwRCxTQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNqRTtTQUNGO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztZQUNwQyxLQUFLLEdBQUcsU0FBUyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsV0FBVztRQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQzs7Z0JBaENGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0RBaUNjLE1BQU0sU0FBQyxRQUFROzs7b0NBaEQ5QjtDQW1EQyxBQXRDRCxJQXNDQztTQW5DWSx5QkFBeUI7Ozs7OztJQUNwQyxvREFBZ0M7Ozs7O0lBQ2hDLHFEQU1FOzs7OztJQXdCVSw2Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEluZGV4YWJsZU9iamVjdCB9IGZyb20gJy4uL3R5cGVzL2luZGV4YWJsZSc7XHJcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vdXRpbC9jaGVjayc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek1lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlIHtcclxuICBwcml2YXRlIF9zY3JvbGxiYXJXaWR0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgc2Nyb2xsYmFyTWVhc3VyZTogSW5kZXhhYmxlT2JqZWN0ID0ge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6ICctOTk5OXB4JyxcclxuICAgIHdpZHRoOiAnNTBweCcsXHJcbiAgICBoZWlnaHQ6ICc1MHB4JyxcclxuICAgIG92ZXJmbG93OiAnc2Nyb2xsJ1xyXG4gIH07XHJcblxyXG4gIGdldCBzY3JvbGxCYXJXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgaWYgKGlzTm90TmlsKHRoaXMuX3Njcm9sbGJhcldpZHRoKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fc2Nyb2xsYmFyV2lkdGg7XHJcbiAgICB9XHJcbiAgICB0aGlzLmluaXRTY3JvbGxCYXJXaWR0aCgpO1xyXG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbGJhcldpZHRoO1xyXG4gIH1cclxuXHJcbiAgaW5pdFNjcm9sbEJhcldpZHRoKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2Nyb2xsRGl2ID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvciAoY29uc3Qgc2Nyb2xsUHJvcCBpbiB0aGlzLnNjcm9sbGJhck1lYXN1cmUpIHtcclxuICAgICAgaWYgKHRoaXMuc2Nyb2xsYmFyTWVhc3VyZS5oYXNPd25Qcm9wZXJ0eShzY3JvbGxQcm9wKSkge1xyXG4gICAgICAgIHNjcm9sbERpdi5zdHlsZVtzY3JvbGxQcm9wXSA9IHRoaXMuc2Nyb2xsYmFyTWVhc3VyZVtzY3JvbGxQcm9wXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XHJcbiAgICBjb25zdCB3aWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcclxuICAgIHRoaXMuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xyXG4gICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggPSB3aWR0aDtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHtcclxuICAgIHRoaXMuaW5pdFNjcm9sbEJhcldpZHRoKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==