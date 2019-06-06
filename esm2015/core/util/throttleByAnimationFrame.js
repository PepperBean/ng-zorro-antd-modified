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
// tslint:disable:no-any typedef no-invalid-this
import { cancelRequestAnimationFrame, reqAnimFrame } from '../polyfill/request-animation';
/**
 * @param {?} fn
 * @return {?}
 */
export default function throttleByAnimationFrame(fn) {
    /** @type {?} */
    let requestId;
    /** @type {?} */
    const later = (/**
     * @param {?} args
     * @return {?}
     */
    (args) => (/**
     * @return {?}
     */
    () => {
        requestId = null;
        fn(...args);
    }));
    /** @type {?} */
    const throttled = (/**
     * @param {...?} args
     * @return {?}
     */
    (...args) => {
        if (requestId == null) {
            requestId = reqAnimFrame(later(args));
        }
    });
    // tslint:disable-next-line:no-non-null-assertion
    ((/** @type {?} */ (throttled))).cancel = (/**
     * @return {?}
     */
    () => cancelRequestAnimationFrame((/** @type {?} */ (requestId))));
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
        const fn = descriptor.value;
        /** @type {?} */
        let definingProperty = false;
        return {
            configurable: true,
            /**
             * @return {?}
             */
            get() {
                if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
                    return fn;
                }
                /** @type {?} */
                const boundFn = throttleByAnimationFrame(fn.bind(this));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbC90aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7OztBQUUxRixNQUFNLENBQUMsT0FBTyxVQUFVLHdCQUF3QixDQUFDLEVBQU87O1FBQ2xELFNBQXdCOztVQUV0QixLQUFLOzs7O0lBQUcsQ0FBQyxJQUFXLEVBQUUsRUFBRTs7O0lBQUMsR0FBRyxFQUFFO1FBQ2xDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDZCxDQUFDLENBQUEsQ0FBQTs7VUFFSyxTQUFTOzs7O0lBQUcsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFO1FBQ25DLElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtZQUNyQixTQUFTLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQyxDQUFBO0lBRUQsaURBQWlEO0lBQ2pELENBQUMsbUJBQUEsU0FBUyxFQUFPLENBQUMsQ0FBQyxNQUFNOzs7SUFBRyxHQUFHLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxtQkFBQSxTQUFTLEVBQUMsQ0FBQyxDQUFBLENBQUM7SUFFMUUsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQzs7OztBQUVELE1BQU0sVUFBVSxpQ0FBaUM7SUFDL0M7Ozs7OztJQUFPLFVBQVMsTUFBVyxFQUFFLEdBQVcsRUFBRSxVQUFlOztjQUNqRCxFQUFFLEdBQUcsVUFBVSxDQUFDLEtBQUs7O1lBQ3ZCLGdCQUFnQixHQUFHLEtBQUs7UUFDNUIsT0FBTztZQUNMLFlBQVksRUFBRSxJQUFJOzs7O1lBQ2xCLEdBQUc7Z0JBQ0QsSUFBSSxnQkFBZ0IsSUFBSSxJQUFJLEtBQUssTUFBTSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUM3RSxPQUFPLEVBQUUsQ0FBQztpQkFDWDs7c0JBRUssT0FBTyxHQUFHLHdCQUF3QixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZELGdCQUFnQixHQUFHLElBQUksQ0FBQztnQkFDeEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO29CQUMvQixLQUFLLEVBQUUsT0FBTztvQkFDZCxZQUFZLEVBQUUsSUFBSTtvQkFDbEIsUUFBUSxFQUFFLElBQUk7aUJBQ2YsQ0FBQyxDQUFDO2dCQUNILGdCQUFnQixHQUFHLEtBQUssQ0FBQztnQkFDekIsT0FBTyxPQUFPLENBQUM7WUFDakIsQ0FBQztTQUNGLENBQUM7SUFDSixDQUFDLEVBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgdHlwZWRlZiBuby1pbnZhbGlkLXRoaXNcclxuaW1wb3J0IHsgY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lLCByZXFBbmltRnJhbWUgfSBmcm9tICcuLi9wb2x5ZmlsbC9yZXF1ZXN0LWFuaW1hdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWUoZm46IGFueSkge1xyXG4gIGxldCByZXF1ZXN0SWQ6IG51bWJlciB8IG51bGw7XHJcblxyXG4gIGNvbnN0IGxhdGVyID0gKGFyZ3M6IGFueVtdKSA9PiAoKSA9PiB7XHJcbiAgICByZXF1ZXN0SWQgPSBudWxsO1xyXG4gICAgZm4oLi4uYXJncyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdGhyb3R0bGVkID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICBpZiAocmVxdWVzdElkID09IG51bGwpIHtcclxuICAgICAgcmVxdWVzdElkID0gcmVxQW5pbUZyYW1lKGxhdGVyKGFyZ3MpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgKHRocm90dGxlZCBhcyBhbnkpLmNhbmNlbCA9ICgpID0+IGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0SWQhKTtcclxuXHJcbiAgcmV0dXJuIHRocm90dGxlZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlQnlBbmltYXRpb25GcmFtZURlY29yYXRvcigpIHtcclxuICByZXR1cm4gZnVuY3Rpb24odGFyZ2V0OiBhbnksIGtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBhbnkpIHtcclxuICAgIGNvbnN0IGZuID0gZGVzY3JpcHRvci52YWx1ZTtcclxuICAgIGxldCBkZWZpbmluZ1Byb3BlcnR5ID0gZmFsc2U7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIGdldCgpIHtcclxuICAgICAgICBpZiAoZGVmaW5pbmdQcm9wZXJ0eSB8fCB0aGlzID09PSB0YXJnZXQucHJvdG90eXBlIHx8IHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgcmV0dXJuIGZuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYm91bmRGbiA9IHRocm90dGxlQnlBbmltYXRpb25GcmFtZShmbi5iaW5kKHRoaXMpKTtcclxuICAgICAgICBkZWZpbmluZ1Byb3BlcnR5ID0gdHJ1ZTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywga2V5LCB7XHJcbiAgICAgICAgICB2YWx1ZTogYm91bmRGbixcclxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGVmaW5pbmdQcm9wZXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBib3VuZEZuO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH07XHJcbn1cclxuIl19