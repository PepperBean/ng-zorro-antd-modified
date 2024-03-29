(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser/animations'), require('@angular/cdk/observers'), require('@angular/common'), require('@angular/core'), require('ng-zorro-antd/core'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/button', ['exports', '@angular/platform-browser/animations', '@angular/cdk/observers', '@angular/common', '@angular/core', 'ng-zorro-antd/core', 'ng-zorro-antd/icon'], factory) :
    (factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].button = {}),global.ng.platformBrowser.animations,global.ng.cdk.observers,global.ng.common,global.ng.core,global['ng-zorro-antd'].core,global['ng-zorro-antd'].icon));
}(this, (function (exports,animations,observers,common,core,core$1,icon) { 'use strict';

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
    var NzButtonComponent = /** @class */ (function () {
        function NzButtonComponent(elementRef, cdr, renderer, nzUpdateHostClassService, ngZone, waveConfig, animationType) {
            this.elementRef = elementRef;
            this.cdr = cdr;
            this.renderer = renderer;
            this.nzUpdateHostClassService = nzUpdateHostClassService;
            this.ngZone = ngZone;
            this.waveConfig = waveConfig;
            this.animationType = animationType;
            this.el = this.elementRef.nativeElement;
            this.iconOnly = false;
            this.nzWave = new core$1.NzWaveDirective(this.ngZone, this.elementRef, this.waveConfig, this.animationType);
            this.nzBlock = false;
            this.nzGhost = false;
            this.nzSearch = false;
            this.nzLoading = false;
            this.nzType = 'default';
            this.nzShape = null;
            this.nzSize = 'default';
            this.renderer.addClass(elementRef.nativeElement, 'ant-btn');
        }
        /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289 */
        /**
         * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
         * @return {?}
         */
        NzButtonComponent.prototype.setClassMap = /**
         * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
         * @return {?}
         */
            function () {
                var _a;
                /** @type {?} */
                var prefixCls = 'ant-btn';
                /** @type {?} */
                var sizeMap = { large: 'lg', small: 'sm' };
                this.nzUpdateHostClassService.updateHostClass(this.el, (_a = {},
                    _a[prefixCls + "-" + this.nzType] = this.nzType,
                    _a[prefixCls + "-" + this.nzShape] = this.nzShape,
                    _a[prefixCls + "-" + sizeMap[this.nzSize]] = sizeMap[this.nzSize],
                    _a[prefixCls + "-loading"] = this.nzLoading,
                    _a[prefixCls + "-icon-only"] = this.iconOnly,
                    _a[prefixCls + "-background-ghost"] = this.nzGhost,
                    _a[prefixCls + "-block"] = this.nzBlock,
                    _a["ant-input-search-button"] = this.nzSearch,
                    _a));
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NzButtonComponent.prototype.updateIconDisplay = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.iconElement) {
                    this.renderer.setStyle(this.iconElement, 'display', value ? 'none' : 'inline-block');
                }
            };
        /**
         * @return {?}
         */
        NzButtonComponent.prototype.checkContent = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var hasIcon = this.listOfIconElement && this.listOfIconElement.length;
                if (hasIcon) {
                    this.moveIcon();
                }
                this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
                /** https://github.com/angular/angular/issues/12530 **/
                if (core$1.isEmpty(this.contentElement.nativeElement)) {
                    this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
                    this.iconOnly = !!hasIcon;
                }
                else {
                    this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
                    this.iconOnly = false;
                }
                this.setClassMap();
                this.updateIconDisplay(this.nzLoading);
                this.cdr.detectChanges();
            };
        /**
         * @return {?}
         */
        NzButtonComponent.prototype.moveIcon = /**
         * @return {?}
         */
            function () {
                if (this.listOfIconElement && this.listOfIconElement.length) {
                    /** @type {?} */
                    var firstChildElement = core$1.findFirstNotEmptyNode(this.contentElement.nativeElement);
                    /** @type {?} */
                    var lastChildElement = core$1.findLastNotEmptyNode(this.contentElement.nativeElement);
                    if (firstChildElement && firstChildElement === this.listOfIconElement.first.nativeElement) {
                        this.renderer.insertBefore(this.el, firstChildElement, this.contentElement.nativeElement);
                        this.iconElement = ( /** @type {?} */(firstChildElement));
                    }
                    else if (lastChildElement && lastChildElement === this.listOfIconElement.last.nativeElement) {
                        this.renderer.appendChild(this.el, lastChildElement);
                    }
                }
            };
        /**
         * @return {?}
         */
        NzButtonComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                this.checkContent();
            };
        /**
         * @return {?}
         */
        NzButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.setClassMap();
                this.nzWave.ngOnInit();
            };
        /**
         * @return {?}
         */
        NzButtonComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.nzWave.ngOnDestroy();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzButtonComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.nzBlock ||
                    changes.nzGhost ||
                    changes.nzSearch ||
                    changes.nzType ||
                    changes.nzShape ||
                    changes.nzSize ||
                    changes.nzLoading) {
                    this.setClassMap();
                }
                if (changes.nzLoading) {
                    this.updateIconDisplay(this.nzLoading);
                }
            };
        NzButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: '[nz-button]',
                        exportAs: 'nzButton',
                        providers: [core$1.NzUpdateHostClassService],
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        template: "<i nz-icon type=\"loading\" *ngIf=\"nzLoading\"></i>\r\n<span (cdkObserveContent)=\"checkContent()\" #contentElement><ng-content></ng-content></span>"
                    }] }
        ];
        /** @nocollapse */
        NzButtonComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.ChangeDetectorRef },
                { type: core.Renderer2 },
                { type: core$1.NzUpdateHostClassService },
                { type: core.NgZone },
                { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core$1.NZ_WAVE_GLOBAL_CONFIG,] }] },
                { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [animations.ANIMATION_MODULE_TYPE,] }] }
            ];
        };
        NzButtonComponent.propDecorators = {
            contentElement: [{ type: core.ViewChild, args: ['contentElement',] }],
            listOfIconElement: [{ type: core.ContentChildren, args: [icon.NzIconDirective, { read: core.ElementRef },] }],
            nzWave: [{ type: core.HostBinding, args: ['attr.nz-wave',] }],
            nzBlock: [{ type: core.Input }],
            nzGhost: [{ type: core.Input }],
            nzSearch: [{ type: core.Input }],
            nzLoading: [{ type: core.Input }],
            nzType: [{ type: core.Input }],
            nzShape: [{ type: core.Input }],
            nzSize: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzButtonComponent.prototype, "nzBlock", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzButtonComponent.prototype, "nzGhost", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzButtonComponent.prototype, "nzSearch", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzButtonComponent.prototype, "nzLoading", void 0);
        return NzButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzButtonGroupComponent = /** @class */ (function () {
        function NzButtonGroupComponent(nzUpdateHostClassService, elementRef) {
            this.nzUpdateHostClassService = nzUpdateHostClassService;
            this.elementRef = elementRef;
            this.prefixCls = 'ant-btn-group';
        }
        Object.defineProperty(NzButtonGroupComponent.prototype, "nzSize", {
            get: /**
             * @return {?}
             */ function () {
                return this._size;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._size = value;
                this.setClassMap();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzButtonGroupComponent.prototype.setClassMap = /**
         * @return {?}
         */
            function () {
                var _a;
                /** @type {?} */
                var classMap = (_a = {},
                    _a[this.prefixCls] = true,
                    _a[this.prefixCls + "-lg"] = this.nzSize === 'large',
                    _a[this.prefixCls + "-sm"] = this.nzSize === 'small',
                    _a);
                this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, classMap);
            };
        /**
         * @return {?}
         */
        NzButtonGroupComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.setClassMap();
            };
        NzButtonGroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-button-group',
                        exportAs: 'nzButtonGroup',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        preserveWhitespaces: false,
                        providers: [core$1.NzUpdateHostClassService],
                        template: "<ng-content></ng-content>\r\n"
                    }] }
        ];
        /** @nocollapse */
        NzButtonGroupComponent.ctorParameters = function () {
            return [
                { type: core$1.NzUpdateHostClassService },
                { type: core.ElementRef }
            ];
        };
        NzButtonGroupComponent.propDecorators = {
            nzSize: [{ type: core.Input }]
        };
        return NzButtonGroupComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzButtonModule = /** @class */ (function () {
        function NzButtonModule() {
        }
        NzButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NzButtonComponent, NzButtonGroupComponent],
                        exports: [NzButtonComponent, NzButtonGroupComponent],
                        imports: [common.CommonModule, observers.ObserversModule, core$1.NzWaveModule, icon.NzIconModule]
                    },] }
        ];
        return NzButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NzButtonComponent = NzButtonComponent;
    exports.NzButtonGroupComponent = NzButtonGroupComponent;
    exports.NzButtonModule = NzButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-button.umd.js.map