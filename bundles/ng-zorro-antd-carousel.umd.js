(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/keycodes'), require('@angular/cdk/platform'), require('@angular/common'), require('ng-zorro-antd/core'), require('rxjs/operators'), require('@angular/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/carousel', ['exports', '@angular/cdk/keycodes', '@angular/cdk/platform', '@angular/common', 'ng-zorro-antd/core', 'rxjs/operators', '@angular/core', 'rxjs'], factory) :
    (factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].carousel = {}),global.ng.cdk.keycodes,global.ng.cdk.platform,global.ng.common,global['ng-zorro-antd'].core,global.rxjs.operators,global.ng.core,global.rxjs));
}(this, (function (exports,keycodes,platform,common,core,operators,core$1,rxjs) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzCarouselContentDirective = /** @class */ (function () {
        function NzCarouselContentDirective(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.el = this.elementRef.nativeElement;
            this._active = false;
            renderer.addClass(elementRef.nativeElement, 'slick-slide');
        }
        Object.defineProperty(NzCarouselContentDirective.prototype, "isActive", {
            get: /**
             * @return {?}
             */ function () {
                return this._active;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._active = value;
                if (this.isActive) {
                    this.renderer.addClass(this.el, 'slick-active');
                }
                else {
                    this.renderer.removeClass(this.el, 'slick-active');
                }
            },
            enumerable: true,
            configurable: true
        });
        NzCarouselContentDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[nz-carousel-content]',
                        exportAs: 'nzCarouselContent'
                    },] }
        ];
        /** @nocollapse */
        NzCarouselContentDirective.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: core$1.Renderer2 }
            ];
        };
        return NzCarouselContentDirective;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NZ_CAROUSEL_CUSTOM_STRATEGIES = new core$1.InjectionToken('nz-carousel-custom-strategies');

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
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ NzCarouselBaseStrategy = /** @class */ (function () {
        function NzCarouselBaseStrategy(carouselComponent, cdr, renderer) {
            this.cdr = cdr;
            this.renderer = renderer;
            this.carouselComponent = carouselComponent;
        }
        Object.defineProperty(NzCarouselBaseStrategy.prototype, "maxIndex", {
            get: /**
             * @protected
             * @return {?}
             */ function () {
                return this.length - 1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCarouselBaseStrategy.prototype, "firstEl", {
            get: /**
             * @protected
             * @return {?}
             */ function () {
                return this.contents[0].el;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCarouselBaseStrategy.prototype, "lastEl", {
            get: /**
             * @protected
             * @return {?}
             */ function () {
                return this.contents[this.maxIndex].el;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Initialize dragging sequences.
         * @param contents
         */
        /**
         * Initialize dragging sequences.
         * @param {?} contents
         * @return {?}
         */
        NzCarouselBaseStrategy.prototype.withCarouselContents = /**
         * Initialize dragging sequences.
         * @param {?} contents
         * @return {?}
         */
            function (contents) {
                // TODO: carousel and its contents should be separated.
                /** @type {?} */
                var carousel = ( /** @type {?} */(this.carouselComponent));
                /** @type {?} */
                var rect = carousel.el.getBoundingClientRect();
                this.slickListEl = carousel.slickListEl;
                this.slickTrackEl = carousel.slickTrackEl;
                this.unitWidth = rect.width;
                this.unitHeight = rect.height;
                this.contents = contents ? contents.toArray() : [];
                this.length = this.contents.length;
            };
        /**
         * When user drag the carousel component.
         * @optional
         */
        /**
         * When user drag the carousel component.
         * \@optional
         * @param {?} _vector
         * @return {?}
         */
        NzCarouselBaseStrategy.prototype.dragging = /**
         * When user drag the carousel component.
         * \@optional
         * @param {?} _vector
         * @return {?}
         */
            function (_vector) { };
        /**
         * Destroy a scroll strategy.
         */
        /**
         * Destroy a scroll strategy.
         * @return {?}
         */
        NzCarouselBaseStrategy.prototype.dispose = /**
         * Destroy a scroll strategy.
         * @return {?}
         */
            function () { };
        /**
         * @protected
         * @param {?} f
         * @param {?} t
         * @return {?}
         */
        NzCarouselBaseStrategy.prototype.getFromToInBoundary = /**
         * @protected
         * @param {?} f
         * @param {?} t
         * @return {?}
         */
            function (f, t) {
                /** @type {?} */
                var length = this.maxIndex + 1;
                return { from: (f + length) % length, to: (t + length) % length };
            };
        return NzCarouselBaseStrategy;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzCarouselOpacityStrategy = /** @class */ (function (_super) {
        __extends(NzCarouselOpacityStrategy, _super);
        function NzCarouselOpacityStrategy() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} contents
         * @return {?}
         */
        NzCarouselOpacityStrategy.prototype.withCarouselContents = /**
         * @param {?} contents
         * @return {?}
         */
            function (contents) {
                var _this = this;
                _super.prototype.withCarouselContents.call(this, contents);
                if (this.contents) {
                    this.slickTrackEl.style.width = this.length * this.unitWidth + "px";
                    this.contents.forEach(( /**
                     * @param {?} content
                     * @param {?} i
                     * @return {?}
                     */function (content, i) {
                        _this.renderer.setStyle(content.el, 'opacity', ( /** @type {?} */(_this.carouselComponent)).activeIndex === i ? '1' : '0');
                        _this.renderer.setStyle(content.el, 'position', 'relative');
                        _this.renderer.setStyle(content.el, 'width', _this.unitWidth + "px");
                        _this.renderer.setStyle(content.el, 'left', -_this.unitWidth * i + "px");
                        _this.renderer.setStyle(content.el, 'transition', ['opacity 500ms ease 0s', 'visibility 500ms ease 0s']);
                    }));
                }
            };
        /**
         * @param {?} _f
         * @param {?} _t
         * @return {?}
         */
        NzCarouselOpacityStrategy.prototype.switch = /**
         * @param {?} _f
         * @param {?} _t
         * @return {?}
         */
            function (_f, _t) {
                var _this = this;
                var t = this.getFromToInBoundary(_f, _t).to;
                /** @type {?} */
                var complete$ = new rxjs.Subject();
                this.contents.forEach(( /**
                 * @param {?} content
                 * @param {?} i
                 * @return {?}
                 */function (content, i) {
                    _this.renderer.setStyle(content.el, 'opacity', t === i ? '1' : '0');
                }));
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    complete$.next();
                    complete$.complete();
                }), ( /** @type {?} */(this.carouselComponent)).nzTransitionSpeed);
                return complete$;
            };
        /**
         * @return {?}
         */
        NzCarouselOpacityStrategy.prototype.dispose = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.contents.forEach(( /**
                 * @param {?} content
                 * @return {?}
                 */function (content) {
                    _this.renderer.setStyle(content.el, 'transition', null);
                }));
                _super.prototype.dispose.call(this);
            };
        return NzCarouselOpacityStrategy;
    }(NzCarouselBaseStrategy));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzCarouselTransformStrategy = /** @class */ (function (_super) {
        __extends(NzCarouselTransformStrategy, _super);
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
             */ function () {
                return ( /** @type {?} */(this.carouselComponent)).nzVertical;
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
                var carousel = ( /** @type {?} */(this.carouselComponent));
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
                    this.contents.forEach(( /**
                     * @param {?} content
                     * @return {?}
                     */function (content) {
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
                var complete$ = new rxjs.Subject();
                this.renderer.setStyle(this.slickTrackEl, 'transition', 'transform 500ms ease');
                if (this.vertical) {
                    this.verticalTransform(_f, _t);
                }
                else {
                    this.horizontalTransform(_f, _t);
                }
                this.isTransitioning = true;
                this.isDragging = false;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.renderer.setStyle(_this.slickTrackEl, 'transition', null);
                    _this.contents.forEach(( /**
                     * @param {?} content
                     * @return {?}
                     */function (content) {
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
                }), ( /** @type {?} */(this.carouselComponent)).nzTransitionSpeed);
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
                var activeIndex = ( /** @type {?} */(this.carouselComponent)).activeIndex;
                if (( /** @type {?} */(this.carouselComponent)).nzVertical) {
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzCarouselComponent = /** @class */ (function () {
        function NzCarouselComponent(elementRef, document, // tslint:disable-line:no-any
        renderer, cdr, ngZone, platform$$1, customStrategies) {
            var _this = this;
            this.renderer = renderer;
            this.cdr = cdr;
            this.ngZone = ngZone;
            this.platform = platform$$1;
            this.customStrategies = customStrategies;
            this.nzEffect = 'scrollx';
            this.nzEnableSwipe = true;
            this.nzDots = true;
            this.nzVertical = false;
            this.nzAutoPlay = false;
            this.nzAutoPlaySpeed = 3000;
            this.nzTransitionSpeed = 500;
            this.nzBeforeChange = new core$1.EventEmitter();
            this.nzAfterChange = new core$1.EventEmitter();
            this.activeIndex = 0;
            this.destroy$ = new rxjs.Subject();
            this.gestureRect = null;
            this.pointerDelta = null;
            this.pointerPosition = null;
            this.isTransiting = false;
            this.isDragging = false;
            this.pointerDown = ( /**
             * @param {?} event
             * @return {?}
             */function (event) {
                if (!_this.isDragging && !_this.isTransiting && _this.nzEnableSwipe) {
                    /** @type {?} */
                    var point = core.isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
                    _this.isDragging = true;
                    _this.clearScheduledTransition();
                    _this.gestureRect = _this.slickListEl.getBoundingClientRect();
                    _this.pointerPosition = { x: point.clientX, y: point.clientY };
                    _this.document.addEventListener('mousemove', _this.pointerMove);
                    _this.document.addEventListener('touchmove', _this.pointerMove);
                    _this.document.addEventListener('mouseup', _this.pointerUp);
                    _this.document.addEventListener('touchend', _this.pointerUp);
                }
            });
            this.pointerMove = ( /**
             * @param {?} event
             * @return {?}
             */function (event) {
                if (_this.isDragging) {
                    /** @type {?} */
                    var point = core.isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
                    _this.pointerDelta = { x: point.clientX - ( /** @type {?} */(_this.pointerPosition)).x, y: point.clientY - ( /** @type {?} */(_this.pointerPosition)).y };
                    if (Math.abs(_this.pointerDelta.x) > 5) {
                        _this.strategy.dragging(_this.pointerDelta);
                    }
                }
            });
            this.pointerUp = ( /**
             * @return {?}
             */function () {
                if (_this.isDragging && _this.nzEnableSwipe) {
                    /** @type {?} */
                    var delta = _this.pointerDelta ? _this.pointerDelta.x : 0;
                    // Switch to another slide if delta is third of the width.
                    if (Math.abs(delta) > ( /** @type {?} */(_this.gestureRect)).width / 3) {
                        _this.goTo(delta > 0 ? _this.activeIndex - 1 : _this.activeIndex + 1);
                    }
                    else {
                        _this.goTo(_this.activeIndex);
                    }
                    _this.gestureRect = null;
                    _this.pointerDelta = null;
                    _this.isDragging = false;
                    _this.dispose();
                }
            });
            this.document = document;
            this.renderer.addClass(elementRef.nativeElement, 'ant-carousel');
            this.el = elementRef.nativeElement;
        }
        /**
         * @return {?}
         */
        NzCarouselComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                this.markContentActive(0);
            };
        /**
         * @return {?}
         */
        NzCarouselComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.platform.isBrowser) {
                    return;
                }
                this.slickListEl = this.slickList.nativeElement;
                this.slickTrackEl = this.slickTrack.nativeElement;
                this.carouselContents.changes.pipe(operators.takeUntil(this.destroy$)).subscribe(( /**
                 * @return {?}
                 */function () {
                    _this.markContentActive(0);
                    _this.syncStrategy();
                }));
                this.ngZone.runOutsideAngular(( /**
                 * @return {?}
                 */function () {
                    rxjs.fromEvent(window, 'resize')
                        .pipe(operators.takeUntil(_this.destroy$), operators.throttleTime(16))
                        .subscribe(( /**
                 * @return {?}
                 */function () {
                        _this.syncStrategy();
                    }));
                }));
                this.switchStrategy();
                this.markContentActive(0);
                this.syncStrategy();
                // If embedded in an entry component, it may do initial render at a inappropriate time.
                // ngZone.onStable won't do this trick
                Promise.resolve().then(( /**
                 * @return {?}
                 */function () {
                    _this.syncStrategy();
                }));
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzCarouselComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                var nzEffect = changes.nzEffect;
                if (nzEffect && !nzEffect.isFirstChange()) {
                    this.switchStrategy();
                    this.markContentActive(0);
                    this.syncStrategy();
                }
                if (!this.nzAutoPlay || !this.nzAutoPlaySpeed) {
                    this.clearScheduledTransition();
                }
                else {
                    this.scheduleNextTransition();
                }
            };
        /**
         * @return {?}
         */
        NzCarouselComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.clearScheduledTransition();
                if (this.strategy) {
                    this.strategy.dispose();
                }
                this.dispose();
                this.destroy$.next();
                this.destroy$.complete();
            };
        /**
         * @param {?} e
         * @return {?}
         */
        NzCarouselComponent.prototype.onKeyDown = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (e.keyCode === keycodes.LEFT_ARROW) {
                    e.preventDefault();
                    this.pre();
                }
                else if (e.keyCode === keycodes.RIGHT_ARROW) {
                    this.next();
                    e.preventDefault();
                }
            };
        /**
         * @return {?}
         */
        NzCarouselComponent.prototype.next = /**
         * @return {?}
         */
            function () {
                this.goTo(this.activeIndex + 1);
            };
        /**
         * @return {?}
         */
        NzCarouselComponent.prototype.pre = /**
         * @return {?}
         */
            function () {
                this.goTo(this.activeIndex - 1);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        NzCarouselComponent.prototype.goTo = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                var _this = this;
                if (this.carouselContents && this.carouselContents.length && !this.isTransiting) {
                    /** @type {?} */
                    var length_1 = this.carouselContents.length;
                    /** @type {?} */
                    var from = this.activeIndex;
                    /** @type {?} */
                    var to = (index + length_1) % length_1;
                    this.isTransiting = true;
                    this.nzBeforeChange.emit({ from: from, to: to });
                    this.strategy.switch(this.activeIndex, index).subscribe(( /**
                     * @return {?}
                     */function () {
                        _this.scheduleNextTransition();
                        _this.nzAfterChange.emit(index);
                        _this.isTransiting = false;
                    }));
                    this.markContentActive(to);
                    this.cdr.markForCheck();
                }
            };
        /**
         * @private
         * @return {?}
         */
        NzCarouselComponent.prototype.switchStrategy = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.strategy) {
                    this.strategy.dispose();
                }
                // Load custom strategies first.
                /** @type {?} */
                var customStrategy = this.customStrategies ? this.customStrategies.find(( /**
                 * @param {?} s
                 * @return {?}
                 */function (s) { return s.name === _this.nzEffect; })) : null;
                if (customStrategy) {
                    // tslint:disable-next-line:no-any
                    this.strategy = new (( /** @type {?} */(customStrategy.strategy)))(this, this.cdr, this.renderer);
                    return;
                }
                this.strategy =
                    this.nzEffect === 'scrollx'
                        ? new NzCarouselTransformStrategy(this, this.cdr, this.renderer)
                        : new NzCarouselOpacityStrategy(this, this.cdr, this.renderer);
            };
        /**
         * @private
         * @return {?}
         */
        NzCarouselComponent.prototype.scheduleNextTransition = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this.clearScheduledTransition();
                if (this.nzAutoPlay && this.nzAutoPlaySpeed > 0 && this.platform.isBrowser) {
                    this.transitionInProgress = setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this.goTo(_this.activeIndex + 1);
                    }), this.nzAutoPlaySpeed);
                }
            };
        /**
         * @private
         * @return {?}
         */
        NzCarouselComponent.prototype.clearScheduledTransition = /**
         * @private
         * @return {?}
         */
            function () {
                if (this.transitionInProgress) {
                    clearTimeout(this.transitionInProgress);
                    this.transitionInProgress = null;
                }
            };
        /**
         * @private
         * @param {?} index
         * @return {?}
         */
        NzCarouselComponent.prototype.markContentActive = /**
         * @private
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.activeIndex = index;
                if (this.carouselContents) {
                    this.carouselContents.forEach(( /**
                     * @param {?} slide
                     * @param {?} i
                     * @return {?}
                     */function (slide, i) {
                        slide.isActive = index === i;
                    }));
                }
                this.cdr.markForCheck();
            };
        /**
         * @private
         * @return {?}
         */
        NzCarouselComponent.prototype.syncStrategy = /**
         * @private
         * @return {?}
         */
            function () {
                if (this.strategy) {
                    this.strategy.withCarouselContents(this.carouselContents);
                }
            };
        /**
         * @private
         * @return {?}
         */
        NzCarouselComponent.prototype.dispose = /**
         * @private
         * @return {?}
         */
            function () {
                this.document.removeEventListener('mousemove', this.pointerMove);
                this.document.removeEventListener('touchmove', this.pointerMove);
                this.document.removeEventListener('touchend', this.pointerMove);
                this.document.removeEventListener('mouseup', this.pointerMove);
            };
        NzCarouselComponent.decorators = [
            { type: core$1.Component, args: [{
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        encapsulation: core$1.ViewEncapsulation.None,
                        selector: 'nz-carousel',
                        exportAs: 'nzCarousel',
                        preserveWhitespaces: false,
                        template: "<div class=\"slick-initialized slick-slider\" [class.slick-vertical]=\"nzVertical\">\r\n  <div\r\n    #slickList\r\n    class=\"slick-list\"\r\n    tabindex=\"-1\"\r\n    (keydown)=\"onKeyDown($event)\"\r\n    (mousedown)=\"pointerDown($event)\"\r\n    (touchstart)=\"pointerDown($event)\"\r\n  >\r\n    <!-- Render carousel items. -->\r\n    <div class=\"slick-track\" #slickTrack>\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n  <!-- Render dots. -->\r\n  <ul class=\"slick-dots\" *ngIf=\"nzDots\">\r\n    <li\r\n      *ngFor=\"let content of carouselContents; let i = index\"\r\n      [class.slick-active]=\"content.isActive\"\r\n      (click)=\"goTo(i)\"\r\n    >\r\n      <ng-template [ngTemplateOutlet]=\"nzDotRender || renderDotTemplate\" [ngTemplateOutletContext]=\"{ $implicit: i }\">\r\n      </ng-template>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n<ng-template #renderDotTemplate let-index>\r\n  <button>{{ index + 1 }}</button>\r\n</ng-template>\r\n",
                        host: {
                            '[class.ant-carousel-vertical]': 'nzVertical'
                        },
                        styles: ["\n      nz-carousel {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      .slick-dots {\n        display: block;\n      }\n\n      .slick-track {\n        opacity: 1;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzCarouselComponent.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: undefined, decorators: [{ type: core$1.Inject, args: [common.DOCUMENT,] }] },
                { type: core$1.Renderer2 },
                { type: core$1.ChangeDetectorRef },
                { type: core$1.NgZone },
                { type: platform.Platform },
                { type: Array, decorators: [{ type: core$1.Optional }, { type: core$1.Inject, args: [NZ_CAROUSEL_CUSTOM_STRATEGIES,] }] }
            ];
        };
        NzCarouselComponent.propDecorators = {
            carouselContents: [{ type: core$1.ContentChildren, args: [NzCarouselContentDirective,] }],
            slickList: [{ type: core$1.ViewChild, args: ['slickList',] }],
            slickTrack: [{ type: core$1.ViewChild, args: ['slickTrack',] }],
            nzDotRender: [{ type: core$1.Input }],
            nzEffect: [{ type: core$1.Input }],
            nzEnableSwipe: [{ type: core$1.Input }],
            nzDots: [{ type: core$1.Input }],
            nzVertical: [{ type: core$1.Input }],
            nzAutoPlay: [{ type: core$1.Input }],
            nzAutoPlaySpeed: [{ type: core$1.Input }],
            nzTransitionSpeed: [{ type: core$1.Input }],
            nzBeforeChange: [{ type: core$1.Output }],
            nzAfterChange: [{ type: core$1.Output }]
        };
        __decorate([
            core.InputBoolean(),
            __metadata("design:type", Object)
        ], NzCarouselComponent.prototype, "nzEnableSwipe", void 0);
        __decorate([
            core.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzCarouselComponent.prototype, "nzDots", void 0);
        __decorate([
            core.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzCarouselComponent.prototype, "nzVertical", void 0);
        __decorate([
            core.InputBoolean(),
            __metadata("design:type", Object)
        ], NzCarouselComponent.prototype, "nzAutoPlay", void 0);
        __decorate([
            core.InputNumber(),
            __metadata("design:type", Object)
        ], NzCarouselComponent.prototype, "nzAutoPlaySpeed", void 0);
        __decorate([
            core.InputNumber(),
            __metadata("design:type", Object)
        ], NzCarouselComponent.prototype, "nzTransitionSpeed", void 0);
        return NzCarouselComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzCarouselModule = /** @class */ (function () {
        function NzCarouselModule() {
        }
        NzCarouselModule.decorators = [
            { type: core$1.NgModule, args: [{
                        declarations: [NzCarouselComponent, NzCarouselContentDirective],
                        exports: [NzCarouselComponent, NzCarouselContentDirective],
                        imports: [common.CommonModule]
                    },] }
        ];
        return NzCarouselModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NzCarouselModule = NzCarouselModule;
    exports.NzCarouselComponent = NzCarouselComponent;
    exports.NzCarouselContentDirective = NzCarouselContentDirective;
    exports.NZ_CAROUSEL_CUSTOM_STRATEGIES = NZ_CAROUSEL_CUSTOM_STRATEGIES;
    exports.NzCarouselBaseStrategy = NzCarouselBaseStrategy;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-carousel.umd.js.map