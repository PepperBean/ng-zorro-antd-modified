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
import { Pipe } from '@angular/core';
var CssUnitPipe = /** @class */ (function () {
    function CssUnitPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} defaultUnit
     * @return {?}
     */
    CssUnitPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} defaultUnit
     * @return {?}
     */
    function (value, defaultUnit) {
        if (defaultUnit === void 0) { defaultUnit = 'px'; }
        /** @type {?} */
        var formatted = +value;
        return isNaN(formatted) ? "" + value : "" + formatted + defaultUnit;
    };
    CssUnitPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'toCssUnit'
                },] }
    ];
    return CssUnitPipe;
}());
export { CssUnitPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NzLXVuaXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbW9kYWwvIiwic291cmNlcyI6WyJjc3MtdW5pdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFcEQ7SUFBQTtJQVFBLENBQUM7Ozs7OztJQUpDLCtCQUFTOzs7OztJQUFULFVBQVUsS0FBc0IsRUFBRSxXQUEwQjtRQUExQiw0QkFBQSxFQUFBLGtCQUEwQjs7WUFDcEQsU0FBUyxHQUFHLENBQUMsS0FBSztRQUN4QixPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBRyxLQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUcsU0FBUyxHQUFHLFdBQWEsQ0FBQztJQUN0RSxDQUFDOztnQkFQRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFdBQVc7aUJBQ2xCOztJQU1ELGtCQUFDO0NBQUEsQUFSRCxJQVFDO1NBTFksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICd0b0Nzc1VuaXQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDc3NVbml0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBkZWZhdWx0VW5pdDogc3RyaW5nID0gJ3B4Jyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBmb3JtYXR0ZWQgPSArdmFsdWU7IC8vIGZvcmNlIGNvbnZlcnRcclxuICAgIHJldHVybiBpc05hTihmb3JtYXR0ZWQpID8gYCR7dmFsdWV9YCA6IGAke2Zvcm1hdHRlZH0ke2RlZmF1bHRVbml0fWA7XHJcbiAgfVxyXG59XHJcbiJdfQ==