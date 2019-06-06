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
import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { reqAnimFrame } from '../polyfill/request-animation';
/**
 * @param {?} t
 * @param {?} b
 * @param {?} c
 * @param {?} d
 * @return {?}
 */
function easeInOutCubic(t, b, c, d) {
    /** @type {?} */
    const cc = c - b;
    /** @type {?} */
    let tt = t / (d / 2);
    if (tt < 1) {
        return (cc / 2) * tt * tt * tt + b;
    }
    else {
        return (cc / 2) * ((tt -= 2) * tt * tt + 2) + b;
    }
}
export class NzScrollService {
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} doc
     */
    constructor(doc) {
        this.doc = doc;
    }
    /**
     * 设置 `el` 滚动条位置
     * @param {?} el
     * @param {?=} topValue
     * @return {?}
     */
    setScrollTop(el, topValue = 0) {
        if (el === window) {
            this.doc.body.scrollTop = topValue;
            (/** @type {?} */ (this.doc.documentElement)).scrollTop = topValue;
        }
        else {
            ((/** @type {?} */ (el))).scrollTop = topValue;
        }
    }
    /**
     * 获取 `el` 相对于视窗距离
     * @param {?} el
     * @return {?}
     */
    getOffset(el) {
        /** @type {?} */
        const ret = {
            top: 0,
            left: 0
        };
        if (!el || !el.getClientRects().length) {
            return ret;
        }
        /** @type {?} */
        const rect = el.getBoundingClientRect();
        if (rect.width || rect.height) {
            /** @type {?} */
            const doc = (/** @type {?} */ (el.ownerDocument)).documentElement;
            ret.top = rect.top - (/** @type {?} */ (doc)).clientTop;
            ret.left = rect.left - (/** @type {?} */ (doc)).clientLeft;
        }
        else {
            ret.top = rect.top;
            ret.left = rect.left;
        }
        return ret;
    }
    /**
     * 获取 `el` 滚动条位置
     * @param {?=} el
     * @param {?=} top
     * @return {?}
     */
    // TODO: remove '| Window' as the fallback already happens here
    getScroll(el, top = true) {
        /** @type {?} */
        const target = el ? el : window;
        /** @type {?} */
        const prop = top ? 'pageYOffset' : 'pageXOffset';
        /** @type {?} */
        const method = top ? 'scrollTop' : 'scrollLeft';
        /** @type {?} */
        const isWindow = target === window;
        // @ts-ignore
        /** @type {?} */
        let ret = isWindow ? target[prop] : target[method];
        if (isWindow && typeof ret !== 'number') {
            ret = (/** @type {?} */ (this.doc.documentElement))[method];
        }
        return ret;
    }
    /**
     * 使用动画形式将 `el` 滚动至某位置
     *
     * @param {?} containerEl 容器，默认 `window`
     * @param {?=} targetTopValue 滚动至目标 `top` 值，默认：0，相当于顶部
     * @param {?=} easing 动作算法，默认：`easeInOutCubic`
     * @param {?=} callback 动画结束后回调
     * @return {?}
     */
    scrollTo(containerEl, targetTopValue = 0, easing, callback) {
        /** @type {?} */
        const target = containerEl ? containerEl : window;
        /** @type {?} */
        const scrollTop = this.getScroll(target);
        /** @type {?} */
        const startTime = Date.now();
        /** @type {?} */
        const frameFunc = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const timestamp = Date.now();
            /** @type {?} */
            const time = timestamp - startTime;
            this.setScrollTop(target, (easing || easeInOutCubic)(time, scrollTop, targetTopValue, 450));
            if (time < 450) {
                reqAnimFrame(frameFunc);
            }
            else {
                if (callback) {
                    callback();
                }
            }
        });
        reqAnimFrame(frameFunc);
    }
}
NzScrollService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NzScrollService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzScrollService.prototype.doc;
}
/**
 * @param {?} doc
 * @param {?} scrollService
 * @return {?}
 */
