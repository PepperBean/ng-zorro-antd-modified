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
import { coerceElement } from '@angular/cdk/coercion';
import { Directive, ElementRef, Inject, Input, Optional, Renderer2 } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { InputBoolean } from '../util/convert';
/** @type {?} */
var DISABLED_CLASSNAME = 'nz-animate-disabled';
var NzNoAnimationDirective = /** @class */ (function () {
    function NzNoAnimationDirective(element, renderer, animationType) {
        this.element = element;
        this.renderer = renderer;
        this.animationType = animationType;
        this.nzNoAnimation = false;
    }
    /**
     * @return {?}
     */
    NzNoAnimationDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.updateClass();
    };
    /**
     * @return {?}
     */
    NzNoAnimationDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateClass();
    };
    /**
     * @private
     * @return {?}
     */
    NzNoAnimationDirective.prototype.updateClass = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = coerceElement(this.element);
        if (!element) {
            return;
        }
        if (this.nzNoAnimation || this.animationType === 'NoopAnimations') {
            this.renderer.addClass(element, DISABLED_CLASSNAME);
        }
        else {
            this.renderer.removeClass(element, DISABLED_CLASSNAME);
        }
    };
    NzNoAnimationDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nzNoAnimation]',
                    exportAs: 'nzNoAnimation',
                    host: {
                        '[@.disabled]': 'nzNoAnimation'
                    }
                },] }
    ];
    /** @nocollapse */
    NzNoAnimationDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ]; };
    NzNoAnimationDirective.propDecorators = {
        nzNoAnimation: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzNoAnimationDirective.prototype, "nzNoAnimation", void 0);
    return NzNoAnimationDirective;
}());
export { NzNoAnimationDirective };
if (false) {
    /** @type {?} */
    NzNoAnimationDirective.prototype.nzNoAnimation;
    /**
     * @type {?}
     * @private
     */
    NzNoAnimationDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    NzNoAnimationDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzNoAnimationDirective.prototype.animationType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm8tYW5pbWF0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbIm5vLWFuaW1hdGlvbi9uei1uby1hbmltYXRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBYSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTdFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7SUFFekMsa0JBQWtCLEdBQUcscUJBQXFCO0FBRWhEO0lBVUUsZ0NBQ1UsT0FBbUIsRUFDbkIsUUFBbUIsRUFDd0IsYUFBcUI7UUFGaEUsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3dCLGtCQUFhLEdBQWIsYUFBYSxDQUFRO1FBTGpELGtCQUFhLEdBQVksS0FBSyxDQUFDO0lBTXJELENBQUM7Ozs7SUFFSiw0Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELGdEQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVPLDRDQUFXOzs7O0lBQW5COztZQUNRLE9BQU8sR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssZ0JBQWdCLEVBQUU7WUFDakUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUM7U0FDckQ7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQzs7Z0JBbENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsZUFBZTtvQkFDekIsSUFBSSxFQUFFO3dCQUNKLGNBQWMsRUFBRSxlQUFlO3FCQUNoQztpQkFDRjs7OztnQkFia0MsVUFBVTtnQkFBc0MsU0FBUzs2Q0FvQnZGLFFBQVEsWUFBSSxNQUFNLFNBQUMscUJBQXFCOzs7Z0NBTDFDLEtBQUs7O0lBQW1CO1FBQWYsWUFBWSxFQUFFOztpRUFBZ0M7SUEyQjFELDZCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0E1Qlksc0JBQXNCOzs7SUFDakMsK0NBQXdEOzs7OztJQUd0RCx5Q0FBMkI7Ozs7O0lBQzNCLDBDQUEyQjs7Ozs7SUFDM0IsK0NBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBjb2VyY2VFbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0LCBPbkNoYW5nZXMsIE9wdGlvbmFsLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQU5JTUFUSU9OX01PRFVMRV9UWVBFIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuXHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL3V0aWwvY29udmVydCc7XHJcblxyXG5jb25zdCBESVNBQkxFRF9DTEFTU05BTUUgPSAnbnotYW5pbWF0ZS1kaXNhYmxlZCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuek5vQW5pbWF0aW9uXScsXHJcbiAgZXhwb3J0QXM6ICduek5vQW5pbWF0aW9uJyxcclxuICBob3N0OiB7XHJcbiAgICAnW0AuZGlzYWJsZWRdJzogJ256Tm9BbmltYXRpb24nXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Tm9BbmltYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFOSU1BVElPTl9NT0RVTEVfVFlQRSkgcHJpdmF0ZSBhbmltYXRpb25UeXBlOiBzdHJpbmdcclxuICApIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVDbGFzcygpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVDbGFzcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVDbGFzcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBjb2VyY2VFbGVtZW50KHRoaXMuZWxlbWVudCk7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubnpOb0FuaW1hdGlvbiB8fCB0aGlzLmFuaW1hdGlvblR5cGUgPT09ICdOb29wQW5pbWF0aW9ucycpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBESVNBQkxFRF9DTEFTU05BTUUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBESVNBQkxFRF9DTEFTU05BTUUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=