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
var NzAffixComponent = /** @class */ (function () {
    function NzAffixComponent(_el, scrollSrv, doc, platform) {
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
    Object.defineProperty(NzAffixComponent.prototype, "nzTarget", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.platform.isBrowser) {
                this.clearEventListeners();
                this._target = typeof value === 'string' ? this.doc.querySelector(value) : value || window;
                this.setTargetEventListeners();
                this.updatePosition((/** @type {?} */ ({})));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAffixComponent.prototype, "nzOffsetTop", {
        get: /**
         * @return {?}
         */
        function () {
            return this._offsetTop;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value === undefined || value === null) {
                return;
            }
            this._offsetTop = toNumber(value, null);
            this.updatePosition((/** @type {?} */ ({})));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAffixComponent.prototype, "nzOffsetBottom", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof value === 'undefined') {
                return;
            }
            this._offsetBottom = toNumber(value, null);
            this.updatePosition((/** @type {?} */ ({})));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzAffixComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.timeout = setTimeout((/**
         * @return {?}
         */
        function () {
            _this.setTargetEventListeners();
            _this.updatePosition((/** @type {?} */ ({})));
        }));
    };
    /**
     * @return {?}
     */
    NzAffixComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clearEventListeners();
        clearTimeout(this.timeout);
        // tslint:disable-next-line:no-any
        ((/** @type {?} */ (this.updatePosition))).cancel();
    };
    /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    NzAffixComponent.prototype.getOffset = /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    function (element, target) {
        /** @type {?} */
        var elemRect = element.getBoundingClientRect();
        /** @type {?} */
        var targetRect = this.getTargetRect(target);
        /** @type {?} */
        var scrollTop = this.scrollSrv.getScroll(target, true);
        /** @type {?} */
        var scrollLeft = this.scrollSrv.getScroll(target, false);
        /** @type {?} */
        var docElem = this.doc.body;
        /** @type {?} */
        var clientTop = docElem.clientTop || 0;
        /** @type {?} */
        var clientLeft = docElem.clientLeft || 0;
        return {
            top: elemRect.top - targetRect.top + scrollTop - clientTop,
            left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
            width: elemRect.width,
            height: elemRect.height
        };
    };
    /**
     * @private
     * @return {?}
     */
    NzAffixComponent.prototype.setTargetEventListeners = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.clearEventListeners();
        if (this.platform.isBrowser) {
            this.events.forEach((/**
             * @param {?} eventName
             * @return {?}
             */
            function (eventName) {
                (/** @type {?} */ (_this._target)).addEventListener(eventName, _this.updatePosition, false);
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzAffixComponent.prototype.clearEventListeners = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.platform.isBrowser) {
            this.events.forEach((/**
             * @param {?} eventName
             * @return {?}
             */
            function (eventName) {
                (/** @type {?} */ (_this._target)).removeEventListener(eventName, _this.updatePosition, false);
            }));
        }
    };
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    NzAffixComponent.prototype.getTargetRect = /**
     * @private
     * @param {?} target
     * @return {?}
     */
    function (target) {
        return target !== window
            ? ((/** @type {?} */ (target))).getBoundingClientRect()
            : ((/** @type {?} */ ({ top: 0, left: 0, bottom: 0 })));
    };
    /**
     * @private
     * @param {?=} affixStyle
     * @return {?}
     */
    NzAffixComponent.prototype.genStyle = /**
     * @private
     * @param {?=} affixStyle
     * @return {?}
     */
    function (affixStyle) {
        if (!affixStyle) {
            return '';
        }
        return Object.keys(affixStyle)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var val = affixStyle[key];
            return key + ":" + (typeof val === 'string' ? val : val + 'px');
        }))
            .join(';');
    };
    /**
     * @private
     * @param {?} e
     * @param {?=} affixStyle
     * @return {?}
     */
    NzAffixComponent.prototype.setAffixStyle = /**
     * @private
     * @param {?} e
     * @param {?=} affixStyle
     * @return {?}
     */
    function (e, affixStyle) {
        /** @type {?} */
        var originalAffixStyle = this.affixStyle;
        /** @type {?} */
        var isWindow = this._target === window;
        if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
            return;
        }
        if (shallowEqual(originalAffixStyle, affixStyle)) {
            return;
        }
        /** @type {?} */
        var fixed = !!affixStyle;
        /** @type {?} */
        var wrapEl = (/** @type {?} */ (this.fixedEl.nativeElement));
        wrapEl.style.cssText = this.genStyle(affixStyle);
        this.affixStyle = affixStyle;
        /** @type {?} */
        var cls = 'ant-affix';
        if (fixed) {
            wrapEl.classList.add(cls);
        }
        else {
            wrapEl.classList.remove(cls);
        }
        if ((affixStyle && !originalAffixStyle) || (!affixStyle && originalAffixStyle)) {
            this.nzChange.emit(fixed);
        }
    };
    /**
     * @private
     * @param {?=} placeholderStyle
     * @return {?}
     */
    NzAffixComponent.prototype.setPlaceholderStyle = /**
     * @private
     * @param {?=} placeholderStyle
     * @return {?}
     */
    function (placeholderStyle) {
        /** @type {?} */
        var originalPlaceholderStyle = this.placeholderStyle;
        if (shallowEqual(placeholderStyle, originalPlaceholderStyle)) {
            return;
        }
        this.placeholderNode.style.cssText = this.genStyle(placeholderStyle);
        this.placeholderStyle = placeholderStyle;
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    NzAffixComponent.prototype.syncPlaceholderStyle = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.affixStyle) {
            return;
        }
        this.placeholderNode.style.cssText = '';
        this.placeholderStyle = undefined;
        /** @type {?} */
        var styleObj = { width: this.placeholderNode.offsetWidth, height: this.fixedEl.nativeElement.offsetHeight };
        this.setAffixStyle(e, tslib_1.__assign({}, this.affixStyle, styleObj));
        this.setPlaceholderStyle(styleObj);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzAffixComponent.prototype.updatePosition = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.platform.isBrowser) {
            return;
        }
        /** @type {?} */
        var targetNode = (/** @type {?} */ (this._target));
        // Backwards support
        /** @type {?} */
        var offsetTop = this.nzOffsetTop;
        /** @type {?} */
        var scrollTop = this.scrollSrv.getScroll((/** @type {?} */ (targetNode)), true);
        /** @type {?} */
        var elemOffset = this.getOffset(this.placeholderNode, (/** @type {?} */ (targetNode)));
        /** @type {?} */
        var fixedNode = (/** @type {?} */ (this.fixedEl.nativeElement));
        /** @type {?} */
        var elemSize = {
            width: fixedNode.offsetWidth,
            height: fixedNode.offsetHeight
        };
        /** @type {?} */
        var offsetMode = {
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
        var targetRect = this.getTargetRect((/** @type {?} */ (targetNode)));
        /** @type {?} */
        var targetInnerHeight = ((/** @type {?} */ (targetNode))).innerHeight || ((/** @type {?} */ (targetNode))).clientHeight;
        if (scrollTop >= elemOffset.top - ((/** @type {?} */ (offsetTop))) && offsetMode.top) {
            /** @type {?} */
            var width = elemOffset.width;
            /** @type {?} */
            var top_1 = targetRect.top + ((/** @type {?} */ (offsetTop)));
            this.setAffixStyle(e, {
                position: 'fixed',
                top: top_1,
                left: targetRect.left + elemOffset.left,
                maxHeight: "calc(100vh - " + top_1 + "px)",
                width: width
            });
            this.setPlaceholderStyle({
                width: width,
                height: elemSize.height
            });
        }
        else if (scrollTop <= elemOffset.top + elemSize.height + ((/** @type {?} */ (this._offsetBottom))) - targetInnerHeight &&
            offsetMode.bottom) {
            /** @type {?} */
            var targetBottomOffet = targetNode === window ? 0 : window.innerHeight - targetRect.bottom;
            /** @type {?} */
            var width = elemOffset.width;
            this.setAffixStyle(e, {
                position: 'fixed',
                bottom: targetBottomOffet + ((/** @type {?} */ (this._offsetBottom))),
                left: targetRect.left + elemOffset.left,
                width: width
            });
            this.setPlaceholderStyle({
                width: width,
                height: elemOffset.height
            });
        }
        else {
            if (e.type === 'resize' &&
                this.affixStyle &&
                this.affixStyle.position === 'fixed' &&
                this.placeholderNode.offsetWidth) {
                this.setAffixStyle(e, tslib_1.__assign({}, this.affixStyle, { width: this.placeholderNode.offsetWidth }));
            }
            else {
                this.setAffixStyle(e);
            }
            this.setPlaceholderStyle();
        }
        if (e.type === 'resize') {
            this.syncPlaceholderStyle(e);
        }
    };
    NzAffixComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-affix',
                    exportAs: 'nzAffix',
                    template: "<div #fixedEl>\r\n  <ng-content></ng-content>\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: ["\n      nz-affix {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzAffixComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzScrollService },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Platform }
    ]; };
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
    return NzAffixComponent;
}());
export { NzAffixComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWZmaXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9hZmZpeC8iLCJzb3VyY2VzIjpbIm56LWFmZml4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsWUFBWSxFQUNaLGlDQUFpQyxFQUNqQyxRQUFRLEVBQ1IsZUFBZSxFQUVoQixNQUFNLG9CQUFvQixDQUFDO0FBRTVCO0lBNkRFLDBCQUNFLEdBQWUsRUFDUCxTQUEwQixFQUVSLEdBQVEsRUFDMUIsUUFBa0I7UUFIbEIsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFFUixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFuQlQsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFHekMsV0FBTSxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFPbEcsWUFBTyxHQUE0QixJQUFJLENBQUM7UUFXOUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBQ3pDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBekRELHNCQUNJLHNDQUFROzs7OztR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QWlDLEVBQUU7O2lEQUNsQixLQUFLOzswREEyRXRCO0lBQ0gsdUJBQUM7Q0FBQSxBQXBSRCxJQW9SQztTQXRRWSxnQkFBZ0I7OztJQWlDM0Isb0NBQTBEOzs7OztJQUUxRCxtQ0FBd0I7Ozs7O0lBQ3hCLGtDQUEwRzs7Ozs7SUFDMUcsbUNBQWtEOzs7OztJQUVsRCwyQ0FBOEM7Ozs7O0lBRTlDLHNDQUFpRDs7Ozs7SUFDakQsNENBQXVEOzs7OztJQUN2RCxtQ0FBZ0Q7Ozs7O0lBQ2hELHNDQUFrQzs7Ozs7SUFDbEMseUNBQXFDOzs7OztJQUluQyxxQ0FBa0M7Ozs7O0lBRWxDLCtCQUFrQzs7Ozs7SUFDbEMsb0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIHNoYWxsb3dFcXVhbCxcclxuICB0aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWVEZWNvcmF0b3IsXHJcbiAgdG9OdW1iZXIsXHJcbiAgTnpTY3JvbGxTZXJ2aWNlLFxyXG4gIE5HU3R5bGVJbnRlcmZhY2VcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1hZmZpeCcsXHJcbiAgZXhwb3J0QXM6ICduekFmZml4JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotYWZmaXguY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBuei1hZmZpeCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIE56QWZmaXhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KClcclxuICBzZXQgbnpUYXJnZXQodmFsdWU6IHN0cmluZyB8IEVsZW1lbnQgfCBXaW5kb3cpIHtcclxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICB0aGlzLmNsZWFyRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgdGhpcy5fdGFyZ2V0ID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IodmFsdWUpIDogdmFsdWUgfHwgd2luZG93O1xyXG4gICAgICB0aGlzLnNldFRhcmdldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oe30gYXMgRXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpPZmZzZXRUb3AodmFsdWU6IG51bWJlciB8IG51bGwpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX29mZnNldFRvcCA9IHRvTnVtYmVyKHZhbHVlLCBudWxsKTtcclxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oe30gYXMgRXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56T2Zmc2V0VG9wKCk6IG51bWJlciB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX29mZnNldFRvcDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56T2Zmc2V0Qm90dG9tKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX29mZnNldEJvdHRvbSA9IHRvTnVtYmVyKHZhbHVlLCBudWxsKTtcclxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oe30gYXMgRXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBwcml2YXRlIHRpbWVvdXQ6IG51bWJlcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50cyA9IFsncmVzaXplJywgJ3Njcm9sbCcsICd0b3VjaHN0YXJ0JywgJ3RvdWNobW92ZScsICd0b3VjaGVuZCcsICdwYWdlc2hvdycsICdsb2FkJ107XHJcbiAgQFZpZXdDaGlsZCgnZml4ZWRFbCcpIHByaXZhdGUgZml4ZWRFbDogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBwbGFjZWhvbGRlck5vZGU6IEhUTUxFbGVtZW50O1xyXG5cclxuICBwcml2YXRlIGFmZml4U3R5bGU6IE5HU3R5bGVJbnRlcmZhY2UgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBwbGFjZWhvbGRlclN0eWxlOiBOR1N0eWxlSW50ZXJmYWNlIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX3RhcmdldDogRWxlbWVudCB8IFdpbmRvdyB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgX29mZnNldFRvcDogbnVtYmVyIHwgbnVsbDtcclxuICBwcml2YXRlIF9vZmZzZXRCb3R0b206IG51bWJlciB8IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgX2VsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBzY3JvbGxTcnY6IE56U2Nyb2xsU2VydmljZSxcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxyXG4gICkge1xyXG4gICAgdGhpcy5wbGFjZWhvbGRlck5vZGUgPSBfZWwubmF0aXZlRWxlbWVudDtcclxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICB0aGlzLl90YXJnZXQgPSB3aW5kb3c7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFRhcmdldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oe30gYXMgRXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJFdmVudExpc3RlbmVycygpO1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICAodGhpcy51cGRhdGVQb3NpdGlvbiBhcyBhbnkpLmNhbmNlbCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0T2Zmc2V0KFxyXG4gICAgZWxlbWVudDogRWxlbWVudCxcclxuICAgIHRhcmdldDogRWxlbWVudCB8IFdpbmRvdyB8IHVuZGVmaW5lZFxyXG4gICk6IHtcclxuICAgIHRvcDogbnVtYmVyO1xyXG4gICAgbGVmdDogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gIH0ge1xyXG4gICAgY29uc3QgZWxlbVJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRoaXMuZ2V0VGFyZ2V0UmVjdCh0YXJnZXQpO1xyXG5cclxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsU3J2LmdldFNjcm9sbCh0YXJnZXQsIHRydWUpO1xyXG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHRoaXMuc2Nyb2xsU3J2LmdldFNjcm9sbCh0YXJnZXQsIGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBkb2NFbGVtID0gdGhpcy5kb2MuYm9keTtcclxuICAgIGNvbnN0IGNsaWVudFRvcCA9IGRvY0VsZW0uY2xpZW50VG9wIHx8IDA7XHJcbiAgICBjb25zdCBjbGllbnRMZWZ0ID0gZG9jRWxlbS5jbGllbnRMZWZ0IHx8IDA7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdG9wOiBlbGVtUmVjdC50b3AgLSB0YXJnZXRSZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCxcclxuICAgICAgbGVmdDogZWxlbVJlY3QubGVmdCAtIHRhcmdldFJlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0LFxyXG4gICAgICB3aWR0aDogZWxlbVJlY3Qud2lkdGgsXHJcbiAgICAgIGhlaWdodDogZWxlbVJlY3QuaGVpZ2h0XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRUYXJnZXRFdmVudExpc3RlbmVycygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJFdmVudExpc3RlbmVycygpO1xyXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goKGV2ZW50TmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0IS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdGhpcy51cGRhdGVQb3NpdGlvbiwgZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJFdmVudExpc3RlbmVycygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0IS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdGhpcy51cGRhdGVQb3NpdGlvbiwgZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VGFyZ2V0UmVjdCh0YXJnZXQ6IEVsZW1lbnQgfCBXaW5kb3cgfCB1bmRlZmluZWQpOiBDbGllbnRSZWN0IHtcclxuICAgIHJldHVybiB0YXJnZXQgIT09IHdpbmRvd1xyXG4gICAgICA/ICh0YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgIDogKHsgdG9wOiAwLCBsZWZ0OiAwLCBib3R0b206IDAgfSBhcyBDbGllbnRSZWN0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuU3R5bGUoYWZmaXhTdHlsZT86IE5HU3R5bGVJbnRlcmZhY2UpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFhZmZpeFN0eWxlKSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhhZmZpeFN0eWxlKVxyXG4gICAgICAubWFwKGtleSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsID0gYWZmaXhTdHlsZVtrZXldO1xyXG4gICAgICAgIHJldHVybiBgJHtrZXl9OiR7dHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyB2YWwgOiB2YWwgKyAncHgnfWA7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5qb2luKCc7Jyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEFmZml4U3R5bGUoZTogRXZlbnQsIGFmZml4U3R5bGU/OiBOR1N0eWxlSW50ZXJmYWNlKTogdm9pZCB7XHJcbiAgICBjb25zdCBvcmlnaW5hbEFmZml4U3R5bGUgPSB0aGlzLmFmZml4U3R5bGU7XHJcbiAgICBjb25zdCBpc1dpbmRvdyA9IHRoaXMuX3RhcmdldCA9PT0gd2luZG93O1xyXG4gICAgaWYgKGUudHlwZSA9PT0gJ3Njcm9sbCcgJiYgb3JpZ2luYWxBZmZpeFN0eWxlICYmIGFmZml4U3R5bGUgJiYgaXNXaW5kb3cpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHNoYWxsb3dFcXVhbChvcmlnaW5hbEFmZml4U3R5bGUsIGFmZml4U3R5bGUpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaXhlZCA9ICEhYWZmaXhTdHlsZTtcclxuICAgIGNvbnN0IHdyYXBFbCA9IHRoaXMuZml4ZWRFbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgd3JhcEVsLnN0eWxlLmNzc1RleHQgPSB0aGlzLmdlblN0eWxlKGFmZml4U3R5bGUpO1xyXG4gICAgdGhpcy5hZmZpeFN0eWxlID0gYWZmaXhTdHlsZTtcclxuICAgIGNvbnN0IGNscyA9ICdhbnQtYWZmaXgnO1xyXG4gICAgaWYgKGZpeGVkKSB7XHJcbiAgICAgIHdyYXBFbC5jbGFzc0xpc3QuYWRkKGNscyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3cmFwRWwuY2xhc3NMaXN0LnJlbW92ZShjbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgoYWZmaXhTdHlsZSAmJiAhb3JpZ2luYWxBZmZpeFN0eWxlKSB8fCAoIWFmZml4U3R5bGUgJiYgb3JpZ2luYWxBZmZpeFN0eWxlKSkge1xyXG4gICAgICB0aGlzLm56Q2hhbmdlLmVtaXQoZml4ZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRQbGFjZWhvbGRlclN0eWxlKHBsYWNlaG9sZGVyU3R5bGU/OiBOR1N0eWxlSW50ZXJmYWNlKTogdm9pZCB7XHJcbiAgICBjb25zdCBvcmlnaW5hbFBsYWNlaG9sZGVyU3R5bGUgPSB0aGlzLnBsYWNlaG9sZGVyU3R5bGU7XHJcbiAgICBpZiAoc2hhbGxvd0VxdWFsKHBsYWNlaG9sZGVyU3R5bGUsIG9yaWdpbmFsUGxhY2Vob2xkZXJTdHlsZSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wbGFjZWhvbGRlck5vZGUuc3R5bGUuY3NzVGV4dCA9IHRoaXMuZ2VuU3R5bGUocGxhY2Vob2xkZXJTdHlsZSk7XHJcbiAgICB0aGlzLnBsYWNlaG9sZGVyU3R5bGUgPSBwbGFjZWhvbGRlclN0eWxlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzeW5jUGxhY2Vob2xkZXJTdHlsZShlOiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmFmZml4U3R5bGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wbGFjZWhvbGRlck5vZGUuc3R5bGUuY3NzVGV4dCA9ICcnO1xyXG4gICAgdGhpcy5wbGFjZWhvbGRlclN0eWxlID0gdW5kZWZpbmVkO1xyXG4gICAgY29uc3Qgc3R5bGVPYmogPSB7IHdpZHRoOiB0aGlzLnBsYWNlaG9sZGVyTm9kZS5vZmZzZXRXaWR0aCwgaGVpZ2h0OiB0aGlzLmZpeGVkRWwubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgfTtcclxuICAgIHRoaXMuc2V0QWZmaXhTdHlsZShlLCB7XHJcbiAgICAgIC4uLnRoaXMuYWZmaXhTdHlsZSxcclxuICAgICAgLi4uc3R5bGVPYmpcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKHN0eWxlT2JqKTtcclxuICB9XHJcblxyXG4gIEB0aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWVEZWNvcmF0b3IoKVxyXG4gIHVwZGF0ZVBvc2l0aW9uKGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHRhcmdldE5vZGUgPSB0aGlzLl90YXJnZXQgYXMgKEhUTUxFbGVtZW50IHwgV2luZG93KTtcclxuICAgIC8vIEJhY2t3YXJkcyBzdXBwb3J0XHJcbiAgICBsZXQgb2Zmc2V0VG9wID0gdGhpcy5uek9mZnNldFRvcDtcclxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsU3J2LmdldFNjcm9sbCh0YXJnZXROb2RlISwgdHJ1ZSk7XHJcbiAgICBjb25zdCBlbGVtT2Zmc2V0ID0gdGhpcy5nZXRPZmZzZXQodGhpcy5wbGFjZWhvbGRlck5vZGUsIHRhcmdldE5vZGUhKTtcclxuICAgIGNvbnN0IGZpeGVkTm9kZSA9IHRoaXMuZml4ZWRFbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgZWxlbVNpemUgPSB7XHJcbiAgICAgIHdpZHRoOiBmaXhlZE5vZGUub2Zmc2V0V2lkdGgsXHJcbiAgICAgIGhlaWdodDogZml4ZWROb2RlLm9mZnNldEhlaWdodFxyXG4gICAgfTtcclxuICAgIGNvbnN0IG9mZnNldE1vZGUgPSB7XHJcbiAgICAgIHRvcDogZmFsc2UsXHJcbiAgICAgIGJvdHRvbTogZmFsc2VcclxuICAgIH07XHJcbiAgICAvLyBEZWZhdWx0IHRvIGBvZmZzZXRUb3A9MGAuXHJcbiAgICBpZiAodHlwZW9mIG9mZnNldFRvcCAhPT0gJ251bWJlcicgJiYgdHlwZW9mIHRoaXMuX29mZnNldEJvdHRvbSAhPT0gJ251bWJlcicpIHtcclxuICAgICAgb2Zmc2V0TW9kZS50b3AgPSB0cnVlO1xyXG4gICAgICBvZmZzZXRUb3AgPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb2Zmc2V0TW9kZS50b3AgPSB0eXBlb2Ygb2Zmc2V0VG9wID09PSAnbnVtYmVyJztcclxuICAgICAgb2Zmc2V0TW9kZS5ib3R0b20gPSB0eXBlb2YgdGhpcy5fb2Zmc2V0Qm90dG9tID09PSAnbnVtYmVyJztcclxuICAgIH1cclxuICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0aGlzLmdldFRhcmdldFJlY3QodGFyZ2V0Tm9kZSBhcyBXaW5kb3cpO1xyXG4gICAgY29uc3QgdGFyZ2V0SW5uZXJIZWlnaHQgPSAodGFyZ2V0Tm9kZSBhcyBXaW5kb3cpLmlubmVySGVpZ2h0IHx8ICh0YXJnZXROb2RlIGFzIEhUTUxFbGVtZW50KS5jbGllbnRIZWlnaHQ7XHJcbiAgICBpZiAoc2Nyb2xsVG9wID49IGVsZW1PZmZzZXQudG9wIC0gKG9mZnNldFRvcCBhcyBudW1iZXIpICYmIG9mZnNldE1vZGUudG9wKSB7XHJcbiAgICAgIGNvbnN0IHdpZHRoID0gZWxlbU9mZnNldC53aWR0aDtcclxuICAgICAgY29uc3QgdG9wID0gdGFyZ2V0UmVjdC50b3AgKyAob2Zmc2V0VG9wIGFzIG51bWJlcik7XHJcbiAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZShlLCB7XHJcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgdG9wLFxyXG4gICAgICAgIGxlZnQ6IHRhcmdldFJlY3QubGVmdCArIGVsZW1PZmZzZXQubGVmdCxcclxuICAgICAgICBtYXhIZWlnaHQ6IGBjYWxjKDEwMHZoIC0gJHt0b3B9cHgpYCxcclxuICAgICAgICB3aWR0aFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKHtcclxuICAgICAgICB3aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IGVsZW1TaXplLmhlaWdodFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHNjcm9sbFRvcCA8PSBlbGVtT2Zmc2V0LnRvcCArIGVsZW1TaXplLmhlaWdodCArICh0aGlzLl9vZmZzZXRCb3R0b20gYXMgbnVtYmVyKSAtIHRhcmdldElubmVySGVpZ2h0ICYmXHJcbiAgICAgIG9mZnNldE1vZGUuYm90dG9tXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgdGFyZ2V0Qm90dG9tT2ZmZXQgPSB0YXJnZXROb2RlID09PSB3aW5kb3cgPyAwIDogd2luZG93LmlubmVySGVpZ2h0IC0gdGFyZ2V0UmVjdC5ib3R0b207XHJcbiAgICAgIGNvbnN0IHdpZHRoID0gZWxlbU9mZnNldC53aWR0aDtcclxuICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIHtcclxuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICBib3R0b206IHRhcmdldEJvdHRvbU9mZmV0ICsgKHRoaXMuX29mZnNldEJvdHRvbSBhcyBudW1iZXIpLFxyXG4gICAgICAgIGxlZnQ6IHRhcmdldFJlY3QubGVmdCArIGVsZW1PZmZzZXQubGVmdCxcclxuICAgICAgICB3aWR0aFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKHtcclxuICAgICAgICB3aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IGVsZW1PZmZzZXQuaGVpZ2h0XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGUudHlwZSA9PT0gJ3Jlc2l6ZScgJiZcclxuICAgICAgICB0aGlzLmFmZml4U3R5bGUgJiZcclxuICAgICAgICB0aGlzLmFmZml4U3R5bGUucG9zaXRpb24gPT09ICdmaXhlZCcgJiZcclxuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyTm9kZS5vZmZzZXRXaWR0aFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnNldEFmZml4U3R5bGUoZSwgeyAuLi50aGlzLmFmZml4U3R5bGUsIHdpZHRoOiB0aGlzLnBsYWNlaG9sZGVyTm9kZS5vZmZzZXRXaWR0aCB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldEFmZml4U3R5bGUoZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUudHlwZSA9PT0gJ3Jlc2l6ZScpIHtcclxuICAgICAgdGhpcy5zeW5jUGxhY2Vob2xkZXJTdHlsZShlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19