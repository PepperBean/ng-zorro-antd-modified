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
import { Subject } from 'rxjs';
import { NzCarouselBaseStrategy } from './base-strategy';
var NzCarouselTransformStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(NzCarouselTransformStrategy, _super);
    function NzCarouselTransformStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDragging = false;
        _this.isTransitioning = false;
        return _this;
    }
    Object.defineProperty(NzCarouselTransformStrategy.prototype, "vertical", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.carouselComponent)).nzVertical;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.dispose = /**
     * @return {?}
     */
    function () {
        _super.prototype.dispose.call(this);
        this.renderer.setStyle(this.slickTrackEl, 'transform', null);
    };
    /**
     * @param {?} contents
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.withCarouselContents = /**
     * @param {?} contents
     * @return {?}
     */
    function (contents) {
        var _this = this;
        _super.prototype.withCarouselContents.call(this, contents);
        /** @type {?} */
        var carousel = (/** @type {?} */ (this.carouselComponent));
        /** @type {?} */
        var activeIndex = carousel.activeIndex;
        if (this.contents.length) {
            if (this.vertical) {
                this.renderer.setStyle(this.slickListEl, 'height', this.unitHeight + "px");
                this.renderer.setStyle(this.slickTrackEl, 'height', this.length * this.unitHeight + "px");
                this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + -activeIndex * this.unitHeight + "px, 0)");
            }
            else {
                this.renderer.setStyle(this.slickTrackEl, 'width', this.length * this.unitWidth + "px");
                this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + -activeIndex * this.unitWidth + "px, 0, 0)");
            }
            this.contents.forEach((/**
             * @param {?} content
             * @return {?}
             */
            function (content) {
                _this.renderer.setStyle(content.el, 'position', 'relative');
                _this.renderer.setStyle(content.el, 'width', _this.unitWidth + "px");
            }));
        }
    };
    /**
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.switch = /**
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    function (_f, _t) {
        var _this = this;
        var t = this.getFromToInBoundary(_f, _t).to;
        /** @type {?} */
        var complete$ = new Subject();
        this.renderer.setStyle(this.slickTrackEl, 'transition', 'transform 500ms ease');
        if (this.vertical) {
            this.verticalTransform(_f, _t);
        }
        else {
            this.horizontalTransform(_f, _t);
        }
        this.isTransitioning = true;
        this.isDragging = false;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.renderer.setStyle(_this.slickTrackEl, 'transition', null);
            _this.contents.forEach((/**
             * @param {?} content
             * @return {?}
             */
            function (content) {
                _this.renderer.setStyle(content.el, _this.vertical ? 'top' : 'left', null);
            }));
            if (_this.vertical) {
                _this.renderer.setStyle(_this.slickTrackEl, 'transform', "translate3d(0, " + -t * _this.unitHeight + "px, 0)");
            }
            else {
                _this.renderer.setStyle(_this.slickTrackEl, 'transform', "translate3d(" + -t * _this.unitWidth + "px, 0, 0)");
            }
            _this.isTransitioning = false;
            complete$.next();
            complete$.complete();
        }), (/** @type {?} */ (this.carouselComponent)).nzTransitionSpeed);
        return complete$.asObservable();
    };
    /**
     * @param {?} _vector
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.dragging = /**
     * @param {?} _vector
     * @return {?}
     */
    function (_vector) {
        if (this.isTransitioning) {
            return;
        }
        /** @type {?} */
        var activeIndex = (/** @type {?} */ (this.carouselComponent)).activeIndex;
        if ((/** @type {?} */ (this.carouselComponent)).nzVertical) {
            if (!this.isDragging && this.length > 2) {
                if (activeIndex === this.maxIndex) {
                    this.prepareVerticalContext(true);
                }
                else if (activeIndex === 0) {
                    this.prepareVerticalContext(false);
                }
            }
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + (-activeIndex * this.unitHeight + _vector.x) + "px, 0)");
        }
        else {
            if (!this.isDragging && this.length > 2) {
                if (activeIndex === this.maxIndex) {
                    this.prepareHorizontalContext(true);
                }
                else if (activeIndex === 0) {
                    this.prepareHorizontalContext(false);
                }
            }
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + (-activeIndex * this.unitWidth + _vector.x) + "px, 0, 0)");
        }
        this.isDragging = true;
    };
    /**
     * @private
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.verticalTransform = /**
     * @private
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    function (_f, _t) {
        var _a = this.getFromToInBoundary(_f, _t), f = _a.from, t = _a.to;
        /** @type {?} */
        var needToAdjust = this.length > 2 && _t !== t;
        if (needToAdjust) {
            this.prepareVerticalContext(t < f);
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + -_t * this.unitHeight + "px, 0)");
        }
        else {
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(0, " + -t * this.unitHeight + "px, 0");
        }
    };
    /**
     * @private
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.horizontalTransform = /**
     * @private
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    function (_f, _t) {
        var _a = this.getFromToInBoundary(_f, _t), f = _a.from, t = _a.to;
        /** @type {?} */
        var needToAdjust = this.length > 2 && _t !== t;
        if (needToAdjust) {
            this.prepareHorizontalContext(t < f);
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + -_t * this.unitWidth + "px, 0, 0)");
        }
        else {
            this.renderer.setStyle(this.slickTrackEl, 'transform', "translate3d(" + -t * this.unitWidth + "px, 0, 0");
        }
    };
    /**
     * @private
     * @param {?} lastToFirst
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.prepareVerticalContext = /**
     * @private
     * @param {?} lastToFirst
     * @return {?}
     */
    function (lastToFirst) {
        if (lastToFirst) {
            this.renderer.setStyle(this.firstEl, 'top', this.length * this.unitHeight + "px");
            this.renderer.setStyle(this.lastEl, 'top', null);
        }
        else {
            this.renderer.setStyle(this.firstEl, 'top', null);
            this.renderer.setStyle(this.lastEl, 'top', -this.unitHeight * this.length + "px");
        }
    };
    /**
     * @private
     * @param {?} lastToFirst
     * @return {?}
     */
    NzCarouselTransformStrategy.prototype.prepareHorizontalContext = /**
     * @private
     * @param {?} lastToFirst
     * @return {?}
     */
    function (lastToFirst) {
        if (lastToFirst) {
            this.renderer.setStyle(this.firstEl, 'left', this.length * this.unitWidth + "px");
            this.renderer.setStyle(this.lastEl, 'left', null);
        }
        else {
            this.renderer.setStyle(this.firstEl, 'left', null);
            this.renderer.setStyle(this.lastEl, 'left', -this.unitWidth * this.length + "px");
        }
    };
    return NzCarouselTransformStrategy;
}(NzCarouselBaseStrategy));
export { NzCarouselTransformStrategy };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzCarouselTransformStrategy.prototype.isDragging;
    /**
     * @type {?}
     * @private
     */
    NzCarouselTransformStrategy.prototype.isTransitioning;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbInN0cmF0ZWdpZXMvdHJhbnNmb3JtLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFLM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekQ7SUFBaUQsdURBQXNCO0lBQXZFO1FBQUEscUVBNkpDO1FBNUpTLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLHFCQUFlLEdBQUcsS0FBSyxDQUFDOztJQTJKbEMsQ0FBQztJQXpKQyxzQkFBWSxpREFBUTs7Ozs7UUFBcEI7WUFDRSxPQUFPLG1CQUFBLElBQUksQ0FBQyxpQkFBaUIsRUFBQyxDQUFDLFVBQVUsQ0FBQztRQUM1QyxDQUFDOzs7T0FBQTs7OztJQUVELDZDQUFPOzs7SUFBUDtRQUNFLGlCQUFNLE9BQU8sV0FBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7O0lBRUQsMERBQW9COzs7O0lBQXBCLFVBQXFCLFFBQXNEO1FBQTNFLGlCQXlCQztRQXhCQyxpQkFBTSxvQkFBb0IsWUFBQyxRQUFRLENBQUMsQ0FBQzs7WUFFL0IsUUFBUSxHQUFHLG1CQUFBLElBQUksQ0FBQyxpQkFBaUIsRUFBQzs7WUFDbEMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXO1FBRXhDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDeEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFB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QUFpQyxXQUFvQjtRQUNuRCxJQUFJLFdBQVcsRUFBRTtZQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFLLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsT0FBSSxDQUFDLENBQUM7WUFDbEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDbkQ7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxPQUFJLENBQUMsQ0FBQztTQUNuRjtJQUNILENBQUM7SUFDSCxrQ0FBQztBQUFELENBQUMsQUE3SkQsQ0FBaUQsc0JBQXNCLEdBNkp0RTs7Ozs7OztJQTVKQyxpREFBMkI7Ozs7O0lBQzNCLHNEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi4vbnotY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBQb2ludGVyVmVjdG9yIH0gZnJvbSAnLi4vbnotY2Fyb3VzZWwtZGVmaW5pdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgTnpDYXJvdXNlbEJhc2VTdHJhdGVneSB9IGZyb20gJy4vYmFzZS1zdHJhdGVneSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTnpDYXJvdXNlbFRyYW5zZm9ybVN0cmF0ZWd5IGV4dGVuZHMgTnpDYXJvdXNlbEJhc2VTdHJhdGVneSB7XHJcbiAgcHJpdmF0ZSBpc0RyYWdnaW5nID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBpc1RyYW5zaXRpb25pbmcgPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBnZXQgdmVydGljYWwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jYXJvdXNlbENvbXBvbmVudCEubnpWZXJ0aWNhbDtcclxuICB9XHJcblxyXG4gIGRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICBzdXBlci5kaXNwb3NlKCk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAndHJhbnNmb3JtJywgbnVsbCk7XHJcbiAgfVxyXG5cclxuICB3aXRoQ2Fyb3VzZWxDb250ZW50cyhjb250ZW50czogUXVlcnlMaXN0PE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlPiB8IG51bGwpOiB2b2lkIHtcclxuICAgIHN1cGVyLndpdGhDYXJvdXNlbENvbnRlbnRzKGNvbnRlbnRzKTtcclxuXHJcbiAgICBjb25zdCBjYXJvdXNlbCA9IHRoaXMuY2Fyb3VzZWxDb21wb25lbnQhO1xyXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSBjYXJvdXNlbC5hY3RpdmVJbmRleDtcclxuXHJcbiAgICBpZiAodGhpcy5jb250ZW50cy5sZW5ndGgpIHtcclxuICAgICAgaWYgKHRoaXMudmVydGljYWwpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tMaXN0RWwsICdoZWlnaHQnLCBgJHt0aGlzLnVuaXRIZWlnaHR9cHhgKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAnaGVpZ2h0JywgYCR7dGhpcy5sZW5ndGggKiB0aGlzLnVuaXRIZWlnaHR9cHhgKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgICAgdGhpcy5zbGlja1RyYWNrRWwsXHJcbiAgICAgICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgICAgIGB0cmFuc2xhdGUzZCgwLCAkey1hY3RpdmVJbmRleCAqIHRoaXMudW5pdEhlaWdodH1weCwgMClgXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAnd2lkdGgnLCBgJHt0aGlzLmxlbmd0aCAqIHRoaXMudW5pdFdpZHRofXB4YCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrVHJhY2tFbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgkey1hY3RpdmVJbmRleCAqIHRoaXMudW5pdFdpZHRofXB4LCAwLCAwKWApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNvbnRlbnRzLmZvckVhY2goKGNvbnRlbnQ6IE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjb250ZW50LmVsLCAncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNvbnRlbnQuZWwsICd3aWR0aCcsIGAke3RoaXMudW5pdFdpZHRofXB4YCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3dpdGNoKF9mOiBudW1iZXIsIF90OiBudW1iZXIpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIGNvbnN0IHsgdG86IHQgfSA9IHRoaXMuZ2V0RnJvbVRvSW5Cb3VuZGFyeShfZiwgX3QpO1xyXG4gICAgY29uc3QgY29tcGxldGUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAndHJhbnNpdGlvbicsICd0cmFuc2Zvcm0gNTAwbXMgZWFzZScpO1xyXG5cclxuICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XHJcbiAgICAgIHRoaXMudmVydGljYWxUcmFuc2Zvcm0oX2YsIF90KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaG9yaXpvbnRhbFRyYW5zZm9ybShfZiwgX3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXNUcmFuc2l0aW9uaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAndHJhbnNpdGlvbicsIG51bGwpO1xyXG4gICAgICB0aGlzLmNvbnRlbnRzLmZvckVhY2goKGNvbnRlbnQ6IE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjb250ZW50LmVsLCB0aGlzLnZlcnRpY2FsID8gJ3RvcCcgOiAnbGVmdCcsIG51bGwpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrVHJhY2tFbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgwLCAkey10ICogdGhpcy51bml0SGVpZ2h0fXB4LCAwKWApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoJHstdCAqIHRoaXMudW5pdFdpZHRofXB4LCAwLCAwKWApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmlzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgY29tcGxldGUkLm5leHQoKTtcclxuICAgICAgY29tcGxldGUkLmNvbXBsZXRlKCk7XHJcbiAgICB9LCB0aGlzLmNhcm91c2VsQ29tcG9uZW50IS5uelRyYW5zaXRpb25TcGVlZCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbXBsZXRlJC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGRyYWdnaW5nKF92ZWN0b3I6IFBvaW50ZXJWZWN0b3IpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzVHJhbnNpdGlvbmluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLmNhcm91c2VsQ29tcG9uZW50IS5hY3RpdmVJbmRleDtcclxuXHJcbiAgICBpZiAodGhpcy5jYXJvdXNlbENvbXBvbmVudCEubnpWZXJ0aWNhbCkge1xyXG4gICAgICBpZiAoIXRoaXMuaXNEcmFnZ2luZyAmJiB0aGlzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICBpZiAoYWN0aXZlSW5kZXggPT09IHRoaXMubWF4SW5kZXgpIHtcclxuICAgICAgICAgIHRoaXMucHJlcGFyZVZlcnRpY2FsQ29udGV4dCh0cnVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFjdGl2ZUluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLnByZXBhcmVWZXJ0aWNhbENvbnRleHQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgIHRoaXMuc2xpY2tUcmFja0VsLFxyXG4gICAgICAgICd0cmFuc2Zvcm0nLFxyXG4gICAgICAgIGB0cmFuc2xhdGUzZCgwLCAkey1hY3RpdmVJbmRleCAqIHRoaXMudW5pdEhlaWdodCArIF92ZWN0b3IueH1weCwgMClgXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIXRoaXMuaXNEcmFnZ2luZyAmJiB0aGlzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICBpZiAoYWN0aXZlSW5kZXggPT09IHRoaXMubWF4SW5kZXgpIHtcclxuICAgICAgICAgIHRoaXMucHJlcGFyZUhvcml6b250YWxDb250ZXh0KHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlSW5kZXggPT09IDApIHtcclxuICAgICAgICAgIHRoaXMucHJlcGFyZUhvcml6b250YWxDb250ZXh0KGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICB0aGlzLnNsaWNrVHJhY2tFbCxcclxuICAgICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgICBgdHJhbnNsYXRlM2QoJHstYWN0aXZlSW5kZXggKiB0aGlzLnVuaXRXaWR0aCArIF92ZWN0b3IueH1weCwgMCwgMClgXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmVydGljYWxUcmFuc2Zvcm0oX2Y6IG51bWJlciwgX3Q6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgeyBmcm9tOiBmLCB0bzogdCB9ID0gdGhpcy5nZXRGcm9tVG9JbkJvdW5kYXJ5KF9mLCBfdCk7XHJcbiAgICBjb25zdCBuZWVkVG9BZGp1c3QgPSB0aGlzLmxlbmd0aCA+IDIgJiYgX3QgIT09IHQ7XHJcblxyXG4gICAgaWYgKG5lZWRUb0FkanVzdCkge1xyXG4gICAgICB0aGlzLnByZXBhcmVWZXJ0aWNhbENvbnRleHQodCA8IGYpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFja0VsLCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKDAsICR7LV90ICogdGhpcy51bml0SGVpZ2h0fXB4LCAwKWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrVHJhY2tFbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgwLCAkey10ICogdGhpcy51bml0SGVpZ2h0fXB4LCAwYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhvcml6b250YWxUcmFuc2Zvcm0oX2Y6IG51bWJlciwgX3Q6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgeyBmcm9tOiBmLCB0bzogdCB9ID0gdGhpcy5nZXRGcm9tVG9JbkJvdW5kYXJ5KF9mLCBfdCk7XHJcbiAgICBjb25zdCBuZWVkVG9BZGp1c3QgPSB0aGlzLmxlbmd0aCA+IDIgJiYgX3QgIT09IHQ7XHJcblxyXG4gICAgaWYgKG5lZWRUb0FkanVzdCkge1xyXG4gICAgICB0aGlzLnByZXBhcmVIb3Jpem9udGFsQ29udGV4dCh0IDwgZik7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoJHstX3QgKiB0aGlzLnVuaXRXaWR0aH1weCwgMCwgMClgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrRWwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoJHstdCAqIHRoaXMudW5pdFdpZHRofXB4LCAwLCAwYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByZXBhcmVWZXJ0aWNhbENvbnRleHQobGFzdFRvRmlyc3Q6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmIChsYXN0VG9GaXJzdCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZmlyc3RFbCwgJ3RvcCcsIGAke3RoaXMubGVuZ3RoICogdGhpcy51bml0SGVpZ2h0fXB4YCk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5sYXN0RWwsICd0b3AnLCBudWxsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5maXJzdEVsLCAndG9wJywgbnVsbCk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5sYXN0RWwsICd0b3AnLCBgJHstdGhpcy51bml0SGVpZ2h0ICogdGhpcy5sZW5ndGh9cHhgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJlcGFyZUhvcml6b250YWxDb250ZXh0KGxhc3RUb0ZpcnN0OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAobGFzdFRvRmlyc3QpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmZpcnN0RWwsICdsZWZ0JywgYCR7dGhpcy5sZW5ndGggKiB0aGlzLnVuaXRXaWR0aH1weGApO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMubGFzdEVsLCAnbGVmdCcsIG51bGwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmZpcnN0RWwsICdsZWZ0JywgbnVsbCk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5sYXN0RWwsICdsZWZ0JywgYCR7LXRoaXMudW5pdFdpZHRoICogdGhpcy5sZW5ndGh9cHhgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19