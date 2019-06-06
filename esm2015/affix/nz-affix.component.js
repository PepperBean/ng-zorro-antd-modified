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
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Inject, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { shallowEqual, throttleByAnimationFrameDecorator, toNumber, NzScrollService } from 'ng-zorro-antd/core';
export class NzAffixComponent {
    /**
     * @param {?} _el
     * @param {?} scrollSrv
     * @param {?} doc
     * @param {?} platform
     */
    constructor(_el, scrollSrv, doc, platform) {
        this.scrollSrv = scrollSrv;
        this.doc = doc;
        this.platform = platform;
        this.nzChange = new EventEmitter();
        this.events = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'];
        this._target = null;
        this.placeholderNode = _el.nativeElement;
        if (this.platform.isBrowser) {
            this._target = window;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTarget(value) {
        if (this.platform.isBrowser) {
            this.clearEventListeners();
            this._target = typeof value === 'string' ? this.doc.querySelector(value) : value || window;
            this.setTargetEventListeners();
            this.updatePosition((/** @type {?} */ ({})));
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzOffsetTop(value) {
        if (value === undefined || value === null) {
            return;
        }
        this._offsetTop = toNumber(value, null);
        this.updatePosition((/** @type {?} */ ({})));
    }
    /**
     * @return {?}
     */
    get nzOffsetTop() {
        return this._offsetTop;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzOffsetBottom(value) {
        if (typeof value === 'undefined') {
            return;
        }
        this._offsetBottom = toNumber(value, null);
        this.updatePosition((/** @type {?} */ ({})));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.timeout = setTimeout((/**
         * @return {?}
         */
        () => {
            this.setTargetEventListeners();
            this.updatePosition((/** @type {?} */ ({})));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.clearEventListeners();
        clearTimeout(this.timeout);
        // tslint:disable-next-line:no-any
        ((/** @type {?} */ (this.updatePosition))).cancel();
    }
    /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    getOffset(element, target) {
        /** @type {?} */
        const elemRect = element.getBoundingClientRect();
        /** @type {?} */
        const targetRect = this.getTargetRect(target);
        /** @type {?} */
        const scrollTop = this.scrollSrv.getScroll(target, true);
        /** @type {?} */
        const scrollLeft = this.scrollSrv.getScroll(target, false);
        /** @type {?} */
        const docElem = this.doc.body;
        /** @type {?} */
        const clientTop = docElem.clientTop || 0;
        /** @type {?} */
        const clientLeft = docElem.clientLeft || 0;
        return {
            top: elemRect.top - targetRect.top + scrollTop - clientTop,
            left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
            width: elemRect.width,
            height: elemRect.height
        };
    }
    /**
     * @private
     * @return {?}
     */
    setTargetEventListeners() {
        this.clearEventListeners();
        if (this.platform.isBrowser) {
            this.events.forEach((/**
             * @param {?} eventName
             * @return {?}
             */
            (eventName) => {
                (/** @type {?} */ (this._target)).addEventListener(eventName, this.updatePosition, false);
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    clearEventListeners() {
        if (this.platform.isBrowser) {
            this.events.forEach((/**
             * @param {?} eventName
             * @return {?}
             */
            eventName => {
                (/** @type {?} */ (this._target)).removeEventListener(eventName, this.updatePosition, false);
            }));
        }
    }
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    getTargetRect(target) {
        return target !== window
            ? ((/** @type {?} */ (target))).getBoundingClientRect()
            : ((/** @type {?} */ ({ top: 0, left: 0, bottom: 0 })));
    }
    /**
     * @private
     * @param {?=} affixStyle
     * @return {?}
     */
    genStyle(affixStyle) {
        if (!affixStyle) {
            return '';
        }
        return Object.keys(affixStyle)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            /** @type {?} */
            const val = affixStyle[key];
            return `${key}:${typeof val === 'string' ? val : val + 'px'}`;
        }))
            .join(';');
    }
    /**
     * @private
     * @param {?} e
     * @param {?=} affixStyle
     * @return {?}
     */
    setAffixStyle(e, affixStyle) {
        /** @type {?} */
        const originalAffixStyle = this.affixStyle;
        /** @type {?} */
        const isWindow = this._target === window;
        if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
            return;
        }
        if (shallowEqual(originalAffixStyle, affixStyle)) {
            return;
        }
        /** @type {?} */
        const fixed = !!affixStyle;
        /** @type {?} */
        const wrapEl = (/** @type {?} */ (this.fixedEl.nativeElement));
        wrapEl.style.cssText = this.genStyle(affixStyle);
        this.affixStyle = affixStyle;
        /** @type {?} */
        const cls = 'ant-affix';
        if (fixed) {
            wrapEl.classList.add(cls);
        }
        else {
            wrapEl.classList.remove(cls);
        }
        if ((affixStyle && !originalAffixStyle) || (!affixStyle && originalAffixStyle)) {
            this.nzChange.emit(fixed);
        }
    }
    /**
     * @private
     * @param {?=} placeholderStyle
     * @return {?}
     */
    setPlaceholderStyle(placeholderStyle) {
        /** @type {?} */
        const originalPlaceholderStyle = this.placeholderStyle;
        if (shallowEqual(placeholderStyle, originalPlaceholderStyle)) {
            return;
        }
        this.placeholderNode.style.cssText = this.genStyle(placeholderStyle);
        this.placeholderStyle = placeholderStyle;
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    syncPlaceholderStyle(e) {
        if (!this.affixStyle) {
            return;
        }
        this.placeholderNode.style.cssText = '';
        this.placeholderStyle = undefined;
        /** @type {?} */
        const styleObj = { width: this.placeholderNode.offsetWidth, height: this.fixedEl.nativeElement.offsetHeight };
        this.setAffixStyle(e, Object.assign({}, this.affixStyle, styleObj));
        this.setPlaceholderStyle(styleObj);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    updatePosition(e) {
        if (!this.platform.isBrowser) {
            return;
        }
        /** @type {?} */
        const targetNode = (/** @type {?} */ (this._target));
        // Backwards support
        /** @type {?} */
        let offsetTop = this.nzOffsetTop;
        /** @type {?} */
        const scrollTop = this.scrollSrv.getScroll((/** @type {?} */ (targetNode)), true);
        /** @type {?} */
        const elemOffset = this.getOffset(this.placeholderNode, (/** @type {?} */ (targetNode)));
        /** @type {?} */
        const fixedNode = (/** @type {?} */ (this.fixedEl.nativeElement));
        /** @type {?} */
        const elemSize = {
            width: fixedNode.offsetWidth,
            height: fixedNode.offsetHeight
        };
        /** @type {?} */
        const offsetMode = {
            top: false,
            bottom: false
        };
        // Default to `offsetTop=0`.
        if (typeof offsetTop !== 'number' && typeof this._offsetBottom !== 'number') {
            offsetMode.top = true;
            offsetTop = 0;
        }
        else {
            offsetMode.top = typeof offsetTop === 'number';
            offsetMode.bottom = typeof this._offsetBottom === 'number';
        }
        /** @type {?} */
        const targetRect = this.getTargetRect((/** @type {?} */ (targetNode)));
        /** @type {?} */
        const targetInnerHeight = ((/** @type {?} */ (targetNode))).innerHeight || ((/** @type {?} */ (targetNode))).clientHeight;
        if (scrollTop >= elemOffset.top - ((/** @type {?} */ (offsetTop))) && offsetMode.top) {
            /** @type {?} */
            const width = elemOffset.width;
            /** @type {?} */
            const top = targetRect.top + ((/** @type {?} */ (offsetTop)));
            this.setAffixStyle(e, {
                position: 'fixed',
                top,
                left: targetRect.left + elemOffset.left,
                maxHeight: `calc(100vh - ${top}px)`,
                width
            });
            this.setPlaceholderStyle({
                width,
                height: elemSize.height
            });
        }
        else if (scrollTop <= elemOffset.top + elemSize.height + ((/** @type {?} */ (this._offsetBottom))) - targetInnerHeight &&
            offsetMode.bottom) {
            /** @type {?} */
            const targetBottomOffet = targetNode === window ? 0 : window.innerHeight - targetRect.bottom;
            /** @type {?} */
            const width = elemOffset.width;
            this.setAffixStyle(e, {
                position: 'fixed',
                bottom: targetBottomOffet + ((/** @type {?} */ (this._offsetBottom))),
                left: targetRect.left + elemOffset.left,
                width
            });
            this.setPlaceholderStyle({
                width,
                height: elemOffset.height
            });
        }
        else {
            if (e.type === 'resize' &&
                this.affixStyle &&
                this.affixStyle.position === 'fixed' &&
                this.placeholderNode.offsetWidth) {
                this.setAffixStyle(e, Object.assign({}, this.affixStyle, { width: this.placeholderNode.offsetWidth }));
            }
            else {
                this.setAffixStyle(e);
            }
            this.setPlaceholderStyle();
        }
        if (e.type === 'resize') {
            this.syncPlaceholderStyle(e);
        }
    }
}
NzAffixComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-affix',
                exportAs: 'nzAffix',
                template: "<div #fixedEl>\r\n  <ng-content></ng-content>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [`
      nz-affix {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzAffixComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzScrollService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Platform }
];
NzAffixComponent.propDecorators = {
    nzTarget: [{ type: Input }],
    nzOffsetTop: [{ type: Input }],
    nzOffsetBottom: [{ type: Input }],
    nzChange: [{ type: Output }],
    fixedEl: [{ type: ViewChild, args: ['fixedEl',] }]
};
tslib_1.__decorate([
    throttleByAnimationFrameDecorator(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Event]),
    tslib_1.__metadata("design:returntype", void 0)
], NzAffixComponent.prototype, "updatePosition", null);
if (false) {
    /** @type {?} */
    NzAffixComponent.prototype.nzChange;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.timeout;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.events;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.fixedEl;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.placeholderNode;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.affixStyle;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.placeholderStyle;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype._target;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype._offsetTop;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype._offsetBottom;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.scrollSrv;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.doc;
    /**
     * @type {?}
     * @private
     */
    NzAffixComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWZmaXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9hZmZpeC8iLCJzb3VyY2VzIjpbIm56LWFmZml4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsWUFBWSxFQUNaLGlDQUFpQyxFQUNqQyxRQUFRLEVBQ1IsZUFBZSxFQUVoQixNQUFNLG9CQUFvQixDQUFDO0FBZ0I1QixNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7O0lBK0MzQixZQUNFLEdBQWUsRUFDUCxTQUEwQixFQUVSLEdBQVEsRUFDMUIsUUFBa0I7UUFIbEIsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFFUixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFuQlQsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFHekMsV0FBTSxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFPbEcsWUFBTyxHQUE0QixJQUFJLENBQUM7UUFXOUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBQ3pDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7U0FDdkI7SUFDSCxDQUFD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SUFDdkQsbUNBQWdEOzs7OztJQUNoRCxzQ0FBa0M7Ozs7O0lBQ2xDLHlDQUFxQzs7Ozs7SUFJbkMscUNBQWtDOzs7OztJQUVsQywrQkFBa0M7Ozs7O0lBQ2xDLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBzaGFsbG93RXF1YWwsXHJcbiAgdGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lRGVjb3JhdG9yLFxyXG4gIHRvTnVtYmVyLFxyXG4gIE56U2Nyb2xsU2VydmljZSxcclxuICBOR1N0eWxlSW50ZXJmYWNlXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotYWZmaXgnLFxyXG4gIGV4cG9ydEFzOiAnbnpBZmZpeCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWFmZml4LmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotYWZmaXgge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekFmZml4Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56VGFyZ2V0KHZhbHVlOiBzdHJpbmcgfCBFbGVtZW50IHwgV2luZG93KSB7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy5jbGVhckV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgIHRoaXMuX3RhcmdldCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKHZhbHVlKSA6IHZhbHVlIHx8IHdpbmRvdztcclxuICAgICAgdGhpcy5zZXRUYXJnZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKHt9IGFzIEV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56T2Zmc2V0VG9wKHZhbHVlOiBudW1iZXIgfCBudWxsKSB7XHJcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9vZmZzZXRUb3AgPSB0b051bWJlcih2YWx1ZSwgbnVsbCk7XHJcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKHt9IGFzIEV2ZW50KTtcclxuICB9XHJcblxyXG4gIGdldCBuek9mZnNldFRvcCgpOiBudW1iZXIgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9vZmZzZXRUb3A7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuek9mZnNldEJvdHRvbSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9vZmZzZXRCb3R0b20gPSB0b051bWJlcih2YWx1ZSwgbnVsbCk7XHJcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKHt9IGFzIEV2ZW50KTtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgcHJpdmF0ZSB0aW1lb3V0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudHMgPSBbJ3Jlc2l6ZScsICdzY3JvbGwnLCAndG91Y2hzdGFydCcsICd0b3VjaG1vdmUnLCAndG91Y2hlbmQnLCAncGFnZXNob3cnLCAnbG9hZCddO1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpeGVkRWwnKSBwcml2YXRlIGZpeGVkRWw6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgcGxhY2Vob2xkZXJOb2RlOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBhZmZpeFN0eWxlOiBOR1N0eWxlSW50ZXJmYWNlIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgcGxhY2Vob2xkZXJTdHlsZTogTkdTdHlsZUludGVyZmFjZSB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF90YXJnZXQ6IEVsZW1lbnQgfCBXaW5kb3cgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIF9vZmZzZXRUb3A6IG51bWJlciB8IG51bGw7XHJcbiAgcHJpdmF0ZSBfb2Zmc2V0Qm90dG9tOiBudW1iZXIgfCBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIF9lbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgc2Nyb2xsU3J2OiBOelNjcm9sbFNlcnZpY2UsXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cclxuICApIHtcclxuICAgIHRoaXMucGxhY2Vob2xkZXJOb2RlID0gX2VsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy5fdGFyZ2V0ID0gd2luZG93O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXRUYXJnZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKHt9IGFzIEV2ZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgKHRoaXMudXBkYXRlUG9zaXRpb24gYXMgYW55KS5jYW5jZWwoKTtcclxuICB9XHJcblxyXG4gIGdldE9mZnNldChcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQsXHJcbiAgICB0YXJnZXQ6IEVsZW1lbnQgfCBXaW5kb3cgfCB1bmRlZmluZWRcclxuICApOiB7XHJcbiAgICB0b3A6IG51bWJlcjtcclxuICAgIGxlZnQ6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICB9IHtcclxuICAgIGNvbnN0IGVsZW1SZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0aGlzLmdldFRhcmdldFJlY3QodGFyZ2V0KTtcclxuXHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGFyZ2V0LCB0cnVlKTtcclxuICAgIGNvbnN0IHNjcm9sbExlZnQgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGFyZ2V0LCBmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZG9jRWxlbSA9IHRoaXMuZG9jLmJvZHk7XHJcbiAgICBjb25zdCBjbGllbnRUb3AgPSBkb2NFbGVtLmNsaWVudFRvcCB8fCAwO1xyXG4gICAgY29uc3QgY2xpZW50TGVmdCA9IGRvY0VsZW0uY2xpZW50TGVmdCB8fCAwO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRvcDogZWxlbVJlY3QudG9wIC0gdGFyZ2V0UmVjdC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3AsXHJcbiAgICAgIGxlZnQ6IGVsZW1SZWN0LmxlZnQgLSB0YXJnZXRSZWN0LmxlZnQgKyBzY3JvbGxMZWZ0IC0gY2xpZW50TGVmdCxcclxuICAgICAgd2lkdGg6IGVsZW1SZWN0LndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IGVsZW1SZWN0LmhlaWdodFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VGFyZ2V0RXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKChldmVudE5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHRoaXMuX3RhcmdldCEuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHRoaXMudXBkYXRlUG9zaXRpb24sIGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChldmVudE5hbWUgPT4ge1xyXG4gICAgICAgIHRoaXMuX3RhcmdldCEucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHRoaXMudXBkYXRlUG9zaXRpb24sIGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRhcmdldFJlY3QodGFyZ2V0OiBFbGVtZW50IHwgV2luZG93IHwgdW5kZWZpbmVkKTogQ2xpZW50UmVjdCB7XHJcbiAgICByZXR1cm4gdGFyZ2V0ICE9PSB3aW5kb3dcclxuICAgICAgPyAodGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICA6ICh7IHRvcDogMCwgbGVmdDogMCwgYm90dG9tOiAwIH0gYXMgQ2xpZW50UmVjdCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdlblN0eWxlKGFmZml4U3R5bGU/OiBOR1N0eWxlSW50ZXJmYWNlKTogc3RyaW5nIHtcclxuICAgIGlmICghYWZmaXhTdHlsZSkge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYWZmaXhTdHlsZSlcclxuICAgICAgLm1hcChrZXkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IGFmZml4U3R5bGVba2V5XTtcclxuICAgICAgICByZXR1cm4gYCR7a2V5fToke3R5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gdmFsIDogdmFsICsgJ3B4J31gO1xyXG4gICAgICB9KVxyXG4gICAgICAuam9pbignOycpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRBZmZpeFN0eWxlKGU6IEV2ZW50LCBhZmZpeFN0eWxlPzogTkdTdHlsZUludGVyZmFjZSk6IHZvaWQge1xyXG4gICAgY29uc3Qgb3JpZ2luYWxBZmZpeFN0eWxlID0gdGhpcy5hZmZpeFN0eWxlO1xyXG4gICAgY29uc3QgaXNXaW5kb3cgPSB0aGlzLl90YXJnZXQgPT09IHdpbmRvdztcclxuICAgIGlmIChlLnR5cGUgPT09ICdzY3JvbGwnICYmIG9yaWdpbmFsQWZmaXhTdHlsZSAmJiBhZmZpeFN0eWxlICYmIGlzV2luZG93KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChzaGFsbG93RXF1YWwob3JpZ2luYWxBZmZpeFN0eWxlLCBhZmZpeFN0eWxlKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZml4ZWQgPSAhIWFmZml4U3R5bGU7XHJcbiAgICBjb25zdCB3cmFwRWwgPSB0aGlzLmZpeGVkRWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIHdyYXBFbC5zdHlsZS5jc3NUZXh0ID0gdGhpcy5nZW5TdHlsZShhZmZpeFN0eWxlKTtcclxuICAgIHRoaXMuYWZmaXhTdHlsZSA9IGFmZml4U3R5bGU7XHJcbiAgICBjb25zdCBjbHMgPSAnYW50LWFmZml4JztcclxuICAgIGlmIChmaXhlZCkge1xyXG4gICAgICB3cmFwRWwuY2xhc3NMaXN0LmFkZChjbHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd3JhcEVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKGFmZml4U3R5bGUgJiYgIW9yaWdpbmFsQWZmaXhTdHlsZSkgfHwgKCFhZmZpeFN0eWxlICYmIG9yaWdpbmFsQWZmaXhTdHlsZSkpIHtcclxuICAgICAgdGhpcy5uekNoYW5nZS5lbWl0KGZpeGVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0UGxhY2Vob2xkZXJTdHlsZShwbGFjZWhvbGRlclN0eWxlPzogTkdTdHlsZUludGVyZmFjZSk6IHZvaWQge1xyXG4gICAgY29uc3Qgb3JpZ2luYWxQbGFjZWhvbGRlclN0eWxlID0gdGhpcy5wbGFjZWhvbGRlclN0eWxlO1xyXG4gICAgaWYgKHNoYWxsb3dFcXVhbChwbGFjZWhvbGRlclN0eWxlLCBvcmlnaW5hbFBsYWNlaG9sZGVyU3R5bGUpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMucGxhY2Vob2xkZXJOb2RlLnN0eWxlLmNzc1RleHQgPSB0aGlzLmdlblN0eWxlKHBsYWNlaG9sZGVyU3R5bGUpO1xyXG4gICAgdGhpcy5wbGFjZWhvbGRlclN0eWxlID0gcGxhY2Vob2xkZXJTdHlsZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3luY1BsYWNlaG9sZGVyU3R5bGUoZTogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5hZmZpeFN0eWxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMucGxhY2Vob2xkZXJOb2RlLnN0eWxlLmNzc1RleHQgPSAnJztcclxuICAgIHRoaXMucGxhY2Vob2xkZXJTdHlsZSA9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IHN0eWxlT2JqID0geyB3aWR0aDogdGhpcy5wbGFjZWhvbGRlck5vZGUub2Zmc2V0V2lkdGgsIGhlaWdodDogdGhpcy5maXhlZEVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0IH07XHJcbiAgICB0aGlzLnNldEFmZml4U3R5bGUoZSwge1xyXG4gICAgICAuLi50aGlzLmFmZml4U3R5bGUsXHJcbiAgICAgIC4uLnN0eWxlT2JqXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0UGxhY2Vob2xkZXJTdHlsZShzdHlsZU9iaik7XHJcbiAgfVxyXG5cclxuICBAdGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lRGVjb3JhdG9yKClcclxuICB1cGRhdGVQb3NpdGlvbihlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB0YXJnZXROb2RlID0gdGhpcy5fdGFyZ2V0IGFzIChIVE1MRWxlbWVudCB8IFdpbmRvdyk7XHJcbiAgICAvLyBCYWNrd2FyZHMgc3VwcG9ydFxyXG4gICAgbGV0IG9mZnNldFRvcCA9IHRoaXMubnpPZmZzZXRUb3A7XHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGFyZ2V0Tm9kZSEsIHRydWUpO1xyXG4gICAgY29uc3QgZWxlbU9mZnNldCA9IHRoaXMuZ2V0T2Zmc2V0KHRoaXMucGxhY2Vob2xkZXJOb2RlLCB0YXJnZXROb2RlISk7XHJcbiAgICBjb25zdCBmaXhlZE5vZGUgPSB0aGlzLmZpeGVkRWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IGVsZW1TaXplID0ge1xyXG4gICAgICB3aWR0aDogZml4ZWROb2RlLm9mZnNldFdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IGZpeGVkTm9kZS5vZmZzZXRIZWlnaHRcclxuICAgIH07XHJcbiAgICBjb25zdCBvZmZzZXRNb2RlID0ge1xyXG4gICAgICB0b3A6IGZhbHNlLFxyXG4gICAgICBib3R0b206IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgLy8gRGVmYXVsdCB0byBgb2Zmc2V0VG9wPTBgLlxyXG4gICAgaWYgKHR5cGVvZiBvZmZzZXRUb3AgIT09ICdudW1iZXInICYmIHR5cGVvZiB0aGlzLl9vZmZzZXRCb3R0b20gIT09ICdudW1iZXInKSB7XHJcbiAgICAgIG9mZnNldE1vZGUudG9wID0gdHJ1ZTtcclxuICAgICAgb2Zmc2V0VG9wID0gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9mZnNldE1vZGUudG9wID0gdHlwZW9mIG9mZnNldFRvcCA9PT0gJ251bWJlcic7XHJcbiAgICAgIG9mZnNldE1vZGUuYm90dG9tID0gdHlwZW9mIHRoaXMuX29mZnNldEJvdHRvbSA9PT0gJ251bWJlcic7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0YXJnZXRSZWN0ID0gdGhpcy5nZXRUYXJnZXRSZWN0KHRhcmdldE5vZGUgYXMgV2luZG93KTtcclxuICAgIGNvbnN0IHRhcmdldElubmVySGVpZ2h0ID0gKHRhcmdldE5vZGUgYXMgV2luZG93KS5pbm5lckhlaWdodCB8fCAodGFyZ2V0Tm9kZSBhcyBIVE1MRWxlbWVudCkuY2xpZW50SGVpZ2h0O1xyXG4gICAgaWYgKHNjcm9sbFRvcCA+PSBlbGVtT2Zmc2V0LnRvcCAtIChvZmZzZXRUb3AgYXMgbnVtYmVyKSAmJiBvZmZzZXRNb2RlLnRvcCkge1xyXG4gICAgICBjb25zdCB3aWR0aCA9IGVsZW1PZmZzZXQud2lkdGg7XHJcbiAgICAgIGNvbnN0IHRvcCA9IHRhcmdldFJlY3QudG9wICsgKG9mZnNldFRvcCBhcyBudW1iZXIpO1xyXG4gICAgICB0aGlzLnNldEFmZml4U3R5bGUoZSwge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgIHRvcCxcclxuICAgICAgICBsZWZ0OiB0YXJnZXRSZWN0LmxlZnQgKyBlbGVtT2Zmc2V0LmxlZnQsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiBgY2FsYygxMDB2aCAtICR7dG9wfXB4KWAsXHJcbiAgICAgICAgd2lkdGhcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXJTdHlsZSh7XHJcbiAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBlbGVtU2l6ZS5oZWlnaHRcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBzY3JvbGxUb3AgPD0gZWxlbU9mZnNldC50b3AgKyBlbGVtU2l6ZS5oZWlnaHQgKyAodGhpcy5fb2Zmc2V0Qm90dG9tIGFzIG51bWJlcikgLSB0YXJnZXRJbm5lckhlaWdodCAmJlxyXG4gICAgICBvZmZzZXRNb2RlLmJvdHRvbVxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEJvdHRvbU9mZmV0ID0gdGFyZ2V0Tm9kZSA9PT0gd2luZG93ID8gMCA6IHdpbmRvdy5pbm5lckhlaWdodCAtIHRhcmdldFJlY3QuYm90dG9tO1xyXG4gICAgICBjb25zdCB3aWR0aCA9IGVsZW1PZmZzZXQud2lkdGg7XHJcbiAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZShlLCB7XHJcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgYm90dG9tOiB0YXJnZXRCb3R0b21PZmZldCArICh0aGlzLl9vZmZzZXRCb3R0b20gYXMgbnVtYmVyKSxcclxuICAgICAgICBsZWZ0OiB0YXJnZXRSZWN0LmxlZnQgKyBlbGVtT2Zmc2V0LmxlZnQsXHJcbiAgICAgICAgd2lkdGhcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXJTdHlsZSh7XHJcbiAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBlbGVtT2Zmc2V0LmhlaWdodFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBlLnR5cGUgPT09ICdyZXNpemUnICYmXHJcbiAgICAgICAgdGhpcy5hZmZpeFN0eWxlICYmXHJcbiAgICAgICAgdGhpcy5hZmZpeFN0eWxlLnBvc2l0aW9uID09PSAnZml4ZWQnICYmXHJcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlck5vZGUub2Zmc2V0V2lkdGhcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIHsgLi4udGhpcy5hZmZpeFN0eWxlLCB3aWR0aDogdGhpcy5wbGFjZWhvbGRlck5vZGUub2Zmc2V0V2lkdGggfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXJTdHlsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLnR5cGUgPT09ICdyZXNpemUnKSB7XHJcbiAgICAgIHRoaXMuc3luY1BsYWNlaG9sZGVyU3R5bGUoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==