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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { InputBoolean } from 'ng-zorro-antd/core';
import { NzToolTipComponent } from 'ng-zorro-antd/tooltip';
import { NzSliderComponent } from './nz-slider.component';
var NzSliderHandleComponent = /** @class */ (function () {
    function NzSliderHandleComponent(sliderComponent, cdr) {
        var _this = this;
        this.sliderComponent = sliderComponent;
        this.cdr = cdr;
        this.nzTooltipVisible = 'default';
        this.nzActive = false;
        this.style = {};
        this.hovers_ = new Subscription();
        this.enterHandle = (/**
         * @return {?}
         */
        function () {
            if (!_this.sliderComponent.isDragging) {
                _this.toggleTooltip(true);
                _this.updateTooltipPosition();
                _this.cdr.detectChanges();
            }
        });
        this.leaveHandle = (/**
         * @return {?}
         */
        function () {
            if (!_this.sliderComponent.isDragging) {
                _this.toggleTooltip(false);
                _this.cdr.detectChanges();
            }
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSliderHandleComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var nzOffset = changes.nzOffset, nzValue = changes.nzValue, nzActive = changes.nzActive, nzTooltipVisible = changes.nzTooltipVisible;
        if (nzOffset) {
            this.updateStyle();
        }
        if (nzValue) {
            this.updateTooltipTitle();
            this.updateTooltipPosition();
        }
        if (nzActive) {
            if (nzActive.currentValue) {
                this.toggleTooltip(true);
            }
            else {
                this.toggleTooltip(false);
            }
        }
        if (nzTooltipVisible && nzTooltipVisible.currentValue === 'always') {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () { return _this.toggleTooltip(true, true); }));
        }
    };
    /**
     * @return {?}
     */
    NzSliderHandleComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.hovers_.unsubscribe();
    };
    /**
     * @private
     * @param {?} show
     * @param {?=} force
     * @return {?}
     */
    NzSliderHandleComponent.prototype.toggleTooltip = /**
     * @private
     * @param {?} show
     * @param {?=} force
     * @return {?}
     */
    function (show, force) {
        if (force === void 0) { force = false; }
        if (!force && (this.nzTooltipVisible !== 'default' || !this.tooltip)) {
            return;
        }
        if (show) {
            this.tooltip.show();
        }
        else {
            this.tooltip.hide();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderHandleComponent.prototype.updateTooltipTitle = /**
     * @private
     * @return {?}
     */
    function () {
        this.tooltipTitle = this.nzTipFormatter ? this.nzTipFormatter(this.nzValue) : "" + this.nzValue;
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderHandleComponent.prototype.updateTooltipPosition = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.tooltip) {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () { return _this.tooltip.updatePosition(); }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderHandleComponent.prototype.updateStyle = /**
     * @private
     * @return {?}
     */
    function () {
        this.style[this.nzVertical ? 'bottom' : 'left'] = this.nzOffset + "%";
    };
    NzSliderHandleComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-slider-handle',
                    exportAs: 'nzSliderHandle',
                    preserveWhitespaces: false,
                    template: "<nz-tooltip\r\n  *ngIf=\"nzTipFormatter !== null && nzTooltipVisible !== 'never'\"\r\n  [nzTitle]=\"tooltipTitle\"\r\n  [nzTrigger]=\"null\">\r\n  <div nz-tooltip class=\"ant-slider-handle\" [ngStyle]=\"style\"></div>\r\n</nz-tooltip>\r\n<div *ngIf=\"nzTipFormatter === null || nzTooltipVisible === 'never'\" class=\"ant-slider-handle\" [ngStyle]=\"style\"></div>\r\n",
                    host: {
                        '(mouseenter)': 'enterHandle()',
                        '(mouseleave)': 'leaveHandle()'
                    }
                }] }
    ];
    /** @nocollapse */
    NzSliderHandleComponent.ctorParameters = function () { return [
        { type: NzSliderComponent },
        { type: ChangeDetectorRef }
    ]; };
    NzSliderHandleComponent.propDecorators = {
        tooltip: [{ type: ViewChild, args: [NzToolTipComponent,] }],
        nzVertical: [{ type: Input }],
        nzOffset: [{ type: Input }],
        nzValue: [{ type: Input }],
        nzTooltipVisible: [{ type: Input }],
        nzTipFormatter: [{ type: Input }],
        nzActive: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzSliderHandleComponent.prototype, "nzActive", void 0);
    return NzSliderHandleComponent;
}());
export { NzSliderHandleComponent };
if (false) {
    /** @type {?} */
    NzSliderHandleComponent.prototype.tooltip;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzVertical;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzOffset;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzValue;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzTooltipVisible;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzTipFormatter;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzActive;
    /** @type {?} */
    NzSliderHandleComponent.prototype.tooltipTitle;
    /** @type {?} */
    NzSliderHandleComponent.prototype.style;
    /**
     * @type {?}
     * @private
     */
    NzSliderHandleComponent.prototype.hovers_;
    /** @type {?} */
    NzSliderHandleComponent.prototype.enterHandle;
    /** @type {?} */
    NzSliderHandleComponent.prototype.leaveHandle;
    /**
     * @type {?}
     * @private
     */
    NzSliderHandleComponent.prototype.sliderComponent;
    /**
     * @type {?}
     * @private
     */
    NzSliderHandleComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NsaWRlci8iLCJzb3VyY2VzIjpbIm56LXNsaWRlci1oYW5kbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBSUwsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxZQUFZLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFMUQ7SUEyQkUsaUNBQW9CLGVBQWtDLEVBQVUsR0FBc0I7UUFBdEYsaUJBQTBGO1FBQXRFLG9CQUFlLEdBQWYsZUFBZSxDQUFtQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBVDdFLHFCQUFnQixHQUFzQixTQUFTLENBQUM7UUFFaEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUcxQyxVQUFLLEdBQXFCLEVBQUUsQ0FBQztRQUVyQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQThCckMsZ0JBQVc7OztRQUFHO1lBQ1osSUFBSSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFO2dCQUNwQyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixLQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUMxQjtRQUNILENBQUMsRUFBQztRQUVGLGdCQUFXOzs7UUFBRztZQUNaLElBQUks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O29CQUNoRCxJQUFJLEVBQUU7d0JBQ0osY0FBYyxFQUFFLGVBQWU7d0JBQy9CLGNBQWMsRUFBRSxlQUFlO3FCQUNoQztpQkFDRjs7OztnQkFiUSxpQkFBaUI7Z0JBZnhCLGlCQUFpQjs7OzBCQThCaEIsU0FBUyxTQUFDLGtCQUFrQjs2QkFFNUIsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7bUNBQ0wsS0FBSztpQ0FDTCxLQUFLOzJCQUNMLEtBQUs7O0lBQW1CO1FBQWYsWUFBWSxFQUFFOzs2REFBa0I7SUEyRTVDLDhCQUFDO0NBQUEsQUEvRkQsSUErRkM7U0FuRlksdUJBQXVCOzs7SUFDbEMsMENBQTJEOztJQUUzRCw2Q0FBNEI7O0lBQzVCLDJDQUEwQjs7SUFDMUIsMENBQXlCOztJQUN6QixtREFBeUQ7O0lBQ3pELGlEQUFtRDs7SUFDbkQsMkNBQTBDOztJQUUxQywrQ0FBcUI7O0lBQ3JCLHdDQUE2Qjs7Ozs7SUFFN0IsMENBQXFDOztJQThCckMsOENBTUU7O0lBRUYsOENBS0U7Ozs7O0lBekNVLGtEQUEwQzs7Ozs7SUFBRSxzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE5HU3R5bGVJbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOelRvb2xUaXBDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xyXG5cclxuaW1wb3J0IHsgU2xpZGVyU2hvd1Rvb2x0aXAgfSBmcm9tICcuL256LXNsaWRlci1kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IE56U2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1zbGlkZXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1zbGlkZXItaGFuZGxlJyxcclxuICBleHBvcnRBczogJ256U2xpZGVySGFuZGxlJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJyhtb3VzZWVudGVyKSc6ICdlbnRlckhhbmRsZSgpJyxcclxuICAgICcobW91c2VsZWF2ZSknOiAnbGVhdmVIYW5kbGUoKSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelNsaWRlckhhbmRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBAVmlld0NoaWxkKE56VG9vbFRpcENvbXBvbmVudCkgdG9vbHRpcDogTnpUb29sVGlwQ29tcG9uZW50O1xyXG5cclxuICBASW5wdXQoKSBuelZlcnRpY2FsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpPZmZzZXQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBuelZhbHVlOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpUb29sdGlwVmlzaWJsZTogU2xpZGVyU2hvd1Rvb2x0aXAgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbnpUaXBGb3JtYXR0ZXI6ICh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QWN0aXZlID0gZmFsc2U7XHJcblxyXG4gIHRvb2x0aXBUaXRsZTogc3RyaW5nO1xyXG4gIHN0eWxlOiBOR1N0eWxlSW50ZXJmYWNlID0ge307XHJcblxyXG4gIHByaXZhdGUgaG92ZXJzXyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzbGlkZXJDb21wb25lbnQ6IE56U2xpZGVyQ29tcG9uZW50LCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgbnpPZmZzZXQsIG56VmFsdWUsIG56QWN0aXZlLCBuelRvb2x0aXBWaXNpYmxlIH0gPSBjaGFuZ2VzO1xyXG5cclxuICAgIGlmIChuek9mZnNldCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAobnpWYWx1ZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVRvb2x0aXBUaXRsZSgpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVRvb2x0aXBQb3NpdGlvbigpO1xyXG4gICAgfVxyXG4gICAgaWYgKG56QWN0aXZlKSB7XHJcbiAgICAgIGlmIChuekFjdGl2ZS5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVUb29sdGlwKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG56VG9vbHRpcFZpc2libGUgJiYgbnpUb29sdGlwVmlzaWJsZS5jdXJyZW50VmFsdWUgPT09ICdhbHdheXMnKSB7XHJcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy50b2dnbGVUb29sdGlwKHRydWUsIHRydWUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5ob3ZlcnNfLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBlbnRlckhhbmRsZSA9ICgpID0+IHtcclxuICAgIGlmICghdGhpcy5zbGlkZXJDb21wb25lbnQuaXNEcmFnZ2luZykge1xyXG4gICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAodHJ1ZSk7XHJcbiAgICAgIHRoaXMudXBkYXRlVG9vbHRpcFBvc2l0aW9uKCk7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBsZWF2ZUhhbmRsZSA9ICgpID0+IHtcclxuICAgIGlmICghdGhpcy5zbGlkZXJDb21wb25lbnQuaXNEcmFnZ2luZykge1xyXG4gICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAoZmFsc2UpO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGVUb29sdGlwKHNob3c6IGJvb2xlYW4sIGZvcmNlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGlmICghZm9yY2UgJiYgKHRoaXMubnpUb29sdGlwVmlzaWJsZSAhPT0gJ2RlZmF1bHQnIHx8ICF0aGlzLnRvb2x0aXApKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2hvdykge1xyXG4gICAgICB0aGlzLnRvb2x0aXAuc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50b29sdGlwLmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlVG9vbHRpcFRpdGxlKCk6IHZvaWQge1xyXG4gICAgdGhpcy50b29sdGlwVGl0bGUgPSB0aGlzLm56VGlwRm9ybWF0dGVyID8gdGhpcy5uelRpcEZvcm1hdHRlcih0aGlzLm56VmFsdWUpIDogYCR7dGhpcy5uelZhbHVlfWA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVRvb2x0aXBQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRvb2x0aXApIHtcclxuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLnRvb2x0aXAudXBkYXRlUG9zaXRpb24oKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVN0eWxlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdHlsZVt0aGlzLm56VmVydGljYWwgPyAnYm90dG9tJyA6ICdsZWZ0J10gPSBgJHt0aGlzLm56T2Zmc2V0fSVgO1xyXG4gIH1cclxufVxyXG4iXX0=