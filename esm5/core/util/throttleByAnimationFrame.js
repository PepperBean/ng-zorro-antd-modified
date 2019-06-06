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
// tslint:disable:no-any typedef no-invalid-this
import { cancelRequestAnimationFrame, reqAnimFrame } from '../polyfill/request-animation';
/**
 * @param {?} fn
 * @return {?}
 */
export default function throttleByAnimationFrame(fn) {
    /** @type {?} */
    var requestId;
    /** @type {?} */
    var later = (/**
     * @param {?} args
     * @return {?}
     */
    function (args) { return (/**
     * @return {?}
     */
    function () {
        requestId = null;
        fn.apply(void 0, tslib_1.__spread(args));
    }); });
    /** @type {?} */
    var throttled = (/**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (requestId == null) {
            requestId = reqAnimFrame(later(args));
        }
    });
    // tslint:disable-next-line:no-non-null-assertion
    ((/** @type {?} */ (throttled))).cancel = (/**
     * @return {?}
     */
    function () { return cancelRequestAnimationFrame((/** @type {?} */ (requestId))); });
    return throttled;
}
/**
 * @return {?}
 */
export function throttleByAnimationFrameDecorator() {
    return (/**
     * @param {?} target
     * @param {?} key
     * @param {?} descriptor
     * @return {?}
     */
    function (target, key, descriptor) {
        /** @type {?} */
        var fn = descriptor.value;
        /** @type {?} */
        var definingProperty = false;
        return {
            configurable: true,
            get: /**
             * @return {?}
             */
            function () {
                if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
                    return fn;
                }
                /** @type {?} */
                var boundFn = throttleByAnimationFrame(fn.bind(this));
                definingProperty = true;
                Object.defineProperty(this, key, {
                    value: boundFn,
                    configurable: true,
                    writable: true
                });
                definingProperty = false;
                return boundFn;
            }
        };
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbC90aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7QUFFMUYsTUFBTSxDQUFDLE9BQU8sVUFBVSx3QkFBd0IsQ0FBQyxFQUFPOztRQUNsRCxTQUF3Qjs7UUFFdEIsS0FBSzs7OztJQUFHLFVBQUMsSUFBVzs7O0lBQUs7UUFDN0IsU0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLGdDQUFJLElBQUksR0FBRTtJQUNkLENBQUMsSUFBQSxDQUFBOztRQUVLLFNBQVM7Ozs7SUFBRztRQUFDLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQy9CLElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtZQUNyQixTQUFTLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQyxDQUFBO0lBRUQsaURBQWlEO0lBQ2pELENBQUMsbUJBQUEsU0FBUyxFQUFPLENBQUMsQ0FBQyxNQUFNOzs7SUFBRyxjQUFNLE9BQUEsMkJBQTJCLENBQUMsbUJBQUEsU0FBUyxFQUFDLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQSxDQUFDO0lBRTFFLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUM7Ozs7QUFFRCxNQUFNLFVBQVUsaUNBQWlDO0lBQy9DOzs7Ozs7SUFBTyxVQUFTLE1BQVcsRUFBRSxHQUFXLEVBQUUsVUFBZTs7WUFDakQsRUFBRSxHQUFHLFVBQVUsQ0FBQyxLQUFLOztZQUN2QixnQkFBZ0IsR0FBRyxLQUFLO1FBQzVCLE9BQU87WUFDTCxZQUFZLEVBQUUsSUFBSTtZQUNsQixHQUFHOzs7O2dCQUNELElBQUksZ0JBQWdCLElBQUksSUFBSSxLQUFLLE1BQU0sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDN0UsT0FBTyxFQUFFLENBQUM7aUJBQ1g7O29CQUVLLE9BQU8sR0FBRyx3QkFBd0IsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2RCxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtvQkFDL0IsS0FBSyxFQUFFLE9BQU87b0JBQ2QsWUFBWSxFQUFFLElBQUk7b0JBQ2xCLFFBQVEsRUFBRSxJQUFJO2lCQUNmLENBQUMsQ0FBQztnQkFDSCxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLE9BQU8sT0FBTyxDQUFDO1lBQ2pCLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYW55IHR5cGVkZWYgbm8taW52YWxpZC10aGlzXHJcbmltcG9ydCB7IGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSwgcmVxQW5pbUZyYW1lIH0gZnJvbSAnLi4vcG9seWZpbGwvcmVxdWVzdC1hbmltYXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lKGZuOiBhbnkpIHtcclxuICBsZXQgcmVxdWVzdElkOiBudW1iZXIgfCBudWxsO1xyXG5cclxuICBjb25zdCBsYXRlciA9IChhcmdzOiBhbnlbXSkgPT4gKCkgPT4ge1xyXG4gICAgcmVxdWVzdElkID0gbnVsbDtcclxuICAgIGZuKC4uLmFyZ3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRocm90dGxlZCA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gICAgaWYgKHJlcXVlc3RJZCA9PSBudWxsKSB7XHJcbiAgICAgIHJlcXVlc3RJZCA9IHJlcUFuaW1GcmFtZShsYXRlcihhcmdzKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICh0aHJvdHRsZWQgYXMgYW55KS5jYW5jZWwgPSAoKSA9PiBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVxdWVzdElkISk7XHJcblxyXG4gIHJldHVybiB0aHJvdHRsZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWVEZWNvcmF0b3IoKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKHRhcmdldDogYW55LCBrZXk6IHN0cmluZywgZGVzY3JpcHRvcjogYW55KSB7XHJcbiAgICBjb25zdCBmbiA9IGRlc2NyaXB0b3IudmFsdWU7XHJcbiAgICBsZXQgZGVmaW5pbmdQcm9wZXJ0eSA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICBnZXQoKSB7XHJcbiAgICAgICAgaWYgKGRlZmluaW5nUHJvcGVydHkgfHwgdGhpcyA9PT0gdGFyZ2V0LnByb3RvdHlwZSB8fCB0aGlzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgIHJldHVybiBmbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJvdW5kRm4gPSB0aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWUoZm4uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgZGVmaW5pbmdQcm9wZXJ0eSA9IHRydWU7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwge1xyXG4gICAgICAgICAgdmFsdWU6IGJvdW5kRm4sXHJcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRlZmluaW5nUHJvcGVydHkgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gYm91bmRGbjtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9O1xyXG59XHJcbiJdfQ==