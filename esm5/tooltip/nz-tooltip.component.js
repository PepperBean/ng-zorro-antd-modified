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
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Host, Input, Optional, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { getPlacementName, isNotNil, toBoolean, zoomBigMotion, DEFAULT_TOOLTIP_POSITIONS, NzNoAnimationDirective, POSITION_MAP } from 'ng-zorro-antd/core';
var NzToolTipComponent = /** @class */ (function () {
    function NzToolTipComponent(cdr, noAnimation) {
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this._hasBackdrop = false;
        this._prefix = 'ant-tooltip-placement';
        this._positions = tslib_1.__spread(DEFAULT_TOOLTIP_POSITIONS);
        this._classMap = {};
        this._placement = 'top';
        this._trigger = 'hover';
        this.visibleSource = new BehaviorSubject(false);
        this.visible$ = this.visibleSource.asObservable();
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzMouseEnterDelay = 0.15; // second
        // second
        this.nzMouseLeaveDelay = 0.1; // second
        this.nzVisibleChange = new EventEmitter();
    }
    Object.defineProperty(NzToolTipComponent.prototype, "nzVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this.visibleSource.value;
        },
        set: 
        // second
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var visible = toBoolean(value);
            if (this.visibleSource.value !== visible) {
                this.visibleSource.next(visible);
                this.nzVisibleChange.emit(visible);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzToolTipComponent.prototype, "nzTrigger", {
        get: /**
         * @return {?}
         */
        function () {
            return this._trigger;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._trigger = value;
            this._hasBackdrop = this._trigger === 'click';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzToolTipComponent.prototype, "nzPlacement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._placement;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._placement) {
                this._placement = value;
                this._positions = tslib_1.__spread([POSITION_MAP[this.nzPlacement]], this._positions);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzToolTipComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            _this.updatePosition();
        }));
    };
    // Manually force updating current overlay's position
    // Manually force updating current overlay's position
    /**
     * @return {?}
     */
    NzToolTipComponent.prototype.updatePosition = 
    // Manually force updating current overlay's position
    /**
     * @return {?}
     */
    function () {
        if (this.overlay && this.overlay.overlayRef) {
            this.overlay.overlayRef.updatePosition();
        }
    };
    /**
     * @param {?} position
     * @return {?}
     */
    NzToolTipComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.nzPlacement = (/** @type {?} */ (getPlacementName(position)));
        this.setClassMap();
        this.cdr.detectChanges(); // TODO: performance?
    };
    /**
     * @return {?}
     */
    NzToolTipComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        if (!this.isContentEmpty()) {
            this.nzVisible = true;
        }
    };
    /**
     * @return {?}
     */
    NzToolTipComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.nzVisible = false;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzToolTipComponent.prototype._afterVisibilityAnimation = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.toState === 'false' && !this.nzVisible) {
            this.nzVisibleChange.emit(false);
        }
        if (e.toState === 'true' && this.nzVisible) {
            this.nzVisibleChange.emit(true);
        }
    };
    /**
     * @return {?}
     */
    NzToolTipComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this._classMap = (_a = {},
            _a[this.nzOverlayClassName] = true,
            _a[this._prefix + "-" + this._placement] = true,
            _a);
    };
    /**
     * @param {?} origin
     * @return {?}
     */
    NzToolTipComponent.prototype.setOverlayOrigin = /**
     * @param {?} origin
     * @return {?}
     */
    function (origin) {
        this.overlayOrigin = origin;
    };
    /**
     * @protected
     * @return {?}
     */
    NzToolTipComponent.prototype.isContentEmpty = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.nzTitle instanceof TemplateRef ? false : this.nzTitle === '' || !isNotNil(this.nzTitle);
    };
    NzToolTipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-tooltip',
                    exportAs: 'nzTooltipComponent',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    animations: [zoomBigMotion],
                    template: "<ng-content></ng-content>\r\n<ng-template\r\n  #overlay=\"cdkConnectedOverlay\"\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\r\n  [cdkConnectedOverlayOpen]=\"visible$ | async\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  (backdropClick)=\"hide()\"\r\n  (detach)=\"hide()\"\r\n  (positionChange)=\"onPositionChange($event)\">\r\n  <div\r\n    class=\"ant-tooltip\"\r\n    [ngClass]=\"_classMap\"\r\n    [ngStyle]=\"nzOverlayStyle\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [@zoomBigMotion]=\"'active'\"\r\n    (@zoomBigMotion.done)=\"_afterVisibilityAnimation($event)\">\r\n    <div class=\"ant-tooltip-content\">\r\n      <div class=\"ant-tooltip-arrow\"></div>\r\n      <div class=\"ant-tooltip-inner\">\r\n        <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                    preserveWhitespaces: false,
                    styles: ["\n      .ant-tooltip {\n        position: relative;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzToolTipComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzToolTipComponent.propDecorators = {
        overlay: [{ type: ViewChild, args: ['overlay',] }],
        nzTitle: [{ type: Input }, { type: ContentChild, args: ['nzTemplate',] }],
        nzOverlayClassName: [{ type: Input }],
        nzOverlayStyle: [{ type: Input }],
        nzMouseEnterDelay: [{ type: Input }],
        nzMouseLeaveDelay: [{ type: Input }],
        nzVisible: [{ type: Input }],
        nzTrigger: [{ type: Input }],
        nzPlacement: [{ type: Input }],
        nzVisibleChange: [{ type: Output }]
    };
    return NzToolTipComponent;
}());
export { NzToolTipComponent };
if (false) {
    /** @type {?} */
    NzToolTipComponent.prototype._hasBackdrop;
    /** @type {?} */
    NzToolTipComponent.prototype._prefix;
    /** @type {?} */
    NzToolTipComponent.prototype._positions;
    /** @type {?} */
    NzToolTipComponent.prototype._classMap;
    /** @type {?} */
    NzToolTipComponent.prototype._placement;
    /** @type {?} */
    NzToolTipComponent.prototype._trigger;
    /** @type {?} */
    NzToolTipComponent.prototype.overlayOrigin;
    /** @type {?} */
    NzToolTipComponent.prototype.visibleSource;
    /** @type {?} */
    NzToolTipComponent.prototype.visible$;
    /** @type {?} */
    NzToolTipComponent.prototype.overlay;
    /** @type {?} */
    NzToolTipComponent.prototype.nzTitle;
    /** @type {?} */
    NzToolTipComponent.prototype.nzOverlayClassName;
    /** @type {?} */
    NzToolTipComponent.prototype.nzOverlayStyle;
    /** @type {?} */
    NzToolTipComponent.prototype.nzMouseEnterDelay;
    /** @type {?} */
    NzToolTipComponent.prototype.nzMouseLeaveDelay;
    /** @type {?} */
    NzToolTipComponent.prototype.nzVisibleChange;
    /** @type {?} */
    NzToolTipComponent.prototype.cdr;
    /** @type {?} */
    NzToolTipComponent.prototype.noAnimation;
    /* Skipping unhandled member: [property: string]: any;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3Rvb2x0aXAvIiwic291cmNlcyI6WyJuei10b29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFTQSxPQUFPLEVBQ0wsbUJBQW1CLEVBSXBCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFFbkQsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixRQUFRLEVBQ1IsU0FBUyxFQUNULGFBQWEsRUFDYix5QkFBeUIsRUFDekIsc0JBQXNCLEVBQ3RCLFlBQVksRUFDYixNQUFNLG9CQUFvQixDQUFDO0FBRTVCO0lBd0VFLDRCQUFtQixHQUFzQixFQUE2QixXQUFvQztRQUF2RixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUE2QixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUF2RDFHLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLFlBQU8sR0FBRyx1QkFBdUIsQ0FBQztRQUNsQyxlQUFVLG9CQUFpQyx5QkFBeUIsRUFBRTtRQUN0RSxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixhQUFRLEdBQUcsT0FBTyxDQUFDO1FBRW5CLGtCQUFhLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDcEQsYUFBUSxHQUF3QixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBR3pELHVCQUFrQixHQUFHLEVBQUUsQ0FB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RUwsS0FBSzs0QkFhTCxLQUFLOzhCQVVMLEtBQUs7a0NBWUwsTUFBTTs7SUEwRFQseUJBQUM7Q0FBQSxBQTlIRCxJQThIQztTQTlHWSxrQkFBa0I7OztJQUM3QiwwQ0FBcUI7O0lBQ3JCLHFDQUFrQzs7SUFDbEMsd0NBQXNFOztJQUN0RSx1Q0FBZTs7SUFDZix3Q0FBbUI7O0lBQ25CLHNDQUFtQjs7SUFDbkIsMkNBQWdDOztJQUNoQywyQ0FBb0Q7O0lBQ3BELHNDQUFrRTs7SUFDbEUscUNBQW1EOztJQUNuRCxxQ0FBZ0Y7O0lBQ2hGLGdEQUFpQzs7SUFDakMsNENBQXdEOztJQUN4RCwrQ0FBa0M7O0lBQ2xDLCtDQUFpQzs7SUFxQ2pDLDZDQUFpRTs7SUFJckQsaUNBQTZCOztJQUFFLHlDQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHtcclxuICBDZGtDb25uZWN0ZWRPdmVybGF5LFxyXG4gIENka092ZXJsYXlPcmlnaW4sXHJcbiAgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLFxyXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXJcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0UGxhY2VtZW50TmFtZSxcclxuICBpc05vdE5pbCxcclxuICB0b0Jvb2xlYW4sXHJcbiAgem9vbUJpZ01vdGlvbixcclxuICBERUZBVUxUX1RPT0xUSVBfUE9TSVRJT05TLFxyXG4gIE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXHJcbiAgUE9TSVRJT05fTUFQXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotdG9vbHRpcCcsXHJcbiAgZXhwb3J0QXM6ICduelRvb2x0aXBDb21wb25lbnQnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgYW5pbWF0aW9uczogW3pvb21CaWdNb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10b29sdGlwLmNvbXBvbmVudC5odG1sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmFudC10b29sdGlwIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelRvb2xUaXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIF9oYXNCYWNrZHJvcCA9IGZhbHNlO1xyXG4gIF9wcmVmaXggPSAnYW50LXRvb2x0aXAtcGxhY2VtZW50JztcclxuICBfcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbLi4uREVGQVVMVF9UT09MVElQX1BPU0lUSU9OU107XHJcbiAgX2NsYXNzTWFwID0ge307XHJcbiAgX3BsYWNlbWVudCA9ICd0b3AnO1xyXG4gIF90cmlnZ2VyID0gJ2hvdmVyJztcclxuICBvdmVybGF5T3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xyXG4gIHZpc2libGVTb3VyY2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuICB2aXNpYmxlJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMudmlzaWJsZVNvdXJjZS5hc09ic2VydmFibGUoKTtcclxuICBAVmlld0NoaWxkKCdvdmVybGF5Jykgb3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcclxuICBASW5wdXQoKSBAQ29udGVudENoaWxkKCduelRlbXBsYXRlJykgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xyXG4gIEBJbnB1dCgpIG56T3ZlcmxheUNsYXNzTmFtZSA9ICcnO1xyXG4gIEBJbnB1dCgpIG56T3ZlcmxheVN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcbiAgQElucHV0KCkgbnpNb3VzZUVudGVyRGVsYXkgPSAwLjE1OyAvLyBzZWNvbmRcclxuICBASW5wdXQoKSBuek1vdXNlTGVhdmVEZWxheSA9IDAuMTsgLy8gc2Vjb25kXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56VmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgY29uc3QgdmlzaWJsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICBpZiAodGhpcy52aXNpYmxlU291cmNlLnZhbHVlICE9PSB2aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMudmlzaWJsZVNvdXJjZS5uZXh0KHZpc2libGUpO1xyXG4gICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56VmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnZpc2libGVTb3VyY2UudmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelRyaWdnZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdHJpZ2dlciA9IHZhbHVlO1xyXG4gICAgdGhpcy5faGFzQmFja2Ryb3AgPSB0aGlzLl90cmlnZ2VyID09PSAnY2xpY2snO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56VHJpZ2dlcigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RyaWdnZXI7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelBsYWNlbWVudCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3BsYWNlbWVudCkge1xyXG4gICAgICB0aGlzLl9wbGFjZW1lbnQgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5fcG9zaXRpb25zID0gW1BPU0lUSU9OX01BUFt0aGlzLm56UGxhY2VtZW50XSwgLi4udGhpcy5fcG9zaXRpb25zXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuelBsYWNlbWVudCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlbWVudDtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIFtwcm9wZXJ0eTogc3RyaW5nXTogYW55OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIE1hbnVhbGx5IGZvcmNlIHVwZGF0aW5nIGN1cnJlbnQgb3ZlcmxheSdzIHBvc2l0aW9uXHJcbiAgdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vdmVybGF5ICYmIHRoaXMub3ZlcmxheS5vdmVybGF5UmVmKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcclxuICAgIHRoaXMubnpQbGFjZW1lbnQgPSBnZXRQbGFjZW1lbnROYW1lKHBvc2l0aW9uKSE7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7IC8vIFRPRE86IHBlcmZvcm1hbmNlP1xyXG4gIH1cclxuXHJcbiAgc2hvdygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc0NvbnRlbnRFbXB0eSgpKSB7XHJcbiAgICAgIHRoaXMubnpWaXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhpZGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56VmlzaWJsZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgX2FmdGVyVmlzaWJpbGl0eUFuaW1hdGlvbihlOiBBbmltYXRpb25FdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGUudG9TdGF0ZSA9PT0gJ2ZhbHNlJyAmJiAhdGhpcy5uelZpc2libGUpIHtcclxuICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdChmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZS50b1N0YXRlID09PSAndHJ1ZScgJiYgdGhpcy5uelZpc2libGUpIHtcclxuICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY2xhc3NNYXAgPSB7XHJcbiAgICAgIFt0aGlzLm56T3ZlcmxheUNsYXNzTmFtZV06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLl9wcmVmaXh9LSR7dGhpcy5fcGxhY2VtZW50fWBdOiB0cnVlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0T3ZlcmxheU9yaWdpbihvcmlnaW46IENka092ZXJsYXlPcmlnaW4pOiB2b2lkIHtcclxuICAgIHRoaXMub3ZlcmxheU9yaWdpbiA9IG9yaWdpbjtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBpc0NvbnRlbnRFbXB0eSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56VGl0bGUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZiA/IGZhbHNlIDogdGhpcy5uelRpdGxlID09PSAnJyB8fCAhaXNOb3ROaWwodGhpcy5uelRpdGxlKTtcclxuICB9XHJcbn1cclxuIl19