export function SCROLL_SERVICE_PROVIDER_FACTORY(doc, scrollService) {
    return scrollService || new NzScrollService(doc);
}
/** @type {?} */
export const SCROLL_SERVICE_PROVIDER = {
    provide: NzScrollService,
    useFactory: SCROLL_SERVICE_PROVIDER_FACTORY,
    deps: [DOCUMENT, [new Optional(), new SkipSelf(), NzScrollService]]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJzY3JvbGwvbnotc2Nyb2xsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFZLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7O0FBSTdELFNBQVMsY0FBYyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7O1VBQzFELEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQzs7UUFDWixFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQixJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUU7UUFDVixPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNwQztTQUFNO1FBQ0wsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2pEO0FBQ0gsQ0FBQztBQUdELE1BQU0sT0FBTyxlQUFlOzs7OztJQUkxQixZQUE4QixHQUFRO1FBQ3BDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Ozs7Ozs7SUFHRCxZQUFZLENBQUMsRUFBb0IsRUFBRSxXQUFtQixDQUFDO1FBQ3JELElBQUksRUFBRSxLQUFLLE1BQU0sRUFBRTtZQUNqQixJQUFJLENBQUMsR0FB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QUN6QjtpQkFBTTtnQkFDTCxJQUFJLFFBQVEsRUFBRTtvQkFDWixRQUFRLEVBQUUsQ0FBQztpQkFDWjthQUNGO1FBQ0gsQ0FBQyxDQUFBO1FBQ0QsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7OztZQWxGRixVQUFVOzs7OzRDQUtJLE1BQU0sU0FBQyxRQUFROzs7Ozs7O0lBSDVCLDhCQUFzQjs7Ozs7OztBQW1GeEIsTUFBTSxVQUFVLCtCQUErQixDQUFDLEdBQWEsRUFBRSxhQUE4QjtJQUMzRixPQUFPLGFBQWEsSUFBSSxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuRCxDQUFDOztBQUVELE1BQU0sT0FBTyx1QkFBdUIsR0FBYTtJQUMvQyxPQUFPLEVBQUUsZUFBZTtJQUN4QixVQUFVLEVBQUUsK0JBQStCO0lBQzNDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxlQUFlLENBQUMsQ0FBQztDQUNwRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsLCBQcm92aWRlciwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHJlcUFuaW1GcmFtZSB9IGZyb20gJy4uL3BvbHlmaWxsL3JlcXVlc3QtYW5pbWF0aW9uJztcclxuXHJcbmV4cG9ydCB0eXBlIEVhc3lpbmdGbiA9ICh0OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpID0+IG51bWJlcjtcclxuXHJcbmZ1bmN0aW9uIGVhc2VJbk91dEN1YmljKHQ6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgY29uc3QgY2MgPSBjIC0gYjtcclxuICBsZXQgdHQgPSB0IC8gKGQgLyAyKTtcclxuICBpZiAodHQgPCAxKSB7XHJcbiAgICByZXR1cm4gKGNjIC8gMikgKiB0dCAqIHR0ICogdHQgKyBiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKGNjIC8gMikgKiAoKHR0IC09IDIpICogdHQgKiB0dCArIDIpICsgYjtcclxuICB9XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE56U2Nyb2xsU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBkb2M6IERvY3VtZW50O1xyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgZG9jOiBhbnkpIHtcclxuICAgIHRoaXMuZG9jID0gZG9jO1xyXG4gIH1cclxuXHJcbiAgLyoqIOiuvue9riBgZWxgIOa7muWKqOadoeS9jee9riAqL1xyXG4gIHNldFNjcm9sbFRvcChlbDogRWxlbWVudCB8IFdpbmRvdywgdG9wVmFsdWU6IG51bWJlciA9IDApOiB2b2lkIHtcclxuICAgIGlmIChlbCA9PT0gd2luZG93KSB7XHJcbiAgICAgIHRoaXMuZG9jLmJvZHkuc2Nyb2xsVG9wID0gdG9wVmFsdWU7XHJcbiAgICAgIHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudCEuc2Nyb2xsVG9wID0gdG9wVmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAoZWwgYXMgRWxlbWVudCkuc2Nyb2xsVG9wID0gdG9wVmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiog6I635Y+WIGBlbGAg55u45a+55LqO6KeG56qX6Led56a7ICovXHJcbiAgZ2V0T2Zmc2V0KGVsOiBFbGVtZW50KTogeyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH0ge1xyXG4gICAgY29uc3QgcmV0ID0ge1xyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IDBcclxuICAgIH07XHJcbiAgICBpZiAoIWVsIHx8ICFlbC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGlmIChyZWN0LndpZHRoIHx8IHJlY3QuaGVpZ2h0KSB7XHJcbiAgICAgIGNvbnN0IGRvYyA9IGVsLm93bmVyRG9jdW1lbnQhLmRvY3VtZW50RWxlbWVudDtcclxuICAgICAgcmV0LnRvcCA9IHJlY3QudG9wIC0gZG9jIS5jbGllbnRUb3A7XHJcbiAgICAgIHJldC5sZWZ0ID0gcmVjdC5sZWZ0IC0gZG9jIS5jbGllbnRMZWZ0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0LnRvcCA9IHJlY3QudG9wO1xyXG4gICAgICByZXQubGVmdCA9IHJlY3QubGVmdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgLyoqIOiOt+WPliBgZWxgIOa7muWKqOadoeS9jee9riAqL1xyXG4gIC8vIFRPRE86IHJlbW92ZSAnfCBXaW5kb3cnIGFzIHRoZSBmYWxsYmFjayBhbHJlYWR5IGhhcHBlbnMgaGVyZVxyXG4gIGdldFNjcm9sbChlbD86IEVsZW1lbnQgfCBXaW5kb3csIHRvcDogYm9vbGVhbiA9IHRydWUpOiBudW1iZXIge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZWwgPyBlbCA6IHdpbmRvdztcclxuICAgIGNvbnN0IHByb3AgPSB0b3AgPyAncGFnZVlPZmZzZXQnIDogJ3BhZ2VYT2Zmc2V0JztcclxuICAgIGNvbnN0IG1ldGhvZCA9IHRvcCA/ICdzY3JvbGxUb3AnIDogJ3Njcm9sbExlZnQnO1xyXG4gICAgY29uc3QgaXNXaW5kb3cgPSB0YXJnZXQgPT09IHdpbmRvdztcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGxldCByZXQgPSBpc1dpbmRvdyA/IHRhcmdldFtwcm9wXSA6IHRhcmdldFttZXRob2RdO1xyXG4gICAgaWYgKGlzV2luZG93ICYmIHR5cGVvZiByZXQgIT09ICdudW1iZXInKSB7XHJcbiAgICAgIHJldCA9IHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudCFbbWV0aG9kXTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDkvb/nlKjliqjnlLvlvaLlvI/lsIYgYGVsYCDmu5rliqjoh7Pmn5DkvY3nva5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb250YWluZXJFbCDlrrnlmajvvIzpu5jorqQgYHdpbmRvd2BcclxuICAgKiBAcGFyYW0gdGFyZ2V0VG9wVmFsdWUg5rua5Yqo6Iez55uu5qCHIGB0b3BgIOWAvO+8jOm7mOiupO+8mjDvvIznm7jlvZPkuo7pobbpg6hcclxuICAgKiBAcGFyYW0gZWFzaW5nIOWKqOS9nOeul+azle+8jOm7mOiupO+8mmBlYXNlSW5PdXRDdWJpY2BcclxuICAgKiBAcGFyYW0gY2FsbGJhY2sg5Yqo55S757uT5p2f5ZCO5Zue6LCDXHJcbiAgICovXHJcbiAgc2Nyb2xsVG8oY29udGFpbmVyRWw6IEVsZW1lbnQgfCBXaW5kb3csIHRhcmdldFRvcFZhbHVlOiBudW1iZXIgPSAwLCBlYXNpbmc/OiBFYXN5aW5nRm4sIGNhbGxiYWNrPzogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gY29udGFpbmVyRWwgPyBjb250YWluZXJFbCA6IHdpbmRvdztcclxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsKHRhcmdldCk7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgY29uc3QgZnJhbWVGdW5jID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICBjb25zdCB0aW1lID0gdGltZXN0YW1wIC0gc3RhcnRUaW1lO1xyXG4gICAgICB0aGlzLnNldFNjcm9sbFRvcCh0YXJnZXQsIChlYXNpbmcgfHwgZWFzZUluT3V0Q3ViaWMpKHRpbWUsIHNjcm9sbFRvcCwgdGFyZ2V0VG9wVmFsdWUsIDQ1MCkpO1xyXG4gICAgICBpZiAodGltZSA8IDQ1MCkge1xyXG4gICAgICAgIHJlcUFuaW1GcmFtZShmcmFtZUZ1bmMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXFBbmltRnJhbWUoZnJhbWVGdW5jKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTQ1JPTExfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZKGRvYzogRG9jdW1lbnQsIHNjcm9sbFNlcnZpY2U6IE56U2Nyb2xsU2VydmljZSk6IE56U2Nyb2xsU2VydmljZSB7XHJcbiAgcmV0dXJuIHNjcm9sbFNlcnZpY2UgfHwgbmV3IE56U2Nyb2xsU2VydmljZShkb2MpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU0NST0xMX1NFUlZJQ0VfUFJPVklERVI6IFByb3ZpZGVyID0ge1xyXG4gIHByb3ZpZGU6IE56U2Nyb2xsU2VydmljZSxcclxuICB1c2VGYWN0b3J5OiBTQ1JPTExfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZLFxyXG4gIGRlcHM6IFtET0NVTUVOVCwgW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgTnpTY3JvbGxTZXJ2aWNlXV1cclxufTtcclxuIl19